import React from "react";
import '../index.css';
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
        flex: {
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        }
    }
));

export default function Welcome() {
    const classes = useStyles()
    return (
        <div className={classes.flex}>
            <div className='text'>
                <h1>
                    {"Hello, I'm "}
                    <span>
                    Achiya Haviv
               </span>{" ."}
                </h1>
                <h1>
                    I'm a full-stack web developer
                </h1>
            </div>

        </div>

    );
}


