import { createContext, useReducer, useState } from "react";

//CRAENADO EL CONTEXT
export const CartContext = createContext();

//APLICANDO EL USE REDUCER
const initialState = []

const reducer = (state, action) => {
    const { type: actionType, payload: actionPayload } = action
    switch (actionType) {
        case 'ADD_TO_CART': {
            const { id } = actionPayload
            const productInCartIndex = state.findIndex(item => item.id === id)

            if (productInCartIndex >= 0) {
                const newState = structuredClone(state)
                newState[productInCartIndex].quantity += 1
                return newState
            }
            return [...state, { ...actionPayload, quantity: 1 }]
        }
        case 'REMOVE_FROM_CART': {
            const { id } = actionPayload
            return state.filter(item => item.id !== id)
        }
        case 'CLEAR_CART': {
            return initialState
        }
    }
    return state
}

//PROVIDER DEL CONTEXT (useCONTEXT)
// export function CartProvider({ children }) {
//     const [cart, setCart] = useState([])

//     const removeFromCart = (product) => {
//         setCart(prevState => prevState.filter(item => item.id !== product.id))
//     }
//     const addCart = (product) => {
//         const productInCartIndex = cart.findIndex(item => item.id === product.id)

//         if (productInCartIndex >= 0) {
//             const newCart = structuredClone(cart)
//             newCart[productInCartIndex].quantity += 1
//             return setCart(newCart)
//         }
//         setCart(prevState =>
//             [...prevState, {
//                 ...product,
//                 quantity: 1
//             }]
//         )
//     }
//     const clearCart = () => {
//         setCart([])
//     }

//     return (
//         <CartContext.Provider value={
//             {
//                 cart,
//                 addCart,
//                 clearCart,
//                 removeFromCart
//             }
//         }>
//             {children}
//         </CartContext.Provider>
//     )
// }

//PROVIDER DEL CONTEXT (useREDUCER)
export function CartProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState)

    const addCart = product => {
        return dispatch({
            type: 'ADD_TO_CART',
            payload: product
        })
    }
    const removeFromCart = product => {
        return dispatch({
            type: 'REMOVE_FROM_CART',
            payload: product
        })
    }
    const clearCart = () => {
        return dispatch({
            type: 'CLEAR_CART'
        })
    }
    return (
        <CartContext.Provider value={
            {
                cart: state,
                addCart,
                clearCart,
                removeFromCart
            }
        }>
            {children}
        </CartContext.Provider>
    )
}