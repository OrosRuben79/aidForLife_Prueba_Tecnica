# DOCUMENTACION DE API
En virtud de lo solicitado para la reallizaciòn de la API, en el proyecto se utilizaron las diguientes tecnologias

NODE.JS, EXPRESS, MONGODB, MONGOOSE, JAVASCRIPT, 

librerias implementadas
    "axios": "^1.3.3",
    "bcryptjs": "^2.4.3",
    "body-parser": "^1.20.1",
    "cloudinary": "^1.33.0",
    "cookie-parser": "^1.4.6",
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "express-fileupload": "^1.4.0",
    "express-validator": "^6.14.2",
    "jsonwebtoken": "^9.0.0",
    "jwt-decode": "^3.1.2",
    "mongoose": "^6.9.1",
    "morgan": "^1.10.0",
    "nodemailer": "^6.8.0",
    "nodemon": "^2.0.20",
    "stripe": "^11.5.0"

## URL de enlaceEl proyecto se encuentra alojado en GitHub
https://github.com/OrosRuben79/aidForLife_Prueba_Tecnica


## ESTRUCTURA

Se crea la carpeta SRC en la cual se realiza el desarrollo con la siguiente estructura

1- CONTROLLER
2- DATABASE
3- HELPERS
4- MIDDLEWARES
5- MODELS
6- ROUTES


## DETALLE DE LA ESTRUCTURA

1- CONTROLLER: 
            En la carpeta controller se encuentran los archivos usercontroller, productscontroller, orderscontroller y paymentscontrollers; en cada uno de ellos se realiza el desarrollo de las funcionesn contando con el crud de los modelos establecidos en la carpeta models, aplicanto los metodos GET, POST, PUT, DELETE.
            
2- DATABESE:
            En la carpeta database se encuentra el archivo config.js y en el se realiza la conexon con la base de datos, para la cual se utilizo MONGODB, con el ORM de Mongoose.

3- HELPERS:
            En la carpeta helpers se encuentran los archivos db-validators, en el qyue se realizan las validaciones de algunas rutas; generate-jwt, en el que se genera la encriptacion del paswword y el codigo jwt; jwtDecode, en este archivo se realiza una validacion del jwty nodemailler, en el que se establecen los parametros del envio de mail.

4- MIDDLEWARES:
            En la carpeta Middleware se encuentran dos archivos uno es el validator-jwt en donde se realiza una validacion del usuario y su estado para crear el jwt y el segundo archivo es validator-middleware en donde se valida que no existan errores

5- MODELS:
            En la carpeta models se encuentran los archivos order, products, users: en los cuales se encuentra el schema de los campos solicitados y que son los modelos de la base de datos 

6- ROUTES:
            En la carpeta rutas se encuentran los archivos ordersRouter, pymenRouter, productRouter, userRouter en los cuales se encuentran los enpoint de cada uno de los modelos a los cuales se realizaran la peticiones o envio de la data


## SEGURIDAD

Dentro de los metodos de seguridad utilizados se encuentran implementados los que ofrece Mongoose y que son los que atajan los errores en la validacion de campos dentro de los modelos creados; con express-validator se realizaron validaciones en las rutas, y con jwt se crea la validaion del usuario con un codigo.


## imagenes de muestra en la carpeta img

1- JWT (Json Web Token) = imagen en carpeta ../img/archivo jwt.jpg

2- express-validator = imagen en carpeta ../img/expres-validator.jpg

3- Mongoose = imagen en carpeta ../img/mongoose.jpg

## imagenes de muestra de los endpoint realizando peticiones y envio de data por insomia

RUTAS USER:
        1 GET.USER => imagen en carpeta ../img/getuser
        2 POST.USER => imagen en carpeta ../img/postuser
        3 PUT.USER => imagen en carpeta ../img/putuser
        4 DELETE.USER => imagen en carpeta ../img/deleteuser

RUTAS PRODUCT:
        1 GET.PRODUCT => imagen en carpeta ../img/getproduct
        2 POST.PRODUCT => imagen en carpeta ../img/postproduct
        3 PUT.PRODUCT => imagen en carpeta ../img/putproduct
        4 DELETE.PRODUCT => imagen en carpeta ../img/deleteproduct

RUTAS ORDER:
        1 GET.ORDER => imagen en carpeta ../img/getorder
        2 POST.ORDER => imagen en carpeta ../img/postorder
        3 PUT.ORDER => imagen en carpeta ../img/putorder
        4 DELETE.ORDER => imagen en carpeta ../img/deleteorder


## agrego contenido