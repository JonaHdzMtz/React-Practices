import styles from './RegisterPage.module.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
export function RegisterPage() {

    const navigate = useNavigate();

    interface RegisterPageProps {
        name: string;
        telephone: string;
        email: string;
        password: string;
        confirmPassword: string;
    }
    const [registerData, setRegisterData] = useState<RegisterPageProps>(
        {
            name: "asd",
            telephone: "",
            email: "",
            password: "",
            confirmPassword: ""
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
            name: form.get("name") as string,
            telephone: form.get("telephone") as string,
            email: form.get("email") as string,
            password: form.get("password") as string,
            confirmPassword: form.get("confirmPassword") as string
        })
        //TODO VALIDAR ENTRADAS ANTES DE REGISTRAR
        navigate('/');

    }

    useEffect(() => {
        console.log(registerData);
    }, [registerData]);


    return (
        <>
            <aside className={styles.header}>
                <p className={styles.title}>Uber <strong>Eats</strong></p>
            </aside >

            <div className={styles.container}>
                <form onSubmit={handleRegister} className={styles.form}>
                    <input className={styles.input} value={registerData?.name} type="text" id="name" name="name" placeholder='Ingrese su nombre completo' onChange={handleInputChange} />
                    <input className={styles.input} value={registerData?.telephone} type="" id="telephone" name="telephone" placeholder='Ingrese su número telefonico' onChange={handleInputChange} />
                    <input className={styles.input} value={registerData?.email} type="email" id="email" name="email" placeholder='Ingrese su correo' onChange={handleInputChange} />
                    <input className={styles.input} value={registerData?.password} type="password" id="password" name="password" placeholder='Ingrese su contraseña' onChange={handleInputChange} />
                    <input className={styles.input} value={registerData?.confirmPassword} type="password" id="confirmPassword" name="confirmPassword" placeholder='repite la contraseña' onChange={handleInputChange} />
                    <button className={styles.registerButton}>Registrarse</button>
                    <span className={styles.span}>Al continuar, aceptas recibir llamadas, mensajes de WhatsApp o SMS/servicios de comunicación enriquecida (RCS, Rich Communication Services), incluso a través de medios automáticos, de Uber y sus afiliados al número proporcionado.</span>
                </form>
            </div>
        </>
    )
}