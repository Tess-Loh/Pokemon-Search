import React from "react";
import {Container, Row, Navbar, Nav, NavItem, NavDropdown} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style/main.scss";
import "../assets/font/stylesheet.css";
import Header from '../component/header';
import Main from './main';


const App = () => (
    <div >
        <Header />
        <Main />
    </div>
)

export default App;