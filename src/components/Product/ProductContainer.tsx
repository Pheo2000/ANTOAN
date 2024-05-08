import React, { useEffect, useState } from "react";
import Product from "./Product";


const PAGE_SIZE = 5;
const ProductContainer: React.FC = () => {

  const host = "http://144.126.136.135:8085"
  const tokenString = localStorage.getItem("store")
  const token = JSON.parse(tokenString as string).token;

  const [ProductList, setProductList] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [confirmEdit, setConfirmEdit] = useState<boolean>(false);
  const [itemEdit, setItemEdit] = useState<any>({});




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

  
  const start = (currentPage - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const totalPages = Math.ceil(ProductList.length / PAGE_SIZE);
  const currentItems = ProductList.slice(start, end);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
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
      .then((data) => console.log("data", data));
  };

  const handlerEditCancel = () => {
    setConfirmEdit(!confirmEdit);
    setItemEdit({})

  };
  useEffect(() => {
    handlerGetProduct();
  }, []);
  return <Product ProductList={ProductList} 
  handleNextPage={handleNextPage}
  handlePreviousPage={handlePreviousPage}
  currentPage={currentPage}
  totalPages={totalPages}
  itemEdit={itemEdit}
  confirmEdit={confirmEdit}
  handlerEdit={handlerEdit}
  handlerEditCancel={handlerEditCancel}

  />;
};

export default ProductContainer;
