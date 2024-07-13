const express = require('express');
const Dish = require('../models/Dish');

const dishesRouter = (io) => {
  const router = express.Router();

  // Fetch all dishes
  router.get('/', async (req, res) => {
    try {
      const dishes = await Dish.find();
      res.json(dishes);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  // Toggle the isPublished status of a dish
  router.patch('/:id/toggle', async (req, res) => {
    try {
      const dish = await Dish.findById(req.params.id);
      if (!dish) return res.status(404).json({ message: 'Dish not found' });

      dish.isPublished = !dish.isPublished;
      await dish.save();
      io.emit('dishUpdated', dish);
      res.json(dish);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  return router;
};

module.exports = dishesRouter;
