import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStockItems } from '../../features/stockItemsSlice';
import Flavor from './Flavor';

const Flavors = ({ onAddToBasket }) => {
  const [swiperThemeColor, setSwiperThemeColor] = useState(
    'rgba(255, 255, 255, 0)'
  );
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.stockItems);

  useEffect(() => {
    dispatch(fetchStockItems());
  }, [dispatch]);

  const firstItems = items.slice(0, 12);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSwiperThemeColor('rgba(255, 255, 255, 0)');
      } else {
        setSwiperThemeColor('#9F233E');
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <section className="flavors">
      <h1>
        NOS <span>GOÛTS</span>
      </h1>
      <div className="flavors-list">
        <swiper-container
          pagination="dynamic-bullets"
          navigation="true"
          space-between="18"
          slides-per-view="auto"
          style={{
            width: '100%',
            padding: '0 30px',
            '--swiper-pagination-color': '#9F233E',
            '--swiper-pagination-bottom': '0',
            '--swiper-theme-color': swiperThemeColor,
            '--swiper-navigation-size': '20px',
            '--swiper-navigation-top-offset': '30%',
          }}
        >
          {firstItems.map((item) => (
            <swiper-slide key={item._id}>
              <Flavor
                id={item._id}
                image={item.image}
                title={item.title}
                description={item.description}
                pricePerUnit={item.pricePerUnit}
                quantity={item.quantity}
                category={item.category}
                createdAt={item.createdAt}
                updatedAt={item.updatedAt}
                status={item.status}
                onAddToBasket={onAddToBasket}
              />
            </swiper-slide>
          ))}
        </swiper-container>
      </div>
      <div className="slider"></div>
      <button style={{ marginTop: '30px' }}>
        <a href="catalog">Сonsulter le catalogue</a>
      </button>
    </section>
  );
};

export default Flavors;
