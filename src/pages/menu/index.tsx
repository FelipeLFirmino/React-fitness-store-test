
import NavBar from "pages/menu/navbar";
import { useState } from "react";
import Filtertab from "./filter";
import Itens from "./itens";




export default function Menu() {
     const [busca,setBusca] = useState("")
     const [filter,setFilter] = useState<number | null>(null)
    return(

     
         <main>
         <NavBar busca={busca} setBusca={setBusca}/>
         <Filtertab filter={filter} setFilter={setFilter} ></Filtertab>
         <Itens busca = {busca} filter = {filter}></Itens>
         </main>
     
    );
}