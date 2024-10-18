import React from 'react';
// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';
import './Certificate.css';
import logo from './img/LogoUEM.png'; 

const Certificate = ({ studentName, studentNumber, directorName }) => {
    
    const generatePDF = () => {
        const input = document.getElementById('certificate');
        
        const button = document.getElementById('generate-pdf-button');
        button.style.display = 'none';

        html2canvas(input, { scale: 2 }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
        

            const imgWidth = 210; 
            const pageHeight = 297; 
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            let position = 0;

            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            pdf.save("certificado.pdf");

            button.style.display = 'block';
        });
    };

    return (
        <div id="certificate" className="certificate">
            <img src={logo} alt="Logo da UEM" className="logo" />
            <h2>UNIVERSIDADE EDUARDO MONDLANE</h2>
            <h1>Diploma</h1>
            <div className="certificate-details">
                <p>
                    Eu,<strong>{directorName}</strong> 
                    Reitor da Universidade Eduardo Mondlane
                    Faço saber que
                    que <strong>{studentName}</strong>, 
                    tendo frequentado a 
                    <strong>Faculdade de -nomde da faculdade</strong> 
                    Concluiu, em - <strong>{startDate}</strong> - <strong>{endDate}</strong>
                    o curso de - <strong>{courseName}</strong> 
                    pelo que, em conformidade com as disposições legais em vigor, lhe mandei passar o 
                    presente Diploma em que o/a declaro habilitado/a com o grau de <strong>Licenciatura</strong>
                    com a classificação de - <strong>nota final</strong> valores
                    
                </p>
            </div>
            <div className="director-signature">
                <p>Diretor da Faculdade</p>
                <div className="signature-line">_____________________________________</div>
                <p><strong>{directorName}</strong></p>
            </div>

            <button id="generate-pdf-button" onClick={generatePDF}>Gerar PDF</button>
        </div>
    );
};

export default Certificate;
