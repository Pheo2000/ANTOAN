import { useRouter } from "next/router";
import React from "react";
import { domain } from "../User/user";

const Login: React.FC = () => {
  const router = useRouter();
  const handlerLogin = async () => {
    const useName = (document.querySelector(".user_name") as HTMLInputElement)
      .value;

    const passWord = (document.querySelector(".pass_word") as HTMLInputElement)
      .value;
    const formData = {
      username: useName,
      password: passWord,
    };

    await fetch(`http://${domain}/api/company/login`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    })
      .then(async (res) => await res.json())
      .then((data) => {
        const formdata = {
          id: data.id,
          name: data.name,
        };
        localStorage.setItem("store", JSON.stringify(formdata));
        router.push("/dang_tuyen_dung");
      });
  };
  return (
    <div className=" fixed inset-0 flex justify-center items-center bg-white bg-mainText z-50 ">
      <div className="shadow-lg p-8 bg-gray-200  mx-auto rounded relative">
        <div className="absolute right-2 top-2 p-3 cursor-pointer">
          <i className="fa-solid fa-xmark"></i>
        </div>
        <div className=" grid grid-cols-1 ">
          <div className="p-2">
            <label className="block mb-2.5" htmlFor="id">
              Họ Tên
            </label>
            <input
              type="text"
              className="p-1 rounded user_name"
              placeholder="Họ tên...."
            />

            <label className="block mb-2.5 mt-2" htmlFor="sdt">
              Mật khẩu
            </label>
            <input
              className="p-1 rounded pass_word"
              type="password"
              placeholder="password..."
            />
          </div>
        </div>

        <div className="rounded flex justify-center mt-4 ">
          <button
            onClick={handlerLogin}
            className="w-40 h-10 border border-normal rounded shadow-md mr-4 hover:border-active hover:shadow-sm text-lg bg-red-100"
          >
            Singin
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
