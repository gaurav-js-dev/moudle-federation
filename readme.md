# Micro-frontend App with module federation.

## Introduction

### This repository is a monorepo which contains multiple apps under packages folder along with a container to render all micro front end apps. Deployed Live Link : [https://d1joqfxa6sdgt6.cloudfront.net/](https://d1joqfxa6sdgt6.cloudfront.net/)

1. **Marketing**
2. **Auth**
3. **Dashboard**

##### Marketing is the default Home Page shown upon landing to the user at root url.   

##### Auth page is a login form to allow a user to access the /dashboard page. 

##### Dashboard page /dashboard shows a dummy dashboard page to logged in users only.

### Usage

#### This project uses npm. First you have to run each micro frontend app.After cloning this repo cd into each app i.e cd packages/marketing then run following command `npm run start` this will serve each microfront end app on it's own dedicated port. To use main container with all apps together browse to localhost:8080

Note : Auth part is just for demonstration of sub-module. To login or sign up just click on sign in or sign up button with any text there is no validation required. Without login users cannot access the /dashboard page it will redirect to default root landing page.

- Container on localhost:8080
- Marketing on localhost:8081
- Auth      on localhost:8082
- Dashboard on localhost:8083

#### Technical learning points along with technologies used

1. Created Microfrontends from scratch with native webpack 5 module federation without any frameworks like NEXT or NX.

2. Linked multiple apps together via implementing a tiered routing system. Routing even works for independent remote apps without container.

3. Utilized multiple front-end frameworks in generic manner React and Vue working together smooth.Future proof code for easy addition or removal of apps from any similar js framework.

4. Scoped CSS on all apps to prevent cross-app contamination.

5. CI/CD pipeline created to automate release & deployment process.

6. Deployed app to live url with AWS cloud front and S3 bucket. 

7. Deployment of each portion app independently gave an idea how to avoid production bugs.

