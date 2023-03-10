import React, { useEffect, useState } from "react";
import Dangtuyendung from "./Dantuyendung";

export const domain: string = "58.186.255.94:8080";

var idLogin: any;
const DangtuyedungContainer: React.VFC = () => {
  const [listTd, setListTd] = useState<any[]>([]);

  const [itemEdit, setItemEdit] = useState<any>({});

  const [confirmOpen, setConfirmOpen] = useState<boolean>(false);
  const [confirmEdit, setConfirmEdit] = useState<boolean>(false);
  const [addConfirm, setAddconfirm] = useState<boolean>(false);

  const handlerTuyenDung = async () => {
    let abc = idLogin?.id ?? 1;
    const url = `http://${domain}/api/listjobs/active/${abc}`;
    await fetch(url)
      .then(async (res) => await res.json())
      .then((data) => setListTd(data));
  };

  const handlerXoa = async (id: any) => {
    await fetch(`http://${domain}/api/listjobs/${id}`, {
      method: "DELETE",
    });

    await fetch(`http://${domain}/api/listjobs/active/1`)
      .then(async (res) => await res.json())
      .then((data) => setListTd(data));
  };

  const onCloseConfirm = () => {
    setConfirmOpen(!confirmOpen);
  };
  //  ấn nút ok
  const onExecutionConfirm = async (id: any) => {
    console.log("id", id);
    setConfirmOpen(!confirmOpen);
    await fetch(`http://${domain}/api/listjobs/${id}`, {
      method: "DELETE",
    });

    await fetch(`http://${domain}/api/listjobs/active/1`)
      .then(async (res) => await res.json())
      .then((data) => setListTd(data));
  };

  const handlerEditCancel = () => {
    setConfirmEdit(!confirmEdit);
  };

  const handlerEdit = async (id: any) => {
    setConfirmEdit(!confirmEdit);
    await fetch(`http://${domain}/api/listjobs/${id}`)
      .then(async (res) => await res.json())
      .then((data) => setItemEdit(data));
  };

  const handlerEditOK = async (id: number) => {
    const namei = (document.querySelector(".input-getname") as HTMLInputElement)
      .value;
    const slti = (document.querySelector(".input-getslt") as HTMLInputElement)
      .value;
    const agei = (document.querySelector(".input-getage") as HTMLInputElement)
      .value;
    const exi = (document.querySelector(".input-getex") as HTMLInputElement)
      .value;
    const adi = (document.querySelector(".input-getad") as HTMLInputElement)
      .value;
    const htdi = (document.querySelector(".input-gethtd") as HTMLInputElement)
      .value;
    const dataFormInput = {
      name: namei,
      quantity: slti,
      sex: true,
      age: agei,
      experence: exi,
      workAddress: adi,
      dateExpiration: htdi,
    };
    await fetch(`http://${domain}/api/listjobs/update/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataFormInput),
    }).then(async (res) => await res.json());

    await fetch(`http://${domain}/api/listjobs/active/1`)
      .then(async (res) => await res.json())
      .then((data) => setListTd(data));

    setConfirmEdit(!confirmEdit);
  };
  useEffect(() => {
    handlerTuyenDung();
    idLogin = JSON.parse(localStorage.getItem("store") as any);
  }, []);

  const handlerAdd = () => {
    setAddconfirm(!addConfirm);
  };

  const handlerAddCancel = () => {
    setAddconfirm(false);
  };

  const handlerAddOK = async () => {
    setAddconfirm(!addConfirm);
    const nameadd = (document.querySelector(".nameadd") as HTMLInputElement)
      .value;
    const sltadd = (document.querySelector(".stladd") as HTMLInputElement)
      .value;
    const ageadd = (document.querySelector(".ageadd") as HTMLInputElement)
      .value;
    const exadd = (document.querySelector(".exadd") as HTMLInputElement).value;
    const adradd = (document.querySelector(".adradd") as HTMLInputElement)
      .value;
    const htdadd = (document.querySelector(".htdadd") as HTMLInputElement)
      .value;
    const luongadd = (document.querySelector(".luongadd") as HTMLInputElement)
      .value;
    const formAdd = {
      company: {
        id: 1,
      },
      name: nameadd,
      salary: luongadd,
      quantity: sltadd,
      sex: true,
      age: ageadd,
      experence: exadd,
      workAddress: adradd,
      dateExpiration: htdadd,
    };

    await fetch(`http://${domain}/api/listjobs/save`, {
      method: "POST",
      body: JSON.stringify(formAdd),
      headers: { "Content-Type": "application/json" },
    });

    let abc = idLogin?.id ?? 1;
    const url = `http://${domain}/api/listjobs/active/${abc}`;
    await fetch(url)
      .then(async (res) => await res.json())
      .then((data) => setListTd(data));
  };
  return (
    <div>
      <Dangtuyendung
        listTd={listTd}
        handlerXoa={handlerXoa}
        onCloseConfirm={onCloseConfirm}
        onExecutionConfirm={onExecutionConfirm}
        handlerEdit={handlerEdit}
        handlerEditCancel={handlerEditCancel}
        handlerEditOK={handlerEditOK}
        confirmOpen={confirmOpen}
        confirmEdit={confirmEdit}
        itemEdit={itemEdit}
        addConfirm={addConfirm}
        handlerAdd={handlerAdd}
        handlerAddCancel={handlerAddCancel}
        handlerAddOK={handlerAddOK}
      />
    </div>
  );
};

export default DangtuyedungContainer;
