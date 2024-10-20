import React, { useState } from 'react';
import './CertificateForm.css';
import Certificate from './certificate';

// Função simulada para buscar os dados do banco de dados
const fetchStudentData = (identifier, identifierType) => {
    // Dados simulados para o exemplo, depois os do back vão modificar essa parte eh!!
    const database = {
        "12345": { // Número de Estudante
            studentName: "Fernando Chavele",
            biNumber: "987654321S",
            directorName: "Manuel, Guilherme Jr",
            courseName: "Engenharia Informática",
            faculName: "Faculdade de Engenharia",
            startDate: "2020-02-10",
            endDate: "2024-06-25",
            grade: "19"
        },
        "987654321": { // Número de BI
            studentName: "Fernando Chavele",
            biNumber: "987654321S",
            directorName: "Manuel, Guilherme Jr",
            courseName: "Engenharia Informática",
            faculName: "Faculdade de Engenharia",
            startDate: "2020-02-10",
            endDate: "2024-06-25",
            grade: "19"
        }
    };

    // Retorna os dados do estudante com base no identificador
    return database[identifier] || null;
};

const CertificateForm = () => {
    const [identifierType, setIdentifierType] = useState('studentNumber');
    const [identifier, setIdentifier] = useState('');
    const [studentData, setStudentData] = useState(null);
    const [showCertificate, setShowCertificate] = useState(false);

    // Função para buscar os dados ao submeter o formulário
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = fetchStudentData(identifier, identifierType); // Busca os dados do "banco de dados"
        if (data) {
            setStudentData(data);  // Armazena os dados encontrados
            setShowCertificate(true);  // Exibe o certificado
        } else {
            alert("Estudante não encontrado!");  // Alerta se não encontrar
        }
    };

    // Função para voltar ao formulário
    const handleBack = () => {
        setShowCertificate(false);
        setStudentData(null);  // Limpa os dados ao voltar
    };

    return (
        <div className="form-container">
            {!showCertificate ? (
                <form onSubmit={handleSubmit}>
                    <div className='Emitir'><p>Emissão de Certificado</p></div>

                    {/* Dropdown para selecionar entre Número de Estudante ou BI */}
                    <label htmlFor="identifierType">Escolha o tipo de identificação:</label>
                    <select 
                        id="identifierType"
                        value={identifierType} 
                        onChange={(e) => setIdentifierType(e.target.value)}
                        required
                    >
                        <option value="studentNumber">Número de Estudante</option>
                        <option value="biNumber">Número de BI</option>
                    </select>

                    {/* Campo de input para número de estudante ou BI */}
                    <input
                        type="text"
                        placeholder={identifierType === 'studentNumber' ? "Número do Estudante" : "Número de BI"}
                        value={identifier}
                        onChange={(e) => setIdentifier(e.target.value)}
                        required
                    />

                    <button type="submit">Emitir Certificado</button>
                </form>
            ) : (
                <div>
                    {/* Certificado gerado */}
                    <Certificate
                        studentName={studentData.studentName}
                        biNumber={studentData.biNumber}
                        directorName={studentData.directorName}
                        faculName={studentData.faculName}
                        courseName={studentData.courseName}
                        startDate={studentData.startDate}
                        endDate={studentData.endDate}
                        grade={studentData.grade}
                    />
                    <button id="voltar" onClick={handleBack}>Voltar</button>
                </div>
            )}
        </div>
    );
};

export default CertificateForm;
