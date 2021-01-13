import service from './service.js'
import add from './add.js';


const inputDesc = document.querySelector('#input-desc');
const inputDone = document.querySelector('#input-done');
const btn = document.querySelector('#btn-submit');
let container = document.querySelector('#container');


const makeInput = (inputDesc, inputDone) => {
    let obj = {
        desc: inputDesc.value,
        done: inputDone.checked
    }
    return obj;
};

btn.addEventListener('click', (event) => {
    event.preventDefault();
    service.add(makeInput(inputDesc, inputDone))
    container.innerHTML = '';
    add.showItem();
})

add.showItem();

export default { 
    makeInput,
    inputDesc,
    inputDone,
    btn
}
