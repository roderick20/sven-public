import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import HomeVideo from './pages/HomeVideo';

import Framework from './pages/Framework';
import WebParts from './pages/WebParts';
import Price from './pages/Price';

import Docs from './pages/Docs';
import DocsDb from './pages/DocsDb';
import DocsEditor from './pages/DocsEditor';
import DocsGettingStarted from './pages/DocsGettingStarted';
import DocsTemplate from './pages/DocsTemplate';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <div>
        {/* Header */}
        <Header />

        {/* Contenido Principal */}
        
        <Container >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/framework" element={<Framework />} />
            <Route path="/webparts" element={<WebParts />} />
            <Route path="/price" element={<Price />} />

            <Route path="/docs" element={<Docs />} />
            <Route path="/docs/db" element={<DocsDb />} />
            <Route path="/docs/editor" element={<DocsEditor />} />
            <Route path="/docs/getting-started" element={<DocsGettingStarted />} />
            <Route path="/docs/template" element={<DocsTemplate />} />

            <Route path="/home/video" element={<HomeVideo />} />
          </Routes>
        </Container>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;