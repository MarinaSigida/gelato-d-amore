import Flavor from './Flavor';

const Flavors = () => {
  return (
    <section className="flavors">
      <h1>
        NOS <span>GOÛTS</span>
      </h1>
      <div className="flavors-list">
        <swiper-container
          pagination="dynamic-bullets"
          navigation="true"
          space-between="18"
          slides-per-view="auto"
          style={{
            width: '100%',
            padding: '0 30px',
            '--swiper-pagination-color': '#9F233E',
            '--swiper-pagination-bottom': '0',
            '--swiper-theme-color': '#9F233E',
          }}
        >
          <swiper-slide>
            <Flavor />
          </swiper-slide>
          <swiper-slide>
            <Flavor />
          </swiper-slide>
          <swiper-slide>
            <Flavor />
          </swiper-slide>
          <swiper-slide>
            <Flavor />
          </swiper-slide>
          <swiper-slide>
            <Flavor />
          </swiper-slide>
          <swiper-slide>
            <Flavor />
          </swiper-slide>
        </swiper-container>
      </div>
      <div className="slider"></div>
    </section>
  );
};

export default Flavors;
