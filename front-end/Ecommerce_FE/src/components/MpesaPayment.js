import { View, Text ,StyleSheet,Image, TextInput} from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import {FontAwesome} from '@expo/vector-icons'

const MpesaPayment = () => {
    const [phoneNumber,setPhoneNumber] = React.useState('');
    const [Name,setName]=React.useState('');
    const {BasketContent} = useSelector((state)=>state.ecommerceStore)

    const TotalPrice = BasketContent.reduce((Amount,item)=>{
        return Amount + item.Price
    },0)

   async function LipaNaMpesa(){
      await fetch('http://localhost:8080/payment',{
        method:'POST',
        headers:'Content-Type:application/json',
        body:JSON.stringify({
          phone:phoneNumber,
          amount:TotalPrice
        })
      })
    }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Payment Method</Text>
      <View>
        <Image source={require('../../assets/Images/mpesa.png')} style={styles.image}/>
        <Text style={styles.price}>Order Total : ${TotalPrice}</Text>
        <TextInput
          placeholder='Enter valid phone Number'
          value={phoneNumber}
          onChangeText={(text)=>setPhoneNumber(text)}
          style={styles.input}
        />
        <TextInput
         placeholder='Enter Full Name'
         value={Name}
         onChangeText={(text)=>setName(text)}
         style={styles.input}
        />
        <Text style={styles.Mpesa} onPress={LipaNaMpesa}>PAY FOR GOODS VIA MPESA</Text>
      </View>
    </View>
  )
}

export default MpesaPayment

const styles = StyleSheet.create({
    container:{
        width:'100%',
        backgroundColor:'#fff',
        display:'flex',
        justifyContent:'center',
        marginBottom:30,
        padding:10
    },
    header:{
      fontSize:20,
      fontWeight:'700'
    },
    input:{
        width:400,
        height:45,
        borderRadius:20,
        shadowColor:'#000',
        shadowOffset:{width:8,height:10},
        elevation:4,
        shadowOpacity:1,
        backgroundColor:'#fff',
        paddingLeft:10,
        marginBottom:7
    },
    image:{
        width:400,
        height:100
    },
    price:{
        fontSize:18,
        fontWeight:'500'
    },
    Mpesa:{
        backgroundColor:'green',
        color:'#fff',
        width:'100%',
        borderRadius:10,
        textAlign:'center',
        padding:10
    }
})