import 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import AOS from 'aos';
import React from 'react';
import ReactDOM from 'react-dom';

// Stylesheets Imports
import './fonts/icomoon/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'aos/dist/aos.css';
import './App.css';
import App from './App';


// ..
AOS.init({
    duration: 800,
 	easing: 'slide',
 	once: true
});

ReactDOM.render(<App />, document.getElementById('root'));
