import Link from "next/link";
import Container from "@/components/layout/Container";

const footerLinks = {
  navigation: [
    { label: "Home", href: "/" },
    { label: "Work", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  social: [
    { label: "PortFolio", href: "https://portfolio-vxrf.vercel.app/" },
    { label: "GitHub", href: "https://github.com/Shivam000189/" },
  ],
};

export default function Footer() {
  return (
    <footer data-navbar-hide className="bg-black text-white">
      <Container className="pt-20 md:pt-28 lg:pt-32">
        {/* =====================================================
            TOP
        ===================================================== */}

        <div className="grid grid-cols-1 gap-14 border-b border-white/15 pb-16 md:grid-cols-[1.5fr_1fr_1fr] md:gap-10 md:pb-20">
          {/* Brand */}

          <div>
            <Link
              href="/"
              className="
                inline-block
                text-[28px]
                font-medium
                tracking-[-0.05em]
                transition-opacity
                hover:opacity-60
                md:text-[32px]
              "
            >
              your<span className="text-white/40">studio</span>
            </Link>

            <p className="mt-6 max-w-[360px] text-[13px] leading-[1.6] text-white/50 md:text-[14px]">
              We design and build digital experiences for brands, businesses
              and people building what comes next.
            </p>
          </div>

          {/* Navigation */}

          <div>
            <p className="text-[10px] uppercase tracking-[0.16em] text-white/40">
              Navigation
            </p>

            <nav className="mt-5 flex flex-col items-start gap-3">
              {footerLinks.navigation.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="
                    text-[13px]
                    text-white/75
                    transition-colors
                    hover:text-white
                  "
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}

          <div>
            <p className="text-[10px] uppercase tracking-[0.16em] text-white/40">
              Follow us
            </p>

            <nav className="mt-5 flex flex-col items-start gap-3">
              {footerLinks.social.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="
                    text-[13px]
                    text-white/75
                    transition-colors
                    hover:text-white
                  "
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* =====================================================
            LARGE FOOTER STATEMENT
        ===================================================== */}

        <div className="py-16 md:py-24">
          <p className="max-w-[1100px] text-[clamp(42px,7vw,105px)] font-medium leading-[0.88] tracking-[-0.065em] text-white">
            Let&apos;s build something
            <br />
            worth remembering.
          </p>
        </div>

        {/* =====================================================
            BOTTOM BAR
        ===================================================== */}

        <div className="flex flex-col gap-4 border-t border-white/15 py-6 text-[10px] uppercase tracking-[0.12em] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Your Studio. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="transition-colors hover:text-white"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-white"
            >
              Terms
            </Link>
          </div>

          <p>Made with intention.</p>
        </div>
      </Container>
    </footer>
  );
}