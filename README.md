# Semester Project 2 , Mountain Diva Shoes

![Mountain Diva Shoes homepage](https://github.com/audksamu/Semester-Project-2/assets/61708040/d72ee972-10a4-4397-a8fa-850c2402ead3)

This project is a school project from my studies at the Noroff School of technology and digital media. The project are a simple e-comerce website with both customer-facing and admin section.
The website are build responsive with mobile-first in mind.
Noroff has providet a Strapi API for populating the website.

## Description

Add a more detailed description of what your project entails and set out to do.

You can add some bullet points if you'd like to:

- List item 1
- List item 2
- List item 3

## Built With

This project are using a Strapi project providet by Noroff.

**Remark** The project where originaly build for the old version of the Strapi project. There are a newer version of the Strapi project from Noroff, but this project has not been adapted to the new version.
[Noroff StrapiProjecj](https://github.com/NoroffFEU/strapi-sp2)

Se the Strapi projects README.md file for details.

The Semester-Project-2 are a HTML,CSS,JS project using Botstrap and SASS

- [Bootstrap](https://getbootstrap.com)
- [Sass(https://sass-lang.com/)

## Getting Started

### Installing


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

2. Run Strapi

The Strapi project needs to be running so the main project can acces the Strapi server on local host.
```
npm run develop
```
During the build process you migth face problems with legacy hash algorithm that can be a litle cumberstone to overcome. ![0308010C Error](https://github.com/audksamu/Semester-Project-2/assets/61708040/31d431b7-4eff-4551-950c-60a774eb4284)
This error are caused by older version of *Webpack* using an unsuported MD4 hashing algorithm. There are several strategies that can be used to overcome a problem like this. In production environment you should always seek to opdate your project to support more modern security algorithmes, but for testing purpose it will be easier with a little dirty workaround.
In the Strapi projects *package.json* you can chenge the build script to accept legacy MD4 hash:
Change this: 
*"build": "strapi build",*
to this:
```bash
"build": "SET NODE_OPTIONS=--openssl-legacy-provider && strapi build",
```

Normally the strapi server will run om port 1337 and you can reach the admin page on [[Link to Strapi localhost admin page](http://localhost:1337/admin/)](http://localhost:1337/admin/)


3. Clone the project repo:

```bash
git clone git@github.com:audksamu/Semester-project-2.git
```

2. Install the dependencies:

```
npm install
```

### Running

Here is where you detail how to run the app. It typically involves the commands you'd need to run to start the project e.g.

To run the app, run the following commands:

```bash
npm run start
```

## Contributing

Here you can detail any information you want to provide regarding contributing to the project. For big projects you will usually have a separate `CONTRIBUTING.md` and link to it, but for smaller projects you can simply include instructions here. These instructions can simply detail the process you want a person to take, such as to make sure to open a pull request so code can be reviewed.

## Contact

Feel free to contact me at LinkedIn or by E-mail

[My Email](kristinswork900@gmail.com)

[My LinkedIn page](linkedin.com/in/aud-kristin-s-996269192)

## License

You can link to your license file here if you're using one, or mention what license the codebase falls under. If you're unsure then you can simply delete this section.

## Acknowledgments

This is where you can add any acknowledgements if you'd like, such as to people who have helped you or any code snippets you'd like to mention. You can delete this section if you don't have any acknowledgements to make.
