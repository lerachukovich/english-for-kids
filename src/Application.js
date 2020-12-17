import Category from "./Category";

class Application {
    constructor(data) {
        this.data = data;
        this.appContainer = document.createElement('div');
        this.menuContainer = document.createElement('ul');
        this.categoryContainer = document.createElement('div');
    }

    render() {
        this.appContainer.classList.add('app__container');
        this.categoryContainer.classList.add('category__container');
        this.appContainer.appendChild(this.categoryContainer);
        this.renderCategoryCard();
        return this.appContainer;
    }

    renderCategoryCard(){
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
            this.categoryContainer.appendChild(front);

            front.addEventListener('click', function () {
                document.querySelectorAll('.app__container > *').forEach(element => element.remove());
                document.querySelector('.app__container').appendChild(category.render());
            });
        }
    }


    renderMenu() {
        this.menuContainer.classList.add('menu__list');
        let mainPage = document.createElement('li');
        mainPage.classList.add('menu__item');
        let mainPageLink = document.createElement('a');
        mainPageLink.classList.add('menu__link');
        mainPage.appendChild(mainPageLink);
        this.menuContainer.appendChild(mainPage);
        mainPageLink.innerText = 'Main Page';
        mainPageLink.href = "";
        this.renderMenuLink();
        return this.menuContainer;
    }

    renderMenuLink() {
        for(let i = 0; i < 8; i++) {
            let category = new Category(this.data[0][i], this.data[i+1]);

            let menuItem = document.createElement('li');
            menuItem.classList.add('menu__item');

            let menuLink = document.createElement('a');
            menuLink.classList.add('menu__link');

            menuItem.appendChild(menuLink);
            this.menuContainer.appendChild(menuItem);
            menuLink.innerText = this.data[0][i];
            menuLink.id = `cat${i + 1}`;

            menuLink.addEventListener('click', function () {
                document.querySelectorAll('.menu__link').forEach(el => el.classList.remove('active'));
                menuLink.classList.add('active');
                document.querySelectorAll('.app__container > *').forEach(element => element.remove());
                document.querySelector('.app__container').appendChild(category.render());
            });
        }
    }


}

export default Application;
