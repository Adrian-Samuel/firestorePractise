let object1 = {
    'first': 'Alan',
    'middle': 'Mathison',
    'last': 'Turing',
    'born': 1912
  }


  let object2 = {
    'first': 'Alan',
    'middle': 'Mathiso',
    'last': 'Turing',
    'born': 1911
  }

  const checkDifferences = async (original, newData)=> {
   return Object.entries(original).reduce((mergeObject, currentData, key)=>{
        if(!(Object.values(newData)[key] == currentData[1])){
            mergeObject[currentData[0]] = Object.values(newData)[key];
        }
        return mergeObject;
      },{})
  }



(async()=>{
const info = await checkDifferences(object1, object2);
console.log("The difference in the data is", info);
})()
