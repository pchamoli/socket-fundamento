var socket = io();

        socket.on('connect', function(){
            console.log('conectado')
        })

        socket.on('disconnect', function(){
            console.log('perdimos conexión con el servidor')
        })

        // emit, envia información
        socket.emit('enviarMensaje', {
            usuario: 'Petter',
            mensaje: 'Hola Mundo'
        }, function(resp){
            console.log('Se disparó callback', resp)
        })

        socket.on('enviarMensaje', (mensaje)=>{
            console.log('mensaje', mensaje)
        })