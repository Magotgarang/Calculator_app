ddEventListener("DOMContentLoaded", function () {
    let display = document.getElementById("display");
    let buttons = Array.from(document.querySelectorAll(".button"));

    buttons.map((button) => {
        button.addEventListener("click", (e) => {
            const buttonText = e.target.innerText;

            switch (buttonText) {
                case "C":
                    display.innerText = ""; 
                    break;
                case "=":
                    try {
                        display.innerText = eval(display.innerText);
                    } catch (error) {
                        display.innerText = "Error";
                    }
                    break;
                default:
                    display.innerText += buttonText;
                    break;
            }
        });
    });
});
