const { Router } = require('express');
const authDel = require('../middleware/authDel.js');
const authenticate = require('../middleware/authenticate.js');
const Review = require('../models/Reviews.js');
// const authenticate = require('../middleware/authenticate.js');
// const Review = require('../models/Reviews.js');

module.exports = Router().delete(
  '/:id',
  [authenticate, authDel],
  async (req, res, next) => {
    try {
      await Review.deleteById(req.params.id);
      //   if (!review) next();
      //   res.status(200);
      //   res.send({ message: 'successfully deleted review' });
      res.json({ message: 'successfully deleted review' });
    } catch (e) {
      next(e);
    }
  }
);
