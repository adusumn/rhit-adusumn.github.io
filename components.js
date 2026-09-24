// Used to make the "buttons" work and stay across all the pages: https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements

class SiteNav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="navbar">
                <a class="normal" href="index.html">Home</a>
                <a class="normal" href="portfolio.html">Portfolio</a>
                <a class="normal" href="resume.html">Resume</a>
            </nav>
        `;
    }
}

class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = ` <footer id = "footer">
                <p>&copy; 2026 Nirdesh Adusumilli</p>
                <a href="https://www.linkedin.com/in/nirdeshadusumilli/">LinkedIn</a>
                <a href="https://github.com/nirdeshadusumilli2007">Github</a> </footer>`;
    }
}

customElements.define("site-nav", SiteNav);
customElements.define("site-footer", SiteFooter);