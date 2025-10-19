# AI Mock Interview Platform

An end-to-end mock interview and assessment platform that combines a FastAPI backend with a React frontend. It lets learners generate tailored mock tests, simulate live technical interviews, and receive AI-powered feedback backed by Google Gemini. MongoDB stores user accounts and JWT-secured sessions, while the browser UI offers chat-like guidance, dashboards, and optional voice interaction.

## Repository Layout

- `Ai/`: FastAPI service that manages authentication, question generation, answer evaluation, and persistence.
- `newmyapp/`: React single-page application that drives onboarding, test-taking, interview simulations, and visual feedback.
- `java-backend/`: Placeholder module (currently empty) reserved for future Java integrations.

## Core Features

- AI-generated mock tests customized by subject, purpose, difficulty, and time limit.
- Conversational onboarding that walks users from intent capture to test execution and analysis.
- Voice-enabled interview simulator with timed prompts, speech synthesis, and speech-to-text capture.
- Real-time performance dashboards, detailed feedback, and improvement recommendations.
- Secure signup/login workflows with hashed passwords and JWT authentication.
- MongoDB persistence with unique email enforcement and reusable connection pooling.

## Technology Stack

- **Frontend:** React 19, React Router, Tailwind CSS, Framer Motion, Azure Communication UI components, Web Speech APIs.
- **Backend:** FastAPI, Uvicorn, Pydantic, Motor (MongoDB async driver), Passlib, python-jose.
- **AI Services:** Google Gemini `gemini-2.0-flash` model for generating questions and qualitative feedback.
- **Database:** MongoDB Atlas or self-hosted MongoDB instance.

## Prerequisites

- Node.js 18+ and npm 9+ (for the React client).
- Python 3.10+ (for FastAPI service) with a virtual environment tool such as `venv` or `conda`.
- Access to a MongoDB database.
- A Google Gemini API key (see [Google AI Studio](https://ai.google.dev/)).

## Backend Setup (`Ai/`)

```bash
cd Ai
python -m venv venv
.\venv\Scripts\activate  # Windows PowerShell
pip install -r requirements.txt
```

Create an `.env` file (or update the provided sample) with secure values:

```dotenv
GEMINI_API_KEY=<your-google-gemini-api-key>
MONGODB_URI=<mongodb-connection-string>
MONGODB_DB=ai_mock_interview
JWT_SECRET_KEY=<long-random-secret>
ACCESS_TOKEN_EXPIRE_MINUTES=60
```

Run the API locally:

```bash
uvicorn main:app --reload --port 8000
```

Key endpoints:

| Method | Path                               | Description                                  |
| ------ | ---------------------------------- | -------------------------------------------- |
| GET    | `/`                                | Health probe for the FastAPI service.        |
| POST   | `/api/auth/signup`                 | Register a new user; returns JWT and profile |
| POST   | `/api/auth/login`                  | Authenticate user credentials                |
| POST   | `/api/generate-test`               | Generate a personalized mock test            |
| POST   | `/api/submit-answers`              | Score answers and produce AI feedback        |
| GET    | `/api/test`                        | Lightweight API sanity check                 |
| POST   | `/api/interview/generate-questions`| Produce role-specific interview questions    |
| POST   | `/api/interview/evaluate-answer`   | Evaluate a single interview answer           |
| GET    | `/api/interview/health`            | Interview module status                      |

> **Security note:** Do not commit `.env` files or plaintext credentials. Rotate the default API keys baked into source files before deploying.

## Frontend Setup (`newmyapp/`)

```bash
cd newmyapp
npm install
```

Create `newmyapp/.env` to point at the API gateway:

```dotenv
REACT_APP_API_BASE_URL=http://localhost:8000/api
```

Start the development server:

```bash
npm start
```

The app runs on `http://localhost:3000` by default and will proxy API calls to the backend.

### Frontend Highlights

- **Welcome & Auth:** Animated landing page, custom login/signup flows, and persistent JWT storage.
- **Mock Test Dashboard:** Dynamic gradients, AI chat panel, test timeline, and parameter-driven test sessions.
- **Results Reporting:** Score breakdowns, qualitative feedback, and restart loops to keep iterating.
- **Interview Studio:** Role selector, optional job description context, adjustable difficulty, and live voice guidance with browser speech APIs.

## Development Tips

- Adjust `API_BASE_URL` in `newmyapp/src/services/api.js` or via environment variables when targeting hosted environments.
- The FastAPI service auto-creates a unique index on `users.email`. Ensure your MongoDB user has permissions to manage indexes.
- Replace placeholder Gemini API keys embedded in the routers with environment references before production.
- Consider adding rate limiting and request validation (e.g., `fastapi-limiter`) if exposing the API publicly.

## Testing

- React components ship with `react-scripts test`; run `npm test` for unit coverage.
- FastAPI endpoints can be exercised with tools such as `pytest` + `httpx` or `curl`/`HTTPie`. Add test fixtures for MongoDB with a test database or mocked Motor client.

## Deployment Notes

- Package the backend with Uvicorn/Gunicorn and serve behind a reverse proxy (e.g., Nginx) with HTTPS termination.
- For the frontend, run `npm run build` and host the static output on services like Vercel, Netlify, or any CDN-backed host.
- Configure environment variables in your hosting provider — never hard-code secrets in the codebase.

## Roadmap Ideas

- Add role-based permissions for administrators and coaches.
- Introduce analytics for answer difficulty trends and cohort insights.
- Store AI-generated interview transcripts for later review.
- Implement end-to-end tests that stitch together the React flows and API.

## License

Specify a license (e.g., MIT, Apache 2.0) in this section once the project owner selects one.
