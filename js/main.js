const imgSrc = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


    // inserisco le immagini nell'HTML
    for (i = 0; i < imgSrc.length; i++) {
        let immagineDaInserire = `<img src="${imgSrc[i].image}">`;

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