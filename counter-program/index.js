const decreaseBTN = document.getElementById("decreaseBTN");
const resetBTN = document.getElementById("resetBTN");
const increaseBTN = document.getElementById("increaseBTN");
const myCount = document.getElementById("myCount");
let count =0;

increaseBTN.onclick = function(){
   count++;
   myCount.textContent = count;
}

decreaseBTN.onclick = function(){
   count--;
   myCount.textContent = count;
}

resetBTN.onclick = function(){
   count=0;
   myCount.textContent = count;
}
