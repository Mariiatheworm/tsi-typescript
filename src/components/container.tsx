import { ReactNode } from "react";

const Container = ({ children }:{children: ReactNode}) => {
  return <div className="p-4 bg-amber-300 px-[300px]">{children}</div>;
};

export default Container;
