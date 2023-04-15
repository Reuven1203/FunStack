import React from 'react';
import styles from './style.module.css';
import {Card, Paper} from '@mui/material';
import BasicModal from '../../components/BasicModal/BasicModal.jsx';

const Home = () => {
    return (
        <div className={styles.background}>
            <div className="flex space-x-4 pb-7 h-full justify-center items-center">
                <div className="flex-col space-y-[50px]">
                    <Paper sx={{backgroundColor:'#38a541', opacity:0.8, color:'white', width:500}}>
                        <h1 className="text-white">Hello [Name]</h1>
                        <p>
                            Welcome to the FunStack Zoo!
                            Navigate to the top left to continue your homework and start learning with the FunStack Zoo!
                        </p>

                    </Paper>
                    <Paper sx={{backgroundColor:'#dd5860', color:'white', opacity:0.8}}>
                        <h1>Next Assignment</h1>
                        <h2>Due: March 15, 2025</h2>
                    </Paper>
                </div>
                <Card sx={{height:'fit-content', padding:3}}>
                    <h1>
                        Teacher
                    </h1>
                {/*Random teacher photo*/}
                    <img src="https://partnershipla.org/wp-content/uploads/2019/07/Anavelen-Macias-245x300.png" alt="teacher"/>
                    <h2>
                        Elna Macias
                    </h2>
                </Card>
                <BasicModal title="Contact">
                    <h3 className="text-xl">Email: elnamacias@funstack.com</h3>
                    <h3 className="text-xl">Phone: 555-555-5555</h3>
                </BasicModal>
            </div>


        </div>
    );
};

export default Home;