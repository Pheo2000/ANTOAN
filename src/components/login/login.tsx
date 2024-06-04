import { useRouter } from "next/router";
import React from "react";

const Login: React.FC = () => {
  const url = "http://localhost:8080/api/nguoi-dung/login"
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
    console.log("data", formData)

    await fetch(url, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    })
      .then(async (res) => await res.json())
      .then((data) => {
        const formdata = {
          token: data.result
        };
        localStorage.setItem("store", JSON.stringify(formdata));
        router.push("/user");
      });
  };
  return (
    <div className=" fixed inset-0 flex justify-center items-center bg-white bg-mainText z-50 ">
      <div className="shadow-lg p-8 bg-green-200  rounded relative w-96">
        <div className="absolute right-2 top-2 p-3 cursor-pointer">
          <i className="fa-solid fa-xmark"></i>
        </div>
        <div className=" grid grid-cols-1 ">
          <div className="p-2">
            <label className="block mb-2.5" htmlFor="id">
              Email
            </label>
            <input
              type="text"
              className="p-1 rounded user_name w-full"
              placeholder="userName"
            />

            <label className="block mb-2.5 mt-2" htmlFor="sdt">
              Password
            </label>
            <input
              className="p-1 rounded pass_word w-full"
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
