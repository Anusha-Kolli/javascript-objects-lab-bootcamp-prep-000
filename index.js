var recipes = new Object();
function updateObjectWithKeyAndValue(recipes, key, value){
 return Object.assign( {}, object, { [key]: value })
}

var recipes = { prop: 1 }
updateObjectWithKeyAndValue(obj, 'prop2', 2)
