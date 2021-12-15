// import {
//   Dimensions,
//   StatusBar,
// } from "react-native";

// calculate device dimentions;
// let {height, width} = Dimensions.get("window");
// export const dimension = {
//   width,
//   header: 50,
//   height: height - (StatusBar.currentHeight ?? 0), 
//   body: function() {
//     return this.height - this.header; 
//   },
// }

export const recordAudio = (): any => {
  return new Promise(async resolve => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

    const mediaRecorder = new MediaRecorder(stream);
    const audioChunks: BlobPart[] = [];


    mediaRecorder.addEventListener("dataavailable", event => {
      audioChunks.push(event.data);
      console.log(event.data.size)
      // mediaRecorder.vi
    });


    const timeid = setInterval(() => {
      mediaRecorder.requestData()
    }, 500)

    const start = () => mediaRecorder.start();


    const stop = () => {
      clearInterval(timeid)

      return new Promise(resolve => {
        mediaRecorder.addEventListener("stop", () => {
          const audioBlob = new Blob(audioChunks);
          const audioUrl = URL.createObjectURL(audioBlob);
          const audio = new Audio(audioUrl);
          const play = () => audio.play();
          resolve({ audioBlob, audioUrl, play });
        });

        mediaRecorder.stop();
      });
    }

    resolve({ start, stop });
  });
}