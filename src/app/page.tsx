import Image from "next/image";

// assets imports
import Profile from "../assets/profile.png"
import LinkedinIcon from "../assets/icons/linkedin.png"
import MailIcon from "../assets/icons/mail.png"
import InstagramIcon from "../assets/icons/instagram.png"

export default function Home() {
  return (
    <main className="m-0 p-0 h-screen max-h-screen w-screen flex flex-col items-center justify-center overflow-x-hidden bg-cyan-800">
      <div className="container w-96 h-28 flex flex-row items-center justify-center bg-white rounded p-4 shadow-xl">
        <Image
          className="rounded-full"
          src={Profile}
          width={80}
          height={80}
          alt="Foto de Perfil"
        />
        <div className="flex flex-col items-start">
          <p className="ml-2 text-lg font-bold">Álvaro Júnior</p>
          <p className="ml-2 text-sm">Full Stack Developer</p>
        </div>
      </div>
      <div className="container w-96 mt-2 flex flex-col items-center bg-white rounded p-4 shadow-xl">
        <a
          className="button w-80"
          href="https://www.linkedin.com/in/alvaro-junior-831299183/"
          target="_blank"
        >
          <div className="w-1/5">
            <Image
              className=""
              src={LinkedinIcon}
              height={50}
              width={50}
              alt="LinkedIn Icon"
            />
          </div>
          <div className="w-3/5 flex flex-row justify-center">
            <p className="align-middle">LinkedIn</p>
          </div>
        </a>
        <a
          className="button w-80"
          href="mailto:alvarojunior02.dev@gmail.com"
          target="_blank"
        >
          <div className="w-1/5">
            <Image
              className=""
              src={MailIcon}
              height={50}
              width={50}
              alt="LinkedIn Icon"
            />
          </div>
          <div className="w-3/5 flex flex-row justify-center">
            <p className="align-middle">E-mail</p>
          </div>
        </a>
        <a
          className="button w-80"
          href="https://www.instagram.com/ajunior_c/"
          target="_blank"
        >
          <div className="w-1/5">
            <Image
              className=""
              src={InstagramIcon}
              height={50}
              width={50}
              alt="LinkedIn Icon"
            />
          </div>
          <div className="w-3/5 flex flex-row justify-center">
            <p className="align-middle">Instagram</p>
          </div>
        </a>
      </div>
    </main>
  );
}
