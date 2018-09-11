const SelectView = require("./views/select_view.js");
const InstrumentFamilies = require("./models/instrument_families.js");
const InstrumentInfoView = require("./views/instrument_info_view.js");

document.addEventListener('DOMContentLoaded', () => {
  const selectElement = document.querySelector("select#instrument-families");
  const instrumentDropdown = new SelectView(selectElement);
  instrumentDropdown.bindEvents();

  const infoDiv = document.querySelector("#instrument-info")
  const instrumentInfoDisplay = new InstrumentInfoView(infoDiv);
  instrumentInfoDisplay.bindEvents();

  const instrumentFamilies = new InstrumentFamilies();
  instrumentFamilies.bindEvents();


});
