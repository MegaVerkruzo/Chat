import React from 'react';
import classes from './Loader.module.css';
import {Button} from "@material-ui/core";
import './Loader.css';

const Loader = () => {
    return (
        <div style={{height: window.innerHeight - 50}} className={classes.menu}>
            <div className="lds-ripple">
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Loader;