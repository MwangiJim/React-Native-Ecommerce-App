import { View, Text ,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'
import {FontAwesome} from '@expo/vector-icons'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
const Footer = () => {
  const{BasketContent}=useSelector((state)=>state.ecommerceStore);
 // console.log(BasketContent);
  const navigation = useNavigation();
  let[Span,setSpan]=React.useState(false)
  const MoveSpan=()=>{
     setSpan((prevForm)=>!prevForm)
  }
  let span_Styles = {
    marginLeft:Span?45:0
  }
  return (
    <View style={styles.container}>
      <FontAwesome  style = {styles.icons}name='home' onPress={()=>navigation.navigate('Home')}/>
       <View style={styles.shopping}>
          <FontAwesome  style = {styles.icons}name='shopping-cart' onPress={()=>navigation.navigate('Payment')}/>
          <Text style={styles.counter}>{BasketContent.length}</Text>
       </View>
      <FontAwesome  style = {styles.icons}name='gear'/>
       <TouchableOpacity style={styles.Btn} onPress={MoveSpan}><Text style={[styles.span,span_Styles]}></Text></TouchableOpacity>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
    container:{
        width:'100%',
        backgroundColor:'#fff',
        padding:15,
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        bottom:-15,
        left:0,
        position:'absolute'
    },
    icons:{
        fontSize:24
    },
    counter:{
        height:30,
        width:30,
        color:'#fff',
        textAlign:'center',
        padding:3,
        backgroundColor:'#000',
        borderRadius:50,
        bottom:5,
        left:14,
        position:'absolute'
    },
    shopping:{
        display:'flex',
        justifyContent:'center',
        flexDirection:'row',
        position:'relative'
    },
    Btn:{
      width:70,
      height:30,
      backgroundColor:'#000',
      borderRadius:30,
    },
    span:{
      height:26,
      width:27,
      borderRadius:70,
      backgroundColor:'red',
      marginLeft:2,
      marginTop:2
    }
})