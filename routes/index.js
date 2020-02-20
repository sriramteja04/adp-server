const express = require('express');
const router = express.Router();
const Promo = require('../models/promotions')


/* GET home page. */
router.get('/', async (req, res) => {

  const {name} = req.body

  const fetchPromo = await Promo.findOne({name: name})

  console.log(fetchPromo)

  if(fetchPromo) {
    return res.status(404).json({ msg: 'There is no profile for this user' });
  }

  const promo = new Promo({
    name: name
  })

  console.log(promo)

  try {
      console.log("updating.........")
      const savedPromo = await promo.save()
      res.send(savedPromo)

  } catch (e) {
    console.log(e)
  }

});

module.exports = router;
