import React from "react";
import Image from "next/image";

interface ConfirmDialogProps {
  title: string;
  content: string;
  onClickCancel: () => void;
  onClickOk: () => void;
  onClickDialog: (e: React.MouseEvent) => void;
}

const editDialog: React.FC<ConfirmDialogProps> = ({
  title,
  content,
  onClickCancel,
  onClickOk,
  onClickDialog,
}) => {
  return (
    <div
      onClick={onClickCancel}
      className=" fixed inset-0 flex justify-center items-center bg-opacity-50 bg-mainText z-50"
    >
      <div className="shadow-lg p-8 bg-gray-200 max-w-7xl mx-auto">
        <div className=" grid grid-cols-4 ">
          <div className="p-2">
            <label className="block mb-2.5" htmlFor="id">
              ID
            </label>
            <input
              className="p-1 rounded "
              type="text"
              id="id"
              placeholder="ID...."
            />

            <label className="block mb-2.5 mt-2" htmlFor="sdt">
              Họ tên
            </label>
            <input
              className="p-1 rounded"
              type="text"
              id="sdt"
              placeholder="Họ tên ..."
            />
          </div>

          <div className="p-2">
            <label className="block mb-2.5" htmlFor="id">
              Số lượng tuyển
            </label>
            <input
              className="p-1 rounded"
              type="text"
              id="id"
              placeholder="số lượng tuyển ..."
            />

            <label className="block mb-2.5 mt-2" htmlFor="email">
              Giới tính
            </label>
            <input
              className="p-1 rounded"
              type="email"
              id="sdt"
              placeholder="giới tính ..."
            />
          </div>

          <div className="p-2">
            <label className="block mb-2.5" htmlFor="home">
              Tuổi
            </label>
            <input
              className="p-1 rounded"
              type="number"
              id="home"
              placeholder="tuổi ..."
              defaultValue={18}
            />

            <label className="block mb-2.5 mt-2" htmlFor="Nationality">
              Kinh Nghiệm
            </label>
            <input
              className="p-1 rounded"
              type="number"
              id="Nationality"
              placeholder="kinh nghiệm..."
            />
          </div>

          <div className="p-2">
            <label className="block mb-2.5" htmlFor="Apartment">
              Địa chỉ
            </label>
            <input
              className="p-1 rounded"
              type="text"
              id="Apartment"
              placeholder="địa  chỉ  ..."
            />

            <label className="block mb-2.5 mt-2" htmlFor="Adress">
              Ngày Đăng tuyển
            </label>
            <input
              className="p-1 rounded"
              type="text"
              id="Adress"
              placeholder="ngày đăng tuyển..."
            />
          </div>
          <div className="p-2">
            <label className="block mb-2.5" htmlFor="Apartment">
              Hạn tuyển dụng
            </label>
            <input
              className="p-1 rounded"
              type="text"
              id="Apartment"
              placeholder="hạn tuyển dụng..."
            />
          </div>
        </div>

        <div className="rounded flex justify-center ">
          <button className="w-40 h-12 border border-normal rounded shadow-md mr-4 hover:border-active hover:shadow-sm text-lg bg-red-100">
            Cancel
          </button>
          <button className="w-40 h-12 border border-normal rounded shadow-md mr-4 hover:border-active hover:shadow-sm text-lg bg-green-200">
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default editDialog;
