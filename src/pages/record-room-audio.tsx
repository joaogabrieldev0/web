/** biome-ignore-all lint/suspicious/noConsole: false */
import { useRef, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";

const isRecordingSupported =
  !!navigator.mediaDevices &&
  typeof navigator.mediaDevices.getUserMedia === "function" &&
  typeof window.MediaRecorder === "function";

type RoomParams = {
  roomID: string;
};

export function RecordRoomAudio() {
  const params = useParams<RoomParams>();

  const [isRecording, setIsRecording] = useState(false);
  const recorder = useRef<MediaRecorder | null>(null);
  const intervalRef = useRef<NodeJS.Timeout>(null);

  function stopRecording() {
    setIsRecording(false);

    if (recorder.current && recorder.current.state !== "inactive") {
      recorder.current.stop();
    }

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }

  async function uploadAudio(audio: Blob) {
    // Conexão Back e Front
    // application/multipart-formdata
    const formData = new FormData();

    formData.append("file", audio, "audio.webm");

    const response = await fetch(
      `http://localhost:3333/rooms/${params.roomID}/audio`,
      {
        method: "POST",
        body: formData,
      }
    );

    const result = await response.json();

    console.log(result);
  }

  function createRecorder(audio: MediaStream) {
    recorder.current = new MediaRecorder(audio, {
      mimeType: "audio/webm",
      audioBitsPerSecond: 64_000,
    });
  }

  async function startRecording() {
    if (!isRecordingSupported) {
      alert("O seu navegador não suporta gravação");
      return;
    }

    setIsRecording(true);

    const audio = await navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: true,
        noiseSuppression: true,
        sampleRate: 44_100,
      },
    });

    createRecorder(audio);

    recorder.current = new MediaRecorder(audio, {
      mimeType: "audio/webm",
      audioBitsPerSecond: 64_000,
    });

    recorder.current.ondataavailable = (event) => {
      if (event.data.size > 0) {
        uploadAudio(event.data);
      }
    };

    recorder.current.onstart = () => {
      console.log("Gravação Iniciada");
    };

    recorder.current.onstop = () => {
      console.log("Gravação encerrada/pausada");
    };

    recorder.current.start();

    intervalRef.current = setInterval(() => {
      recorder.current?.stop();

      createRecorder(audio);
    }, 5000);
  }

  if (!params.roomID) {
    return <Navigate replace to={"/"} />;
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2.5">
      {isRecording ? (
        <Button onClick={stopRecording}>Pausar Gravação</Button>
      ) : (
        <Button onClick={startRecording}>Gravar Audio</Button>
      )}

      {isRecording ? <p>Gravando...</p> : <p>Pausado</p>}
    </div>
  );
}
