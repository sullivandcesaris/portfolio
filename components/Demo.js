export default function Demo() {
  return (
    <section id="demo" className="py-20 bg-opacity-50 bg-emerald-50">
      <div className="mx-8 max-w-7xl md:mx-10 lg:mx-20 xl:mx-auto">
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
          <div className="mb-12 space-y-5 text-left md:mb-20 md:text-center">
            <div className="inline-block px-3 py-1 text-sm font-semibold rounded-lg bg-emerald-100 bg-opacity-60 text-emerald-500 hover:cursor-pointer hover:bg-opacity-80">
              Projeto em destaque
            </div>
            <h1 className="text-3xl font-semibold text-gray-800 md:text-5xl">
              Projetos que Transformam
            </h1>
            <p className="mx-auto text-xl md:w-2/3 md:text-2xl">
              Descubra como soluções digitais estrategicamente desenvolvidas impulsionam resultados reais, fortalecem a confiança e elevam o profissionalismo da sua marca.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-3xl px-8 mx-auto sm:px-6 lg:max-w-5xl lg:px-8">
        <div className="inline-block px-3 py-1 text-sm rounded-lg bg-emerald-100 bg-opacity-60 text-emerald-500 hover:cursor-pointer hover:bg-opacity-80">
          Landing Page
        </div>
        <h2 className="mt-4 bg-gradient-to-r from-[#1D976C] to-[#38ef7d] bg-clip-text text-3xl font-medium text-transparent">
          Desenvolvido com Next.js & TailwindCSS
        </h2>
        <p className="mt-4 text-lg font-normal lg:max-w-3xl">
          Landing page moderna e responsiva, desenvolvida com Next.js e estilizada com Tailwind CSS, garantindo performance e visual elegante.
        </p>
        <img
          src="landing-page.png"
          className="mt-8 rounded-xl"
          alt="placeholder"
        />
        <div className="grid grid-cols-1 grid-rows-1 gap-2 mt-4 md:auto-cols-auto md:grid-cols-3">
          <div className="flex flex-col justify-between p-5 transition duration-500 border-2 shadow-md border-tranparent rounded-xl bg-emerald-200 bg-opacity-30 hover:border-emerald-300 hover:shadow-xl md:col-span-2">
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                Tecnologia a favor do seu negócio
              </h3>
              <p className="mt-1 text-gray-800 text-md">
                Landing page projetada para converter visitantes em clientes. Estrutura otimizada, chamada clara à ação e carregamento rápido.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between p-5 transition duration-500 border-2 shadow-md border-tranparent rounded-xl bg-emerald-200 bg-opacity-30 hover:border-emerald-300 hover:shadow-xl">
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                Pronta em um instante
              </h3>
              <p className="mt-1 text-gray-800 text-md">
                Otimização avançada para que sua página carregue instantaneamente em qualquer dispositivo.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-3xl px-8 mx-auto sm:px-6 sm:pt-20 lg:max-w-5xl lg:px-8">
        <div className="inline-block px-3 py-1 mt-12 text-sm rounded-lg md:md-0 bg-emerald-100 bg-opacity-60 text-emerald-500 hover:cursor-pointer hover:bg-opacity-80">
          SaaS
        </div>
        <h2 className="mt-4 bg-gradient-to-r from-[#1D976C] to-[#38ef7d] bg-clip-text text-3xl font-medium text-transparent">
          Desenvolvido com Laravel & React Js
        </h2>
        <p className="mt-4 text-lg font-normal lg:max-w-3xl">
          Sistema rápido e escalável que garante alta disponibilidade e ótimo desempenho para todos os usuários.
        </p>
        <img
          src="saas.jpg"
          className="mt-8 rounded-xl"
          alt="placeholder"
        />
        <div className="grid grid-cols-1 grid-rows-1 gap-2 mt-4 md:auto-cols-auto md:grid-cols-3">
          <div className="flex flex-col justify-between p-5 transition duration-500 border-2 shadow-md border-tranparent rounded-xl bg-emerald-200 bg-opacity-30 hover:border-emerald-300 hover:shadow-xl">
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                Rápido e confiável
              </h3>
              <p className="mt-1 text-gray-800 text-md">
                Nossa plataforma entrega alta performance e disponibilidade, garantindo que seu trabalho nunca pare.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between p-5 transition duration-500 border-2 shadow-md border-tranparent rounded-xl bg-emerald-200 bg-opacity-30 hover:border-emerald-300 hover:shadow-xl">
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                Resposta instantânea
              </h3>
              <p className="mt-1 text-gray-800 text-md">
                Processamento em tempo real para decisões rápidas e eficientes, sem atrasos ou interrupções.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between p-5 transition duration-500 border-2 shadow-md border-tranparent rounded-xl bg-emerald-200 bg-opacity-30 hover:border-emerald-300 hover:shadow-xl">
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                Sistema Poderoso
              </h3>
              <p className="mt-1 text-gray-800 text-md">
                Construído com tecnologia de ponta para garantir estabilidade, segurança e alta performance contínua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
