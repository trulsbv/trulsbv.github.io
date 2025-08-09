import React from "react";

export const CenteredContainer = ({ children }: React.PropsWithChildren) => (
  <div
    style={{
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    }}
  >
    {children}
  </div>
);

export default CenteredContainer;
