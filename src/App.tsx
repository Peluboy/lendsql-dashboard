import React from "react";
import "./App.css";
import DashboardLayout from "./layout/DashboardLayout";
import { Button, ConfigProvider } from "antd";

function App() {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#000",
          },
        }}
      ></ConfigProvider>
      <div>
        <DashboardLayout />
      </div>
      <ConfigProvider />
    </>
  );
}

export default App;
