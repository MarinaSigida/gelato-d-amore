import Banner from '../components/HomePage/Banner';
import Features from '../components/HomePage/Features';
import HowItsMade from '../components/HomePage/HowItsMade';
import ShortInfo from '../components/HomePage/ShortInfo';
import Flavors from '../components/HomePage/Flavors';

const Home = () => {
  return (
    <div className="main">
      <Banner />
      <Features />
      <ShortInfo />
      <HowItsMade />
      <Flavors />
    </div>
  );
};

export default Home;
