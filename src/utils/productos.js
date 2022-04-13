export const productos = [
    {
        id:1,
        nombre: 'Producto 1',
        precio: '$5.00',
        imagen: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0dfbabc9-57b2-4d3e-95b5-b44e042310e8/playera-con-suela-sportswear-kmDnwx.png'
    },
    {
        id:2,
        nombre: 'Producto 2',
        precio: '$10.00',
        imagen: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1b29590e-4137-470e-88a8-435b204c84ee/pantalones-deportivos-sportswear-tech-fleece-4x29ft.png'
    },
    {
        id:3,
        nombre: 'Producto 3',
        precio: '$25.00',
        imagen: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/00251e65-5f4f-4159-8f88-55390535052a/sudadera-con-gorro-de-b%C3%A1squetbol-dri-fit-standard-issue-lebron-10-fruity-pebbles-H2X93s.png'
    },
    {
        id:4,
        nombre: 'Producto 4',
        precio: '$50.00',
        imagen: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-6bce-43e7-ad07-f57ae3c13142/calzado-air-force-1-07-5QFp5Z.png'
    }
]

export const producto = [
    {
        id:1,
        nombre: 'REMERA NIKE',
        precio: '$10.00',
        descripcion: 'Remera de manga corta para hombre',
        imagen: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ac89d319-a3e1-47ab-b253-89c00401ecd6/playera-de-entrenamiento-dri-fit-legend-knTPqEkv.png'
    },
    {
        id:2,
        nombre: 'CAMPERA NIKE',
        precio: '$25.00',
        descripcion: 'Campera con capucha para hombre',
        imagen: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2e244913-7407-4175-9e40-248f8a89ba17/chamarra-de-golf-repel-tiger-woods-p5jpwt.png'
    }
]

export const traerProductos = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(productos);
        }, 3000);
    });
};

export const traerProducto = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(producto);
        }, 2000);
    });
};