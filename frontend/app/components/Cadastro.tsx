"use client";
import "animate.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUp, signupSchema } from "../schemas/signupSchema";
import { useState } from "react";
import { api } from "../api/api";
import { success, error } from "../functions/toast";
import { ImSpinner2 } from "react-icons/im";
import { useRouter } from "next/navigation";
import { setCookie } from "nookies";

type Props = {
  nav: boolean;
  setNav: (nav: boolean) => void;
  login: boolean;
  setLogin: (nav: boolean) => void;
};

export default function Cadastro({ nav, setNav, login, setLogin }: Props) {
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();

  const handle = (e: any) => {
    const element = document.getElementById("modalCadastroDivForm");
    if (!element?.contains(e.target)) {
      document
        .getElementById("modalCadastro")
        ?.classList.add("animate__fadeOut");
      setTimeout(() => {
        setNav(!nav);
      }, 500);
    }
  };

  const changeModal = () => {
    document.getElementById("modalCadastro")?.classList.add("animate__fadeOut");
    setTimeout(() => {
      setNav(!nav);
      setLogin(!login);
    }, 700);
  };

  const {
    register,
    handleSubmit,
    clearErrors,
    trigger,
    formState: { errors },
  } = useForm<SignUp>({
    reValidateMode: "onBlur",
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: any) => {
    setLoading(true);
    const response = await api.post("signup", data);
    if (response.data.success) {
      success("Cadastro Realizado com Sucesso.");
      setCookie(null, "token", response.data.token);
      localStorage.setItem("key", response.data.token);
      setLoading(false);
      router.push("/home");
    } else {
      error(response.data.message);
      setLoading(false);
    }
  };

  return (
    <div
      id="modalCadastro"
      className={`w-full h-full bg-black/90 z-10 min-w-[320px] min-h-[850px] flex items-center 
        justify-center absolute top-0 left-0 animate__animated animate__fadeIn  `}
      onClick={handle}
    >
      <div
        id="modalCadastroDivForm"
        className="bg-white p-8 rounded-lg shadow-lg max-w-md w-[90%]"
      >
        <div className="flex justify-center">
          <img src="/name.png" className="w-[300px]" />
        </div>
        <h2 className="text-2xl font-semibold text-center mb-4">
          Criar Nova Conta
        </h2>
        <p className="text-gray-600 text-center mb-6">Preencha o formulário</p>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Nome
            </label>
            <input
              {...register("nome")}
              type="text"
              className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-300"
              placeholder="James"
              onKeyUp={() => trigger("nome")}
              onBlur={() => {
                clearErrors("nome");
              }}
            />
            {errors.nome && (
              <span className=" text-xs text-red-500">{`${errors.nome.message}`}</span>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Sobrenome
            </label>
            <input
              {...register("sobrenome")}
              type="text"
              className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-300"
              placeholder="Brown"
              onKeyUp={() => trigger("sobrenome")}
              onBlur={() => {
                clearErrors("sobrenome");
              }}
            />
            {errors.sobrenome && (
              <span className="text-xs text-red-500">{`${errors.sobrenome.message}`}</span>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-xs font-semibold mb-2">
              Email
            </label>
            <input
              {...register("email")}
              type="email"
              id="email"
              className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-300"
              placeholder="hello@alignui.com"
              onKeyUp={() => trigger("email")}
              onBlur={() => {
                clearErrors("email");
              }}
            />
            {errors.email && (
              <span className="text-xs text-red-500">{`${errors.email.message}`}</span>
            )}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Senha
            </label>
            <input
              {...register("senha")}
              type="password"
              id="password"
              className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-300"
              placeholder="••••••••"
              onKeyUp={() => trigger("senha")}
              onBlur={() => {
                clearErrors("senha");
              }}
            />
            {errors.senha && (
              <span className="text-xs text-red-500">{`${errors.senha.message}`}</span>
            )}
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full flex items-center justify-center ${
              isLoading ? "cursor-not-allowed " : ""
            } 
            bg-gradient-to-r from-yellow-400 to-orange-600 text-white text-shadow py-2 rounded-lg mx-auto focus:outline-none mt-4 mb-6`}
          >
            {isLoading ? (
              <ImSpinner2 size={30} className="animate-spin" />
            ) : (
              <>Cadastrar</>
            )}
          </button>
          <div className="flex items-center justify-center gap-x-3">
            <p className="text-gray-600 text-xs text-center">
              Ja possui login?
            </p>
            <p
              className="text-xs text-orange-500 hover:underline cursor-pointer"
              onClick={changeModal}
            >
              Faça o login aqui
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
