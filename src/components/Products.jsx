import { useGlobalContext } from "./Context";
import Card from "./Card";
import Input from "./Input";
const Products = () => {
  const { data, setData, loading, wrongPassword } = useGlobalContext();

  return (
    <div className="container">
      <Input />

      <div id="product">
        {!loading && !wrongPassword
          ? data.map((product) => (
              <div className="details" key={product.id}>
                <img src={product.image} alt="" className="details-img" />
                <div className="content">
                  <div className="row">
                    <h2>{product.title}</h2>
                    <span>${product.price}$</span>
                  </div>
                  <p>{product.description}</p>
                  <p>{product.content}</p>
                  <div className="amount">
                    <span>{product.rating.rate}</span>
                  </div>
                </div>
                {/* <div className="delete">
              <button onClick={() => removeProduct(product.id)}>X</button>
            </div> */}
              </div>
            ))
          : wrongPassword
          ? "Parol noto'g'ri"
          : "Loading..."}
      </div>
    </div>
  );
};

export default Products;
