'use client';
import { ImageDown, ImagePlay, MessageSquare } from "lucide-react";
import IconButton from "./Button";
import TextHeader from "./TextHeader";
import StaticButton from "./StaticButton";
import Panel from "./Panel";
import GalleryPage from "./GalleryPage";

const GallerySection = () => {
  const photoGalleries = [
    {
      src: "https://cdn.biihappy.com/ziiweb/website/67a2140b4144fa6e570ea7a9/galleries/67a22248a065ca9e8003001d/large.jpg",
      thumb: "https://cdn.biihappy.com/ziiweb/website/67a2140b4144fa6e570ea7a9/galleries/67a22248a065ca9e8003001d/small.jpg",
    },
    // Add more images here
  ];

  return (
    <section className="py-5 gallery-section section-bg-affect" id="gallery" style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    }}>
      <TextHeader content={"Album Hình Cưới"}></TextHeader>
      <Panel text="Được ai đó yêu sâu sắc sẽ mang lại cho bạn sức mạnh, trong khi yêu ai đó sâu sắc sẽ cho bạn dũng khí."></Panel>
      <GalleryPage></GalleryPage>
      

    </section>
  );
};

export default GallerySection;