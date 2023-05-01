import type { PathRouteProps } from 'react-router-dom';

import Home from '@/pages/Home';

export const routes: Array<PathRouteProps> = [
  {
    path: '/',
    element: <Home />,
  },
];

export const privateRoutes: Array<PathRouteProps> = [];
