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

let _s = (val) => document.querySelector(`#${val}`);

const createEl = (ele) => {
    _s(ele).addEventListener('click', () => _s("el").innerHTML = create(elements[ele]));
}

createEl("text");