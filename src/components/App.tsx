import "./../assets/scss/App.scss";
import { QueryClient, QueryClientProvider } from "react-query";

import AppRouter from "../AppRouter";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
    </QueryClientProvider>
  );
};

export default App;
