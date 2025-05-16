import { useState } from 'react'
import '../../index.css'
import LogoFace from "../../assets/logo_facebook.svg"

function App() {
  return (
    <div className="bg-white">
      <main>
        <div className="md:bg-white md:pt-30 md:pb-40">
          <div className="grid grid-cols-1 md:grid-cols-2 md:max-w-[980px] mx-auto">
            <div className="pt-10">
              <a href="/">
               <img src={LogoFace} alt="Facebook" className="w-30 mx-auto md:mx-0 md:w-[290px] md:-mb-4 md:-ml-8" />
              </a>
              <p className="hidden md:flex text-2xl leading-8 max-w-[500px] pr-6 text-black">
                O Facebook ajuda você a se conectar e compartilhar com as pessoas que fazem parte da sua vida.
              </p>
            </div>

            <div className="md:w-[396px] md:place-self-end">
              <div className="p-4 md:border md:shadow-xl rounded-md bg-white">
                <form action="" className="flex flex-col">
                  <input
                    type="text"
                    placeholder="Email ou telefone"
                    className="flex-1 mb-2 md:mb-3 p-3 rounded md:rounded-md border border-gray-400 bg-gray-200 md:bg-white text-sm md:text-base placeholder-gray-600 md:placeholder-gray-500"
                  />
                  <input
                    type="password"
                    placeholder="Senha"
                    className="flex-1 mb-3 p-3 rounded md:rounded-md border border-gray-400 bg-gray-200 md:bg-white text-sm md:text-base placeholder-gray-600 md:placeholder-gray-500"
                  />
                  <input
                    type="submit"
                    value="Entrar"
                    className="flex-1 mb-3 py-2 px-3 rounded-md bg-main-blue hover:bg-main-blue-hover font-semibold text-white text-xl"
                  />
                </form>

                <div className="flex flex-col divide-y divide-gray-400 text-center mt-2 md:mt-0">
                  <div className="pb-4 order-2 md:order-1">
                    <a href="#" className="text-blue-600 hover:underline">Esqueceu a senha?</a>
                  </div>
                  <div className="pb-6 pt-8 order-1 md:order-2">
                    <a href="#" className="py-3 px-4 bg-main-green hover:bg-main-green-hover text-white text-md md:text-lg font-bold rounded">
                      Criar nova conta
                    </a>
                  </div>
                </div>
              </div>

              <div className="hidden md:block text-sm mt-5 text-center">
                <p className='text-black'>
                  <a href="#" className="font-bold">Criar uma Página</a> para uma celebridade, banda ou empresa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <div className="md:max-w-[980px] mx-auto py-8 text-center md:text-current">
          <div>
            <ul className="grid grid-cols-2 md:flex text-gray-600 text-xs md:text-sm">
              <li className="mr-3"><a href="#" className="hover:underline">Português (Brazil)</a></li>
              <li className="mr-3"><a href="#" className="hover:underline">English (US)</a></li>
              <li className="mr-3"><a href="#" className="hover:underline">Español</a></li>
              <li className="mr-3"><a href="#" className="hover:underline">Français (France)</a></li>
              <li className="mr-3"><a href="#" className="hover:underline">Italiano</a></li>
            </ul>
          </div>

          <div className="hidden md:block border-t border-gray-400 pt-3 mt-3"></div>

          <div>
            <ul className="hidden md:flex md:flex-wrap text-gray-600 text-sm">
              {[
                "Cadastre-se", "Entrar", "Messenger", "Facebook Lite", "Watch", "Pessoas", "Páginas", "Categorias de Página",
                "Locais", "Jogos", "Marketplace", "Facebook Play", "Grupos", "Oculos", "Portal", "Instagram", "Local",
                "Campanhas de arrecadação de fundos", "Serviços", "Central de informações de Votação", "Sobre",
                "Criar anúncios", "Criar página", "Desenvolvedores", "Carreiras", "Privacidade", "Cookies",
                "Escolha para anúncios", "Termos", "Ajuda"
              ].map((item, index) => (
                <li key={index} className="mr-3">
                  <a href="#" className="hover:underline">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 text-xs text-gray-600 text-center md:text-left">
            <p>Facebook &copy; 2020</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
