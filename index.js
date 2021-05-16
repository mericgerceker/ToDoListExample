document.getElementById("addToDoButton").addEventListener('click', addToDo);

function addToDo() {
    var newActivity = document.getElementById("toDoInput").value;

    var trElement = document.createElement("tr");
    trElement.classList.add("align-middle");

    var tdElement = document.createElement("td");
    tdElement.innerText = newActivity;

    var tdCloseElement = document.createElement("td");
    tdCloseElement.classList.add("text-center");
    tdCloseElement.style.width = "15%";

    var buttonElement = document.createElement("button");
    buttonElement.type = "button";
    buttonElement.classList.add("btn");
    buttonElement.classList.add("btn-danger");
    buttonElement.innerText = "Sil";
    buttonElement.addEventListener('click', function() {
        deleteToDo(this);
    }, false);
    

    tdCloseElement.appendChild(buttonElement);

    trElement.appendChild(tdElement);
    trElement.appendChild(tdCloseElement);

    document.getElementById("toDoTableBody").appendChild(trElement);

    document.getElementById("toDoInput").value = "";
}

function deleteToDo(element) {
    element.closest("tr").remove();
}