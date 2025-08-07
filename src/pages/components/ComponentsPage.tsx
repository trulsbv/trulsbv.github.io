import { Outlet } from "react-router-dom";
import { ComponentsIndex } from "../../components/ComponentsIndex";

export const ComponentsPage = () => {
  return (
    <>
      <ComponentsIndex />
      <Outlet />
    </>
  );
};
