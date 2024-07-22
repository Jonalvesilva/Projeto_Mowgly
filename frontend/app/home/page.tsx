"use client";
import Dashboard from "../components/Dashboard";
import { children } from "../constants/dashboardElements";

export default function Home() {
  return (
    <>
      <Dashboard item={children} />
    </>
  );
}
