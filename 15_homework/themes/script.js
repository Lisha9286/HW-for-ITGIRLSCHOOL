
function changeTheme(selectObject) {   
    let oldTheme = document.querySelector('body');
    oldTheme.classList.remove("white","black","rainbow");
    //oldTheme.classList.remove("black");
    //oldTheme.classList.remove("rainbow");
    let theme = selectObject.value;
    switch (theme) {
        case 'rainbowTheme':
            document.body.classList.toggle("rainbow");
            break;
        case 'blackTheme':
            document.body.classList.toggle("black");
            break;
        case 'whiteTheme':
            document.body.classList.toggle("white");
            break;
    }
}