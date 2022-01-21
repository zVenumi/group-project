const menuItems = document.querySelectorAll('.menu-item')

const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
    })
})

// this is too hard lol and i ran out of time to try to make the js activate the notifications