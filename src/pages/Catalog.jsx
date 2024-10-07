import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchStockItems,
  selectItem,
  clearSelectedItem,
} from '../features/stockItemsSlice';
import ProductPopup from '../components/CatalogPage/ProductPopup';
import Banner from '../components/Shared/Banner';
import CatalogFilter from '../components/CatalogPage/CatalogFilter';
import Flavor from '../components/HomePage/Flavor';
import bannerCatalog from '/assets/images/banner-catalog.png';
import bannerCatalogMobile from '/assets/images/banner-catalog-mobile.png';

const Catalog = () => {
  const [bannerImage, setBannerImage] = useState(bannerCatalogMobile);
  const dispatch = useDispatch();
  const { items, loading, error, selectedItem } = useSelector(
    (state) => state.stockItems
  );

  useEffect(() => {
    dispatch(fetchStockItems());
  }, [dispatch]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 430) {
        setBannerImage(bannerCatalogMobile);
      } else {
        setBannerImage(bannerCatalog);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleItemClick = (itemId) => {
    dispatch(selectItem(itemId));
  };
  const handleClosePopup = () => {
    dispatch(clearSelectedItem());
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="main">
      <Banner
        image={bannerImage}
        title="Bisous, "
        textPosition="center"
        titleSpan="I love you!"
      />
      <section className="catalog">
        <h2>
          NOS <span>GOÛTS</span>
        </h2>
        <div className="catalog-filters-bar">
          <CatalogFilter category={'Tous'} />
          <CatalogFilter category={'Crème'} />
          <CatalogFilter category={'Fruits'} />
          <CatalogFilter category={'Noix'} />
          <CatalogFilter category={'Fruits rouges'} />
        </div>
        <div className="catalog-list">
          {items.map((item) => (
            <Flavor
              key={item._id}
              id={item._id}
              title={item.title}
              description={item.description}
              pricePerUnit={item.pricePerUnit}
              quantity={item.quantity}
              category={item.category}
              createdAt={item.createdAt}
              updatedAt={item.updatedAt}
              status={item.status}
              onClick={() => handleItemClick(item._id)}
            />
          ))}
        </div>
        {selectedItem && (
          <ProductPopup
            isPopupOpen={!!selectedItem}
            closePopup={handleClosePopup}
            product={selectedItem}
          />
        )}
      </section>
    </div>
  );
};

export default Catalog;
