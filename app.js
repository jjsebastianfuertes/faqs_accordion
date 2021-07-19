customElements.define('drop-down',
    class extends HTMLElement {
        constructor(){
            super();
            let template = document.getElementById('drop-down');
            let templateContent = template.content;
            const shadowRoot = this.attachShadow({mode:'open'})
            .appendChild(templateContent.cloneNode(true));
        }
    }
)