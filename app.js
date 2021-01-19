const elements = {
    radio: {
        type: "radio",
        id: "radioId",
        name: "radioName"
    },
    checkBox: {
        type: "checkbox",
        id: "checkboxId",
        name: "checkboxName"
    },
    text: {
        type: "text",
        id: "textId",
        name: "textName"
    }
}



const create = (obj) => `<input type=${obj.type} name=${obj.name} id=${obj.id} />`;



let _s = (val) => document.querySelector(`#${val}`);


_s("cb").addEventListener('click', () => _s("el").innerHTML = create(elements.checkBox));