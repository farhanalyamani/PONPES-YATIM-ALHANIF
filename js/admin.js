let allData = [];

function loadData(data) {
  allData = data;
  renderTable(allData);
}

function safe(v) {
  return v ? v : "-";
}
