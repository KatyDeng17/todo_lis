import React from 'react';
import '../assets/css/app.css';
import 'materialize-css/dist/css/materialize.min.css'; //its a node_modules so we don't need to use 
import List from './list';
// import logo from '../assets/images/logo.svg';

const App = () => (
    <div className = "container" >
       <h1 className = "center" > To Do List </h1>
       <List/>
    </div>
);

export default App;
