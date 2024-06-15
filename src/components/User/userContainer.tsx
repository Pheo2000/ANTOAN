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
    await fetch(`${host}/api/nguoi-dung/del/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })


    const url = `${host}/api/nguoi-dung/get/page?sort=id`;
    await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(async data => await data.json())
      .then(data => setListUser(data.content))

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
    const email = (document.querySelector(".email") as HTMLInputElement)
      .value;
    const phone = (document.querySelector(".phone") as HTMLInputElement)
      .value;
    const adradd = (document.querySelector(".adress") as HTMLInputElement)
      .value;

    const password = (document.querySelector(".password") as HTMLInputElement)
      .value;

    const gioiTinh = (document.getElementById("mySelect") as HTMLInputElement).value


    const formAdd = {
      email: email,
      password: password,
      fullName: nameadd,
      gioiTinh: gioiTinh === "Nam" ? true : gioiTinh === "Nữ" ? false : "",
      address: adradd,
      sdt: phone,
      status: 1,
      avatar: '',
      role:1
    };

    await fetch(`${host}/api/nguoi-dung/create`, {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formAdd),
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
