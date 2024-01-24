# Prueba Técnica Backend: Nodejs Y TypeScript

La API tiene como propósito facilitar la gestión integral de vehículos y conductores para una empresa de transporte. Permite registrar vehículos disponibles, conductores contratados, así como asociar y desasociar conductores de vehículos de manera eficiente. La funcionalidad incluye la validación automática para garantizar que un conductor solo pueda cargar vehículos no asignados previamente, y viceversa, simplificando así la administración de la flota de transporte.

## Tabla de Contenidos

- [Tecnologías](#Tecnologías)
- [Instalación](#instalación)
- [Uso](#uso)

## Tecnologías

```
1. bcrypt
Se uso para almacenar contraseñas de manera segura en la base de datos, ya que bcrypt realiza un hash

2. dotenv
Se uso para almacenar configuraciones sensibles (credenciales de base de datos, etc) fuera del codigo fuente y facilitar la gestion de entornos 
de desarrollo

3. Express
Se uso para la creacion de ritas, el manejo de solicitudes y respuestas HTTP.

4. jsonwebtoken
Se uso para la autenticacion basada en tokens.

5.  morgan
Se utilizo para registrar la informacion sobre las solicitudes recibidas, lo que es util para el monitoreo.

6. pg
Para interactuar con la base de datos PostgreSQL.

7. jest
Facilita la escritura y ejecucion de pruebas unitarias.
```
Utilice la estructura porque me permitia separar las diferentes capas y funcionalidades de la aplicación, facilitando su entendimiento. A continuación se explica brevemente el propósito de cada carpeta:

- controllers: contiene los archivos que definen la lógica de negocio de la aplicación, es decir, cómo se procesan las peticiones y qué datos se devuelven como respuesta.
- database: contiene los archivos que se encargan de la conexión y la configuración de la base de datos, así como los scripts para crear las tablas.
- middlewares: contiene los archivos que definen funciones intermedias que se ejecutan antes o después de los controladores, por ejemplo, para la  autenticacion de usuario.
- models y Imodels: contiene los archivos que definen los modelos o entidades que representan los datos de la aplicación.
- routes: contiene los archivos que definen las rutas o endpoints de la aplicación (GET, POST, PUT, DELETE, etc.).
- test: contiene los archivos que definen las pruebas unitarias.

## Instalación

intalacion de dependencia:
```bash
npm install
``` 
Crear la base de datos en postgres: 

```sql
CREATE DATABASE systransportdb;
```

Crear un archivo .env con las variables de entorno de la api

```bash
HTTP_PORT=4000
SECRE_KEY=jfelipaip
EXPIRE_TOKEN=2h
POSTGRES_HOST=localhost
POSTGRES_USER=postgres
POSTGRES_PASSWORD=12345
POSTGRES_DB=systransportdb
DB_DRIVER=postgres
```

## Uso

Ejecutar los tests:
```bash
npm test
```

si los testeo pasa correctamente, la api funciona adecuadamente.

A continuación, use la herramiente preferida para enviar peticiones HTTP. En mi caso uso postman.

Primero va la ruta de registro que es la siguiente: http://localhost:4000/api/users/create

en el body pasar un json con la siguiente estructura: 

```json
{
    "email": "jfeli@hotmail.com",
    "password": "123456"
}
```

la api debe de responder con status 200 y con la siguiente respuesta json: 
```json
{
    "id": 1,
    "email": "jfeli@hotmail.com",
    "password": "$2b$05$8Q/cuk3U75JPUPYhFKVrGO7VW17RSJb8YEf0kSHfYdjLhA/dVLb3i",
    "updatedAt": "2024-01-24T15:33:44.490Z",
    "createdAt": "2024-01-24T15:33:44.490Z",
    "deletedAt": null
}
```

al momento de registrarnos, podemos iniciar sesion en la api.

mediante la siguiente url: http://localhost:4000/api/users/login

en el body pasar un json con la siguiente estructura:

```json
{
    "email": "jfeli@hotmail.com",
    "password": "123456"
}
```

la api debe de responder con status 200 y con la siguiente respuesta json: 
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
}
```

con este token podemos usar las demas rutas de la api, solamente funcionara si pasamos el token en el header.

mediante el siguiente parametro.

```bash
Authorization eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
```

la api tiene las siguientes rutas:

#### Metodo de traer a todos los conductores, se usa la peticion Get. 

http://localhost:4000/api/drivers  

#### Metodo Crear conductore, se usa la peticion Post.

http://localhost:4000/api/drivers/create 

en el body pasar un json con la siguiente estructura:

```json
{
    "identificacion": "1070658457",
    "apellido": "Garzon Gomez",
    "nombre": "Armando",
    "telefono": "3216974532",
    "direccion": "kr 14 E 12 - 85"
}
```
#### Metodo asociacion de vehiculo a un conductor, se usa la peticion Post.

http://localhost:4000/api/drivers/associateVehicles

en el body pasar un json con la siguiente estructura:

```json
{
    "idDriver": 1
}
```

Se pasa el id del conductor para hacer un select de la tabla de ese conductor y mirar sino tiene un vehiculo vinculado al conductor, 

si esta condicion pasa deberia de mostrar vehiculos que no tengan conductor vinculados. si el conductor ya tiene vinculado un vehiculo no

deberia mostrar vehiculos disponibles.

#### Metodo desasociacion de vehiculo a un conductor, se usa la peticion Post.

http://localhost:4000/api/drivers/disassociateVehicule

en el body pasar un json con la siguiente estructura:

```json
{
    "idDriver": 1
}
```

Se pasa el id del conductor para hacer un select de la tabla de ese conductor. si el conductor ya tiene vinculado un vehiculo la api

debera de mostrar el vehiculo asociado al conductor.

```json
{
    "id": 1,
    "modelo": "2023",
    "placa": "JGM-214",
    "capacidad": "20 kg",
    "createdAt": "2024-01-24T15:52:11.141Z",
    "updatedAt": "2024-01-24T15:52:11.141Z",
    "deletedAt": null,
    "conductorID": 1
}
```

#### Metodo de traer a todos los vehiculos, se usa la peticion Get.

http://localhost:4000/api/vehicles

#### Metodo de Crear vehiculo, se usa la peticion Post.

http://localhost:4000/api/vehicles/create

en el body pasar un json con la siguiente estructura:

```json
{
    "modelo": "2023",
    "placa": "JGM-214",
    "capacidad": "20 kg",
    "conductorID": 1
}
```