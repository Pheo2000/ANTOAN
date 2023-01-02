import React, { useEffect, useState } from "react";
import { domain } from "../dangtuyendung/DangtuyendungContainer";
import Hethan from "./Hethan";

const HethanContainer: React.FC = () => {
  const [hethanList, setHethanList] = useState<any[]>([]);
  const handlerHethan = async () => {
    await fetch(`http://${domain}/api/listjobs/expired/3`)
      .then(async (res) => await res.json())
      .then((data) => setHethanList(data));
  };

  useEffect(() => {
    handlerHethan();
  }, []);
  return <Hethan hethanList={hethanList} />;
};

export default HethanContainer;
