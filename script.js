import { products } from './products.js';
import { filterProducts } from './filter.js';

function updateCartCount() {
    let cartCount = 0;

    document.getElementById('cart-count').textContent = cartCount;

    function incrementCartCount() {
        cartCount++;
        document.getElementById('cart-count').textContent = cartCount;
    }

    function decrementCartCount() {
        if (cartCount > 0) {
            cartCount--;
            document.getElementById('cart-count').textContent = cartCount;
        }
    }

    return { incrementCartCount, decrementCartCount };
}
const cartCounter = updateCartCount();  // To call this function inside the event listener of Add To Cart button, you can use the following code:

const divFilterContainer = document.querySelector('.filter-container');
divFilterContainer.innerHTML += `
    <div class="filter-title-container">
        <h2 class="filter-title">Filters</h2>
    </div>
    `;

    const divFilterItemContainer = document.createElement('div');
    divFilterItemContainer.classList.add('filter-item-container');

filterProducts.forEach((product) => {
    divFilterItemContainer.innerHTML += `
        <div class="filter-option-header-part filter-option-${product.filterOption}-header-part">
            <div class="filter-option-icon filter-option-${product.filterOption}-icon">
                <img src="${product.filterIcon}" alt="${product.filterName} Icon" class="filter-icon-svg">
            </div>
            <div class="filter-option-title filter-option-${product.filterOption}-title">
                <h2 class="filter-title ${product.filterOption}-filter-title">${product.filterName}</h2>
            </div>
            <div class="filter-option-dropdown-arrow">
                <img src="images/svg/dropdown-arrow.svg" alt="Dropdown Arrow" class="dropdown-arrow-svg">
            </div>
        </div>
    `;
product.brandFilters.forEach((brand) => {
    const filterOptionContainer = document.createElement('div');
    filterOptionContainer.classList.add('filter-option-container', `filter-option-${brand.brandOption}-container`);

    const filterOptionsList = document.createElement('ul');
    filterOptionsList.classList.add('filter-options-list', `filter-options-${brand.brandOption}-list`);
    
    const filterOptionItem = document.createElement('li');
    filterOptionItem.classList.add('filter-option-item', `filter-option-${brand.brandOption}-item`);
    filterOptionItem.innerHTML = `
        <label for="${brand.filterId}">${brand.filterTitle}</label>
        <input type="radio" name="${brand.filterName}" id="${brand.filterId}" value="${brand.filterValue}" ${brand.isChecked}></input>
        `;
    filterOptionsList.appendChild(filterOptionItem);
    filterOptionContainer.appendChild(filterOptionsList);
    divFilterItemContainer.appendChild(filterOptionContainer);
}); 
});

divFilterContainer.appendChild(divFilterItemContainer);