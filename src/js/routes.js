import LoginPage from '../pages/login.jsx';
import HomePage from '../pages/home.jsx';

var routes = [
  {
    path: '/',
    component: LoginPage,
  },
  {
    path: '/home/',
    component: HomePage,
    options: {
      transition: 'f7-dive',
    },
  },
];

export default routes;
