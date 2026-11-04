import { HashRouter, Routes, Route } from "react-router-dom";
import { Sidebar } from "@/components/layout/Sidebar";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Publications } from "@/components/sections/Publications";
import { Teaching } from "@/components/sections/Teaching";
import { Service } from "@/components/sections/Service";
import { Emse19Page } from "@/pages/Emse19Page";
import { Icsme17Page } from "@/pages/Icsme17Page";
import { SynecticPage } from "@/pages/SynecticPage";

function HomePage() {
  return (
    <div className="max-w-[1160px] mx-auto px-6 grid grid-cols-[220px_1fr] gap-x-14">
      <div className="row-span-2">
        <Sidebar />
      </div>
      <main
        className="border-l border-rule pl-20 py-16 pb-24 flex flex-col gap-[4.5rem]"
        id="main-content"
      >
        <About />
        <Experience />
        <Publications />
        <Teaching />
        <Service />
      </main>
      <footer className="border-l border-rule pl-20 pb-12 font-mono text-2xs text-ink-faint tracking-[0.04em]">
        Nicholas Nelson · nomatic.dev · Updated November 2026
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/emse19" element={<Emse19Page />} />
        <Route path="/icsme17" element={<Icsme17Page />} />
        <Route path="/synectic" element={<SynecticPage />} />
      </Routes>
    </HashRouter>
  );
}
