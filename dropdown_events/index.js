let navElement = document.querySelector('nav');
let currentElement;

navElement.onclick = (event) => 
{
    if(event.target.matches('li')) {
        if (currentElement !== undefined) {
            toggleDropdown(currentElement);
        }
        currentElement = event.target;
        toggleDropdown(currentElement);
    }
}

function toggleDropdown(dropdownElement)
{
    const subMenu = dropdownElement.querySelector('ul');

    subMenu.classList.toggle('show');
    dropdownElement.classList.toggle('clicked');
}


