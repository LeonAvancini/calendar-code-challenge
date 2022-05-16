import "./../assets/scss/App.scss";
import { QueryClient, QueryClientProvider } from "react-query";

import Home from "./Pages/Home";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
};

export default App;
