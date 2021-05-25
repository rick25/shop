import { Link } from "react-router-dom";

const ProductComponent = (props) => {
  const { id, title, image, category, price } = props.product;

  return (
    <div className="four wide column">
      <Link to={`/products/${id}`}>
        <div className="ui link cards">
          <div className="card" style={{ height: "500px" }}>
            <div className="image" style={{ padding: "30px" }}>
              <img src={image} alt={title} style={{ height: "280px" }} />
            </div>
            <div className="content">
              <div className="header">{title}</div>
              <div className="discription">$ {price}</div>
            </div>
            <div className="extra content">
              <span className="center floated">{category}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductComponent;
