# AWS CDK - Proyecto Integrador

Esta app de CDK escrita en Typescript contiene toda el código necesario
para provisionar la infraestructura para el API en Spring Boot y la web
app en React.

## Servicios/Stacks

- `VPC`             crea una VPC a ser usada por otros servicios
- `API Server`      crea una instancia de EC2 con la configuración de red necesaria para interactuar con RDS
- `Database`        crea una instancia de RDS y almacena las credenciales en SecretsManager
- `Web Hosting`     crea un bucket privado de S3 para la aplicación de React y una distribución de Cloudfront
- `Assets`          crea un bucket de S3 para almacenar imágenes y lo pone en una distribución de Cloudfront

## URLs importantes
- `Web App`         https://d209by8b725mia.cloudfront.net
- `Assets Bucket`   https://d28crswe7tp8oj.cloudfront.net