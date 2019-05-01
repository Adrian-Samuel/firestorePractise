let object1 = {
    'first': 'Alan',
    'middle': 'Mathison',
    'last': 'Turing',
    'born': 1912
  }


  let object2 = {
    'first': 'Alan',
    'middle': 'Mathison',
    'last': 'Turing',
    'born': 1911
  }

  const checkDifferences = async (original, newData)=> {
   return Object.entries(original).reduce((mergeObject, currentData, key)=>{
        if(!(Object.values(newData)[key] == currentData[1])){
            mergeObject[currentData[0]] = currentData[1];
        }
        return mergeObject;
      },{})
  }



(async()=>{
const info = await checkDifferences(object1, object2);
console.log(Object.entries(info));
})()
