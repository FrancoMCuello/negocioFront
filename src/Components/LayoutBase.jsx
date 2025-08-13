import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import LogoutButton from "./LogoutButton";

export default function LayoutBase() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-800 text-white flex flex-col">
        <div className="p-4 text-lg font-bold border-b border-blue-700">
          Mi sistema
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link
            to="/servicios"
            className="block px-3 py-2 rounded hover:bg-blue-700"
          >
            Servicios
          </Link>
          <Link
            to="/clientes"
            className="block px-3 py-2 rounded hover:bg-blue-700"
          >
            Clientes
          </Link>
          <Link
            to="/ingresos"
            className="block px-3 py-2 rounded hover:bg-blue-700"
          >
            Ingresos
          </Link>
          <Link
            to="/egresos"
            className="block px-3 py-2 rounded hover:bg-blue-700"
          >
            Egresos
          </Link>
          <Link
            to="/user"
            className="block px-3 py-2 rounded hover:bg-blue-700"
          >
            Usuarios
          </Link>
        </nav>
        <LogoutButton />
      </aside>
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Panel de Control</h1>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
