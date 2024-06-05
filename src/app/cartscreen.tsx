import { View, Text,StyleSheet,FlatList, Pressable } from 'react-native'
import React from 'react'
import { useCart } from '../provider/cartpro'
import CartListItem from './cartitem';

import {Spacer,Box,Flex} from 'react-native-flex-layout'

const cartscreen = () => {
    const {items,total } = useCart();
  return (
    
    <View style={style.mainConatinerStyle}>
      <Text style={style.toptxt}>cartscreen items length : {items.length}</Text>
<FlatList data={items}  renderItem={({item}) => <CartListItem cartItem={item} />}/>
<Text style={style.txt}>total : ${total}</Text>

 
  
  

<Pressable onPress={() =>{
       
        }} >  
        <View style={style.buttonmain}>
            <Text style={style.buttontext}>Checkout</Text>
        </View>
        
        </Pressable>
    </View>
    
  )
}

export default cartscreen


const style = StyleSheet.create({
  mainConatinerStyle: {
    flexDirection: 'column',
    flex: 1
},
toptxt:{
  color:'white',
},
    txt:{
        color:'white',
        position:'relative',
        bottom:20,
        
    }, 
    buttonmain:{
      position:'relative',
      bottom:10,
      backgroundColor:'#03A9F4',
      marginHorizontal:26,
      borderRadius:15,
      height:54,
      alignItems:'center',
      justifyContent:'center',
          },
          buttontext:{
              color:'white',
              fontWeight:'bold',
              fontSize:20
          },
})