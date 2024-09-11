import Review from './Review';

const Reviews = () => {
  return (
    <section className="testimonials">
      <h1>
        NOS CHERS <span>CLIENTS</span>
      </h1>
      <div className="testimonials-list">
        <Review />
        <Review />
        <Review />
      </div>
    </section>
  );
};

export default Reviews;
