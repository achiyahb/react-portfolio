
import Particles from "../components/particles";
import {makeStyles} from '@material-ui/styles'
import Welcome from "../components/Welcome";


const useStyles = makeStyles((theme) => ({
        main: {
            textAlign: 'center',
            alignItems: 'center',
            display: 'flex',
            position:"absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
        },
    }
));

export default function Home() {
    const classes = useStyles()
    return (

            <div className={classes.main}>
                <Particles/>
                <Welcome className={classes.welcome}/>
            </div>

    );
}


