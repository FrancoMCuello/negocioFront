export default function Home() {
  const token = localStorage.getItem("token");
  let user = null;

  if (token) {
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      user = payload.user;
    } catch (error) {
      console.error("Token inválido");
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-4">
          {user ? `Bienvenido, ${user}` : "Bienvenido a la app"}
        </h1>
        <p className="text-gray-600 mb-6">
          Esta es tu página de inicio. Accede a las secciones desde el menú.
        </p>
        <div className="flex gap-4">
          {!token ? (
            <>
              <a
                href="/login"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Iniciar sesión
              </a>
              <a
                href="/register"
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
              >
                Registrarse
              </a>
            </>
          ) : (
            <button
              onClick={() => {
                localStorage.removeItem("token");
                window.location.reload();
              }}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
            >
              Cerrar sesión
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
