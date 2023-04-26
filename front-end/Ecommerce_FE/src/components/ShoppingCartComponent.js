import { View, Text,StyleSheet ,Image} from 'react-native'
import React, { useReducer } from 'react'
import {FontAwesome} from '@expo/vector-icons'
import { useDispatch } from 'react-redux'
import { deleteBasketContent } from '../redux/SliceReducer'

const reducer = (state,action)=>{
    switch (action.payload) {
        case 'cartRating':
             return{
                ...state,
                Rating:action.payload
             }
            break;
    
        default:
            break;
    }
}

const ShoppingCartComponent = ({description,imageUrl,price,Id}) => {
    const dispatch = useDispatch();
    const RemoveFromCart=()=>{
        dispatch(deleteBasketContent(Id))
    }
    const [state,Dispatch]=useReducer(reducer,{Rating:null})
  return (
    <View style={styles.container}>
       <Image source={imageUrl} style={styles.image}/>
       <View style={styles.details}>
          <Text style={styles.Description}>{description}</Text>
          <View style={styles.stars}>
            {[...Array(5)].map((item,i)=>{
                let rating = i+1;
                return(
                    <FontAwesome 
                     name='star'
                     style={[styles.star,{color:rating<=4?'#ffc017':'#333'}]} 
                     key={i}
                     onPress={()=>Dispatch({type:'cartRating',payload:rating})}
                     />
                )
            })}
          </View>
          <Text style={styles.Price}>${price}</Text>
          <Text style={styles.button} onPress={RemoveFromCart}>Remove From Cart</Text>
       </View>
    </View>
  )
}

export default ShoppingCartComponent

const styles = StyleSheet.create({
    container:{
       width:'95%',
       padding:10,
       borderRadius:15,
       shadowColor:'#333',
       shadowOpacity:2,
       shadowOffset:{width:15,height:10},
       elevation:3,
       backgroundColor:'#fff',
       display:'flex',
       justifyContent:'space-between',
       alignItems:'center',
       flexDirection:'row',
       marginBottom:8
    },
    image:{
        width:170,
        height:150
    },
    stars:{
        display:'flex',
        alignItems:'center',
        flexDirection:'row',
        marginTop:5,
        marginBottom:5
    },
    details:{
        flexBasis:'50%'
    },
    button:{
        width:'85%',
        padding:8,
        borderRadius:10,
        backgroundColor:'#ffc017',
    },
    star:{
        fontSize:17
    },
    Price:{
        fontSize:25,
        fontWeight:'600'
    },
    Description:{
        fontSize:16,
    }
})