import{
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR

}from '../types'

import clienteAxios from '../config/axios'
import Swal from 'sweetalert2'



//crear nuevos productos

export function crearNuevoProductoAction(producto){

    return async (dispatch) => {
        dispatch( agregarProducto() )

        try{

            //insertar en la api
            await clienteAxios.post('/productos', producto)

            //Si todo sale bien actualizar en state
            dispatch( agregarProductoaExito(producto) )

            //Alerta
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'El producto se agrego correctamente',
                showConfirmButton: false,
                timer: 1500
              })



        } catch(error){

            console.log(error)
            //si hay un error cambiar el state
            dispatch( agregarProductoError(true) )

            // alerta de error
            Swal.fire({
                icon: 'error',
                title: 'Hubo un Error',
                text: 'Intenta denuevo',
            
              })

        }
    }
}

const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true
})

// Si el producto se guarda en la base de datos
const agregarProductoaExito = producto => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
})


// si hubo un error
const agregarProductoError = estado => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado

})