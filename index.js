function theBeatlesPlay(arrMuscian, arrinstrument){
  var empt = [];
  for (let i = 0; i < arrMuscian.length && i < arrinstrument.length; i++){
    empt.push(`${arrMuscian[i]} plays ${arrinstrument[i]}`);
  }
  
  console.log(empt);
  return empt;
}

function johnLennonFacts(array){
  var i = 0;
<<<<<<< HEAD
  var k;
  while(i < array.length){
    k = array.map(function(x){
      x = x + "!!!";
      return x;
    });
    i++;
  }
  console.log(k);
  return k;
}

function iLoveTheBeatles(number){
  var arr = [];
  do {
    arr.push("I love the Beatles!");
    number++;
    console.log(number);
  }while(number < 15);
  return arr;
=======
  while(i < array.length){
    array[i] +
    i++;
  }
  console.log(array);
  return array;
>>>>>>> aa5591432d19288000d29995d31221d45aae1b68
}