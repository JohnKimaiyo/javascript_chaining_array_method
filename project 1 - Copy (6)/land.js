// creating a function lland()
function land() {
  this.area = "";
  this.status = "for sale";
}

// setting status open for sale
land.prototype.open = function () {
  this.status = "OPen for sale";
  return this;
};
//setting status not for sale
land.prototype.close = function () {
  this.status = "Not for sale";
  return this;
};

// setting parameters
land.prototype.setParams = function (area) {
  this.area = area;
  return this;
};

//prining land status
land.prototype.doorstatus = function () {
  console.log("the", this.area, "land is", this.status);
  return this;
};
// creating land object
var land = new land();
land.setParams("500 sq ft ").close().doorstatus().open().doorstatus();
