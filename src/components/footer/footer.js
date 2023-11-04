import React from 'react'
import styles from "./footer.module.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';

export default function Footer (){
  return (
      <div className={styles.Footer}>
        <div className={styles.container}>
          <div className={styles.logo}>
          <SupervisorAccountIcon sx={{width:"50px"}}/>Logo
      </div>
      <div className={styles.copyrightText}>
<p className={styles.text}>© 2020 Acme. All right reserved.</p>
<p className={styles.text}>Privacy Policy</p>
<p className={styles.text}>Terms of Service</p>
</div>

    </div>

<div className={styles.icons}>
<FacebookIcon  className={styles.iconstyle}/>
<TwitterIcon className={styles.iconstyle}/>
<InstagramIcon className={styles.iconstyle}/>
<TelegramIcon className={styles.iconstyle}/>
    </div>
</div>
  )
}
