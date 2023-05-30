/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.dontSeeElement('.restaurant-item');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.dontSeeElement('.restaurant-item');

  I.amOnPage('/');

  I.seeElement('.restaurant_name a');

  const firstRestaurant = locate('.restaurant_name a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.restaurant-item');
  const likedRestaurantName = await I.grabTextFrom('.restaurant_name');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('Unliking restaurant', async ({ I }) => {
  I.dontSeeElement('.restaurant-item');

  I.amOnPage('/');

  I.seeElement('.restaurant_name a');

  const firstRestaurant = locate('.restaurant_name a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.restaurant-item');

  const likedRestaurantName = await I.grabTextFrom('.restaurant_name');
  assert.strictEqual(firstRestaurantName, likedRestaurantName);
  I.click(firstRestaurantName);

  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/like');
});
