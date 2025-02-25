const StaticButton = ({ icon: Icon, text, onClick}) => {

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
            }}
            onClick={onClick}
        >
            {Icon && <Icon size={18} style={{ color: "#FFFFFF" }} />}
            <span>{text}</span>
        </button>
    );
}

export default StaticButton
