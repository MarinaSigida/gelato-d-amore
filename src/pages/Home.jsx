import BannerHome from '../components/HomePage/BannerHome';
import Features from '../components/HomePage/Features';
import HowItsMade from '../components/HomePage/HowItsMade';
import ShortInfo from '../components/HomePage/ShortInfo';
import Flavors from '../components/HomePage/Flavors';
import BestSellers from '../components/HomePage/BestSellers';
import Reviews from '../components/HomePage/Reviews';

const Home = () => {
  return (
    <div className="main">
      <BannerHome />
      <Features />
      <ShortInfo />
      <HowItsMade />
      <Flavors />
      <BestSellers />
      <Reviews />
    </div>
  );
};

export default Home;
