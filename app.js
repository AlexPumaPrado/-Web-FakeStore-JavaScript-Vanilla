const productContainer = document.getElementById('products');

fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(products => {
    products.forEach((product, index) => {//Insertamos un index para poder ayudarnos con el temporizador más adelante
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');

      const productImage = document.createElement('img');
      productImage.classList.add('product-image');
      productImage.src = product.image;//Asigna la URL de la imagen del producto a la propiedad src del elemento de imagen
      productImage.alt = product.title;//Asigna el título del producto a la propiedad alt del elemento de imagen

      const productTitle = document.createElement('h2');
      productTitle.classList.add('product-title');
      productTitle.textContent = product.title;

      const productDescripcion = document.createElement('h3');
      productDescripcion.classList.add('product-descripcion');
      productDescripcion.textContent = product.description.slice(0, 80);//Toma la propiedad description del objeto product, y usa el método slice(0, 80) para obtener los primeros 80 caractere

      const productPrice = document.createElement('p');
      productPrice.classList.add('product-price');
      productPrice.textContent = `$${product.price}`;//Insertamos el valor del producto con el simbolo "$"

      // Crear el botón "Comprar"
      const btnProduct = document.createElement('button');
      btnProduct.classList.add('product-button');
      btnProduct.textContent = 'Comprar'; // Establecer el texto del botón

      //Crear el temporizador
      const tempDuration = document.createElement('p');
      tempDuration.classList.add('product-timer');
      let timeLeft;// Declaración del temporizador en segundo


      // Establecer el tiempo según el índice del producto
      if (index === 0) {
        timeLeft = 60; // 1 minuto
      } else if (index === 1) {
        timeLeft = 180; // 3 minutos
      } else {
        timeLeft = Math.floor(Math.random() * (300 - 30 + 1)) + 30; // Aleatorio entre 30 segundos y 5 minutos
      }

      // Función para actualizar el temporizador
      const updateTimer = () => {
        if (timeLeft > 0) {
          tempDuration.textContent = `Tiempo restante: ${timeLeft} segundos`;
          timeLeft--;
        } else {
          clearInterval(timerInterval);//Limpia la variale del temporizaor de la card
          tempDuration.textContent = "¡Tiempo agotado!";
          btnProduct.disabled = true;
        }
      };

      // Iniciar el temporizador al cargar la página
      const timerInterval = setInterval(updateTimer, 1000);

      // Agregar los elementos a la tarjeta del producto
      productCard.appendChild(productImage);
      productCard.appendChild(productTitle);
      productCard.appendChild(productDescripcion);
      productCard.appendChild(productPrice);
      productCard.appendChild(tempDuration); // Agregar el temporizador a la tarjeta
      productCard.appendChild(btnProduct);


      // Agregar la tarjeta del producto al contenedor
      productContainer.appendChild(productCard);

      // Agregar un evento al botón
      btnProduct.addEventListener('click', () => {
        alert(`Has comprado ${product.title} por $${product.price}!`);
        btnProduct.textContent = 'Comprado';
        clearInterval(timerInterval);
        tempDuration.textContent = "FELICIDADES POR COMPRAR!!";
      });

    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
