const socket = new WebSocket("wss://websocketserv-hcod.vercel.app/");
        const videoPlayer = document.getElementById('videoPlayer');

        // Handle connection to WebSocket server
        socket.addEventListener('open', (event) => {
            console.log('Connected to WebSocket server');
        });

        // When receiving a message from the WebSocket server
        socket.addEventListener('message', (event) => {
            const data = JSON.parse(event.data);
            console.log('Received data from server:', data);

            if (data.type === 'play') {
                videoPlayer.currentTime = data.time;
                videoPlayer.play();
            }

            if (data.type === 'pause') {
                videoPlayer.pause();
            }

            if (data.type === 'seek') {
                videoPlayer.currentTime = data.time;
            }
        });

        // Send play event to WebSocket server
        videoPlayer.addEventListener('play', () => {
            const message = JSON.stringify({
                type: 'play',
                time: videoPlayer.currentTime
            });
            socket.send(message);
        });

        // Send pause event to WebSocket server
        videoPlayer.addEventListener('pause', () => {
            const message = JSON.stringify({
                type: 'pause',
                time: videoPlayer.currentTime
            });
            socket.send(message);
        });

        // Send seek event to WebSocket server
        videoPlayer.addEventListener('seeked', () => {
            const message = JSON.stringify({
                type: 'seek',
                time: videoPlayer.currentTime
            });
            socket.send(message);
        });
