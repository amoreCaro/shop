// Output products into HTML page
fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
        data.forEach(product => {
            const markup = `<li>
                                Title: ${product.title}
                                Description: ${product.description}
                                Title: ${product.price}
                                <img src="${product.image}">
                            </li>`;

            document.querySelector('ul').insertAdjacentHTML('beforeend', markup);
        });
    })
    .catch(error => {
        // Handle any errors that occur during the fetch
        console.error('Error fetching products:', error);
    })