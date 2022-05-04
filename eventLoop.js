/*
    1. El log 1 pasa a la call stack y luego sale
    2. El setTimeout 1 pasa a la call stack, sale de la call stack, se llama a la web api del navegador 
       y luego la callback cb pasa a la callback queue
    3. El log 2 pasa a la call stack y luego sale
    4. El setTimeout 2 pasa a la call stack, sale de la call stack, se llama a la web api del navegador
       y luego la callback cb1 pasa a la callback queue
    5. El log 3 pasa a la call stack y luego sale
    5.5 El event loop verifica que la call stack esta vacia y luego pasa a revisar la callback queue
    6. La callback cb pasa de la callback queue a la call stack y luego sale (accion del event loop)
    7. Lacallback cb1 pasa de la callback queue a la call stack y luego sale (accion del event loop)

    Resultado
    ---------
    This is the start
    This is just a message
    This is the end       
    From call back        
    This is a msg

    https://www.jsv9000.app/?code=ZnVuY3Rpb24gdW5vKCkgew0KICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gc2hvdzEoKSB7IGNvbnNvbGUubG9nKDEpIH0pOw0KfQ0KZnVuY3Rpb24gZG9zKCkgew0KICAgIGNvbnNvbGUubG9nKDIpOw0KfQ0KZnVuY3Rpb24gdHJlcygpIHsNCiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uIHNob3c3KCkgeyBjb25zb2xlLmxvZyg3KSB9KTsNCn0NCmZ1bmN0aW9uIGN1YXRybygpIHsNCiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uIHNldHRpbWUoKSB7IHNldFRpbWVvdXQoZnVuY3Rpb24gc2hvdzRUaW1lKCkgeyBjb25zb2xlLmxvZyg0KSB9KSB9KTsNCn0NCmZ1bmN0aW9uIGNpbmNvKCkgew0KICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gc2hvdzUoKXtjb25zb2xlLmxvZyg1KX0pOw0KfQ0KZnVuY3Rpb24gc2VpcygpIHsNCiAgICBjb25zb2xlLmxvZyg2KTsNCn0NCmZ1bmN0aW9uIHNpZXRlKCkgew0KICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gc2hvdzcoKSB7IGNvbnNvbGUubG9nKDcpIH0pOw0KfQ0KDQp1bm8oKTsNCmRvcygpOw0KdHJlcygpOw0KY3VhdHJvKCk7DQpjaW5jbygpOw0Kc2VpcygpOw0Kc2lldGUoKTs%3D
*/

(function() {
    console.log('This is the start');

    setTimeout(function cb() {
        console.log('From call back');
    });
    
    console.log('This is just a message');
    
    setTimeout(function cb1() {
        console.log('This is a msg');
    }, 0);
    
    console.log('This is the end');
})();