import { GiSunflower } from "react-icons/gi";
import { RiMoonClearFill } from "react-icons/ri";

export default function Navbar({ isDark, onToggleTheme }) {
  return (
    <nav className="border-b border-slate-200 bg-white dark:bg-slate-950 dark:border-slate-700">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <a href="#" className="text-xl font-bold tracking-tight text-slate-900">
          YaSaMaN
          <span className="text-indigo-600">UI</span>
        </a>

        <div className="flex items-center gap-6">
          <a href="#" className="hidden text-sm font-medium text-slate-600 hover:text-indigo-600 sm:block">
            Features
          </a>
          <a href="#" className="hidden text-sm font-medium text-slate-600 hover:text-indigo-600 sm:block">
            Menu
          </a>
          <a href="#" className="hidden text-sm font-medium text-slate-600 hover:text-indigo-600 sm:block">
            Home
          </a>
          <a href="#" className="hidden text-sm font-medium text-slate-600 hover:text-indigo-600 sm:block">
            About
          </a>
          <a href="#" className="hidden text-sm font-medium text-slate-600 hover:text-indigo-600 sm:block">
            Contact
          </a>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
           onClick={onToggleTheme}>
            {
              isDark ? <GiSunflower size={20} /> : <RiMoonClearFill size={20} />
            }
          </button>
        </div>
      </div>
    </nav>
  );
}