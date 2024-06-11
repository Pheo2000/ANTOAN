import React from "react";
import dayjs from "dayjs";

export interface Ibill {
  billList: any[];
  valueText: string;
  setValueText: (value: string) => void;
  hanlderSeqarch: (valueText: string) => void;

}
const Bill: React.FC<Ibill> = ({ billList,
  valueText,
  setValueText,
  hanlderSeqarch
}) => {
  console.log("billList", billList)
  return (
    <div>
      <div className=" px-4">
        <h1 className="text-2xl font-medium">Quản lý Hoá Đơn</h1>
        {/* <div className="mt-2 w-full p-1 border-black border flex rounded">
          <input type="text" defaultValue={valueText} onChange={(e) => setValueText(e.target.value)} className="w-full" placeholder="value text......" />
          <button className="ml-3 bg-blue-400 p-2  rounded " onClick={() => hanlderSeqarch(valueText)}> search</button>
        </div> */}
        <section className="w-full py-6">
          <table className="border-collapse border w-full border border-black">
            <thead>
              <tr className="text-left  border-b border-black">
                <th className="p-2 border-r border-black">ID</th>
                <th className="p-2 border-r border-black"> CreatedDate</th>
                <th className="p-2 border-r border-black">UserName </th>
                <th className="p-2 border-r border-black">Phone </th>
                <th className="p-2 border-r border-black">Total </th>
                <th className="p-2 border-r border-black">Address </th>
                <th className="p-2 border-r border-black">Status </th>
              </tr>
            </thead>

            <tbody>
              {billList.map((info, index) => {
                return (
                  <tr key={index} className=" border-b border-black">
                    <td className="p-2 border-r border-black">{info.id}</td>
                    <td className="p-2 border-r border-black">{dayjs(info.createdDate).format("YYYY-MM-DD")} </td>
                    <td className="p-2 border-r border-black">{info.user.fullName}</td>
                    <td className="p-2 border-r border-black">{info.user.sdt}</td>
                    <td className="p-2 border-r border-black">{info.total}</td>
                    <td className="p-2 border-r border-black">{info.address ? info.address : info.user.address}</td>
                    <td className="p-2 border-r border-black">
                      <select id="mySelect" className="ml-2">
                        {billList.map((item) => {
                          return (
                            <option key={item.id} value={item.id}>
                              {item.status == 0 ? "Chờ lấy hàng" : item.status == 1 ? "Đang vận chuyển" : item.status == 2 ? "thành công" : ""}
                            </option>
                          )
                        })}
                      </select>
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

export default Bill;
