import {ScrollView,Text, StyleSheet} from 'react-native'

import React from 'react'
import Slider from './Slider'
import Categories from './Categories'
import Footer from './Footer'

const Home =()=>{
    return(
        <ScrollView>
           <Slider/> 
           <Categories/>
        </ScrollView>
    )
}

export default Home;

const styles = StyleSheet.create({

})