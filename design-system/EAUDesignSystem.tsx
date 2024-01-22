import React, { ReactNode } from 'react';
import "./eds.css";

interface EDSProps {
  children: ReactNode;
}

const EAUDesignSystem: React.FC<EDSProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default EAUDesignSystem;
