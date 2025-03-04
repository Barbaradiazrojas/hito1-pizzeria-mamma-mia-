import React, { useState } from 'react';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Formulario enviado');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        console.log('Validando campos vacíos');
        if (!email || !password || !confirmPassword) {
            alert('Todos los campos son obligatorios.');
            setMessage('Todos los campos son obligatorios.');
            return;
        }

        console.log('Validando formato de email');
        if (!emailRegex.test(email)) {
            alert('El correo electrónico no es válido.');
            setMessage('El correo electrónico no es válido.');
            return;
        }

        console.log('Validando longitud de contraseña');
        if (password.length < 6) {
            alert('La contraseña debe tener al menos 6 caracteres.');
            setMessage('La contraseña debe tener al menos 6 caracteres.');
            return;
        }

        console.log('Validando coincidencia de contraseñas');
        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden.');
            setMessage('Las contraseñas no coinciden.');
            return;
        }

        alert('¡Registro exitoso!');
        setMessage('¡Registro exitoso!');
    };

    return (
        <div className="register container mt-5">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor='email'>Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor='password'>Contraseña:</label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor='confirmPassword'>Confirmar Contraseña:</label>
                    <input
                        type="password"
                        className="form-control"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Registrar</button>
            </form>
            {message && <p className="mt-3">{message}</p>}
        </div>
    );
};

export default Register;
