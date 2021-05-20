const objES6 = (objName,keyObjName,objValue) => { 
  objName = {} 
  objName[keyObjName] = objValue
  return objName
}
console.log(objES6('customer1','firstname','Roberto'))