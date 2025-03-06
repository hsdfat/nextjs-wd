'use client';
import Panel from "./Panel";
import QRCode from "./QRCode";
import TextHeader from "./TextHeader";
import "../app/styles.css";
import React, { useEffect, useState, useRef } from "react";

const DonateSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 } // Trigger when 30% of the component is visible
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <section className={`slicing-container-left ${isVisible ? "sliced" : ""}`} ref={ref} id="donate" style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    }}>
      <TextHeader content={"Mừng cưới"}></TextHeader>
      <Panel text="Thật vui vì được gặp và đón tiếp các bạn trong một dịp đặc biệt như đám cưới của chúng tôi."></Panel>
      <div className="container-fluid" style={{
        padding: '20px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
      }}>
        <QRCode type={"Chú rể"} name={"LE CHI PHAT"} bank={"Vietinbank"} account={"109003117305"} imgSrc={require("../images/qr_phat.jpeg")} url="/qr_phat.jpeg" ></QRCode>
        <QRCode type={"Cô dâu"} name={"DO THI TU ANH"} bank={"Agribank"} account={"109003117305"} imgSrc={require("../images/qr_phat.jpeg")} url="/qr_phat.jpeg"></QRCode>
      </div>
    </section>
  );
};

export default DonateSection;