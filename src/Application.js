import Card from "./Card";
import Category from "./Category";

class Application {
    constructor(data) {
        this.data = data;
        this.appContainer = document.createElement('div');

    }

    render() {
        this.appContainer.classList.add('app__container');

        for(let i = 0; i < 8; i++) {
            let category = new Category(this.data[0][i], this.data[i+1]);

            const front = document.createElement('div');
            front.id = `category ${i}`;
            const frontImage  = document.createElement('div');
            const categoryName = document.createElement('div');

            frontImage.style = `background-image: url(${this.data[i + 1][0].image});`;
            categoryName.innerText = category.categoryName;

            front.classList.add('category__card');
            frontImage.classList.add('card__front-image');
            categoryName.classList.add('card__word');

            front.appendChild(frontImage);
            front.appendChild(categoryName);
            this.appContainer.appendChild(front);
            front.addEventListener('click', function () {
                document.querySelectorAll('.category__card').forEach(element => element.remove());
                document.querySelector('.app__container').appendChild(category.render());
            });

            // const menuLink = document.getElementById(`${i - 10}`);
            // menuLink.addEventListener('click', function () {
            //     document.querySelectorAll('.category__card').forEach(element => element.remove());
            //     document.querySelector('.app__container').appendChild(category.render());
            // });
        }

        return this.appContainer;
    }
}

export default Application;
