document.querySelector('.scroll-arrow').addEventListener('click', function () {
    document.querySelector('#next-section').scrollIntoView({
        behavior: 'smooth'
    });
});

document.addEventListener('DOMContentLoaded', function () {
    updateFormState();
    updateServiceItems();
});

window.addEventListener('resize', function () {
    updateFormState();
    updateServiceItems();
});

function updateFormState() {
    const quoteForms = document.querySelectorAll('.quote-form');

    quoteForms.forEach(function (quoteForm) {
        if (window.innerWidth < 768) {
            quoteForm.style.maxHeight = '0';
            quoteForm.style.padding = '0';
            quoteForm.style.display = 'none'; // hide the form initially
        } else {
            quoteForm.style.maxHeight = '';
            quoteForm.style.padding = '20px';
            quoteForm.style.display = 'block'; // show the form initially
        }
    });
}

function toggleQuoteForm(header) {
    const content = header.nextElementSibling;
    const arrow = header.querySelector('.arrow');
    const mainInfo = document.getElementById('main-info');

    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block'; // show the form
        const height = content.scrollHeight; // get the form's actual height
        content.style.maxHeight = '0px'; // set max-height to 0
        setTimeout(() => {
            content.style.maxHeight = 20 + height + 'px'; // set max-height to form's height
            content.style.padding = '20px'; // reset to original padding
        }, 0); // set max-height and padding after next repaint
        arrow.style.transform = 'rotate(180deg)';
        mainInfo.style.display = 'none'; // hide the main-info div
    } else {
        content.style.maxHeight = '0px';
        content.style.padding = '0'; // remove padding
        setTimeout(() => {
            content.style.display = 'none'; // hide the form
        }, 300); // hide form after transition ends
        arrow.style.transform = 'rotate(0deg)';
        mainInfo.style.display = 'block'; // show the main-info div
    }
}

function toggleServiceItem(serviceItem) {
    const content = serviceItem.querySelector('.service-content');
    const arrow = serviceItem.querySelector('.arrow');

    if (window.innerWidth <= 768) {
        if (content.style.maxHeight === '0px' || content.style.maxHeight === '') {
            content.style.maxHeight = content.scrollHeight + 'px';
            arrow.style.transform = 'rotate(180deg)';
        } else {
            content.style.maxHeight = '0px';
            arrow.style.transform = 'rotate(0deg)';
        }
    }
}

function updateServiceItems() {
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach(function (item) {
        const content = item.querySelector('.service-content');
        const arrow = item.querySelector('.arrow');
        if (window.innerWidth > 768) {
            content.style.maxHeight = 'none';
            arrow.style.transform = 'rotate(0deg)';
        } else {
            if (!content.style.maxHeight || content.style.maxHeight === 'none') {
                content.style.maxHeight = '0';
                arrow.style.transform = 'rotate(0deg)';
            }
        }
    });
}
