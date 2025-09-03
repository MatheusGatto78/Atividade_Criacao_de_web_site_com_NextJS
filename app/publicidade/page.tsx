import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import Card from "@/components/Card";

export default function Publicidade() {
  const professores = [
    {
      name: "Camila Silva",
      role: "Coordenadora do curso",
      desc: "Mestre em Comunicação e especialista em Marketing Digital.",
      image: "/imagens/professores/camila.jpg",
    },
    {
      name: "João Pedro",
      role: "Professor",
      desc: "Atua na área de produção audiovisual e fotografia publicitária.",
      image: "/imagens/professores/joao.jpg",
    },
    {
      name: "Mariana Rocha",
      role: "Professora",
      desc: "Especialista em Branding e Planejamento Estratégico.",
      image: "/imagens/professores/mariana.jpg",
    },
    {
      name: "Carlos Souza",
      role: "Professor",
      desc: "Designer gráfico com experiência em grandes agências.",
      image: "/imagens/professores/carlos.jpg",
    },
  ];

  const projetos = [
    { title: "Campanha X", image: "/imagens/projetos/projeto1.jpg" },
    { title: "Outdoor Criativo", image: "/imagens/projetos/projeto2.jpg" },
    { title: "Marketing de Conteúdo", image: "/imagens/projetos/projeto3.jpg" },
  ];

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center text-center text-white bg-[url('/imagens/publicidade-banner.jpg')] bg-cover bg-center">
        <div className="bg-black/50 absolute inset-0" />
        <h1 className="relative z-10 text-4xl md:text-6xl font-bold">
          PUBLICIDADE E PROPAGANDA
        </h1>
      </section>

      <Container>
        {/* Descrição do curso */}
        <section className="py-16 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Sobre o curso</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              O curso de Publicidade e Propaganda prepara você para atuar em
              agências de comunicação, marketing digital, produção audiovisual e
              criação de campanhas criativas.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Com professores experientes e uma estrutura moderna, você terá
              acesso a ferramentas de última geração e projetos práticos desde o
              início da graduação.
            </p>
            <a
              href="#matricula"
              className="inline-block mt-4 text-green-600 font-semibold hover:underline"
            >
              Saiba mais →
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/imagens/publicidade1.jpg"
              alt="Publicidade"
              className="rounded-lg shadow-md"
            />
            <img
              src="/imagens/publicidade2.jpg"
              alt="Publicidade"
              className="rounded-lg shadow-md"
            />
          </div>
        </section>

        {/* Professores */}
        <section className="py-16">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Conheça o corpo docente
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {professores.map((prof, i) => (
              <Card
                key={i}
                title={prof.name}
              />
            ))}
          </div>
        </section>

        {/* Projetos */}
        <section className="py-16 bg-gray-100 rounded-lg">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Projetos realizados
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {projetos.map((proj, i) => (
              <Card key={i} title={proj.title} />
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Perguntas frequentes (FAQ)
          </h2>
          <div className="max-w-2xl mx-auto space-y-4">
            <details className="p-4 border rounded-lg">
              <summary className="cursor-pointer font-semibold">
                Qual a duração do curso?
              </summary>
              <p className="mt-2 text-gray-600">
                O curso tem duração média de 4 anos (8 semestres).
              </p>
            </details>
            <details className="p-4 border rounded-lg">
              <summary className="cursor-pointer font-semibold">
                O curso tem estágio obrigatório?
              </summary>
              <p className="mt-2 text-gray-600">
                Sim, a partir do 5º semestre os alunos devem cumprir estágio
                supervisionado.
              </p>
            </details>
            <details className="p-4 border rounded-lg">
              <summary className="cursor-pointer font-semibold">
                A universidade ajuda na empregabilidade?
              </summary>
              <p className="mt-2 text-gray-600">
                Sim, temos parcerias com empresas e agências para estágio e
                contratação.
              </p>
            </details>
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
