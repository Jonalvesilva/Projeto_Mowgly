import { FaRegPlayCircle } from "react-icons/fa";

export default function HomeDashboard() {
  return (
    <>
      <div className="px-6 pt-6 w-full">
        <div className="grid lg:grid-cols-3 gap-x-4 w-full max-w-screen-xl mx-auto">
          <div className="flex justify-center col-span-2 flex-col gap-y-4">
            <div className="border border-orange-400 h-[300px] w-full rounded-xl relative">
              <div className="absolute top-0 left-0 bg-gray-300/40 h-full w-full rounded-xl flex items-center justify-center">
                <img src="/play.png" className="w-20 rounded-xl object-cover" />
              </div>
              <img
                src="/dashboard1.jpg"
                className="w-full h-full rounded-xl object-cover"
              />
            </div>
            <div className="grid gap-y-4 sm:grid-cols-2 gap-x-4">
              <div className="border border-orange-400 h-[300px] w-full rounded-xl relative flex justify-center">
                <img
                  src="/personagens/elfa.png"
                  className="w-full h-full object-contain py-8"
                />
                <p className="absolute top-0 left-0 text-white p-2">Melissa</p>
                <p className="absolute bottom-0 right-0 text-white p-2">Elfa</p>
              </div>
              <div className="border border-orange-400  h-[300px] w-full rounded-xl relative flex justify-center">
                <img
                  src="/personagens/cavaleiro.png"
                  className="w-full h-full object-contain py-8 pl-6"
                />
                <p className="absolute top-0 left-0 text-white p-2">Alf</p>
                <p className="absolute bottom-0 right-0 text-white p-2">
                  Cavaleiro
                </p>
              </div>
            </div>
            <div className="grid gap-y-4 sm:grid-cols-2 gap-x-4">
              <div className="border border-orange-400 h-[300px] w-full rounded-xl relative flex justify-center">
                <img
                  src="/personagens/robin.png"
                  className="w-full h-full object-contain py-8 pr-2"
                />
                <p className="absolute top-0 left-0 text-white p-2">Rizette</p>
                <p className="absolute bottom-0 right-0 text-white p-2">
                  Robin
                </p>
              </div>
              <div className="border border-orange-400  h-[300px] w-full rounded-xl relative flex justify-center">
                <img
                  src="/personagens/mago.png"
                  className="w-full h-full object-contain pb-5 pl-6"
                />
                <p className="absolute top-0 left-0 text-white p-2">Gandalf</p>
                <p className="absolute bottom-0 right-0 text-white p-2">
                  Mago{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="/propaganda/propaganda1.webp"
              className="hidden lg:flex"
            />
          </div>
        </div>
      </div>
    </>
  );
}
