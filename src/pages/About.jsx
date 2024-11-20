import Banner from '../components/Shared/Banner';
import bannerAbout from '/assets/images/banner-about.png';
import Story from '../components/AboutPage/Story';
import ScrollUpButton from '../components/Shared/ScrollUpButton';

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
      <Story />
      <ScrollUpButton />
    </div>
  );
};

export default About;
