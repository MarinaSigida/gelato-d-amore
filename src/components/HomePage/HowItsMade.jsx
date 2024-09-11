import weLoveYou from '../../assets/images/we-love-you.png';

const HowItsMade = () => {
  return (
    <section className="how-its-made">
      <h1>
        COMMENT C'EST <span>FAIT</span>?
      </h1>
      <div className="content">
        <div className="video-box"></div>
        <div className="video-image">
          <img src={weLoveYou} alt="We love you" />
        </div>
      </div>
    </section>
  );
};

export default HowItsMade;
