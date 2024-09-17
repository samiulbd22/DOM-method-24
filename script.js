//mode open working
class myWebComponent extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({
            mode:"closed"
        })
        
    }
    connectedCallback(){
        this.shadowRoot.innerHTML =`<p>this is shadow paragraph tag</p>`;
    }
}
//mode closed working
class myWebComponent extends HTMLElement {
    constructor(){
        super();
        this.myRoot = this.attachShadow({
            mode:"closed"
        })
        
    }
    connectedCallback(){
        this.myRoot.innerHTML =`<p>this is shadow paragraph tag</p>`;
    }
}
window.customElements.define("my-web-component",myWebComponent)