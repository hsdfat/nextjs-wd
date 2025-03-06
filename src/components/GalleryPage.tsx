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
            src: "images/qr_phat.jpeg",
            alt: "Description of image 1",
            width: 1600,
            height: 900
        },
        {
            src: "images/qr_phat.jpeg",
            alt: "Description of image 2",
            width: 120,
            height: 80
        },
        {
            src: "/images/qr_phat.jpeg",
            alt: "Description of image 3",
            width: 1400,
            height: 1000
        },
        {
            src: "/images/qr_phat.jpeg",
            alt: "Description of image 3",
            width: 140,
            height: 100
        },
        {
            src: "/images/qr_phat.jpeg",
            alt: "Description of image 3",
            width: 1400,
            height: 1000
        },
        {
            src: "/images/qr_phat.jpeg",
            alt: "Description of image 3",
            width: 1400,
            height: 1000
        },
        {
            src: "/images/qr_phat.jpeg",
            alt: "Description of image 3",
            width: 1400,
            height: 1000
        },
        {
            src: "/images/qr_phat.jpeg",
            alt: "Description of image 3",
            width: 1400,
            height: 1000
        },
        {
            src: "/images/qr_phat.jpeg",
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