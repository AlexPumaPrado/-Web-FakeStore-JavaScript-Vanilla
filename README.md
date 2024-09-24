# Make It Real - FAKE STORE

This is a solution to the "Aplicación Web con JavaScript Vanilla" of the Make It Real course.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to: Users will be able to view a "Aplicación Web con JavaScript Vanilla".


### Screenshot

![image](https://github.com/user-attachments/assets/81062513-6c41-4d61-808d-6dee76aa766e)



## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Javascript 

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
 <body>
  <h1>Products</h1>
  <main class="container">
    <div id="products" class="product-container"></div>
  </main>
  <script src="app.js"></script>
</body>

```
```css
.product-button:disabled {
  background-color: #aaa;
  cursor: not-allowed;
}
```
```js
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
```


### Continued development

For future projects, I will focus on image optimization to ensure fast loading times. I'll also explore more about implementing Js.

### Useful resources

- https://fakestoreapi.com/docs
- https://fake-ecommerce-api.netlify.app/docs

## Author

- Alexander Puma Prado
- Linkedin - [@AlexanderPuma](https://www.linkedin.com/in/alexander-puma-prado/)


## Acknowledgments

I am grateful to the teachers of the project and the authors of the visual and written internet resources.
