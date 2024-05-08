import React from "react";
export interface Ibill {
  billList: any[];
}
const Bill: React.FC<Ibill> = ({ billList }) => {
  return (
    <div>
      <div className=" px-4">
        <h1 className="text-2xl font-medium">Quản lý Hoá Đơn</h1>

        <section className="w-full py-6">
          <table className="border-collapse border w-full border border-black">
            <thead>
              <tr className="text-left  border-b border-black">
                <th className="p-2 border-r border-black">ID</th>
                <th className="p-2 border-r border-black"> Address</th>
                <th className="p-2 border-r border-black">Total </th>
                <th className="p-2 border-r border-black">Trạng thái </th>
              </tr>
            </thead>

            <tbody>
              {billList.map((info, index) => {
                return (
                  <tr key={index} className=" border-b border-black">
                    <td className="p-2 border-r border-black">{info.id}</td>
                    <td className="p-2 border-r border-black">{info.address} </td>
                    <td className="p-2 border-r border-black">{info.total}</td>
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

export default Bill;
