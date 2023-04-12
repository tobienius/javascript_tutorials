

function add(a,b){
  let c =a*b;
  document.getElementById('result').innerHTML =c
  //return c
 
}

add(5,10)


//let col1=document.getElementById('color1');
//let col2=document.getElementById('color2');
//let col1=document.getElementsById('card');
let col1=document.getElementById('card');

function colorChange(){
 col1.style.color='blue';
 col1.style.backgroundColor="green";
}
