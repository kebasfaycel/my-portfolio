import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Particles from "./components/Particles";
import { Alert, Snackbar } from "@mui/material";
import Mysnackbar from "./components/Mysnackbar";
import SnackProvider from "./contexts/SnackbarContext";
function App() {
  return (
    <>
      <SnackProvider>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </SnackProvider>
    </>
  );
}

export default App;
