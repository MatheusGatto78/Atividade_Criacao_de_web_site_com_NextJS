import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import Container from "@/components/Container";

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="relative h-[80vh] flex items-center justify-center text-center text-white bg-[url('/imagens/banner.jpg')] bg-cover bg-center">
        <div className="bg-black/50 absolute inset-0" />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold">GRADUAÇÃO UNI</h1>
          <button className="mt-6 px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg text-lg font-semibold">
            EMBARQUE
          </button>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-green-700 text-white text-center grid grid-cols-2 md:grid-cols-4 gap-6">
        <div>
          <p className="text-3xl font-bold">80+</p>
          <p>Cursos</p>
        </div>
        <div>
          <p className="text-3xl font-bold">40</p>
          <p>Anos de história</p>
        </div>
        <div>
          <p className="text-3xl font-bold">10/10</p>
          <p>Avaliação dos alunos</p>
        </div>
        <div>
          <p className="text-3xl font-bold">50.000</p>
          <p>Alunos formados</p>
        </div>
      </section>

      {/* Sobre */}
      <Container>
        <section className="py-16 grid md:grid-cols-2 gap-8 items-center">
          <img
            src="/imagens/univille.jpg"
            alt="Univille"
            className="rounded-lg shadow-lg"
          />
          <div>
            <h2 className="text-2xl font-bold mb-4">Sobre a Univille</h2>
            <p className="mb-6 text-gray-700">
              A Univille é uma universidade reconhecida pela sua excelência
              acadêmica, tradição e inovação em ensino superior.
            </p>
            <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
              Continue Lendo
            </button>
          </div>
        </section>
      </Container>

      {/* Cursos */}
      <Container>
        <section className="py-16">
          <h2 className="text-2xl font-bold mb-6">Conheça nossos cursos</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card
              title="Publicidade"
            />
            <Card
              title="Gastronomia"
            />
            <Card
              title="Medicina"
            />
          </div>
        </section>
      </Container>

      {/* Depoimentos */}
      <Container>
        <section className="py-16 text-center">
          <h2 className="text-2xl font-bold mb-6">O que dizem nossos alunos</h2>
          <Card
            title="José Luiz"
          />
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
