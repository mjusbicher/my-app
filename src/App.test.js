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

