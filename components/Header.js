export default function Header() {
  return (
    <header>
      <div className="flex flex-col px-4 pt-4 mx-auto text-black roboto-regular max-w-7xl md:mx-10 lg:mx-20 xl:mx-auto">
        <div className="flex justify-center p-4">
          <img
            src="/images/logo.svg"
            alt="Sullivan Dcesaris - Desenvolvedor Web"
            className="w-80 h-20 object-cover object-center"
          />
        </div>
      </div>
    </header>
  );
}
