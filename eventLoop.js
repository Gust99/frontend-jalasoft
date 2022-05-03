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