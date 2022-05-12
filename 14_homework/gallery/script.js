let numberPic = 1

function nextImg() {
    numberPic = numberPic + 1;  
    let img_ID = document.getElementById('img_ID');
    img_ID.src = "./img/nature_0" + numberPic + ".jpg";       
}

function previousImg() {
    numberPic = numberPic - 1;
    let img_ID = document.getElementById('img_ID');
    img_ID.src = "./img/nature_0" + numberPic + ".jpg";  
}
