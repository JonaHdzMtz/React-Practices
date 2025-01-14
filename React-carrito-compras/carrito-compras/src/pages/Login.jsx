import styles from '../styles/Login.module.css'
import getUser from '../services/getUser'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/userSlice'
import { useSelector } from 'react-redux';
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userVerif, setUserVerif] = useState({})
  const userS = useSelector((state) => state.user)
  const [userForm, setUserForm] = useState({})


  useEffect(() => {
    if (userVerif.email) {
      console.log(`dato guardado: ${userVerif.email}`)
      dispatch(setUser(userVerif))
    }
  }, [dispatch,userVerif])

  useEffect(() => {
    if (userS.email !== "" && userS.username !== "") {
      if(userS.email  !==  userForm.email || userS.username !== userForm.username){
        alert("usuario o email incorrecto")
        dispatch(setUser({email:"",username:""}))
      }else{
        alert("iniciando sesión")
        //dispatch(setUser({email:"",username:""}))
        navigate(`/home/${userS.username}`)
      }
    }
  }, [userS]);

  const handleForm = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const emailForm = form.get('email');
    const usernameForm = form.get("username")
    setUserForm({ email: emailForm, username: usernameForm })

    await getUser().then((res) => {
      setUserVerif(res)
    });
    
  }

  return (
    <div className={styles.container}>
      <div className={styles.containerForm}>
        <h1>Inicio de sesion</h1>
        <form className={styles.form} action="" onSubmit={handleForm}>

          <label htmlFor="emailUser">ingresa el email</label>
          <input className={styles.input} id="emailUser" name="email" type="text" placeholder="email" />
          <label htmlFor="usernameUser">ingresa el usuario</label>
          <input className={styles.input} id="usernameUser" name="username" type="text" placeholder="usuario" />
          <button>Iniciar sesión</button>

          <Link to={""}>
            <p>¿No tienes cuenta? Registrate</p>
          </Link>
        </form>
      </div>
    </div>
  )
}
