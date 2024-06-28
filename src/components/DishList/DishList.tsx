// src/components/DishList/DishList.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./DishList.css";
import { addItem } from "../../features/Cart/state/cartslice";
import { useGetDishesQuery } from "../../features/Menu/api/Menu";

const DishList: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = (dish: {
    id: number;
    name: string;
    price: number;
  }) => {
    dispatch(addItem({ ...dish, quantity: 1 }));
  };

  const { data: dishapidata, error, isLoading } = useGetDishesQuery();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.toString()}</div>;

  return (
    <div className="dish-list">
      <h2>Our Dishes</h2>
      <ul>
        {dishapidata?.slice(0, 3).map((dish) => (
          <div className="dish-box" key={dish.id}>
            <li>
              {dish.name} - ${dish.price}
              <button onClick={() => handleAddToCart(dish)}>+</button>
            </li>
          </div>
        ))}
      </ul>
      <button className="view-more" onClick={() => navigate("/menu")}>
        View More
      </button>
    </div>
  );
};

export default DishList;
