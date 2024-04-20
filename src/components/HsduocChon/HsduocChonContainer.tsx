import React, { useEffect, useState } from "react";
import { domain } from "../User/user";
import HsduocChon from "./HsduocChon";
const HsduocChonContainer: React.FC = () => {
  const [hsdc, setHdc] = useState<any[]>([]);
  const handlerHsut = async () => {
    await fetch(`http://${domain}/api/listprofile/get?company=3&status=3`)
      .then(async (res) => await res.json())
      .then((data) => setHdc(data));
  };

  const handlerClose = async (idj: number, idu: number) => {
    const closeJob = {
      idJob: idj,
      idUser: idu,
      status: 4,
    };
    await fetch(`http://${domain}/api/listprofile/status`, {
      method: "POST",
      body: JSON.stringify(closeJob),
      headers: { "Content-Type": "application/json" },
    });
    await fetch(`http://${domain}/api/listprofile/get?company=3&status=1`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then(async (res) => await res.json())
      .then((data) => setHdc(data));
  };

  useEffect(() => {
    handlerHsut();
  }, []);

  return <HsduocChon hsdc={hsdc} />;
};

export default HsduocChonContainer;
