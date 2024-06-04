import React, { useEffect, useState } from "react";
import TypeDecor from "./TypeDecor";
import {uploadFile} from '../../utils/index'


const TypeDecorContainer: React.FC = () => {
  const host = "http://localhost:8080"
  const tokenString = localStorage.getItem("store")
  const token = JSON.parse(tokenString as string).token;

  const [typeDecor, setTypeDecor] = useState<any[]>([]);
  const [itemEdit, setItemEdit] = useState<any>({});

  const [confirmOpen, setConfirmOpen] = useState<boolean>(false);
  const [confirmEdit, setConfirmEdit] = useState<boolean>(false);
  const [addConfirm, setAddconfirm] = useState<boolean>(false);
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
      ...itemEdit,
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
      ...itemEdit,
      name: NameType,
      status: 1,
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
    setItemEdit({})
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
  
  const changeImage = async (event: any) => {
     const file = event.target.files[0]
     const res = await uploadFile(file)
     console.log("res", res)
    //  @ts-ignore
     setItemEdit({...itemEdit, image: res.path})
  }
  useEffect(() => {
    handlerGetTypeDecor();
    console.log("typeDecor", itemEdit)
  }, []);


  // @ts-ignore
  const handleInput = (event) => {
    setItemEdit({...itemEdit, [event.target.name]: [event.target.value]})
  }


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
    // @ts-ignore
    handleInput={handleInput}
  />;
};

export default TypeDecorContainer;
