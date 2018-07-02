const Count = require('../models/counter');

const countController = {
  increaseCount: (req, res) => {
    Count.find({}, (err, counter) => {
      if (err) return console.error('increaseCount error: ', err);
      if (counter.length === 0) {
        Count.create({ count: 1 }, (err, result) => {
          res.setHeader('Content-Type', 'application/json')
          res.send(JSON.stringify(result));
        });
      } else {
        counter[0].count += 1;
        counter[0].save()
        .then((err, result) => {
          res.setHeader('Content-Type', 'application/json')
          res.send(JSON.stringify(result))
        });
      }
    });
  }
};

module.exports = countController;