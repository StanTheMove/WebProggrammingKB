function Footer() {
  return (
    <footer className="bg-white p-6 rounded-xl shadow-md border border-slate-100 text-center">
      <h2 className="text-lg font-bold text-slate-800 mb-2">Контакти</h2>
      <div className="flex justify-center gap-4 text-sm font-medium">
        <a 
          href="https://github.com/StanTheMove" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sky-600 hover:text-sky-800 hover:underline transition font-semibold"
        >
          GitHub: Профіль StanTheMove
        </a>
      </div>
    </footer>
  );
}

export default Footer;