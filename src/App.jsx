import { Outlet, useParams } from "react-router";
import { Link } from "react-router";
import Home from "./Home";
import Shop from "./Shop";
import Cart from "./Shopping_cart";

const App = () => {
  const { section } = useParams();

  return (
    <>
      <h1>THIS IT THE MAIN PAGE</h1>
      <div>
        <nav>
          <ul>
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link to="shop">Shop</Link>
            </li>
            <li>
              <Link>Cart</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        {section === "shop" ? (
          <Shop/>
        ) : section === "cart" ? (
          <Cart/>
        ) : (
          <Home/>
        )}
      </div>
    </>
  )
}

export default App;