const VideoSection = () => {
    return (
      <section className="py-5 video-section section-bg-affect" id="video">
        <div className="container-fluid">
          <h2 className="section-title text-center" data-aos="fade-up">Video Cưới</h2>
          <h3 className="section-sub-title mb-4 text-center" data-aos="fade-up">
            Tình yêu không làm cho thế giới quay tròn.
          </h3>
          <div className="ratio ratio-16x9" data-aos="zoom-in">
            <iframe
              width="100%"
              src="https://www.youtube.com/embed/lGUdD29BDMg"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    );
  };
  
  export default VideoSection;