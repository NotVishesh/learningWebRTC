
# Learning WebRTC 
## Revision Notes

WebRTC (Web Real-Time Communication) is a powerful open-source project that enables real-time communication between web browsers and mobile applications. Here are some key points to remember:

- WebRTC allows for peer-to-peer communication, eliminating the need for plugins or additional software installations.
- It supports audio, video, and data sharing, making it ideal for applications such as video conferencing, live streaming, and file sharing.
- WebRTC uses a combination of JavaScript APIs, HTML5, and WebRTC-specific protocols to establish and maintain connections between peers.
-  For cameras and microphones, we use  <mark>navigator.mediaDevices.getUserMedia()  </mark>to capture MediaStreams
- For screen recording, we use  <mark>navigator.mediaDevices.getDisplayMedia()  </mark>instead




### media devices

- MediaDevices :-  cameras and microphones.
- accessed with JavaScript using navigator.mediaDevices (it is an object)
- **getUserMedia(constraints)** : returns a promise that will resolve to a MediaStream for the matching media devices. constraints can be like {'video':true,'audio':true}

#### Querying media devices

To check if there is certain device available for the cooenction we can use. it returns a promise which consists of array which gives input device info
``` js
navigator.mediaDevices.enumerateDevices()
        .then(devices => {
            const filtered = devices.filter(device => device.kind === type);
            callback(filtered);
        });
```

#### Listening for devices changes 

There might be plugin or plug out of externel webcam then a good code should take in mind that senario. and this can be done by adding a event listen **devicechange** to **navigator.mediaDevices** 

Here is a example code snippit from its docs:-
``` js 
// Updates the select element with the provided set of cameras
function updateCameraList(cameras) {
    const listElement = document.querySelector('select#availableCameras');
    listElement.innerHTML = '';
    cameras.map(camera => {
        const cameraOption = document.createElement('option');
        cameraOption.label = camera.label;
        cameraOption.value = camera.deviceId;
    }).forEach(cameraOption => listElement.add(cameraOption));
}

// Fetch an array of devices of a certain type
async function getConnectedDevices(type) {
    const devices = await navigator.mediaDevices.enumerateDevices();
    return devices.filter(device => device.kind === type)
}

// Get the initial set of cameras connected
const videoCameras = getConnectedDevices('videoinput');
updateCameraList(videoCameras);

// Listen for changes to media devices and update the list accordingly
navigator.mediaDevices.addEventListener('devicechange', event => {
    const newCameraList = getConnectedDevices('video');
    updateCameraList(newCameraList);
});
```
#### Media constraints
- it is a object which is used in the **getUserMedia(constraints)** method
- it should have **MediaStreamConstraints** interface
- it is recommended to check if the device is available or not first . this can be done like :- 
```js 
async function getConnectedDevices(type) {
    const devices = await navigator.mediaDevices.enumerateDevices();
    return devices.filter(device => device.kind === type)
}

// Open camera with at least minWidth and minHeight capabilities
async function openCamera(cameraId, minWidth, minHeight) {
    const constraints = {
        'audio': {'echoCancellation': true},
        'video': {
            'deviceId': cameraId,
            'width': {'min': minWidth},
            'height': {'min': minHeight}
            }
        }

    return await navigator.mediaDevices.getUserMedia(constraints);
}

const cameras = getConnectedDevices('videoinput');
if (cameras && cameras.length > 0) {
    // Open first available video camera with a resolution of 1280x720 pixels
    const stream = openCamera(cameras[0].deviceId, 1280, 720);
}
```

### Media capture and constraints

#### Media devices
