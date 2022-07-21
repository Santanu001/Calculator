let screen = document.getElementById("screen");
screenValue = "";
let btns = document.querySelectorAll("button");
for(item of btns){
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        if(buttonText == 'X')
        {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText == "C")
        {
            screenValue = "";
            screen.value = screenValue;
        }
        else if(buttonText == "=")
        {
            screenValue = eval(screenValue);
            screen.value = screenValue;
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}

