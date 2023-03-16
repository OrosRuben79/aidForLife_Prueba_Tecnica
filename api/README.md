# Backend Engineer
## Contexto

En el presente proyecto pensamos en la construcción de un e-commerce para la venta de libros, y porque no a futuro poder vender a traves de la misma otro tipo de productos con los elementos de seguridad que requiere. Pensamos en un sistema que a futuro pueda tener la  capacidad de manejar inventario, vender, comprar, un carrito de compras, registrar usuarios, un perfil de usuarios y que los usuarios se puedan autenticar.



### Los requerimientos básicos para la implementación son:

- **Registro de usuarios**:
    - Los usuarios pueden registrarse indicando un correo electrónico, un nombre y una contraseña para luego poder activar su cuenta con una notificación recibida por mail.

- **Autenticación de usuarios:**
    - Los usuarios podrán ingresar en su cuenta ingresando el correo y contraseña del registro.

- **Perfil de Usuarios:**
    - Los usuarios podrán agregar una dirección de residencia y una foto de perfil.
    - La dirección de residencia y foto de perfil se puede editar en cualquier momento, para ser almacenadas en una nube de cloudinary.

- **Inventario de productos:**
    - Se puede agregar libros indicando el ISBN, título del libro, precio, autor, editorial y número de existencias.
    - Se puede actualizar las existencias de los producto en cualquier momento.
    - Se puede registrar el ingreso (compra) de un producto indicando el distribuidor y la cantidad comprada.
    - Se puede realizar consultas de stock en relación a la lista de productos con sus existencias.
- **Productos**
    - El usuario puede agregar un producto al carrito de compras.
    - El usuario puede comprar más de un producto.
    - Si no hay existencias, se le puede notificar al usuario al finalizar la compra.
    - El usuario puede consultar la lista de productos.
