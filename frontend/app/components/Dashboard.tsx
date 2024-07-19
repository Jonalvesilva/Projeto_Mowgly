"use client";
import "animate.css";
import { useState } from "react";
import { ImMenu } from "react-icons/im";
import { useRouter } from "next/navigation";
import { destroyCookie } from "nookies";
import { success } from "../functions/toast";

type Props = {
  children: { name: string; element: React.ReactNode; string: string }[];
};

export default function Dashboard(props: Props) {
  const { name, element, string } = props.children[0];
  const [nome, setNome] = useState(name);
  const [el, setEl] = useState(element);
  const [str, setStr] = useState(string);
  const [nav, setNav] = useState(false);
  const router = useRouter();

  const handle = (index: number) => {
    setNome(props.children[index].name);
    setEl(props.children[index].element);
    setStr(props.children[index].string);
  };

  const handleNav = (e: any) => {
    document.getElementById("aside")?.classList.add("animate__fadeOutLeft");
    setTimeout(() => {
      setNav(!nav);
    }, 500);
  };

  const logout = () => {
    destroyCookie(null, "token", { path: "/" });
    success("Logout realizado com sucesso!");
    router.push("/");
  };

  return (
    <>
      <aside
        id="aside"
        className={`${
          nav ? "ml-0 animate__fadeInLeft" : "ml-[-100%]"
        } fixed z-20 top-0 pb-3 overflow-y-auto px-6 w-[250px]  flex flex-col justify-between h-screen 
      bg-gradient-to-tr from-slate-800 to-slate-900
      transition duration-300  lg:ml-0  animate__animated`}
      >
        <div>
          <div className="-mx-6 px-6 pt-4">
            <img src="/name.png" className="w-full h-full" alt="logo" />
          </div>

          <div className="mt-6 text-center">
            <img
              src="https://tailus.io/sources/blocks/stats-cards/preview/images/second_user.webp"
              alt=""
              className="w-28 h-28 m-auto rounded-full object-cover "
            />
            <h5 className="hidden mt-4 text-xl font-semibold text-white lg:block">
              Cynthia J. Watts
            </h5>
          </div>

          <ul className="space-y-2 tracking-wide mt-8">
            <li>
              <p
                className={`relative px-4 py-3 flex justify-center items-center space-x-4 rounded-xl text-white cursor-pointer
              ${
                nome == "dashboard"
                  ? "bg-gradient-to-r from-orange-600 to-yellow-400"
                  : "hover:bg-black/60"
              }`}
                onClick={(e) => {
                  handle(0);
                }}
              >
                Dashboard
              </p>
            </li>
            <li>
              <p
                className={`relative px-4 py-3 flex justify-center items-center space-x-4 rounded-xl text-white cursor-pointer
              ${
                nome == "perfil"
                  ? "bg-gradient-to-r from-orange-600 to-yellow-400"
                  : "hover:bg-black/60"
              }`}
                onClick={() => {
                  handle(1);
                }}
              >
                Perfil
              </p>
            </li>
            <li>
              <p
                className={`relative px-4 py-3 flex justify-center items-center space-x-4 rounded-xl text-white cursor-pointer
              ${
                nome == "ranking"
                  ? "bg-gradient-to-r from-orange-600 to-yellow-400"
                  : "hover:bg-black/60"
              }`}
                onClick={() => {
                  handle(2);
                }}
              >
                Ranking
              </p>
            </li>
          </ul>
        </div>

        <div className=" px-6 -mx-6 pt-4 flex justify-center items-center border-t">
          <button
            onClick={logout}
            className=" w-full px-4 py-3 flex items-center justify-center space-x-4 rounded-md text-white hover:bg-black/60 cursor-pointer"
          >
            Logout
          </button>
        </div>
      </aside>

      <div className="w-full lg:lg:ml-[250px] relative">
        <div
          className={`w-full h-screen fixed top-0 left-0 z-10 bg-slate-500/55  ${
            nav ? "" : "hidden"
          }`}
          onClick={(e) => handleNav(e)}
        ></div>
        <div className="fixed z-10 w-full top-0 h-16 border-b bg-slate-900 lg:py-2.5">
          <div className="px-6 flex items-center justify-between space-x-4 lg:pl-6 lg:pr-[260px]">
            <div className="flex items-center">
              <div className="w-12 h-16  flex items-center lg:hidden">
                <ImMenu
                  size={20}
                  className="text-white cursor-pointer"
                  onClick={() => setNav(!nav)}
                />
              </div>
              <h5 hidden className="text-2xl text-white font-medium block">
                {str}
              </h5>
            </div>

            <div className="flex space-x-4">
              <div hidden className="md:block">
                <div className="relative flex items-center text-gray-400 focus-within:text-orange-400">
                  <span className="absolute left-4 h-6 flex items-center pr-3 ">
                    <svg
                      xmlns="http://ww50w3.org/2000/svg"
                      className="w-4 fill-current"
                      viewBox="0 0 35.997 36.004"
                    >
                      <path
                        id="Icon_awesome-search"
                        data-name="search"
                        d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"
                      ></path>
                    </svg>
                  </span>
                  <input
                    type="search"
                    name="leadingIcon"
                    id="leadingIcon"
                    placeholder="Search here"
                    className="w-full pl-14 pr-4 py-2.5 rounded-xl text-sm text-gray-600 outline-none border border-gray-300 focus:border-orange-500 transition"
                  />
                </div>
              </div>

              <button
                aria-label="search"
                className="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200 md:hidden"
              >
                <svg
                  xmlns="http://ww50w3.org/2000/svg"
                  className="w-4 mx-auto fill-current text-gray-600"
                  viewBox="0 0 35.997 36.004"
                >
                  <path
                    id="Icon_awesome-search"
                    data-name="search"
                    d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"
                  ></path>
                </svg>
              </button>
              <button
                aria-label="chat"
                className="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 m-auto text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="h-full mt-16 pb-2 bg-black  lg:ml-[250px] flex justify-center ">
        {el}
      </div>
    </>
  );
}
