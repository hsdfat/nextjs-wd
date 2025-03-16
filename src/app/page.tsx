import Head from 'next/head';
import Header from '../components/Header';
import Banner from '../components/Banner';
import ButtonSection from '../components/ButtonSection';
import VideoSection from '../components/VideoSection';
import GallerySection from '../components/GallerySection';
import WeddingDate from '../components/WeddingDate';
import Invitation from '../components/Invitation';
import EventSection from '../components/EventSection';
import CoupleSection from '../components/CoupleSection';
import DonateSection from '../components/DonateSection';
import WishesSection from '../components/WishesSection';
import Footer from '../components/Footer';
import '../styles/style.css';
import StaticButton from '@/components/StaticButton';
import { ImagePlay } from 'lucide-react';

const wishId = "123";
const qrId = "456";
const videoId = "789";
export default function Home() {

  return (
    <div className="wrapper">
      <Head>
        <title>Kim Văn Hùng &amp; Kiều Thị Bích Ngọc Wedding site!</title>
        <meta name="description" content="Kim Văn Hùng &amp; Kiều Thị Bích Ngọc - Our wedding date: 2025-03-09" />
        <meta name="keywords" content="Wedding, Wedding website, Website đám cưới, Tạo website đám cưới miễn phí" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="application-name" content="iWedding" />
        <meta name="author" content="Biihappy.com" />
        <meta property="og:site_name" content="Kim Văn Hùng &amp; Kiều Thị Bích Ngọc" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Kim Văn Hùng &amp; Kiều Thị Bích Ngọc Wedding site!" />
        <meta property="og:url" content="https://thiep-cuoi-ngoc-hung.iwedding.info" />
        <meta property="og:description" content="Kim Văn Hùng &amp; Kiều Thị Bích Ngọc - Our wedding date: 2025-03-09" />
        <meta property="og:image" content="https://cdn.biihappy.com/ziiweb/website/67a2140b4144fa6e570ea7a9/eb28842d2011efdd33687f4685a798f9.jpeg" />
      </Head>
      <body data-aos-easing="ease" data-aos-duration="400" data-aos-delay="0" className='body_area'>
        <div className='wrapper'>
          {/* <Header /> */}
          <Banner />
          <ButtonSection wishId={wishId} qrId={qrId} videoId={videoId} />
          <VideoSection />
          <GallerySection />

          <WeddingDate wishId={videoId} />
          <Invitation />
          <EventSection />
          <CoupleSection />

          <WishesSection wishId={wishId} />
          <DonateSection qrId={qrId} />
          <Footer />
        </div>
      </body>

    </div>
  );
}