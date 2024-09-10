import weLoveYou from '../../assets/images/we-love-you.png';

const HowItsMade = () => {
  return (
    <section class="how-its-made">
      <h1>
        COMMENT C'EST <span>FAIT</span>?
      </h1>
      <div class="content">
        <div class="video-box"></div>
        <div class="video-image">
          <img src={weLoveYou} alt="We love you" />
        </div>
      </div>
    </section>
  );
};

export default HowItsMade;
