
// pages/AttendanceLog.js
import React, { useEffect, useState } from "react";

const AttendanceLog = () => {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("attendance") || "[]");
        setRecords(data);
    }, []);

    return (
        <div>
            <h2>Attendance Records</h2>
            {records.length === 0 ? (
                <p>No attendance recorded yet.</p>
            ) : (
                <table border="1" cellPadding="10" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.map((rec, idx) => (
                            <tr key={idx}>
                                <td>{rec.name}</td>
                                <td>{rec.time}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default AttendanceLog;
