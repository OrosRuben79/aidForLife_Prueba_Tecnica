# Backend Engineer
## Contexto

Estamos construyendo un e-commerce para la venta de libros, sin embargo no ****descartamos la posibilidad de vender otro tipo de productos en el futuro. El sistema que queremos construir debe estar en la capacidad de manejar inventario, vender, comprar, un carrito de compras, registrar usuarios, un perfil de usuarios y que los usuarios se puedan autenticar.

Tú tarea es construir los servicios que nos permita cumplir con estas funciones, nos preocupa mucho la seguridad por lo que queremos conocer que **practicas de seguridad** tuviste en cuenta durante el desarrollo.

### Requerimientos

- **Registro de usuarios**:
    - Los usuarios deben estar en la capacidad de registrarse indicando un correo electrónico, un nombre y una contraseña.
- **Autenticación de usuarios:**
    - Los usuarios podrán ingresar en su cuenta ingresando el correo y contraseña del registro.
- **Perfil de Usuarios:**
    - Los usuarios podrán agregar una dirección de residencia y una foto de perfil.
    - La dirección de residencia y foto de perfil se puede editar en cualquier momento.
- **Inventario de productos:**
    - Se debe poder agregar libros indicando el ISBN, título del libro, precio, autor, editorial y número de existencias.
    - En un futuro queremos tener más productos, pero no tenemos características especificas para esos productos, más allá del precio, código, nombre del producto y número de existencias.
    - Se debe poder actualizar las existencias de los producto ens cualquier momento.
    - Se debe poder registrar el ingreso (compra) de un producto indicando el distribuidor y la cantidad comprada.
    - Se debe poder consultar la lista de productos con sus existencias.
- **Productos**
    - El usuario debe poder agregar un producto al carrito de compras.
    - El usuario debe poder comprar un producto
    - Si no hay existencias, se le debe notificar al usuario al finalizar la compra.
    - El usuario debe poder consultar la lista de productos.
