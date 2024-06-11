import { MyMoodProvider } from "./CurrentMood";
import NavBar from "./Navbar";
import AppRoutes from "./Routes/Routes";

function App() {
  return (
    <>
      <MyMoodProvider>
        <NavBar></NavBar>
        <AppRoutes />
      </MyMoodProvider>
    </>
  );
}

export default App;
