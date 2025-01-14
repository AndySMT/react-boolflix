import Header from "./components/Header";
import Main from "./components/Main";
import { GlobalProvider } from "./context/GlobalContext";

function App() {
  return (
    <>
      <GlobalProvider>
        <Header></Header>
        <Main></Main>
      </GlobalProvider>
    </>
  );
}

export default App;
