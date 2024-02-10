import { useState } from 'react';
import { useTrail, animated } from 'react-spring';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { InView } from 'react-intersection-observer';
import 'swiper/scss';
import 'swiper/scss/pagination';

const Developers = ({ developers }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisible = (inView) => {
    if (inView) {
      setIsVisible(true);
    }
  };

  const trail = useTrail(5, {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0px)' : 'translateY(20px)',
    delay: 500,
  });

  return (
    <div className="recommend__swiper">
      <Swiper
        loop={true}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        breakpoints={{
          320: {
            slidesPerView: 1.8,
            spaceBetween: 10,
          },
          450: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          578: {
            slidesPerView: 2.5,
            spaceBetween: 10,
            pagination: {
              clickable: false,
            },
          },
          768: {
            slidesPerView: 2.8,
            spaceBetween: 10,
          },
          992: {
            slidesPerView: 2.8,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 27,
          },
        }}
        autoHeight={true}
        className="swiper recommend-developers">
        {developers.map((developer, index) => (
          <SwiperSlide key={index}>
            <InView triggerOnce={true} onChange={handleVisible}>
              {({ ref, inView }) => (
                <div ref={ref} className="recommend-developers__item">
                  <div className="recommend-developers__rating">
                    {trail.map((props, i) => (
                      <animated.img
                        key={i}
                        style={{ ...props, delay: isVisible ? i * 100 : 0 }}
                        src="/assets/Recommend/Icon/stars.svg"
                        alt="Rating"
                      />
                    ))}
                  </div>
                  <div className="recommend-developers__info">
                    <h4 className="title recommend-developers__title">
                      {developer.title}
                    </h4>
                    <p className="desc recommend-developers__desc">
                      {developer.description}
                    </p>
                  </div>
                  <div className="recommend-developers__about">
                    <div className="recommend-developers__about-img">
                      <img src={developer.image} alt={developer.name} />
                    </div>
                    <div className="recommend-developers__pos">
                      <h4 className="title recommend-developers__name">
                        {developer.name}
                      </h4>
                      <p className="desc recommend-developers__text">
                        {developer.position}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </InView>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Developers;
