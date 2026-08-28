import type { Metadata } from "next";
import Link from "next/link";
import AdminNav from "@/components/admin/AdminNav";

export const metadata: Metadata = {
  title: "Admin | BreizhApp",
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#FFFBF0]">
      <header className="brutal-border border-b-[3px] bg-white sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 h-12 flex items-center">
          <Link href="/admin" className="font-black mono">
            ⚙ Admin BreizhApp
          </Link>
        </div>
        <div className="border-t-2 border-black py-2">
          <AdminNav />
        </div>
      </header>
      <main className="max-w-5xl mx-auto px-4 py-8">{children}</main>
    </div>
  );
}
