import CssBaseline from "@mui/material/CssBaseline";
import NavBar from "./components/navbar";
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import HomePage from "./components/home-page/home-page";
import PlayerPage from "./components/player-page";


const NotFound = () =>{
  return (
    <div className="notFoundPage">
      <h2>404! Page Not Found</h2>
    </div>
  );
}

function App() {

  return (
    <BrowserRouter>
      <CssBaseline />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/player/:playlistId"
          element={<PlayerPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
