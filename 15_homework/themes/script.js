
let oldTheme = document.querySelector('body');

function changeTheme(selectObject) {
    let theme = selectObject.value;
    switch (theme) {
        case 'rainbowTheme':
            theme = document.body.classList.toggle("rainbow");
            break;
        case 'blackTheme':
            theme = document.body.classList.toggle("black");
            break;
        case 'whiteTheme':
            theme = document.body.classList.toggle("white");
            break;
    }
}