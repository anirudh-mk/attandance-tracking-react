// utils/faceUtils.js
import * as faceapi from "face-api.js";

export const loadModels = async () => {
    const MODEL_URL = "/models";
    await Promise.all([
        faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL),
        faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
        faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL)
    ]);
};

export const getFullFaceDescription = async (video) => {
    return await faceapi
        .detectSingleFace(video, new faceapi.SsdMobilenetv1Options())
        .withFaceLandmarks()
        .withFaceDescriptor();
};