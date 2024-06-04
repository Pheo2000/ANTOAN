import React, { useEffect, useState } from "react";
import UserPage from "./user";

const userContainer: React.VFC = () => {
  const host = "http://localhost:8080"
  const tokenString = localStorage.getItem("store")
  const token = JSON.parse(tokenString as string).token;

  const [listuser, setListUser] = useState<any[]>([]);
  const [itemEdit, setItemEdit] = useState<any>({});

  const [confirmOpen, setConfirmOpen] = useState<boolean>(false);
  const [confirmEdit, setConfirmEdit] = useState<boolean>(false);
  const [addConfirm, setAddconfirm] = useState<boolean>(false);

  const handlerGetListUser = async () => {
    const url = `${host}/api/nguoi-dung/get/page?sort=id`;
    await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(async data => await data.json())
      .then(data => {
        setListUser(data.content)
      })
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
    setItemEdit({})

  };

  const handlerEdit = async (id: any) => {
    setConfirmEdit(!confirmEdit);
    await fetch(`${host}/api/nguoi-dung/get/${id}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(async (res) => await res.json())
      .then((data) => setItemEdit(data.data[0]));
    // .then((data) => console.log("data", data.data));
  };


  const handlerEditOK = async (id: number) => {
    const fullName = (document.querySelector(".input-getname") as HTMLInputElement)
      .value;
    const phone = (document.querySelector(".input-getPhone") as HTMLInputElement)
      .value;
    const address = (document.querySelector(".input-adr") as HTMLInputElement)
      .value;

    const gioiTinh = (document.getElementById("mySelect") as HTMLInputElement).value

    const dataFormInput = {
      fullName: fullName,
      gioiTinh: gioiTinh === "Nam" ? true : gioiTinh === "Nữ" ? false : "",
      address: address,
      sdt: phone
    };

    await fetch(`${host}/api/nguoi-dung/put/${id}`, {
      method: "PUT",
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataFormInput),
    })


    await fetch(`${host}/api/nguoi-dung/get/page?sort=id`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(async data => await data.json())
      .then(data => setListUser(data.content))
    setConfirmEdit(!confirmEdit);
    setItemEdit({})
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
        confirmOpen={confirmOpen}
        confirmEdit={confirmEdit}
        itemEdit={itemEdit}
        addConfirm={addConfirm}
        handlerXoa={handlerXoa}
        onCloseConfirm={onCloseConfirm}
        onExecutionConfirm={onExecutionConfirm}
        handlerEdit={handlerEdit}
        handlerEditCancel={handlerEditCancel}
        handlerEditOK={handlerEditOK}
        handlerAdd={handlerAdd}
        handlerAddCancel={handlerAddCancel}
        handlerAddOK={handlerAddOK}
      />
    </div>
  );
};

export default userContainer;
