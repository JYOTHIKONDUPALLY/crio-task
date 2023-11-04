import {useState, useEffect} from "react";
import styles from "./mainContent.module.css";
import Filter from "../Filter/filter";
import TableView from "../TableView/TableView";
import FetchData from "../api/api";

export default function MainContent (){
    const [list, setList]=useState([]);
    const [filterList, setFilterList]=useState([]);

    //generate the data from api component
   const generateData=async()=>{
    try{
const data= await FetchData();
console.log(data);
setList(data);
    }catch(e){
console.log(e);
    }
   }

   const handleFilter=(query)=>{

    const filteredData=list.filter((item)=>
    Object.values(item).some((value)=>value.toString().toLowerCase().includes(query.toLowerCase())))
    setFilterList(filteredData);
   }

   
   useEffect(()=>{
    generateData();
   },[]);

//  
    return(
              <div className={styles.container}>
      <Filter handleFilter={handleFilter}/>
      <TableView list={list} filterList={filterList}/>
      </div>
    )
}