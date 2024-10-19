import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import './Certificate.css';
import logo from './img/Emblema.png'; 

const Certificate = ({ studentName, biNumber, directorName, }) => {
    
    const generatePDF = () => {
        const input = document.getElementById('certificate');
        const dataemiss = document.getdata();

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
            <h1 className="diploma">Diploma</h1>
            <div className="certificate-details">
                 <p>
                    Eu,<strong>{directorName}</strong> 
                    <br/>
                    Reitor da Universidade Eduardo Mondlane
                    <br/>
                    Faço saber que
                    <br/>
                    <strong>{studentName}</strong>
                    <br/> 
                    tendo frequentado a 
                    <br/>
                    <strong>Faculdade de -nomde da faculdade</strong> 
                    <br/>
                    Concluiu, em - <strong>{startDate}</strong> - <strong>{endDate}</strong>
                    <br/>
                    o curso de - <strong>{courseName}</strong> 
                    <br/>
                    pelo que, em conformidade com as disposições legais em vigor, lhe mandei passar o 
                    presente Diploma em que o/a declaro habilitado/a com o grau de <strong>Licenciatura</strong>
                    com a classificação de - <strong>nota final</strong> valores    
                </p> 

                <p> Maputo, {data}</p>

            </div>
            <button id="generate-pdf-button" onClick={generatePDF}>Gerar PDF</button>
        </div>
    );
};

export default Certificate;
