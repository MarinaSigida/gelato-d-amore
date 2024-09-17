import { useState, useEffect } from 'react';
import Banner from '../components/Shared/Banner';
import StockItem from '../components/DashboardStockPage/StockItem';
import AddStockItemForm from '../components/DashboardStockPage/AddStockItemForm';
import DeleteStockItemPopup from '../components/DashboardStockPage/DeleteStockItemPopup';
import bannerDashboardProducts from '/assets/images/banner-dashboard-products.png';
import bannerDashboardProductsMobile from '/assets/images/banner-dashboard-products-mobile.png';
import stockItems from '../resources/stockItems.json';

const DashboardStock = () => {
  const [bannerImage, setBannerImage] = useState(bannerDashboardProductsMobile);
  const [isStockListOpen, setIsStockListOpen] = useState(true);
  const [isAddStockItemOpen, setIsAddStockItemOpen] = useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 430) {
        setBannerImage(bannerDashboardProductsMobile);
      } else {
        setBannerImage(bannerDashboardProducts);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleOpenStockList = (e) => {
    e.preventDefault();
    setIsStockListOpen(true);
    setIsAddStockItemOpen(false);
  };

  const toggleOpenAddStockItem = (e) => {
    e.preventDefault();
    setIsStockListOpen(false);
    setIsAddStockItemOpen(true);
  };
  const toggleDeleteStockItemPopup = () => {
    setIsDeletePopupOpen(!isDeletePopupOpen);
  };

  return (
    <div className="main">
      <Banner
        image={bannerImage}
        titleSpan="Gestion des stocks"
        textColorExtra="white"
        textPosition="left"
      />
      <section className="stock">
        <div className="stock-buttons">
          <button onClick={toggleOpenStockList}>Liste des glaces</button>
          <button onClick={toggleOpenAddStockItem}>Ajouter une glace</button>
        </div>

        {isStockListOpen && !isAddStockItemOpen && (
          <div className="stock-quantity-and-search">
            <p>Nombre d'articles: 35</p>
            <div className="search-bar">
              <input placeholder="Rechercher" type="text" name="title" />
            </div>

            <div className="stock-list">
              {stockItems.map((item) => (
                <StockItem
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  quantity={item.quantity}
                  pricePerUnit={item.pricePerUnit}
                  category={item.category}
                  status={item.status}
                  toggleDeleteStockItemPopup={toggleDeleteStockItemPopup}
                />
              ))}
            </div>
          </div>
        )}
        {!isStockListOpen && isAddStockItemOpen && <AddStockItemForm />}

        <DeleteStockItemPopup
          isPopupOpen={isDeletePopupOpen}
          closePopup={toggleDeleteStockItemPopup}
        />
      </section>
    </div>
  );
};

export default DashboardStock;
