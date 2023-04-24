import LandingLayout from '../components/layouts/landing';
import LandingPage from '../pages/landing-page';
import Universities from '../pages/landing-page/universities';
import University from '../pages/landing-page/university';

// project import
const LandingRoutes = {
    path: '',
    element: <LandingLayout />,
    children: [
        {
            path: '',
            element: <LandingPage />
        },
        {
          path: '/universities',
          element: <Universities />
        },
        {
          path: '/universities/:id',
          element: <University />
        },
    ]
};

export default LandingRoutes;
