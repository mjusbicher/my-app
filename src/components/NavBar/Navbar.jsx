import React, { useContext, useState } from "react";
import {
  AppBar,
  Toolbar,
  makeStyles,
  Button,
  ButtonGroup,
  Divider,
  SwipeableDrawer,
  Hidden,
  IconButton,
} from "@material-ui/core/";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { CartContext } from "../../Context/CartContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import { ChevronLeft } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const { cart } = useContext(CartContext);

  const [open, setOpen] = useState(false);

  const classes = useStyles();
  return (
    <div>
      <AppBar color="default">
        <Toolbar className={styles.navbar}>
          <Hidden smUp>
            <IconButton>
              <MenuIcon onClick={() => setOpen(true)}/>
            </IconButton>
          </Hidden>
          <Button>
            <Link to="/" className={styles.navbarTexts}>
              NIKE
            </Link>
          </Button>
          <Hidden xsDown>
            <ButtonGroup variant="text" aria-label="text button group">
              <Button>
                <Link className={styles.navbarTexts} to="/category/remeras">
                  REMERAS
                </Link>
              </Button>
              <Button>
                <Link className={styles.navbarTexts} to="/category/pantalones">
                  PANTALONES
                </Link>
              </Button>
              <Button>
                <Link className={styles.navbarTexts} to="/category/camperas">
                  CAMPERAS
                </Link>
              </Button>
              <Button>
                <Link className={styles.navbarTexts} to="/category/zapatillas">
                  ZAPATILLAS
                </Link>
              </Button>
            </ButtonGroup>
          </Hidden>
          <Link to="/cart" className={styles.navbarTexts}>
            <Button className={styles.btn}>
              <IconButton aria-label="cart">
                <Badge badgeContent={cart.length} color="success">
                  <ShoppingCartIcon/>
                </Badge>
              </IconButton>
            </Button>
          </Link>
        </Toolbar>
        <SwipeableDrawer 
        anchor="left" 
        open={open} 
        onOpen={() => setOpen(true)} 
        onClose={() => setOpen(false)}
        >
          <div>
            <IconButton>
              <ChevronLeft onClick={() => setOpen(false)}/>
            </IconButton>
          </div>
          <Divider />
          <Button>
            <Link className={styles.navbarTexts} to="/category/remeras">
              REMERAS
            </Link>
          </Button>
          <Button>
            <Link className={styles.navbarTexts} to="/category/pantalones">
              PANTALONES
            </Link>
          </Button>
          <Button>
            <Link className={styles.navbarTexts} to="/category/camperas">
              CAMPERAS
            </Link>
          </Button>
          <Button>
            <Link className={styles.navbarTexts} to="/category/zapatillas">
              ZAPATILLAS
            </Link>
          </Button>
        </SwipeableDrawer>
      </AppBar>
      <div className={classes.offset}></div>
    </div>
  );
};

export default Navbar;
