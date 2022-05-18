
function changeTheme(selectObject) {   
    let clazz 
    let oldTheme = document.querySelector('body');
    oldTheme.classList.remove("white");
    oldTheme.classList.remove("black");
    oldTheme.classList.remove("rainbow");
    let theme = selectObject.value;
    switch (theme) {
        case 'rainbowTheme':
            document.body.classList.toggle("rainbow");
            clazz = "rainbow";
            break;
        case 'blackTheme':
            document.body.classList.toggle("black");
            clazz = "black";
            break;
        case 'whiteTheme':
            document.body.classList.toggle("white");
            clazz = "white";
            break;
    }
}