"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { SunIcon, MoonIcon } from "@heroicons/react/16/solid";

export const Navbar = () => {
  const [theme, setTheme] = useState("system");
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  //const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  //const dropdownRef = useRef<HTMLDivElement>(null); // Referência para o dropdown

  useEffect(() => {
    // Verifica se estamos no lado do cliente
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme && savedTheme !== "system") {
        setTheme(savedTheme);
        document.documentElement.classList.add(savedTheme);
      } else {
        const prefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        const initialTheme = prefersDark ? "dark" : "light";
        setTheme("system");
        document.documentElement.classList.add(initialTheme);
      }
    }

    // // Função para fechar o dropdown ao clicar fora dele
    // const handleClickOutside = (event: MouseEvent) => {
    //   if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
    //     setIsDropdownOpen(false); // Fecha o dropdown
    //   }
    // };

    // // Adiciona o event listener
    // document.addEventListener("mousedown", handleClickOutside);

    // // Remove o event listener ao desmontar o componente
    // return () => {
    //   document.removeEventListener("mousedown", handleClickOutside);
    // };
  }, []);

  const toggleTheme = () => {
    let newTheme;
    if (theme === "dark") {
      newTheme = "light";
    } else if (theme === "light") {
      newTheme = "dark";
    } else {
      newTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "light"
        : "dark";
    }

    setTheme(newTheme);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  // const toggleDropdown = () => {
  //   setIsDropdownOpen(!isDropdownOpen);
  // };

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 transition-colors duration-300 ease-in-out font-[family-name:var(--font-geist-sans)]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            width={32}
            height={32}
            className="h-8"
            src={"./logo.webp"}
            alt="TechTerms Insights"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white transition-colors duration-300 ease-in-out">
            Tech Terms
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            onClick={toggleTheme}
            className="dark:text-white text-gray-900 md:hover:text-green-700 md:p-0 md:dark:hover:text-green-500 transition-colors duration-300 ease-in-out"
          >
            {theme === "dark" ? (
              <SunIcon className="h-5 w-5" />
            ) : (
              <MoonIcon className="h-5 w-5" />
            )}
          </button>
        </div>
        {/* <div
          className={`md:flex ${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-dropdown"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <button
                id="dropdownNavbarLink"
                onClick={toggleDropdown}
                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-green-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                Tarefa 1{" "}
                <svg
                  className={`w-2.5 h-2.5 ms-2.5 transform transition-transform duration-300 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div
               ref={dropdownRef}
                id="dropdownNavbar"
                className={`z-10 ${
                  isDropdownOpen ? "absolute" : "hidden"
                } font-normal bg-white rounded-lg shadow w-44 dark:bg-gray-700`}
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-400 overflow-y-auto max-h-64"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <a
                      href="#SS"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      id="SS"
                    >
                      Soft Skills
                    </a>
                  </li>
                  <li>
                    <a
                      href="#CRM"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      id="CRM"
                    >
                      CRM
                    </a>
                  </li>
                  <li>
                    <a
                      href="#ERP"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      id="ERP"
                    >
                      ERP
                    </a>
                  </li>
                  <li>
                    <a
                      href="#MES"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      id="MES"
                    >
                      MES
                    </a>
                  </li>
                  <li>
                    <a
                      href="#SCM"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      id="SCM"
                    >
                      SCM
                    </a>
                  </li>
                  <li>
                    <a
                      href="#WMS"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      id="WMS"
                    >
                      WMS
                    </a>
                  </li>
                  <li>
                    <a
                      href="#HRM"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      id="HRM"
                    >
                      HRM
                    </a>
                  </li>
                  <li>
                    <a
                      href="#BD"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      id="BD"
                    >
                      Big Data
                    </a>
                  </li>
                  <li>
                    <a
                      href="#CS"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      id="CS"
                    >
                      Cybersecurity
                    </a>
                  </li>
                  <li>
                    <a
                      href="#IA"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      id="IA"
                    >
                      IA
                    </a>
                  </li>
                  <li>
                    <a
                      href="#IoT"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      id="IoT"
                    >
                      IoT
                    </a>
                  </li>
                  <li>
                    <a
                      href="#IIoT"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      id="IIoT"
                    >
                      IIoT
                    </a>
                  </li>
                  <li>
                    <a
                      href="#AR"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      id="AR"
                    >
                      AR
                    </a>
                  </li>
                  <li>
                    <a
                      href="#VR"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      id="VR"
                    >
                      VR
                    </a>
                  </li>
                  <li>
                    <a
                      href="#B2B"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      id="B2B"
                    >
                      B2B
                    </a>
                  </li>
                  <li>
                    <a
                      href="#B2C"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      id="B2C"
                    >
                      B2C
                    </a>
                  </li>
                  <li>
                    <a
                      href="#H2H"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      id="H2H"
                    >
                      H2H
                    </a>
                  </li>
                  <li>
                    <a
                      href="#NFC"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      id="NFC"
                    >
                      NFC
                    </a>
                  </li>
                  <li>
                    <a
                      href="#RFID"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      id="RFID"
                    >
                      RFID
                    </a>
                  </li>
                  <li>
                    <a
                      href="#BC"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      id="BC"
                    >
                      Bar Code
                    </a>
                  </li>
                  <li>
                    <a
                      href="#QR"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      id="QR"
                    >
                      QR Code
                    </a>
                  </li>
                  <li>
                    <a
                      href="#Blockchain"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      id="Blockchain"
                    >
                      Blockchain
                    </a>
                  </li>
                  <li>
                    <a
                      href="#DS"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      id="DS"
                    >
                      Data Science
                    </a>
                  </li>
                  <li>
                    <a
                      href="#CC"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      id="CC"
                    >
                      Cloud Computing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#DL"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      id="DL"
                    >
                      Deep Learning
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Tarefa 2
              </a>
            </li>
          </ul>
        </div> */}
      </div>
    </nav>
  );
};
