'use strict';

var models = require("../models");

module.exports = {
  up: function (queryInterface, Sequelize) {
    // bulk insert these burger entries using our model
    return models.burgers.bulkCreate(
      [
        {burger_name: "vegi burger"},
        {burger_name: "steak burger"},
        {burger_name: "chili burger"},
        {burger_name: "brisket burger"},
        {burger_name: "pastrami burger"}
      ]
    )
  },

  down: function (queryInterface, Sequelize) {
    return models.burgers.destroy({where:{burger_name: [
      "vegi burger",
      "steak burger",
      "chili burger",
      "brisket burger",
      "pastrami burger"
    ]}})
  }
};
