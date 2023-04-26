import {View,Text,StyleSheet,Image, FlatList} from 'react-native'
import {useDispatch,useSelector} from 'react-redux'
import { setCategoryValue } from '../redux/SliceReducer';

const Slider=()=>{
  const dispatch = useDispatch();
  const {searchValue,categoryValue} = useSelector((state)=>state.ecommerceStore)
  console.log(searchValue,categoryValue);
    const Array = ['All','Phones','Laptops','Printers','HeadPhones','Speaker','Web Camera','Gamepads','Bluetooth Radio','Tv','Watch']
    return(
     <View style={styles.slider}>
        <FlatList
         data={Array}
         renderItem={({item})=>{
            return(
                <Text style={styles.category} onPress={()=>dispatch(setCategoryValue(item))}>{item}</Text>
            )
         }}
         keyExtractor={(item)=>item}
         horizontal
         showsHorizontalScrollIndicator={false}
         style={styles.moreInfo}
        />
        <Image source={require('../../assets/Images/Banner5.jpg')} style={styles.images}/>
     </View>
    )
}

export default Slider;

const styles = StyleSheet.create({
  images:{
    width:420,
    height:300,
  },
  moreInfo:{
    flexDirection:'row',
    display:'flex',
    width:'100%',
    padding:10
  },
  category:{
    marginRight:10
  }
})