import { useParams } from "react-router-dom";
import { useContext } from "react";
import restaurantsMenu from "../utils/MenuDetail";
import { CartContext } from "../components/CartContext";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurant = restaurantsMenu.find(
    (res) => res.restaurantID === Number(resId),
  );

  const { addToCart } = useContext(CartContext);

  return (
    <div className="menu-page">
      <h1 className="restaurant-name">{restaurant.restaurantName}</h1>

      {restaurant.menu.map((category) => (
        <div className="menu-category" key={category.category}>
          <h2 className="category-title">{category.category}</h2>

          {category.items.map((item) => (
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

                <button className="add-btn" onClick={() => addToCart(item)}>
                  ADD
                </button>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
