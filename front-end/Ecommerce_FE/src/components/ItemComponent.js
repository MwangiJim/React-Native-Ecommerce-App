import {View,Text,StyleSheet,Image, Button} from 'react-native'
import {FontAwesome} from '@expo/vector-icons'
import { useReducer } from 'react'
import { useDispatch } from 'react-redux'
import { setBasketContent } from '../redux/SliceReducer'

const reducer=(state,action)=>{
  switch(action.type){
    case 'setRating':{
        return{
            ...state,
            Rating:action.payload
        }
    }
  }
}
const ItemComponent =({image,description,price,id})=>{
    const [state,dispatch]=useReducer(reducer,{Rating:null})
    const Dispatch = useDispatch();
    function AddToCart(){
       Dispatch(setBasketContent({
         Imageurl:image,
         Description:description,
         Price:price,
         Id:id
       }))
    }
    return(
      <View style={styles.container}>
          <Image source={image} style={styles.images}/>
          <Text>{description}</Text>
          <View style={styles.footer}>
             <View style={styles.stars}>
                {[...Array(5)].map((item,i)=>{
                    let rating = i+1;
                    return(
                        <FontAwesome 
                        name='star'
                        key={i}
                        style={[styles.star,{color:rating<=state.Rating?'#ffc017':'#333'}]}
                        onPress={()=>dispatch({type:'setRating',payload:rating})}
                        />
                    )
                })}
                 <Text style={styles.cost}>${price}</Text>
             </View>
             <Text style={styles.button} onPress={AddToCart}>Add to Cart</Text>
          </View>
      </View>
    )
}

export default ItemComponent;

const styles = StyleSheet.create({
    container:{
        width:350,
        height:270,
        borderRadius:20,
        backgroundColor:'#fff',
        padding:10,
        shadowColor:'#000',
        shadowOpacity:1,
        shadowOffset:{width:6,height:10},
        elevation:3,
        marginTop:10,
        marginBottom:20
    },
    images:{
        width:200,
        height:170
    },
    stars:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    star:{
        fontSize:18
    },
    footer:{
        display:'flex',
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center'
    },
    button:{
        width:100,
        padding:10,
        backgroundColor:'#ffc017',
        borderRadius:15,
        color:'#000',
        textTransform:'lowercase',
        alignItems:'center',
        textAlign:'center'
    },
    cost:{
        fontSize:25,
        fontWeight:'300',
    }
})