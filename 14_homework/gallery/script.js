let numberPic = 1

function nextImg() 
{    
    if (numberPic >= 8){
        numberPic = 1        
    }
    else{
    numberPic += 1    
    }
    way(numberPic)
}

function previousImg() 
{ if(numberPic <= 1) {
    numberPic = 8
}else{
    numberPic -= 1
}
    way(numberPic)
}

function way(numberPic)
{
    let img_ID = document.getElementById('img_ID')
    img_ID.src = "./img/nature_0" + numberPic + ".jpg"
    return img_ID    
}
