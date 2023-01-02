import React from "react";

export interface Ihspv {
  hspv: any[];
  handlerClose: (idj: number, idu: number) => void;
  handlerCheck: (idj: number, idu: number) => void;
}
const Hspv: React.FC<Ihspv> = ({ handlerClose, handlerCheck, hspv }) => {
  return (
    <div>
      <div className=" px-4">
        <h1 className="text-2xl font-medium">Quản lý ứng viên </h1>
        <section className="w-full py-6">
          <table className="border-collapse border w-full">
            <tr className="text-left">
              <th className="p-2">Họ Tên</th>
              <th className="p-2">Tên Công việc </th>
              <th className="p-2">Email </th>
              <th className="p-2">CV</th>
            </tr>
            <tbody>
              {hspv?.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="p-2">{item.users.fullName} </td>
                    <td className="p-2">{item.job.name}</td>
                    <td className="p-2">{item.users.email}</td>
                    <td className="p-2">
                      <a href={item.users.urlCv}>Download</a>
                    </td>
                    <td>
                      <button className="flex">
                        <i
                          onClick={() =>
                            handlerClose(item.job.id, item.users.id)
                          }
                          className="fa-solid fa-xmark mr-2 text-red-600"
                        ></i>
                        <i
                          onClick={() =>
                            handlerCheck(item.job.id, item.users.id)
                          }
                          className="fa-solid fa-check text-green-600"
                        ></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default Hspv;
