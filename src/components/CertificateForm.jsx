import React, { useState } from 'react';
import './CertificateForm.css';
import Certificate from './certificate';

const CertificateForm = () => {
    const [studentNumber, setStudentNumber] = useState('');
    const [directorName, setDirectorName] = useState('');
    const [showCertificate, setShowCertificate] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowCertificate(true);  // Exibe o certificado e oculta o formulário
    };

    const handleBack = () => {
        setShowCertificate(false);  // Permite voltar ao formulário
    };

    return (
        <div className="form-container">
            {!showCertificate ? ( // Exibe o formulário se o certificado não estiver visível
                <form onSubmit={handleSubmit}>
                    <div className='Emitir'><p>Emissão de Certificado</p></div>

                    <input
                        type="number"
                        placeholder="Número do Estudante"
                        value={studentNumber}
                        onChange={(e) => setStudentNumber(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Nome do diretor"
                        value={directorName}
                        onChange={(e) => setDirectorName(e.target.value)}
                        required
                    />
                    <button type="submit">Emitir Certificado</button>
                </form>
            ) : (
                // Exibe o certificado quando `showCertificate` for true
                <div>
                    <Certificate
                        studentName={studentName}
                        studentNumber={studentNumber}
                        directorName={directorName}
                    />
                    <button id="voltar" onClick={handleBack}>Anterior</button>
                </div>
            )}
        </div>
    );
};

export default CertificateForm;
