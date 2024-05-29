import products from "../../Utils/data/products";

const initialState={
    cart:[],
}

const cartReducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD_TO_CART":
            const productId=action.payload;
            const existingProductIndex=state.cart.findIndex((item) => item.id === productId);
            if(existingProductIndex !== -1){
                const updatedCart = state.cart.map((item,index)=> {
                    if(index===existingProductIndex) {
                        return{
                            ...item,
                            quantity:item.quantity+1
                        }
                    }
                    return item;
                })

                return{
                    ...state,
                    cart:updatedCart
                }
            }

            const productToAdd=products.find(product => product.id === productId);
            productToAdd.quantity=1;

            return{
                ...state,
                cart: [...state.cart,productToAdd]
            }


            case 'REMOVE_FROM_CART':
                const removeProductId = action.payload;
                const productIndex = state.cart.findIndex(item => item.id === removeProductId);
    
                if (productIndex !== -1) {
                    const product = state.cart[productIndex];
    
                    if (product.quantity > 1) {
                        const updatedCart = state.cart.map((item, index) => {
                            if (index === productIndex) {
                                return {
                                    ...item,
                                    quantity: item.quantity - 1
                                };
                            }
                            return item;
                        });
    
                        return {
                            ...state,
                            cart: updatedCart
                        };
                    } else {
                        const updatedCartAfterRemoval = state.cart.filter(item => item.id !== removeProductId);
                        return {
                            ...state,
                            cart: updatedCartAfterRemoval
                        };
                    }
                }
    
                return state;
    
        default:
            return state;
    }
}

export default cartReducer;