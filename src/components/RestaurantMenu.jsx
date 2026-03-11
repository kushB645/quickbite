import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import restaurantsMenu from "../utils/MenuDetail";
import resList from "../utils/RestaurantDetail";
import { CartContext } from "../components/CartContext";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurant = restaurantsMenu.find(
    (res) => res.restaurantID === Number(resId)
  );

  const restaurantDetails = resList.find(
    (res) => res.restaurantID === Number(resId)
  );

  const { cart, addToCart, increaseQty, decreaseQty } =
    useContext(CartContext);

  return (
    <div className="restaurant-page">

      {/* HERO SECTION */}
      <div
        className="restaurant-hero"
       style={{ backgroundImage: `url(${restaurantDetails.image})` }}
      >
        <div className="hero-overlay">

          <Link to="/" className="back-btn">
            ← Back to Restaurants
          </Link>

          <h1 className="restaurant-title">
            {restaurantDetails.restaurantName}
          </h1>

          <p className="cuisine">{restaurantDetails.cuisine}</p>

          <div className="restaurant-meta">
            ⭐ {restaurantDetails.rating}
            <span> ⏱ {restaurantDetails.deliveryTime}</span>
            <span> 📍 {restaurantDetails.address}</span>
          </div>

        </div>
      </div>

      {/* MENU SECTION */}
      <div className="menu-page">

        <h2 className="menu-heading">Menu</h2>

        {restaurant.menu.map((category) => (
          <div key={category.category}>

            <h2 className="category-title">
              {category.category}
            </h2>

            <div className="menu-category">

              {category.items.map((item) => {
                const cartItem = cart.find((c) => c.id === item.id);

                return (
                  <div className="menu-card" key={item.id}>
                    <div className="menu-info">
                      <h3>{item.name}</h3>
                      <p className="price">₹{item.price}</p>
                    </div>

                    <div className="menu-right">
                      <img
                        src={
                          item.image
                            ? item.image
                            : "https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
                        }
                        alt={item.name}
                        className="food-img"
                      />

                      {cartItem ? (
                        <div className="qty-box">
                          <button onClick={() => decreaseQty(item.id)}>−</button>
                          <span>{cartItem.qty}</span>
                          <button onClick={() => increaseQty(item.id)}>+</button>
                        </div>
                      ) : (
                        <button
                          className="add-btn"
                          onClick={() => addToCart(item)}
                        >
                          ADD
                        </button>
                      )}

                    </div>
                  </div>
                );
              })}

            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default RestaurantMenu;