/* custom header element */
class MyHeader extends HTMLElement{
    connectCallback(){
        this.innerHTML = `
            <h1>My Header</h1>
        `;
    };
}

/* link to element for parser */
customElements.define('my-header', MyHeader);