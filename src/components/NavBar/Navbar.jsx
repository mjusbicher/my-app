import React from 'react'
import {AppBar, Toolbar, Typography, makeStyles, Button, ButtonGroup} from '@material-ui/core/'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'
import CartIcon from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

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
            <AppBar color="white">
                <Toolbar>
                    <IconButton>
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant='h6' className={classes.title}>
                        MiTienda
                    </Typography>
                    <Button href="/"><CartIcon/></Button>
                    <ButtonGroup variant="text" aria-label="text button group">
                        <Link style={{ margin: '0px 7px'}} to="/category/remeras">REMERAS</Link>
                        <Link style={{ margin: '0px 7px'}} to="/category/pantalones">PANTALONES</Link>
                        <Link style={{ margin: '0px 7px'}} to="/category/camperas">CAMPERAS</Link>
                        <Link style={{ margin: '0px 7px'}} to="/category/zapatillas">ZAPATILLAS</Link>
                    </ButtonGroup>
                </Toolbar>
            </AppBar>
            <div className={classes.offset}></div>
        </div>
    )
}

export default Navbar;