import styles from '../styles/style.less'

export class PokemonCard extends HTMLElement {
    constructor(imgURL, name, color, data) {
        super();
  
        let shadow = this.attachShadow( { mode: 'open' } );
        let templateElem = document.getElementById('PokemonCardTemplate');

        let style = document.createElement('style');
        style.textContent = styles;

        templateElem.appendChild(style);

        let content = templateElem.content.cloneNode(true);
  
        content.appendChild(style);

        // let styles = document.createElement('link');
        // styles.setAttribute('rel', 'stylesheet');
        // styles.setAttribute('href', './dist-gulp/css/all.css');

        shadow.appendChild(style);

        content.querySelector('.single-container > img').setAttribute('src', imgURL);
        content.querySelector('.single-container > .name').innerText = name;
        content.querySelector('.single-container').style.backgroundColor = color;
        content.querySelector('.modal .name').innerText = name;
        content.querySelector('.modal .abilities').innerHTML = data.abilitiesHTML;
        content.querySelector('.modal .stats').innerHTML = data.statsHTML;

        //MODAL
        content.querySelector('.single-container').addEventListener('click', event => this.openModal(event));

        shadow.appendChild(content);
    }

    openModal(event) {
        event.preventDefault();
            
        const modal = event.path.find(element => element.classList[0]==='single-container').nextElementSibling;

        modal.classList.add('open');
        
        const exits = modal.querySelectorAll('.modal-exit');
        
        exits.forEach(exit => {
            exit.addEventListener('click', event => {
                event.preventDefault();
                modal.classList.remove('open');
            });
        });
    }
}