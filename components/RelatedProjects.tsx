import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { getProjectsForService } from "@/lib/portfolioStore";

export default async function RelatedProjects({ service }: { service: string }) {
  const items = await getProjectsForService(service);
  if (items.length === 0) return null;

  return (
    <section className="py-16 px-4 bg-gray-50 brutal-border border-t-[3px] border-b-[3px]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">Mes <span className="bg-[#FFE234] px-2 brutal-border">réalisations</span></h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {items.map((p) => (
            <Link
              key={p.slug}
              href={`/portfolio/${p.slug}`}
              className="group brutal-border brutal-shadow bg-white overflow-hidden flex flex-col hover:bg-[#FFE234] transition-colors"
            >
              {p.image && (
                <div className="relative w-full aspect-[16/10] overflow-hidden border-b-[3px] border-black">
                  <Image
                    src={p.image}
                    alt={`${p.name} : ${p.tagline}`}
                    fill
                    sizes="(min-width: 640px) 448px, 100vw"
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="p-5 flex flex-col gap-2">
                <h3 className="font-bold">{p.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{p.tagline}</p>
                <span className="inline-flex items-center gap-2 font-bold text-sm mt-1">
                  Voir l&apos;étude de cas <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
