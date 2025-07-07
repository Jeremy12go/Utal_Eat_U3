# Utal Eat

Es una aplicación que consiste en la solicitud de comida a domicilio, la cual permite visualizar tiendas
cercanas a la dirección ingresada, permitiendo conocer los platillos que ofrece cada tienda. Al realizar un 
pedido podras calificar y dejar un comentario al local al que realizaste dicho pedido :D!.
...
---

## Tecnologías

### Backend
- Express

### Frontend
- React
- Axios

### Bases de Datos
- MongoDB
- Redis

### DevOps
- Docker
- Docker Compose

---

## Requisitos
Antes de ejecutar la aplicación, se debe tener instalado:
- [Docker desktop](https://docs.docker.com/desktop/)

---

## Instalación y ejecución (con Docker)

### 1. Clona el proyecto

```bash
    git clone https://github.com/tuUsuario/Utal_Eat_U3.git
    cd Utal_Eat_U3
```

### 2. Ejecuta el proyecto
```bash
    docker-compose up --build
```

## Comandos para front


### `cd frontend/my-app`
Cambiamos el directorio
### `npm install`
Instalamos las dependencias
### `npm start`
Iniciamos la aplicación

## Iniciar el manbo sin docker

Cada servicio debe instalar y iniciarse independientemente.

- En la ruta de los servicio: accounts, orders, ratings
```bash
    npm install express mongoose dotenv
```
- En la ruta del servicio stores
```bash
    npm install express mongoose multer dotenv
```
- En la ruta del servicio gateway
```bash
    npm install express dotenv
```
* Las bases se crean automaticamente, pero no tienen datos xD
LOS DATOS VIENEN EN EL DLC

tiene que tener instalado mongoDB y preferentemente mongoDB Compass
https://www.mongodb.com/try/download/community
https://www.mongodb.com/try/download/compass