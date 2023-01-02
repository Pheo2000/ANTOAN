import React from "react";
import { Example as ExampleModel } from "@/domain/models/Example/Example";

interface ExampleProps {
  data: ExampleModel[];
}

const Example: React.VFC<ExampleProps> = ({ data }) => {
  return (
    <>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </>
  );
};

export default Example;
