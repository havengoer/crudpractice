const Count = require('../models/counter');

const countController = {
  
  getCount: (req, res) => {
    //retrieve the count from db
    Count.find({}, (err, counter) => {
      if (err) return err;
      if (counter.length === 0) res.send({ count: 0 });
      return res.send(counter[0]);
    })
  },

  increaseCount: (req, res) => {
    Count.find({}, (err, counter) => {
      if (err) return console.error('increaseCount error: ', err);
      if (counter.length === 0) {
        Count.create({ count: 1 })
        .then((result) => res.json(result))
        .catch((err) => console.log(err));
        // , (err, result) => res.json(result));
      } else {
        counter[0].count += 1;
        counter[0].save()
        .then(result => res.json(result))
        .catch((err) => console.error(err));
      }
    });
  }
};

module.exports = countController;