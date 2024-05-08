import React, { useEffect, useState } from "react";
import Bill from "./Bill";

const BillContainer: React.FC = () => {
  const host = "http://144.126.136.135:8085"
  const tokenString = localStorage.getItem("store")
  const token = JSON.parse(tokenString as string).token;


  const [billList, setBillList] = useState<any[]>([]);
  const handlerGetBill = async () => {
    const url = `${host}/api/bill/get/page?sort=id`;
    await fetch(url, {  
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(async data => await data.json())
      .then(data => setBillList(data.content))
      // .then(data => console.log("data", data))
  };

  useEffect(() => {
    handlerGetBill();
  }, []);
  return <Bill billList={billList} />;
};

export default BillContainer;
