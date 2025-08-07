import { Link, Outlet } from "react-router-dom";
import { ROUTES } from "../../routes/types";

export const ComponentsPage = () => (
  <>
    <h1>Components</h1>
    <ul>
      <li>
        <Link to={ROUTES.COMPONENT_DETAIL.replace(":componentName", "modal")}>
          Modal
        </Link>
      </li>
      <li>
        <Link to={ROUTES.COMPONENT_DETAIL.replace(":componentName", "button")}>
          Button
        </Link>
      </li>
    </ul>
    <Outlet />
  </>
);
