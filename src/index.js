import './styles/style.less';
import './Menu';
import './Card';
import data from './data';
import Card from "./Card";
import Category from "./Category";
import Application from './Application';

window.addEventListener('load', function () {
    return document.body.appendChild(new Application(data).render());
});




// const newCard = new Card(data[1][0], true);
// document.body.appendChild(newCard.create());

//

// const newCat = new Category(data[0][0], data[8]);
// document.body.appendChild(newCat.render());

// const newApp = new Application(data);
// document.body.appendChild(newApp.render());

