import { MessageSquare, Mail, DollarSign } from "lucide-react";
import { useEffect, useState } from "react";
const IconButton = ({ icon: Icon, text, onClick, delay, direction }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setIsVisible(true), delay);
        return () => clearTimeout(timeout);
    }, [delay]);
    return (
        <button
            style={{
                margin: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                width: "100%",
                padding: "8px 16px",
                backgroundColor: "#D0B179", // Tailwind `bg-gray-700`
                color: "#FFFFFF", // Tailwind `text-gray-200`
                borderRadius: "16px", // Tailwind `rounded-2xl`
                border: "none",
                cursor: "pointer",
                transition: "transform 0.6s ease-out, opacity 0.6s ease-out",
                opacity: isVisible ? 1 : 0, // Makes it visible
                transform: direction == "bot" ? (isVisible ? "translateY(0)" : "translateY(50px)") :
                    direction == "top" ? (isVisible ? "translateY(0)" : "translateY(-50px)") :
                        direction == "right" ? (isVisible ? "translateX(0)" : "translateX(50px)") :
                            direction == "left" ? (isVisible ? "translateX(0)" : "translateX(-50px)") :
                                (isVisible ? "translateY(0)" : "translateY(-50px)"), // Moves it up
            }}
            onClick={onClick}
        >
            {Icon && <Icon size={18} style={{ color: "#FFFFFF" }} />}
            <span>{text}</span>
        </button>
    );
}

export default IconButton
