export default function Home() {
  return (
    <main style={{ fontFamily: "sans-serif", background: "#fff", color: "#1a1a1a" }}>
      
      {/* HERO */}
      <section style={{ padding: "80px 20px", textAlign: "center", background: "#5C899B", color: "white" }}>
        <h1 style={{ fontSize: "42px", marginBottom: "20px" }}>
          Krunalepsi
        </h1>
        <p style={{ fontSize: "20px", maxWidth: "700px", margin: "0 auto" }}>
          La nouvelle génération de comptabilité et gestion pour la République tchèque.
        </p>
      </section>

      {/* FEATURES */}
      <section style={{ padding: "60px 20px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
          Une plateforme complète
        </h2>

        <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
          
          <div style={{ border: "1px solid #eee", padding: "20px", borderRadius: "10px", width: "250px" }}>
            <h3>Facturation</h3>
            <p>Créez et envoyez vos factures facilement.</p>
          </div>

          <div style={{ border: "1px solid #eee", padding: "20px", borderRadius: "10px", width: "250px" }}>
            <h3>Comptabilité</h3>
            <p>Suivez vos finances en temps réel.</p>
          </div>

          <div style={{ border: "1px solid #eee", padding: "20px", borderRadius: "10px", width: "250px" }}>
            <h3>Automatisation</h3>
            <p>Gagnez du temps avec des automatisations intelligentes.</p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "60px 20px", textAlign: "center", background: "#CC9966", color: "white" }}>
        <h2>Prêt à moderniser votre gestion ?</h2>
        <p style={{ margin: "20px 0" }}>
          Rejoignez Krunalepsi dès aujourd’hui.
        </p>
        <button style={{ padding: "10px 20px", border: "none", borderRadius: "5px", cursor: "pointer" }}>
          Commencer
        </button>
      </section>

    </main>
  );
}