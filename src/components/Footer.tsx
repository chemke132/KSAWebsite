import Link from "next/link";
import { categories, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <div className="container-page grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-sm font-bold text-white">
              KSA
            </span>
            <span className="text-sm font-semibold">{site.fullNameKo}</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-muted">{site.tagline}</p>
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">
            바로가기
          </h3>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-sm">
            {categories.map((c) => (
              <li key={c.href}>
                <Link href={c.href} className="text-foreground/80 hover:text-primary">
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">
            문의
          </h3>
          <p className="mt-3 text-sm text-muted">
            학생회 운영진에게 연락하거나 저널 리포트를 제출하려면 각 페이지의 안내를
            확인하세요.
          </p>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-5 text-xs text-muted sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.fullName} (KSA)
          </p>
          <p>Built with Next.js · Cloudflare Pages</p>
        </div>
      </div>
    </footer>
  );
}
