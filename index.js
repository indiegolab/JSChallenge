// querySelector를 사용하면 elements를 #ID를 통해 쉽게 가져올 수 있음

const getTitle = document.querySelector("#title");
getTitle.innerHTML= " HI YOU from getTitle";
getTitle.style.color = "red";
document.getTitle = "I own you now"

// 2.4 Events and event handlers
function handleResize(){
    console.log("resize done");
}
    // event가 발생할 때 마다 객체가 호출됨

window.addEventListener("resize", handleResize); 
// handleResize()라고 쓰지 않음. 바로 호출하지 않을 것이기 때문. 
// 이벤트가 일어날 때 호출함.
