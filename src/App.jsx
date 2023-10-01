import CssBaseline from "@mui/material/CssBaseline";
import NavBar from "./components/navbar";
import { Container, Typography } from "@mui/material";
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import HomePage from "./components/home-page/home-page";
import PlayerPage from "./components/player-page";


const NotFound = () =>{
  return (
    <Container maxWidth="md" sx={{ my: 16 }}>
      <Typography align="center" variant="h2">404! Page Not Found</Typography>
    </Container>
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
