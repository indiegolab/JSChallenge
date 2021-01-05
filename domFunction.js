/* func handleClick
    Click할 때마다 eventListener는 click 이벤트를 듣고, 
    handleClick 함수를 호출한다.
 */
const title = document.querySelector("#title")

const CLICKED_CLASS = "clicked";

function handleClick(){
    // add, remove 대신에 toggle로 같은 기능 구현 가능
    // toggle: class가 없으면  add하고, 있으면 remove
    title.classList.toggle(CLICKED_CLASS);
}

// init 함수 추가
function init(){
    title.addEventListener("click", handleClick);
}
// window.addEventListener("click", handleClick);  // title이라는 id가 없고 그냥 window만 있을 경우.

init();

/* function handleClick(){
    // const currentClass = title.className;
    // 하나만 있는지 체크하기 보다는 포함여부 확인으로 변경: -o T/F
    const hasClass = title.classList.contains(CLICKED_CLASS);
    if(hasClass){
        // title.className = "";
        // 공백 대신 class remove해주는 게 좋으니까
        title.classList.remove(CLICKED_CLASS);
    } else {
        // title.className = CLICKED_CLASS;
        // 기존에 있는 class를 지워버리면 안되기 때문에 add로 변경
        title.classList.add(CLICKED_CLASS);
    }
    // title.style.color ="yellow";
    console.log("Click done");
} */



