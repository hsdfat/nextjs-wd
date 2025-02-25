import Calendar from "./Calendar";

const WeddingDate = ({ wishId }) => {
  return (
    <section id={wishId} className="py-5 section-sub-title weddingdate-section section-bg-affect" style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    }}>
      {/* <Calendar></Calendar> */}
      <div className="countdown" data-aos="fade-up-left">
        <div className="m-auto" id="clock" data-date="2025-03-09" data-text-day="Ngày" data-text-hour="Giờ" data-text-minute="Phút" data-text-second="Giây"></div>
      </div>
    </section>
  );
};

export default WeddingDate;