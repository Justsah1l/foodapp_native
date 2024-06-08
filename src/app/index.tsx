import { View, Text ,Pressable,StyleSheet} from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View style={style.container} >
     <Link href={'/(user)'} asChild>
        <Pressable>
    <View style={style.buttonmain}>
        <Text style={style.buttontext}>User</Text>
    </View>
    </Pressable>
    </Link>
    
    <Link href={'/(admin)'} asChild>
    <Pressable>
    <View style={style.buttonmain}>
        <Text style={style.buttontext}>Admin</Text>
    </View>
    </Pressable>
    </Link>
    
    
    </View>
  )
}

export default index


const style = StyleSheet.create({
    container:{
       flex:1,
        
      
        justifyContent:'center',

    },
    buttonmain:{
        
        bottom:10,
        backgroundColor:'#03A9F4',
        margin:20,
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