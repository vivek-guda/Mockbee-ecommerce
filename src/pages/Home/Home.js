import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <main className="home-main">
      <div className="banner-img-container">
        <Link to="/products">
          <img
            className="banner-img"
            src="./assets/homepageImages/ecommerce-banner.png"
          />
        </Link>
      </div>
      <h1 className="home-page-section-heading">SHOP BY CATEGORY</h1>
      <section className="home-page-section">
        <Link to="/products">
          <div className="home-section-image-containers">
            <img
              className="home-section-images"
              src="./assets/homepageImages/indian-wear.png"
            />
          </div>
        </Link>
        <Link to="/products">
          <div className="home-section-image-containers">
            <img
              className="home-section-images"
              src="./assets/homepageImages/wfh-casual-wear.png"
            />
          </div>
        </Link>
        <Link to="/products">
          <div className="home-section-image-containers">
            <img
              className="home-section-images"
              src="./assets/homepageImages/active-wear.png"
            />
          </div>
        </Link>
        <Link to="/products">
          <div className="home-section-image-containers">
            <img
              className="home-section-images"
              src="./assets/homepageImages/western-wear.png"
            />
          </div>
        </Link>
        <Link to="/products">
          <div className="home-section-image-containers">
            <img
              className="home-section-images"
              src="./assets/homepageImages/sports-wear.png"
            />
          </div>
        </Link>
        <Link to="/products">
          <div className="home-section-image-containers">
            <img
              className="home-section-images"
              src="./assets/homepageImages/lounge-wear.png"
            />
          </div>
        </Link>
      </section>
    </main>
  );
};

export default Home;
