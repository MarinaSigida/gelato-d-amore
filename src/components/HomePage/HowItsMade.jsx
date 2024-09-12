import weLoveYou from '../../assets/images/we-love-you.png';

const HowItsMade = () => {
  return (
    <section className="how-its-made">
      <h1>
        COMMENT C'EST <span>FAIT</span>?
      </h1>
      <div className="how-its-made-content">
        <div className="video-box">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/MmHK2ntzT6o"
            title="Gelato D'Amore"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        {/* <div className="video-image">
          <img src={weLoveYou} alt="We love you" />
        </div> */}
      </div>
    </section>
  );
};

export default HowItsMade;
