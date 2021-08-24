import React, { useEffect } from 'react';
import styles from './Plan.module.css';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
//import aos
import AOS from 'aos';
import 'aos/dist/aos.css';

const Plan = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const AntSwitch = withStyles((theme) => ({
        root: {
          width: 28,
          height: 16,
          padding: 0,
          display: 'flex',
        },
        switchBase: {
          padding: 2,
          color: theme.palette.grey[500],
          '&$checked': {
            transform: 'translateX(12px)',
            color: theme.palette.common.white,
            '& + $track': {
              opacity: 1,
              backgroundColor: theme.palette.primary.main,
              borderColor: theme.palette.primary.main,
            },
          },
        },
        thumb: {
          width: 12,
          height: 12,
          boxShadow: 'none',
        },
        track: {
          border: `1px solid ${theme.palette.grey[500]}`,
          borderRadius: 16 / 2,
          opacity: 1,
          backgroundColor: theme.palette.common.white,
        },
        checked: {},
      }))(Switch);
      
    return (
        <div className="container-fluid mt-5 mb-5">
            <div className="row d-flex justify-content-between">
                <h1 data-aos="fade-right" className="col-md-5 mt-md-4 mb-md-5 text-center">Checkout Pricing Plan</h1>
                <div data-aos="fade-left" className="text-center col-md-2 offset-md-4 mt-md-5 mb-md-5">
                    <Typography component="div">
                        <Grid component="label" container alignItems="center" spacing={1}>
                            <Grid item>Monthly</Grid>
                            <Grid item>
                                <AntSwitch checked={state.checkedC} onChange={handleChange} name="checkedC" />
                            </Grid>
                            <Grid item>Yearly</Grid>
                        </Grid>
                    </Typography>
                </div>
            </div>
        </div>
    );
};

export default Plan;