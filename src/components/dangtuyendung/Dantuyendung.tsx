import React, { useState } from "react";
import ConfirmDialog from "../helper/confirmDialog";

export interface Ilisttd {
  listTd: any[];
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
const Dangtuyendung: React.FC<Ilisttd> = ({
  listTd,
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

  return (
    <div>
      <div className=" px-4">
        <div className="flex">
          <h1 className="text-2xl font-medium mr-2">Quản lý tuyển dụng</h1>
          <i
            onClick={handlerAdd}
            className=" cursor-pointer fa-solid fa-plus text-2xl bg-green-500 rounded p-1"
          ></i>
        </div>

        <section className="w-full py-6">
          <table className="border-collapse border w-full">
            <tr className="text-left">
              <th className="p-2">ID</th>
              <th className="p-2">Tên Công việc </th>
              <th className="p-2">Lương</th>
              <th className="p-2">Số lượng tuyển </th>
              <th className="p-2">Giới tính </th>
              <th className="p-2">Tuổi </th>
              <th className="p-2">Kinh nghiệm </th>
              <th className="p-2">Địa chỉ </th>
              <th className="p-2">Ngày đăng tuyển</th>
              <th className="p-2">Hạn tuyển dụng</th>
              <th className="p-2"></th>
            </tr>

            <tbody>
              {listTd.map((info, index) => {
                return (
                  <tr key={index}>
                    <td className="p-2">{info.id}</td>
                    <td className="p-2">{info.name} </td>
                    <td className="p-2">{info.salary} </td>
                    <td className="p-2">{info.quantity}</td>
                    <td className="p-2">
                      {info.sex
                        ? "Nam"
                        : info.sex === null
                        ? "Không yêu cầu"
                        : !info.sex
                        ? "Nữ"
                        : "Không yêu cầu"}
                    </td>
                    <td className="p-2">{info.age}</td>
                    <td className="p-2">{info.experence}</td>
                    <td className="p-2">{info.workAddress}</td>
                    <td className="p-2">{info.dateCreated}</td>
                    <td className="p-2">{info.dateExpiration}</td>
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
            className=" fixed inset-0 flex justify-center items-center bg-opacity-50 bg-mainText z-50"
          >
            <div
              onClick={(e) => onClickDialog(e)}
              className="shadow-lg p-8 bg-gray-200 max-w-7xl mx-auto"
            >
              <div className=" grid grid-cols-4 ">
                <div className="p-2">
                  <label className="block mb-2.5" htmlFor="id">
                    ID:{itemEdit.id}
                  </label>

                  <label className="block mb-2.5 mt-2" htmlFor="sdt">
                    Họ tên
                  </label>
                  <input
                    className="p-1 rounded input-getname"
                    type="text"
                    defaultValue={itemEdit.name}
                  />
                </div>

                <div className="p-2">
                  <label className="block mb-2.5" htmlFor="id">
                    Số lượng tuyển
                  </label>
                  <input
                    className="p-1 rounded input-getslt "
                    type="text"
                    defaultValue={itemEdit.quantity}
                  />

                  <label className="block mb-2.5 mt-2" htmlFor="email">
                    Giới tính
                  </label>
                  <select>
                    <option id="1">Nam</option>
                    <option id="0">Nữ</option>
                    <option id="kyc">null</option>
                  </select>
                </div>

                <div className="p-2">
                  <label className="block mb-2.5" htmlFor="home">
                    Tuổi
                  </label>
                  <input
                    className="p-1 rounded input-getage"
                    type="text"
                    defaultValue={itemEdit.age}
                  />

                  <label className="block mb-2.5 mt-2" htmlFor="Nationality">
                    Kinh Nghiệm
                  </label>
                  <input
                    className="p-1 rounded input-getex"
                    type="text"
                    defaultValue={itemEdit.experence}
                  />
                </div>

                <div className="p-2">
                  <label className="block mb-2.5" htmlFor="Apartment">
                    Địa chỉ
                  </label>
                  <input
                    className="p-1 rounded input-getad"
                    type="text"
                    defaultValue={itemEdit.workAddress}
                  />

                  <label className="block mb-2.5 mt-2" htmlFor="Adress">
                    Hạn tuyển dụng
                  </label>
                  <input
                    type="date"
                    className="p-1 rounded input-gethtd"
                    defaultValue={itemEdit.dateExpiration}
                  />
                </div>
              </div>

              <div className="rounded flex justify-center ">
                <button
                  onClick={handlerEditCancel}
                  className="w-40 h-12 border border-normal rounded shadow-md mr-4 hover:border-active hover:shadow-sm text-lg bg-red-100"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handlerEditOK(itemEdit.id)}
                  className="w-40 h-12 border border-normal rounded shadow-md mr-4 hover:border-active hover:shadow-sm text-lg bg-green-200"
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
            className=" fixed inset-0 flex justify-center items-center bg-opacity-50 bg-mainText z-50"
          >
            <div
              onClick={(e) => onClickDialog(e)}
              className="shadow-lg p-8 bg-gray-200 max-w-7xl mx-auto"
            >
              <div className=" grid grid-cols-4 ">
                <div>
                  <label className="block mb-2.5 mt-2" htmlFor="sdt">
                    Họ tên
                  </label>
                  <input className="p-1 rounded nameadd" type="text" />

                  <label className="block mb-2.5 mt-2" htmlFor="sdt">
                    Lương
                  </label>
                  <input className="p-1 rounded luongadd" type="text" />
                </div>

                <div className="p-2">
                  <label className="block mb-2.5" htmlFor="id">
                    Số lượng tuyển
                  </label>
                  <input className="p-1 rounded stladd " type="text" />

                  <label className="block mb-2.5 mt-2" htmlFor="email">
                    Giới tính
                  </label>
                  <select>
                    <option id="1">Nam</option>
                    <option id="0">Nữ</option>
                    <option id="kyc">null</option>
                  </select>
                </div>

                <div className="p-2">
                  <label className="block mb-2.5" htmlFor="home">
                    Tuổi
                  </label>
                  <input className="p-1 rounded ageadd" type="text" />

                  <label className="block mb-2.5 mt-2" htmlFor="Nationality">
                    Kinh Nghiệm
                  </label>
                  <input className="p-1 rounded exadd" type="text" />
                </div>

                <div className="p-2">
                  <label className="block mb-2.5" htmlFor="Apartment">
                    Địa chỉ
                  </label>
                  <input className="p-1 rounded adradd" type="text" />

                  <label className="block mb-2.5 mt-2" htmlFor="Adress">
                    Hạn tuyển dụng
                  </label>
                  <input type="date" className="p-1 rounded htdadd" />
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

export default Dangtuyendung;
