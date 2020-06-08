const models = require('../models');

module.exports = {
  get: function (req, res) {
    models.getAll((err, data)=>{
      if (err) {
        res.sendStatus(404);
      }
      res.json(data);
    })
  },

  post: function (req, res) {
    let params = [ req.body.cowName, req.body.cowDescr ];
    models.post(params, (err, data)=>{
      if (err) {
        res.sendStatus(404);
      }
      res.send(data);
    });
  }
}
