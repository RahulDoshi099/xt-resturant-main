import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import "./index.css";
import "./App.css";
import { useSelector } from "react-redux";
import { RootState } from "./state/store";
import Header from "./components/Header/Header";
import CartSidebar from "./features/Cart/components/CartSidebar/CartSidebar";
import Footer from "./components/Footer/Footer";
import HomePage from "./features/Home/HomePage";
import ContactPage from "./features/About/Pages/ContactPage";
import Menu from "./features/Menu/pages/Menu";
import NoMatch from "./components/NoMatch/NoMatch";

function Layout() {
  const iscartOpen = useSelector((state: RootState) => state.cart.isCartOpen);

  return (
    <div className="layout">
      <Header />
      <main>
        {iscartOpen && <CartSidebar />}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default function HomeApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="menu" element={<Menu />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </Router>
  );
}
