var recipes = new Object();
function updateObjectWithKeyAndValue(recipes, key, value){
  recipes[key] = value;

  return recipes;
}

var recipes = { prop: 1 }
updateObjectWithKeyAndValue(obj, 'prop2', 2)
