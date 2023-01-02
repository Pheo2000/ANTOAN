import React from "react";
import NewScreen from "./NewScreen";

export interface InewScreen {
  id: string;
  fullnName: string;
  PhoneNumber: string;
  Email: string;
  National: string;
  Adress: string;
  Apartment_Number: string;
}

const NewScreenContainer: React.VFC = () => {
  const infors: InewScreen[] = [
    {
      id: "1",
      fullnName: "Đỗ Đình Thịnh ",
      PhoneNumber: "0981057099",
      Email: "Dothinh@gmail.com",
      National: "Việt Nam",
      Adress: "Việt Nam ",
      Apartment_Number: "88",
    },
    {
      id: "22",
      fullnName: "Nguyễn Xuân Bảo ",
      PhoneNumber: "0981057474",
      Email: "Bao@gmail.com",
      National: "Việt Nam",
      Adress: "Hà Nội",
      Apartment_Number: "89",
    },
    {
      id: "3",
      fullnName: "Trịnh Vân  Nam  ",
      PhoneNumber: "0981024132",
      Email: "VanNam@gmail.com",
      National: "Việt Nam",
      Adress: "Hà Nội",
      Apartment_Number: "90",
    },
    {
      id: "12",
      fullnName: "Trần Đức Việt",
      PhoneNumber: "0981987653",
      Email: "DucViet@gmail.com",
      National: "Việt Nam",
      Adress: "Hà Nội",
      Apartment_Number: "91",
    },
    {
      id: "12",
      fullnName: "Nguyễn Hữu hà ",
      PhoneNumber: "0923546478",
      Email: "Ha@gmail.com",
      National: "Việt Nam",
      Adress: "Hà Nội",
      Apartment_Number: "92",
    },
  ];

  return (
    <div>
      <NewScreen newScreen={infors} />
    </div>
  );
};

export default NewScreenContainer;
