export const Blog = () => {
  return (
    <section className="blog">
      <h2 className="blog__title title">Blog</h2>
      <p className="blog__desc desc">
        Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet
        Sint. Velit Officia Consequat Duis Enim Velit Mollit. Lorem Ipsum
      </p>
      <div className="blog__list">
        <div className="blog-item">
          <div className="blog-item__img">
            <img src="/assets/Blog/image1.png" alt="image1" />
          </div>
          <div className="blog-item__info">
            <h4 className="blog-item__title">How to make web tempates</h4>
            <p className="blog-item__desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
              nulla diam in ac dictum a urna
            </p>
            <div className="blog-item__more">
              <a href="/learn">Learn more &gt;</a>
            </div>
          </div>
        </div>
        <div className="blog-item">
          <div className="blog-item__img">
            <img src="/assets/Blog/image2.png" alt="image2" />
          </div>
          <div className="blog-item__info">
            <h4 className="blog-item__title">Make Business card</h4>
            <p className="blog-item__desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
              nulla diam in ac dictum a urna
            </p>
            <div className="blog-item__more">
              <a href="/learn">Learn more &gt;</a>
            </div>
          </div>
        </div>
        <div className="blog-item">
          <div className="blog-item__img">
            <img src="/assets/Blog/image3.png" alt="image3" />
          </div>
          <div className="blog-item__info">
            <h4 className="blog-item__title">How to make Flyer Design</h4>
            <p className="blog-item__desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
              nulla diam in ac dictum a urna
            </p>
            <div className="blog-item__more">
              <a href="/learn">Learn more &gt;</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
