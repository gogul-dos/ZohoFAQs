document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".questions-contains a");
    const answers = document.querySelectorAll(".answer-container");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            answers.forEach(answer => answer.classList.remove("highlight"));
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement && targetId!="main") {
                targetElement.classList.add("highlight");
            }
        });
    });
});