import { useTheme } from "../context/ThemeContext";

function LoginForm() {
  const { isDarkMode } = useTheme();

  return (
    <div className="min-h-screen bg-app-light dark:bg-app-dark flex items-center justify-center transition-colors duration-300">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl w-[400px] transition-colors">
        {/* Logo and Title */}
        <div className="flex items-center gap-2 mb-2">
          <div className="bg-app-dark dark:bg-white p-1.5 rounded-lg transition-colors">
            <span className="text-white dark:text-black text-xl font-bold">
              W
            </span>
          </div>
          <span className="text-app-dark dark:text-white text-xl font-bold">
            Wordable
          </span>
        </div>

        {/* Subtitle */}
        <h2 className="text-xl font-semibold mb-6">Inicia sesión</h2>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-app-dark dark:text-white text-sm font-medium mb-1">
              Correo electrónico
            </label>
            <input
              type="email"
              className="w-full p-2 rounded-md bg-gray-50 dark:bg-gray-700 text-app-dark dark:text-white"
              placeholder="correo@dominio.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Contraseña</label>
            <input
              type="password"
              className="w-full p-2 rounded-md bg-gray-50"
              placeholder="correo@dominio.com"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#2FE5A7] text-black py-2 rounded-md font-medium hover:bg-[#2ad399] transition-colors"
          >
            Inicia sesión
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
