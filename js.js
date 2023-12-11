let img = document.querySelectorAll('.one');
img[0].style.display="block";

document.getElementById('nex').onclick = function(){
    for (let i = 1; i < img.length; i++){
        img[1].style.display="block";
        img[0].style.display="none";
        img[2].style.display="none";

        break;
    }
}

document.getElementById('pre').onclick = function(){
    for (let i = 1; i < img.length; i++){
        img[0].style.display="block";
        img[2].style.display="none";
        img[1].style.display="none";

        break;
    }
}
document.getElementById('med').onclick = function(){
    for (let i = 1; i < img.length; i++){
        img[2].style.display="block";
        img[0].style.display="none";
        img[1].style.display="none";

        break;
    }
}
