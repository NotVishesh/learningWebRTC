
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

