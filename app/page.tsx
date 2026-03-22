export default function Home() {
  const colors = {
    primary: "#5C899B",
    primaryDeep: "#4D7584",
    accent: "#CC9966",
    accentSoft: "#E7C7A7",
    background: "#F8F6F3",
    white: "#FFFFFF",
    text: "#1F2937",
    muted: "#6B7280",
    border: "#E5E7EB",
  };

  const sectionStyle = {
    width: "100%",
    padding: "90px 24px",
  } as const;

  const containerStyle = {
    maxWidth: "1180px",
    margin: "0 auto",
  } as const;

  const cardStyle = {
    background: colors.white,
    border: `1px solid ${colors.border}`,
    borderRadius: "22px",
    padding: "28px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
  } as const;

  const buttonPrimary = {
    background: colors.accent,
    color: colors.white,
    border: "none",
    borderRadius: "999px",
    padding: "14px 24px",
    fontSize: "16px",
    fontWeight: 600,
    cursor: "pointer",
  } as const;

  const buttonSecondary = {
    background: "transparent",
    color: colors.white,
    border: "1px solid rgba(255,255,255,0.35)",
    borderRadius: "999px",
    padding: "14px 24px",
    fontSize: "16px",
    fontWeight: 600,
    cursor: "pointer",
  } as const;

  return (
    <main
      style={{
        margin: 0,
        background: colors.background,
        color: colors.text,
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      {/* HERO */}
      <section
        style={{
          ...sectionStyle,
          background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDeep} 100%)`,
          color: colors.white,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "420px",
            height: "420px",
            borderRadius: "999px",
            background: "rgba(255,255,255,0.07)",
            top: "-120px",
            right: "-120px",
            filter: "blur(8px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "300px",
            height: "300px",
            borderRadius: "999px",
            background: "rgba(204,153,102,0.18)",
            bottom: "-120px",
            left: "-80px",
            filter: "blur(6px)",
          }}
        />

        <div style={{ ...containerStyle, position: "relative", zIndex: 2 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "20px",
              marginBottom: "72px",
              flexWrap: "wrap",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "16px",
                  background: colors.white,
                  color: colors.primary,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 800,
                  fontSize: "22px",
                }}
              >
                K
              </div>
              <div>
                <div style={{ fontSize: "24px", fontWeight: 700 }}>Krunalepsi</div>
                <div style={{ fontSize: "14px", opacity: 0.82 }}>
                  Accounting & Business Management
                </div>
              </div>
            </div>

            <div style={{ fontSize: "14px", opacity: 0.9 }}>
              République tchèque · SaaS comptabilité & gestion
            </div>
          </div>

          <div style={{ maxWidth: "860px", textAlign: "center", margin: "0 auto" }}>
            <div
              style={{
                display: "inline-block",
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.18)",
                padding: "8px 14px",
                borderRadius: "999px",
                fontSize: "14px",
                marginBottom: "24px",
              }}
            >
              Une plateforme locale, claire et moderne
            </div>

            <h1
              style={{
                fontSize: "clamp(42px, 7vw, 76px)",
                lineHeight: 1.05,
                margin: "0 0 24px 0",
                fontWeight: 800,
                letterSpacing: "-0.03em",
              }}
            >
              La comptabilité et la gestion
              <br />
              pensées pour la République tchèque
            </h1>

            <p
              style={{
                maxWidth: "760px",
                margin: "0 auto 34px auto",
                fontSize: "22px",
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.92)",
              }}
            >
              Krunalepsi centralise la facturation, la trésorerie, la comptabilité
              et le pilotage financier dans une seule interface, avec une identité
              locale forte et une expérience plus élégante.
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "14px",
                flexWrap: "wrap",
                marginBottom: "56px",
              }}
            >
              <button style={buttonPrimary}>Demander une démo</button>
              <button style={buttonSecondary}>Découvrir la plateforme</button>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: "16px",
                maxWidth: "900px",
                margin: "0 auto",
              }}
            >
              {[
                "Facturation locale",
                "Pilotage en temps réel",
                "Comptabilité simplifiée",
                "Automatisation intelligente",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    background: "rgba(255,255,255,0.10)",
                    border: "1px solid rgba(255,255,255,0.14)",
                    borderRadius: "18px",
                    padding: "18px",
                    fontSize: "15px",
                    fontWeight: 500,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section style={sectionStyle}>
        <div style={containerStyle}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.15fr 0.85fr",
              gap: "28px",
              alignItems: "stretch",
            }}
          >
            <div
              style={{
                ...cardStyle,
                background: colors.white,
                padding: "38px",
              }}
            >
              <div
                style={{
                  color: colors.accent,
                  fontWeight: 700,
                  fontSize: "14px",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: "16px",
                }}
              >
                Pourquoi Krunalepsi
              </div>
              <h2
                style={{
                  fontSize: "clamp(30px, 4vw, 46px)",
                  lineHeight: 1.12,
                  margin: "0 0 18px 0",
                }}
              >
                Une base solide pour un logiciel
                <br />
                financier inspirant et premium
              </h2>
              <p
                style={{
                  fontSize: "18px",
                  lineHeight: 1.8,
                  color: colors.muted,
                  margin: 0,
                }}
              >
                Krunalepsi ne doit pas ressembler à un ancien logiciel comptable.
                La marque peut incarner la confiance, la fluidité, la précision et
                une vraie modernité visuelle, avec un bleu turquoise apaisant et un
                doré discret qui donne de la valeur.
              </p>
            </div>

            <div
              style={{
                ...cardStyle,
                background: `linear-gradient(180deg, ${colors.accentSoft} 0%, ${colors.white} 100%)`,
                padding: "38px",
              }}
            >
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "18px",
                  background: colors.accent,
                  color: colors.white,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "28px",
                  fontWeight: 800,
                  marginBottom: "18px",
                }}
              >
                K
              </div>
              <h3 style={{ fontSize: "26px", margin: "0 0 14px 0" }}>
                Logo à venir
              </h3>
              <p
                style={{
                  fontSize: "17px",
                  lineHeight: 1.8,
                  color: colors.muted,
                  margin: 0,
                }}
              >
                En attendant le logo illustré, le monogramme “K” permet déjà
                d’installer une présence de marque simple, sobre et mémorable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section
        style={{
          ...sectionStyle,
          background: colors.white,
        }}
      >
        <div style={containerStyle}>
          <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 56px auto" }}>
            <div
              style={{
                color: colors.accent,
                fontWeight: 700,
                fontSize: "14px",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "14px",
              }}
            >
              Fonctionnalités
            </div>
            <h2
              style={{
                fontSize: "clamp(30px, 4vw, 48px)",
                margin: "0 0 18px 0",
                lineHeight: 1.12,
              }}
            >
              Une plateforme complète pour piloter l’activité
            </h2>
            <p
              style={{
                color: colors.muted,
                fontSize: "18px",
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              Le contenu doit rassurer, expliquer et montrer immédiatement la
              valeur du produit pour une entreprise tchèque.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "22px",
            }}
          >
            {[
              {
                title: "Facturation",
                text: "Créez, envoyez et suivez vos factures avec une expérience plus simple et plus rapide.",
              },
              {
                title: "Comptabilité",
                text: "Regroupez vos flux financiers et gardez une vision claire sur l’activité.",
              },
              {
                title: "Trésorerie",
                text: "Visualisez vos entrées, sorties et équilibres en temps réel.",
              },
              {
                title: "Automatisation",
                text: "Réduisez les tâches manuelles et gagnez du temps au quotidien.",
              },
            ].map((item) => (
              <div key={item.title} style={cardStyle}>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "14px",
                    background: `${colors.primary}14`,
                    color: colors.primary,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                    fontSize: "18px",
                    marginBottom: "18px",
                  }}
                >
                  {item.title.charAt(0)}
                </div>
                <h3 style={{ margin: "0 0 12px 0", fontSize: "24px" }}>{item.title}</h3>
                <p
                  style={{
                    margin: 0,
                    color: colors.muted,
                    fontSize: "17px",
                    lineHeight: 1.8,
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUE */}
      <section style={sectionStyle}>
        <div style={containerStyle}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "22px",
            }}
          >
            {[
              {
                number: "01",
                title: "Pensé pour la République tchèque",
                text: "Le positionnement est local, clair et immédiatement différenciant.",
              },
              {
                number: "02",
                title: "Conçu pour être rassurant",
                text: "Le design inspire sérieux, structure et confiance sans être froid.",
              },
              {
                number: "03",
                title: "Prêt pour une évolution SaaS",
                text: "La base actuelle peut devenir un vrai produit multi-pages et premium.",
              },
            ].map((item) => (
              <div
                key={item.number}
                style={{
                  ...cardStyle,
                  background: colors.background,
                }}
              >
                <div
                  style={{
                    color: colors.accent,
                    fontSize: "14px",
                    fontWeight: 800,
                    letterSpacing: "0.08em",
                    marginBottom: "14px",
                  }}
                >
                  {item.number}
                </div>
                <h3 style={{ fontSize: "24px", margin: "0 0 12px 0" }}>{item.title}</h3>
                <p
                  style={{
                    margin: 0,
                    color: colors.muted,
                    fontSize: "17px",
                    lineHeight: 1.8,
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          ...sectionStyle,
          background: `linear-gradient(135deg, ${colors.accent} 0%, #C08A57 100%)`,
          color: colors.white,
        }}
      >
        <div style={{ ...containerStyle, textAlign: "center", maxWidth: "900px" }}>
          <div
            style={{
              display: "inline-block",
              background: "rgba(255,255,255,0.14)",
              border: "1px solid rgba(255,255,255,0.18)",
              padding: "8px 14px",
              borderRadius: "999px",
              fontSize: "14px",
              marginBottom: "20px",
            }}
          >
            Prochaine étape
          </div>

          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 52px)",
              margin: "0 0 18px 0",
              lineHeight: 1.1,
            }}
          >
            Prêt à donner une vraie identité à Krunalepsi ?
          </h2>

          <p
            style={{
              fontSize: "20px",
              lineHeight: 1.8,
              margin: "0 auto 28px auto",
              maxWidth: "760px",
              color: "rgba(255,255,255,0.94)",
            }}
          >
            Cette base peut maintenant évoluer en vrai site SaaS avec navigation,
            pages produit, section tarifs, page contact et design encore plus haut
            de gamme.
          </p>

          <div
            style={{
              display: "flex",
              gap: "14px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <button
              style={{
                background: colors.white,
                color: colors.text,
                border: "none",
                borderRadius: "999px",
                padding: "14px 24px",
                fontSize: "16px",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Continuer le design
            </button>

            <button
              style={{
                background: "transparent",
                color: colors.white,
                border: "1px solid rgba(255,255,255,0.35)",
                borderRadius: "999px",
                padding: "14px 24px",
                fontSize: "16px",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Préparer le contenu
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          background: colors.white,
          padding: "30px 24px",
          borderTop: `1px solid ${colors.border}`,
        }}
      >
        <div
          style={{
            ...containerStyle,
            display: "flex",
            justifyContent: "space-between",
            gap: "16px",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <div style={{ fontWeight: 700 }}>Krunalepsi</div>
          <div style={{ color: colors.muted, fontSize: "14px" }}>
            Plateforme de comptabilité et de gestion pour la République tchèque
          </div>
        </div>
      </footer>
    </main>
  );
}