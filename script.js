const videoElement = document.getElementById('video');
const button = document.getElementById ('button');

// Promt to select media stream, pass to video element, then play

async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {

    }
}

button.addEventListener('click', async () => {
    // Disable Button
    button.disabled = true;
    // Start picture in Picture
    await videoElement.requestPictureInPicture();
    // Reset Button
    button.disabled = false;
})

// On Load
selectMediaStream();