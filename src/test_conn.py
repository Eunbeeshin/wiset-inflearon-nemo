import requests
print("Requests imported")
try:
    r = requests.get("https://www.google.com", timeout=5)
    print(f"Status: {r.status_code}")
except Exception as e:
    print(f"Error: {e}")
