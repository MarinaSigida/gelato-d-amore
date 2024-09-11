import reviewImg from '../../assets/images/reviewImg.png';

const Review = () => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-image">
        <img src={reviewImg} alt="Client photo" />
      </div>
      <h2>Marie Lefevre</h2>
      <p className="testimonial-text">
        Bien plus qu'un formidable glacier il nous offre une expérience humaine
        unique ! Et surprise toute à fait approuvée ( surtout savourée ) on peut
        retrouver ses merveilleuses glaces en gâteau 😍{' '}
      </p>
    </div>
  );
};

export default Review;
