import { CheckCircle } from "lucide-react"; // If you're using lucide-react for icons

const BENEFITS = [
  {
    id: 1,
    title: "Disfruta de total flexibilidad:",
    description:
      "aprende a tu ritmo, sin contratos ni ataduras. Cancela cuando quieras y retoma cuando estés listo.",
  },
  {
    id: 2,
    title: "Desde clases individuales hasta aprendizaje en grupo,",
    description:
      "y prácticas de conversación con IA. Elige el formato que mejor se adapte a tu estilo de vida y objetivos.",
  },
  {
    id: 3,
    title: "Potencia tu aprendizaje",
    description:
      "con inteligencia artificial, quizzes interactivos y herramientas avanzadas de pronunciación para un progreso rápido y efectivo.",
  },
];

function WhyUsSection() {
  return (
    <div className="w-full bg-app-light dark:bg-app-dark py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo and Title */}
        <div className="flex flex-col items-center gap-6 mb-16">
          <div className="flex items-center gap-4">
            <div className="bg-black dark:bg-white p-2 rounded-xl">
              <span className="text-white dark:text-black text-2xl font-bold">
                W
              </span>
            </div>
            <span className="text-black dark:text-white text-3xl md:text-4xl font-bold">
              Wordable
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white text-center">
            ¿Porque Nosotros?
          </h2>
        </div>

        {/* Benefits List */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {BENEFITS.map((benefit) => (
            <div key={benefit.id} className="flex items-start gap-6 group">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-black" />
              </div>
              <div className="flex-1">
                <p className="text-xl md:text-2xl text-black dark:text-white">
                  <span className="font-semibold">{benefit.title}</span>{" "}
                  <span className="text-gray-600 dark:text-gray-300">
                    {benefit.description}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyUsSection;
