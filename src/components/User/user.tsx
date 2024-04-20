import React, { useState } from "react";
import ConfirmDialog from "../helper/confirmDialog";

export interface Ilisttd {
  listuser: any[];
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
}
const UserPage: React.FC<Ilisttd> = ({
  listuser,
  confirmEdit,
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
  handlerAddOK,
}) => {
  const onClickDialog = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  console.log("sdfsdf", itemEdit)
  return (
    <div>
      <div className=" px-4">
        <div className="flex">
          <h1 className="text-2xl font-medium mr-2">Add User</h1>
          <i
            onClick={handlerAdd}
            className=" cursor-pointer fa-solid fa-plus text-2xl bg-green-500 rounded p-1"
          ></i>
        </div>

        <section className="w-full py-6">
          <table className="border-collapse border w-full">
            <thead>
            <tr className="text-left">
              <th className="p-2">ID</th>
              <th className="p-2">FullName </th>
              <th className="p-2">Email</th>
              <th className="p-2">Giới Tính </th>
              <th className="p-2">Phone</th>
              <th className="p-2">Địa Chỉ </th>
              <th className="p-2"></th>
            </tr>
            </thead>

            <tbody>
              {listuser.map((info, index) => {
                return (
                  <tr key={index}>
                    <td className="p-2">{info.id}</td>
                    <td className="p-2">{info.fullName} </td>
                    <td className="p-2">{info.email} </td>
                    <td className="p-2">
                     {info.gioitinh ? "Nam" : "Nữ"}
                    </td>
                    <td className="p-2">{info.sdt}</td>
                    <td className="p-2">{info.address}</td>
                    <td className="p-2">
                      <button className="flex">
                        <i
                          onClick={() => handlerEdit(info.id)}
                          className="fa-solid fa-pen text-green-500 mr-2"
                        ></i>
                        <i
                          onClick={() => handlerXoa(info.id)}
                          className="fa-solid fa-trash-can text-green-500"
                        ></i>
                      </button>
                    </td>
                    <td>
                      {confirmOpen && (
                        <ConfirmDialog
                          title="Dialog"
                          content="Bạn có chắc muốn xóa không?"
                          open={confirmOpen}
                          onClickCancel={onCloseConfirm}
                          onClickOk={() => onExecutionConfirm(info.id)}
                        />
                      )}
                    </td>
                  </tr>
                );
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
              onClick={(e) => onClickDialog(e)}
              className="shadow-lg p-8 bg-gray-200 max-w-7xl mx-auto rounded"
            >
              <div className=" grid grid-cols-3 ">
                <div className="p-2">
                  <label className="block mb-2.5" htmlFor="id">
                    ID:{itemEdit.id}
                  </label>

                  <label className="block mb-2.5 mt-2" htmlFor="sdt">
                    FullName
                  </label>
                  <input
                    className="p-1 rounded input-getname"
                    type="text"
                    defaultValue={itemEdit.fullName}
                    placeholder="fullname"
                  />
                </div>

                <div className="p-2">
                  <label className="block mb-2.5" htmlFor="id">
                    Email
                  </label>
                  <input
                    className="p-1 rounded input-email "
                    type="text"
                    defaultValue={itemEdit.email}
                    placeholder="Email"
                  />

                  <label className="block mb-2.5 mt-2" htmlFor="email">
                    Giới tính
                  </label>
                  <select>
                    <option id="1">Nam</option>
                    <option id="0">Nữ</option>
                  </select>
                </div>

                <div className="p-2">
                  <label className="block mb-2.5" htmlFor="home">
                    Phone
                  </label>
                  <input
                    className="p-1 rounded input-getPhone"
                    type="text"
                    defaultValue={itemEdit.sdt}
                    placeholder="Phone"
                  />

                  <label className="block mb-2.5 mt-2" htmlFor="Nationality">
                    Adress
                  </label>
                  <input
                    className="p-1 rounded input-adr"
                    type="text"
                    defaultValue={itemEdit.address}
                    placeholder="Adress"
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
              onClick={(e) => onClickDialog(e)}
              className="shadow-lg p-8 bg-gray-200 max-w-7xl mx-auto rounded"
            >
              <div className=" grid grid-cols-3">
                <div>
                  <label className="block mb-2.5 mt-2" htmlFor="sdt">
                    FullName  
                  </label>
                  <input className="p-1 rounded nameadd" type="text" />

                  <label className="block mb-2.5 mt-2" htmlFor="sdt">
                    Email
                  </label>
                  <input className="p-1 rounded luongadd" type="text" />
                </div>

                <div className="p-2">
                  <label className="block mb-2.5" htmlFor="id">
                    Phone
                  </label>
                  <input className="p-1 rounded stladd " type="text" />

                  <label className="block mb-2.5 mt-2" htmlFor="email">
                    Giới tính
                  </label>
                  <select>
                    <option id="1">Nam</option>
                    <option id="0">Nữ</option>
                    {/* <option id="kyc">null</option> */}
                  </select>
                </div>

                <div className="p-2">
                  <label className="block mb-2.5" htmlFor="home">
                    Tuổi
                  </label>
                  <input className="p-1 rounded ageadd" type="text" />

                  <label className="block mb-2.5 mt-2" htmlFor="Nationality">
                    Adress
                  </label>
                  <input className="p-1 rounded exadd" type="text" />
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

export default UserPage;
