// Auto-scroll for products
const productScroll = document.getElementById('productScroll');
let productPos = 0;

setInterval(() => {
    productPos += 2;
    if (productPos >= productScroll.scrollWidth - productScroll.clientWidth) {
        productPos = 0;
    }
    productScroll.scrollLeft = productPos;
}, 50);

// Auto-scroll for brands
const brandScroll = document.getElementById('brandScroll');
let brandPos = 0;

setInterval(() => {
    brandPos += 2;
    if (brandPos >= brandScroll.scrollWidth - brandScroll.clientWidth) {
        brandPos = 0;
    }
    brandScroll.scrollLeft = brandPos;
}, 50);
