import RestaurantSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Restaurants = {
  async render() {
    return `
    <div class="jumbotron">
    <div class="jumbotron-box">
      <h1 class="jumbotron-title" id="welcome">
        Welcome to EatGo
      </h1>
      <p class="jumbotron-text">Let's find your Favorite Restaurant here now!</p>
    </div>
  </div>

  </div>
      <div class="content">
        <h1 class="content__heading">Choose Restaurants</h1>
        <div id="restaurants" class="restaurants">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.listRestaurant();
    const moviesContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      moviesContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Restaurants;
