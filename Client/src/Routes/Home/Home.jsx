import React from 'react';
import styles from './style.module.css';
import {Paper} from '@mui/material';

const Home = () => {
    return (
        <div className={styles.background}>
           <Paper sx={{width:300, backgroundColor:'#38a541', opacity:0.8}}>
               <h1 className="text-5xl text-white">Hello [Name]</h1>
               <p>
                   Welcome to the FunStack Zoo!
                   Navigate to the top left to continue your homework and start learning with the FunStack Zoo!
               </p>

           </Paper>
        </div>
    );
};

export default Home;