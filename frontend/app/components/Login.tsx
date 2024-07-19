"use client";
import "animate.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignIn, signinSchema } from "../schemas/signinSchema";
import { api } from "../api/api";
import { useState } from "react";
import { success, error } from "../functions/toast";
import { ImSpinner2 } from "react-icons/im";
import { useRouter } from "next/navigation";
import { setCookie } from "nookies";

type Props = {
  nav: boolean;
  setNav: (nav: boolean) => void;
  cadastro: boolean;
  setCadastro: (nav: boolean) => void;
};

export default function Login({ nav, setNav, cadastro, setCadastro }: Props) {
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();

  const handle = (e: any) => {
    const element = document.getElementById("modalLoginDivForm");
    if (!element?.contains(e.target)) {
      document.getElementById("modalLogin")?.classList.add("animate__fadeOut");
      setTimeout(() => {
        setNav(!nav);
      }, 500);
    }
  };

  const changeModal = () => {
    document.getElementById("modalLogin")?.classList.add("animate__fadeOut");
    setTimeout(() => {
      setNav(!nav);
      setCadastro(!cadastro);
    }, 700);
  };

  const {
    register,
    handleSubmit,
    clearErrors,
    trigger,
    formState: { errors },
  } = useForm<SignIn>({
    reValidateMode: "onBlur",
    resolver: zodResolver(signinSchema),
  });

  const onSubmit = async (data: any) => {
    setLoading(true);
    const response = await api.post("signin", data);
    if (response.data.success) {
      success("Login Realizado com Sucesso.");
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
      id="modalLogin"
      className={`w-full h-full bg-black/90 z-10 min-h-[850px] flex items-center 
        justify-center absolute top-0 left-0 animate__animated animate__fadeIn  `}
      onClick={handle}
    >
      <div
        id="modalLoginDivForm"
        className="max-w-md w-[90%] p-6 bg-white rounded-lg shadow-lg"
      >
        <div className="flex justify-center mb-8">
          <img src="/name.png" alt="Logo" className="w-30 h-20" />
        </div>
        <h1 className="text-2xl font-semibold text-center text-gray-500 mt-8 mb-6">
          Iniciar Sessão
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <label className="block mb-2 text-sm text-gray-600">Email</label>
            <input
              {...register("email")}
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
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
            <label className="block mb-2 text-sm text-gray-600">Senha</label>
            <input
              {...register("senha")}
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
              onKeyUp={() => trigger("senha")}
              onBlur={() => {
                clearErrors("senha");
              }}
            />
            <a
              href="#"
              className="block text-right text-xs text-orange-600 mt-2"
            >
              Esqueceu sua senha?
            </a>
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
              <>Entrar</>
            )}
          </button>
        </form>
        <div className="text-center flex justify-center gap-x-2">
          <p className="text-sm">Não tem conta?</p>
          <p
            className="text-sm text-orange-600 cursor-pointer"
            onClick={changeModal}
          >
            Registre-se agora
          </p>
        </div>
        <p className="text-xs text-gray-600 text-center mt-10">
          &copy; 2024 Jonathan Silva
        </p>
      </div>
    </div>
  );
}
