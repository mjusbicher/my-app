import React, { useContext } from "react";
import {
  AppBar,
  Toolbar,
  makeStyles,
  Button,
  ButtonGroup,
} from "@material-ui/core/";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { CartContext } from "../../Context/CartContext";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';


const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const { cart } = useContext(CartContext);

  const classes = useStyles();
  return (
    <div>
      <AppBar color="default">
        <Toolbar>
          <IconButton>
            <MenuIcon />
          </IconButton>
          <Button className={classes.title}>
            <Link to="/" className={styles.navbar}>
              NIKE
            </Link>
          </Button>
          <Button>
            <Link to="/cart" className={styles.navbar}>
              <IconButton aria-label="cart">
                <Badge badgeContent={cart.length} color="success">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Link>
          </Button>
          <ButtonGroup variant="text" aria-label="text button group">
            <Button>
              <Link className={styles.navbar} to="/category/remeras">
                REMERAS
              </Link>
            </Button>
            <Button>
              <Link className={styles.navbar} to="/category/pantalones">
                PANTALONES
              </Link>
            </Button>
            <Button>
              <Link className={styles.navbar} to="/category/camperas">
                CAMPERAS
              </Link>
            </Button>
            <Button>
              <Link className={styles.navbar} to="/category/zapatillas">
                ZAPATILLAS
              </Link>
            </Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
    </div>
  );
};

export default Navbar;
