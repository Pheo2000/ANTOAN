import React from "react";
import { Example as ExampleModel } from "@/domain/models/Example/Example";
import Example from "@/components/Example/Example";

interface ExampleContainerProps {
  data: ExampleModel[];
}

const ExampleContainer: React.VFC<ExampleContainerProps> = ({ data }) => {
  return <Example data={data} />;
};

export default ExampleContainer;
