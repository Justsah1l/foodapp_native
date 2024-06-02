import { Stack, useLocalSearchParams } from "expo-router";
import { View, Text,StyleSheet,Image,Pressable ,Button } from "react-native";
import products from "@/assets/data/products";
import {useFonts, Oswald_400Regular } from "@expo-google-fonts/oswald";
import { useState } from "react";

const sizes = ['S','M','L','XL'];

const Proddetail =  () =>{
    const [selectedsize,setselectedsize] = useState('M');
    let [fontsLoaded, fontError] = useFonts({
        Oswald_400Regular,
      });
    const {id} = useLocalSearchParams();
    const prod = products.find(p => p.id.toString() == id );

return(
    <View>
        <Stack.Screen options={{title:''+id ,  headerTitleStyle:{fontWeight:'bold'},
          headerTitleAlign:'center',}} />
   
    
    
    <Image resizeMode='contain' source={{ uri: prod?.image || 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/peperoni.png' }} style={style.image}/>
    <Text style={style.size}>Select size</Text>
    <View style={style.rowsize}>
    {sizes.map((size) => (
        
        <Pressable onPress={() =>{
 setselectedsize(size);
        }} key={size} style={[style.around , {backgroundColor: selectedsize == size ? '#03A9F4':'white'}] }>
        <Text  style={[style.sizes , {color: selectedsize == size ? 'white':'black'}]} key={size}>{size}</Text>
        
        </Pressable>
    ))}</View>
    
    <Text style={style.txt}>{prod?.name}</Text>
    <Text style={style.price}>$ {prod?.price}</Text>
    <Pressable onPress={() =>{

        }} >
        <View style={style.buttonmain}>
            <Text style={style.buttontext}>Add to cart</Text>
        </View>
        
        </Pressable>
    </View>
);
}

const style = StyleSheet.create({
price:{color:"white",
padding:16,
fontSize:16,
fontWeight:"bold",
marginTop:'auto'},
    buttonmain:{
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
    around:{backgroundColor:'white',
   width:55,
   alignItems:'center',
borderRadius:25,

},
rowsize:{flexDirection:'row',
justifyContent:'space-around',
},
    sizes:{
        
        color:"black",
        padding:16,
        fontSize:16,
       fontWeight:"bold",
    },
    size:{color:"white",
    padding:16,
    fontSize:16,
   fontWeight:"bold",},
    txt:{
        marginVertical:16,
        color:"white",
        padding:10,
        fontSize:23,
       fontWeight:"bold",
       fontFamily:"Oswald_400Regular",
    
    }
    ,
    image:{
        marginTop:20,
        marginBottom:10,
        width:'100%',
        aspectRatio:1,
     
        
    },
})
export default Proddetail;