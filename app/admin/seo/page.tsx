import { getReport, listReportIds } from "@/lib/seoReport";
import { cadenceBlocker, listGenerations } from "@/lib/articleRoutine";
import { githubConfigured, listArticleDrafts, type ArticleDraft } from "@/lib/github";
import SeoDashboard from "@/components/admin/SeoDashboard";

export const dynamic = "force-dynamic";

export default async function AdminSeoPage({
  searchParams,
}: {
  searchParams: Promise<{ r?: string }>;
}) {
  const { r } = await searchParams;
  const [report, reportIds, generations, blocked, drafts] = await Promise.all([
    getReport(r),
    listReportIds(),
    listGenerations(),
    cadenceBlocker(),
    githubConfigured()
      ? listArticleDrafts().catch((e: Error) => e.message)
      : Promise.resolve<ArticleDraft[] | string>("GITHUB_TOKEN manquant : impossible de lister les articles en attente."),
  ]);

  return (
    <div>
      <h1 className="text-2xl font-black mb-6">SEO</h1>
      <SeoDashboard
        report={report}
        reportIds={reportIds}
        generations={generations}
        cadenceBlocked={blocked}
        routineConfigured={!!process.env.CLAUDE_ROUTINE_URL && !!process.env.CLAUDE_ROUTINE_TOKEN}
        drafts={drafts}
      />
    </div>
  );
}
