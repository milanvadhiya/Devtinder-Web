# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.





# DevTinder

- create a vite + React Application.
- remove the unecessary code. 
- install tailwind css
- install daisyUi and add navbar component into app.jsx
- create navbar as a seprate component 
- install react-router-dom
- browser router create 
- add childern router like profile and login
- add outlet in body component
- crete a footer...



- create a login page...
- install Axios 
- install cors in backend => add middleware to app to with configuration {origin:"", credentials:true } 
- whenevr make api called add... like axios.post {withCredentials:true} => then we get token back to browers as a token..
- install redux toolkit
-configure  a store =>provider=> create a slice=> add reducer to store 
- add redux devtools in crome 
- login and see if your data is comming in the store 
- navbar shoulld updated as soon as login
- reafactor code to add contant js file maked


- you should not be able to login without autherized
- if token is not present redirect to the login page
- logout and profile page edit page..

Body 
 - navbar
   - route=/ => feed
   - route= /login =>login
   - route=/connection => Connections 
   - route=/profile => profile 