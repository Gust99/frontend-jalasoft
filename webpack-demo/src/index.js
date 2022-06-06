import _ from 'lodash';
import './style.css';

function component() {
    const element = document.createElement('div');
    element.classList.add('hello');
    element.innerHTML = _.join(['Hello','Webpack'],' ');

    return element;
}

document.body.appendChild(component());