import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MovieListPage } from "@/App/MovieList/MovieListPage.tsx";
import { MoviePage } from "@/App/Movie/MoviePage.tsx";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieListPage />} />
        <Route path="/movie/:id" element={<MoviePage />} />
      </Routes>
    </BrowserRouter>
  );
}
