/* id  선택
        css: #으로 선택
        JS: DOM(Document Object Model) 사용 
        */

// console.log(document);

const title = document.getElementById("title");
// const title = document.getElementsByClassName("title");
console.log(title)
console.dir(title)
console.log("hihi");

title.innerHTML = "HI JS";
// 직접 dir 요소요소에 접근해서 바꿀 수 있음
title.style.color = "yellow";
document.title= "JS Challenge"


// querySelector를 사용하면 elements를 #ID를 통해 쉽게 가져올 수 있음
const querySelector = document.querySelector("#title");
querySelector.innerHTML= " HI YOU";