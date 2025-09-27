import React from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function MaximoCV() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      {/* HEADER */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-10 shadow-lg">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-2">Máximo Ventocilla Layme</h1>
          <p className="text-lg">Desarrollador Full Stack | Java · Spring Boot · React · Angular</p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="mailto:maximo.ventocilla@tecsup.edu.pe" className="hover:text-yellow-300">
              <Mail className="inline-block w-5 h-5" /> 
            </a>
            <a href="tel:995538076" className="hover:text-yellow-300">
              <Phone className="inline-block w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/ventocillalaymemaximo" target="_blank" rel="noreferrer" className="hover:text-yellow-300">
              <Linkedin className="inline-block w-5 h-5" />
            </a>
            <a href="https://github.com/tuusuario" target="_blank" rel="noreferrer" className="hover:text-yellow-300">
              <Github className="inline-block w-5 h-5" />
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-6 space-y-10">
        {/* PERFIL PROFESIONAL */}
        <section>
          <h2 className="text-2xl font-semibold border-l-4 border-blue-600 pl-3 mb-3">Perfil Profesional</h2>
          <p className="text-gray-700 leading-relaxed">
            Desarrollador Full Stack con formación en Diseño y Desarrollo de Software en TECSUP. 
            Experiencia en Java (Spring Boot), Python (Django), React y Angular. 
            Familiaridad con bases de datos relacionales y no relacionales, control de versiones (Git, Azure DevOps)
            y metodologías ágiles SCRUM. Apasionado por construir soluciones eficientes, escalables y seguras.
          </p>
        </section>

        {/* EDUCACIÓN */}
        <section>
          <h2 className="text-2xl font-semibold border-l-4 border-blue-600 pl-3 mb-3">Educación</h2>
          <div className="bg-white p-4 rounded-xl shadow">
            <p className="font-bold">Instituto de Educación Superior TECSUP</p>
            <p>Diseño y Desarrollo de Software (2022 - 2025)</p>
          </div>
        </section>

        {/* EXPERIENCIA */}
        <section>
          <h2 className="text-2xl font-semibold border-l-4 border-blue-600 pl-3 mb-3">Experiencia</h2>

          <div className="bg-white p-5 rounded-xl shadow mb-4">
            <h3 className="font-bold text-lg">Desarrollador Backend Java — JHON MO SAC</h3>
            <p className="text-sm text-gray-500">Marzo 2022 — Diciembre 2024</p>
            <ul className="list-disc ml-6 mt-2 text-sm space-y-1">
              <li>Diseñé y desarrollé un Mini-ERP de logística usando Spring Boot y Angular.</li>
              <li>Implementé autenticación JWT y autorización por roles.</li>
              <li>APIs RESTful para operaciones, flota, comercial y reportes.</li>
              <li>Seguimiento de viajes en tiempo real con GPS.</li>
              <li>Gestión de flota, documentos, combustible y mantenimiento.</li>
              <li>Integración con facturación electrónica SUNAT.</li>
              <li>Optimización de consultas SQL y reportes en PostgreSQL.</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-bold text-lg">Desarrollador Backend — TECSUP (Proyecto IA)</h3>
            <p className="text-sm text-gray-500">Enero 2025 — Julio 2025</p>
            <ul className="list-disc ml-6 mt-2 text-sm space-y-1">
              <li>Backend en Spring Boot para análisis automático de CVs.</li>
              <li>Chatbot con IA para simulación de entrevistas.</li>
              <li>Generación de informes con OpenAI.</li>
              <li>Integración con React para UX fluida.</li>
              <li>Control de acceso y seguridad de datos sensibles.</li>
            </ul>
          </div>
        </section>

        {/* HABILIDADES */}
        <section>
          <h2 className="text-2xl font-semibold border-l-4 border-blue-600 pl-3 mb-3">Habilidades</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {["Java", "Spring Boot", "React", "Angular", "Django", "Express", "SQL Server", "PostgreSQL", "MongoDB", "Git", "Docker", "SCRUM"].map((skill) => (
              <span key={skill} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm text-center">
                {skill}
              </span>
            ))}
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="text-center text-sm text-gray-500 py-6">
        © {new Date().getFullYear()} Máximo Ventocilla — Diseñado con React + Tailwind
      </footer>
    </div>
  );
}
