import React, { useEffect, useState } from "react";

import { Button, Modal } from 'components';
import { Microphone } from 'icons'

import { recordAudio } from 'utils/global'
import { useNavigate } from "react-router-dom";

import './recorder.scss';

let saw = false;

export const Recorder = () => {
  const [show, setShow] = useState(false);
  const [recording, setRecording] = useState(false);
  const navigateTo = useNavigate();

  const closeModal = () => setShow(false);

  const startRecord = async () => {

    setRecording(true);
    await recordAudio(afterRecorded);
  }
  useEffect(() => {
    if (show && !saw) {
      const audio = new Audio(
        'http://localhost:5000/static/audios/welcome.mp3'
      );
      audio.play();

      saw = true;
    }
  }, [show])

  const afterRecorded = (path: string) => {
    console.log('extecuid')
    if (path) {
      navigateTo(path);
      setShow(false)
    }

    setRecording(false);
  }

  return <>
    <Button
      type="primary"
      shape="round"
      className="fixed-bottom"
      icon={<Microphone size="1.8rem" />}
      onClick={() => setShow(true)}
    />


    <Modal onClose={closeModal} show={show}>
      <div className="recording-seccion">
        <Button
          type={recording ? "primary" : "secondary"}
          shape="round"
          className="record-button"
          icon={<Microphone color={recording ? "white" : "black"} size="2.8rem" />}
          onClick={startRecord}
        />

        <span className="g-mt-5">
          {recording ? 'Hablando...' : 'Toca el micrófono para empezar'}

        </span>
      </div>
    </Modal>
  </>
}