import WhatsAppCTA from './WhatsappCTA';

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-20 md:pb-32 bg-gradient-to-t from-sky-300 to-sky-100"
    >
      <div className="mx-8 max-w-7xl md:mx-10 lg:mx-20 xl:mx-auto">
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100 md:mb-16">
          <div className="max-w-3xl mx-auto md:text-center">
            <div className="inline-block px-3 py-1 text-sm font-semibold text-black rounded-lg bg-[#bbd0dd] bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40 mb-4">
              Planos Personalizados para Você
            </div>
            <h2 className="mb-5 text-3xl font-semibold text-gray-800 md:text-5xl">
              Qualidade e valor que cabem no seu bolso.
            </h2>
            <p className="text-xl md:text-2xl">
              Nossos serviços são pensados para entregar a melhor experiência, adaptando soluções que atendem exatamente às suas necessidades, com preços justos e transparência total.
            </p>
          </div>
        </div>
        <WhatsAppCTA />
      </div>
    </section>
  );
}
