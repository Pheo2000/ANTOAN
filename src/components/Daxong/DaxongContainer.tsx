import React, { useEffect, useState } from "react";
import { domain } from "../User/user";
import Daxong from "./Daxong";

const DaxongContainer: React.FC = () => {
  const [daxongList, setDaxong] = useState<any[]>([]);
  const handlerDaxong = async () => {
    await fetch(`http://${domain}/api/listjobs/done/3`)
      .then(async (res) => await res.json())
      .then((data) => setDaxong(data));
  };

  useEffect(() => {
    handlerDaxong();
  }, []);
  return <Daxong daxongList={daxongList} />;
};

export default DaxongContainer;
