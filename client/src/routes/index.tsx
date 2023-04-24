import { useRoutes } from 'react-router-dom'

import LandingRoutes from './LandingRoutes';
import AuthRoutes from './AuthRoutes';
// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    return useRoutes([LandingRoutes, AuthRoutes]);
}
