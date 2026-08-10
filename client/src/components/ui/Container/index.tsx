import type { ContainerProps } from './Container.types';

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
      {children}
    </div>
  );
};

export default Container;