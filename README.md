# REAK's Website

Repo for building and maintaining our new v2 website.

### Idea

The idea is to re-energise the brand with a new look and color-scheme, The new website will feature
a simple limited page layout with major emphasis on keeping up with the project list populated and
blog.

### Design Contribution

For design we are using Adobe XD, The file is available for review and download on the following
link
[https://xd.adobe.com/view/0916c710-6152-4233-8d0c-9c2d4763ba38-5c45/](https://xd.adobe.com/view/0916c710-6152-4233-8d0c-9c2d4763ba38-5c45/)

### Code Contribution

You can start contributing to the code by forking the github repo and sending a PR with the changes.

### Setting up Local Development Environment

The project is built using Hugo and Tailwind.

* First install hugo on your local machine
[https://gohugo.io/getting-started/installing](https://gohugo.io/getting-started/installing)

* Install Dependencies
`npm install`

* Compile CSS
`./node_modules/.bin/postcss src/style/style.css -o src/static/assets/css/style.css`

* Start Hugo Server
`hugo -s src server`
