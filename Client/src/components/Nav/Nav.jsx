import React from 'react';
import {Drawer} from '@mui/material';

const Nav = (props) => {
    return (
            <Drawer open={props.open} onClose={props.onClose}>
                <div className="bg-white w-1/2 h-full text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                </div>
            </Drawer>
    );
};

export default Nav;