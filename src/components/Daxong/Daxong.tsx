import React from "react";

export interface Idaxong {
  daxongList: any[];
}
const Daxong: React.FC<Idaxong> = ({ daxongList }) => {
  return (
    <div>
      <div className=" px-4">
        <h1 className="text-2xl font-medium">Quản lý tuyển dụng</h1>

        <section className="w-full py-6">
          <table className="border-collapse border w-full">
            <tr className="text-left">
              <th className="p-2">ID</th>
              <th className="p-2">Tên công việc </th>
              <th className="p-2">Số lượng tuyển </th>
              <th className="p-2">Giới tính </th>
              <th className="p-2">Tuôỉ </th>
              <th className="p-2">Kinh nghiệm </th>
              <th className="p-2">Địa chỉ </th>
              <th className="p-2">Ngày đăng tuyển</th>
              <th className="p-2">Hạn tuyển dụng</th>
              <th className="p-2"></th>
            </tr>

            <tbody>
              {daxongList.map((info, index) => {
                return (
                  <tr key={index}>
                    <td className="p-2">{info.id}</td>
                    <td className="p-2">{info.name} </td>
                    <td className="p-2">{info.quantity}</td>
                    <td className="p-2">
                      {info.sex === 1
                        ? `${info.sex}(Nam)`
                        : `${info.sex}(Nữ)` && "không yêu cầu"}
                    </td>
                    <td className="p-2">{info.age}</td>
                    <td className="p-2">{info.experence}</td>
                    <td className="p-2">{info.workAddress}</td>
                    <td className="p-2">{info.dateCreated}</td>
                    <td className="p-2">{info.dateExpiration}</td>
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
export default Daxong;
