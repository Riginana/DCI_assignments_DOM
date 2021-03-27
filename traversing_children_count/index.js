const wrapper = document.querySelector('#wrapper');
const wrapChildren = wrapper.children;
console.log(wrapChildren);

for(let i = 0; i < wrapChildren.length; i++){
    console.log(wrapChildren[i].children);
    console.log(wrapChildren[i].children.length);
}

let wrapArr = Array.from(wrapChildren);
let num = 0;
wrapArr.forEach(element => {
    console.log(element.classList.length);
    if(element.classList.length > num){
        num = element.classList.length;
    }
});
console.log(num);