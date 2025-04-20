import React, { useEffect, useRef, useState } from "react";
import { loadModels, getFullFaceDescription } from "../utils/faceUtils";

const Register = () => {
    const videoRef = useRef(null);
    const [name, setName] = useState("");
    const [registered, setRegistered] = useState(false);

    useEffect(() => {
        loadModels().then(startVideo);
    }, []);

    const startVideo = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;
    };

    const handleRegister = async () => {
        const result = await getFullFaceDescription(videoRef.current);
        if (result && result.descriptor) {
            const student = {
                name,
                descriptor: Array.from(result.descriptor)
            };
            const data = JSON.parse(localStorage.getItem("students") || "[]");
            localStorage.setItem("students", JSON.stringify([...data, student]));
            setRegistered(true);
        }
    };

    return (
        <div>
            <h2>Register Student</h2>
            <video ref={videoRef} autoPlay muted width="720" height="560" />
            <input
                type="text"
                placeholder="Enter student name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={handleRegister}>Register</button>
            {registered && <p>Student registered successfully!</p>}
        </div>
    );
};

export default Register;
