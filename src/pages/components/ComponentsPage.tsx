import { Outlet } from "react-router-dom";
import { ComponentsGrid } from "../../components/ComponentsGrid";

export const ComponentsPage = () => {
  return (
    <>
      <ComponentsGrid />
      <Outlet />
    </>
  );
};
