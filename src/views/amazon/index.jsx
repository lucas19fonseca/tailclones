import { useState } from 'react'
import '../../index.css'
import AmazonLogo from "../../assets/amazon_logo.png"
import CatUm from "../../assets/cat1.jpg"
import CatDois from "../../assets/cat2.jpg"
import CatTres from "../../assets/cat3.jpg"
import CatQuatro from "../../assets/cat4.jpg"
import CatCinco from "../../assets/cat5.jpg"
import CatSeis from "../../assets/cat6.jpg"
import CatSete from "../../assets/cat7.jpg"
import CatOito from "../../assets/cat8.jpg"
import CatNove from "../../assets/cat9.jpg"
import LivroUm from "../../assets/livro1.jpg"
import LivroDois from "../../assets/livro2.jpg"
import LivroTres from "../../assets/livro3.jpg"
import LivroQuatro from "../../assets/livro4.jpg"
import LivroCinco from "../../assets/livro5.jpg"
import LivroSeis from "../../assets/livro6.jpg"
import LivroSete from "../../assets/livro7.jpg"
import LivroOito from "../../assets/harry.jpg"
import Banner from "../../assets/banner_promo.jpg"

function App() {
  return (
    <div className='font-arial'>
      <header>
        <div class="grid text-white">
          <div class="flex flex-wrap md:flex-no-wrap bg-darkblue-900 px-2 py-1 items-center">
            <div class="py-1 px-2 md:border border-gray-700 hover:border-white rounded">
              <i class="fas fa-bars text-2xl"></i>
            </div>
            <div class="flex mx-2 py-2 border border-transparent hover:border-white">
              <a href="/">
                <img src={AmazonLogo} alt="Amazon" className="h-7" />
              </a>
              <span class="text-xs pl-1 pt-1">.com.br</span>
            </div>
            <div class="w-full md:w-auto flex-grow md:ml-3 mr-0 pt-1 order-2 md:order-none">
              <form action="" class="flex">
                <select class="hidden md:block p-2 text-xs text-gray-700 bg-gray-100 hover:bg-gray-300 rounded-tl rounded-bl border-r border-gray-500">
                  <option>Livros</option>
                </select>
                <input type="text" className='p-2 flex-grow rounded-l md:rounded-none bg-white' />
                <button type="submit" class="px-4 bg-gold-100 hover:bg-gold-200 rounded-tr rounded-br">
                  <i class="fas fa-search text-darkblue-900 text-xl mt-1"></i>
                </button>
              </form>
            </div>
            <div class="hidden md:block ml-1 pb-1 text-xs border border-transparent rounded-sm p-2 hover:border-white">
              <p class="leading-3">Olá, Faça seu login</p>
              <p class="font-extrabold">Contas e Listas <i class="fas fa-chevron-down"></i></p>
            </div>
            <div class="hidden md:block pb-1 text-xs border border-transparent rounded-sm p-2 hover:border-white">
              <p class="leading-3">Devoluções</p>
              <p class="font-extrabold">e Pedidos</p>
            </div>
            <div class="hidden md:block pb-1 text-xs border border-transparent rounded-sm p-2 hover:border-white">
              <p class="leading-3">Experimente</p>
              <p class="font-extrabold">Prime <i class="fas fa-chevron-down"></i></p>
            </div>
            <div class="pb-1 border border-transparent rounded-sm p-2 hover:border-white absolute right-0 top-0 mr-2 mt-2 md:mr-0 md:mt-0 md:relative order-1 md:order-none md:flex">
              <i class="fas fa-shopping-cart flex text-2xl md:mr-2"></i>
              <span class="bold text-gold-200 text-base absolute top-0 left-0 -mt-1 ml-4 text-center w-6 h-6 bg-darkblue-600 rounded-full">0</span>
              <span class="hidden md:flex text-xs font-extrabold">Carrinho</span>
            </div>
          </div>

          <div class="flex bg-darkblue-600 text-sm px-2 py-1 items-center">
            <div class="flex items-center border border-transparent rounded-sm hover:border-white px-2 py-2 md:py-0">
              <div class="mr-1">
                <i class="fas fa-map-marker-alt text-xl"></i>
              </div>
              <div class="flex md:block leading-tight text-xs">
                <p class="mx-1 md:mx-0">Olá</p>
                <p class="font-bold">Selecione o endereço</p>
              </div>
            </div>
            <div class="hidden md:block">
              <nav>
                <ul class="flex ml-6 text-sm">
                  <li class="mr-4 border border-transparent rounded-sm hover:border-white px-2 py-1">
                    <a href="#">Mais Vendidos</a>
                  </li>
                  <li class="mr-4 border border-transparent rounded-sm hover:border-white px-2 py-1">
                    <a href="#">Livros</a>
                  </li>
                  <li class="mr-4 border border-transparent rounded-sm hover:border-white px-2 py-1">
                    <a href="#">Ofertas do Dia</a>
                  </li>
                  <li class="mr-4 border border-transparent rounded-sm hover:border-white px-2 py-1">
                    <a href="#">Atendimento ao Cliente</a>
                  </li>
                  <li class="mr-4 border border-transparent rounded-sm hover:border-white px-2 py-1">
                    <a href="#">Eletrônicos</a>
                  </li>
                  <li class="mr-4 border border-transparent rounded-sm hover:border-white px-2 py-1">
                    <a href="#">Ideias para Presente</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div class="flex text-black px-4 text-xs border-b border-gray-300 bg-gray-100 pt-1">
            <a href="" class="block md:hidden py-2 font-bold"><i class="fas fa-chevron-left"></i> Todos os Departamentos</a>
            <ul class="hidden md:flex">
              <li class="hover:text-orange-650 border-b-2 border-transparent hover:border-orange-650 py-1 px-3">
                <a href="#" class="h-full">Livros</a>
              </li>
              <li class="hover:text-orange-650 border-b-2 border-transparent hover:border-orange-650 py-1 px-3">
                <a href="#">Pesquisa avançada</a>
              </li>
              <li class="hover:text-orange-650 border-b-2 border-transparent hover:border-orange-650 py-1 px-3">
                <a href="#">Mais Vendidos</a>
              </li>
              <li class="hover:text-orange-650 border-b-2 border-transparent hover:border-orange-650 py-1 px-3">
                <a href="#">Pré-venda e Lançamentos</a>
              </li>
              <li class="hover:text-orange-650 border-b-2 border-transparent hover:border-orange-650 py-1 px-3">
                <a href="#">Livros em Oferta</a>
              </li>
              <li class="hover:text-orange-650 border-b-2 border-transparent hover:border-orange-650 py-1 px-3">
                <a href="#">Inglês e Outras Línguas</a>
              </li>
              <li class="hover:text-orange-650 border-b-2 border-transparent hover:border-orange-650 py-1 px-3">
                <a href="#">Loja Geek</a>
              </li>
              <li class="hover:text-orange-650 border-b-2 border-transparent hover:border-orange-650 py-1 px-3">
                <a href="#">Universitários e Acadêmicos</a>
              </li>
              <li class="hover:text-orange-650 border-b-2 border-transparent hover:border-orange-650 py-1 px-3">
                <a href="#">Didáticos e Escolares</a>
              </li>
              <li class="hover:text-orange-650 border-b-2 border-transparent hover:border-orange-650 py-1 px-3">
                <a href="#">Loja Infantil</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <main className='text-black'>
        <div class="grid grid-cols-6">

          <div class="hidden md:block col-span-1 pl-2 my-2 border-r border-gray-300 text-xs">
            <nav>
              <h3 class="font-bold">Destaque em Livros</h3>
              <ul class="pl-2 mb-2">
                <li class="text-gray-800 hover:text-orange-650 ">
                  <a href="#">Indicações Amazon</a>
                </li>
                <li class="text-gray-800 hover:text-orange-650 ">
                  <a href="#">Inglês e Outras Línguas</a>
                </li>
                <li class="text-gray-800 hover:text-orange-650 ">
                  <a href="#">Livros em Oferta</a>
                </li>
                <li class="text-gray-800 hover:text-orange-650 ">
                  <a href="#">Mais Vendidos do Mês</a>
                </li>
                <li class="text-gray-800 hover:text-orange-650 ">
                  <a href="#">Pré-venda e Lançamentos</a>
                </li>
                <li class="text-gray-800 hover:text-orange-650 ">
                  <a href="#">Livros Exclusivos Amazon</a>
                </li>
              </ul>
              <h3 class="font-bold">Páginas Especiais</h3>
              <ul class="pl-2 mb-2">
                <li class="text-gray-800 hover:text-orange-650 ">
                  <a href="#">Livros Clássicos</a>
                </li>
                <li class="text-gray-800 hover:text-orange-650 ">
                  <a href="#">Livros Que Viraram Filmes</a>
                </li>
                <li class="text-gray-800 hover:text-orange-650 ">
                  <a href="#">Livros Infantis</a>
                </li>
                <li class="text-gray-800 hover:text-orange-650 ">
                  <a href="#">Loja Geek</a>
                </li>
              </ul>
              <h3 class="font-bold">Livros Educacionais</h3>
              <ul class="pl-2 mb-2">
                <li class="text-gray-800 hover:text-orange-650 ">
                  <a href="#">Didáticos e Escolares</a>
                </li>
                <li class="text-gray-800 hover:text-orange-650 ">
                  <a href="#">Estudo e Ensino de Idiomas</a>
                </li>
                <li class="text-gray-800 hover:text-orange-650 ">
                  <a href="#">Exames e Concursos</a>
                </li>
                <li class="text-gray-800 hover:text-orange-650 ">
                  <a href="#">Importados para Exames</a>
                </li>
                <li class="text-gray-800 hover:text-orange-650 ">
                  <a href="#">Universitários e Acadêmicos</a>
                </li>
              </ul>
              <h3 class="font-bold">Kindle</h3>
              <ul class="pl-2 mb-2">
                <li class="text-gray-800 hover:text-orange-650 ">
                  <a href="#">Acessórios Kindle</a>
                </li>
                <li class="text-gray-800 hover:text-orange-650 ">
                  <a href="#">Comprar Kindle</a>
                </li>
                <li class="text-gray-800 hover:text-orange-650 ">
                  <a href="#">eBooks em Inglês</a>
                </li>
                <li class="text-gray-800 hover:text-orange-650 ">
                  <a href="#">eBooks em Oferta</a>
                </li>
                <li class="text-gray-800 hover:text-orange-650 ">
                  <a href="#">Kindle Unlimited</a>
                </li>
                <li class="text-gray-800 hover:text-orange-650 ">
                  <a href="#">Todos os eBooks</a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="col-span-6 md:col-span-5 p-2">
            <div class="flex flex-col">
              <div class="text-center">
                <h2 class="text-2xl font-bold md:text-3xl md:font-normal">Loja de Livros</h2>
                <ul class="flex flex-wrap md:flex-no-wrap justify-center text-sm :text-xs px-4 md:px-0 pb-2">
                  <li>
                    <a href="#" class="text-blue-600 underline hover:text-orange-650 px-1 border-r border-black">Livros em Oferta</a>
                  </li>
                  <li>
                    <a href="#" class="text-blue-600 underline hover:text-orange-650 px-1 border-r border-black">Importados</a>
                  </li>
                  <li>
                    <a href="#" class="text-blue-600 underline hover:text-orange-650 px-1 border-r border-black">Lançamentos</a>
                  </li>
                  <li>
                    <a href="#" class="text-blue-600 underline hover:text-orange-650 px-1 border-r border-black">Universitários</a>
                  </li>
                  <li>
                    <a href="#" class="text-blue-600 underline hover:text-orange-650 px-1 border-r border-black">Didáticos e Escolares</a>
                  </li>
                  <li>
                    <a href="#" class="text-blue-600 underline hover:text-orange-650 px-1 border-r border-black">HQs e Mangás</a>
                  </li>
                  <li>
                    <a href="#" class="text-blue-600 underline hover:text-orange-650 px-1 border-r border-black">Mais Vendidos</a>
                  </li>
                  <li>
                    <a href="#" class="text-blue-600 underline hover:text-orange-650 px-1 border-r border-black">Livros Infantis</a>
                  </li>
                  <li>
                    <a href="#" class="text-blue-600 underline hover:text-orange-650 px-1">Indicações</a>
                  </li>
                </ul>
                <div class="h-2 border-b shadow-md"></div>
              </div>
              <div class="hidden md:block my-6">
                <img src={Banner} alt="Banner Promo" />
              </div>
              <div class="flex flex-col md:flex-row items-center my-8 py-1">
                <p class="font-bold md:w-3/4 text-center md:border-r-2 border-gray-300 leading-5 pr-2 mt-10 md:mt-0">Assine o Amazon Prime para ter benefícios de leitura com o Prime Reading, frete GRÁTIS sem valor mínimo de compra e muito mais. Apenas R$ 9,90/mês.</p>
                <a href="#" class="text-sm md:text-xs bg-yellow-350 border border-yellow-700 rounded px-3 py-3 md:py-0 md:ml-10 h-12 md:h-8 block md:flex items-center w-full md:w-auto text-center">Teste GRÁTIS por 30 dias</a>
              </div>
              <div class="flex flex-col px-6 pb-8 border-b border-gray300">
                <h3 class="text-center md:text-left text-xl font-bold mb-4">Encontre ofertas por categoria</h3>
                <ul class="flex flex-wrap md:flex-no-wrap px-2 text-xs font-bold">
                  <li class="text-center mx-3 mb-4 md:mb-0">
                    <img src={CatUm} class="rounded w-full md:w-75px mb-2 mx-auto" alt="Todas as Ofertas" />
                    <a href="#">Todas as Ofertas</a>
                  </li>
                  <li class="text-center mx-3 mb-4 md:mb-0">
                    <img src={CatDois} class="rounded w-full md:w-75px mb-2 mx-auto" alt="Ofertas Relâmpago" />
                    <a href="#">Ofertas Relâmpago</a>
                  </li>
                  <li class="text-center mx-3 mb-4 md:mb-0">
                    <img src={CatTres} class="rounded w-full md:w-75px mb-2 mx-auto" alt="Literatura" />
                    <a href="#">Literatura</a>
                  </li>
                  <li class="text-center mx-4 mb-4 md:mb-0">
                    <img src={CatQuatro} class="rounded w-full md:w-75px mb-2 mx-auto" alt="HQs e Mangás" />
                    <a href="#">HQs e Mangás</a>
                  </li>
                  <li class="text-center mx-3 mb-4 md:mb-0">
                    <img src={CatCinco} class="rounded w-full md:w-75px mb-2 mx-auto" alt="Ficção" />
                    <a href="#">Ficção</a>
                  </li>
                  <li class="text-center mx-3 mb-4 md:mb-0">
                    <img src={CatSeis} class="rounded w-full md:w-75px mb-2 mx-auto" alt="Inglês e outras línguas" />
                    <a href="#" class="block w-3/4 mx-auto">Inglês e outras línguas</a>
                  </li>
                  <li class="text-center mx-3 mb-4 md:mb-0">
                    <img src={CatSete} class="rounded w-full md:w-75px mb-2 mx-auto" alt="Autoajuda" />
                    <a href="#">Autoajuda</a>
                  </li>
                  <li class="text-center mx-3 mb-4 md:mb-0">
                    <img src={CatOito} class="rounded w-full md:w-75px mb-2 mx-auto" alt="Infantil" />
                    <a href="#">Infantil</a>
                  </li>
                  <li class="text-center mx-auto md:mx-3 mb-4 md:mb-0">
                    <img src={CatNove} class="rounded w-full md:w-75px mb-2 mx-auto" alt="Negócios" />
                    <a href="#">Negócios</a>
                  </li>
                </ul>
              </div>
              <div class="flex flex-col">
                <div class="flex justify-between py-2 px-4 text-sm">
                  <p>Mostrando 1-32 de 122 Resultados</p>
                  <div class="flex md:flex-none">
                    <span>Ordenar por</span>
                    <select class="bg-gray-300 pr-4 md:pr-12 ml-3 rounded-sm border border-gray-600 text-xs px-1">
                      <option>Destaques</option>
                    </select>
                  </div>
                </div>
                <div class="flex flex-wrap border border-gray-300 divide-x divide-gray-300 mb-10">
                  <div class="w-1/2 md:w-1/4 flex flex-col px-8 py-4 border-b border-gray-300 ">
                    <img src={LivroUm} class="h-210px place-self-center p-2" alt="Livro 1" />
                    <p class="text-red-700 mt-10">R$ 26,30</p>
                    <p class="text-sm mb-2">De: <span class="line-through">R$ 63,00</span> (58% off)</p>
                    <p class="text-xs text-gray-700 mb-2">Termina em 2:09:46</p>
                    <a href="#" class="text-sm text-blue-600 hover:underline hover:text-orange-650 mb-2">Em Busca De Sentido</a>
                    <p class="text-sm mb-8">Esta oferta é exclusiva para membros do <a href="#" class="text-xs text-blue-600 hover:underline hover:text-orange-650">Amazon Prime</a>.</p>
                    <button class="text-xs bg-gray-200 border border-gray-600 rounded-sm py-1 ">Saiba mais</button>
                  </div>
                  <div class="w-1/2 md:w-1/4 flex flex-col px-8 py-4 border-b border-gray-300">
                    <img src={LivroDois} alt="Livro 2" class="h-210px place-self-center p-2" />
                    <p class="text-red-700 mt-10">R$ 17,40</p>
                    <p class="text-sm mb-2">De: <span class="line-through">R$ 39,90</span> (56% off)</p>
                    <p class="text-xs text-gray-700 mb-2">Termina em 2:09:46</p>
                    <a href="#" class="text-sm text-blue-600 hover:underline hover:text-orange-650 mb-2">Não Se Humilha, Não</a>
                    <p class="text-sm mb-8">Esta oferta é exclusiva para membros do <a href="#" class="text-xs text-blue-600 hover:underline hover:text-orange-650">Amazon Prime</a>.</p>
                    <button class="text-xs bg-gray-200 border border-gray-600 rounded-sm py-1 ">Saiba mais</button>
                  </div>
                  <div class="w-1/2 md:w-1/4 flex flex-col px-8 py-4 border-b border-gray-300">
                    <img src={LivroTres} alt="Livro 3" class="h-210px place-self-center p-2" />
                    <p class="text-red-700 mt-10">R$ 17,40</p>
                    <p class="text-sm mb-2">De: <span class="line-through">R$ 34,90</span> (50% off)</p>
                    <p class="text-xs text-gray-700 mb-2">Termina em 2:09:46</p>
                    <a href="#" class="text-sm text-blue-600 hover:underline hover:text-orange-650 mb-2">Em Busca De Sentido</a>
                    <p class="text-sm mb-8">Esta oferta é exclusiva para membros do <a href="#" class="text-xs text-blue-600 hover:underline hover:text-orange-650">Amazon Prime</a>.</p>
                    <button class="text-xs bg-gray-200 border border-gray-600 rounded-sm py-1 ">Saiba mais</button>
                  </div>
                  <div class="w-1/2 md:w-1/4 flex flex-col px-8 py-4 border-b border-gray-300">
                    <img src={LivroQuatro} alt="Livro 4" class="h-210px place-self-center p-2" />
                    <p class="text-red-700 mt-10">R$ 27,90</p>
                    <p class="text-sm mb-2">De: <span class="line-through">R$ 49,90</span> (44% off)</p>
                    <p class="text-xs text-gray-700 mb-2">Termina em 2:09:46</p>
                    <a href="#" class="text-sm text-blue-600 hover:underline hover:text-orange-650 mb-2">Anne II</a>
                    <p class="text-sm mb-8">Esta oferta é exclusiva para membros do <a href="#" class="text-xs text-blue-600 hover:underline hover:text-orange-650">Amazon Prime</a>.</p>
                    <button class="text-xs bg-gray-200 border border-gray-600 rounded-sm py-1 ">Saiba mais</button>
                  </div>
                  <div class="w-1/2 md:w-1/4 flex flex-col px-8 py-4">
                    <img src={LivroCinco} alt="Livro 5" class="h-210px place-self-center p-2" />
                    <p class="text-red-700 mt-10">R$ 13,40</p>
                    <p class="text-sm mb-2">De: <span class="line-through">R$ 39,90</span> (66% off)</p>
                    <p class="text-xs text-gray-700 mb-2">Termina em 2:09:46</p>
                    <a href="#" class="text-sm text-blue-600 hover:underline hover:text-orange-650 mb-2">Propósito - A coragem de ser quem somos</a>
                    <p class="text-sm mb-8">Esta oferta é exclusiva para membros do <a href="#" class="text-xs text-blue-600 hover:underline hover:text-orange-650">Amazon Prime</a>.</p>
                    <button class="text-xs bg-gray-200 border border-gray-600 rounded-sm py-1">Saiba mais</button>
                  </div>
                  <div class="w-1/2 md:w-1/4 flex flex-col px-8 py-4">
                    <img src={LivroSeis} alt="Livro 6" class="h-210px place-self-center p-2" />
                    <p class="text-red-700 mt-10">R$ 20,50</p>
                    <p class="text-sm mb-2">De: <span class="line-through">R$ 42,00</span> (51% off)</p>
                    <p class="text-xs text-gray-700 mb-2">Termina em 2:09:46</p>
                    <a href="#" class="text-sm text-blue-600 hover:underline hover:text-orange-650 mb-2">A morte de Ivan Illitch</a>
                    <p class="text-sm mb-8">Esta oferta é exclusiva para membros do <a href="#" class="text-xs text-blue-600 hover:underline hover:text-orange-650">Amazon Prime</a>.</p>
                    <button class="text-xs bg-gray-200 border border-gray-600 rounded-sm py-1 ">Saiba mais</button>
                  </div>
                  <div class="w-1/2 md:w-1/4 flex flex-col px-8 py-4">
                    <img src={LivroSete} alt="Livro 7" class="h-210px place-self-center p-2" />
                    <p class="text-red-700 mt-10">R$ 10,40</p>
                    <p class="text-sm mb-2">De: <span class="line-through">R$ 37,90</span> (73% off)</p>
                    <p class="text-xs text-gray-700 mb-2">Termina em 2:09:46</p>
                    <a href="#" class="text-sm text-blue-600 hover:underline hover:text-orange-650 mb-2">Outros jeitos de usar a boca</a>
                    <p class="text-sm mb-8">Esta oferta é exclusiva para membros do <a href="#" class="text-xs text-blue-600 hover:underline hover:text-orange-650">Amazon Prime</a>.</p>
                    <button class="text-xs bg-gray-200 border border-gray-600 rounded-sm py-1 ">Saiba mais</button>
                  </div>
                  <div class="w-1/2 md:w-1/4 flex flex-col px-8 py-4">
                    <img src={LivroOito} alt="Livro 8" class="h-210px place-self-center p-2" />
                    <p class="text-red-700 mt-10">R$ 55,90</p>
                    <p class="text-sm mb-2">De: <span class="line-through">R$ 119,90</span> (53% off)</p>
                    <p class="text-xs text-gray-700 mb-2">Termina em 2:09:46</p>
                    <a href="#" class="text-sm text-blue-600 hover:underline hover:text-orange-650 mb-2">Nassim Nicholas Taleb - Kit Exclusivo Amazon</a>
                    <p class="text-sm mb-8">Esta oferta é exclusiva para membros do <a href="#" class="text-xs text-blue-600 hover:underline hover:text-orange-650">Amazon Prime</a>.</p>
                    <button class="text-xs bg-gray-200 border border-gray-600 rounded-sm py-1">Saiba mais</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer class="flex flex-col text-white">
       
        <div class="py-4 text-center bg-darkblue-600 hover:bg-darkblue-500 text-sm">
          <p>Voltar ao início</p>
        </div>
        <div class="flex flex-wrap md:flex-no-wrap md:justify-around py-10 px-10 md:px-20 bg-darkblue-700">
          <div class="w-1/2 md:w-auto mb-4 md:mb-0">
            <h4 class="font-bold mb-2">Conheça-nos</h4>
            <ul class="text-xs w-3/4">
              <li class="mb-2 text-gray-400 hover:underline leading-4">
                <a href="#">Informações corporativas</a>
              </li>
              <li class="mb-2 text-gray-400 hover:underline leading-4">
                <a href="#">Carreiras</a>
              </li>
              <li class="mb-2 text-gray-400 hover:underline leading-4">
                <a href="#">Comunicados à imprensa</a>
              </li>
              <li class="mb-2 text-gray-400 hover:underline leading-4">
                <a href="#">Comunidade</a>
              </li>
            </ul>
          </div>
          <div class="w-1/2 md:w-auto mb-4 md:mb-0">
            <h4 class="font-bold mb-2">Ganhe dinheiro conosco</h4>
            <ul class="text-xs w-3/4">
              <li class="mb-2 text-gray-400 hover:underline leading-4">
                <a href="#">Publique seus livros</a>
              </li>
              <li class="mb-2 text-gray-400 hover:underline leading-4">
                <a href="#">Seja um associado</a>
              </li>
              <li class="mb-2 text-gray-400 hover:underline leading-4">
                <a href="#">Venda na Amazon</a>
              </li>
            </ul>
          </div>
          <div class="w-1/2 md:w-auto mb-4 md:mb-0">
            <h4 class="font-bold mb-2">Conheça-nos</h4>
            <ul class="text-xs w-3/4">
              <li class="mb-2 text-gray-400 hover:underline leading-4">
                <a href="#">Sua conta</a>
              </li>
              <li class="mb-2 text-gray-400 hover:underline leading-4">
                <a href="#">Frete e prazo de entrega</a>
              </li>
              <li class="mb-2 text-gray-400 hover:underline leading-4">
                <a href="#">Devoluções e reembolsos</a>
              </li>
              <li class="mb-2 text-gray-400 hover:underline leading-4">
                <a href="#">Gerencie seu conteúdo e dispositivos</a>
              </li>
              <li class="mb-2 text-gray-400 hover:underline leading-4">
                <a href="#">Ajuda</a>
              </li>
            </ul>
          </div>
          <div class="w-1/2 md:w-auto mb-4 md:mb-0">
            <h4 class="font-bold mb-2">Pagamentos</h4>
            <ul class="text-xs w-3/4">
              <li class="mb-2 text-gray-400 hover:underline leading-4">
                <a href="#">Amazon e COVID-19</a>
              </li>
              <li class="mb-2 text-gray-400 hover:underline leading-4">
                <a href="#">Cartões de crédito e Boleto</a>
              </li>
            </ul>
          </div>
        </div>
       
        <div class="hidden md:flex flex-col items-center bg-darkblue-700 border-t border-gray-700 pt-6 pb-4">
          <img src={AmazonLogo} alt="Amazon" class="w-20" />
            <ul class="flex flex-wrap justify-center text-xs pt-4 text-gray-400 w-3/4">
              <li class="px-2 border-r border-gray-600 hover:underline">
                <a href="#">Austrália</a>
              </li>
              <li class="px-2 border-r border-gray-600 hover:underline">
                <a href="#">Alemanha</a>
              </li>
              <li class="px-2 border-r border-gray-600 hover:underline">
                <a href="#">Canadá</a>
              </li>
              <li class="px-2 border-r border-gray-600 hover:underline">
                <a href="#">China</a>
              </li>
              <li class="px-2 border-r border-gray-600 hover:underline">
                <a href="#">Cingapura</a>
              </li>
              <li class="px-2 border-r border-gray-600 hover:underline">
                <a href="#">Espanha</a>
              </li>
              <li class="px-2 border-r border-gray-600 hover:underline">
                <a href="#">Estados Unidos</a>
              </li>
              <li class="px-2 border-r border-gray-600 hover:underline">
                <a href="#">França</a>
              </li>
              <li class="px-2 border-r border-gray-600 hover:underline">
                <a href="#">Holanda</a>
              </li>
              <li class="px-2 border-r border-gray-600 hover:underline">
                <a href="#">Índia</a>
              </li>
              <li class="px-2 border-r border-gray-600 hover:underline">
                <a href="#">Itália</a>
              </li>
              <li class="px-2 border-r border-gray-600 hover:underline">
                <a href="#">Japão</a>
              </li>
              <li class="px-2 border-r border-gray-600 hover:underline">
                <a href="#">México</a>
              </li>
              <li class="px-2 border-r border-gray-600 hover:underline">
                <a href="#">Emirados Árabes Unidos</a>
              </li>
              <li class="px-2 border-r border-gray-600 hover:underline">
                <a href="#">Reino Unido</a>
              </li>
              <li class="px-2 border-r border-gray-600 hover:underline">
                <a href="#">Turquia</a>
              </li>
            </ul>
            <div class="flex text-xs">
              <span class="text-gray-600 mr-2">E não esqueça:</span>
              <a href="#" class="text-gray-400 hover:underline">Amazon Web Services</a>
            </div>
        </div>
      
        <div class="flex flex-col items-center bg-darkblue-950 text-xs pt-8 md:pt-2">
          <div class="flex flex-col md:flex-row mb-10">
            <ul class="flex">
              <li class="px-2 border-none md:border-r text-center md:text-left border-gray-600 hover:underline">
                <a href="#">Condições de Uso</a>
              </li>
              <li class="px-2 border-none md:border-r text-center md:text-left border-gray-600 hover:underline">
                <a href="#">Notificação de Privacidade</a>
              </li>
              <li class="px-2 border-none md:border-r text-center md:text-left border-gray-600 hover:underline">
                <a href="#">Cookies</a>
              </li>
              <li class="px-2 border-none md:border-r text-center md:text-left border-gray-600 hover:underline">
                <a href="#">Anúncios Baseados em Interesses</a>
              </li>
            </ul>
            <span class="text-center md:text-left mt-8 md:mt-0 ml-4 text-gray-600">&copy; Amazon.com, Inc. ou suas afiliadas</span>
          </div>
          <p class="item-footer-inf">Amazon Serviços de Varejo do Brasil Ltda. | CNPJ 15.436.940/0001-03</p>
          <p class="item-footer-inf">Av. Juscelino Kubischeck, 2041, Torre E, 18º andar - São Paulo <a href="#" class="text-blue-800">Fale conosco</a></p>
          <p class="item-footer-inf">Formas de pagamento aceits: cartões de crédito (Visa, Mastercard, Elo e American Express) e boleto.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
