function Experience() {
  return (
    <section className="bg-white p-6 rounded-xl shadow-md border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition duration-200">
      <h2 className="text-xl font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">
        Досвід роботи та проєкти
      </h2>
      <div className="space-y-3">
        <div>
          <h3 className="text-lg font-bold text-slate-800">
            Навчальні проєкти з безпеки та розробки
          </h3>
          <span className="text-xs text-sky-700 bg-sky-50 font-mono px-2.5 py-0.5 rounded-full inline-block mt-1">
            2025 — 2026 роки
          </span>
        </div>
        <ul className="list-disc list-inside text-slate-600 space-y-1.5 leading-relaxed text-sm">
          <li>Розробка відеоігор на Unity C#.</li>
          <li>Розробка безпечних вебмодулів автентифікації на Python (PBKDF2, соління, валідація).</li>
          <li>Розробка вебзастосунків на HTML5, CSS3 та JavaScript.</li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;