const GallerySection = () => {
    const photoGalleries = [
      {
        src: "https://cdn.biihappy.com/ziiweb/website/67a2140b4144fa6e570ea7a9/galleries/67a22248a065ca9e8003001d/large.jpg",
        thumb: "https://cdn.biihappy.com/ziiweb/website/67a2140b4144fa6e570ea7a9/galleries/67a22248a065ca9e8003001d/small.jpg",
      },
      // Add more images here
    ];
  
    return (
      <section className="py-5 gallery-section section-bg-affect" id="gallery">
        <div className="container-fluid">
          <h2 className="section-title text-center" data-aos="zoom-in-up">Album Hình Cưới</h2>
          <h3 className="section-sub-title mb-4 text-center" data-aos="zoom-in-up">
            Được ai đó yêu sâu sắc sẽ mang lại cho bạn sức mạnh, trong khi yêu ai đó sâu sắc sẽ cho bạn dũng khí.
          </h3>
          <div className="row gx-2" id="photoGalleryContainer">
            {photoGalleries.map((photo, index) => (
              <div key={index} className="col-6 gallery-item section-sub-title mb-2 btn-see-more-gallery" data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}>
                <img src={photo.thumb} alt={`Gallery ${index + 1}`} />
              </div>
            ))}
          </div>
          <div className="text-center" data-aos="fade-up">
            <a href="javascript:void(0)" id="btn-see-more-gallery" className="btn btn-secondary mt-4 btn-see-more-gallery">
              <span>Tất cả hình ảnh</span>
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default GallerySection;