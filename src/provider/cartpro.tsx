import { Children, createContext, PropsWithChildren, useContext, useState } from "react";
import { Cartitem, Product } from "../type";
import { randomUUID } from "expo-crypto";
const Cartcontext = createContext<Carttype>({
    items:[],
    addItem: () => {},
    updateItem: () => {},
    total:0,

});

type Carttype ={
    items: Cartitem[];
    addItem: (product: Product, size: Cartitem["size"]) => void;
    updateItem: (itemid: String, amount: -1 | 1) => void;
    total:number,
}

const Cartprov = ({children}: PropsWithChildren) => {
    const [items,setitems] = useState<Cartitem[]>([]);

const addItem = (product: Product, size: Cartitem["size"]) => {


console.log("adadadasdad");
const newCartitem: Cartitem = {
    id:randomUUID(),
    product,
    product_id:product.id,
    size,
    quantity:1
}



setitems([newCartitem, ...items]);


    };

const updateItem = (itemid: String, amount: -1 | 1) => {
const updatedItems = items.map(item => item.id != itemid ? item :{...item , quantity: item.quantity + amount}
    );
    setitems(updatedItems);
};
const total = items.reduce((sum,item) => (sum += item.product.price * item.quantity),0);
    return(
        <Cartcontext.Provider value={{ items,  addItem, updateItem , total}}>
{children}
        </Cartcontext.Provider>
    )
}

export default Cartprov;

export const useCart = () => useContext(Cartcontext);