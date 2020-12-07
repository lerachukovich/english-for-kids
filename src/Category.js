import Card from "./Card";
import {data} from "./data.js";

class Category {
    constructor(categoryName, categoryData) {
        this.categoryName = categoryName;
        this.categotyData = categoryData;
        this.categoryContainer = document.createElement('div');
    }

    render() {
        this.categoryContainer.classList.add('category__container');

        for(let i = 0; i < 8; i++) {
            let card = new Card(this.categotyData[i], true);
            let cardContainer = card.create();
            cardContainer.id = `${i}`;
            this.categoryContainer.appendChild(cardContainer);
        }

        return this.categoryContainer;
    }
}

export default Category;
