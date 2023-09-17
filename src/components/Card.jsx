const Card = ({ title, price, description }) => {
  return (
    <div className="product">
      <div className="product-cart">
        <p>{title}</p>
        <p>{description}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default Card;
