"use client";
import { useState, useEffect } from "react";
import Login from "./components/Login";
import Cadastro from "./components/Cadastro";

export default function Home() {
  const [loginModal, setLoginModal] = useState(false);
  const [cadastroModal, setCadastroModal] = useState(false);

  return (
    <>
      <section
        className="w-full h-screen bg-center bg-cover bg-no-repeat lg:bg-center min-h-[850px]"
        style={{ backgroundImage: "url('/login.jpg')" }}
      >
        <div className="w-full h-full bg-black/80 flex flex-col items-center justify-center">
          <div className="w-[90%] mx-auto max-w-screen-md flex flex-col items-center">
            <img className="" src="/name.png"></img>
            <p className="text-white text-3xl text-shadow text-center mb-5">
              Venha conhecer o melhor MMORPG da internet
            </p>
            <p className="text-white text-xl text-shadow text-center mb-5">
              Construa seus reinos e derrote seus adversários em um jogo
              empolgante
            </p>
            <div className="w-[80%] m-auto flex flex-col items-center gap-y-8 mt-4 sm:flex-row sm:justify-evenly sm:mt-5">
              <div
                className="spinner-box relative cursor-pointer group"
                onClick={() => setLoginModal(!loginModal)}
              >
                <div className="circle-border">
                  <div
                    className="w-full h-full rounded-full bg-gradient-to-tr from-yellow-500 to-orange-400
      group-hover:bg-gradient-to-tr group-hover:from-yellow-300 group-hover:to-yellow-300
      "
                  ></div>
                </div>
                <span className="absolute top-[65px] text-xl font-semibold text-shadow text-white">
                  Login
                </span>
              </div>
              <div
                className="spinner-box relative cursor-pointer group"
                onClick={() => setCadastroModal(!cadastroModal)}
              >
                <div className="circle-border hover:bg-black">
                  <div
                    className="w-full h-full rounded-full bg-gradient-to-tr from-yellow-500 to-orange-400
      group-hover:bg-gradient-to-tr group-hover:from-yellow-300 group-hover:to-yellow-300
      "
                  ></div>
                </div>
                <span className="absolute top-[65px] text-xl font-semibold text-shadow text-white">
                  Cadastro
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {loginModal && (
        <Login
          setNav={setLoginModal}
          nav={loginModal}
          cadastro={cadastroModal}
          setCadastro={setCadastroModal}
        />
      )}
      {cadastroModal && (
        <Cadastro
          setNav={setCadastroModal}
          nav={cadastroModal}
          login={loginModal}
          setLogin={setLoginModal}
        />
      )}
    </>
  );
}
