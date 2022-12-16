import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar";
import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MovieDetails from "./pages/MovieDetails";
const App = () => {
  const clinet = new QueryClient();
  return (
    <QueryClientProvider client={clinet}>
      <div>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
};

export default App;
