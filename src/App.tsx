import { Provider } from "react-redux";

import { store } from "@/redux/config/store.ts";
import Routes from "@/routes/Routes";

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
