import React from 'react'; 
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);




// import React from 'react'; permite cargar un solo script dentro del html que sirva para traer otros script. Cambia la sintaxis con "import". min22. Agregamos la caracteristica "type=module" y nos permite ir importando variables/funciones osea otros script para poder usarlo en el archivo que necesitemos. 
// import React from 'react'; que no tenga .js ni ./  npm interpreta que tiene que buscar el archivo "React" dentro de node_modules, y ahi trata de buscar un index.js o un archivo .js
// Los componentes siempre van a ser funciones. Asi podemos ejecutar la funcion con distintos parametros para que podamos tener , por ejemplo, la misma tarjeta pero con distinta informacion
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
// Es el punto inicial del virtual DOOM , llama al primer div del body. 
// Ahora la funcion se va a escribir de esta manera //App() === <App/>
// Siempre las funciones ahora van en mayuscula cuando se trate de componentes. 
 
