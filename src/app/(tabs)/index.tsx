import { StyleSheet,Text, View,Image } from 'react-native';
import   "../productitem"
import "../../constants/Colors"
import Colors from '../../constants/Colors';
import products from '@/assets/data/products';
import { FlatList } from 'react-native-reanimated/lib/typescript/Animated';
import Menuscreen from '../productitem';


const prod = products[0];
export default function TabOneScreen() {
  return (
    <View style={styles.container}>
    <Menuscreen/>
 
    </View>
  );
}

const styles = StyleSheet.create({
 
  container: {
   
  },
  
});
