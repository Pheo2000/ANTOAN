import React from "react";

export interface Ihsdc {
  hsdc: any[];
}
const HsduocChon: React.FC<Ihsdc> = ({ hsdc }) => {
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
              {hsdc?.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="p-2">{item.users.fullName} </td>
                    <td className="p-2">{item.job.name}</td>
                    <td className="p-2">{item.users.email}</td>
                    <td className="p-2">
                      <a href={item.users.urlCv}>Download</a>
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
export default HsduocChon;
