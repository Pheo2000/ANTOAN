import React, { useEffect, useState } from "react";
import Bill from "./Bill";



const BillContainer: React.FC = () => {
  const host = "http://localhost:8080"
  const tokenString = localStorage.getItem("store")
  const token = JSON.parse(tokenString as string).token;


  const [billList, setBillList] = useState<any[]>([]);
  const [valueText, setValueText] = useState("")

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
  }

    // Dang loi
    const hanlderSeqarch = async (data: string) => {

      await fetch(`${host}/api/bill/get/page?sort=id&filter=name~'*${data}*'`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })
        .then(async data => await data.json())
        // .then(data => setBillList(data.content))
      .then(data => console.log("data", data))
    };
  useEffect(() => {
    handlerGetBill();
  }, []);
  return <Bill billList={billList}
    setValueText={setValueText}
    valueText={valueText}
    hanlderSeqarch={hanlderSeqarch}

  />;
};

export default BillContainer;
