import type { ContainerProps } from "./Container.types";

const Container = ({
  children,
  className = "",
}: ContainerProps) => {
  return (
    <div
      className={`mx-auto w-full max-w-7xl px-7 sm:px-7 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;