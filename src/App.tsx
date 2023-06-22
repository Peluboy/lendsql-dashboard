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
            colorPrimary: "#39cdcc",
          },
        }}
      >
        <DashboardLayout />
      </ConfigProvider>
    </>
  );
}

export default App;
