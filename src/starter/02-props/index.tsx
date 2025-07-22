import { type PropsWithChildren } from "react";

// interface ComponentProps {
//   name: string;
//   id: number;
//   children?: React.ReactNode;
// }
interface ComponentProps extends PropsWithChildren {
  name: string;
  id: number;
}

function Component({ name, id, children }: ComponentProps) {
  return (
    <div>
      <h2>Name: {name}</h2>
      <h2>Id: {id}</h2>
      {children && <div>{children}</div>}
    </div>
  );
}
export default Component;
