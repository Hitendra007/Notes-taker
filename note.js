shownotes();
document.querySelector("#addnote").addEventListener("click", function (e) {
    let addtxt = document.getElementById("newn");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addtxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addtxt.value = "";
    console.log(notesObj);
    shownotes();
});

function shownotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `<div class="card notescard my-2 mx-2" style="width: 18rem;">
                      <div class="card-body">
                         <h5 class="card-title">Note ${index + 1} </h5>
                        <p class="card-text"> ${element}</p>
                        <button class="btn btn-primary" style="background-color:red;" onclick="deletenote(this.id)" id="${index}" type="button">Delete note
                        </button>
                  </div>
              </div>`;
    });
    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;

    }
    else {
        notesElm.innerHTML = `No notes found ,please add new note from above secton`;
    }
}
function deletenote(index) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    shownotes();
}
let searchtxt = document.getElementById("search");
    searchtxt.addEventListener("input", function () {
    let stext = searchtxt.value; 
    let notescard = document.getElementsByClassName("notescard");
     Array.from(notescard).forEach(function(element) {
        let text = element.getElementsByTagName("p")[0].innerText;
        if (text.includes(stext)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    });
});


