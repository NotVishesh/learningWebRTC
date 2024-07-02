// const openMediaDevices = async (constraints) => {
//     return await navigator.mediaDevices.getUserMedia(constraints);
// }

// try {
//     const stream = openMediaDevices({'video':true,'audio':true});
//     console.log('Got MediaStream:', stream);
// } catch(error) {
//     console.error('Error accessing media devices.', error);
// }




// for listing down the list of media device 


// async function getConnectedDevices(type) {
//     const devices = await navigator.mediaDevices.enumerateDevices();
//     return devices
// }

// const videoCameras = getConnectedDevices('videoinput');
// console.log('Cameras found:', videoCameras);





// // Updates the select element wi    th the provided set of cameras
// function updateCameraList(cameras) {
//     const listElement = document.querySelector('select#availableCameras');
//     listElement.innerHTML = '';
//     cameras.map(camera => {
//         const cameraOption = document.createElement('option');
//         cameraOption.label = camera.label;
//         cameraOption.value = camera.deviceId;
//     }).forEach(cameraOption => listElement.add(cameraOption));
// }

// // Fetch an array of devices of a certain type
// async function getConnectedDevices(type) {
//     const devices = await navigator.mediaDevices.enumerateDevices();
//     return devices.filter(device => device.kind === type)
// }

// // Get the initial set of cameras connected
// const videoCameras = getConnectedDevices('videoinput');
// updateCameraList(videoCameras);

// // Listen for changes to media devices and update the list accordingly
// navigator.mediaDevices.addEventListener('devicechange', event => {
//     const newCameraList = getConnectedDevices('video');
//     updateCameraList(newCameraList);
// });






// async function getConnectedDevices(type) {
//     const devices = await navigator.mediaDevices.enumerateDevices();
//     return devices.filter(device => device.kind === type)
// }

// // Open camera with at least minWidth and minHeight capabilities
// async function openCamera(cameraId, minWidth, minHeight) {
//     const constraints = {
//         'audio': {'echoCancellation': true},
//         'video': {
//             'deviceId': cameraId,
//             'width': {'min': minWidth},
//             'height': {'min': minHeight}
//             }
//         }

//     return await navigator.mediaDevices.getUserMedia(constraints);
// }

// const cameras = getConnectedDevices('videoinput');
// if (cameras && cameras.length > 0) {
//     // Open first available video camera with a resolution of 1280x720 pixels
//     const stream = openCamera(cameras[0].deviceId, 1280, 720);
// }



async function playVideoFromCamera() {
    try {
        const constraints = {'video': true, 'audio': false};
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        const videoElement = document.querySelector('video#localVideo');
        videoElement.srcObject = stream;
    } catch(error) {
        console.error('Error opening video camera.', error);
    }
}

// async function startCamera() {
//     try {
//         const constraints = {
//             video: true
//         };
//         const stream = await navigator.mediaDevices.getUserMedia(constraints);
//         const videoElement = document.getElementById('livePreview');
//         videoElement.srcObject = stream;
//     } catch (error) {
//         console.error('Error accessing the camera: ', error);
//     }
// }

playVideoFromCamera()
