import Banner from '../components/Shared/Banner';
import bannerCatalog from '/assets/images/banner-catalog.png';

const Catalog = () => {
  return (
    <div className="main">
      <Banner
        image={bannerCatalog}
        title="Bisous, "
        textPosition="center"
        titleSpan="I love you!"
      />
    </div>
  );
};

export default Catalog;
