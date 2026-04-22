const scores = [ 45, 82, 60, 33, 91, 78]

function getTopScores(scores){
  let result = []
  for(i=0 ;i<scores.length;i++){
    if(scores[i]>70){
      result.push(scores[i])
    }
  }
  return result
}
console.log(getTopScores(scores))


// filter and map in array 

const products = [
  { name: "Laptop", price: 1200, inStock: true },
  { name: "Mouse", price: 25, inStock: false },
  { name: "Monitor", price: 300, inStock: true },
  { name: "Keyboard", price: 45, inStock: false },
  { name: "Webcam", price: 80, inStock: true }
];

const productFilter = products.filter(products => products.inStock === true)
console.log(productFilter)

const productMap = products.map(products=>products.name)
console.log(productMap)

let total = 0

for(let i=0 ; i<products.length ;i++){
  total = total +products[i].price 
}
console.log(total)