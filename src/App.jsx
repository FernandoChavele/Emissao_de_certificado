import React from 'react';
import './App.css';
import CertificateForm from './components/CertificateForm';
import uemLogo from './components/img/LogoUEM.png';


function App() {
    return (
        <div className="App">
            <div class="headerback">
                <div className="header">
                    <a className='home' href="/">
                        <img src={uemLogo} alt="Logo da UEM" />
                        <h1>Sistema de Emissão de Certificados</h1>
                    </a>
                </div>
            </div>
            <CertificateForm />
            <footer className="footer">
                <p>Copyright © 2024 <a href="https://uem.mz/">UEM</a> - Todos os Direitos Reservados</p>
            </footer>
        </div>
    );
}

export default App;