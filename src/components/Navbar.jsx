import React from 'react'
import {AppBar, Toolbar, Typography, makeStyles, Button, ButtonGroup} from '@material-ui/core/'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar,
    title: {
        flexGrow: 1
    }
}))

const Navbar = () => {
    const classes = useStyles()
    return (
        <div>
            <AppBar>
                <Toolbar>
                    <IconButton>
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant='h6' className={classes.title}>
                            MiTienda
                    </Typography>
                    <ButtonGroup variant="text" aria-label="text button group">
                        <Button href="#">Home</Button>
                        <Button href="#">About Us</Button>
                        <Button href="#">Contact</Button>
                    </ButtonGroup>
                </Toolbar>
            </AppBar>
            <div className={classes.offset}></div>
        </div>
    )
}

export default Navbar;