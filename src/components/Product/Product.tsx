import React from "react";
import Image from "next/image";

export interface Iproduct {
  ProductList: any[];
  handleNextPage: () => void;
  handlePreviousPage: () => void;
  currentPage: number;
  totalPages: number;
  handlerEdit: (id: number) => void;
  handlerEditCancel: () => void;
  confirmEdit: boolean;
  itemEdit: any
}
const Product: React.FC<Iproduct> = ({ ProductList, currentPage, totalPages,
  handlePreviousPage, handleNextPage, handlerEdit, confirmEdit,
  handlerEditCancel, itemEdit
}) => {
  const urlImage = "http://144.126.136.135/BTL/file/"
  return (
    <div>
      <div className="mb-10 px-4">
        <h1 className="text-2xl font-medium">Quản lý Sản Phẩm </h1>
        <div className="mt-2 w-full p-1 border-black border flex rounded">
          <input type="text" className="w-full" placeholder="value text......" />
          <button className="ml-3 bg-blue-400 p-2  rounded"> search</button>
        </div>
        <section className="w-full py-6 h-[600px] overflow-y-auto">
          <table className="border-collapse border border-black overflow-y-auto w-full min-h-screen">
            <thead>
              <tr className="text-left  border-b border-black">
                <th className="p-2 border-r border-black">ID</th>
                <th className="p-2 border-r border-black"> Name</th>
                <th className="p-2 border-r border-black">Image </th>
                <th className="p-2 border-r border-black">Mô tả</th>
                <th className="p-2 border-r border-black">Giá </th>
                <th className="p-2 border-r border-black">Số lượng </th>

              </tr>
            </thead>

            <tbody>
              {ProductList.map((info, index) => {
                return (
                  <tr key={index} className=" border-b border-black">
                    <td className="p-2 border-r border-black">{info.id}</td>
                    <td className="p-2 border-r border-black">{info.name} </td>
                    <td className="p-2 border-r border-black">
                      <Image
                        height="40"
                        width="40"
                        src={`${urlImage}${info.image}`}
                        className=" absolute rounded-full"
                        alt=""
                      />
                    </td>
                    <td className="p-2 border-r border-black">{info.descriptionDecor}</td>
                    <td className="p-2 border-r border-black">{info.price}</td>
                    <td className="p-2 border-r border-black">{info.quantity}</td>
                    <td className="p-2 border-r border-black">
                      <button className="flex">
                        <i
                          onClick={() => handlerEdit(info.id)}
                          className="fa-solid fa-pen text-green-500 mr-2"
                        ></i>
                        <i
                          // onClick={() => handlerXoa(info.id)}
                          className="fa-solid fa-trash-can text-green-500"
                        ></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>

        {confirmEdit && (
          <div
            className=" fixed inset-0 flex justify-center items-center bg-opacity-50 bg-black z-50"
          >
            <div
              // onClick={(e) => onClickDialog(e)}
              className="shadow-lg p-8 bg-gray-200 max-w-7xl mx-auto rounded"
            >
              <div className=" grid grid-cols-3">
                <div className="p-2">

                  <label className="block mb-2.5 mt-2" htmlFor="sdt">
                    Name Type
                  </label>
                  <input
                    className="p-1 rounded input-getname"
                    type="text"
                    defaultValue={itemEdit.name}
                    placeholder="Name type..."
                  />

                  <label className="block mb-2.5" htmlFor="id">
                    Image
                  </label>
                  <input
                    className="p-1 rounded input-email cursor-not-allowed"
                    type="file"
                    defaultValue={itemEdit.image}
                    placeholder="Path Image"
                  />
                </div>

                <div className="p-2">
                  <label className="block mb-2.5" htmlFor="id">
                    ID Type:{itemEdit.id}
                  </label>

                  <label className="block mb-2.5 mt-2" htmlFor="sdt">
                    Mô tả
                  </label>
                  <input
                    className="p-1 rounded input-getname"
                    type="text"
                    defaultValue={itemEdit.name}
                    placeholder="mô tả..."
                  />


                         </div>
                  <div className="p-2">
                    <label className="block mb-2.5" htmlFor="id">
                      Giá
                    </label>
                    <input
                      className="p-1 rounded input-getname"
                      type="text"
                      defaultValue={itemEdit.name}
                      placeholder="giá"
                    />

                    <label className="block mb-2.5 mt-2" htmlFor="sdt">
                      Số lượng
                    </label>
                    <input
                      className="p-1 rounded input-getname"
                      type="text"
                      defaultValue={itemEdit.name}
                      placeholder="số lượng"
                    />
                  </div>         
              </div>

              <div className="rounded flex justify-center ">
                <button
                  onClick={handlerEditCancel}
                  className="w-40 h-12 border border-normal rounded shadow-md mr-4 hover:border-active hover:shadow-sm text-white text-lg bg-black"
                >
                  Cancel
                </button>
                <button
                  // onClick={() => handlerEditOK(itemEdit.id)}
                  className="w-40 h-12 border border-normal rounded shadow-md mr-4 hover:border-active hover:shadow-sm text-lg bg-blue-200"
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        )}
        {/* <div className="">
          <button onClick={handlePreviousPage} disabled={currentPage === 1} className="mr-3">
            Prev
          </button>
          <span>Trang {currentPage} trong số {totalPages}</span>
          <button className="ml-3" onClick={handleNextPage} disabled={currentPage === totalPages}>
            Next
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Product;
