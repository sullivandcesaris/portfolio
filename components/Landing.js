export default function Landing() {
  return (
    <section>
      <div className="max-w-3xl mx-8 md:mx-auto">
        <div className="my-20 space-y-10 text-center sm:my-16 md:space-y-14">
          <div className="space-y-5 md:space-y-8">
            <h1 className="text-3xl font-semibold text-white sm:text-5xl md:text-6xl md:text-gray-800">
              Sullivan Dcesaris, Desenvolvedor Web
            </h1>
            <h2 className="text-lg text-gray-100 md:text-2xl md:mx-10 md:text-gray-600">
              Sites modernos, responsivos e com foco em performance. Código limpo, resultado de alto impacto.
            </h2>
          </div>
          <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
            <div className="space-y-3">
              <a
                href="#demo"
                className="px-5 py-2 font-semibold text-gray-200 duration-500 ease-in-out shadow-lg hover:-translate-y-1.5 rounded-2xl md:text-xl md:px-8 md:py-3 bg-gradient-to-br to-purple-600 from-blue-500 hover:bg-gradient-to-br hover:to-blue-500 hover:from-purple-600"
              >
                Veja meu portfólio{' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="mb-0.5 h-7 w-7 hidden sm:inline"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <div className="pt-4 text-sm text-gray-200 sm:pt-2 md:text-gray-600">
                Precisa de um site? Eu posso desenvolver pra você.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full px-4 text-center sm:px-0 md:mx-auto md:my-12 md:w-3/5">
        <div className="relative z-10">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://godly.website"
          >
            <img
              className="transition duration-700 shadow-xl rounded-xl ring-1 ring-black ring-opacity-5 hover:transform hover:scale-105"
              src="images/product.png"
              alt="Product Image"
            />
          </a>
        </div>
        {/* <p className="z-10 my-8 text-sm font-medium text-gray-500">
            Caption if needed
          </p> */}
      </div>
      <div className="mt-20 space-y-6 text-center mb-28 md:mt-32">
        <h1 className="text-lg font-semibold tracking-wide text-center text-gray-100 text-opacity-75 uppercase md:mx-10 md:text-gray-600">
          As ferramentas que impulsionam meus projetos
        </h1>
        <div className="w-3/5 p-6 mx-auto bg-gray-100 rounded-2xl bg-opacity-70 md:bg-opacity-100 md:p-10">
          <div className="flex flex-wrap items-center justify-center flex-shrink -mt-6 -ml-6 space-x-6 space-y-6">
            <img
              className="h-10 mt-6 ml-6 md:h-10"
              src="images/docker.png"
              alt=""
            />
            <img
              className="h-7 md:h-7"
              src="images/php.png"
              alt=""
            />
            <img
              className="h-7 md:h-7"
              src="images/laravel.png"
              alt=""
            />
            <img
              className="h-10 md:h-10"
              src="images/js.png"
              alt=""
            />
            <img
              className="h-10 md:h-9"
              src="images/react.png"
              alt=""
            />
            <img
              className="h-8 md:h-8"
              src="images/nextjs.png"
              alt=""
            />
            <img
              className="h-7 md:h-7"
              src="images/tailwind.png"
              alt=""
            />
            <img
              className="h-8 md:h-8"
              src="images/wordpress.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
