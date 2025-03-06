import { useState, useEffect } from "react";

const CountdownTimer: React.FC<{ targetDate: Date }> = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const difference = targetDate.getTime() - new Date().getTime();
        if (difference > 0) {
            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / (1000 * 60)) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        } else {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <div className="countdown">
            <div>
                <span>{String(timeLeft.days).padStart(2, "0")}</span>
                <span>Ngày</span>
            </div>
            <div>
                <span>{String(timeLeft.hours).padStart(2, "0")}</span>
                <span>Giờ</span>
            </div>
            <div>
                <span>{String(timeLeft.minutes).padStart(2, "0")}</span>
                <span>Phút</span>
            </div>
            <div>
                <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
                <span>Giây</span>
            </div>
        </div>
    );
};

export default CountdownTimer;

