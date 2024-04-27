import React from 'react'
import '../Diseños_css/MenuPrincipal.css';
import appFirebase from '../credenciales';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';

const MenuPrincipal = () => {
  
  return (
    <><><><><nav class="bg-white border-gray-200 dark:bg-gray-900">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
        </a>
        <div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button type="button" class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
            <span class="sr-only">Open user menu</span>
            <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.png" alt="user photo" />
          </button>

          <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
            <div class="px-4 py-3">
              <span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
              <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
            </div>
            <ul class="py-2" aria-labelledby="user-menu-button">
              <li>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
              </li>
            </ul>
          </div>
          <button data-collapse-toggle="navbar-user" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
          <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
            </li>
            <li>
              <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
            </li>
            <li>
              <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
            </li>
            <li>
              <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</a>
            </li>
            <li>
              <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav><><>
      <body className="bg-green-800 text-white font-sans">
        <div className="max-w-7xl mx-auto py-8 px-4">
          <div className="bg-green-600 rounded-lg shadow-lg p-6">
            <h1 className="text-2xl font-bold mb-4">Bienvenido de nuevo, devmarcjr 👋</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-700 rounded-lg p-4 flex items-start">
                <img src="https://placehold.co/40x40" alt="Icon" className="mr-4" />
                <div>
                  <h2 className="font-semibold">RECOMENDADO PARA TI</h2>
                  <p className="text-sm">Conecta con freelancers</p>
                  <p className="text-xs mt-1">Crea una propuesta y obtén ofertas profesionales.</p>
                  <Link
                    to="/crear-propuesta"
                    className="mt-2 bg-green-800 hover:bg-green-900 text-white font-bold py-2 px-4 rounded"
                  >
                    Escribe aquí lo que necesitas
                  </Link>
                </div>
              </div>
              <div className="bg-green-700 rounded-lg p-4 flex items-start">
                <img src="https://placehold.co/40x40" alt="Icon" className="mr-4" />
                <div>
                  <h2 className="font-semibold">RECOMENDACIONES PARA NEGOCIOS</h2>
                  <p className="text-sm">Adapta GarzaLance a tus necesidades</p>
                  <p className="text-xs mt-1">Cuéntanos un poco sobre tu negocio.</p>
                  <NavLink
                    to="/crear-oferta"
                    className="mt-2 bg-green-800 hover:bg-green-900 text-white font-bold py-2 px-4 rounded"
                  >
                    Agrega tu Información
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </><div>
          
        </div></></><div class="flex items-center justify-center p-4">
        <h1 class="text-lg font-semibold text-zinc-900 dark:text-white">
          Servicios locales recomendados para ti
          <span class="text-red-500">😸</span>
        </h1>
      </div></><div class="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
        <img class="w-full" src="https://placehold.co/290x200" alt="Pixel Art" />
        <div class="px-6 py-4">
          <div class="flex items-center">
            <img class="w-10 h-10 rounded-full mr-4" src="https://placehold.co/40" alt="Profile Avatar" />
            <div class="text-sm">
              <p class="text-zinc-900 leading-none">Diego Rago</p>
              <p class="text-zinc-600">Level 2 ★★★☆☆</p>
            </div>
          </div>
          <div class="mt-2">
            <p class="text-zinc-700 text-base">Haré pixel art profesional para tus videojuegos.</p>
          </div>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span
            class="inline-block bg-zinc-200 rounded-full px-3 py-1 text-sm font-semibold text-zinc-700 mr-2 mb-2"
          >★ 4.9 (931)</span>
          <span
            class="inline-block bg-zinc-200 rounded-full px-3 py-1 text-sm font-semibold text-zinc-700 mb-2"
          >A partir de USD 5</span>
        </div>
      </div></><div class="flex items-center justify-center p-4">
        <h1 class="text-lg font-semibold text-zinc-900 dark:text-white">
          Servicios que te pueden gustar 
          <span>🥰</span>
        </h1>
      </div></>
  )
}

export default MenuPrincipal