import React from 'react'
import { useForm } from 'react-hook-form'

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm()

  console.log(errors);

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* nombre */}
      <label htmlFor="nombre"> nombre</label>
      {/* ...register es una funcion que se encarga de registrar el input en el hook form ydevuelve un objeto con las propiedades necesarias para que el hook form funcione */}
      <input type="text"  {...register("nombre", {
        required: true,
        minLength: 2,
        maxLength: 20,
      })}
      />
      {
        errors.nombre && errors.nombre.type === "required" &&
        <span>Campo requerido</span>
      }
      <label htmlFor="correo">correo</label>
      {/* correo */}
      <input type="email" {...register("email", {
        required: true,
      })} />
      {errors.email && <span>Campo requerido</span>}
      <label htmlFor="password">contraseña</label>
      {/* contraseñas */}
      <input type="password" {...register("password", {
        required: true,
      })} />
      {errors.password && <span>Campo requerido</span>}
      {/* repetir contraseña */}
      <label htmlFor="confirmarPassword">confirmar contraseña</label>
      <input type="password" {...register("confirmarPassword", {
        required: true,
      })} />
      {errors.confirmarPassword && <span>Campo requerido</span>}
      {/* fecha */}
      <label htmlFor="fecha">fecha</label>
      <input type="date" {...register("fecha", {
        required: true,
      })} />
      {errors.fecha && <span>Campo requerido</span>}
      {/* pais */}
      <label htmlFor="pais">pais</label>
      <select {...register("pais")}>
        <option value="1">Colombia</option>
        <option value="2">Peru</option>
        <option value="3">Mexico</option>
      </select>

      {/* files */}
      <label htmlFor="files">files</label>
      <input type="file" {...register("file", {
        required: true,
      })} />
      {errors.file && <span>Campo requerido</span>}
      {/* terminos */}
      <label htmlFor="terminso">acepto terminos y condiciones</label>
      <input type="checkbox"  {...register("terminos")} />
      {errors.terminos && <span>Campo requerido</span>}
      {/* enviar */}
      <button type="submit">enviar</button>
    </form>
  )
}
