import { StyleSheet,Text, View,Image,FlatList,Pressable } from 'react-native';
import Colors from '../constants/Colors';
import products from '@/assets/data/products';
import { Product } from '../type';
import {Link} from 'expo-router';
import Proddetail from './[id]'
type prodtype = {
  prod:Product;
};

const Prodlist = ({prod}: prodtype) => {
  return(  
<Link href={`/${prod.id}`} asChild>
  <Pressable style={styles.container}>
    <Image resizeMode='contain' source={{ uri: prod.image || 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/peperoni.png' }} style={styles.image}/>
<Text style={ styles.name}>{prod.name}</Text>
<Text style={styles.price}>${prod.price}</Text>
</Pressable>
</Link>
);
}

export default function Menuscreen(){
return(
  <View style={styles.con}>
  <FlatList  data={products} renderItem={({item}) => <Prodlist prod={item}/>}
  numColumns={2}
  contentContainerStyle={{gap:10}}
  columnWrapperStyle={{gap:10}}
  />
  </View>
);
};




const styles = StyleSheet.create({
  name:{fontSize:20,color:"white" , fontWeight:"bold"},
  price:{color:Colors.light.tint, fontSize:17 , 
  fontWeight:"400",
  marginVertical:14,
},
image:{width:'100%',
  aspectRatio:1,

  alignSelf:'center',
  marginBottom:17,

},
  container: {
    borderWidth:1,
    borderRadius:10,
    borderColor:'white',
    flex:1,
    maxWidth:'50%',
  padding:10,
  },
  con: {
    paddingHorizontal:15,
    paddingVertical:40,
   },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
   
  },
});
