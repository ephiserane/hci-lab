var modal = document.getElementById("modal");
var showButton = document.getElementById("show-button");
var closeButton = document.getElementById("close-button");

showButton.onclick = function() {
    modal.style.display = "block";
}

closeButton.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        
    }
}

const outsideTncBox = document.getElementById("checkbox-regist");
const insideTncBox = document.getElementById("inside-tnc");
const tncContent = document.querySelector(".modal-content");
const tncShow = document.getElementById("show-button");

function syncBox() {
    outsideTncBox.checked = insideTncBox.checked;
    tncShow.disabled = insideTncBox.checked;
}

insideTncBox.addEventListener("change", function() {
    syncBox();

    // biar otomatis close tnc nya
    // if (this.checked) {
    //     modal.style.display = "none";
    // }
});


outsideTncBox.addEventListener("change", function() {
    insideTncBox.checked = this.checked;
    syncBox();
});