import { View, Text,StyleSheet, ScrollView ,Image, ActivityIndicator} from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import ShoppingCartComponent from './ShoppingCartComponent';
import { useNavigation } from '@react-navigation/native';

const PaymentComponent = () => {
  const navigation = useNavigation();
  const{BasketContent}=useSelector((state)=>state.ecommerceStore);
  console.log(BasketContent);

  const totalPriceItems = BasketContent.reduce((initialAmount,item)=>{
    return initialAmount + item.Price
  },0)
  return (
    <ScrollView style={styles.container}>
      <Image source={require('../../assets/Images/Banner1.jpg')} style={styles.image}/>
      <View>
        <Text>Your Shopping Cart @John Doe</Text>
       <View style={styles.cartItems}>
          {BasketContent.length > 0?<View>
            {BasketContent.map((data,i)=>{
              return(
                <ShoppingCartComponent
                 description={data.Description}
                 imageUrl={data.Imageurl}
                 price={data.Price}
                 key={i}
                 id={data.Id}
                />
              )
            })}
          </View>:<Text>Your Cart is Empty!!</Text>}
       </View>
       <View style={styles.checkoutBox}>
           <Text style={styles.text}>Subtotal ({BasketContent.length}items): <Text style={styles.boldText}>${totalPriceItems}</Text></Text>
            <View>
              {/**Checkbox */}
              <Text>This Order contains a gift</Text>
            </View>
             <Text style={styles.button} onPress={()=>navigation.navigate('Payments')}>Proceed To Checkout</Text>
       </View>
      </View>
    </ScrollView>
  )
}

export default PaymentComponent
const styles = StyleSheet.create({
  container:{
   padding:10,
   marginBottom:45
  },
  image:{
    width:500,
    height:200
  },
  cartItems:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    marginBottom:15
  },
  checkoutBox:{
    width:'95%',
    height:100,
    padding:10,
    backgroundColor:'#fff',
    marginBottom:15,
    shadowColor:'#333',
    shadowOpacity:2,
    shadowOffset:{width:10,height:10},
    elevation:3,
    borderRadius:10
  },
  button:{
    width:'100%',
    padding:6,
    backgroundColor:'#ffc017',
    borderColor:'#333',
    color:'#333',
    borderRadius:7,
    textAlign:'center'
  },
  boldText:{
    fontWeight:'bold',
    fontSize:23,
  },
  text:{
    fontSize:18
  }
})