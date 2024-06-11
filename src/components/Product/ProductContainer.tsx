import React, { useEffect, useState } from "react";
import Product from "./Product";
import { uploadFile } from "@/utils";


const ProductContainer: React.FC = () => {

  const host = "http://localhost:8080"

  const tokenString = localStorage.getItem("store")
  const token = JSON.parse(tokenString as string).token;

  const [ProductList, setProductList] = useState<any[]>([]);
  const [confirmEdit, setConfirmEdit] = useState<boolean>(false);
  const [itemEdit, setItemEdit] = useState<any>({});
  const [addConfirm, setAddconfirm] = useState<boolean>(false);
  const [valueText, setValueText] = useState("")
  const [optionType, setOptionType] = useState<any>([])

  const handlerGetProduct = async () => {
    const url = `${host}/api/decor/get/page?sort=id`;
    await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(async data => await data.json())
      .then(data => setProductList(data.content))
  };

  const handlerEdit = async (id: any) => {
    setConfirmEdit(!confirmEdit);
    await fetch(`${host}/api/decor/get/${id}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(async (res) => await res.json())
      .then((data) => setItemEdit(data));
  };

  const handlerEditCancel = () => {
    setConfirmEdit(!confirmEdit);
    setItemEdit({})
  };

  const handlerAdd = async () => {
    setAddconfirm(!addConfirm);
    await fetch(`${host}/api/decor-type/get/page`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(async data => await data.json())
      .then(data => setOptionType(data.content))
  };

  const hanlderSeqarch = async (data: string) => {

    await fetch(`${host}/api/decor/get/page?sort=id&filter=name~'*${data}*'`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(async data => await data.json())
      .then(data => setProductList(data.content))
    // .then(data => console.log("data", data))
  };


  const handlerAddCancel = () => {
    setAddconfirm(false);
  };


  const handleInput = (event: any) => {
    setItemEdit({ ...itemEdit, [event.target.name]: [event.target.value] })
  }

  const changeImage = async (event: any) => {
    const file = event.target.files[0]
    const res = await uploadFile(file)

    console.log("res", res)
    //  @ts-ignore
    setItemEdit({ ...itemEdit, image: res.path })
  }

  const handlerEditOK = async (id: number) => {
    const NameType = (document.querySelector(".input-getname") as HTMLInputElement)
      .value;
    const des = (document.querySelector(".input-des") as HTMLInputElement)
      .value;
    const price = (document.querySelector(".input-price") as HTMLInputElement)
      .value;
    const quantity = (document.querySelector(".input-quantity") as HTMLInputElement)
      .value;


    const dataForm = {
      ...itemEdit,
      name: NameType,
      descriptionDecor: des,
      price: price,
      quantity: quantity,
      status: 1
    }


    await fetch(`${host}/api/decor/put/${id}`, {
      method: "PUT",
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataForm),
    })


    await fetch(`${host}/api/decor/get/page?sort=id`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(async data => await data.json())
      .then(data => setProductList(data.content))

    setConfirmEdit(!confirmEdit);
    setItemEdit({})


  }

  const handlerAddOK = async () => {
    const NameType = (document.querySelector(".input-getname") as HTMLInputElement)
      .value;
    const des = (document.querySelector(".input-des") as HTMLInputElement)
      .value;
    const price = (document.querySelector(".input-price") as HTMLInputElement)
      .value;
    const quantity = (document.querySelector(".input-quantity") as HTMLInputElement)
      .value;
    const idDecorType = (document.getElementById("mySelect") as HTMLInputElement).value


    const dataForm = {
      ...itemEdit,
      name: NameType,
      idDecorType: idDecorType,
      descriptionDecor: des,
      price: price,
      image: itemEdit.image,
      quantity: quantity,
      status: 1
    } 

    if (dataForm.name == "" &&
      dataForm.descriptionDecor == "" &&
      dataForm.price == "" &&
      dataForm.quantity == "" &&
      dataForm.idDecorType != 0
    ){
      return
    }


      await fetch(`${host}/api/decor/post`, {
        method: "POST",
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataForm),
      })

    await fetch(`${host}/api/decor/get/page?sort=id`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(async data => await data.json())
      .then(data => setProductList(data.content))
    setAddconfirm(!addConfirm);

  }
  useEffect(() => {
    handlerGetProduct();
  }, []);

  return <Product
    ProductList={ProductList}
    valueText={valueText}
    itemEdit={itemEdit}
    confirmEdit={confirmEdit}
    addConfirm={addConfirm}

    optionType={optionType}
    handlerEdit={handlerEdit}
    handlerEditCancel={handlerEditCancel}
    handlerAdd={handlerAdd}
    handlerAddOK={handlerAddOK}
    handlerAddCancel={handlerAddCancel}
    hanlderSeqarch={hanlderSeqarch}
    setValueText={setValueText}
    handleInput={handleInput}
    // @ts-ignore
    changeImage={changeImage}
    handlerEditOK={handlerEditOK}

  />;
};

export default ProductContainer;
