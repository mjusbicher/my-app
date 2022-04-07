import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

/*   let myArray = ['hola', 'mundo'];

// AGREGAR ELEMENTOS AL ARRAY

  myArray = [...myArray, 'chau'];

// NO SE CREA OBJETO NUEVO SI NO QUE AGARRAMOS LAS PROPIEDADES PARA UTILIZARLAS LUEGO

  let { nombre, img} = {
    nombre: 1,
    precio:2,
    img: 3
  };

  console.log(nombre + 3);
  console.log(img + '.com');
 */

/* <Card sx={{ maxWidth: 345 }} className={s.cardStyle}>
            <CardMedia
            component="img"
            height="140"
            image="https://www.opensports.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/3/6/36G040-E8G_0.jpg"
            alt="buzo"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Producto 1
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Precio: $3000.00
                </Typography>
            </CardContent>
            <CardActions className={s.buttonStyle}>
                <Button onClick={subs} variant="outlined" color="error">-</Button>
                <p>{count}</p>
                <Button onClick={adding} variant="outlined" color="success">+</Button>
                <Button size="big" onClick={onAdd} variant="contained" color="success" >Agregar al carro</Button>
            </CardActions>
        </Card> */