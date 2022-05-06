class PokemonCard extends HTMLElement {
    constructor() {
        super();

        let shadow = this.attachShadow( { mode: 'open' } );
        let templateElem = document.getElementById('PokemonCardTemplate');
        let content = templateElem.content.cloneNode(true);

        let styles = document.createElement('link');
        styles.setAttribute('rel', 'stylesheet');
        styles.setAttribute('href', './style.css');
        
        shadow.appendChild(styles);

        content.querySelector('.single-container > img').setAttribute('src', this.getAttribute('img'));
        content.querySelector('.single-container > .name').innerText = this.getAttribute('name');

        shadow.appendChild(content);
    }
}

customElements.define('pokemon-card', PokemonCard);