const submit = document.querySelector(".submit");
const notesElem = document.querySelector('.notes');
const title = document.querySelector("#text");
const desc = document.querySelector('#desc');

let notes = JSON.parse(localStorage.getItem("notes"));

if (notes) {
    notes.forEach(element => {
        addNotes(element)
    });
}

submit.addEventListener("click", (e) => {
    e.preventDefault();
    addNotes()
})

function addNotes(obj) {
    let card = document.createElement("div");
    card.classList.add("card");
    let titleval = title.value;
    let descVal = desc.value;
    if (obj) {
        titleval = obj.title;
        descVal = obj.desc;
    }
    if (titleval) {
        card.innerHTML = `<h3>${titleval}</h3>
                                    <p class="ptag">${descVal}</p>
                             <button class="del">Delete</button>`;
        notesElem.appendChild(card);
        updatestorage()
    }

    let del = card.querySelector(".del");
    del.addEventListener('click', () => {
        card.remove();
        updatestorage();
    })
}

function updatestorage() {
    let card = document.querySelectorAll(".card");
    let arr = [];
    card.forEach(element => {
        arr.push({
            title: element.children[0].innerText,
            desc: element.children[1].innerText
        })
    });
    localStorage.setItem("notes", JSON.stringify(arr));
}