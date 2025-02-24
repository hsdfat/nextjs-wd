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
      <section className="py-5 event-section section-bg-affect" id="event">
        <div className="container-fluid">
          <h2 data-aos="fade-up" className="section-title text-center">Sự Kiện Cưới</h2>
          <h3 data-aos="fade-up" className="section-sub-title mb-4 text-center">
            Cảm ơn bạn rất nhiều vì đã gửi những lời chúc mừng tốt đẹp nhất đến đám cưới của chúng tôi!
          </h3>
          {events.map((event, index) => (
            <div key={index} data-aos={index % 2 === 0 ? "flip-right" : "flip-left"} className="event-item d-flex flex-row p-0 border-0 rounded overflow-hidden">
              <div className="image-wrap position-relative" style={{ backgroundImage: `url(${event.image})` }}></div>
              <div className="info-wrap p-3">
                <h5 className="section-sub-title">{event.title}</h5>
                <strong>{event.date}</strong>
                <p className="card-text">
                  <span>Tư Gia Nhà Gái - </span>
                  {event.location}
                </p>
                <a href="#" data-index="1" className="section-sub-title btn btn-sm btn-secondary calendar-button-custom-click">Thêm vào lịch</a>
                <a href={event.mapLink} target="_blank" className="section-sub-title btn btn-sm btn-secondary">Xem bản đồ</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default EventSection;