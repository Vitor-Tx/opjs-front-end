import { GlobalStyles } from "./styles/GlobalStyles";
import { Header } from "./components/Header/index";
import { Orders } from "./components/Orders/index";

export function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Orders />
    </>
  );
}
