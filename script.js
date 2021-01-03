var screen = document.getElementsByClassName('display')[0];

function displayNum(x){
    if(screen.textContent === '0'){
        screen.textContent = x;
    } else {
        screen.textContent = screen.textContent + x;
    }
}

function displayDec(){
    screen.textContent = screen.textContent + ".";
}

function clrScr(){
    screen.textContent = '0';
}

function answer(){
    let ans = eval(screen.textContent);
    screen.textContent = ans;
    console.log(ans);
}