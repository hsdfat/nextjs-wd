import { Text } from "lucide-react";
import { Open_Sans } from 'next/font/google'
import { Bonheur_Royale } from 'next/font/google'
import TextHeader from "./TextHeader";

const bonheurRoyale = Bonheur_Royale({
  weight: '400',
  subsets: ['latin'],
})
//👇 Configure our font object
const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
})
const VideoSection = () => {
  return (
    <section className="py-5 video-section section-bg-affect" id="video" style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    }}>
      <TextHeader content={"Video cưới"}></TextHeader>
      <p style={{
        alignSelf: 'center',
      }}> Tình yêu không làm cho thế giới quay tròn.</p>
      <iframe
        width="100%"
        src="https://www.youtube.com/embed/o_lN37OAJ9U"
        title="YouTube video player"
        style={{
          maxWidth: '450px',
          minHeight: '315px',
          display: 'block',
          margin: '0 auto',
          padding: '10px',
        }}
      ></iframe>
    </section>
  );
};

export default VideoSection;