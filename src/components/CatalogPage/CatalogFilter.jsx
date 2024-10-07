const CatalogFilter = ({ category, isActive, onClick }) => {
  return (
    <div>
      <button
        className={`catalog-filter-btn ${isActive ? 'active' : ''}`}
        onClick={onClick}
      >
        {category}
      </button>
    </div>
  );
};

export default CatalogFilter;
