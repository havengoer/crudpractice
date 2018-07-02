const Count = require('../models/counter');

const countController = {
  
  getCount: (req, res) => {
    //retrieve the count from db
    //use the mongo find method
    //chain a .then
    //return the data to the client
    //chain a .catch to log any errors
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