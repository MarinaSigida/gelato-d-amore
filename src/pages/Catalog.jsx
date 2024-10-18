import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchStockItems,
  selectItem,
  clearSelectedItem,
} from '../features/stockItemsSlice';
import ProductPopup from '../components/CatalogPage/ProductPopup';
import ItemAddedToBasketNotification from '../components/Notifications/ItemAddedToBasketNotification';
import Banner from '../components/Shared/Banner';
import CatalogFilter from '../components/CatalogPage/CatalogFilter';
import Flavor from '../components/HomePage/Flavor';
import bannerCatalog from '/assets/images/banner-catalog.png';
import bannerCatalogMobile from '/assets/images/banner-catalog-mobile.png';

const Catalog = () => {
  const [bannerImage, setBannerImage] = useState(bannerCatalogMobile);
  const [activeFilter, setActiveFilter] = useState('Tous');
  const [filteredItems, setFilteredItems] = useState([]);
  const [notificationData, setNotificationData] = useState(null);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const dispatch = useDispatch();
  const { items, loading, error, selectedItem } = useSelector(
    (state) => state.stockItems
  );

  useEffect(() => {
    dispatch(clearSelectedItem());
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

  useEffect(() => {
    if (activeFilter === 'Tous') {
      setFilteredItems(items);
    } else {
      const filtered = items.filter((item) => item.category === activeFilter);
      setFilteredItems(filtered);
    }
  }, [items, activeFilter]);

  const handleFilterClick = (category) => {
    setActiveFilter(category);
  };
  const handleItemClick = (item) => {
    dispatch(selectItem(item));
  };
  const handleClosePopup = () => {
    dispatch(clearSelectedItem());
  };

  const handleNotificationClose = () => {
    setIsNotificationOpen(false);
    setNotificationData(null);
  };

  const handleAddToBasket = (item) => {
    setNotificationData(item);
    setIsNotificationOpen(true);
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
          <CatalogFilter
            category={'Tous'}
            isActive={activeFilter === 'Tous'}
            onClick={() => handleFilterClick('Tous')}
          />
          <CatalogFilter
            category="Crème"
            isActive={activeFilter === 'Crème'}
            onClick={() => handleFilterClick('Crème')}
          />
          <CatalogFilter
            category="Fruits"
            isActive={activeFilter === 'Fruits'}
            onClick={() => handleFilterClick('Fruits')}
          />
          <CatalogFilter
            category="Noix"
            isActive={activeFilter === 'Noix'}
            onClick={() => handleFilterClick('Noix')}
          />
          <CatalogFilter
            category="Fruits rouges"
            isActive={activeFilter === 'Fruits rouges'}
            onClick={() => handleFilterClick('Fruits rouges')}
          />
        </div>
        <div className="catalog-list">
          {filteredItems.map((item) => (
            <Flavor
              key={item._id}
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
              onClick={() => handleItemClick(item)}
              onAddToBasket={handleAddToBasket}
            />
          ))}
        </div>
        {selectedItem && (
          <ProductPopup
            isPopupOpen={!!selectedItem}
            closePopup={handleClosePopup}
            product={selectedItem}
            onAddToBasket={handleAddToBasket}
          />
        )}
        {isNotificationOpen && (
          <ItemAddedToBasketNotification
            isPopupOpen={isNotificationOpen}
            closePopup={handleNotificationClose}
            item={notificationData}
          />
        )}
      </section>
    </div>
  );
};

export default Catalog;
