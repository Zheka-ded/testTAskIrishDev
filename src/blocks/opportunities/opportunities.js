const heroList = [
    'big-star-bg-1.png',
    'big-star-bg-2.png',
    'big-star-bg-3.png',
    'big-star-bg-4.png',
    'big-star-bg-5.png',
];

(()=> {
    const circleBG = document.querySelector('.opportunities__clients-bigcircle');
    const starBG = document.querySelector('.opportunities__clients-bigstar');
    let count = 0;
    const pictureChangeFunc = (lists) => {
        count + 1 === lists.length ? count = 0 : count++; 

        circleBG.style.background = `url(./img/big-star-bg-${count + 1}.png)`;
        circleBG.style.backgroundPosition = `center`;
        circleBG.style.backgroundSize = `cover`;
        circleBG.style.backgroundRepeat = `no-repeat`;
        
        starBG.style.background = `url(./img/big-star-bg-${count + 1}.png)`;
        starBG.style.backgroundPosition = `center`;
        starBG.style.backgroundSize = `cover`;
        starBG.style.backgroundRepeat = `no-repeat`;
    }

    setInterval(() => pictureChangeFunc(heroList), 5000);
})();