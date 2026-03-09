import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import resList from "../utils/RestaurantDetail";
import { Link } from "react-router-dom";
import Footer from "./Footer";


const Body = () => {
  const [ListofRestaurant, setListofRestaurant] = useState(resList);
  const [filteredRestaurant, setfilteredRestaurant] = useState(resList);

  const [SearchText, setSearchText] = useState("");

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5485315&lng=77.1264849&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING ",
  //   );
  //   const json = await data.json();

  //   setListofRestaurant(
  //     json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants,
  //   );
  //   setfilteredRestaurant(
  //     json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants,
  //   );
  // };

  return ListofRestaurant.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={SearchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              //filter the restuarants cards from search text
              const filteredRestaurant = ListofRestaurant.filter((res) =>
                res.restaurantName
                  .toLowerCase()
                  .includes(SearchText.toLowerCase()),
              );
              setfilteredRestaurant(filteredRestaurant);
            }}
          >
            search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filterdList = filteredRestaurant.filter(
              (res) => res.rating > 4.6,
            );
            console.log(filterdList);
            setfilteredRestaurant(filterdList);
          }}
        >
          {" "}
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((resturant) => (
          <Link
            key={resturant.restaurantID}
            to={`/restaurant/${resturant.restaurantID}`}
          >
            <RestaurantCard resData={resturant} />
          </Link>
        ))}
      </div>

      <Footer />
    </div>
  );
};
export default Body;
