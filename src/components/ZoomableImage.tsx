import Image from "next/image";
import { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const SingleImageViewer: React.FC<{ src: string; url: string; alt: string }> = ({ src, url, alt }) => {
    const [isOpen, setIsOpen] = useState(false);
    console.log(url)
    return (
        <div className="flex justify-center items-center">
            {/* Clickable Thumbnail */}
            <Image
                src={src}
                alt={alt}
                className="w-40 h-40 object-cover rounded-lg cursor-pointer hover:opacity-80"
                onClick={() => setIsOpen(true)}
            />

            {/* Lightbox Popup */}
            {isOpen && (
                <Lightbox reactModalStyle={{
                    background: "rgba(0, 0, 0, 0.9)",
                    borderRadius: "8px",
                    padding: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: "hidden",
                    width: "50%",
                    height: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 9999,
                    position: "fixed",
                }}
                    mainSrc={url}
                    onCloseRequest={() => setIsOpen(false)}
                />
            )}
        </div>
    );
};

export default SingleImageViewer;
