/* custom header element */
class MyHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <!--header-->
        <header class="header">
            <div class="inner_header noSelect">
                <div class="logo_container">
                    <h1>alizard's <span>site</span></h1>
                </div>

                <nav class="navbar noSelect">
                    <button type="button" onclick="location.href='/index.html'">HOME</button>
                </nav>
            </div>
        </header>
        `;
    };
};
/* link to element for parser */
customElements.define('my-header', MyHeader);