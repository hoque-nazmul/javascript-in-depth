// ***** Working with Form ***** //
const form = document.getElementById('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let formData = {};
    let isValid = false;
    [...this.elements].forEach(element => {
        if (element.type !== 'submit') {
            isValid = validator(element);
            if (isValid) {
                formData[element.name] = element.value;
            }
            else {
                alert(`${element.name} is required!`);
            }
        }
    })
    if (isValid) {
        console.log(formData);
        this.reset();
    } 
});

const validator = (el) => {
    if (!el.value) {
        return false;
    }
    return true;
}