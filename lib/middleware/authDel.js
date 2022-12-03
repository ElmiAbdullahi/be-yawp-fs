const Review = require('../models/Reviews.js');

module.exports = async (req, res, next) => {
  try {
    const review = await Review.getById(req.params.id);
    if (
      review &&
      (req.user.email === 'admin' || review.user_id === req.user.id)
    ) {
      next();
    } else {
      throw new Error('you dont have access');
    }
  } catch (e) {
    e.status = 403;
    next(e);
  }
};
