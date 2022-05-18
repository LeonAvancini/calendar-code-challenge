import "./../assets/scss/App.scss";
import { QueryClient, QueryClientProvider } from "react-query";

import AppRouter from "../AppRouter";

const queryClient = new QueryClient();

const App = () => {
  return (
    <div className="app">
      <QueryClientProvider client={queryClient}>
        <AppRouter />
      </QueryClientProvider>
    </div>
  );
};

export default App;
