const WishesSection = () => {
    return (
      <section className="py-5 wishes-section section-bg-affect" id="wishes">
        <div className="container-fluid">
          <h2 data-aos="fade-up" className="section-title text-center">Sổ Lưu Bút</h2>
          <h3 data-aos="fade-up" className="section-sub-title mb-4 text-center">
            Cảm ơn bạn rất nhiều vì đã gửi những lời chúc mừng tốt đẹp nhất đến đám cưới của chúng tôi!
          </h3>
          <div id="section-comment">
            <form action="" id="wish-form" className="p-4 contact-validation-active">
              <div className="col-auto mb-3 d-flex">
                <div className="w-50 me-2">
                  <input name="name" id="name-comment" type="text" className="form-control border-0" placeholder="Nhập tên của bạn*" />
                </div>
                <div className="w-50 ms-2">
                  <input name="email" id="email-comment" type="text" className="form-control border-0" placeholder="E-mail" />
                </div>
              </div>
              <div className="col-auto mb-3">
                <div className="textarea-emoji-picker position-relative">
                  <div className="vitualTextarea form-control px-0">
                    <textarea id="content" name="content" className="form-control border-0" rows={3} placeholder="Nhập lời chúc của bạn*"></textarea>
                    <div className="textAreaIcons">
                      <span className="show-autocomplete tooltip-custom" data-toggle="tooltip" data-placement="top" title="Lời chúc gợi ý">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-lightbulb" viewBox="0 0 16 16">
                          <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1" />
                        </svg>
                      </span>
                      <span className="emoji-picker-button tooltip-custom" data-toggle="tooltip" data-placement="top" title="Chèn biểu tượng">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-emoji-smile" viewBox="0 0 16 16">
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                          <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-auto text-center">
                <button type="submit" className="p-2 w-50 btn btn-danger border-0" id="btn-submit-comment">
                  Gửi lời chúc
                </button>
              </div>
            </form>
            <div className="mt-3 px-4 py-3" id="show-comments">
              <div className="box-comment pb-3">
                <h4 id="user-name-comment" className="mt-1">CEO của Biihappy</h4>
                <p id="comment-detail" className="m-0">
                  &quot;Một cuộc hôn nhân thành công đòi hỏi phải yêu nhiều lần, và luôn ở cùng một người&quot; - Chúc cho hai bạn sẽ có được một cuộc hôn nhân viên mãn, trăm năm hạnh phúc!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default WishesSection;