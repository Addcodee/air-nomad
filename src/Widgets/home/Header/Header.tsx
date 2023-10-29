import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <img
        src="https://images.pexels.com/photos/3669288/pexels-photo-3669288.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
        alt="header-img"
      />
      <div className="header__filter"></div>

      <div className="header__main">
        <div className="header__main_top">
          <h1>Reisen Sie einfach!</h1>
          <p>Entdecken Sie mit uns neue Ecken der Erde</p>
        </div>
        <button className="red-btn">Mehr erfahren</button>
      </div>
    </header>
  );
};

export default Header;
