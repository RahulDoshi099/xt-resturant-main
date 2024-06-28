import { useState } from "react";
import { useDispatch } from "react-redux";
import "./Menu.css";
import { useGetDishesQuery } from "../api/Menu";
import { addItem } from "../../Cart/state/cartslice";

const Menu = () => {
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);
  const dispatch = useDispatch();

  const { data: dishapidata, error, isLoading } = useGetDishesQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.toString()}</div>;

  // Group dishes by their group name
  const groupedDishes = dishapidata?.reduce((acc: any, dish: any) => {
    const groupName = dish.group.name;
    if (!acc[groupName]) {
      acc[groupName] = [];
    }
    acc[groupName].push(dish);
    return acc;
  }, {});

  const toggleGroup = (group: string) => {
    if (expandedGroup === group) {
      setExpandedGroup(null);
    } else {
      setExpandedGroup(group);
    }
  };

  const handleAddToCart = (dish: any) => {
    dispatch(addItem({ ...dish, quantity: 1 }));
  };

  return (
    <div className="menu-container">
      <h1>Menu</h1>
      {dishapidata?.length === 0 && (
        <>
        <div>Menu list Empty......</div>
        </>
      )}
      {groupedDishes &&
        Object.keys(groupedDishes).map((group, index) => (
          <div key={group} className="group-container">
            <h2 className="group-name" onClick={() => toggleGroup(group)}>
              {group}{" "}
              <span className="expand-icon">
                {expandedGroup === group ? "-" : "+"}
              </span>
            </h2>
            {expandedGroup === group && (
              <div className="dish-list">
                {groupedDishes[group].map((dish: any) => (
                  <div key={dish.id} className="dish-item">
                    <img
                      src={`/images/${dish.image}`}
                      alt={dish.name}
                      className="dish-image"
                    />
                    <h3 className="dish-name">{dish.name}</h3>
                    <p className="dish-price">${parseFloat(dish.price).toFixed(2)}</p>
                    <button
                      className="add-to-cart-button"
                      onClick={() => handleAddToCart(dish)}
                    >
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

export default Menu;
