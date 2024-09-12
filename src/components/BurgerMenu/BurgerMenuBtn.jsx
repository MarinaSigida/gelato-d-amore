import burgerMenu from '../../assets/images/burger-menu.png';

const BurgerMenuBtn = ({ onClick }) => {
  return (
    <>
      <div className="burger-menu-btn" onClick={onClick}>
        <img className="icon" src={burgerMenu} alt="burger menu" />
      </div>
    </>
  );
};

export default BurgerMenuBtn;
