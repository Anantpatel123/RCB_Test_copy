var essentials = {
  drink: "water",
  eat: "snickers",
  fun: "phone",
  friend: "facebook"
};

var niceToHaves = {
  tools: ["can opener", "flashlight", "matches"],
  safety: ["first aid kit", "gloves"]
};

var nonessentials = {
  cookware: "waffleMaker"
};

function add (a,b) {
  console.log("Addition: :", a + b);
}
// module.exports is essentially an object that we can add data or variables to
// We can access them from other files using the 'require' keyword.

module.exports = {
  exp1: essentials,
  exp2: niceToHaves,
  addition: add
};
