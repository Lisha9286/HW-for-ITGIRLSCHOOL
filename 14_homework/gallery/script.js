let number_pic = 1

function nextImg() {
    number_pic = number_pic + 1;  
    let img_ID = document.getElementById('img_ID');
    img_ID.src = "./img/nature_0" + number_pic + ".jpg";       
}



function previousImg() {
    number_pic = number_pic - 1;
    let img_ID = document.getElementById('img_ID');
    img_ID.src = "./img/nature_0" + number_pic + ".jpg";
}
