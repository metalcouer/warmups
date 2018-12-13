
//add all elements together
function sum(arr){
  return arr.reduce((acc,cur) => acc + cur, 0)
  
}

// multiply all elements together
function multiply(arr){ 
  return arr.reduce((acc,cur) => acc * cur, 1)
  
}

//double each element using reduce
function double(arr){
  return arr.map(element => element * 2)
  
}

// //count the letters
function countLetters(str){
  let string = str.split('')
  console.log("string", string)
  return string.reduce((prev,cur) => {
    prev[cur] = (prev[cur] || 0) + 1
    return prev
  }, {})
}

module.exports = {
  sum: sum,
  multiply: multiply,
  double: double,
  countLetters: countLetters
}
