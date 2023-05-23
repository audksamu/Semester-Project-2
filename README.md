# Semester Project 2 , Mountain Diva Shoes


![Home_-_Mountain_Diva_Shoes_–_Personlig_–_Microsoft__Edge_2023-05-23_13-37-41_AdobeExpress](https://github.com/audksamu/Semester-Project-2/assets/61708040/58224caf-7757-4399-8fe8-57d860a9e65f)


This project is a school project from my studies at the Noroff School of technology and digital media. The project are a simple e-comerce website with both customer-facing and admin section.
The website are build responsive with mobile-first in mind.
Noroff has providet a Strapi API for populating the website.

Details for the assignements can be found in this file : [Semester Project 2 - oppgave.pdf](./Semester%20Project%202%20-%20oppgave.pdf)



## Description

General design for the website are a 1-3 column layout where there are one columns in mobile view and three columns for wider screens.
The website have a customer facing part where the users can browse through the products, get more details about he products and adding/removing products to the cart.
In this assignement there is not includet any checkout for the user as this was not in the scope of the project.
There are also a administration section for the administrators to manage products.

When the user opens the website they will be presented to a landingpage with a hero banner where the image in the hero banner beeing fetch from home route in the Strapi API.
The Hero banner can be administrated by the Strapi Project administrator. (Single types - Home )
![Strapi Project - Admin page, Single Types - Home](https://github.com/audksamu/Semester-Project-2/assets/61708040/0ad96467-5cee-4e49-a19e-5977e1a4a454)

Further down under the Hero Banner there will be a list off all of the shops featured products. Marking products as featured are beeing done in the admin section.

The webpage has a header presenting the Company logo and company name (linked to "/") , a Responsive NAV bar and a shopping cart icon linked to the shopping cart.

![Web page header](https://github.com/audksamu/Semester-Project-2/assets/61708040/c7678b80-4259-4dca-9ade-64f1b36e4d69)

The NAV menus has four options

- Home (Link to landing page)
- Products (Link to products page)
- Shopping cart (Link to shopping cart. Same as the shopping cart symbol)
- Login (Link to admin login page)

### Home
Landing page with hero banner and list of featured products with products image, proce and buttion for details. Click any products to get to the Products Details page

### Products
Products page lists all available products with products image, price and a button for details page.
There is also a search field where you can search for poducts. The search function will search in both products title and descriptions field.
![Products page](https://github.com/audksamu/Semester-Project-2/assets/61708040/a4239a75-f622-4753-b63a-45460fcddf07)


### Shopping cart
The shopping cart displays all products in the cart, their price and total price. It's also possible see the products details page and from there remove products from the cart. The shopping cart has two buttons *Continue shopping* and *Clear cart* . 
There is no checkout button since that was not in the scope for this assignement.
![Shopping cart](https://github.com/audksamu/Semester-Project-2/assets/61708040/38545ff8-6bbd-4a2a-8211-f6a75c78aec4)


### Product details
Home page, Products page and Shopping cart all calls the same Products details function.
This is a **modal** poping up when clicking the details button. The modal shows the product image, details about the product, product price and has two buttons.
One cart button that will add / remove products to the shopping cart. This button has text that changes depending on if the product already in the cart or not.
The other button are a close button.
![Products details modal](https://github.com/audksamu/Semester-Project-2/assets/61708040/c8855bc5-d200-4818-825a-c4b388eae08b)



## Built With

This project are using a Strapi project providet by Noroff as backend server.

**Remark** The project where originaly build for the old version of the Strapi project. There are a newer version of the Strapi project from Noroff, but this project has not been adapted to the new version.
[Noroff StrapiProjecj](https://github.com/NoroffFEU/strapi-sp2)

Se the Strapi projects README.md file for details.

The Semester-Project-2 are a HTML,CSS,JS project using Botstrap and SASS

- [Bootstrap](https://getbootstrap.com)
- [Sass(https://sass-lang.com/)

## Getting Started

You must first clone and run the Noroff Strapi project that will serve as backend server for the **Mountain Diva Shoes** website

### Installing the Noroff Strapi Project

1. Clone the strapiproject
```bash
git clone git@github.com:NoroffFEU/strapi-sp2.git
```

2. Install Strapi project and it's dependencies
```
npm install
```
You might get errors informing about vulnerabilities du to dependencies of old version.
If so, pay attention to the output from the install command and you will see what you needs to do to fix this.
Run neccesary audit fix commands to solve this.

3. Run Strapi Project

The Strapi project needs to be running so the main project can acces the Strapi server on local host.
```
npm run develop
```
During the build process you migth face problems with legacy hash algorithm that can be a litle cumberstone to overcome. ![0308010C Error](https://github.com/audksamu/Semester-Project-2/assets/61708040/31d431b7-4eff-4551-950c-60a774eb4284)
This error are caused by older version of *Webpack* using an unsuported MD4 hashing algorithm. There are several strategies that can be used to overcome a problem like this. In production environment you should always seek to opdate your project to support more modern security algorithmes, but for testing purpose it will be easier with a little dirty workaround.
In the Strapi projects *package.json* you can change the build script to accept legacy MD4 hash:

Change this: 

*"build": "strapi build",*

to this:

```bash
"build": "SET NODE_OPTIONS=--openssl-legacy-provider && strapi build",
```

Normally the strapi server will run om port 1337 and you can reach the admin page on [http://localhost:1337/admin/](http://localhost:1337/admin/)


### Cloning and running Mountain Diva Shoes

When the Strapi project are running, you need to clone the **Mountain Diva Shoes** repo and run the project.

1. Clone the project repo:

```bash
git clone git@github.com:audksamu/Semester-project-2.git
```
The project are a HTML, CSS, JS project so it's easiest to use your favorite developer tool to go live with the web site at localhost.
If you are using "Visual Studio Code" you can use the *Live Server Plugin*. You will also need the *Live Sass Compiler* plugin to ensurte Sass chenges are beeing automatically compiled.

![Visual Studio Code plugins](https://github.com/audksamu/Semester-Project-2/assets/61708040/9de48b49-fe19-4192-8dd0-679f103f1537)


## Contributing

This is a completed school project. and the project will therefore not be developed further.

## Contact

Feel free to contact me at LinkedIn or by E-mail

[My Email](kristinswork900@gmail.com)

[My LinkedIn page](linkedin.com/in/aud-kristin-s-996269192)

## Acknowledgments

This is where you can add any acknowledgements if you'd like, such as to people who have helped you or any code snippets you'd like to mention. You can delete this section if you don't have any acknowledgements to make.
