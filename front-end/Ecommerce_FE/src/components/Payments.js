import { ScrollView, View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import ShoppingCartComponent from './ShoppingCartComponent'
import MpesaPayment from './MpesaPayment'

const Payments = () => {
    const {BasketContent} = useSelector((state)=>state.ecommerceStore)
  return (
    <ScrollView style={styles.container}>
      <View style={styles.topBar}>
          <Text style={styles.header}>Checkout Items ({BasketContent.length} items)</Text>
      </View>
      <View style={styles.firstbox}>
        <Text style={styles.delivery}>Delivery Address</Text>
        <View style={styles.details}>
            <Text>kingongomwangi@gmail.com</Text>
            <Text>Nairobi,(0,0232),100</Text>
            <Text>Greendale Front,Evergreen Terrace</Text>
        </View>
      </View>
      <View style={styles.secondbox}>
         <Text style={styles.delivery} >Review Items and Delivery</Text>
         <View style={styles.Items}>
            {/**Map Selected Items Here */}
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
            </View>:'You have no Items in the Cart'}
         </View>
      </View>
      <MpesaPayment/>
    </ScrollView>
  )
}

export default Payments

const styles = StyleSheet.create({
   topBar:{
    backgroundColor:'grey',
    width:'100%',
    padding:4,
    textAlign:'center'
   },
   header:{
    fontSize:24,
    fontWeight:'400'
   },
   firstbox:{
    display:'flex',
    flexDirection:'row',
    marginTop:5,
    borderBottomColor:'black'
   },
   secondbox:{
      marginBottom:10,
      marginTop:10
   },
   delivery:{
    fontWeight:'700',
    fontSize:16,
    flex:4
   },
   details:{
    flex:6
   },
   Items:{
    display:'flex',
    flexDirection:'row',
    flex:6
   },
   container:{
    marginBottom:20
   }
})