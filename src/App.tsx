import { Provider } from "react-redux";
import { QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";

import { store } from "@/redux/config/store.ts";
import { queryClient } from "@/async-state/reactQuery";
import { theme } from "@/themes";
import Routes from "@/routes/Routes";

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
