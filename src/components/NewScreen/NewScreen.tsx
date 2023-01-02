import React from "react";

import {
  SearchIcon,
  DownloadIcon,
  TrashIcon,
  UserAddIcon,
  UploadIcon,
} from "@heroicons/react/solid";
import { InewScreen } from "./NewScreenContainer";

interface IProps {
  newScreen: InewScreen[];
}

const NewScreen: React.VFC<IProps> = ({ newScreen }) => {
  return (
    <section>
      <nav className="shadow-lg p-5">
        <ul className="flex justify-between font-serif">
          <li className=" text-xl font-bold ">Thông tin khách hàng</li>
          <li className="flex">
            <p className="mr-4 text-xl font-bold">User</p>
            <a href="">
              <i className="fa-solid fa-user text-green-500 text-xl"></i>
            </a>
          </li>
        </ul>
      </nav>

      <div className="shadow-lg p-8 bg-gray-200 max-w-7xl mx-auto relative">
        <div className=" grid grid-cols-4 ">
          <div className="">
            <label className="block mb-2.5" htmlFor="id">
              FullName
            </label>
            <input
              className="p-1 rounded "
              type="text"
              id="id"
              placeholder="FullaName...."
            />

            <label className="block mb-2.5 mt-2" htmlFor="sdt">
              Phone_Number
            </label>
            <input
              className="p-1 rounded"
              type="text"
              id="sdt"
              placeholder="PhoneNumber..."
            />
          </div>

          <div className="">
            <label className="block mb-2.5" htmlFor="id">
              ID
            </label>
            <input
              className="p-1 rounded"
              type="text"
              id="id"
              placeholder="ID..."
            />

            <label className="block mb-2.5 mt-2" htmlFor="email">
              Email
            </label>
            <input
              className="p-1 rounded"
              type="email"
              id="sdt"
              placeholder="Email..."
            />
          </div>

          <div className="">
            <label className="block mb-2.5" htmlFor="home">
              Home Town
            </label>
            <input
              className="p-1 rounded"
              type="select"
              id="home"
              placeholder="home town..."
            />

            <label className="block mb-2.5 mt-2" htmlFor="Nationality">
              Nationality
            </label>
            <input
              className="p-1 rounded"
              type="text"
              id="Nationality"
              placeholder="Nationality..."
            />
          </div>

          <div className="">
            <label className="block mb-2.5" htmlFor="Apartment">
              Apartment Number
            </label>
            <input
              className="p-1 rounded"
              type="text"
              id="Apartment"
              placeholder="   Apartment Number..."
            />

            <label className="block mb-2.5 mt-2" htmlFor="Adress">
              Adress
            </label>
            <input
              className="p-1 rounded"
              type="text"
              id="Adress"
              placeholder="Email..."
            />
          </div>
        </div>

        <div className=" absolute right-3 bottom-3 bg-green-500 rounded">
          <button className="p-3 flex ">
            <SearchIcon className="h-6 w-6 text-green-500 bg-black p-1 rounded" />
            <p className="text-black ml-3">Search</p>
          </button>
        </div>
      </div>

      <section className="py-9 max-w-7xl mx-auto ">
        <div>
          <h2 className="text-xl text-green-500">Thông tin chi tiết </h2>
        </div>

        <div className="flex justify-between mt-5 px-4">
          <form className="">
            <label>Lựa Chọn</label>
            <select name="select" className="ml-2 border">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </form>

          <div className="flex">
            <button className="bg-green-400 p-1 rounded flex mr-1">
              <DownloadIcon className="h-4 w-4 text-black-400 mt-1" />
              <p className="text-white font-medium">Dowload</p>
            </button>
            <button className="bg-purple-500 p-1 px-2 rounded flex mr-1">
              <TrashIcon className="h-4 w-4 text-black-400 mt-1" />
              <p className="text-white font-medium">Delete</p>
            </button>

            <button className="bg-blue-400 p-1 rounded flex mr-1">
              <UploadIcon className="h-4 w-4 text-black-400 mt-1" />
              <p className="text-white font-medium">UpLoad</p>
            </button>

            <button className="bg-gray-400 p-1 rounded flex mr-1">
              <UserAddIcon className="h-4 w-4 text-black-400 mt-1" />
              <p className="text-white font-medium">User</p>
            </button>
          </div>
        </div>
      </section>

      <section className="w-full py-6">
        <table className="border-collapse border w-full">
          <tr className="text-left">
            <th className="p-2">
              <input type="checkbox" />
            </th>
            <th className="p-2">ID</th>
            <th className="p-2">fullName</th>
            <th className="p-2">PhoneNumber</th>
            <th className="p-2">Email</th>
            <th className="p-2">National</th>
            <th className="p-2">Adress</th>
            <th className="p-2">Apartment Number</th>
            <th className="p-2"></th>
          </tr>

          <tbody>
            {newScreen.map((info, index) => {
              return (
                <tr key={index}>
                  <td className="p-2">
                    <input type="checkbox" />
                  </td>
                  <td className="p-2">{info.id}</td>
                  <td className="p-2">{info.fullnName} </td>
                  <td className="p-2">{info.PhoneNumber}</td>
                  <td className="p-2">{info.Email}</td>
                  <td className="p-2">{info.National}</td>
                  <td className="p-2">{info.Adress}</td>
                  <td className="p-2">{info.Apartment_Number}</td>
                  <td className="p-2 ">
                    <button className="flex">
                      <i className="fa-solid fa-pen text-green-500 mr-2"></i>
                      <i className="fa-solid fa-trash-can text-green-500"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </section>
  );
};

export default NewScreen;
