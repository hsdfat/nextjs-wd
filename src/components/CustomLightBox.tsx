import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

// Optional plugins
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import StaticButton from './StaticButton';
import { ImagePlay } from 'lucide-react';

// Define types for the component props
interface ImageType {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
}

interface FeaturedLightboxGalleryProps {
    images: ImageType[];
    width?: string | number;
    height?: number;
    gap?: number;
    thumbnailHeight?: number;
    maxImages?: number;
    buttonText?: string;
}

const FeaturedLightboxGallery: React.FC<FeaturedLightboxGalleryProps> = ({
    images,
    width = "100%",
    height = 500,
    gap = 8,
    thumbnailHeight = 80,
    maxImages = 5, // Default to showing 5 images (1 featured + 4 small)
    buttonText = "View All Images"
}) => {
    const [index, setIndex] = useState<number>(-1);

    // Calculate how many images to show
    const visibleImages = images.slice(0, Math.min(maxImages, images.length));
    const showMoreIndicator = images.length > maxImages;

    // Container style
    const containerStyle: React.CSSProperties = {
        width,
        display: 'flex',
        flexDirection: 'column',
        gap: `${gap}px`,
    };

    // Grid style for images
    const gridStyle: React.CSSProperties = {
        width: '100%',
        height,
        display: 'grid',
        gap: `${gap}px`,
        gridTemplateAreas:
            visibleImages.length <= 1 ?
                '"featured"' :
                visibleImages.length === 2 ?
                    '"featured small1"' :
                    visibleImages.length === 3 ?
                        '"featured small1" "featured small2"' :
                        visibleImages.length === 4 ?
                            '"featured small1 small2" "featured small3 small4"' :
                            '"featured small1 small2" "featured small3 small4"',
        gridTemplateColumns:
            visibleImages.length <= 1 ?
                '1fr' :
                visibleImages.length === 2 ?
                    '2fr 1fr' :
                    visibleImages.length >= 3 ?
                        '2fr 1fr 1fr' : '1fr',
        gridTemplateRows:
            visibleImages.length <= 1 || visibleImages.length === 2 ?
                '1fr' :
                visibleImages.length >= 3 ?
                    '1fr 1fr' : '1fr'
    };

    // Base style for image containers
    const imageContainerBaseStyle: React.CSSProperties = {
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '4px',
        cursor: 'pointer',
    };

    // Specifically for the featured image
    const featuredImageStyle: React.CSSProperties = {
        ...imageContainerBaseStyle,
        gridArea: 'featured',
    };

    // Function to determine grid area for small images
    const getSmallImageGridArea = (idx: number): string => {
        if (idx === 0) return 'featured';
        return `small${idx}`;
    };

    // Image style (inner content)
    const imageStyle: React.CSSProperties = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform 0.3s ease',
    };

    // Style for the "..." indicator
    const moreIndicatorStyle: React.CSSProperties = {
        ...imageContainerBaseStyle,
        gridArea: `small${Math.min(maxImages, 5)}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        color: 'white',
        fontSize: '24px',
        fontWeight: 'bold',
    };

    // Button style
    const buttonStyle: React.CSSProperties = {
        padding: '10px 20px',
        backgroundColor: '#D4B78F', // Golden color similar to the reference
        color: '#333',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        margin: '10px auto',
        width: 'fit-content',
        maxWidth: '200px',
    };

    return (
        <div style={containerStyle}>
            <div style={gridStyle}>
                {visibleImages.map((image, idx) => (
                    <div
                        key={idx}
                        style={
                            idx === 0
                                ? featuredImageStyle
                                : { ...imageContainerBaseStyle, gridArea: getSmallImageGridArea(idx) }
                        }
                        onClick={() => setIndex(idx)}
                    >
                        <img
                            src={image.src}
                            alt={image.alt || `Image ${idx + 1}`}
                            style={imageStyle}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'scale(1.05)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                            }}
                        />
                    </div>
                ))}

                {showMoreIndicator && (
                    <div
                        style={moreIndicatorStyle}
                        onClick={() => setIndex(maxImages - 1)}
                    >
                        +{images.length - maxImages + 1}
                    </div>
                )}
            </div>

            {/* View All Images Button */}
            <div className="text-center" data-aos="fade-up" style={{ justifyItems: "center" }}>
                <div style={{ width: "50%", alignItems: "center" }}>
                    <StaticButton icon={ImagePlay} text={buttonText} onClick={() => setIndex(0)} />
                </div>
            </div>

            <Lightbox
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                slides={images} // Use all images in the lightbox
                plugins={[Thumbnails, Zoom]}
                thumbnails={{
                    height: thumbnailHeight,
                    width: thumbnailHeight,
                    border: 2,
                    borderRadius: 4,
                    padding: 4
                }}
                zoom={{
                    maxZoomPixelRatio: 3,
                    zoomInMultiplier: 2
                }}
            />
        </div>
    );
};

export default FeaturedLightboxGallery;