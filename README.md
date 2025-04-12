# Hacknarok2025
⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️

Our Solution for Hacknarok Hackaton 2025 Edition

## Features
- User authentication with mObywatel integration
- Personal cabinet with user profile and discussion history
- Real-time forum discussions
- Moderation system
- Transparency and archiving
- Location-based ranking system
- Profanity filtering
- Verified public figure system (blue mark)

## Setup

1. Clone the repository
2. Install dependencies:
```bash
# Backend
cd backend
npm install

# Frontend
cd frontend
npm install
```

3. Create a `.env` file in the backend directory:
```
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=3000
```

4. Start the servers:
```bash
# Backend
cd backend
npm start

# Frontend
cd frontend
npm start
```

## Mock Credentials

For testing purposes, you can use these mock credentials:

### Regular User
```
Username: jan.kowalski
Password: Test123!
```

Mock mObywatel data:
- PESEL: 12345678901
- Name: Jan Kowalski
- City: Warsaw
- District: Mokotow
- Address: ul. Przykładowa 1
- Postal Code: 00-001

### Public Figure (Blue Mark)
```
Username: anna.nowak
Password: Test123!
```

Mock mObywatel data:
- PESEL: 98765432109
- Name: Anna Nowak
- City: Krakow
- District: Stare Miasto
- Address: ul. Testowa 2
- Postal Code: 31-001

## API Endpoints

### Authentication
- POST `/api/auth/login` - Login with username and password

### Personal Cabinet
- GET `/api/cabinet/profile` - Get user profile with mObywatel data
- GET `/api/cabinet/discussions` - Get user's discussion history

### Forum
- GET `/api/topics` - Get all discussion topics
- POST `/api/topics` - Create new topic
- GET `/api/posts` - Get posts for a topic
- POST `/api/posts` - Create new post

## Security Features
- JWT-based authentication
- Password hashing with bcrypt
- mObywatel verification
- Protected routes
- Input validation
- XSS protection

## Development Notes
- The mObywatel integration is currently mocked for development purposes
- User verification is simulated
- Public figure status is managed by administrators
- All sensitive data is handled securely

# Pomysł aplikacji webowej (mobilnej?)
Aplikacja użytku społecznego, do debat. 
Ważne i kluczowe aspkety:
- brak anonimowości
- dyskusje i wysoka regulacja przez administratorów dyskusji
- skierowana do organizacji rządowych
- ważna transprentność
- archiwizacja
- ranking na podstawie ilości osób / postów oraz miejsca zamieszkania / zameldowania związane z lokalizacją.
- moderacja brzydkich słów.

Do przeddyskutowania:
- nicki zamiast imion i nazwisk
- osoby potwierdzone jako osoby publiczne (bluemark)


Zgłaszanie tematów/problemów 
Weryfikacja Tożsamości 
