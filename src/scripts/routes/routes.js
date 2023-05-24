import Restaurants from '../views/pages/home';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': Restaurants,
  '/home': Restaurants,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
