class presentationCard extends HTMLElement {
    constructor() {
        super();

        let shadow = this.attachShadow({ mode: 'open' });

        let wrapper = document.createElement('div');
        wrapper.setAttribute('class','wrapper');

        let name = document.createElement('h3');
        name.setAttribute('class','name');
        name.textContent = this.getAttribute('name');
        
        let shortDescription = document.createElement('p');
        shortDescription.setAttribute('class','shortDescription');

        let data = this.getAttribute('desc');
        shortDescription.textContent = data;

        let imgUrl;
        if(this.hasAttribute('img')) {
            imgUrl = this.getAttribute('img');
        } else {
            imgUrl = './stormtrooper.jpg';
        }

        let img = document.createElement('img');
        img.src = imgUrl;

        let styles = document.createElement('link');
        styles.setAttribute('rel', 'stylesheet');
        styles.setAttribute('href', './style.css');

        shadow.appendChild(styles);
        shadow.appendChild(wrapper);
        wrapper.appendChild(img);
        wrapper.appendChild(name);
        wrapper.appendChild(shortDescription);
    }
}

customElements.define('presentation-card', presentationCard);