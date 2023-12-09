import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App"
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min.js'
import {BrowserRouter} from "react-router-dom"
import { Helmet } from 'react-helmet';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Helmet>
      <title>MRM</title>
      <meta name="google-site-verification" content="U3m6iksifNB51-V8GLm9HBVcw3lrFEbNeYb7lVbXvjA" />
      <meta name="description" content="MRM is the premium solution provider for all type of printing & advertising in the uae. We are proud to produce some of the finest work in that sector. We are creative agency, providing customers with cross-media solutions, graphic and online design, offset, digital and large format printing as well as marketing promotions." />
    </Helmet>

    <App />
  </BrowserRouter>
);

