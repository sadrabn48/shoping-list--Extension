

const groceries = document.getElementsByClassName
    ("groceries")[0];
const pencil = document.getElementById
    ("pencil");

const AllItems = document.getElementById("AllItems");

const userInput = document.getElementById("userinput");


pencil.addEventListener("click", () => {

    AllItems.innerHTML = "";
})


userInput.addEventListener("keydown", (event) => {

    if (event.key == "Enter")
        additem();
})



function additem() {


    var h2 = document.createElement("h2");

    h2.innerHTML = "- " + userInput.value;

    h2.addEventListener("click", () => {
        h2.style.textDecoration = "line-through";
    })

    AllItems.insertAdjacentElement("beforeend", h2)

    userInput.value = "";
}