const imgSrc = [
    "./img/01.webp",
    "./img/02.webp",
    "./img/03.webp",
    "./img/04.webp",
    "./img/05.webp"
];
    // inserisco le immagini nell'HTML
    for (i = 0; i < imgSrc.length; i++) {
        let immagineDaInserire = `<img src="${imgSrc[i]}">`;

        document.getElementById("carousel").innerHTML += immagineDaInserire;
        document.getElementById("miniature").innerHTML += immagineDaInserire;
    }

    // prendo array di immagini
    let imgsArray = document.querySelectorAll("#carousel img");
    let miniatureArray = document.querySelectorAll("#miniature img");

    for (i = 0; i < imgsArray.length; i++) {
        console.log(imgsArray[i]);
    }

    let imgPosition = 0;
    imgsArray[imgPosition].classList.add("zId1");
    miniatureArray[imgPosition].classList.add("borderImg");

    // TASTO AVANTI
    function next() {
        if(imgPosition == 0) {
            imgsArray[imgPosition].classList.add("zId1");
            miniatureArray[imgPosition].classList.add("borderImg");
            imgPosition++;
        } else if (imgPosition < imgsArray.length) {
            imgsArray[imgPosition - 1].classList.remove("zId1");
            miniatureArray[imgPosition - 1].classList.remove("borderImg");
            imgsArray[imgPosition].classList.add("zId1");
            miniatureArray[imgPosition].classList.add("borderImg");
            imgPosition++;
        } else {
            imgsArray[imgPosition - 1].classList.remove("zId1");
            miniatureArray[imgPosition - 1].classList.remove("borderImg");
            imgPosition = 0;
            imgsArray[imgPosition].classList.add("zId1");
            miniatureArray[imgPosition].classList.add("borderImg");
        }
    }

    // TASTO INDIETRO
    function back() {
        if(imgPosition == imgsArray.length) {
            // imgsArray[imgPosition].classList.remove("zId1");
            imgPosition--;
            imgsArray[imgPosition].classList.add("zId1");
            miniatureArray[imgPosition].classList.add("borderImg");
        } else if (imgPosition == 0) {
            imgsArray[imgPosition].classList.remove("zId1");
            miniatureArray[imgPosition].classList.remove("borderImg");
            imgPosition = imgsArray.length - 1;
            imgsArray[imgPosition].classList.add("zId1");
            miniatureArray[imgPosition].classList.add("borderImg");
        } else {
            imgsArray[imgPosition].classList.remove("zId1");
            miniatureArray[imgPosition].classList.remove("borderImg");
            imgsArray[imgPosition - 1].classList.add("zId1");
            miniatureArray[imgPosition - 1].classList.add("borderImg");
            imgPosition--;
        }
    }