
![titular1](https://user-images.githubusercontent.com/25775323/226435020-e0c34728-8cf4-4c90-8bf2-e00bfc4b07da.png)


## Integrantes

Hernán Arroyo https://github.com/nkwaaaa

Mauricio Páez https://github.com/MauricioPaez

Virginia Giardino https://github.com/GiardinoV

Emilia Sartirana https://github.com/EmiliaSart

Olivia Mateo Bustos 

Ana Paula Molina https://github.com/animolina

## Objetivos del Proyecto

El objetivo del proyecto es desarrollar una página web que permita la búsqueda y reserva de **alojamientos** en distintas ciudades, con diversas comodidades a disposición de los huéspedes. El sitio debe cumplir con los siguientes requisitos:
- Estéticamente agradable (UI)
- Fácil de usar (UX)
- Funcional y en cumplimiento con los requisitos del cliente.
- Ejecutado y entregado a tiempo.

## Tecnologías empleadas

![tecnologias](https://user-images.githubusercontent.com/25775323/226435247-4d0141db-763c-4468-a598-9661dd673968.png)
## Gestión del proyecto :white_check_mark:

**1. GitLab** 

Es una suite completa que permite gestionar, administrar, crear y conectar los repositorios con diferentes aplicaciones y hacer todo tipo de integraciones con ellas, ofreciendo un ambiente y una plataforma en cual se puede realizar las varias etapas de su SDLC/ADLC y DevOps.
Mediante la pestaña de **issues**, dónde se puede visualizar el listado de tareas a completar por Sprint, asignamos a los miembros del equipo los objetivos a cumplir y determinamos el tiempo de desarrollo aproximando de los mismos.

**2. Google Drive**

Contamos con una carpeta destinada al proyecto, dividida internamente por sprints, dónde cargamos información pertinente al desarrollo como:

- PDF con la explicación de las entregas por user stories.
- Links de acceso a figma y otros recursos.
- Listado de tareas simplificado.
- Grillas y plantillas a ser utilizadas en testing para los casos de prueba.
- Bitácora.
- Designación de roles.
- Estructura general del proyecto. 

**3. Comunicación**

Los integrantes del equipo contamos con un grupo de WhatsApp donde estamos en contacto permanente para la resolución de dudas o consultas. También nos conectamos por Google Meet fuera de los horarios de cursando en caso de necesitar resolver algo puntual.

## Desarrollo del proyecto :pencil:

**1. IDEs**

**IntelliJ:** Es un entorno de desarrollo integrado para el desarrollo de programas informáticos. Permite trabajar con Java y otros lenguajes JVM como Kotlin, Scala y Groovy en todo tipo de aplicaciones. Posee potentes herramientas integradas, compatibilidad con JavaScript y tecnologías relacionadas, y compatibilidad avanzada con marcos de trabajo populares como Spring, Spring Boot, Jakarta EE, Micronaut, Quarkus y Helidon.

 **2. Editores de texto**

**VsCode:**  Editor de código fuente desarrollado por Microsoft para Windows, Linux, macOS y Web. Incluye soporte para la depuración, control integrado de Git, resaltado de sintaxis, finalización inteligente de código, fragmentos y refactorización de código. También es personalizable, por lo que los usuarios pueden cambiar el tema del editor, los atajos de teclado y las preferencias.

**3. Sistemas de control de versiones**

**Git:**  Es un software de control de versiones diseñado por Linus Torvalds, pensando en la eficiencia, la confiabilidad y compatibilidad del mantenimiento de versiones de aplicaciones cuando estas tienen un gran número de archivos de código fuente. Su propósito es llevar registro de los cambios en archivos de computadora incluyendo coordinar el trabajo que varias personas realizan sobre archivos compartidos en un repositorio de código.


Nuestro proyecto se basa en la estrategia "branch per environment". 
Contamos con una rama principal para el entorno de producción (**main**) y una rama para el entorno de desarrollo (**development**). Utilizamos a su vez ramas por feature, las cuales son nombradas bajo la convención: feature/area-descripción

Por ej:

**feature/backend-SpringSecurity-implementation**

Todos los MR se realizan hacia la rama **development**. Dos integrantes como mínimo del equipo deben aprobar la solicitud, y luego solo un integrante, que cuenta con los permisos necesarios, ejecuta el MR. 

Finalmente al finalizar cada sprint, se realiza un merge de **development** hacia **main**.

**4. Simulación / Virtualización**

## Tecnologías utilizadas para el desarrollo del sitio :wrench:

### Frontend

**1.ReactJs** 

Biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página.

**2.Vite** 

Se define como una herramienta de frontend que te ayudará a crear tus proyectos de forma agnóstica (sin atarte a ningún framework concreto) y que su desarrollo y construcción final sea lo más sencilla y cómoda posible. Está desarrollada por Evan You, el creador de Vue. 
Actualmente, Vite soporta la creación tanto de proyectos vanilla (sin utilizar frameworks), como proyectos utilizando Vue, React, Preact, Svelte o Lit (tanto usando Javascript como Typescript).
A diferencia de CRA (Create React App) Vite no necesita agrupar la aplicación completa o transpilar los módulos y el código antes de iniciar un servidor de desarrollo; la transpilación se realiza bajo demanda, por lo que es significativamente más rápido. Vite se basa en esbuild, un paquete de JavaScript escrito en Go, que agrupa las dependencias de 10 a 100 veces más rápido que los paquetes basados ​​en JavaScript.

**3.CSS Modules**

Un módulo CSS es un archivo CSS en el que todos los nombres de clases y animaciones tienen un alcance local predeterminado. Los módulos CSS  permiten escribir estilos en archivos CSS pero consumirlos como objetos JavaScript para un procesamiento y seguridad adicionales.

### Backend

**1.Maven**

Maven es una herramienta de software para la gestión y construcción de proyectos Java. Maven utiliza un Project Object Model (POM) para describir el proyecto de software a construir, sus dependencias de otros módulos y componentes externos, y el orden de construcción de los elementos.

**2.Spring**

- **Spring Platform:** Es un conjunto de proyectos open source desarrollados en Java con el objetivo de agilizar el desarrollo de aplicaciones. Cuenta con gran variedad de herramientas que nos facilitan el trabajo desde el acceso a datos, infraestructura, creación de aplicaciones web, microservicios, etc.
- **Spring framework:** Framework para el desarrollo de aplicaciones y contenedor de inversión de control. A su vez, puede ser usado en cualquier aplicación desarrollada en Java.

- **Spring boot:** Es una extensión de Spring framework que permite la creación fácil y rápida de aplicaciones web listas para producción con el concepto de just run (solo ejecutar). Requiere una mínima configuración y se complementa con muchos proyectos de Spring Platform y librerías de terceros.

- **Spring data:** La misión de Spring Data es proporcionar un modelo de programación familiar y coherente basado en Spring para el acceso a los datos y, al mismo tiempo, conservar las características especiales del almacenamiento de datos subyacente. Facilita el uso de tecnologías de acceso a datos, bases de datos relacionales y no relacionales, marcos de reducción de mapas y servicios de datos basados ​​en la nube. Cuenta entre otros con un módulo llamado **Spring Data JPA**, destinado a facilitar la implementación de repositorios basados ​​en JPA.

- **Spring Security:** es un marco de autenticación y control de acceso potente y altamente personalizable. Es el estándar para proteger las aplicaciones basadas en Spring. Spring Security es un marco que se enfoca en proporcionar autenticación y autorización a las aplicaciones Java. 

**3.Swagger**

Swagger es un conjunto de herramientas de software de código abierto para diseñar, construir, documentar, y utilizar servicios web RESTful. Cuando hablamos de Swagger nos referimos a una serie de reglas, especificaciones y herramientas que nos ayudan a documentar nuestras APIs.

**4.Io.JWT**

JSON web tokens son un método RFC 7519 estándar de la industria para representar claims de forma segura entre dos partes. JWT.IO le permite decodificar, verificar y generar JWT.

**5.Hibernate**

Hibernate es un framework ORM que ayuda a lograr la persistencia de datos. Específicamente, se ocupa de la persistencia de datos en lo que respecta a las bases de datos relacionales (RDBMS). Hibernate mapea las clases Java en tablas de BD y provee mecanismos para consultar datos. El mapeo lo hace a través de una configuración .xml o de anotaciones.

**6.Log4j**

Log4j es una biblioteca de código abierto desarrollada en Java, que permite a los desarrolladores de software escribir mensajes de registro, cuyo propósito es dejar constancia de una determinada transacción en tiempo de ejecución.

### Base de datos

**1.Draw.Io**

Es un software de dibujo gráfico multiplataforma gratuito y de código abierto desarrollado en HTML5 y JavaScript. Su interfaz se puede utilizar para crear diagramas como diagramas de flujo, estructuras alámbricas, diagramas UML, organigramas y diagramas de red. Utilizado para delinear inicialmente el diagrama inicial de la base de datos.

**2.MySql Workbench**

Es una herramienta visual de diseño de bases de datos que integra desarrollo de software, administración de bases de datos, diseño de bases de datos, gestión y mantenimiento para el sistema de base de datos MySQL.

**3.DBeaver**

Es una aplicación de software cliente de SQL y una herramienta de administración de bases de datos. Para las bases de datos relacionales, utiliza la interfaz de programación de aplicaciones JDBC para interactuar con las bases de datos a través de un controlador JDBC.


### Infraestructura

**1.AWS CDK**

El AWS Cloud Development Kit (AWS CDK) es un framework de código abierto para definir infraestructura en la nube con lenguajes de programación familiares y, aprovisionarla a través de AWS CloudFormation. El AWS CDK consta de tres componentes principales:

- Un framework básico para modelar componentes de infraestructura re-utilizables.
- Una interfaz de linea de comandos (CLI) para desplegar aplicaciones CDK.
- La AWS Construct Library, es un conjunto de componentes de alto nivel que abstraen los recursos de la nube y los encapsulan.

El AWS CDK facilita la implementación de una aplicación en la nube de AWS desde la estación de trabajo simplemente ejecutando cdk deploy.


**2.AWS**

Amazon Web Services es una colección de servicios de computación en la nube pública que en conjunto forman una plataforma de computación en la nube, ofrecidas a través de Internet por Amazon.com. 

- **EC2:** Amazon Elastic Compute Cloud (Amazon EC2) permite a los usuarios alquilar computadores virtuales en los cuales pueden ejecutar sus propias aplicaciones. Este tipo de servicio supone un cambio en el modelo informático al proporcionar capacidad informática con tamaño modificable en la nube, pagando por la capacidad utilizada. En lugar de comprar o alquilar un determinado procesador para utilizarlo varios meses o años, en EC2 se alquila la capacidad por horas.

- ***RDS***: El Servicio de Bases de Datos Relacionales de Amazon es un servicio web que se ejecuta "en la nube" diseñado para simplificar la configuración, el funcionamiento y el escalado de una base de datos relacional para su uso en aplicaciones.

- ***S3***: Amazon S3 o Amazon Simple Storage Service es un servicio ofrecido por Amazon Web Services (AWS) que proporciona almacenamiento de objetos a través de una interfaz de servicio web. Puede almacenar cualquier tipo de objeto, lo que permite usos como almacenamiento para aplicaciones de Internet, copias de seguridad, recuperación ante desastres, archivos de datos, y almacenamiento en la nube híbrida.

- **SecretsManager**: Permite alternar, administrar y recuperar credenciales de bases de datos, claves de API y otros datos confidenciales durante su ciclo de vida. Ayuda a administrar el acceso a las aplicaciones, los servicios y los recursos de TI.

- **CloudFormation**: AWS CloudFormation es un servicio que ayuda a modelar y configurar recursos de AWS.  Se puede crear una plantilla que describa todos los recursos de AWS que  se desean (como instancias Amazon EC2 o instancias de base de datos de Amazon RDS) y CloudFormation se encargará del aprovisionamiento y la configuración de dichos recursos.

- **CloudFront**: Es un servicio de red de entrega de contenido (CDN) creado para ofrecer un alto rendimiento, seguridad y comodidad para los desarrolladores. Ofrece niveles optimizados de latencia y rendimiento, por lo que podemos enviar contenido a través de las redes más veloces disponibles y, de esta manera, proveer a nuestros clientes la mejor experiencia posible cuando utilizan nuestros servicios.

### Testing

**1.Selenium IDE**

(Integrated Development Environment - Entorno de Desarrollo Integrado): este componente es una herramienta de automatización que nos permite grabar, editar y depurar pruebas, sin la necesidad del uso de un lenguaje de programación. También se lo conoce como Selenium Recorder.


**2.Postman Test**

Postman Tests permite asegurarnos de que un API funciona como se esperaba. Nos permite establecer que las integraciones entre los servicios funcionen de manera confiable y verificar que los nuevos desarrollos no hayan roto ninguna funcionalidad existente. Nos ayuda a verificar resultados, como el estado exitoso o fallido, la comparación de los resultados esperados, etc.
Esta herramienta nos brinda un conjunto de fragmentos de código javascript con algunas pruebas por defecto, pero también somos libres de escribir nuestras propias pruebas utilizando javascript.

**3.Excel**

Empleado para la elaboración y llenado de planillas de casos de prueba y reportes de defecto. (Testing Manual)

**4.Vitest**

Vitest es un marco de unit testing ultrarrápido impulsado por Vite. Un test unitario o unit test es una forma efectiva de comprobar el correcto funcionamiento de las unidades individuales más pequeñas de los programas informáticos.
