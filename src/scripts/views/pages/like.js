import FavoriteRestaurantIdb from '../../data/favorite-restaurants-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Your Favorite Restaurant</h2>
        <div id="restaurants" class="restaurants">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const moviesContainer = document.querySelector('#restaurants');
    if (restaurants.length) {
      restaurants.forEach((restaurant) => {
        moviesContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } else {
      moviesContainer.innerHTML = `
        <div class="restaurant-item__not__found">There is no Favorite Restaurants</div>
      `;
    }
  },
};

export default Favorite;
