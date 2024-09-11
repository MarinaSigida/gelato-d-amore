import Banner from '../components/Shared/Banner';
import bannerAbout from '/assets/images/banner-about.png';

const About = () => {
  return (
    <div className="main">
      <Banner
        image={bannerAbout}
        title="Notre histoire d'"
        titleSpan="amour"
        textColor="white"
        textPosition="right"
      />
    </div>
  );
};

export default About;
