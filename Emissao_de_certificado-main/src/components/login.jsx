import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import prof from "./img/prof.png"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false); 
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Verificação de credenciais
        if (email === "admin@uem.ac.mz" && password === "admin123") {
            localStorage.setItem('sisecToken', 'your_token');
            navigate("/home"); 
        } else {
            alert("Credenciais inválidas! Tente novamente.");
        }
    };

    return (
        <div className="outform">
            <div className="container-login">
                <img className="profile" src={prof} alt="Imagem de perfil" />
                <form onSubmit={handleSubmit}>
                    <div className="grupo-input1">
                        <span className="input-icon">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </span>
                        <input
                            type="email"
                            placeholder="Email do Utilizador"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="grupo-input2">
                        <span className="input-icon" onClick={() => setShowPassword(!showPassword)}>
                            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                        </span>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="lembrar-esqueceu-container">
                        <div className="remember-me">
                            <input 
                                type="checkbox" 
                                checked={rememberMe} 
                                onChange={() => setRememberMe(!rememberMe)} 
                            />
                            Lembrar senha
                        </div>
                        <a href="/esqueceu-senha" className="esqueceu-senha">Esqueceu a senha?</a>
                    </div>
                    <div className="grupo-input">
                        <button type="submit">LOGIN</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
