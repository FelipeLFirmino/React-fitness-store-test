import products from './itens.json'
import Cardproduct from './card';
import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';

interface Itemprops{
  busca:any;
  filter:number| null;
}

export default function Itens(props:Itemprops){
const [list, setList] = useState(products);
const {busca, filter} = props;

function testSearch(title:string) {
  const regexp = new RegExp(busca, 'i')
  return (regexp.test(title))
}

function testFilter(id:number) {
  if ( filter !== null) 
    return filter === id;
    return true
  }



useEffect(()=>{
  const newlist = products.filter(product=> testSearch(product.title) && testFilter(product.category.id));
  setList(newlist);
},[busca,filter])

  return(
    <Grid container alignContent={'center'} alignItems={'center'} spacing={3}>
      {list.map((product)=>(<Grid item  sx={{ml:0}} xs={12} sm={6} md ={4} lg ={3}>
         <Cardproduct  {...product}>
        
        </Cardproduct>
      </Grid>))}
    </Grid>
  );
}
