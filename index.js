function getSpaces(num){
  let result = '';
  for(let i = 0; i < num; i++){
    result += ' ';
  }
  return result;
}

function createStars(num){
  let result = '';
  for(let i = 0; i < num; i++){
    result += '*';
  }
  return result;
}
function christmasTree(num) {
  if(num  < 0 || num  % 2 === 0) return false;
  let result = '';
  let topSpaces = num / 2 - 1;
  for (let i = 1; i < num; i+= 2) {
    result += getSpaces(topSpaces) + createStars(i) + '\n';
    //console.log(result)
    topSpaces--;
  }
  return result;
  
}

//console.log(christmasTree(20));
console.log(christmasTree(55));

const container = document.getElementById('tree-container');
container.innerText = christmasTree(55);
