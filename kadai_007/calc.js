let num = 1 + Math.floor(+ Math.random() * 20)

if(num % 3 == 0 && num % 5 == 0){
  console.log('３と５の倍数です')
}
else if(num % 3 == 0){
  console.log('３の倍数です')
}
else if(num % 5 == 0){
  console.log('5の倍数です')
}
else{
  console.log(num)
}
