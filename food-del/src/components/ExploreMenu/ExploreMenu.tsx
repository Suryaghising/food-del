import "./ExploreMenu.css";
import { menu_list } from "./../../assets/assets";

interface Props {
  category: string;
  setCategory: (category: string) => void;
}

const ExploreMenu = ({ category, setCategory }: Props) => {
  return (
    <div className="explore-menu">
      <h2>Explore our menu</h2>
      <p className="explore-menu-text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
        quasi perferendis quas maiores dicta ut? Voluptates fugit expedita ipsum
        molestiae?
      </p>
      <div className="explore-menu-list">
        {menu_list.map((menu_item, index) => (
          <div
            className="explore-menu-list-item"
            key={index}
            onClick={() =>
              setCategory(
                category === menu_item.menu_name ? "All" : menu_item.menu_name
              )
            }
          >
            <img
              className={category === menu_item.menu_name ? "active" : ""}
              src={menu_item.menu_image}
              alt=""
            />
            <p>{menu_item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
