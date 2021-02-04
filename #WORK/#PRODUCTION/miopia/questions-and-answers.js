document.addEventListener('DOMContentLoaded', () => {
    
    const input = document.querySelector(".FAQ__right-find");
    const item = document.querySelectorAll(".FAQ__left-list-item");

    function find() {
        const findText = input.value.toLowerCase();
        item.forEach(element => {
            if (element.innerHTML.toLowerCase().indexOf(findText) > -1) {
                element.style.display = "";
            } else {
                element.style.display = "none";
            }
        });
    }

    input.addEventListener('keyup', find);
});