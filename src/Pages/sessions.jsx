// import React, { useEffect, useMemo, useState } from "react";

// /**
//  * B6 – Prochaines sessions (public only)
//  * Palette: rouge #e13734, bleu #1c8bce
//  * Sans border-radius
//  * Modale avec onglets: Compte existant / Nouveau compte
//  */

// // Types
// export type Session = {
//   id: string;
//   programCode: string;
//   startDate: string; // YYYY-MM-DD
//   endDate: string;   // YYYY-MM-DD
//   location: string;
//   trainers: string[];
//   seatsTotal: number;
//   seatsLeft: number;
//   published: boolean;
// };

// // Mock API (localStorage) — remplace par tes fetch() plus tard
// const STORAGE_KEY = "b6_sessions_store_v1";
// function readStore(): Session[] {
//   try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"); } catch { return []; }
// }
// function writeStore(list: Session[]) { localStorage.setItem(STORAGE_KEY, JSON.stringify(list)); }
// const api = {
//   async list(programCode = "B6"): Promise<Session[]> {
//     return readStore().filter(s => s.programCode === programCode);
//   },
// };

// // Helpers
// function uid() { return Math.random().toString(36).slice(2, 10); }
// const fmtDay   = new Intl.DateTimeFormat("fr-FR", { day: "2-digit" });
// const fmtMonth = new Intl.DateTimeFormat("fr-FR", { month: "2-digit" });
// const fmtYear  = new Intl.DateTimeFormat("fr-FR", { year: "numeric" });
// function formatRange(startISO: string, endISO: string) {
//   const s = new Date(startISO), e = new Date(endISO);
//   return {
//     sDay: fmtDay.format(s), sMonth: fmtMonth.format(s), sYear: fmtYear.format(s),
//     eDay: fmtDay.format(e), eMonth: fmtMonth.format(e), eYear: fmtYear.format(e),
//   };
// }

// // UI atoms
// const inputCls =
//   "w-full border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#1c8bce]";
// function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
//   const { className = "", children, ...rest } = props;
//   return (
//     <button
//       className={`px-5 py-2 font-semibold shadow-sm transition-colors focus:outline-none focus:ring ${className}`}
//       {...rest}
//     >
//       {children}
//     </button>
//   );
// }

// // Public list
// function SessionCard({ s, onRegister }: { s: Session; onRegister: (s: Session) => void }) {
//   const r = useMemo(() => formatRange(s.startDate, s.endDate), [s.startDate, s.endDate]);
//   return (
//     <div className="grid grid-cols-[120px_1fr_150px] items-center gap-6 border-b border-blue-100 py-6">
//       {/* Dates */}
//       <div>
//         <div className="text-[#e13734] font-bold text-base">
//           {r.sDay}/{r.sMonth}<span className="text-gray-400"> – </span>{r.eDay}/{r.eMonth}
//         </div>
//         <div className="text-xs text-gray-500">{r.sYear}</div>
//       </div>
//       {/* Details */}
//       <div className="leading-tight">
//         <div className="text-base text-[#1c8bce] font-medium">{s.trainers.join(" et ")}</div>
//         <div className="text-sm text-gray-500">{s.location}</div>
//       </div>
//       {/* CTA */}
//       <div className="text-right">
//         <Button
//           className={`w-[160px] justify-center bg-[#1c8bce] text-white hover:bg-[#176fa0] ${
//             s.seatsLeft <= 0 ? "opacity-50 cursor-not-allowed" : ""
//           }`}
//           onClick={() => s.seatsLeft > 0 && onRegister(s)}
//         >
//           Réserver ma place
//         </Button>
//         <div className="mt-1 text-xs text-gray-500">
//           {Math.max(0, s.seatsLeft)} place{s.seatsLeft > 1 ? "s" : ""} disponibles
//         </div>
//       </div>
//     </div>
//   );
// }

// function PublicSessions(
//   { programCode = "B6", onRegister }: { programCode?: string; onRegister: (s: Session) => void }
// ) {
//   const [list, setList] = useState<Session[]>([]);
//   useEffect(() => {
//     (async () => {
//       const all = await api.list(programCode);
//       setList(all.filter(s => s.published).sort((a, b) => a.startDate.localeCompare(b.startDate)));
//     })();
//   }, [programCode]);

//   return (
//     <section className="max-w-4xl mx-auto border border-blue-100 bg-white p-8 shadow-md">
//       <h2 className="text-2xl font-bold text-[#1c8bce]">B6 – Les niveaux de développement</h2>
//       <h3 className="mt-4 text-lg font-semibold text-gray-900">Prochaines sessions</h3>
//       <div className="mt-4 divide-y divide-blue-100">
//         {list.length === 0
//           ? <p className="text-base text-gray-500 py-8">Aucune session publiée pour le moment.</p>
//           : list.map(s => <SessionCard key={s.id} s={s} onRegister={onRegister} />)}
//       </div>
//     </section>
//   );
// }

// // Dialog shell
// function Dialog({ open, onClose, children, title }:{
//   open: boolean; onClose: () => void; children: React.ReactNode; title: string;
// }) {
//   if (!open) return null;
//   return (
//     <div className="fixed inset-0 z-50 grid place-items-center bg-black/50 p-4" onClick={onClose}>
//       <div className="w-full max-w-2xl bg-white p-6 shadow-xl" onClick={(e) => e.stopPropagation()}>
//         <div className="mb-4 flex items-center justify-between">
//           <h4 className="text-xl font-semibold text-[#1c8bce]">{title}</h4>
//           <button onClick={onClose} aria-label="Fermer" className="p-1 hover:bg-gray-100">✕</button>
//         </div>
//         {children}
//       </div>
//     </div>
//   );
// }

// // Forms
// function RegisterFormExisting({ onSubmit }: { onSubmit: (payload: any) => void }) {
//   const [email, setEmail] = useState(""); const [password, setPassword] = useState("");
//   const disabled = !email || !password;
//   return (
//     <form
//       className="grid grid-cols-1 gap-4"
//       onSubmit={(e) => { e.preventDefault(); if (disabled) return; onSubmit({ email, password }); }}
//     >
//       <input className={inputCls} placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//       <input className={inputCls} placeholder="Mot de passe" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       <Button className={`w-full bg-[#e13734] text-white ${disabled ? "opacity-50" : "hover:bg-[#c72e2c]"}`} type="submit">
//         Se connecter
//       </Button>
//     </form>
//   );
// }

// function RegisterFormNew({ onSubmit }: { onSubmit: (payload: any) => void }) {
//   const [form, setForm] = useState({
//     email: "", prenom: "", nom: "", genre: "Autre", annee: "",
//     profession: "", adresse: "", codePostal: "", ville: "", pays: "",
//     phone: "", compagnie: "", password: "", confirm: "", newsletter: false, accept: false,
//   });
//   const disabled =
//     !form.email || !form.prenom || !form.nom || !form.password || form.password !== form.confirm || !form.accept;

//   return (
//     <form
//       className="grid grid-cols-1 gap-3"
//       onSubmit={(e) => { e.preventDefault(); if (disabled) return; onSubmit(form); }}
//     >
//       <input className={inputCls} placeholder="Email *" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
//       <div className="grid grid-cols-2 gap-3">
//         <input className={inputCls} placeholder="Prénom *" value={form.prenom} onChange={(e) => setForm({ ...form, prenom: e.target.value })} />
//         <input className={inputCls} placeholder="Nom de famille *" value={form.nom} onChange={(e) => setForm({ ...form, nom: e.target.value })} />
//       </div>
//       <div className="grid grid-cols-2 gap-3">
//         <input className={inputCls} placeholder="Genre" value={form.genre} onChange={(e) => setForm({ ...form, genre: e.target.value })} />
//         <input className={inputCls} placeholder="Année de naissance *" value={form.annee} onChange={(e) => setForm({ ...form, annee: e.target.value })} />
//       </div>
//       <input className={inputCls} placeholder="Profession" value={form.profession} onChange={(e) => setForm({ ...form, profession: e.target.value })} />
//       <input className={inputCls} placeholder="Adresse" value={form.adresse} onChange={(e) => setForm({ ...form, adresse: e.target.value })} />
//       <div className="grid grid-cols-3 gap-3">
//         <input className={inputCls} placeholder="Code postal" value={form.codePostal} onChange={(e) => setForm({ ...form, codePostal: e.target.value })} />
//         <input className={inputCls} placeholder="Ville" value={form.ville} onChange={(e) => setForm({ ...form, ville: e.target.value })} />
//         <input className={inputCls} placeholder="Pays" value={form.pays} onChange={(e) => setForm({ ...form, pays: e.target.value })} />
//       </div>
//       <div className="grid grid-cols-2 gap-3">
//         <input className={inputCls} placeholder="Numéro de téléphone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
//         <input className={inputCls} placeholder="Compagnie" value={form.compagnie} onChange={(e) => setForm({ ...form, compagnie: e.target.value })} />
//       </div>
//       <div className="grid grid-cols-2 gap-3">
//         <input className={inputCls} type="password" placeholder="Mot de passe *" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
//         <input className={inputCls} type="password" placeholder="Confirmation *" value={form.confirm} onChange={(e) => setForm({ ...form, confirm: e.target.value })} />
//       </div>
//       <label className="flex items-center gap-2 text-sm">
//         <input type="checkbox" checked={form.newsletter} onChange={(e) => setForm({ ...form, newsletter: e.target.checked })} />
//         <span>J'accepte de recevoir la newsletter</span>
//       </label>
//       <label className="flex items-center gap-2 text-sm">
//         <input type="checkbox" checked={form.accept} onChange={(e) => setForm({ ...form, accept: e.target.checked })} />
//         <span>J'ai lu les termes & conditions et je les accepte</span>
//       </label>
//       <Button className={`w-full bg-[#1c8bce] text-white ${disabled ? "opacity-50" : "hover:bg-[#176fa0]"}`} type="submit">
//         Créer un compte
//       </Button>
//     </form>
//   );
// }

// // Registration dialog
// function RegisterDialog({ open, onClose, session }: { open: boolean; onClose: () => void; session: Session | null }) {
//   const [tab, setTab] = useState<"login" | "signup">("login");
//   if (!session) return null;
//   const r = formatRange(session.startDate, session.endDate);

//   return (
//     <Dialog open={open} onClose={onClose} title={`S'inscrire à la formation B6 – Les niveaux de développement – ${r.sDay}/${r.sMonth}/${r.sYear}`}>
//       <div className="mb-4 flex gap-2">
//         <Button className={`border ${tab === "login" ? "bg-[#1c8bce] text-white" : "bg-white text-[#1c8bce]"}`} onClick={() => setTab("login")}>
//           Compte existant
//         </Button>
//         <Button className={`border ${tab === "signup" ? "bg-[#e13734] text-white" : "bg-white text-[#e13734]"}`} onClick={() => setTab("signup")}>
//           Nouveau compte
//         </Button>
//       </div>
//       {tab === "login"
//         ? <RegisterFormExisting onSubmit={(payload) => { console.log("existing-account", { session, payload }); onClose(); }} />
//         : <RegisterFormNew onSubmit={(payload) => { console.log("new-account", { session, payload }); onClose(); }} />}
//       <p className="mt-6 text-xs text-gray-500 leading-relaxed">
//         En cas de questions, contactez <a className="underline" href="mailto:support@enneagramme.be">support@enneagramme.be</a>.
//       </p>
//     </Dialog>
//   );
// }

// // Default export (single!)
// export default function B6Sessions() {
//   const [registerOpen, setRegisterOpen] = useState(false);
//   const [selected, setSelected] = useState<Session | null>(null);

//   // Seed demo data
//   useEffect(() => {
//     const current = readStore();
//     if (current.length === 0) {
//       writeStore([
//         { id: uid(), programCode: "B6", startDate: "2025-09-24", endDate: "2025-09-26", location: "Louvain-la-Neuve", trainers: ["Philippe Halin", "Alain Mosmans"], seatsTotal: 16, seatsLeft: 4, published: true },
//         { id: uid(), programCode: "B6", startDate: "2025-11-26", endDate: "2025-11-27", location: "Louvain-la-Neuve", trainers: ["Philippe Halin", "Dominique De Staercke"], seatsTotal: 16, seatsLeft: 5, published: true },
//       ]);
//     }
//   }, []);

//   return (
//     <div className="min-h-screen bg-[#f8fafc] py-10">
//       <div className="mx-auto max-w-6xl px-4">
//         <PublicSessions onRegister={(s) => { setSelected(s); setRegisterOpen(true); }} />
//         <RegisterDialog open={registerOpen} onClose={() => setRegisterOpen(false)} session={selected} />
//       </div>
//     </div>
//   );
// }
