// creating a function lad()
function land() {
  this.area = "";
  this.status = "for sale";
}

// setting status open for sale
land.prototype.open = function () {
  this.status = "Open for sale";
  return this;
};
// setting status not for sale
land.prototype.close = function () {
  this.status = "Not for sale";
  return this;
};

//setting parameters
land.prototype.setParams = function (area) {
  this.ares = area;
  return this;
};
// priniting land status
land.prototype.doorstatus = function () {
  console.log("The", this.area, "land is", this.status);
  return this;
};
// creatuing a land object
var land = new land();
land.setParams("500 sq ft").close().doorstatus().open().doorstatus();
