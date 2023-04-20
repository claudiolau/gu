import { FC, ComponentType } from "react";

type Props = {
  childComponent: ComponentType<any>;
};

const ParentComponent: FC<Props> = ({ childComponent: ChildComponent }) => {
  return (
    <div className="flex items-center justify-center pt-8">
      <ChildComponent />
    </div>
  );
};

export default ParentComponent;
