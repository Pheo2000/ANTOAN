import React from "react";
import Image from "next/image";

interface ConfirmDialogProps {
  title: string;
  content: string;
  onClickCancel: () => void;
  onClickOk: (id: number) => void;
  onClickDialog: (e: React.MouseEvent) => void;
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  title,
  content,
  onClickCancel,
  onClickOk,
  onClickDialog,
}) => {
  return (
    <div
      data-testid="confirmDialog"
      className={
        "fixed inset-0 flex justify-center items-center bg-opacity-50 bg-black z-50"
      }
      onClick={onClickCancel}
    >
      <div
        className={"w-110 bg-gray-200 p-4"}
        onClick={(e) => onClickDialog(e)}
      >
        <div
          className={"float-right py-4 px-4 cursor-pointer"}
          onClick={onClickCancel}
        >
          <i className="fa-solid fa-xmark"></i>
        </div>
        <p className={"text-center mt-12 text-2xl font-medium mx-14"}>
          {title}
        </p>
        <p data-testid="contentMessage" className={"mt-10 text-15 mx-14 "}>
          {content}
        </p>
        <div className={"mt-6 mb-10 flex justify-center"}>
          <button
            className={
              "w-40 h-12 border border-normal rounded shadow-md mr-4 hover:border-active hover:shadow-sm text-lg"
            }
            onClick={onClickCancel}
          >
            Cancel
          </button>
          <button
            type={"button"}
            data-testid="btn-confirmDialog"
            className={
              "w-40 h-12 border border-normal rounded shadow-md hover:border-active hover:shadow-sm text-lg"
            }
            onClick={() => onClickOk}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;
