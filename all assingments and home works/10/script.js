// JavaScript to control video stream
const videoElement = document.getElementById('video');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
let mediaStream = null;

startButton.addEventListener('click', async () => {
    try {
        // Request video and audio from user
        mediaStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        videoElement.srcObject = mediaStream;
    } catch (error) {
        console.error('Error accessing media devices:', error);
    }
});

stopButton.addEventListener('click', () => {
    if (mediaStream) {
        // Stop all tracks to stop video and audio
        mediaStream.getTracks().forEach(track => track.stop());
        videoElement.srcObject = null;
    }
});