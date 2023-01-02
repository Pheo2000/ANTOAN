import React, { useEffect, useState } from "react";
import { domain } from "../dangtuyendung/DangtuyendungContainer";
import HstuChoi from "./HstuChoi";

const HsTuChoiContainer: React.FC = () => {
  const [hstc, setHstc] = useState<any[]>([]);
  const handlerHsut = async () => {
    await fetch(`http://${domain}/api/listprofile/get?company=3&status=4`)
      .then(async (res) => await res.json())
      .then((data) => setHstc(data));
  };
  useEffect(() => {
    handlerHsut();
  }, []);

  return <HstuChoi hstc={hstc} />;
};
export default HsTuChoiContainer;
