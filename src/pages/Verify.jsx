import React, { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";
import { loadModels, getFullFaceDescription } from "../utils/faceUtils";

const Verify = () => {
    const videoRef = useRef(null);
    const [match, setMatch] = useState("");

    useEffect(() => {
        loadModels().then(startVideo);
    }, []);

    const startVideo = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;
    };

    const handleVerify = async () => {
        const result = await getFullFaceDescription(videoRef.current);
        if (!result) return alert("No face detected!");

        const students = JSON.parse(localStorage.getItem("students") || "[]");
        const labeledDescriptors = students.map(
            s => new faceapi.LabeledFaceDescriptors(
                s.name,
                [new Float32Array(s.descriptor)]
            )
        );

        const faceMatcher = new faceapi.FaceMatcher(labeledDescriptors);
        const bestMatch = faceMatcher.findBestMatch(result.descriptor);
        setMatch(bestMatch.toString());
    };

    return (
        <div>
            <h2>Verify Attendance</h2>
            <video ref={videoRef} autoPlay muted width="720" height="560" />
            <button onClick={handleVerify}>Check Attendance</button>
            {match && <p>Match: {match}</p>}
        </div>
    );
};

export default Verify;
