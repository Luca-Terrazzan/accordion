class AccordionItem {
    constructor(params) {
        var content   = this.buildElement(params['content'], 'accordion-content');
        var subtitle  = this.buildElement(params['subtitle'], 'accordion-subtitle');
        var title     = this.buildElement(params['title'], 'accordion-title');
        var box       = this.createMainBox();
        var button   = this.createButton()
        this.main     = this.createMainElement(content, button);
        content.classList.add('hidden');

        this.main.appendChild(box);
        box.appendChild(title);
        subtitle && box.appendChild(subtitle);
        if (subtitle) {
            this.main.classList.add('accordion-item-tall');
        } else {
            this.main.classList.add('accordion-item-small');
        }
        box.appendChild(content);
        this.main.appendChild(button);
    }

    getItem() {
        return this.main;
    }

    createMainElement(content, button) {
        var main = document.createElement('div');
        main.classList.add('accordion-item');
        main.classList.add('inactive');
        main.onclick = function(){
            this.classList.toggle('active');
            content.classList.toggle('hidden');
            button.childNodes[0].classList.toggle('open');
        }
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
        icon.classList.add('material-icons');
        icon.classList.add('md-26');
        button.classList.add('accordion-button');
        button.appendChild(icon);
        return button;
    }
    buildElement(text, className) {
        if (!text) return null;
        parent = document.createElement('div');
        // parent.appendChild(document.createTextNode(text));
        parent.innerHTML = text;
        parent.classList.add(className);
        return parent;
    }
}
