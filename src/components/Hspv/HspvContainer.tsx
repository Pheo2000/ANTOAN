import React, { useEffect, useState } from "react";
import { domain } from "../dangtuyendung/DangtuyendungContainer";
import Hspv from "./Hspv";

const HspvContainer: React.FC = () => {
  const [hspv, setHspv] = useState<any[]>([]);
  const handlerHsut = async () => {
    await fetch(`http://${domain}/api/listprofile/get?company=3&status=2`)
      .then(async (res) => await res.json())
      .then((data) => setHspv(data));
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
      .then((data) => setHspv(data));
  };

  const handlerCheck = async (idj: number, idu: number) => {
    const checkJob = {
      idJob: idj,
      idUser: idu,
      status: 3,
    };
    await fetch(`http://${domain}/api/listprofile/status`, {
      method: "POST",
      body: JSON.stringify(checkJob),
      headers: { "Content-Type": "application/json" },
    });
    await fetch(`http://${domain}/api/listprofile/get?company=3&status=1`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then(async (res) => await res.json())
      .then((data) => setHspv(data));
  };
  useEffect(() => {
    handlerHsut();
  }, []);

  return (
    <Hspv handlerCheck={handlerCheck} hspv={hspv} handlerClose={handlerClose} />
  );
};
export default HspvContainer;
