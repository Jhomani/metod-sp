import React, { useState } from "react";

import { Link } from "react-router-dom";

import { Button, Modal } from 'components';
import { Microphone } from 'icons'

import { recordAudio } from 'utils/global'

import './recorder.scss';

interface InRecorder {
}

export const Recorder = () => {
  const [show, setShow] = useState(false);
  const [recording, setRecording] = useState(false);

  const closeModal = () => setShow(false);

  const handleRecord = async () => {
    const recorder = await recordAudio();
    recorder.start();
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
          type="secondary"
          shape="round"
          className="record-button"
          icon={<Microphone color="black" size="2.8rem" />}
          onClick={handleRecord}
        />

        <span className="g-mt-5">Toca el micrófono para empezar</span>

      </div>
    </Modal>
  </>
}