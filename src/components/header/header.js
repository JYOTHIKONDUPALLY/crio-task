import React from 'react';
import styles from "./header.module.css";
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
const Header = () => {
  return (
    <div className={styles.header}>
   <div className={styles.logo}><SupervisorAccountIcon sx={{width:"50px"}}/>Logo</div>
        </div>
  )
}


export  default Header;
