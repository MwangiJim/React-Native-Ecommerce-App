import {View,Text,StyleSheet,Image, TextInput, Button} from 'react-native'
import {FontAwesome} from '@expo/vector-icons'
import React from 'react'
import {useDispatch} from 'react-redux'
import { setSearchValue } from '../redux/SliceReducer';

const Header =()=>{
  const dispatch = useDispatch();
    return(
        <View style={styles.container}>
           <Image source={require('../../assets/Images/logo.png')} style={styles.image}/>
           <TextInput
            placeholder='Search Electronic Here'
            style={styles.input}
            onChangeText={(text)=>dispatch(setSearchValue(text))}
           />
           <Button title='Logout'/>
        </View>
    )
}
export default Header;
const styles = StyleSheet.create({
  container:{
    width:'100%',
    padding:15,
    backgroundColor:'#000',
    color:'#fff',
    marginTop:25,
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row'
  },
  image:{
    width:80,
    height:60
  },
  input:{
    width:210,
    borderRadius:20,
    shadowColor:'#fff',
    backgroundColor:'#fff',
    shadowOffset:{width:8,height:7},
    shadowOpacity:1,
    elevation:2,
    height:40,
    paddingLeft:10,
    paddingTop:5
  },
  icon:{
    color:'#fff',
    fontSize:25
  }
})