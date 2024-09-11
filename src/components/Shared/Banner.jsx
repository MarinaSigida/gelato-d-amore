const Banner = ({
  image,
  title,
  titleSpan,
  titleExtra,
  textPosition = 'center',
  textColor,
  textColorExtra,
}) => {
  return (
    <section className={`banner ${textPosition}`}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className={`banner-text ${textPosition}`}>
        <h1 style={{ color: `${textColor}` }}>
          {title}
          <span>{titleSpan}</span>
        </h1>
        <h1 style={{ color: `${textColorExtra}` }}>{titleExtra}</h1>
      </div>
    </section>
  );
};

export default Banner;
