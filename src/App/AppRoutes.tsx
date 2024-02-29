import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DeviceListPage } from "@/App/DeviceList/DeviceListPage.tsx";
import { DevicePage } from "@/App/Device/DevicePage.tsx";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DeviceListPage />} />
        <Route path="/device/:id" element={<DevicePage />} />{" "}
      </Routes>
    </BrowserRouter>
  );
}
