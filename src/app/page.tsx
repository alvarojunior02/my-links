import Image from "next/image";

// assets imports
import Profile from "../assets/profile.png"
import LinkedinIcon from "../assets/icons/linkedin.png"
import MailIcon from "../assets/icons/mail.png"
import InstagramIcon from "../assets/icons/instagram.png"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white">
      <div id="profile" className="flex flex-col items-center">
        <Image
          className="rounded-full"
          src={Profile}
          height={150}
          width={150}
          alt="Profile Avatar"
        />
        <h1 className="mt-8 text-xl font-bold">Álvaro Carneiro Júnior</h1>
      </div>
      <div id="links" className="flex flex-col items-center">
        <a href="https://www.linkedin.com/in/alvaro-junior-831299183/" target="_blank">
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
        <a href="mailto:alvarojunior02.dev@gmail.com" target="_blank">
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
        <a href="https://www.instagram.com/ajunior_c/" target="_blank">
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
