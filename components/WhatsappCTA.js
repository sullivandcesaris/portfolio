export default function WhatsAppCTA() {
  // Seu número no formato internacional sem espaços nem símbolos, ex: 5511999999999
  const whatsappNumber = "5542988778282";

  // Mensagem padrão que já aparece no chat
  const message = encodeURIComponent("Olá Sullivan, gostaria de saber mais sobre seus serviços!");

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <div className="max-w-xl mx-auto mt-4 text-center">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
      >
        Falar no WhatsApp
      </a>
    </div>
  );
}