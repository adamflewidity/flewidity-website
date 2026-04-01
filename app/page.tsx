import Nav from "@/components/Nav";

export default function Home() {
  return (
    <>
      <Nav />

      <main className="pt-16">
        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="max-w-5xl mx-auto px-6 py-28 md:py-40">
          <div className="w-8 h-[3px] bg-accent mb-8" />
          <p className="text-xs font-medium tracking-widest uppercase text-muted-light mb-8">
            Flewidity Ltd
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight max-w-3xl">
            Technology, consulting, and marketing operations for businesses that
            need things to actually work.
          </h1>
          <p className="mt-8 text-lg text-muted leading-relaxed max-w-2xl">
            Flewidity is a technology and consulting business run by Adam and
            Caroline. We build software products, fix marketing and
            sales systems, and help businesses solve operational problems.
          </p>
          <div className="mt-10">
            <a
              href="mailto:hello@flewidity.com"
              className="inline-flex items-center justify-center bg-accent text-background px-8 py-3 text-[15px] font-medium hover:opacity-90 transition-opacity duration-150"
            >
              Get in touch
            </a>
          </div>
        </section>

        {/* ── What We Do ───────────────────────────────────────────────── */}
        <section id="what-we-do" className="border-t border-border bg-subtle">
          <div className="max-w-5xl mx-auto px-6 py-24 md:py-32">
            <p className="text-xs font-medium tracking-widest uppercase text-accent mb-12">
              What We Do
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Service 1 */}
              <div className="border-t border-border-strong pt-8">
                <p className="text-xs font-medium tracking-widest uppercase text-accent mb-4">01</p>
                <h2 className="text-xl font-semibold text-foreground mb-4 leading-snug">
                  Marketing Operations &amp; Automation
                </h2>
                <p className="text-[15px] text-muted leading-relaxed">
                  Caroline is a senior marketing operations and automation
                  consultant. She embeds into teams — often short-term or
                  fractional — and translates business and campaign goals into
                  practical execution. That means building workflows,
                  automations, and data structures across platforms like
                  HubSpot, Salesforce, Pardot, and Marketo.
                </p>
                <p className="mt-4 text-[15px] text-muted leading-relaxed">
                  Companies bring Caroline in when their marketing and sales
                  technology isn&apos;t delivering, when teams are
                  overstretched, or when they&apos;re scaling fast and need
                  someone who can step in, stabilise operations, and get things
                  working properly — with minimal onboarding.
                </p>
                <a
                  href="https://cazbrunsch.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-6 text-[14px] text-foreground underline underline-offset-4 decoration-border-strong hover:decoration-accent transition-[text-decoration-color] duration-150"
                >
                  cazbrunsch.com →
                </a>
              </div>

              {/* Service 2 */}
              <div className="border-t border-border-strong pt-8">
                <p className="text-xs font-medium tracking-widest uppercase text-accent mb-4">02</p>
                <h2 className="text-xl font-semibold text-foreground mb-4 leading-snug">
                  Software &amp; Product Development
                </h2>
                <p className="text-[15px] text-muted leading-relaxed">
                  We design and build software products — typically lightweight,
                  focused tools that solve a specific operational problem. From
                  SaaS platforms to internal tools, CRM systems to automation
                  workflows, we take ideas from concept through to live, working
                  products.
                </p>
                <p className="mt-4 text-[15px] text-muted leading-relaxed">
                  Our approach is pragmatic: modern tech stacks, fast
                  iteration, and a focus on solving the actual problem rather
                  than over-engineering. If your business has a process
                  that&apos;s manual, slow, or broken — we can probably build
                  something that fixes it.
                </p>
              </div>

              {/* Service 3 */}
              <div className="border-t border-border-strong pt-8">
                <p className="text-xs font-medium tracking-widest uppercase text-accent mb-4">03</p>
                <h2 className="text-xl font-semibold text-foreground mb-4 leading-snug">
                  Business Consulting &amp; Diagnostics
                </h2>
                <p className="text-[15px] text-muted leading-relaxed">
                  We work with business owners who are too close to the
                  day-to-day to see the structural problems holding them back.
                  Our diagnostic process covers finances, operations,
                  technology, and team — starting with where the money actually
                  goes and working outward.
                </p>
                <p className="mt-4 text-[15px] text-muted leading-relaxed">
                  The output is a clear, prioritised roadmap: what&apos;s
                  broken, what&apos;s costing you, and what to fix first. Most
                  consultants look at how a business operates. We start by
                  asking whether it should be operating that way at all.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── What We've Built ─────────────────────────────────────────── */}
        <section id="what-weve-built" className="border-t border-border">
          <div className="max-w-5xl mx-auto px-6 py-24 md:py-32">
            <p className="text-xs font-medium tracking-widest uppercase text-accent mb-12">
              What We&apos;ve Built
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              {/* Project 1 */}
              <div className="border-t border-accent pt-8">
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  TermSeeker
                </h2>
                <p className="text-[15px] text-muted leading-relaxed">
                  A SaaS platform for bridging finance brokers that automates
                  the process of requesting terms from lenders. Brokers fill in
                  their deal details, and the system generates personalised
                  emails to the right lenders — cutting hours of manual work
                  down to minutes.
                </p>
                <a
                  href="https://term-seeker.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-6 text-[14px] text-foreground underline underline-offset-4 decoration-border-strong hover:decoration-accent transition-[text-decoration-color] duration-150"
                >
                  View TermSeeker →
                </a>
              </div>

              {/* Project 2 */}
              <div className="border-t border-accent pt-8">
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  Steve Pointon Counselling &amp; Support
                </h2>
                <p className="text-[15px] text-muted leading-relaxed">
                  Full website redesign and hosting migration for a counselling
                  and workplace training practice. Rebuilt from WordPress to a
                  modern stack with improved performance, design, and
                  maintainability.
                </p>
                <a
                  href="https://stevepointoncounsellingandsupport.co.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-6 text-[14px] text-foreground underline underline-offset-4 decoration-border-strong hover:decoration-accent transition-[text-decoration-color] duration-150"
                >
                  View site →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── About ────────────────────────────────────────────────────── */}
        <section id="about" className="border-t border-border bg-subtle">
          <div className="max-w-5xl mx-auto px-6 py-24 md:py-32">
            <p className="text-xs font-medium tracking-widest uppercase text-accent mb-12">
              About
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              {/* Adam */}
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Adam
                </h2>
                <p className="text-[15px] text-muted leading-relaxed">
                  Twenty years across customer success, operations, and
                  technology — in transport, logistics, SaaS, and everything in
                  between. Adam has spent his career walking into businesses,
                  finding what&apos;s broken, and building the systems that fix
                  it. At Flewidity, he leads product development, builds
                  software, and works directly with clients on operational
                  consulting.
                </p>
              </div>

              {/* Caroline */}
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Caroline
                </h2>
                <p className="text-[15px] text-muted leading-relaxed">
                  A senior marketing operations specialist with deep expertise
                  across HubSpot, Salesforce, Pardot, and Marketo. Caroline
                  has spent her career making marketing and sales technology
                  actually deliver results — building the automations,
                  workflows, and data structures that teams rely on to grow. At
                  Flewidity, she provides consulting services to companies that
                  need experienced, hands-on marketing operations support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Contact ──────────────────────────────────────────────────── */}
        <section id="contact" className="bg-foreground">
          <div className="max-w-5xl mx-auto px-6 py-24 md:py-32">
            <h2 className="text-3xl md:text-4xl font-semibold text-background leading-tight tracking-tight max-w-lg">
              Got something you want to build, fix, or figure out?
            </h2>
            <p className="mt-5 text-[15px] text-muted-light leading-relaxed max-w-sm">
              Drop us a line. If we can help, we will. If we can&apos;t,
              we&apos;ll tell you.
            </p>
            <a
              href="mailto:hello@flewidity.com"
              className="inline-flex items-center mt-8 text-lg text-background underline underline-offset-4 decoration-accent hover:decoration-background transition-[text-decoration-color] duration-150"
            >
              hello@flewidity.com
            </a>
          </div>
        </section>
      </main>

      {/* ── Footer ───────────────────────────────────────────────────── */}
      <footer className="border-t border-border">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-[13px] text-muted-light">
            © Flewidity Ltd. All rights reserved.
          </p>
          <a
            href="mailto:hello@flewidity.com"
            className="text-[13px] text-muted-light hover:text-accent transition-colors duration-150"
          >
            hello@flewidity.com
          </a>
        </div>
      </footer>
    </>
  );
}
