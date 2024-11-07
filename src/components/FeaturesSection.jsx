import { FEATURES } from "../constants/features";

function FeaturesSection() {
  return (
    <div className="w-full bg-app-light dark:bg-app-dark py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-6">
            Comienza aprender
            <br />
            agilmente<span className="text-primary">.</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Aprende con metodologia de grupos y 100% online, gamificacion, IA,
            quizzes, video lecciones y practica pronunciacion
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="relative rounded-2xl overflow-hidden group"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-[400px] object-cover"
              />

              {/* Content Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 w-full">
                  <h3 className="text-white text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>

                  {/* Conditional rendering based on feature type */}
                  {feature.type === "test" && (
                    <div className="flex -space-x-2">
                      {feature.avatars.map((avatar, index) => (
                        <img
                          key={index}
                          src={avatar}
                          alt=""
                          className="w-8 h-8 rounded-full border-2 border-white"
                        />
                      ))}
                    </div>
                  )}

                  {feature.type === "diamond" && (
                    <div className="flex items-center justify-center">
                      <div className="relative w-16 h-16">
                        <div className="absolute inset-0 border-2 border-white/30 rotate-45"></div>
                        <div className="absolute inset-2 bg-[#00A3FF]"></div>
                        <div className="absolute -top-4 -right-4">
                          <img
                            src={feature.avatars?.[0]}
                            alt=""
                            className="w-8 h-8 rounded-full border-2 border-white"
                          />
                        </div>
                        <div className="absolute -bottom-4 -left-4">
                          <img
                            src={feature.avatars?.[1]}
                            alt=""
                            className="w-8 h-8 rounded-full border-2 border-white"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {feature.type === "conversation" && feature.button && (
                    <button className="flex items-center gap-2 bg-black/20 hover:bg-black/30 transition-colors rounded-full px-4 py-2">
                      <div className="bg-white p-1.5 rounded-lg">
                        <span className="text-black font-bold">
                          {feature.button.icon}
                        </span>
                      </div>
                      <span className="text-white">{feature.button.text}</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection;
