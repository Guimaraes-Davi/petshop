function addToCart(event) {
    const product = event.target.parentNode;
    const productName = product.querySelector('h2').innerText;
    const productImage = product.querySelector('img').src;
    const productPrice = product.querySelector('p:nth-child(3)').innerText;
  
    const productData = {
      name: productName,
      image: productImage,
      price: productPrice
    };
  
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    cart.push(productData);
  
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  const buyButtons = document.querySelectorAll('.buy-btn');
  
  buyButtons.forEach(button => {
    
    button.addEventListener('click', addToCart);
  });
