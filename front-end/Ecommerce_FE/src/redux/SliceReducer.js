import { createSlice } from "@reduxjs/toolkit";

export const EcommerceCart = createSlice({
    name:'Ecommerce',
    initialState:{
        searchValue:'',
        categoryValue:'',
        BasketContent:[],
    },
    reducers:{
        setSearchValue:(state,action)=>{
            return{
                ...state,
                searchValue:action.payload
            }
        },
        setCategoryValue:(state,action)=>{
            return{
                ...state,
                categoryValue:action.payload
            }
        },
        setBasketContent:(state,action)=>{
            return{
                ...state,
                BasketContent:[...state.BasketContent,action.payload]
            }
        },
        deleteBasketContent:(state,action)=>{
            const basketIndex = state.BasketContent.findIndex((basketid)=>{//The findIndex() method returns the index of the first element in an array that satisfies the provided testing function. 
                return basketid.id === action.payload;
            })
            console.log(basketIndex)
            const newBasket = [...state.BasketContent];
            if(basketIndex === 0){
               newBasket.splice(basketIndex,1);
            }
            else{
                console.log(`Could not delete item with index ${basketIndex}`)
            }
            return{
                ...state,
                BasketContent:newBasket
            }
        }
    }
})

export const {setSearchValue,setCategoryValue,setBasketContent,deleteBasketContent} = EcommerceCart.actions;
export default EcommerceCart.reducer;