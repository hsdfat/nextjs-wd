'use client';
import IconButton from "./Button";
import { MessageSquare, Mail, DollarSign } from "lucide-react";
const ButtonSection = ({ videoId, qrId, wishId }) => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="button-section">
      <div style={{
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#fff',
        width: '100%',
        padding: 3,
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
      }}>
        <IconButton icon={MessageSquare} text="Gửi lời chúc" onClick={() => scrollToSection(wishId)} delay={100} />
        <IconButton icon={Mail} text="Xác nhận tham dự" onClick={() => scrollToSection(videoId)} delay={100} />
        <IconButton icon={DollarSign} text="Mừng cưới" onClick={() => scrollToSection(qrId)} delay={100} />
      </div>
    </section >
  );
};

export default ButtonSection;