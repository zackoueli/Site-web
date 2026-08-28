import DevisManager from "@/components/admin/DevisManager";

export const dynamic = "force-dynamic";

export default function AdminDevisPage() {
  return (
    <div>
      <h1 className="text-2xl font-black mb-6">Devis &amp; factures</h1>
      <DevisManager />
    </div>
  );
}
