import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getProjectsForService } from "@/lib/portfolio";

export default function RelatedProjects({ service }: { service: string }) {
  const items = getProjectsForService(service);
  if (items.length === 0) return null;

  return (
    <section className="py-16 px-4 bg-gray-50 brutal-border border-t-[3px]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">Nos <span className="bg-[#FFE234] px-2 brutal-border">réalisations</span></h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {items.map((p) => (
            <Link
              key={p.slug}
              href={`/portfolio/${p.slug}`}
              className="brutal-border bg-white p-5 hover:bg-[#FFE234] transition-colors flex flex-col gap-2"
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl">{p.icon}</span>
                <h3 className="font-bold">{p.name}</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{p.tagline}</p>
              <span className="inline-flex items-center gap-2 font-bold text-sm mt-2">
                Voir l&apos;étude de cas <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
