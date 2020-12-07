import './styles/style.less';
import './Menu';
import data from './data';
import Application from './Application';

window.addEventListener('load', function () {
    let App = new Application(data);
     document.body.appendChild(App.render());
     document.querySelector('.menu').appendChild(App.renderMenu())
});
