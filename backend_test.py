#!/usr/bin/env python3
"""
Backend API Testing for Rust Valley 85's FastAPI backend
Tests all endpoints according to the review request specifications
"""

import requests
import jwt
import json
import os
from datetime import datetime, timezone
from pymongo import MongoClient
from dotenv import load_dotenv
from pathlib import Path

# Load environment variables
backend_env_path = Path('/app/backend/.env')
frontend_env_path = Path('/app/frontend/.env')

# Load backend env for JWT_SECRET and MongoDB config
load_dotenv(backend_env_path)
JWT_SECRET = os.environ.get('JWT_SECRET', 'rust_valley_85s_secret_change_me_in_prod')
MONGO_URL = os.environ.get('MONGO_URL', 'mongodb://localhost:27017')
DB_NAME = os.environ.get('DB_NAME', 'test_database')

# Load frontend env for backend URL
load_dotenv(frontend_env_path)
BACKEND_URL = os.environ.get('REACT_APP_BACKEND_URL', 'https://rust-85-center.preview.emergentagent.com')

print(f"Testing backend at: {BACKEND_URL}")
print(f"Using JWT_SECRET: {JWT_SECRET[:10]}...")
print(f"MongoDB URL: {MONGO_URL}")
print(f"Database: {DB_NAME}")
print("=" * 80)

def test_endpoint(test_name, method, url, headers=None, json_data=None, expected_status=200, allow_redirects=True):
    """Helper function to test an endpoint and return results"""
    print(f"\n🧪 Testing: {test_name}")
    print(f"   {method} {url}")
    
    try:
        if method.upper() == 'GET':
            response = requests.get(url, headers=headers, allow_redirects=allow_redirects, timeout=10)
        elif method.upper() == 'POST':
            response = requests.post(url, headers=headers, json=json_data, allow_redirects=allow_redirects, timeout=10)
        else:
            print(f"   ❌ FAIL: Unsupported method {method}")
            return False, None
            
        print(f"   Status: {response.status_code}")
        
        if response.status_code == expected_status:
            print(f"   ✅ PASS: Expected status {expected_status}")
            try:
                response_json = response.json()
                print(f"   Response: {json.dumps(response_json, indent=2)}")
                return True, response
            except:
                print(f"   Response (non-JSON): {response.text[:200]}")
                return True, response
        else:
            print(f"   ❌ FAIL: Expected {expected_status}, got {response.status_code}")
            print(f"   Response: {response.text[:200]}")
            return False, response
            
    except Exception as e:
        print(f"   ❌ FAIL: Exception occurred: {str(e)}")
        return False, None

def create_test_jwt():
    """Create a test JWT token with the required payload"""
    payload = {
        'id': 'test_user_123',
        'username': 'tester',
        'global_name': 'Tester',
        'discriminator': '0',
        'avatar': None,
        'iat': int(datetime.now(timezone.utc).timestamp())
    }
    
    token = jwt.encode(payload, JWT_SECRET, algorithm='HS256')
    print(f"\n🔑 Generated test JWT token")
    print(f"   Payload: {json.dumps(payload, indent=2)}")
    return token

def check_mongodb_persistence():
    """Check if documents were saved to MongoDB"""
    print(f"\n🗄️  Checking MongoDB persistence")
    try:
        client = MongoClient(MONGO_URL)
        db = client[DB_NAME]
        
        # Check drafts collection
        drafts_count = db.drafts.count_documents({'user_id': 'test_user_123'})
        print(f"   Drafts for test_user_123: {drafts_count}")
        
        # Check submissions collection
        submissions_count = db.submissions.count_documents({'user_id': 'test_user_123'})
        print(f"   Submissions for test_user_123: {submissions_count}")
        
        if drafts_count > 0 and submissions_count > 0:
            print(f"   ✅ PASS: Documents found in both collections")
            
            # Show some sample data
            draft = db.drafts.find_one({'user_id': 'test_user_123'})
            if draft:
                print(f"   Sample draft: {json.dumps({k: v for k, v in draft.items() if k != '_id'}, indent=2)}")
                
            submission = db.submissions.find_one({'user_id': 'test_user_123'})
            if submission:
                print(f"   Sample submission: {json.dumps({k: v for k, v in submission.items() if k != '_id'}, indent=2)}")
            
            return True
        else:
            print(f"   ❌ FAIL: Missing documents (drafts: {drafts_count}, submissions: {submissions_count})")
            return False
            
    except Exception as e:
        print(f"   ❌ FAIL: MongoDB connection error: {str(e)}")
        return False

def main():
    """Run all backend tests"""
    results = []
    
    # Test 1: GET /api/ → 200 JSON with message
    success, response = test_endpoint(
        "Root API endpoint",
        "GET",
        f"{BACKEND_URL}/api/",
        expected_status=200
    )
    results.append(("GET /api/", success))
    
    # Test 2: GET /api/auth/discord/login → 302 redirect to discord.com
    success, response = test_endpoint(
        "Discord login redirect",
        "GET", 
        f"{BACKEND_URL}/api/auth/discord/login",
        expected_status=302,
        allow_redirects=False
    )
    
    if success and response:
        location = response.headers.get('Location', '')
        print(f"   Location header: {location}")
        
        # Check if redirect URL contains required parameters
        required_checks = [
            ('https://discord.com/api/oauth2/authorize', 'Discord OAuth URL'),
            ('client_id=1496550068226887821', 'Correct client_id'),
            ('response_type=code', 'Response type code'),
            ('scope=identify', 'Scope identify')
        ]
        
        all_checks_passed = True
        for check, description in required_checks:
            if check in location:
                print(f"   ✅ {description}: Found")
            else:
                print(f"   ❌ {description}: Missing")
                all_checks_passed = False
        
        success = all_checks_passed
    
    results.append(("GET /api/auth/discord/login", success))
    
    # Test 3: GET /api/auth/me without Authorization → 401
    success, response = test_endpoint(
        "Auth me without token",
        "GET",
        f"{BACKEND_URL}/api/auth/me",
        expected_status=401
    )
    results.append(("GET /api/auth/me (no auth)", success))
    
    # Test 4: POST /api/drafts without auth → 401
    success, response = test_endpoint(
        "Save draft without auth",
        "POST",
        f"{BACKEND_URL}/api/drafts",
        json_data={"kind": "character", "data": {"test": "data"}},
        expected_status=401
    )
    results.append(("POST /api/drafts (no auth)", success))
    
    # Test 5: GET /api/drafts/character without auth → 401
    success, response = test_endpoint(
        "Get character draft without auth",
        "GET",
        f"{BACKEND_URL}/api/drafts/character",
        expected_status=401
    )
    results.append(("GET /api/drafts/character (no auth)", success))
    
    # Test 6: POST /api/submit/character without auth → 401
    success, response = test_endpoint(
        "Submit character without auth",
        "POST",
        f"{BACKEND_URL}/api/submit/character",
        json_data={"data": {"fullName": "Test"}},
        expected_status=401
    )
    results.append(("POST /api/submit/character (no auth)", success))
    
    # Generate test JWT for authenticated tests
    test_jwt = create_test_jwt()
    auth_headers = {"Authorization": f"Bearer {test_jwt}"}
    
    # Test 7a: GET /api/auth/me with JWT → 200 with user data
    success, response = test_endpoint(
        "Auth me with valid JWT",
        "GET",
        f"{BACKEND_URL}/api/auth/me",
        headers=auth_headers,
        expected_status=200
    )
    
    if success and response:
        try:
            data = response.json()
            user = data.get('user', {})
            if user.get('id') == 'test_user_123':
                print(f"   ✅ User ID matches: {user.get('id')}")
            else:
                print(f"   ❌ User ID mismatch: expected 'test_user_123', got '{user.get('id')}'")
                success = False
        except:
            success = False
    
    results.append(("GET /api/auth/me (with auth)", success))
    
    # Test 7b: POST /api/drafts with auth → 200 {ok: true}
    draft_data = {
        "kind": "character",
        "data": {
            "fullName": "Test Name",
            "birthDate": "1960-01-01"
        }
    }
    
    success, response = test_endpoint(
        "Save character draft with auth",
        "POST",
        f"{BACKEND_URL}/api/drafts",
        headers=auth_headers,
        json_data=draft_data,
        expected_status=200
    )
    results.append(("POST /api/drafts (with auth)", success))
    
    # Test 7c: GET /api/drafts/character with auth → 200 returning same data
    success, response = test_endpoint(
        "Get character draft with auth",
        "GET",
        f"{BACKEND_URL}/api/drafts/character",
        headers=auth_headers,
        expected_status=200
    )
    
    if success and response:
        try:
            data = response.json()
            returned_data = data.get('data', {})
            expected_data = draft_data['data']
            
            if returned_data.get('fullName') == expected_data.get('fullName'):
                print(f"   ✅ Draft data matches")
            else:
                print(f"   ❌ Draft data mismatch")
                success = False
        except:
            success = False
    
    results.append(("GET /api/drafts/character (with auth)", success))
    
    # Test 7d: POST /api/submit/background with auth
    background_data = {
        "charName": "Test Character",
        "playerName": "tester",
        "discordTag": "tester#0",
        "age": "27",
        "story": "Breve storia di prova per test automatico. Il personaggio viene da Detroit.",
        "motivation": "Cerca una nuova vita"
    }
    
    success, response = test_endpoint(
        "Submit background with auth",
        "POST",
        f"{BACKEND_URL}/api/submit/background",
        headers=auth_headers,
        json_data=background_data,
        expected_status=200
    )
    
    if success and response:
        try:
            data = response.json()
            if data.get('ok') and data.get('submission_id'):
                print(f"   ✅ Background submitted successfully")
                print(f"   Submission ID: {data.get('submission_id')}")
                print(f"   Webhook sent: {data.get('webhook_sent')}")
            else:
                print(f"   ❌ Missing required response fields")
                success = False
        except:
            success = False
    
    results.append(("POST /api/submit/background (with auth)", success))
    
    # Test 7e: POST /api/submit/character with auth
    character_data = {
        "data": {
            "fullName": "Test Char",
            "birthDate": "1960-01-01",
            "childhood": "Infanzia test",
            "adulthood": "Adulta test",
            "arrival": "Arrivo test"
        }
    }
    
    success, response = test_endpoint(
        "Submit character with auth",
        "POST",
        f"{BACKEND_URL}/api/submit/character",
        headers=auth_headers,
        json_data=character_data,
        expected_status=200
    )
    
    if success and response:
        try:
            data = response.json()
            if data.get('ok') and data.get('submission_id'):
                print(f"   ✅ Character submitted successfully")
                print(f"   Submission ID: {data.get('submission_id')}")
                print(f"   Webhook sent: {data.get('webhook_sent')}")
            else:
                print(f"   ❌ Missing required response fields")
                success = False
        except:
            success = False
    
    results.append(("POST /api/submit/character (with auth)", success))
    
    # Test 8: Check MongoDB persistence
    mongo_success = check_mongodb_persistence()
    results.append(("MongoDB persistence", mongo_success))
    
    # Summary
    print("\n" + "=" * 80)
    print("🏁 TEST SUMMARY")
    print("=" * 80)
    
    passed = 0
    total = len(results)
    
    for test_name, success in results:
        status = "✅ PASS" if success else "❌ FAIL"
        print(f"{status}: {test_name}")
        if success:
            passed += 1
    
    print(f"\nResults: {passed}/{total} tests passed")
    
    if passed == total:
        print("🎉 All tests passed!")
        return True
    else:
        print(f"⚠️  {total - passed} tests failed")
        return False

if __name__ == "__main__":
    main()