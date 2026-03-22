export default function KrunalepsiLandingPage() {
  const palette = {
    primary: '#5C899B',
    accent: '#CC9966',
    white: '#FFFFFF',
    ink: '#1f2937',
    muted: '#64748b',
    soft: '#f8fafc',
    line: '#e2e8f0',
    palePrimary: '#eef5f7',
    paleAccent: '#f8f1ea',
  };

  const nav = [
    { label: 'Produit', href: '#produit' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Tarifs', href: '#tarifs' },
    { label: 'Sécurité', href: '#securite' },
    { label: 'FAQ', href: '#faq' },
  ];

  const features = [
    {
      title: 'Facturation & e-invoicing',
      text: 'Créez, envoyez et suivez vos factures dans une interface moderne pensée pour les entreprises tchèques.',
    },
    {
      title: 'Achats & justificatifs',
      text: 'Centralisez les dépenses, factures fournisseurs et pièces comptables dans un seul flux.',
    },
    {
      title: 'Trésorerie en temps réel',
      text: 'Visualisez les soldes, les mouvements et vos prévisions de cash sans changer d’outil.',
    },
    {
      title: 'Comptabilité collaborative',
      text: 'Travaillez avec votre cabinet ou votre équipe finance à partir d’une seule source de vérité.',
    },
    {
      title: 'Pilotage de l’activité',
      text: 'Suivez revenus, marges, charges et indicateurs clés depuis un tableau de bord simple.',
    },
    {
      title: 'Base locale CZ',
      text: 'Une structure produit conçue pour la réalité opérationnelle et administrative du marché tchèque.',
    },
  ];

  const solutions = [
    {
      title: 'Indépendants & TPE',
      text: 'Un outil simple pour facturer, suivre les dépenses et garder une vision nette de la trésorerie.',
    },
    {
      title: 'PME',
      text: 'Une plateforme pour centraliser ventes, achats, validations, banque et reporting financier.',
    },
    {
      title: 'Cabinets comptables',
      text: 'Un espace collaboratif pour récupérer les pièces, fluidifier la production et suivre les clients.',
    },
  ];

  const modules = [
    'Factures clients',
    'Factures fournisseurs',
    'Rapprochement bancaire',
    'Cash flow',
    'Exports comptables',
    'Espace cabinet',
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '12€',
      desc: 'Pour indépendants et petites structures.',
      points: ['Facturation', 'Suivi des dépenses', 'Dashboard essentiel'],
      highlight: false,
    },
    {
      name: 'Business',
      price: '25€',
      desc: 'Pour PME qui veulent centraliser leur gestion.',
      points: ['Facturation + achats', 'Trésorerie temps réel', 'Collaboration comptable'],
      highlight: true,
    },
    {
      name: 'Pro',
      price: '79€',
      desc: 'Pour entreprises avancées et cabinets partenaires.',
      points: ['Workflows avancés', 'Exports et contrôle', 'Accompagnement dédié'],
      highlight: false,
    },
  ];

  const faqs = [
    {
      q: 'Krunalepsi est-il un logiciel de comptabilité complet ?',
      a: 'Oui, la vision du produit est de réunir facturation, dépenses, trésorerie et comptabilité dans une seule plateforme.',
    },
    {
      q: 'Le produit est-il pensé pour la République tchèque ?',
      a: 'Oui, tout le positionnement, la structure produit et la promesse commerciale sont orientés vers le marché tchèque.',
    },
    {
      q: 'Peut-on collaborer avec un cabinet comptable ?',
      a: 'Oui, cette base inclut déjà une section dédiée aux cabinets et à la collaboration finance-comptabilité.',
    },
    {
      q: 'Cette page peut-elle servir à lancer un MVP ?',
      a: 'Oui, elle peut servir de socle de marque, de site marketing et de base pour une évolution vers une vraie application SaaS.',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur" style={{ borderColor: palette.line }}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div
              className="flex h-11 w-11 items-center justify-center rounded-2xl text-lg font-bold text-white shadow-sm"
              style={{ background: `linear-gradient(135deg, ${palette.primary}, ${palette.accent})` }}
            >
              K
            </div>
            <div>
              <p className="text-lg font-semibold tracking-tight">Krunalepsi</p>
              <p className="text-xs" style={{ color: palette.muted }}>
                Finance & comptabilité pour la République tchèque
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm md:flex">
            {nav.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:opacity-70">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden rounded-2xl border px-4 py-2 text-sm font-medium md:inline-flex" style={{ borderColor: palette.line }}>
              Réserver une démo
            </button>
            <button className="rounded-2xl px-4 py-2 text-sm font-semibold text-white shadow-md" style={{ backgroundColor: palette.accent }}>
              Essai gratuit
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              background:
                'radial-gradient(circle at top left, #5C899B 0%, transparent 35%), radial-gradient(circle at bottom right, #CC9966 0%, transparent 28%)',
            }}
          />

          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
            <div className="flex flex-col justify-center">
              <div className="mb-6 inline-flex w-fit rounded-full px-4 py-2 text-sm font-medium" style={{ backgroundColor: palette.palePrimary, color: palette.primary }}>
                Structure SaaS multi-sections
              </div>

              <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Toute la gestion financière de votre entreprise, <span style={{ color: palette.primary }}>dans une plateforme locale</span> pensée pour la République tchèque.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8" style={{ color: palette.muted }}>
                Krunalepsi centralise la facturation, les dépenses, la trésorerie, la collaboration comptable et le pilotage financier dans une expérience SaaS claire, moderne et crédible.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button className="rounded-2xl px-6 py-3 text-base font-semibold text-white shadow-lg" style={{ backgroundColor: palette.primary }}>
                  Commencer maintenant
                </button>
                <button className="rounded-2xl border px-6 py-3 text-base font-semibold" style={{ borderColor: palette.line, color: palette.primary }}>
                  Voir la plateforme
                </button>
              </div>

              <div className="mt-10 flex flex-wrap gap-3 text-sm">
                {['100% marché tchèque', 'Pensé pour PME & cabinets', 'Base prête pour Netlify'].map((item) => (
                  <span key={item} className="rounded-full px-4 py-2" style={{ backgroundColor: palette.paleAccent, color: palette.ink }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-full max-w-2xl rounded-[32px] border bg-white p-4 shadow-2xl" style={{ borderColor: palette.line }}>
                <div className="rounded-[28px] p-6" style={{ backgroundColor: palette.soft }}>
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <p className="text-sm" style={{ color: palette.muted }}>Dashboard Krunalepsi</p>
                      <h2 className="text-2xl font-semibold">Pilotage financier global</h2>
                    </div>
                    <div className="rounded-2xl px-4 py-2 text-sm font-semibold text-white" style={{ backgroundColor: palette.primary }}>
                      CZ Native
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-3xl bg-white p-5 shadow-sm">
                      <p className="text-sm" style={{ color: palette.muted }}>Revenus du mois</p>
                      <p className="mt-2 text-3xl font-bold">428 000 Kč</p>
                      <div className="mt-4 h-2 rounded-full bg-slate-100">
                        <div className="h-2 w-3/4 rounded-full" style={{ backgroundColor: palette.primary }} />
                      </div>
                    </div>
                    <div className="rounded-3xl bg-white p-5 shadow-sm">
                      <p className="text-sm" style={{ color: palette.muted }}>Charges du mois</p>
                      <p className="mt-2 text-3xl font-bold">173 000 Kč</p>
                      <div className="mt-4 h-2 rounded-full bg-slate-100">
                        <div className="h-2 w-1/2 rounded-full" style={{ backgroundColor: palette.accent }} />
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 grid gap-4 lg:grid-cols-3">
                    <div className="rounded-3xl bg-white p-5 shadow-sm lg:col-span-2">
                      <p className="text-sm" style={{ color: palette.muted }}>Modules actifs</p>
                      <div className="mt-4 grid grid-cols-2 gap-3">
                        {modules.map((item) => (
                          <div key={item} className="rounded-2xl px-4 py-3 text-sm font-medium" style={{ backgroundColor: palette.palePrimary }}>
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-3xl bg-white p-5 shadow-sm">
                      <p className="text-sm" style={{ color: palette.muted }}>Santé financière</p>
                      <div className="mt-6 flex items-center justify-center">
                        <div className="flex h-28 w-28 items-center justify-center rounded-full border-8 text-2xl font-bold" style={{ borderColor: palette.primary, color: palette.primary }}>
                          82%
                        </div>
                      </div>
                      <p className="mt-4 text-center text-sm" style={{ color: palette.muted }}>
                        Bonne visibilité sur la trésorerie et les échéances.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="produit" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: palette.accent }}>
              Produit
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Une vraie plateforme SaaS, pas une simple page vitrine.
            </h2>
            <p className="mt-4 text-base leading-8" style={{ color: palette.muted }}>
              Cette structure multi-sections reprend les codes d’un site SaaS moderne : promesse claire, modules, cibles, tarifs, sécurité, questions fréquentes et appels à l’action.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-[28px] border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg" style={{ borderColor: palette.line }}>
                <div className="mb-5 h-12 w-12 rounded-2xl" style={{ background: `linear-gradient(135deg, ${palette.primary}, ${palette.accent})` }} />
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7" style={{ color: palette.muted }}>
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="solutions" className="py-20" style={{ backgroundColor: palette.soft }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: palette.primary }}>
                Solutions
              </p>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Un message adapté à chaque segment de marché.
              </h2>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {solutions.map((item) => (
                <div key={item.title} className="rounded-[30px] bg-white p-8 shadow-sm">
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-4 text-base leading-8" style={{ color: palette.muted }}>
                    {item.text}
                  </p>
                  <div className="mt-6 inline-flex rounded-full px-4 py-2 text-sm font-medium" style={{ backgroundColor: palette.paleAccent, color: palette.accent }}>
                    Page dédiée possible
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[32px] bg-white p-8 shadow-sm" style={{ border: `1px solid ${palette.line}` }}>
              <p className="text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: palette.primary }}>
                Architecture marketing
              </p>
              <h2 className="mt-4 text-3xl font-bold">Une base crédible pour un futur produit fort.</h2>
              <div className="mt-8 space-y-4">
                {[
                  'Hero orienté conversion',
                  'Présentation des modules',
                  'Segmentation par audience',
                  'Pricing visible',
                  'Bloc sécurité et confiance',
                  'FAQ et CTA finaux',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <div className="mt-1 h-6 w-6 rounded-full" style={{ backgroundColor: palette.accent }} />
                    <p style={{ color: palette.muted }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] p-8 text-white shadow-sm" style={{ backgroundColor: palette.primary }}>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">Positionnement</p>
              <h2 className="mt-4 text-3xl font-bold">Le système financier local, simple et moderne.</h2>
              <p className="mt-6 text-base leading-8 text-white/85">
                Krunalepsi peut se présenter comme une alternative plus locale, plus claire et plus cohérente pour les entreprises tchèques qui veulent centraliser leurs flux financiers.
              </p>
              <div className="mt-8 rounded-[28px] bg-white/10 p-6 backdrop-blur-sm">
                <p className="text-lg font-semibold">Pages à ajouter ensuite</p>
                <ul className="mt-4 space-y-3 text-white/85">
                  <li>• /product</li>
                  <li>• /for-accountants</li>
                  <li>• /e-invoicing-cz</li>
                  <li>• /security</li>
                  <li>• /contact</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="tarifs" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: palette.accent }}>
              Tarifs
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Des offres claires pour lancer le produit.</h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {pricing.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-[32px] border p-8 shadow-sm ${plan.highlight ? 'scale-[1.02]' : ''}`}
                style={{
                  backgroundColor: plan.highlight ? palette.palePrimary : palette.white,
                  borderColor: plan.highlight ? palette.primary : palette.line,
                }}
              >
                <p className="text-lg font-semibold">{plan.name}</p>
                <div className="mt-4 flex items-end gap-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="pb-1" style={{ color: palette.muted }}>/mois</span>
                </div>
                <p className="mt-4 text-sm leading-7" style={{ color: palette.muted }}>{plan.desc}</p>
                <div className="mt-6 space-y-3">
                  {plan.points.map((point) => (
                    <div key={point} className="rounded-2xl px-4 py-3 text-sm" style={{ backgroundColor: '#f8fafc' }}>
                      {point}
                    </div>
                  ))}
                </div>
                <button className="mt-8 w-full rounded-2xl px-5 py-3 text-sm font-semibold text-white" style={{ backgroundColor: plan.highlight ? palette.primary : palette.accent }}>
                  Choisir {plan.name}
                </button>
              </div>
            ))}
          </div>
        </section>

        <section id="securite" className="py-20" style={{ backgroundColor: palette.soft }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-[32px] bg-white p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: palette.primary }}>
                  Sécurité
                </p>
                <h2 className="mt-4 text-3xl font-bold">Un discours de confiance déjà prêt.</h2>
                <p className="mt-4 text-base leading-8" style={{ color: palette.muted }}>
                  Cette section permet d’installer immédiatement une perception de sérieux : protection des données, accès contrôlés, traçabilité et infrastructure moderne.
                </p>
              </div>
              <div className="rounded-[32px] bg-white p-8 shadow-sm">
                <div className="grid grid-cols-2 gap-4">
                  {['Données sécurisées', 'Accès contrôlés', 'Traçabilité', 'Infrastructure moderne'].map((item) => (
                    <div key={item} className="rounded-3xl p-5 text-center font-medium" style={{ backgroundColor: palette.paleAccent }}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: palette.accent }}>
              FAQ
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Questions fréquentes</h2>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-[28px] border bg-white p-6 shadow-sm" style={{ borderColor: palette.line }}>
                <h3 className="text-lg font-semibold">{item.q}</h3>
                <p className="mt-3 leading-8" style={{ color: palette.muted }}>{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 pb-20 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[36px] px-8 py-14 text-center text-white shadow-xl" style={{ background: `linear-gradient(135deg, ${palette.primary}, ${palette.accent})` }}>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Une vraie base SaaS multi-sections, prête à être enrichie et déployée.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/90">
              Tu peux maintenant t’en servir pour Netlify, puis ajouter des pages séparées, un formulaire de contact, un espace démo et une future app connectée au backend.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-md">
                Utiliser cette structure
              </button>
              <button className="rounded-2xl border border-white/40 px-6 py-3 text-sm font-semibold text-white">
                Continuer le branding
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
