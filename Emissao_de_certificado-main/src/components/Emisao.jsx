import React, { useState } from 'react';
import './Emisao.css';
import CertificateForm from './CertificateForm';

// Função simulando a consulta na base de dados
const fetchStudentData = (identifier, identifierType) => {
    const database = {
        "12345678": { 
            studentName: "Fernando Chavele",
            biNumber: "987654321S",
            directorName: "Manuel, Guilherme Jr",
            courseName: "Engenharia Informática",
            faculName: "Faculdade de Engenharia",
            startDate: "2020-02-10",
            endDate: "2024-06-25",
            grade: "19",
            chancellorName: "Dr. António Silva"
        }
    };
    return database[identifier] || null;
};

const Emisao = () => {
    const [identifierType, setIdentifierType] = useState('studentNumber');
    const [identifier, setIdentifier] = useState('');
    const [studentData, setStudentData] = useState(null);
    const [showCertificateForm, setShowCertificateForm] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = fetchStudentData(identifier, identifierType);
        if (data) {
            setStudentData(data);
            setShowCertificateForm(true);
        } else {
            alert("Estudante não encontrado!");
        }
    };

    const handleEmitir = () => {
        alert("Certificado emitido com sucesso!");
    };

    return (
        <div className="form-container">
            {!showCertificateForm ? (
                <form onSubmit={handleSubmit} className="emission-form">
                    <div htmlFor="identifierType" className="labelE">Escolha o tipo de identificação:</div>
                    <select 
                        id="identifierType"
                        value={identifierType} 
                        onChange={(e) => setIdentifierType(e.target.value)}
                        required
                        className="input-select"
                    >
                        <option value="studentNumber">Número de Estudante</option>
                        <option value="biNumber">Número de BI</option>
                    </select>

                    <input
                        type="text"
                        placeholder={identifierType === 'studentNumber' ? "Número do Estudante" : "Número de BI"}
                        value={identifier}
                        onChange={(e) => setIdentifier(e.target.value)}
                        required
                        className="input-fieldE"
                    />

                    <button type="submit" className="submit-buttonE">Avançar</button>
                </form>
            ) : (
                <CertificateForm 
                    studentData={studentData} 
                    handleEmitir={handleEmitir} 
                />
            )}
        </div>
    );
};

export default Emisao;
