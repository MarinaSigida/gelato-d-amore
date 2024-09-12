import Flavor from './Flavor';

const Flavors = () => {
  return (
    <section className="flavors">
      <h1>
        NOS <span>GOÛTS</span>
      </h1>
      <div className="flavors-list">
        <Flavor />
        <Flavor />
        <Flavor />
        <Flavor />
      </div>
      <div className="slider"></div>
    </section>
  );
};

export default Flavors;
