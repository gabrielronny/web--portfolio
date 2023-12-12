import React from "react";
import { BrowserRouter, Route, Routes, Redirect } from "react-router-dom";

// Pages
import Home from "./Pages/Home/Home";
import NotFoundPage from "./Pages/NotFound/NotFoundPage";

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="*" component={NotFoundPage} />
      </Routes>
    </BrowserRouter>
  );
}
