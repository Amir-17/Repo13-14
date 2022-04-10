function myModal() {
    var modal = document.getElementsByClassName("modal");
    var btn = document.getElementsByClassName("modal__close");
    var span = document.getElementsByClassName("material-icons")[0];

    btn.onclick = function () {
        modal.style.display = "block";
    };

    span.onclick = function () {
        modal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        };
    };
}