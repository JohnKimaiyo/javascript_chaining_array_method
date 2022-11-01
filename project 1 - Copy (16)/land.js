// creating a function land()
function land() {
  this.area = "";
  this.status = "for sale";
}

// setting status open for sale
land.prototype.open = function () {
  this.status = "open for sale";
  return this;
};

// setting status not for sale
land.prototype.close = function () {
  this.status = "not for sale";
  return this;
};

// setting parameters
land.prototype.setParams = function (area) {
  this.area = area;
  return this;
};

// priinginting land status
land.prototype.doorstatus = function () {
  console.log("The", this.area, "land is", this.status);
  return this;
};

// creating a land object
var land = new land();
land.setParams("500 sq ft").close().doorstatus().open().doorstatus();
