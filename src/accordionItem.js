class AccordionItem {
    constructor(params) {
        this.main     = this.createMainElement();
        var box       = this.createMainBox();
        var title     = this.buildElement(params['title'], 'accordion-title');
        var subtitle  = this.buildElement(params['subtitle'], 'accordion-subtitle');
        var content   = this.buildElement(params['content'], 'accordion-content-hidden');

        this.main.appendChild(box);
        box.appendChild(title);
        subtitle && box.appendChild(subtitle);
        if (subtitle) {
            this.main.classList.add('accordion-item-tall');
        } else {
            this.main.classList.add('accordion-item-small');
        }
        box.appendChild(content);
        this.main.appendChild(this.createButton());
    }

    getItem() {
        return this.main;
    }

    createMainElement() {
        var main = document.createElement('div');
        main.classList.add('accordion-item');
        return main;
    }
    createMainBox() {
        var box = document.createElement('div');
        box.classList.add('accordion-item-box');
        return box;
    }
    createButton() {
        var button   = document.createElement('div');
        var icon     = document.createElement('i');
        var iconText = document.createTextNode('ic_keyboard_arrow_down');
        icon.classList.add('material-icons');
        icon.classList.add('md-26');
        icon.appendChild(iconText);
        button.classList.add('accordion-button');
        button.appendChild(icon);
        return button;
    }
    buildElement(text, className) {
        if (!text) return null;
        parent = document.createElement('div');
        parent.appendChild(document.createTextNode(text));
        parent.classList.add(className);
        return parent;
    }
}
