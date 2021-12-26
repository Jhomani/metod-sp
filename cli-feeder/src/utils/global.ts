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
import request, { getOptionsWithToken, postOptionsWithoutToken } from './request';
import storage from './Storage';

export const recordAudio = async (cb: (a: string) => void) => {
  const stream = await navigator.mediaDevices.getUserMedia({
    audio: true
  });

  const mediaRecorder = new MediaRecorder(stream);
  const audioChunks: BlobPart[] = [];

  measureFrec(stream, mediaRecorder);

  mediaRecorder.addEventListener("dataavailable", event => {
    audioChunks.push(event.data);
  });

  mediaRecorder.addEventListener("stop", async () => {
    const audioBlob = new Blob(audioChunks);

    const reader = new FileReader();
    reader.readAsDataURL(audioBlob);

    reader.onload = async () => {
      let base64Audio;

      if (typeof reader.result == 'string')
        base64Audio = reader.result.split(',')[1];

      const options = postOptionsWithoutToken({ audio: base64Audio });

      const result = await request(
        'http://localhost:5000/api/saveAudio',
        options
      );

      cb(result.route);
    };

    // const file = new File([audioBlob], "recorded", {
    //   lastModified: Date.now(),
    // });

    // console.log(file);

    // const form = new FormData()
    // form.append('audio', file);

    // await fetch('http://localhost:5000/api/saveAudio', {
    //   method: 'POST',
    //   body: form,
    // })

    // const play = () => audio.play();
    // play()

    // resolve({ audioBlob, audioUrl, play });
  });

  mediaRecorder.start();
  // const stop = () => mediaRecorder.stop();
}

function measureFrec(stream: MediaStream, mediaRec: MediaRecorder) {
  let audioCtx = new window.AudioContext();
  let analyser = audioCtx.createAnalyser();
  let intervalId: any = 0;

  let source = audioCtx.createMediaStreamSource(stream);
  source.connect(analyser);

  analyser.fftSize = 32;
  let bufferLength = analyser.frequencyBinCount;
  let dataArray = new Uint8Array(bufferLength);

  const history: number[] = [];
  storage.spoken = false;
  let pointer = 0;

  const intervalFrecuacy = () => {
    analyser.getByteFrequencyData(dataArray);

    let sum = 0
    for (let i = 0; i < dataArray.length; i++)
      sum += dataArray[i];
    sum = Math.floor(sum / 100);

    if (pointer == 15) pointer = 0
    history[pointer] = sum;
    pointer++;

    if (weHaveToClose(history)) {
      mediaRec.stop();

      const tracking = stream.getTracks();
      tracking[0].stop()
      audioCtx.close();

      clearInterval(intervalId);
      console.log('stored migrafore')
    }
  }

  intervalId = setInterval(intervalFrecuacy, 100)
}

function weHaveToClose(history: number[]) {
  let slowBits = 0;
  let numHightBits = 0;
  let res = false;

  for (let byte of history) {
    if (byte <= 10) slowBits++;
    if (byte >= 15) numHightBits++;
  }

  if (slowBits == 0)
    storage.spoken = true;

  if (storage.spoken && slowBits == 2 && numHightBits > 1)
    res = true;

  return res;
}