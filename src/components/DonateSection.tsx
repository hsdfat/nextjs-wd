const DonateSection = () => {
    return (
      <section className="py-5 donate-section section-bg-affect" id="donate">
        <div className="container-fluid">
          <div className="w-100">
            <h2 data-aos="fade-up" className="section-title text-center m-0">Hộp mừng cưới</h2>
            <h3 data-aos="fade-up" className="section-sub-title mb-4 text-center">
              Thật vui vì được gặp và đón tiếp các bạn trong một dịp đặc biệt như đám cưới của chúng tôi.
            </h3>
            <div className="row d-flex justify-content-around donate-box mb-1">
              <div data-aos="fade-right" className="col-6 mb-4 donate-wrap">
                <div className="donate-card p-3 px-3 rounded text-center">
                  <strong className="d-block sub-title mb-2 text-uppercase">Đến chú rể</strong>
                  <img className="qr-code-image m-auto mb-2" src="https://cdn.biihappy.com/ziiweb/website/67a2140b4144fa6e570ea7a9/4570db11900a4df2cc07c817a0b896de.jpeg" alt="QR Code" />
                  <p className="mb-1">Ngân hàng: <strong>MBBank</strong></p>
                  <p className="mb-1">Tên tài khoản: <strong>KIM VAN HUNG</strong></p>
                  <p className="mb-1">Số tài khoản: <strong>220119972222</strong></p>
                </div>
              </div>
              <div data-aos="fade-left" className="col-6 donate-wrap">
                <div className="donate-card p-3 px-4 rounded text-center">
                  <strong className="d-block sub-title mb-2 text-uppercase">Đến cô dâu</strong>
                  <img className="qr-code-image m-auto mb-2" src="https://cdn.biihappy.com/ziiweb/website/67a2140b4144fa6e570ea7a9/36cee36efa39260c98a72ee06218efc7.jpeg" alt="QR Code" />
                  <p className="mb-1">Ngân hàng: <strong>TechcomBank</strong></p>
                  <p className="mb-1">Tên tài khoản: <strong>KIEU THI BICH NGOC</strong></p>
                  <p className="mb-1">Số tài khoản: <strong>19036448012013</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default DonateSection;