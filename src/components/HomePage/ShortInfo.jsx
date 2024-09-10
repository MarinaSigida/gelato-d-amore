import shortInfo1 from '../../assets/images/shortInfo1.png';
import shortInfo2 from '../../assets/images/shortInfo2.png';
import shortInfo3 from '../../assets/images/shortInfo3.png';
import shortInfo4 from '../../assets/images/shortInfo4.png';

const ShortInfo = () => {
  return (
    <section className="short-info">
      <h1>
        <span>GELATO D'AMOURE</span>, LE GLACIER QUI VA VOUS FAIRE{' '}
        <span>FONDRE</span>
      </h1>
      <div className="short-text">
        Depuis son ouverture en juillet 2020, le glacier Gelato D'Amore vous
        propose des glaces exquises. L’histoire commence en Roumanie, où
        Patricia et George deux passionnés d'amour et de gelato, sont venus en
        France pour réaliser leur rêve. Tomber amoureux de la Côte d'Azur depuis
        2 ans, ils souhaitaient s'y installer pour apporter leur savoir faire. 
      </div>
      <div className="images">
        <div className="short-info-image-box">
          <img src={shortInfo1} alt="Ice Cream Shop" />
        </div>
        <div className="short-info-image-box">
          <img src={shortInfo2} alt="Ice Cream Making" />
        </div>
        <div className="short-info-image-box">
          <img src={shortInfo3} alt="Ice Cream Serving" />
        </div>
        <div className="short-info-image-box">
          <img src={shortInfo4} alt="Ice Cream Client" />
        </div>
      </div>
    </section>
  );
};

export default ShortInfo;
