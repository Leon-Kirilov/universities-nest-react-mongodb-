import SignInPage from "../pages/auth/SignInPage";
import SignUpPage from "../pages/auth/SignUpPage";
const AuthRoutes = {
    path: '/',
    children: [
        {
            path: 'signin',
            element: <SignInPage />
        },
        {
          path: 'signup',
          element: <SignUpPage />
        }
    ]
};

export default AuthRoutes;
