import React from 'react'
import { Grid, TextField, Button, Typography, Box, CardMedia } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from "@material-ui/core/FormControlLabel";

function rand() {
    return Math.round(Math.random() * 20) - 10;
}
function getModalStyle() {
    const top = 30 + rand();
    const left = 35 + rand();
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        position: 'absolute',
        width: 850,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(0, 0, 3),
        borderRadius: '5px'
    },
}));

const Test = () => {

    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const btnstyle = { margin: '10px 0', border: "1px solid #bd252c", color: "#bd252c", backgroundColor: '#fff' }
    const gridStyle = { backgroundColor: "#e0e0e0" }
    const txtStyle = { width: "10%", padding: "10px 40px" }
    const bodyGrid = { margin: "20px 30px" }
    const fontSty = { fontSize: "13px" }
    const eachRow = { border: "1px solid #ccc", padding: "20px", borderRadius: "5px" }
    const priceStyle = { backgroundColor: "#bd252c", color: "#fff", borderRadius: "50px", padding: "1px 5px", width: "55%" }

    const modHead = { padding: "15px", borderBottom: '1px solid #ccc' }
    const inputFlex = { display: 'flex', flexDirection: 'row', padding: "15px 10px", marginLeft: "30px", marginTop: "10px" };
    const inStyle = { marginRight: "70px", border: 0, width: "60%", fontSize: "10px" }
    const stylGrid = { border: "1px solid #ccc", padding: " 5px", height: '230px', overflow: 'auto' }
    const dataSty = { boder: "1px solid #ccc", padding: " 10px 5px" }
    const boxSty = { marginRight: "10px", color: "#fff" }
    const BoxOuter = { marginLeft: "68%" }
    return (

        <Grid>
            {/* Header - Starts */}
            <Grid style={gridStyle} container spacing={24}>
                {/* <Grid item xs={1}>
                <CardMedia
                        component="img"
                        alt="logo"
                        src="new.jpg"
                        title="logo"

                    />
                </Grid> */}
                <Grid item xs={11}>
                    <Typography style={txtStyle} type="title" color="inherit">
                        HPC Cost Optimiser
                    </Typography>
                </Grid>

                <Grid item xs={1}>
                    <Button type='button' onClick={handleOpen} color='secondary' variant="contained" style={btnstyle} >Optimise</Button>
                </Grid>
            </Grid>
            {/* Header - Ends */}

            {/* Body - Starts */}
            <Grid style={bodyGrid}>
                <h2>Cost Optimiser History</h2>
                {/* Row 1 */}
                <Grid container item xs={8} spacing={12} style={eachRow}>
                    <Grid item xs={8}>
                        <Typography type="title" color="inherit">
                            Union Pacific Rail Road
                        </Typography>
                        <Typography style={fontSty} color='textSecondary'>
                            Month: January 2022
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography style={fontSty} color='textSecondary'>
                            Anticipated Savings :
                        </Typography>
                    </Grid>

                    <Grid item xs={2}>
                        <Typography type="title" style={priceStyle}>
                            $ 1,83,200
                        </Typography>
                    </Grid>
                </Grid>
                {/* Row 2 */}
                <Grid container item xs={8} spacing={12} style={eachRow}>
                    <Grid item xs={8}>
                        <Typography type="title" color="inherit">
                            Union Pacific Rail Road
                        </Typography>
                        <Typography style={fontSty} color='textSecondary'>
                            Month: December 2021
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography style={fontSty} color='textSecondary'>
                            Anticipated Savings :
                        </Typography>
                    </Grid>

                    <Grid item xs={2}>
                        <Typography type="title" style={priceStyle}>
                            $ 1,67,860
                        </Typography>
                    </Grid>
                </Grid>

                {/* Row 3 */}
                <Grid container item xs={8} spacing={12} style={eachRow}>
                    <Grid item xs={8}>
                        <Typography type="title" color="inherit">
                            AT&T
                        </Typography>
                        <Typography style={fontSty} color='textSecondary'>
                            Month: December 2021
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography style={fontSty} color='textSecondary'>
                            Anticipated Savings :
                        </Typography>
                    </Grid>

                    <Grid item xs={2}>
                        <Typography type="title" style={priceStyle}>
                            $ 12,43,700
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>

            {/* Body - Ends */}

            {/* Modal - Starts */}
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                    {/* Head */}
                    <Grid style={modHead} container spacing={24}>
                        <Grid item xs={11}>
                            <Typography type="title" variant='h6' color="inherit">
                                New Optimisation
                            </Typography>
                        </Grid>

                        <Grid item xs={1}>
                            <Button onClick={handleClose}>X</Button>
                        </Grid>
                    </Grid>

                    {/* Body */}
                    <Grid style={inputFlex}>
                        <TextField
                            required
                            id="standard-required"
                            label="Customer Name"
                            defaultValue="Lumber Fuel Co."
                            variant="standard"
                            style={inStyle}
                        />
                        <TextField
                            required
                            id="standard-required"
                            label="Transaction List Timeline"
                            defaultValue="March 2022"
                            variant="standard"
                            style={inStyle}
                        />


                        {/* <TextField placeholder='Lumber Fuel Co.' style={inStyle} /> */}
                        {/* <TextField placeholder='March 2022' style={inStyle} /> */}
                    </Grid>


                    {/* Data - Starts */}
                    <Grid style={bodyGrid}>
                        <h4>Provider Discounts</h4>

                        <Grid style={stylGrid} spacing={24}>
                            <Grid container style={dataSty}>
                                <Grid item xs={10}>
                                    <FormControlLabel value="Speedway" control={<Radio />} label="Speedway" />

                                    {/* <Typography type="title" color="inherit">
                                        Speedway
                                    </Typography> */}
                                </Grid>

                                <Grid item xs={1}>
                                    <Button style={priceStyle} onClick={handleClose}>0.40</Button>
                                </Grid>
                            </Grid>
                            <Grid style={dataSty} container>
                                <Grid item xs={10}>
                                    <FormControlLabel value="Circle K" control={<Radio />} label="Circle K" />
                                </Grid>
                                <Grid item xs={1}>
                                    <Button style={priceStyle} onClick={handleClose}>0.50</Button>
                                </Grid>
                            </Grid>
                            <Grid container style={dataSty}>
                                <Grid item xs={10}>
                                    <FormControlLabel value="Kangaroo" control={<Radio />} label="Kangaroo" />
                                </Grid>
                                <Grid item xs={1}>
                                    <Button style={priceStyle} onClick={handleClose}>.04</Button>
                                </Grid>
                            </Grid>
                            <Grid container style={dataSty}>
                                <Grid item xs={10}>
                                    <FormControlLabel value="Kwig Star" control={<Radio />} label="Kwig Star" />
                                </Grid>
                                <Grid item xs={1}>
                                    <Button style={priceStyle} onClick={handleClose}>.05</Button>
                                </Grid>
                            </Grid>
                            <Grid container style={dataSty}>
                                <Grid item xs={10}>
                                    <FormControlLabel value="Speedway" control={<Radio />} label="Speedway" />
                                </Grid>
                                <Grid item xs={1}>
                                    <Button style={priceStyle} onClick={handleClose}>0.40</Button>
                                </Grid>
                            </Grid>
                            <Grid container style={dataSty}>
                                <Grid item xs={10}>
                                    <FormControlLabel value="Speedway" control={<Radio />} label="Speedway" />
                                </Grid>
                                <Grid item xs={1}>
                                    <Button style={priceStyle} onClick={handleClose}>0.40</Button>
                                </Grid>
                            </Grid>
                        </Grid>



                    </Grid>
                    <Grid sx={{ m: 2 }} style={inputFlex}>
                        <Box style={BoxOuter}
                            display="flex"
                            justifyContent="flex-end"
                            justify="space-between"
                        >
                            <Button style={boxSty} type="button" color="error" variant="contained" onClick={handleClose}>Close</Button>
                            <Button style={boxSty} type="button" color="secondary" variant="contained" >Upload Excel</Button>
                        </Box>
                    </Grid>

                </div>
            </Modal>

        </Grid>
    )
}

export default Test;