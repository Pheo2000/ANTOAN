import React, { useEffect, useState } from "react";
import TypeDecor from "./TypeDecor";


const TypeDecorContainer: React.FC = () => {
  const host = "http://144.126.136.135:8085"
  const tokenString = localStorage.getItem("store")
  const token = JSON.parse(tokenString as string).token;

  const [typeDecor, setTypeDecor] = useState<any[]>([]);
  const [itemEdit, setItemEdit] = useState<any>({});

  const [confirmOpen, setConfirmOpen] = useState<boolean>(false);
  const [confirmEdit, setConfirmEdit] = useState<boolean>(false);
  const [addConfirm, setAddconfirm] = useState<boolean>(false);
  const [file, setFile] = useState("")
  const handlerGetTypeDecor = async () => {
    const url = `${host}/api/decor-type/get/page?sort=id`;
    await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(async data => await data.json())
      .then(data => setTypeDecor(data.content))
  };

  const handlerEditCancel = () => {
    setConfirmEdit(!confirmEdit);
    setItemEdit({})

  };

  const handlerEdit = async (id: any) => {
    setConfirmEdit(!confirmEdit);
    await fetch(`${host}/api/decor-type/get/${id}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(async (res) => await res.json())
      .then((data) => setItemEdit(data));
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
  const handlerAdd = () => {
    setAddconfirm(!addConfirm);
  };

  const handlerAddCancel = () => {
    setAddconfirm(false);
  };

  const handlerEditOK = async (id: number) => {
    const NameType = (document.querySelector(".input-getname") as HTMLInputElement)
      .value;
    const dataFormInput = {
      name: NameType,
      status: 1
    };

    await fetch(`${host}/api/decor-type/put/${id}`, {
      method: "PUT",
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataFormInput),
    })


    await fetch(`${host}/api/decor-type/get/page?sort=id`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(async data => await data.json())
      .then(data => setTypeDecor(data.content))

    setConfirmEdit(!confirmEdit);
    setItemEdit({})
  };
  const handlerAddOK = async () => {
    const NameType = (document.querySelector(".input-getname") as HTMLInputElement)
      .value;
    const dataFormInput = {
      name: NameType,
      status: 1,
      iamge: file
    };

    await fetch(`${host}/api/decor-type/post`, {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataFormInput),
    })


    await fetch(`${host}/api/decor-type/get/page?sort=id`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(async data => await data.json())
      .then(data => setTypeDecor(data.content))

    setAddconfirm(!addConfirm);
  };


  const handlerXoa = async (id: any) => {
    await fetch(`${host}/api/decor-type/del/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })


    const url = `${host}/api/decor-type/get/page?sort=id`;
    await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(async data => await data.json())
      .then(data => setTypeDecor(data.content))
  };
  
  const changeImage = (event: any) => {
    setFile(event.target.files[0].name)
  }
  useEffect(() => {
    handlerGetTypeDecor();
    console.log("file", file)
  }, []);


  return <TypeDecor
    typeDecor={typeDecor}
    confirmOpen={confirmOpen}
    itemEdit={itemEdit}
    confirmEdit={confirmEdit}
    addConfirm={addConfirm}
    handlerXoa={handlerXoa}
    handlerAddOK={handlerAddOK}
    onExecutionConfirm={onExecutionConfirm}
    onCloseConfirm={onCloseConfirm}
    handlerAdd={handlerAdd}
    handlerAddCancel={handlerAddCancel}
    handlerEditCancel={handlerEditCancel}
    handlerEdit={handlerEdit}
    handlerEditOK={handlerEditOK}
    changeImage={changeImage}
  />;
};

export default TypeDecorContainer;
