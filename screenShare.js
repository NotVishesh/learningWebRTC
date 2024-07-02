async function screenSharing() {
    try {
        const constraints = {  video: {
            cursor: 'always' | 'motion' | 'never',
            displaySurface: 'application' | 'browser' | 'monitor' | 'window'
        }};
        const stream = await navigator.mediaDevices.getDisplayMedia(constraints);
        const videoElement = document.querySelector('video#localVideo');
        videoElement.srcObject = stream;
    } catch(error) {
        console.error('Error opening video camera.', error);
    }
}
screenSharing();