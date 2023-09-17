import { useGlobalContext } from "./Context";

const Navbar = () => {
  const { data } = useGlobalContext();
  return (
    <header>
      <nav className="container">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Settigs</li>
        </ul>
        <p>All product {data.length}</p>
      </nav>
    </header>
  );
};

export default Navbar;
