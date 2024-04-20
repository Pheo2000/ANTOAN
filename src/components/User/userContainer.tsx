import React, { useEffect, useState } from "react";
import UserPage from "./user";

const userContainer: React.VFC = () => {
  const [listuser, setListUser] = useState<any[]>([]);

  const [itemEdit, setItemEdit] = useState<any>({});

  const [confirmOpen, setConfirmOpen] = useState<boolean>(false);
  const [confirmEdit, setConfirmEdit] = useState<boolean>(false);
  const [addConfirm, setAddconfirm] = useState<boolean>(false);

  const handlerGetListUser = async () => {
    const url = `http://localhost:8080/api/nguoi-dung/get/page`;
    await fetch(url)
      .then(async (res) => await res.json())
      .then(data=> setListUser(data.content))
  };

  const handlerXoa = async (id: any) => {
  };

  const onCloseConfirm = () => {
    setConfirmOpen(!confirmOpen);
  };

  const onExecutionConfirm = async (id: any) => {
    setConfirmOpen(!confirmOpen);
    // await fetch(`http://${domain}/api/listjobs/${id}`, {
    //   method: "DELETE",
    // });

  };

  const handlerEditCancel = () => {
    setConfirmEdit(!confirmEdit);
  };

  const handlerEdit = async (id: any) => {
    setConfirmEdit(!confirmEdit);
    await fetch(`http://localhost:8080/api/nguoi-dung/get/${id}`)
      .then(async (res) => await res.json())
      .then((data) => setItemEdit(data.result));
  };

  const handlerEditOK = async (id: number) => {
    const fullname = (document.querySelector(".input-getname") as HTMLInputElement)
      .value;
    const email = (document.querySelector(".input-email") as HTMLInputElement)
      .value;
    const phone = (document.querySelector(".input-getPhone") as HTMLInputElement)
      .value;
    const adress = (document.querySelector(".input-adr") as HTMLInputElement)
      .value;
    // const dataFormInput = {
    //   name: namei,
    //   quantity: slti,
    //   sex: true,
    //   age: agei,
    //   experence: exi,
    //   workAddress: adi,
    //   dateExpiration: htdi,
    // };
    // await fetch(`http://${domain}/api/listjobs/update/${id}`, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(dataFormInput),
    // }).then(async (res) => await res.json());

    // await fetch(`http://${domain}/api/listjobs/active/1`)
    //   .then(async (res) => await res.json())

    setConfirmEdit(!confirmEdit);
  };
  useEffect(() => {
    handlerGetListUser();
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

    // await fetch(`http://${domain}/api/listjobs/save`, {
    //   method: "POST",
    //   body: JSON.stringify(formAdd),
    //   headers: { "Content-Type": "application/json" },
    // });

    // let abc = idLogin?.id ?? 1;
    // const url = `http://${domain}/api/listjobs/active/${abc}`;
    // await fetch(url)
    //   .then(async (res) => await res.json())
    //   .then((data) => setListTd(data));
  };
  return (
    <div>
      <UserPage
        listuser={listuser}
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

export default userContainer;
