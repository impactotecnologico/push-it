// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

    const ANDROID = "Android";
    const IOS = "iOS";
    var plataforma = device.platform;

    var push = PushNotification.init({
        android: {
            senderID: "583938065086"
        },
        ios: {
            alert: "true",
            badge: "true",
            sound: "true"
        },
        windows: {}
    }); // TODO: pendiente por configurar opciones de botones de accion para iOS

    push.on('registration', function(data) {
        console.log(JSON.stringify(data));
        document.getElementById('texto').value = data.registrationId;
    });

    push.on('notification', function(data) {

        if (plataforma == IOS) {
          // llamada obligatoria para IOS
          push.finish(function() {
            console.log("Finalizacion de procesamiento de notificaciones");
          });
        } else if (plataforma == ANDROID) {
          // llamada de validacion para callbacks 
          if(undefined != data.additionalData.callback && 'function' == typeof window[data.additionalData.callback])
          {
            window.data.additionalData.callback;
          }
        } else {
          console.log("Plataforma no soportada: " + plataforma);
        }
    });

    window.accion1_callback = function(data)
    {
      alert("Accion 1 en funcion callback, con data:" + JSON.stringify(data));
    };

    window.accion2_callback = function(data)
    {
      alert("Accion 2 en callback, con data:" + JSON.stringify(data));
    };

    push.on('error', function(e) {
        document.getElementById('texto').value = e;
        console.log(e);
    });



  });
})
