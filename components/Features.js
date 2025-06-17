export default function Features() {
  return (
    <section
      id="features"
      className="py-20 bg-gradient-to-t from-[#08244a] to-[#232cdf]"
    >
      <div className="mx-8 max-w-7xl md:mx-10 lg:mx-20 xl:mx-auto">
        <div className="space-y-16 md:space-y-24">
          <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
            <div className="space-y-5 md:text-center">
              <div className="inline-block rounded-lg bg-[#01013D] bg-opacity-60 px-3 py-1 text-sm font-semibold text-indigo-100 hover:cursor-pointer hover:bg-opacity-40">
                Habilidades em destaque
              </div>
              <h1 className="text-3xl font-semibold text-gray-100 md:text-5xl">
                Serviços que ofereço
              </h1>
              <p className="text-xl text-gray-200 md:text-2xl">
                Crio sites modernos, rápidos e funcionais, focados em <span className="font-semibold">resultados reais</span>{' '} para o seu negócio.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 grid-rows-2 gap-8 text-lg md:grid-cols-2 lg:grid-cols-3">
            <div className="flex shadow-md hover:shadow-[#00e4ff] flex-col justify-between p-5 transition duration-400 bg-white bg-opacity-20 rounded-xl card-hover group space-y-5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="border-[#322e37] bg-gradient-to-b from-[#5b585f] to-[#2d2a33] h-10 w-10 rounded-full border p-2 transition duration-400 group-hover:border-[#00e4ff] group-hover:shadow-[#00e4ff] group-hover:shadow-sm">
                <path d="M2 3h20v14H2z"></path>
                <path d="M8 21h8"></path>
                <path d="M12 17v4"></path>
              </svg>
              <h3 className="text-xl font-semibold text-white">
                Desenvolvimento Web Responsivo
              </h3>
              <p className="text-gray-200">
                Seus clientes acessam de qualquer dispositivo? Meus sites são adaptáveis, rápidos e otimizados para garantir a melhor experiência em smartphones, tablets e desktops, com foco total na usabilidade e performance.
              </p>
            </div>
            <div className="flex shadow-md hover:shadow-[#00e4ff] flex-col justify-between p-5 transition duration-400 bg-white bg-opacity-20 rounded-xl card-hover group space-y-5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="border-[#322e37] bg-gradient-to-b from-[#5b585f] to-[#2d2a33] h-10 w-10 rounded-full border p-2 transition duration-400 group-hover:border-[#00e4ff] group-hover:shadow-[#00e4ff] group-hover:shadow-sm">
                <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polyline>
              </svg>
              <h3 className="text-xl font-semibold text-white">
                Performance e SEO
              </h3>
              <p className="text-gray-200">
                Sites rápidos geram mais resultados. Escrevo código limpo e leve, com boas práticas de SEO para que seu site seja encontrado no Google e carregue em segundos — mesmo com internet lenta.
              </p>
            </div>
            <div className="flex shadow-md hover:shadow-[#00e4ff] flex-col justify-between p-5 transition duration-400 bg-white bg-opacity-20 rounded-xl card-hover group space-y-5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="border-[#322e37] bg-gradient-to-b from-[#5b585f] to-[#2d2a33] h-10 w-10 rounded-full border p-2 transition duration-400 group-hover:border-[#00e4ff] group-hover:shadow-[#00e4ff] group-hover:shadow-sm">
                <path d="M12 22a10 10 0 1 1 10-10 4 4 0 0 1-4 4H8a4 4 0 0 0 0 8z"></path>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <circle cx="15.5" cy="8.5" r="1.5"></circle>
                <circle cx="12" cy="12" r="1.5"></circle>
              </svg>
              <h3 className="text-xl font-semibold text-white">
                Design Personalizado
              </h3>
              <p className="text-gray-200">
                Crio interfaces únicas e modernas, alinhadas com a identidade visual do seu negócio. Nada de templates genéricos: você recebe um site pensado nos seus objetivos e no perfil do seu público.
              </p>
            </div>
            <div className="flex shadow-md hover:shadow-[#00e4ff] flex-col justify-between p-5 transition duration-400 bg-white bg-opacity-20 rounded-xl card-hover group space-y-5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="border-[#322e37] bg-gradient-to-b from-[#5b585f] to-[#2d2a33] h-10 w-10 rounded-full border p-2 transition duration-400 group-hover:border-[#00e4ff] group-hover:shadow-[#00e4ff] group-hover:shadow-sm">
                <polyline points="4 17 10 11 4 5"></polyline>
                <line x1="12" y1="19" x2="20" y2="19"></line>
              </svg>
              <h3 className="text-xl font-semibold text-white">
                Tecnologias Atuais
              </h3>
              <p className="text-gray-200">
                Trabalho com ferramentas como React, Next.js, Tailwind CSS, Laravel, entre outras. Isso garante sites modernos, seguros, escaláveis e prontos para crescer com seu projeto.
              </p>
            </div>
            <div className="flex shadow-md hover:shadow-[#00e4ff] flex-col justify-between p-5 transition duration-400 bg-white bg-opacity-20 rounded-xl card-hover group space-y-5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="border-[#322e37] bg-gradient-to-b from-[#5b585f] to-[#2d2a33] h-10 w-10 rounded-full border p-2 transition duration-400 group-hover:border-[#00e4ff] group-hover:shadow-[#00e4ff] group-hover:shadow-sm">
                <path d="M21 13v-2a2 2 0 0 0-2-2h-2V7a2 2 0 0 0-2-2h-2V3h-2v2H9a2 2 0 0 0-2 2v2H5a2 2 0 0 0-2 2v2h2v2H3v2a2 2 0 0 0 2 2h2v2h2v-2h2a2 2 0 0 0 2-2v-2h2v-2h2a2 2 0 0 0 2-2z"></path>
              </svg>
              <h3 className="text-xl font-semibold text-white">
                Funcionalidades sob Medida
              </h3>
              <p className="text-gray-200">
                Precisa de blog, formulário, integração com redes sociais, áreas restritas ou loja virtual? Desenvolvo tudo sob demanda, focando nas necessidades reais do seu negócio.
              </p>
            </div>
            <div className="flex shadow-md hover:shadow-[#00e4ff] flex-col justify-between p-5 transition duration-400 bg-white bg-opacity-20 rounded-xl card-hover group space-y-5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="border-[#322e37] bg-gradient-to-b from-[#5b585f] to-[#2d2a33] h-10 w-10 rounded-full border p-2 transition duration-400 group-hover:border-[#00e4ff] group-hover:shadow-[#00e4ff] group-hover:shadow-sm">
                <path d="M4 17l5-5 3 3 4-4 4 4"></path>
                <path d="M14 14l2 2"></path>
                <path d="M9 9l3-3 2 2"></path>
              </svg>
              <h3 className="text-xl font-semibold text-white">
                Atendimento Direto e Suporte
              </h3>
              <p className="text-gray-200">
                Falo diretamente com você em todas as etapas: briefing, execução, entrega e pós-lançamento. Meus clientes têm suporte real, prazos cumpridos e clareza do início ao fim.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
