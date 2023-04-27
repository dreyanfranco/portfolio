
import Image from "next/image";
import NavBar from "../components/NavBar";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import profilePicture from '../../public/fotoPerfil.png';

export default function Home() {
  return (
    <main className="bg-white px-10 md:px-20 lg:px-20">
      <section className="min-h-screen">
        <NavBar />
        <div className="text-center p-5">
          <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Dreyan Franco</h2>
          <h3 className="text-2xl py-2 md:text-3xl">Web developer</h3>
          <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto">Fullstack developer focused on creating innovative and interactive webapps 💻</p>
        </div>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
          <AiFillLinkedin />
          <AiFillGithub />
        </div>
        <div className="relative">
          <Image className="mx-auto rounded-full w-40 h-30 mt-5 md:h-96 md:w-80" src={profilePicture} alt="profile-picture" />
        </div>
      </section>
      <section>
        <article className="flex flex-row gap-10 py-80 items-center justify-items-center">
          <h3 className="text-3xl pb-3 ">About me</h3>
          <p className="text-md leading-8 text-gray-800">
            As a fullstack developer, my expertise lies in creating seamless and intuitive user experiencies as well as server side development for efficient data processing and storage           </p>
        </article>
        <article>
          <div>
            <h3 className="text-3xl py-1">Portfolio</h3>
            <p>Each project is a unique piece of development 🕹️</p>
          </div>
        </article>
      </section>
    </main>
  )
}
