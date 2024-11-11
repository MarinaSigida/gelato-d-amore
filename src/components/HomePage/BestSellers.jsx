import bestSeller1 from '../../assets/images/bestSeller1.png';
import bestSeller2 from '../../assets/images/bestSeller2.png';
import bestSeller3 from '../../assets/images/bestSeller3.png';

const BestSellers = () => {
  const handleButtonClick = (e) => {
    e.currentTarget.blur();
  };
  return (
    <section className="bestSellers">
      <h1>
        <span>MEILLEURES </span>VENTES
      </h1>
      <div className="bestSellers-list">
        <div className="bestSeller">
          <img src={bestSeller1} alt="best seller 1" />
        </div>
        <div className="bestSeller">
          <img src={bestSeller2} alt="best seller 2" />
        </div>
        <div className="bestSeller">
          <img src={bestSeller3} alt="best seller 3" />
        </div>
      </div>
      <button onClick={handleButtonClick}>
        <a href="catalog">Acheter maintenant</a>
      </button>
    </section>
  );
};

export default BestSellers;
