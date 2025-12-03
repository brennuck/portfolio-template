import { useState, useEffect } from "react";
import "./DotClock.css";

// 3x5 dot matrix patterns for digits, colon, and letters
const DIGIT_PATTERNS: Record<string, number[][]> = {
    "0": [
        [1, 1, 1],
        [1, 0, 1],
        [1, 0, 1],
        [1, 0, 1],
        [1, 1, 1],
    ],
    "1": [
        [0, 1, 0],
        [1, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
        [1, 1, 1],
    ],
    "2": [
        [1, 1, 1],
        [0, 0, 1],
        [1, 1, 1],
        [1, 0, 0],
        [1, 1, 1],
    ],
    "3": [
        [1, 1, 1],
        [0, 0, 1],
        [1, 1, 1],
        [0, 0, 1],
        [1, 1, 1],
    ],
    "4": [
        [1, 0, 1],
        [1, 0, 1],
        [1, 1, 1],
        [0, 0, 1],
        [0, 0, 1],
    ],
    "5": [
        [1, 1, 1],
        [1, 0, 0],
        [1, 1, 1],
        [0, 0, 1],
        [1, 1, 1],
    ],
    "6": [
        [1, 1, 1],
        [1, 0, 0],
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
    ],
    "7": [
        [1, 1, 1],
        [0, 0, 1],
        [0, 0, 1],
        [0, 0, 1],
        [0, 0, 1],
    ],
    "8": [
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
    ],
    "9": [
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
        [0, 0, 1],
        [1, 1, 1],
    ],
    ":": [
        [0],
        [1],
        [0],
        [1],
        [0],
    ],
    "A": [
        [0, 1, 0],
        [1, 0, 1],
        [1, 1, 1],
        [1, 0, 1],
        [1, 0, 1],
    ],
    "P": [
        [1, 1, 0],
        [1, 0, 1],
        [1, 1, 0],
        [1, 0, 0],
        [1, 0, 0],
    ],
    "M": [
        [1, 0, 1],
        [1, 1, 1],
        [1, 0, 1],
        [1, 0, 1],
        [1, 0, 1],
    ],
};

const DotClock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formatTime = (date: Date): { timeString: string; period: string } => {
        let hours = date.getHours();
        const period = hours >= 12 ? "PM" : "AM";
        hours = hours % 12;
        hours = hours === 0 ? 12 : hours; // Convert 0 to 12 for 12-hour format
        const hoursStr = hours.toString().padStart(2, "0");
        const minutes = date.getMinutes().toString().padStart(2, "0");
        const seconds = date.getSeconds().toString().padStart(2, "0");
        return {
            timeString: `${hoursStr}:${minutes}:${seconds}`,
            period,
        };
    };

    const { timeString, period } = formatTime(time);

    return (
        <div className="dot-clock" aria-label={`Current time: ${timeString} ${period}`}>
            {timeString.split("").map((char, charIndex) => (
                <div
                    key={charIndex}
                    className={`dot-clock__char ${char === ":" ? "dot-clock__char--colon" : ""}`}
                >
                    {DIGIT_PATTERNS[char]?.map((row, rowIndex) => (
                        <div key={rowIndex} className="dot-clock__row">
                            {row.map((dot, dotIndex) => (
                                <span
                                    key={dotIndex}
                                    className={`dot-clock__dot ${dot ? "dot-clock__dot--active" : ""}`}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            ))}
            <div className="dot-clock__period">
                {period.split("").map((char, charIndex) => (
                    <div key={charIndex} className="dot-clock__char">
                        {DIGIT_PATTERNS[char]?.map((row, rowIndex) => (
                            <div key={rowIndex} className="dot-clock__row">
                                {row.map((dot, dotIndex) => (
                                    <span
                                        key={dotIndex}
                                        className={`dot-clock__dot ${dot ? "dot-clock__dot--active" : ""}`}
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DotClock;
