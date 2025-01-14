import styles from '../register/RegisterPage.module.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
export function LoginPage() {

    const navigate = useNavigate();

    interface RegisterPageProps {
        email: string;
        password: string;
    }
    const [registerData, setRegisterData] = useState<RegisterPageProps>(
        {
            email: "",
            password: ""
        }
    );

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setRegisterData((prevData) => ({
            ...prevData,
            [name]: value, // Actualiza dinámicamente el campo que cambió
        }));
    };

    const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        setRegisterData({
            email: form.get("email") as string,
            password: form.get("password") as string
        })
        //TODO VALIDAR ENTRADAS ANTES DE REGISTRAR
        navigate('/');
    }

    useEffect(() => {
        console.log(registerData);
    }, [registerData]);


    const handleLogin = () => {
        navigate('/menu');
    }

    return (
        <>
            <aside className={styles.header}>
                <p className={styles.title}>Uber <strong>Eats</strong></p>
            </aside >

            <div className={styles.container}>
                <form onSubmit={handleRegister} className={styles.form}>
                    <input className={styles.input} value={registerData?.email} type="email" id="email" name="email" placeholder='Ingrese su correo' onChange={handleInputChange} />
                    <input className={styles.input} value={registerData?.password} type="password" id="password" name="password" placeholder='Ingrese su contraseña' onChange={handleInputChange} />
                    <button className={styles.registerButton} onClick={handleLogin}>iniciar sesión</button>
                    <span className={styles.span}>Al continuar, aceptas recibir llamadas, mensajes de WhatsApp o SMS/servicios de comunicación enriquecida (RCS, Rich Communication Services), incluso a través de medios automáticos, de Uber y sus afiliados al número proporcionado.</span>
                </form>
            </div>
        </>
    )
}