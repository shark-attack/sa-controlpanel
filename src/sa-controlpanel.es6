class SAControlPanel extends HTMLElement {
    setProperties() {
    };

    runTask(task) {
        var xhr = new XMLHttpRequest();
        //xhr.addEventListener('load', () => {});
        xhr.open("get", 'api/run/?task=' + task, true);
        xhr.send();
    };

    registerElements() {
        this.dom = {};
        this.dom.packageBtn = this.root.querySelector('#package');
        this.dom.discoverBtn = this.root.querySelector('#discover');
        this.dom.cleanBtn = this.root.querySelector('#clean');
    };

    /**
     * parse attributes on element
     */
    parseAttributes() {
        if (this.hasAttribute('uri')) {
            this.uri = this.getAttribute('uri');
        }

    };

    // Fires when an instance of the element is created.
    createdCallback() {
        this.setProperties();
        this.parseAttributes();
    };

    // Fires when an instance was inserted into the document.
    attachedCallback() {
        let template = this.owner.querySelector('template');
        this.root = this.createShadowRoot();
        let clone = document.importNode(template.content, true);
        this.root.appendChild(clone);
        this.registerElements();

        this.dom.packageBtn.addEventListener('click', event => { this.runTask(event.currentTarget.id); } );
        this.dom.discoverBtn.addEventListener('click', event => { this.runTask(event.currentTarget.id); } );
        this.dom.cleanBtn.addEventListener('click', event => { this.runTask(event.currentTarget.id); } );
    }


    // Fires when an instance was removed from the document.
    detachedCallback() {};

    // Fires when an attribute was added, removed, or updated.
    attributeChangedCallback(attr, oldVal, newVal) {};

}

SAControlPanel.prototype.owner = (document._currentScript || document.currentScript).ownerDocument;
document.registerElement('sa-controlpanel', SAControlPanel);
