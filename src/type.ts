import { types } from "@babel/core";

export type Product = {
    id:number;
    image: string | null;
    name : string;
    price:number;
};

export type pizzsize = 'S' | 'M' | 'L' | 'XL';

export type Cartitem ={
    id:String;
    product: Product;
    product_id:number;
    size:pizzsize;
    quantity:number;

};

export default types;