const Tweet = ({ name, position, text, photoLink, tweetLink }) => {
  return (
    <div className="relative group">
      <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200" />
      <a href={tweetLink} className="cursor-pointer">
        <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5 highlight">
          <div className="flex items-center space-x-4">
            <img
              src={photoLink}
              className="w-12 h-12 bg-center bg-cover border rounded-full"
              alt={name}
            />
            <div>
              <h3 className="text-lg font-semibold text-white">
                {name}
              </h3>
              <p className="text-gray-500 text-md">{position}</p>
            </div>
          </div>
          <p className="leading-normal text-gray-300 text-md">
            {text}
          </p>
        </div>
      </a>
    </div>
  );
};

export default function Testimonies() {
  return (
    <section id="testimonies" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
          <div className="mb-12 space-y-5 md:mb-16 md:text-center">
            <div className="inline-block px-3 py-1 text-sm font-semibold text-indigo-100 rounded-lg md:text-center text-cn bg-[#202c47] bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40">
              O que dizem sobre meu trabalho
            </div>
            <h1 className="mb-5 text-3xl font-semibold text-white md:text-center md:text-5xl">
              Não é só o que eu falo — é o que entrego.
            </h1>
            <p className="text-xl text-gray-100 md:text-center md:text-2xl">
              Veja como minha atuação impactou os projetos e negócios de quem já confiou em mim.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <ul className="space-y-8">
            <li className="text-sm leading-6">
              <Tweet
                name="Ana Beatriz Souza"
                position="Designer Gráfica"
                text="Profissional super competente! Meu site ficou lindo e funcional."
                photoLink="https://randomuser.me/api/portraits/women/41.jpg"
              />
            </li>
            <li className="text-sm leading-6">
              <Tweet
                name="Carlos Henrique"
                position="Empresário"
                text="Consegui triplicar meus contatos depois que o site entrou no ar."
                photoLink="https://randomuser.me/api/portraits/men/32.jpg"
              />
            </li>
            <li className="text-sm leading-6">
              <Tweet
                name="Mariana Lopes"
                position="Consultora de Marketing"
                text="Trabalhar com o Sullivan foi rápido, prático e eficiente."
                photoLink="https://randomuser.me/api/portraits/women/32.jpg"
              />
            </li>
            <li className="text-sm leading-6">
              <Tweet
                name="Ricardo Almeida"
                position="Diretor de Criação"
                text="A atenção aos detalhes foi o diferencial. Recomendo!"
                photoLink="https://randomuser.me/api/portraits/men/21.jpg"
              />
            </li>
          </ul>
          <ul className="hidden space-y-8 sm:block">
            <li className="text-sm leading-6">
              <Tweet
                name="Juliana Castro"
                position="CEO da Castro Digital"
                text="A identidade visual do meu negócio nunca foi tão forte."
                photoLink="https://randomuser.me/api/portraits/women/54.jpg"
              />
            </li>
            <li className="text-sm leading-6">
              <Tweet
                name="Thiago Oliveira"
                position="Programador Sênior"
                text="Código limpo, projeto bem documentado e prazo cumprido."
                photoLink="https://randomuser.me/api/portraits/men/28.jpg"
              />
            </li>
            <li className="text-sm leading-6">
              <Tweet
                name="Paula Mendes"
                position="Consultora de Negócios"
                text="Adorei o resultado. Já indiquei para três amigos!"
                photoLink="https://randomuser.me/api/portraits/women/10.jpg"
              />
            </li>
            <li className="text-sm leading-6">
              <Tweet
                name="Fernando Costa"
                position="Fotógrafo Profissional"
                text="Meu portfólio online ficou exatamente como imaginei."
                photoLink="https://randomuser.me/api/portraits/men/36.jpg"
              />
            </li>
          </ul>
          <ul className="hidden space-y-8 lg:block">
            <li className="text-sm leading-6">
              <Tweet
                name="Larissa Lima"
                position="Influencer Digital"
                text="Site rápido, bonito e do jeitinho que eu queria!"
                photoLink="https://randomuser.me/api/portraits/women/31.jpg"
              />
            </li>
            <li className="text-sm leading-6">
              <Tweet
                name="Gabriel Martins"
                position="Coach de Carreira"
                text="Agora meus clientes conseguem me encontrar facilmente online."
                photoLink="https://randomuser.me/api/portraits/men/20.jpg"
              />
            </li>
            <li className="text-sm leading-6">
              <Tweet
                name="Camila Ferreira"
                position="Advogada"
                text="Sullivan entendeu minhas necessidades e entregou mais do que esperava."
                photoLink="https://randomuser.me/api/portraits/women/19.jpg"
              />
            </li>
            <li className="text-sm leading-6">
              <Tweet
                name="Lucas Rocha"
                position="Produtor Musical"
                text="Meu estúdio ficou bem representado com o site que criamos juntos."
                photoLink="https://randomuser.me/api/portraits/men/45.jpg"
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
