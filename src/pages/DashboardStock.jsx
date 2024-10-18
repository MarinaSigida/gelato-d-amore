import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStockItems } from '../features/stockItemsSlice';
import Banner from '../components/Shared/Banner';
import StockItem from '../components/DashboardStockPage/StockItem';
import AddStockItemForm from '../components/DashboardStockPage/AddStockItemForm';
import DeleteStockItemPopup from '../components/DashboardStockPage/DeleteStockItemPopup';
import bannerDashboardProducts from '/assets/images/banner-dashboard-products.png';
import bannerDashboardProductsMobile from '/assets/images/banner-dashboard-products-mobile.png';
import searchIcon from '../assets/images/search.png';

const DashboardStock = () => {
  const [bannerImage, setBannerImage] = useState(bannerDashboardProductsMobile);
  const [isStockListOpen, setIsStockListOpen] = useState(true);
  const [isAddStockItemOpen, setIsAddStockItemOpen] = useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [selectedItemTitle, setSelectedItemTitle] = useState('');
  const [selectedItemId, setSelectedItemId] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.stockItems);

  useEffect(() => {
    dispatch(fetchStockItems());
  }, [dispatch]);

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

  const handleDeleteClick = (id, title) => {
    setSelectedItemId(id);
    setSelectedItemTitle(title);
    toggleDeleteStockItemPopup();
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
        title="Gestion des stocks"
        textColor="white"
        textPosition="left"
      />
      <section className="stock">
        <div className="stock-buttons">
          <button onClick={toggleOpenStockList}>Liste des glaces</button>
          <button onClick={toggleOpenAddStockItem}>Ajouter une glace</button>
        </div>

        {isStockListOpen && !isAddStockItemOpen && (
          <div className="stock-quantity-and-search">
            <p>Nombre d'articles: {filteredItems.length}</p>
            <div className="search-bar">
              <input
                placeholder="Rechercher"
                type="text"
                name="title"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <img src={searchIcon} className="search-icon" alt="search icon" />
            </div>

            <div className="stock-list">
              {filteredItems.map((item) => (
                <StockItem
                  id={item._id}
                  key={item._id}
                  title={item.title}
                  image={item.image}
                  description={item.description}
                  quantity={item.quantity}
                  pricePerUnit={item.pricePerUnit}
                  category={item.category}
                  status={item.status}
                  onDeleteClick={() => handleDeleteClick(item._id, item.title)}
                />
              ))}
            </div>
          </div>
        )}
        {!isStockListOpen && isAddStockItemOpen && <AddStockItemForm />}

        <DeleteStockItemPopup
          isPopupOpen={isDeletePopupOpen}
          closePopup={toggleDeleteStockItemPopup}
          itemTitle={selectedItemTitle}
          itemId={selectedItemId}
        />
      </section>
    </div>
  );
};

export default DashboardStock;
