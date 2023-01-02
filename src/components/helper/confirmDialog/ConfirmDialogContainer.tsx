import React from "react";
import ConfirmDialog from "./ConfirmDialog";

interface ConfirmDialogContainerProps {
  open: boolean;
  title: string;
  content: string;
  onClickCancel: () => void;
  onClickOk: (id: number) => void;
}

const ConfirmDialogContainer: React.FC<ConfirmDialogContainerProps> = ({
  open,
  title,
  content,
  onClickCancel,
  onClickOk,
}) => {
  const onClickDialog = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  if (open) {
    return (
      <>
        <ConfirmDialog
          title={title}
          content={content}
          onClickCancel={onClickCancel}
          onClickOk={onClickOk}
          onClickDialog={onClickDialog}
        />
      </>
    );
  } else {
    return null;
  }
};

export default ConfirmDialogContainer;
