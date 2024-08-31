<p align="center">
  <a href="https://laniakea-store.herokuapp.com">
    <img src="https://firebasestorage.googleapis.com/v0/b/laniakea-coder.appspot.com/o/laniakea-coder%2Fmain-logos%2Fark-store-white.png?alt=media&token=cb0380e4-4649-4308-a662-406a81cad11b" alt="Logo" width="100" height="auto">
  </a>

  <h3 align="center">Laniakea Store!</h3>

  <p>This is a version 2 of original project, updating everything about libraries and some outdated mechanics like as request Firebase methods, unified some code fragments that increases code readability and maintenance.</p>

  <p align="center">
    ReactJS + Vite!
    <br />
    <br />
    <a href="https://github.com/amilcar-laniakea/laniakea-store"><strong>Repo address</strong></a>
  </p>
</p>

<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <ul>
        <li><a href="#installation">Installation</a></li>
         <li><a href="#features">Features</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<p align="center">
  <a href="https://laniakea-store.herokuapp.com">
    <img src="https://firebasestorage.googleapis.com/v0/b/laniakea-coder.appspot.com/o/laniakea-coder%2Fmain-logos%2Fark-store.png?alt=media&token=080b14f4-b217-437f-a1f2-ffe04ff46496" alt="Logo" width="100" height="auto">
  </a>
</p>

<!-- ABOUT THE PROJECT -->

## About The Project

Laniakea project made with ReactJS + Vite.

### Built With

Frameworks/libraries used:

- [Ant Design](https://ant.design/)
- [Carousels with](https://www.npmjs.com/package/react-awesome-swiper)
- [Meta Descriptions](https://www.npmjs.com/package/react-helmet)
- [react-router-dom](https://reactrouter.com/web/guides/quick-start)
- [node sass](https://www.npmjs.com/package/node-sass)

### Others

Another Libraries what was used in this proyect:

- [React Awesome Swiper](https://www.npmjs.com/package/react-awesome-swiper)
- [Firebase](https://www.npmjs.com/package/firebase)

## Getting Started

This is an example of how you may give instructions on setting up your project locally. To get a
local copy up and running follow these simple example steps.

### Installation

1. Clone the Project
2. Make "npm install or pnpm install or yarn install" for install all dependencies required for the project
3. Do "npm run start:dev" for run the project
4. Project is listen in por 9000

### Features

1. The Project is a basic example of how works a e-commerce website in a react library
2. Have mainly 5 sections or pages: Home, Orders, Categories, Detail Product and Cart component
3. In Home component or page, we will see a example of slideshow what takes place on the top of the
   page, next we will se a simple carousel what displays some e-commerce elements based in the
   attribute 'featured' and last simple text example filled with lorem ipsum.
4. In the Detail Product, we can see a some atributes and 2 principal components, amount products
   what validate property the actual stock in firebase database on the current display item, and
   last the button add, what is disable and no action when its isn't product stock, and when exist,
   the action button disappear conditionally when takes place the product in the cart.
5. In the category section, its takes place the filtered products provided for firebase database,
   for attribute category_name, and displays the current items with the respective stock
6. In Order section, its list all orders created for the success payment in cart mechanic purchase
7. the Cart Component, It have all the validations needed for manage stock and quantity prices, when
   takes action the button Pay, One function checks the stock on the cart product, and if one of
   them doesn't have enough stock, the function return a false and can't process the form payment,
   in the other hand when is success the stock check, display a form what request the basic info
   buyer. In the last step, the function what proccess the payment successfully, diminish the stock
   on all products in the firebase database and clear all the variables involved in the process,
   including localstorage cart.

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

About me - [@arkhalem](https://twitter.com/ArKhaleM) - amilcar.laniakea@gmail.com

Project Link:
[https://github.com/amilcar-laniakea/laniakea-store](https://github.com/amilcar-laniakea/laniakea-store)

Demo: [https://laniakea-store.herokuapp.com](https://laniakea-store.herokuapp.com)
