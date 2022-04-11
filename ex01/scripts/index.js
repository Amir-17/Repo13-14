var modalElemnt = document.getElementById("modal");
var span = document.getElementsByClassName("close")[0];

function modalOpen(param) {
    var href = param.getAttribute("href");
    var modalBody = modalElemnt.querySelector(".modal_body");
    modalElemnt.style.display = "block";
    modalBody.innerHTML = "<object data='" + href + "' class='view'></object>";
}

span.onclick = function () {
    modalElemnt.style.display = "none";
};

window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};