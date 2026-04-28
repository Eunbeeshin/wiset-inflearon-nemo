import requests
import sqlite3
import os
import json
import time

def scrape_nemo():
    # 1) 기본 설정
    url = "https://www.nemoapp.kr/api/store/search-list"
    base_params = {
        "Subway": "222",
        "Radius": "1000",
        "CompletedOnly": "false",
        "NELat": "37.50350768785124",
        "NELng": "127.03478799435649",
        "SWLat": "37.49248261930622",
        "SWLng": "127.0210325611153",
        "Zoom": "15",
        "SortBy": "29"
    }
    
    headers = {
        "referer": "https://www.nemoapp.kr/store",
        "sec-ch-ua": '"Microsoft Edge";v="147", "Not.A/Brand";v="8", "Chromium";v="147"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36 Edg/147.0.0.0"
    }

    print("전체 데이터 수집을 시작합니다...")
    
    # 2) SQLite DB 초기화
    if not os.path.exists("data"):
        os.makedirs("data")
    db_path = os.path.join("data", "nemo_data.db")
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    
    # 기존 테이블 삭제 후 새로 생성
    table_created = False
    
    all_collected_count = 0
    page_index = 1

    while True:
        print(f"현재 수집 중인 페이지: {page_index}...")
        
        # 페이지 인덱스 업데이트
        params = base_params.copy()
        params["PageIndex"] = str(page_index)
        
        try:
            response = requests.get(url, params=params, headers=headers, timeout=15)
            response.raise_for_status()
            data = response.json()
        except Exception as e:
            print(f"페이지 {page_index} 수집 중 오류 발생: {e}")
            break

        items = data.get("items", [])
        if not items:
            print("더 이상 수집할 데이터가 없습니다. 수집을 종료합니다.")
            break

        # 테이블 스키마 생성 (첫 페이지에서 수행)
        if not table_created:
            first_item = items[0]
            columns = [f"[{key}] TEXT" for key in first_item.keys()]
            cursor.execute("DROP TABLE IF EXISTS nemo_stores")
            cursor.execute(f"CREATE TABLE nemo_stores ({', '.join(columns)})")
            table_created = True
            keys = list(first_item.keys())
            insert_sql = f"INSERT INTO nemo_stores ({', '.join([f'[{k}]' for k in keys])}) VALUES ({', '.join(['?' for _ in keys])})"

        # 데이터 삽입
        for item in items:
            values = []
            for k in keys:
                val = item.get(k)
                if isinstance(val, (dict, list)):
                    values.append(json.dumps(val, ensure_ascii=False))
                else:
                    values.append(str(val) if val is not None else None)
            cursor.execute(insert_sql, values)
        
        conn.commit()
        all_collected_count += len(items)
        print(f"페이지 {page_index}: {len(items)}개 추가 수집 완료 (누적: {all_collected_count}개)")

        # 다음 페이지로
        page_index += 1
        
        # 과도한 요청 방지를 위한 대기
        time.sleep(1)

    conn.close()
    print(f"최종 수집 완료! 총 {all_collected_count}개의 데이터가 {db_path}에 저장되었습니다.")

if __name__ == "__main__":
    scrape_nemo()
