import TextHeader from "./TextHeader";

const EventSection = () => {
  const events = [
    {
      title: "TIỆC CƯỚI NHÀ GÁI",
      date: "16:00 08/03/2025",
      location: "số 3, Đường Ven Sông, ngõ 16, xóm 7, thôn Thái Bạt 2, x. Tòng Bạt, h. Ba Vì, tp. Hà Nội",
      image: "https://cdn.biihappy.com/ziiweb/website/67a2140b4144fa6e570ea7a9/1b87e56f12532a17e1ee5c6b801c56a5.jpeg",
      mapLink: "https://maps.app.goo.gl/AbaSw3E8AyXRg13L6",
    },
    // Add more events here
  ];

  return (
    <section className="py-5 event-section section-bg-affect" id="event" style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    }}>
      <TextHeader content={"Sự kiện"}></TextHeader>
    </section>
  );
};

export default EventSection;