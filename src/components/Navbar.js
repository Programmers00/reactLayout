// router
import { Link } from "react-router-dom";
// css
import styles from "../style/components/navbar.module.scss";
export const Navbar = () => {
  return (
    <nav className={styles.navbarMainBox}>
      <ul>
        <Link to="/">
          <li>Content0</li>
        </Link>
        <Link to="/content1">
          <li>Contetn1</li>
        </Link>
        <Link to="/content2">
          <li>Content2</li>
        </Link>
      </ul>
    </nav>
  );
};
