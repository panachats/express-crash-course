const express = require("express");
const router = express.Router();
const restaurants = require("../data");

router.get("/", (req, res) => {
  res.json(restaurants);
});

router.get("/:id", (req, res) => {
  const restaurantID = Number.parseInt(req.params.id, 10);
  const restaurant = restaurants.find(
    (restaurant) => restaurant.id === restaurantID
  );
  res.json(restaurant);
});

router.post("/", (req, res) => {
  // console.log(req.body);
  const newRestaurant = { ...req.body, id: restaurants.length + 1 };
  restaurants.push(newRestaurant);
  res.json(newRestaurant);
});

router.put("/:id", (req, res) => {
  const restaurantID = Number.parseInt(req.params.id, 10);
  const restaurantIndex = restaurants.findIndex(
    (restaurant) => restaurant.id === restaurantID
  );
  const updatedRestaurant = { ...restaurants[restaurantIndex], ...req.body }; // อัพเดทข้อมูลใน object
  res.json(updatedRestaurant);
});

router.delete("/:id", (req, res) => {
  const restaurantID = Number.parseInt(req.params.id, 10);
  const restaurantIndex = restaurants.findIndex(
    (restaurant) => restaurant.id === restaurantID
  );
  restaurants.splice(restaurantIndex, 1);
  res.sendStatus(204);
});

module.exports = router;
