import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import Card from "@/components/Card";

export default function Cursos() {
  const cursos = [
    { title: "Publicidade", image: "/imagens/publicidade.jpg" },
    { title: "Gastronomia", image: "/imagens/gastronomia.jpg" },
    { title: "Medicina", image: "/imagens/medicina.jpg" },
    { title: "Arquitetura", image: "/imagens/arquitetura.jpg" },
    { title: "Publicidade", image: "/imagens/publicidade.jpg" },
    { title: "Gastronomia", image: "/imagens/gastronomia.jpg" },
    { title: "Medicina", image: "/imagens/medicina.jpg" },
    { title: "Arquitetura", image: "/imagens/arquitetura.jpg" },
  ];

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center text-center text-white bg-[url('/imagens/graduacao.jpg')] bg-cover bg-center">
        <div className="bg-black/50 absolute inset-0" />
        <h1 className="relative z-10 text-4xl md:text-6xl font-bold">
          CURSOS
        </h1>
      </section>

      {/* Seção de cursos */}
      <Container>
        <section className="py-16">
          <h2 className="text-center text-green-700 font-semibold uppercase">
            Conheça Nossos Cursos
          </h2>
          <p className="text-center max-w-2xl mx-auto mt-4 text-gray-600">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {cursos.map((curso, i) => (
              <Card key={i} title={curso.title} />
            ))}
          </div>
        </section>
      </Container>

      {/* Call to Action */}
      <section className="relative bg-[url('/imagens/foguete.jpg')] bg-cover bg-center py-20 text-white text-center">
        <div className="bg-black/60 absolute inset-0" />
        <div className="relative z-10 max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Receba mais informações</h2>
          <form className="flex flex-col md:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Digite seu e-mail"
              className="px-4 py-3 rounded-lg w-full md:w-auto text-black"
            />
            <button className="px-6 py-3 bg-green-600 rounded-lg hover:bg-green-700">
              Receber novidades
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}
