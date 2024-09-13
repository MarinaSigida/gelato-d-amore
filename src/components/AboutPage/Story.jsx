import storyImg1 from '../../assets/images/GeorgePatricia.png';
import storyImg2 from '../../assets/images/George.png';
import storyImg3 from '../../assets/images/Love.png';

const Story = () => {
  return (
    <section className="our-story">
      <h2>
        <span>GELATO D'AMORE </span>LA PASSION POUR LA VIE ET LA GLACE
      </h2>
      <div className="our-story-content">
        <div className="our-story-text">
          <p>
            <span>Patricia et George Balan</span> sont deux passionnés de la
            vie, de l'amour et du gelato. Ils sont venus sur la Côte d'Azur pour
            réaliser leur rêve continu et apporter leur savoir-faire à cette
            terre méditerranéenne. <br />
            <br />
            Leur histoire est remplie de passion et chaque mot est prononcé avec
            beaucoup de dévouement. <br />
            <br /> Leur rêve se cristallise en 2020 au{' '}
            <span>125 Rue de France</span>, à Nice, une gelateria qui a déjà une
            aura charmante qui doit être découverte par chacun d'entre vous.
          </p>
        </div>
        <div className="our-story-image">
          <img src={storyImg1} alt="Patricia et George Balan" />
        </div>

        <div className="our-story-text">
          <p>
            Dès le premier jour, nous voulons et nous offrirons un{' '}
            <span>produit parfait</span>. C'est le minimum que nous puissions
            faire ! Et nous espérons, comme cela a été le cas ces vingt
            dernières années, que nous recevrons d'excellents retours de la part
            de nos clients. <br />
            <br />
            En dehors de cela, ce qui me semble fondamental pour tout
            professionnel dans ce domaine, ou dans tout autre domaine, lorsque
            vous fabriquez un produit, c'est l'expérience que nous offrons.
          </p>
        </div>
        <div className="our-story-image">
          <img src={storyImg2} alt="George Balan" />
        </div>

        <div className="our-story-text">
          <p>
            <span>D'Amore</span> signifie que nous le faisons avec amour. Nous
            sommes des gens d'affaires, mais avant tout, nous sommes des
            professionnels.
            <br /> <br />
            Nous aimons notre métier, notre entreprise, nos clients, nos
            fournisseurs et les lieux où nous exerçons. <br />
            <br />
            Nous ne pouvons que vous assurer notre dévouement à cet endroit
            merveilleux et à tout ce que nous souhaitons partager.
          </p>
        </div>
        <div className="our-story-image">
          <img src={storyImg3} alt="Patricia et George Balan" />
        </div>
      </div>
    </section>
  );
};

export default Story;
