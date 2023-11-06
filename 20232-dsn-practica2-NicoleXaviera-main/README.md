# 20232-dsn-practica2-NicoleXaviera
20232-dsn-practica2-NicoleXaviera created by GitHub Classroom
# Desarrollo de Soluciones en la Nube con AWS y Docker
Este proyecto es una aplicación que permite el registro e inicio de sesión con Google, así como la creación de una tabla de usuarios. Además, proporciona la funcionalidad para listar y eliminar usuarios a través de API endpoints. La base de datos se aloja en otro contenedor Docker.

Requisitos

Antes de comenzar, asegúrate de tener lo siguiente instalado en tu sistema:
- Node.js
- Docker
- AWS Account

Configuración

1. Clona el repositorio:

2. Configura las variables de entorno:
   - Crea un archivo `.env` en la raíz del proyecto y configura las siguientes variables de entorno:
     ```
     PORT=3000 # Puerto para el servidor Express
     GOOGLE_CLIENT_ID=TU_CLIENT_ID # Clave de cliente de Google OAuth2
     GOOGLE_CLIENT_SECRET=TU_CLIENT_SECRET # Secreto de cliente de Google OAuth2
     DB_HOST=db # Nombre del contenedor de la base de datos
     ```

Backend (Node.js y Express)

3. Instala las dependencias del servidor:
4. Inicia el servidor Express:
El servidor estará disponible en http://localhost:3000.

Frontend (React)
5. Instala las dependencias del cliente:
6. Inicia la aplicación de React:
La aplicación de cliente estará disponible en http://localhost:3000.

Configuración de Docker
7. Crea y ejecuta los contenedores de la aplicación y la base de datos:

Despliegue en AWS

8. Configura tu entorno AWS y crea una instancia EC2 siguiendo la documentación de AWS.
9. Copia los archivos del proyecto a tu instancia EC2 utilizando SCP o SFTP.
10. Conéctate a tu instancia EC2 y asegúrate de tener Docker instalado:
11. Ejecuta Docker Compose para crear y ejecutar los contenedores en tu instancia EC2:

Uso
- Accede a la aplicación a través de la URL de tu instancia EC2 o http://localhost:3000 en tu entorno local.

[![NICOLE.jpg](https://i.postimg.cc/cJdvDmFK/NICOLE.jpg)](https://postimg.cc/xXFj8KDY)
