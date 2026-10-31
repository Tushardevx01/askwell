import Link from "next/link";
import { APP_NAME } from "@askwell/shared";
import { Plus, Folder, MessageSquare, Settings, Sparkles } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans">
      {/* Dashboard Header */}
      <header className="border-b border-zinc-200 bg-white/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-black text-white flex items-center justify-center font-bold text-sm">
                A
              </div>
              <span className="font-semibold text-lg tracking-tight">{APP_NAME}</span>
            </Link>
            <nav className="flex items-center gap-4 text-sm font-medium text-zinc-500">
              <span className="text-zinc-900">Projects</span>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-3.5 py-1.5 rounded-full bg-black text-white text-xs font-medium hover:bg-zinc-800 transition-colors flex items-center gap-1.5">
              <Plus className="w-3.5 h-3.5" />
              New Project
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-6 py-10">
        <div className="mb-8">
          <h1 className="text-2xl font-bold tracking-tight">Your Projects</h1>
          <p className="text-zinc-500 text-sm mt-1">Manage AI assistants and widget configurations.</p>
        </div>

        {/* Empty State */}
        <div className="border border-dashed border-zinc-300 rounded-2xl p-12 text-center bg-white/50 backdrop-blur-sm max-w-xl mx-auto">
          <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center mx-auto text-zinc-600 mb-4">
            <Folder className="w-6 h-6" />
          </div>
          <h3 className="font-semibold text-base text-zinc-900">No projects yet</h3>
          <p className="text-zinc-500 text-sm mt-1 mb-6">
            Create your first project to configure documents and embed your chat widget.
          </p>
          <button className="px-5 py-2 rounded-full bg-black text-white text-sm font-medium hover:bg-zinc-800 transition-colors inline-flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Create Project
          </button>
        </div>
      </main>
    </div>
  );
}
