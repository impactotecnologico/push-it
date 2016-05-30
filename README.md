# Push demo de Impacto Tecnologico

## Pre-requisitos

+ Tener cuenta google
+ Crear un proyecto en la google console: https://developers.google.com/identity/sign-in/web/devconsole-project
+ Crear credenciales en la google console
+ Guardar Project Number que será el SenderId
+ Guardar el Server Api de las credenciales

### Credenciales necesarias

Google SenderId = usado en la app movil y obtenido en el api console de google
Server API = usada en el servidor para envio de notificacion al movil obtenido en el api console de google

### Componentes de Plataforma

Deben ejecutarse estos comandos para cargar los plugins necesarios y poder generar los binarios de la app

+ `cordova platform update ios@4.0.0`
+ `cordova plugin add phonegap-plugin-push --variable SENDER_ID="USAR UN SENDERID VALIDO"`
+ `cordova plugin add cordova-plugin-device`

### Documentación del plugin

[Documentacion Principal](https://github.com/phonegap/phonegap-plugin-push/tree/master/docs)

[Documentacion de formato](https://github.com/phonegap/phonegap-plugin-push/blob/master/docs/PAYLOAD.md)

### Detalles del ejemplo:

#### App Móvil

##### Android

Está finalizada la configuración básica incluyendo: modo inbox y procesamiento para botones de acción

Usa configuración modo inbox para recibir notificaciones, de esta forma se mejora la presentación. 

También tiene configuradas dos funciones callbacks para que sean invocadas por botones de accion en la petición push

###### Construcción y Pruebas

De forma estandar con comandos de ionic según sea el caso: 
+ `ionic build android`
+ `ionic emulate android` 
+ `ionic run android`

##### iOS

Está finalizada la configuración base para recibir notificaciones simples pero no está configurado el procesamiento de los botones de acción

#### Postman test

Se incluye un test básico de postman para enviar notificaciones push al dispositivo. Archivo: `GCM-TEST.postman_collection.json`

Deben configurarse:

+ Header: Authorization
+ Body parameter: registration_id

