document.getElementById("addToDoButton").addEventListener('click', addToDo);

function addToDo() {
    var newActivity = document.getElementById("toDoInput").value;

    if (newActivity == "") {
        errorMessage("Listeye boş ekleme yapılamaz.");
        return;
    }

    var trElement = document.createElement("tr");
    trElement.classList.add("align-middle");

    var tdElement = document.createElement("td");
    tdElement.classList.add("to-do-text");
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

    trElement.addEventListener('click', function() {
        checkToDo(this);
    }, false);

    document.getElementById("toDoInput").value = "";

    successMessage("Ekleme işlemi başarıyla gerçekleştirildi.");
}

function deleteToDo(element) {
    element.closest("tr").remove();
}

function checkToDo(element) {
    debugger
    var toDoTextElement = element.querySelector("td.to-do-text");
    var toDoText = "";

    if (element.classList.contains("checked")) {
        toDoText = toDoTextElement.querySelector("del").innerText;
        toDoTextElement.innerText = toDoText;
    } else {
        toDoText = toDoTextElement.innerText;

        var delElement = document.createElement("del");
        delElement.innerText = toDoText;

        toDoTextElement.innerText = "✓ ";

        toDoTextElement.appendChild(delElement);
    }

    element.classList.toggle("checked");

}

function successMessage(message) {
    swal({
        title: "Başarılı!",
        text: message,
        type: "success",
        timer: 1500,
        showConfirmButton: false
      });
}

function errorMessage(message) {
    swal({
        title: "Hata!",
        text: message,
        type: "error",
        timer: 1500,
        showConfirmButton: false
      });
}