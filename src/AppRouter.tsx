import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Pages/Home";
import { Footer } from "./Layouts/Footer";
import { Header } from "./Layouts/Header";

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
};

AppRouter.propTypes = {};

export default AppRouter;
