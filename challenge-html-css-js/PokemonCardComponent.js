class PokemonCard extends HTMLElement {
    constructor(imgURL, name, color) {
        super();
  
        let shadow = this.attachShadow( { mode: 'open' } );
        let templateElem = document.getElementById('PokemonCardTemplate');
        let content = templateElem.content.cloneNode(true);
  
        let styles = document.createElement('link');
        styles.setAttribute('rel', 'stylesheet');
        styles.setAttribute('href', './style.css');
        
        shadow.appendChild(styles);

        content.querySelector('.single-container > img').setAttribute('src', imgURL);
        content.querySelector('.single-container > .name').innerText = name;
        content.querySelector('.single-container').style.backgroundColor = color;

        shadow.appendChild(content);
    }
}

customElements.define('pokemon-card', PokemonCard);