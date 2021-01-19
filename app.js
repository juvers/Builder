const elements = {
    radio: {
        type: "radio",
        id: "radioId",
        name: "radioName",
        label: "male"

    },
    checkbox: {
        type: "checkbox",
        id: "checkboxId",
        name: "checkboxName",
        label: "Notify Account"
    },
    text: {
        type: "text",
        id: "textId",
        name: "textName",
        label: "What is your name?"
    }
}

const create = ({ label, type, name, id }) => `<label for=${label}>${label}</label></br><input type=${type} name=${name} id=${id} />`;

let _s = val => document.querySelector(`#${val}`);
let s_ = val => document.querySelectorAll(`.${val}`);

// for creating elements based on single id
const createEl = (ele) => {
    _s(ele).addEventListener('click', () => _s("el").innerHTML = create(elements[ele]));
}
createEl("text");

// for creating elements based on html collections
const createMultiEl = ele => _s("el").innerHTML = create(elements[ele]);
s_('btn-el').forEach(x => x.addEventListener('click', function() {
    createMultiEl(this.id)
}));