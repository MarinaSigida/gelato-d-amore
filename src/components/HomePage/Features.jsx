import iceCreamIcon1 from '../../assets/images/ice-cream-cup.png';
import iceCreamIcon2 from '../../assets/images/ice-cream-plate.png';
import iceCreamIcon3 from '../../assets/images/ice-cream-cone.png';

const Features = () => {
  return (
    <section className="features">
      <div className="feature">
        <div className="icon">
          <img src={iceCreamIcon1} alt="iceCreamIcon" />
        </div>
        <h3>Goût inégalé</h3>
        <p>
          Découvrez nos glaces aux saveurs authentiques et exquises, préparées
          avec des ingrédients de première qualité.
        </p>
      </div>
      <div className="feature">
        <div className="icon">
          <img src={iceCreamIcon2} alt="iceCreamIcon" />
        </div>
        <h3>Prix abordable</h3>
        <p>
          Savourez nos délices glacés sans vous ruiner, parce que le bonheur ne
          devrait pas coûter une fortune.
        </p>
      </div>
      <div className="feature">
        <div className="icon">
          <img src={iceCreamIcon3} alt="iceCreamIcon" />
        </div>
        <h3>Production artisanale</h3>
        <p>
          Chaque pot est fabriqué avec soin et passion, suivant des méthodes
          artisanales pour une expérience gustative exceptionnelle.
        </p>
      </div>
    </section>
  );
};

export default Features;
