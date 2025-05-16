import { useState } from 'react'
import SpotifyLogo from '../../assets/Spotify-logo.png'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/*header*/}
      <header>
        <div className="flex fixed bg-black w-full px-3 md:px-20 py-4">
          <div className="container flex items-center mx-auto">
            <div>
              <a href="/">
                <img src={SpotifyLogo} alt="logo-spotify" className="w-20 md:w-125px" />
              </a>
            </div>
            <div class="flex justify-end flex-1 md:hidden text-white text-3xl">
              <i class="fas fa-bars"></i>
            </div>
            <div class="items-end flex-1 text-white font-bold hidden md:flex">
              <nav class="flex-1">
                <ul class="flex justify-end flex-1">
                  <li class="px-4">
                    <a href="#" class="hover:text-hoverspt text-sm  transition duration-500">Premium</a>
                  </li>
                  <li class="px-4">
                    <a href="#" class="hover:text-hoverspt text-sm  transition duration-500">Ajuda</a>
                  </li>
                  <li class="px-4">
                    <a href="#" class="hover:text-hoverspt text-sm  transition duration-500">Baixar</a>
                  </li>
                  <li class="px-4">
                    <span class="border-r border-white"></span>
                  </li>
                  <li class="px-4">
                    <a href="#" class="hover:text-hoverspt text-sm  transition duration-500">Inscrever-se</a>
                  </li>
                  <li class="px-4">
                    <a href="#" class="hover:text-hoverspt text-sm  transition duration-500">Log In</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* body */}
      
    <div class="flex flex-col justify-center text-center bg-spotify-theme-mobile md:bg-spotify-theme bg-BannerMobile md:bg-Banner bg-195% md:bg-175% bg-purple-main text-green-main py-40 px-4">
      <h1 class="text-5xl md:text-9xl mb-10 font-bold max-w-4xl mx-auto leading-none">Escutar muda tudo</h1>
      <p class="text-md md:text-lg mb-10">Milhões de músicas e podcasts para explorar. E nem precisa de cartão de crédito.</p>
      <a href="#" class="bg-green-main hover:bg-white text-purple-main text-sm rounded-full px-10 py-3 uppercase font-bold max-w-xl mx-auto tracking-widest transition duration-500">Obtenha o Spotify Free</a>
    </div>
  
      {/* footer */}
      <footer>
        <div className='grid grid-cols-1 p-4 md:grid-cols-6 bg-black text-white p-20'>
          <div className='md:col-span-1 pt-10 md:pt-0'>
            <a href="#">
              <img src={SpotifyLogo} alt="spotify " className='w-20 md:w-132px'/>
            </a>
          </div>
          <div className='md:col-span-1 pt-10 md:pt-4'>
            <h3 className='uppercase text-gray-500 font-bold text-xs tracking-widest mb-5'>Empresa</h3>
            <ul>
              <li className='mb-5'>
                <a href="#">Sobre</a>
              </li>
              <li className='mb-5'>
                <a href="#">Empregos</a>
              </li>
              <li className='mb-5'>
                <a href="#">For the Record</a>
              </li>
            </ul>
          </div>
          <div className='md:col-span-1 pt-10 md:pt-4'>
            <h3 className='uppercase text-gray-500 font-bold text-xs tracking-widest mb-5'>Comunidades</h3>
            <ul>
              <li className='mb-5'>
                <a href="#">Para Artistas</a>
              </li>
              <li className='mb-5'>
                <a href="#">Desenvolvedores</a>
              </li>
              <li className='mb-5'>
                <a href="#">Publicidades</a>
              </li>
              <li className='mb-5'>
                <a href="#">Investidores</a>
              </li>
              <li className='mb-5'>
                <a href="#">Fornecedores</a>
              </li>
            </ul>
          </div>
          <div className='md:col-span-1 pt-10 md:pt-4'>
            <h3 className='uppercase text-gray-500 font-bold text-xs tracking-widest mb-5'>Links Úteis</h3>
            <ul>
              <li className='mb-5'>
                <a href="#">Ajuda</a>
              </li>
              <li className='mb-5'>
                <a href="#">Player da web</a>
              </li>
              <li className='mb-5'>
                <a href="#">Aplicativo móvel grátis</a>
              </li>
            </ul>
          </div>
          <div className='md:col-span-2 pt-10 md:pt-4'>
            <ul className='flex md:justify-end'>
              <li className='flex items-center justify-center text-2xl bg-gray-900 w-12 h-12 rounded-full
               hover:text-green-main mx-2 transition duration-500 '>
                <a href=""><i className="fab fa-instagram"></i></a>
              </li>
              <li className='flex items-center justify-center text-2xl bg-gray-900 w-12 h-12 rounded-full
               hover:text-green-main mx-2 transition duration-500 '>
                <a href=""><i className="fab fa-twitter"></i></a>
              </li>
              <li className='flex items-center justify-center text-2xl bg-gray-900 w-12 h-12 rounded-full
               hover:text-green-main mx-2 transition duration-500 '>
                <a href=""><i className="fab fa-facebook-f"></i></a>
              </li>
            </ul>
          </div>
          <div className='md:col-span-4 mt-20'>
            <ul>
              <li className='inline-block text-xs text-gray-600 mr-4'>
                <a href="#">Legal</a>
              </li>
              <li className='inline-block text-xs text-gray-600 mr-4'>
                <a href="#">Centro de privacidade</a>
              </li>
              <li className='inline-block text-xs text-gray-600 mr-4'>
                <a href="#">Política de privacidade</a>
              </li>
              <li className='inline-block text-xs text-gray-600 mr-4'>
                <a href="#">Cookies</a>
              </li>
              <li className='inline-block text-xs text-gray-600 mr-4'>
                <a href="#">Sobre anúncios</a>
              </li>
            </ul>
          </div>
          <div className='md:col-span-2 mt-20'>
            <p className='flex justify-end text-gray-500 text-xs'>&copy; 2020 Spotify AB</p>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default App 
