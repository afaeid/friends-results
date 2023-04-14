//importing students data as a object array
import { students as infos } from "/students-info.js";

var container = document.querySelector(".container");
/**
 * Make cards of each student 
 * @param {object} infos receive students data

*/

var creatNumbers = (infos) => {
 // sorting students in highest total number 
 infos.sort((a, b) => parseFloat(b.totalNumber()) - parseFloat(a.totalNumber()));
 // counting position of each student
 var position = 0;
 infos.map((info) => {
    var cardCover = document.createElement("div");
  position++;
// adding classes for first 3 students
  if(position < 4){
   cardCover.classList.add("excellent-result");
  }
  
if(position == 1){
 position = `${position}st`;
} else if (position == 2){
 position = `${position}nd`;
}
else if(position == 3){
 position = `${position}rd`;
}
else{
 position = position;
}
  cardCover.setAttribute('data-merit-position', position)
  cardCover.classList.add("card-cover");
  cardCover.innerHTML = `
   <div class="number-section">
    <div class="div"><label for="name">Name</label><input disabled type="text" value="${info.name}" name="name" id="name">
    </div>
    <div class="div"><label for="roll">Roll</label><input disabled type="text" value="${info.roll}" name="roll" id="roll">
    </div> 
    <div class="div"><label for="bn1">Bangla 1st</label><input disabled type="text" value="${info.numbers.bn1}" name="bn1" id="bn1">
    </div>
    <div class="div"><label for="bn2">Bangla 2nd</label><input disabled type="text" value="${info.numbers.bn2}" name="bn2" id="bn2">
    </div>
    <div class="div"><label for="en1">English 1st</label><input disabled type="text" value="${info.numbers.en1}" name="en1" id="en1">
    </div>
    <div class="div"><label for="en2">English 2nd</label><input disabled type="text" value="${info.numbers.en2}" name="en2" id="en2">
    </div>
    <div class="div"><label for="math">Math</label><input disabled type="text" value="${info.numbers.math}" name="math" id="math">
    </div>
    <div class="div"><label for="bgs">BGS</label><input disabled type="text" value="${info.numbers.bgs}" name="bgs" id="bgs">
    </div>
    <div class="div"><label for="sci">Science</label><input disabled type="text" value="${info.numbers.sci}" name="sci" id="sci">
    </div>
    <div class="div"><label for="rel">Religion</label><input disabled type="text" value="${info.numbers.rel}" name="rel" id="rel">
    </div>
    <div class="div"><label for="ict">ICT</label><input disabled type="text" value="${info.numbers.ict}" name="ict" id="ict">
    </div>
    <div class="div"><label for="totalNumber">Total Number</label><input disabled type="text" value="${info.totalNumber()}" name="totalNumber" id="totalNumber">
    </div>
   </div>
  `;
  var allInput = cardCover.querySelectorAll("div > input");
 
  container.appendChild(cardCover);
  if(position == "1st"){
   position = 1;
  }else if(position == "2nd"){
   position = 2;
  }else if(position == "3rd"){
   position = 3;
  }else{
   position = position;
  }
 });
}

var addNumbers = () => {
 creatNumbers(infos)
}
addNumbers();