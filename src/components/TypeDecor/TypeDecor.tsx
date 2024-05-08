import React from "react";
import Image from "next/image";
import ConfirmDialog from "../helper/confirmDialog";

export interface ItypeDecor {
  typeDecor: any[];
  confirmOpen: boolean;
  itemEdit: any;
  confirmEdit: boolean;
  addConfirm: boolean;
  handlerXoa: (id: any) => void;
  onExecutionConfirm: (id: any) => void;
  onCloseConfirm: () => void;
  handlerEdit: (id: number) => void;
  handlerEditCancel: () => void;
  handlerEditOK: (id: number) => void;
  handlerAdd: () => void;
  handlerAddCancel: () => void;
  handlerAddOK: () => void;
  changeImage: (event: any)=> void
}
const TypeDecor: React.FC<ItypeDecor> = ({ typeDecor, confirmEdit,
  itemEdit,
  confirmOpen,
  handlerXoa,
  onExecutionConfirm,
  onCloseConfirm,
  handlerEdit,
  handlerEditCancel,
  handlerEditOK,
  addConfirm,
  handlerAdd,
  handlerAddCancel,
  changeImage,
  handlerAddOK, }) => {
  const urlImage = "http://144.126.136.135/BTL/file/"
  return (
    <div>
      <div className="px-4">
        <h1 className="text-2xl font-medium">Quản lý Thể Loại </h1>
        <section className=" py-6">
          <table className="border-collapse border border-black w-9/12">
            <thead>
              <tr className="text-center border-b border-black">
                <th className="p-2 border-r border-black">ID </th>
                <th className="p-2 border-r border-black">Name Type</th>
                <th className="p-2 border-r border-black">Hình Ảnh </th>
                <th className="p-2 border-r border-black"> </th>
              </tr>
            </thead>
            <tbody>
              {typeDecor?.map((item, index) => {
                if (item.status === 1) {
                  return (
                    <tr key={index} className="border-b border-black text-center">
                      <td className="p-2 border-r border-black">{item.id} </td>
                      <td className="p-2 border-r border-black">{item.name} </td>
                      <td className="p-2 border-r border-black">
                        <Image
                          height="40"
                          width="40"
                          src={`${urlImage}${item.image}`}
                          className=" absolute rounded-full"
                          alt=""
                        />
                      </td>
                      <td className="p-2 border-r border-black">
                        <button className="">
                          <i
                            onClick={() => handlerAdd()}
                            className="fa-solid fa-plus text-green-500 mr-4"
                          >
                          </i>
                          <i
                            onClick={() => handlerEdit(item.id)}
                            className="fa-solid fa-pen text-green-500 mr-6"
                          ></i>
                          <i
                            onClick={() => handlerXoa(item.id)}
                            className="fa-solid fa-trash-can text-green-500"
                          ></i>

                          {confirmOpen && (
                            <ConfirmDialog
                              title="Dialog"
                              content="Bạn có chắc muốn xóa không?"
                              open={confirmOpen}
                              onClickCancel={onCloseConfirm}
                              onClickOk={() => onExecutionConfirm(item.id)}
                            />
                          )}
                        </button>
                      </td>
                    </tr>
                  );
                }

              })}
            </tbody>
          </table>
        </section>

        {confirmEdit && (
          <div
            onClick={() => handlerEditCancel}
            className=" fixed inset-0 flex justify-center items-center bg-opacity-50 bg-black z-50"
          >
            <div
              // onClick={(e) => onClickDialog(e)}
              className="shadow-lg p-8 bg-gray-200 max-w-7xl mx-auto rounded"
            >
              <div className=" grid grid-cols-2 ">
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
                  onClick={() => handlerEditOK(itemEdit.id)}
                  className="w-40 h-12 border border-normal rounded shadow-md mr-4 hover:border-active hover:shadow-sm text-lg bg-blue-200"
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        )}

        {addConfirm && (
          <div
            onClick={() => handlerEditCancel}
            className=" fixed inset-0 flex justify-center items-center bg-opacity-50 bg-black z-50"
          >
            <div
              className="shadow-lg p-8 bg-gray-200 max-w-7xl mx-auto rounded"
            >
              <div className=" grid grid-cols-1">
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
                    placeholder="Path Image"
                    onChange={()=> changeImage(event)}
                  />
                </div>
              </div>

              <div className="rounded flex justify-center ">
                <button
                  onClick={handlerAddCancel}
                  className="w-40 h-12 border border-normal rounded shadow-md mr-4 hover:border-active hover:shadow-sm text-lg bg-red-100"
                >
                  Cancel
                </button>
                <button
                  onClick={handlerAddOK}
                  className="w-40 h-12 border border-normal rounded shadow-md mr-4 hover:border-active hover:shadow-sm text-lg bg-green-200"
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default TypeDecor;
