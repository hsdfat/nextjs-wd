const CoupleSection = () => {
    return (
      <section className="py-5 couple-section section-bg-affect" id="couple">
        <div className="container-fluid">
          <h2 data-aos="fade-up" className="section-title text-center m-0">Cô Dâu &amp; Chú Rể</h2>
          <div className="section-title wrap-people mt-5">
            <div className="member member-groom mb-5">
              <div data-aos="flip-left" className="member-image animation mb-3 text-center">
                <img src="https://cdn.biihappy.com/ziiweb/website/67a2140b4144fa6e570ea7a9/e97c84b6cd223757f4cbf7c88fa01c5e.jpeg" alt="Groom" />
              </div>
              <div className="parent d-flex flex-column mx-auto text-center my-2">
                <div className="parent-name">Con ông: <span>Kim Văn Trà</span></div>
                <div className="parent-name">Con bà: <span>Đinh Thị Hương (Chuyên)</span></div>
              </div>
              <div className="groom-story d-flex flex-column">
                <p className="text-story fs-6 text-center m-0">
                  Là một kỹ sư phần mềm hiện đang công tác tại FA - Fpt Automotive, công ty thành viên của FSoft tại Quận Cầu Giấy, thành phố Hà Nội. Là một người hòa đồng lạc quan và vui vẻ. Luôn coi trọng tình cảm và hướng về gia đình. Với anh: “Gia đình là điểm tựa vững chắc nhất và là bến đỗ bình yên không đâu sánh bằng đối với mỗi con người. Đó luôn là nơi tràn ngập tình yêu thương để ta trở về.”
                </p>
                <a className="fs-6 fw-bold text-center mb-2 text-decoration-none" tabIndex={0} role="button">
                  Xem thêm
                </a>
              </div>
              <div className="d-flex justify-content-center">
                <span data-aos="fade-left" className="member-name m-0">Văn Hùng /</span>
                <ul data-aos="fade-up" className="member-contact social-links d-flex p-0 m-0 mx-2">
                  <li>
                    <a href="https://www.facebook.com/hung.kimvan.1" target="_blank">
                      <i className="bi bi-facebook"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="member member-bride mt-5">
              <div data-aos="flip-right" className="member-image animation mb-3 text-center">
              <img src="https://cdn.biihappy.com/ziiweb/website/67a2140b4144fa6e570ea7a9/003d82eee66e00abe329e1ea1811645b.jpeg" alt="Bride" />
            </div>
            <div className="parent d-flex flex-column mx-auto text-center my-2">
              <div className="parent-name">Con ông: <span>Kiều Quang Tú</span></div>
              <div className="parent-name">Con bà: <span>Phạm Thị Bình</span></div>
            </div>
            <div className="bride-story d-flex flex-column">
              <p className="text-story fs-6 text-center m-0">
                Cô gái đến từ xứ Huế mộng mơ, hiện đang sinh sống và làm việc tại Sài Gòn. Sau khi tốt nghiệp Học viện Báo chí và Tuyên truyền, quyết tâm theo đuổi đam mê làm phóng viên du lịch. Là một người hay cười nhưng lại sống nội tâm, thích đọc sách, trồng cây và yêu thiên nhiên. Ngoài ra còn rất thích vẽ vời, nuôi mèo và nuôi ước mơ có cho mình một vườn hồng khoe sắc.
              </p>
              <a className="fs-6 fw-bold text-center mb-2 text-decoration-none" tabIndex={0} role="button">
                Xem thêm
              </a>
            </div>
            <div className="d-flex justify-content-center">
              <span data-aos="fade-left" className="member-name m-0">Bích Ngọc /</span>
              <ul data-aos="fade-up" className="member-contact social-links d-flex p-0 m-0 mx-2">
                <li>
                  <a href="https://www.facebook.com/kieungoc1201" target="_blank">
                    <i className="bi bi-facebook"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoupleSection;