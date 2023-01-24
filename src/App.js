// router
import { BrowserRouter as Router } from "react-router-dom";
// layout
import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";
import { Content } from "./layout/Content";
// css
import styles from "./app.module.scss";

function App() {
  return (
    <div className={styles.appMain}>
      <Router>
        <Header></Header>
        <Content></Content>
      </Router>
      <Footer></Footer>
    </div>
  );
}
export default App;
