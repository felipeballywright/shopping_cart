import { Outlet } from "react-router";
import { Link } from "react-router";

const App = () => {
  return (
    <div>
      <h1>THIS IT THE MAIN PAGE</h1>
      <Link></Link>
      <nav>
        <ul>
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>Shop</Link>
          </li>
          <li>
            <Link>Cart</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default App;