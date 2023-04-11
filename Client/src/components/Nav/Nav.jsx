import React from 'react';
import {Box, Drawer, Paper, Typography} from '@mui/material';
import {Link} from 'react-router-dom';

const Nav = (props) => {
    return (
            <Drawer hideBackdrop={true}  variant="persistent" open={props.open} onClose={props.onClose}>
             <Box sx={{display:'flex', flexDirection:'column', width:300, padding:3}}>
                 <Link>
                     <Paper sx={{fontSize:50}}>
                           Link 1
                     </Paper>
                 </Link>
                 <Link>Link</Link>
                    <Link>Link</Link>
             </Box>
            </Drawer>
    );
};

export default Nav;