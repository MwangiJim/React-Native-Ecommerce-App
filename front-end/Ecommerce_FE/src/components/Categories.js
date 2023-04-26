import {View,Text,StyleSheet,Image, Alert, ActivityIndicator} from 'react-native'
import ItemComponent from './ItemComponent';
import data from '../Data/DataStore';
import {useDispatch,useSelector} from 'react-redux'

const Categories=()=>{
    const {searchValue,categoryValue} = useSelector((state)=>state.ecommerceStore);
    return(
      <View style={styles.containerRow}>
         {!searchValue && !categoryValue?<View>
            {data.map((item,i)=>{
                return(
                    <ItemComponent
                    description={item.description}
                    image={item.image}
                    price={item.price}
                    key={i}
                    id={item.Id}
                    />
                )
            })}
         </View>:''}
         {categoryValue === 'All' && <View>
            {data.map((item,i)=>{
                return(
                    <ItemComponent
                    description={item.description}
                    image={item.image}
                    price={item.price}
                    key={i}
                    id={item.Id}
                    />
                )
            })}
         </View>}
         {data.map((item,i)=>{
            return(
                <View>
                    {categoryValue === item.tag?<ItemComponent
                     description={item.description}
                     image={item.image}
                     price={item.price}
                     key={i}
                     id={item.Id}
                    />:''}
                </View>
            )
         })}
      </View>
    )
}

export default Categories;

const styles = StyleSheet.create({
    containerRow:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'column'
    }
})