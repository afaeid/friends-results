import { students as infos } from "/students-info.js";

var container = document.querySelector(".container");
var creatNumbers = (infos) => {
 infos.map((info) => {
  var totalNumbers = info.numbers.bn1 + info.numbers.bn2 + info.numbers.en1 + info.numbers.en2 + info.numbers.math + info.numbers.bgs + info.numbers.sci + info.numbers.rel + info.numbers.ict;
  var cardCover = document.createElement("div");
  cardCover.classList.add("card-cover");
  cardCover.innerHTML = `
   <div class="number-section">
    <div class="div"><label for="name">Name</label><input disabled type="text" data-value="${info.name}" name="name" id="name">
    </div>
    <div class="div"><label for="roll">Roll</label><input disabled type="text" data-value="${info.roll}" name="roll" id="roll">
    </div> 
    <div class="div"><label for="bn1">Bangla 1st</label><input disabled type="text" data-value="${info.numbers.bn1}" name="bn1" id="bn1">
    </div>
    <div class="div"><label for="bn2">Bangla 2nd</label><input disabled type="text" data-value="${info.numbers.bn2}" name="bn2" id="bn2">
    </div>
    <div class="div"><label for="en1">English 1st</label><input disabled type="text" data-value="${info.numbers.en1}" name="en1" id="en1">
    </div>
    <div class="div"><label for="en2">English 2nd</label><input disabled type="text" data-value="${info.numbers.en2}" name="en2" id="en2">
    </div>
    <div class="div"><label for="math">Math</label><input disabled type="text" data-value="${info.numbers.math}" name="math" id="math">
    </div>
    <div class="div"><label for="bgs">BGS</label><input disabled type="text" data-value="${info.numbers.bgs}" name="bgs" id="bgs">
    </div>
    <div class="div"><label for="sci">Science</label><input disabled type="text" data-value="${info.numbers.sci}" name="sci" id="sci">
    </div>
    <div class="div"><label for="rel">Religion</label><input disabled type="text" data-value="${info.numbers.rel}" name="rel" id="rel">
    </div>
    <div class="div"><label for="ict">ICT</label><input disabled type="text" data-value="${info.numbers.ict}" name="ict" id="ict">
    </div>
    <div class="div"><label for="totalNumber">Total Number</label><input disabled type="text" data-value="${totalNumbers}" name="totalNumber" id="totalNumber">
    </div>
   </div>
  `;
  var allInput = cardCover.querySelectorAll("div > input");
  allInput.forEach((input) => {
   input.value = input.dataset.value
  })
  container.appendChild(cardCover)
 })
}
var addNumbers = () => {
 creatNumbers(infos)
}
addNumbers()