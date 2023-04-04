import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { CompleteOrderPage } from "./CompleteOrder";
import { DefaultLayout } from "./DefaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/completeOrder" element={<CompleteOrderPage />} /> 
      </Route>
    </Routes>
  )
}