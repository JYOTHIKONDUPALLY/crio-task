import React from 'react';
import {useState, useEffect} from "react";
import styles from "./TableView.module.css";
import { TableFooter } from '@mui/material';

export default function TableView({filterList, list}) {
    const [currentPage, setCurrentPage]=useState();
    const [ filteredData, setFilteredData]=useState([]);
    const [selectedRows, setSelectedRows]=useState();

    const itemsPerPage=10;
    const displaydata=filterList;
    const startIndex=(currentPage-1)*itemsPerPage;
    const endIndex=startIndex+itemsPerPage;
    const totalPages=Math.ceil(displaydata.length/itemsPerPage);

    useEffect(()=>{
            console.log(`tableList:${list}`);
            console.log(`filteredData:${filteredData}`)
           },[list]);

    const handleDelete=()=>{

    }

    const handleEdit=()=>{

    }

    const handleCheckBox=()=>{

    }

    const handlePageCheckBox=()=>{

    }

    const handlePagination=()=>{

    }

    useEffect(()=>{
     setFilteredData(list)
    })
  return (
    <div className={styles.tableView}>
        <table>
            <thead>
                <tr>
                    <th>
                        <input type="checkbox" checked={""} onChange={""}/>
                    </th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {displaydata.slice(startIndex, endIndex).map((employee, index)=>{
                    return <div>
                         <tr className={styles.bodyRow}>
                <td>
                    <input type="checkbox"/>
                </td>
                <td className={styles.name}>{employee.name}</td>
                <td className={styles.email}>{employee.email}</td>
                <td className={styles.role}>{employee.role}</td>
                <td className={styles.action}>delete, edit</td>
                <td>other details</td>
               </tr>
                    </div>
                   
                })}
               
            </tbody> 
        </table>
        <TableFooter className={styles.Tablefooter}>
          <button>Delete Selected</button>  
          <div className={styles.paginationContainer}></div>
        </TableFooter>
    </div>
  )
}
