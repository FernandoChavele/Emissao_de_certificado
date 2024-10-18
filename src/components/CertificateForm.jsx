import React, { useState } from 'react';
import './CertificateForm.css';
import Certificate from './certificate';


const CertificateForm = () => {
    const [studentName, setStudentName] = useState('');
    const [studentNumber, setStudentNumber] = useState('');
    const [directorName, setDirectorName] = useState('');
     
    const [showCertificate, setShowCertificate] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowCertificate(true);
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className='Emitir' ><p>Emissão de Certificado</p></div>
                <input
                    type="text"
                    placeholder="Nome do Estudante"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Número do Estudante"
                    value={studentNumber}
                    onChange={(e) => setStudentNumber(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Nome do director"
                    value={directorName}
                    onChange={(e) => setDirectorName(e.target.value)}
                    required
                />
                <button type="submit">Emitir Certificado</button>
            </form>
            {showCertificate && (
                <Certificate
                    studentName={studentName}
                    studentNumber= {studentNumber}
                    directorName= {directorName}

                />
            )}
        </div>
    );
};

export default CertificateForm;
