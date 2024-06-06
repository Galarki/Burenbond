export class FormValidator {
    constructor(form) {
        this.form = form;
        this.validators = [];
        this.errors = [];

        //  Hier gebruiken we een arrow function zodat de this.onSubmit() naar form verwijst
        //  en niet naar iets binnen in de function zelf.

        this.form.addEventListener('submit', (event) => this.onSubmit(event));
    }

    addValidator(validator) {
        this.validators.push({
            ...validator, field: this.form.elements[validator.name]
        })
    }

    validate() {
        this.validators.forEach((validator) => {
            if (this.errors.includes(validator)) {
                console.log("Errors heeft deze validator al.")
                return;
            } else if (!validator.method(validator.field)) {
                console.log(`${validator} is toegevoegd aan errors.`)
                this.errors.push(validator);
            }

        });

        return this.errors.length === 0;
    }

    onSubmit(event) {
        this.resetSummary()
        this.removeInlineErrors();

        if (!this.validate()) {
            event.preventDefault();
            event.stopImmediatePropagation();
            this.showSummary();
            this.showInlineErrors();
        }


    }

    createInlineError(error) {
        const span = document.createElement('span');

        span.className = 'field-error';
        span.innerText = error.message;
        span.id = `${error.name}-error`;

        return span;
    }

    showInlineErrors() {
        this.errors.forEach((error) => {
            const errorElement = this.createInlineError(error);

            if (error.field instanceof Node) {
                error.field.classList.add('invalid');
                error.field.setAttribute('aria-invalid', 'true');
                error.field.labels[0].appendChild(errorElement);

            } else if (error.field instanceof NodeList) {
                error.field.forEach((node) => {
                    node.classList.add('invalid');
                    node.setAttribute('aria-describedby', errorElement.id);
                    node.setAttribute('aria-invalid', 'true');
                });

                const fieldSet = error.field[0].closest('fieldset');
                const legend = fieldSet.querySelector('legend');

                if (legend) {
                    legend.appendChild(errorElement);
                }
            }
        });
    }

    removeInlineErrors() {
        this.form.querySelectorAll('.field-error')
            .forEach((element) => element.remove());

        this.form.querySelectorAll('.invalid')
            .forEach((element) => {
                element.removeAttribute('aria-invalid');
                element.removeAttribute('aria-describedby');
                element.classList.remove('invalid');
            });
        this.errors = [];
    }

    createSummary(error) {
        const li = document.createElement('li');

        li.className = 'field-error';
        li.innerText = error.message;
        li.id = `${error.name}-error`;

        return li
    }

    showSummary() {
        this.errors.forEach((error) => {
            const li = this.createSummary(error);
            const summary = document.querySelector('.errorSummary ul')
            summary.appendChild(li);
        })
        const div = document.querySelector('.errorSummary');
        div.style.display = 'block'
        div.focus();
        div.tabIndex = 0;
    }

    resetSummary() {
        // this.errors = [];
        const div = document.querySelector('.errorSummary');
        div.style.display = 'none'
    }


}