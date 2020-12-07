// import {data} from "./data.js";
class Card {
  constructor(wordObject, isFlippable) {
    this.name = wordObject.word;
    this.translation = wordObject.translation;
    this.image = wordObject.image;
    this.audio = wordObject.audio;
    this.isFlippable = isFlippable;
    this.cardContainer = document.createElement('div');
  }

  create() {
    const front = document.createElement('div');
    const back = document.createElement('div');
    const rotateIcon = document.createElement('div');
    const frontImage  = document.createElement('div');
    const backImage = document.createElement('div');

    // const  audio  = document.createElement('div');
    const englishWord = document.createElement('div');
    const translatedWord = document.createElement('div');

    frontImage.style = `background-image: url(${this.image});`;
    backImage.style = `background-image: url(${this.image});`;
    englishWord.innerText = this.name;
    translatedWord.innerText = this.translation;

    this.cardContainer.classList.add('card');
    front.classList.add('card__front');
    back.classList.add('card__back');
    rotateIcon.classList.add('card__rotate-icon');
    frontImage.classList.add('card__front-image');
    backImage.classList.add('card__back-image');
    // audio.classList.add('card__audio');
    englishWord.classList.add('card__word');
    translatedWord.classList.add('card__word');

    front.appendChild(frontImage);
    front.appendChild(englishWord);
    front.appendChild(rotateIcon);
    // front.appendChild(audio);
    back.appendChild(backImage);
    back.appendChild(translatedWord);
    this.cardContainer.appendChild(front);
    this.cardContainer.appendChild(back);

    rotateIcon.addEventListener('click', function () {
      front.classList.add('rotate__front');
      back.classList.add('rotate__back');
    });

    rotateIcon.addEventListener('mouseleave', function () {
      front.classList.remove('rotate__front');
      back.classList.remove('rotate__back');
    });
    return this.cardContainer;
  }
}

export default Card;
