import bestSeller1 from '../../assets/images/bestSeller1.jpg';
import bestSeller2 from '../../assets/images/bestSeller2.png';
import bestSeller3 from '../../assets/images/bestSeller3.png';

const BestSellers = () => {
  return (
    <section className="bestSellers">
      <h1>
        <span>MEILLEURES </span>VENTES
      </h1>
      <div className="bestSellers-list">
        <div className="bestSeller">
          <img src={bestSeller1} alt="best seller 1" />
          <div className="bestseller-overlay">
            <h2>Pistache</h2>
            <p>
              Une crème glacée crémeuse aux pistaches, avec une texture riche et
              onctueuse.
            </p>
          </div>
        </div>
        <div className="bestSeller">
          <img src={bestSeller2} alt="best seller 2" />
          <div className="bestseller-overlay">
            <h2>Gianduja</h2>
            <p>
              Une crème glacée onctueuse qui fond en bouche avec des notes
              riches et gourmandes de cacao et de noisettes grillées, parfaite
              pour les amateurs de saveurs authentiques.
            </p>
          </div>
        </div>
        <div className="bestSeller">
          <img src={bestSeller3} alt="best seller 3" />
          <div className="bestseller-overlay">
            <h2>Mangue</h2>
            <p>
              Un sorbet rafraîchissant à la mangue, parfait pour une journée
              d'été.
            </p>
          </div>
        </div>
      </div>
      <a href="catalog" className="link-button">
        Acheter maintenant
      </a>
    </section>
  );
};

export default BestSellers;
