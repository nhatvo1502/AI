# Login Page Build Plan (BEADS Actions)

## Objective
Build a functional login page for the current React + Node application with a backend login endpoint, client-side validation, and clear success/error feedback.

## BEADS Framework
- `B` - Baseline: confirm current app structure and constraints.
- `E` - Execution actions: implement in small, ordered, verifiable steps.
- `A` - Acceptance criteria: define pass/fail behavior for each action.
- `D` - Demo checks: run concrete commands to verify the build.
- `S` - Status log: track completion as actions are executed.

## Baseline
- Frontend entry: `client/src/App.jsx`
- Frontend styles: `client/src/styles.css`
- Backend entry: `server/index.js`
- Existing API routes: `/api/health`, `/api/message`

## Execution Actions
1. Add backend route `POST /api/login` with:
- Required fields: `email`, `password`
- 400 for missing fields
- 401 for invalid credentials
- 200 for valid demo credentials and a simple user payload
2. Replace starter frontend content with a login page:
- Email and password fields
- Inline client-side validation
- Submit button with loading state
- Error message on failure
- Success state after valid login
3. Update styling for the login page:
- Responsive centered card
- Distinct styling for labels/inputs/buttons/errors/success state
4. Keep existing app compatibility:
- Do not remove current backend routes
- Do not introduce new dependencies

## Acceptance Criteria
- User cannot submit with empty email/password.
- Invalid credentials return and display a user-friendly error.
- Valid credentials show a logged-in success state.
- Build passes and server file syntax check passes.

## Demo Credentials
- Email: `demo@local.dev`
- Password: `pass1234`

## Demo Checks
- `npm run build`
- `node --check server/index.js`

## Status Log
- [x] B1: Baseline reviewed
- [x] E1: BEADS plan document created
- [x] E2: Backend `/api/login` implemented
- [x] E3: Frontend login UI + submit flow implemented
- [x] E4: Login page styles implemented
- [x] D1: Build and syntax checks executed
- [x] S1: Final review completed
