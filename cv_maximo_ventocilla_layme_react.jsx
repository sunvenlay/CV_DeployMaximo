import React from "react";

// CV Component: Maximo Ventocilla Layme
// Single-file React component using Tailwind CSS classes.
// How to use:
// 1) Create a new React app (Vite + React recommended) or paste into an existing page.
// 2) Make sure Tailwind CSS is installed and configured. (The markup assumes Tailwind is available.)
// 3) This component is export default and ready to render in App.jsx.
// 4) Deployment: see the README section at the bottom of this file for quick Vercel / Netlify steps.

export default function MaximoCV() {
  const contact = {
    name: "Máximo Ventocilla Layme",
    location: "Ate Vitarte, Lima, Perú",
    email: "maximo.ventocilla@tecsup.edu.pe",
    linkedin: "https://www.linkedin.com/in/ventocillalaymemaximo",
    phone: "+51 995538076",
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden print:shadow-none print:rounded-none">
        {/* Header */}
        <div className="md:flex md:items-center p-8 bg-gradient-to-r from-indigo-600 to-sky-500 text-white">
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold">{contact.name}</h1>
            <p className="mt-1 text-sm md:text-base opacity-90">Desarrollador Full Stack — Diseño y Desarrollo de Software (TECSUP)</p>
            <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:space-x-6 text-sm">
              <a href={`mailto:${contact.email}`} className="underline">{contact.email}</a>
              <a href={contact.linkedin} target="_blank" rel="noreferrer" className="underline">LinkedIn</a>
              <span>{contact.phone}</span>
            </div>
          </div>
          <div className="mt-6 md:mt-0 md:ml-6 flex-shrink-0 text-right">
            <button
              onClick={() => window.print()}
              className="inline-block rounded-lg bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur"
            >
              Imprimir / Guardar PDF
            </button>
          </div>
        </div>

        <div className="p-8 grid md:grid-cols-3 gap-8 text-gray-800">
          {/* Left column (Profile, Education, Skills) */}
          <div className="md:col-span-1 space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-2">Perfil Profesional</h2>
              <p className="text-sm leading-relaxed">
                Desarrollador Full Stack formado en TECSUP con experiencia en Java (Spring Boot), Python (Django), React y
                Angular. Manejo de bases de datos, control de versiones con Git y Azure DevOps, y trabajo en entornos ágiles
                (SCRUM). Proactivo, adaptable y orientado a soluciones eficientes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">Educación</h2>
              <div className="text-sm">
                <div className="font-medium">Instituto de Educación Superior TECSUP</div>
                <div className="text-xs opacity-80">Diseño y Desarrollo de Software (2022 - 2025)</div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">Habilidades Técnicas</h2>
              <ul className="text-sm space-y-1">
                <li>Java (Spring Boot) — Backend</li>
                <li>Python (Django) — Backend</li>
                <li>React, Angular — Frontend</li>
                <li>PostgreSQL, SQL Server, Oracle, MongoDB</li>
                <li>Git, Docker, Azure DevOps</li>
                <li>Integración con APIs / REST</li>
                <li>IA: integración con modelos de lenguaje (OpenAI)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">Idiomas & Office</h2>
              <div className="text-sm">
                <div>Inglés: Intermedio (Instituto Conversa)</div>
                <div className="mt-1">Microsoft Office (Excel, Word): Intermedio</div>
              </div>
            </section>
          </div>

          {/* Right column (Experience and Projects) */}
          <div className="md:col-span-2 space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-4">Experiencia Profesional</h2>

              <article className="mb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">Desarrollador Backend Java — JHON MO SAC</h3>
                    <div className="text-xs opacity-80">Marzo 2022 — Diciembre 2024</div>
                    <div className="text-sm mt-2">
                      Empresa peruana de transporte de carga. Desarrollo de un Mini-ERP para gestión de operaciones
                      logísticas (backend en Java/Spring Boot, frontend en Angular).
                    </div>
                  </div>
                </div>

                <ul className="list-disc ml-5 mt-3 text-sm space-y-1">
                  <li>Diseño e implementación del Mini-ERP (módulos: operaciones, flota, comercial, reportes).</li>
                  <li>Autenticación con JWT y autorización por roles (Spring Security).</li>
                  <li>Exposición e integración de APIs RESTful con buenas prácticas (Spring MVC).</li>
                  <li>Registro y seguimiento de viajes, asignación de rutas y seguimiento GPS en tiempo real.</li>
                  <li>Gestión de flota: mantenimiento, vencimientos de documentos y control de combustible.</li>
                  <li>Integración con facturación electrónica SUNAT y gestión comercial (clientes, cotizaciones, CxC).</li>
                  <li>Reportes personalizados y optimización de consultas SQL en PostgreSQL.</li>
                  <li>Herramientas: Postman, Git, Docker.</li>
                </ul>
              </article>

              <article>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">Desarrollador Backend — TECSUP (Proyecto IA)</h3>
                    <div className="text-xs opacity-80">Enero 2025 — Julio 2025</div>
                    <div className="text-sm mt-2">Desarrollo de plataforma inteligente para análisis automatizado de CVs y simulación de entrevistas.</div>
                  </div>
                </div>

                <ul className="list-disc ml-5 mt-3 text-sm space-y-1">
                  <li>Diseño del backend en Java (Spring Boot) para extracción y validación de datos de CVs.</li>
                  <li>Implementación de chatbot conversacional que simula entrevistas y entrega retroalimentación.</li>
                  <li>Integración con modelos de lenguaje (OpenAI) para generar informes automáticos.</li>
                  <li>Almacenamiento seguro de datos e historial de interacciones aplicando buenas prácticas de seguridad.</li>
                  <li>APIs RESTful entre backend y frontend (React) para una experiencia fluida de usuario.</li>
                </ul>
              </article>

              <article className="mt-6">
                <h3 className="font-semibold">Proyecto Académico — FastQuiz</h3>
                <div className="text-xs opacity-80">Curso: Desarrollo de aplicaciones empresariales y tecnologías emergentes</div>
                <p className="text-sm mt-2">Desarrollo de una solución con IA que automatiza la creación de cuestionarios, optimizando el tiempo de profesores y facilitando el acceso a estudiantes en TECSUP.</p>
              </article>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Otras Competencias</h2>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>Bases de Datos</strong>
                  <ul className="ml-4 list-disc mt-2">
                    <li>Oracle SQL (Avanzado)</li>
                    <li>SQL Server (Intermedio)</li>
                    <li>MongoDB (Intermedio)</li>
                  </ul>
                </div>
                <div>
                  <strong>Frameworks & Tools</strong>
                  <ul className="ml-4 list-disc mt-2">
                    <li>Laravel (Intermedio)</li>
                    <li>Django (Intermedio)</li>
                    <li>Express (Intermedio)</li>
                    <li>React (Intermedio)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mt-2">
              <h2 className="text-xl font-semibold mb-3">Referencias</h2>
              <p className="text-sm">Referencias disponibles a solicitud.</p>
            </section>
          </div>
        </div>

        <div className="p-6 bg-gray-50 text-center text-xs text-gray-600">
          Última actualización: Septiembre 2025 — CV generado por plantilla web.
        </div>
      </div>
    </div>
  );
}

/*
README (resumen de despliegue listo para seguir):

Opción rápida (Vercel):
1) Crear repositorio en GitHub y subir tu proyecto (incluyendo este archivo en src/).
2) Asegúrate de tener un proyecto React + Tailwind funcionando localmente.
3) Ve a https://vercel.com, crea una cuenta y conecta tu repositorio. Vercel detectará el framework (Vite/React/CRA).
4) Pulsa Deploy — en minutos tendrás la URL pública.

Opción alternativa (Netlify):
1) Empaqueta tu app como sitio estático (build). Para Vite: npm run build -> dist/
2) En Netlify, crea nuevo sitio desde Git y conecta el repo, o sube la carpeta dist vía drag & drop.

Notas prácticas:
- Asegúrate de configurar Tailwind y su archivo tailwind.config.js para que compile correctamente.
- Para imprimir en PDF desde navegador, usar el botón "Imprimir / Guardar PDF" o Ctrl+P.

Si quieres, puedo:
- Generar la estructura completa del repo (package.json, tailwind config, index.html, App.jsx) y dejarlo listo para push a GitHub.
- Crear un README.md con instrucciones paso a paso para desplegar.

*/
