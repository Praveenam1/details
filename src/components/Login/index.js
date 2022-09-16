import React from 'react'
import { Grid, CardMedia, Paper, TextField, Button, Typography, InputLabel } from '@material-ui/core';
import { Link } from "react-router-dom";
const Login = () => {

    const paperStyle = { padding: 20, height: '40vh', width: 300, margin: "20px", backgroundColor: '#c8c8c8', borderRadius: '20px' }

    const inputStyle = { padding: '2px' }
    const btnstyle = { margin: '8px 0' }
    const gridStyle = { fontSize: 12 }

    const paperContainer = {

        backgroundImage: `url(${"main.png"})`,
        height: 750,
        width: "100%",
        backgroundSize: 'cover',
    };

    const linkSt = {textDecoration: 'none'}

    return (
        <Grid style={gridStyle} container spacing={24}>
            <Grid item xs={9}>

                <Paper style={paperContainer}>

                </Paper>
            </Grid>
            <Grid item xs={3} spacing={24}>
                <Grid align='center'>
                    <CardMedia
                        component="img"
                        alt="logo"
                        height="170"
                        src="drop.jpg"
                        width="10%"
                        title="logo"

                    />
                </Grid>
                <Paper style={paperStyle}>
                    <Typography align='center'>
                        <h3>Log in with your email account</h3>
                    </Typography>
                    <InputLabel sx={{ color: "black" }}>Email</InputLabel>
                    <TextField placeholder='Enter username' variant="outlined" style={inputStyle} fullWidth required />
                    <InputLabel sx={{ color: "red" }}>Password</InputLabel>
                    <TextField placeholder='Enter password' type='password' variant="outlined" style={inputStyle} fullWidth required />
                    <Link to="/home" style={linkSt}>
                        <Button type='submit' color='secondary' variant="contained" style={btnstyle} fullWidth>Login</Button>
                    </Link>
                    <Typography align="center" color='secondary' >
                        Forgot your password ?
                    </Typography>

                </Paper>
            </Grid>
        </Grid>
    )
}

export default Login;