// pages/gallery.tsx
import React from 'react';
import LightboxGallery from './CustomLightBox';
import { NextPage } from 'next';
import FeaturedLightboxGallery from './CustomLightBox';

interface GalleryImage {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
}

const GalleryPage: NextPage = () => {
    // Sample image data
    const galleryImages: GalleryImage[] = [
        {
            src: "images/image1.jpg",
            alt: "Description of image 1",
            width: 1600,
            height: 900
        },
        {
            src: "images/image2.jpg",
            alt: "Description of image 2",
            width: 1200,
            height: 800
        },
        {
            src: "/images/image3.jpg",
            alt: "Description of image 3",
            width: 1400,
            height: 1000
        },
        {
            src: "/images/image4.jpg",
            alt: "Description of image 3",
            width: 140,
            height: 100
        },
        {
            src: "/images/image5.jpg",
            alt: "Description of image 3",
            width: 1400,
            height: 1000
        },
        {
            src: "/images/image6.webp",
            alt: "Description of image 3",
            width: 1400,
            height: 1000
        },
        {
            src: "/images/image1.jpg",
            alt: "Description of image 3",
            width: 1400,
            height: 1000
        },
        {
            src: "/images/image8.webp",
            alt: "Description of image 3",
            width: 1400,
            height: 1000
        },
        {
            src: "/images/image7.webp",
            alt: "Description of image 3",
            width: 1400,
            height: 1000
        },
        // Add more images as needed
    ];

    return (
        <FeaturedLightboxGallery
            images={galleryImages}
            width="80%"
            height={600}
            gap={10}
            maxImages={4} // Show 5 images (1 featured + 4 small)
            buttonText="Tất cả ảnh" // Customize button text (e.g., Vietnamese "All Images")
        />
    );
}

export default GalleryPage;