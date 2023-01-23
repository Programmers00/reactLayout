// router
import { BrowserRouter as Router} from "react-router-dom";
// layout
import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";
import { Content } from "./layout/Content";

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
      </Router>
    </div>
  );
}
export default App;