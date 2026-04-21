import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  // Reset objects to force styles even if global CSS tries to break them
  const listReset: React.CSSProperties = { listStyle: "none", padding: 0, margin: 0 };
  const linkReset: React.CSSProperties = { textDecoration: "none", color: "inherit", transition: "color 0.3s" };

  return (
    <footer 
      style={{ 
        width: "100%", 
        backgroundColor: "var(--cream)", 
        borderTop: "1px solid rgba(201,169,110,0.2)",
        marginTop: "80px"
      }}
    >
      {/* Container with forced padding and center alignment */}
      <div 
        style={{ 
          maxWidth: "1280px", 
          margin: "0 auto", 
          padding: "80px 40px" // THIS FORCES THE MARGINS/PADDING YOU NEED
        }}
      >
        
        {/* ── TOP SECTION: 4 COLUMNS ── */}
        <div style={{ 
          display: "flex", 
          flexWrap: "wrap", 
          justifyContent: "space-between", 
          gap: "40px",
          alignItems: "flex-start" 
        }}>
          
          {/* 1. BRANDING (Left) */}
          <div style={{ flex: "1 1 300px", minWidth: "250px" }}>
            <Link href="/" style={linkReset}>
              <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
                <span className="font-serif" style={{ fontSize: "28px", letterSpacing: "0.05em", color: "var(--ink)" }}>
                  The <span style={{ fontStyle: "italic", color: "var(--rose)" }}>Atelier</span>
                </span>
                <span style={{ fontSize: "9px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "0.5em", color: "var(--gold)", marginTop: "10px" }}>
                  Aura Glass Studio
                </span>
              </div>
            </Link>
            <p style={{ marginTop: "32px", fontSize: "14px", lineHeight: "1.8", color: "var(--muted)", maxWidth: "300px" }}>
              A sanctuary of bespoke beauty. Where light meets pure serenity and craftsmanship meets soul.
            </p>
          </div>

          {/* 2. EXPLORE (Links) */}
          <div style={{ minWidth: "140px" }}>
            <h4 style={{ fontSize: "10px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "0.4em", color: "var(--gold)", marginBottom: "30px", marginTop: 0 }}>
              Explore
            </h4>
            <ul style={listReset}>
              {["Services", "Booking", "Gallery"].map((item) => (
                <li key={item} style={{ marginBottom: "16px" }}>
                  <Link 
                    href={`/${item.toLowerCase()}`} 
                    style={{ ...linkReset, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.25em", color: "var(--muted)" }}
                    className="hover:text-rose"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. CONNECT (Contact) */}
          <div style={{ minWidth: "200px" }}>
            <h4 style={{ fontSize: "10px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "0.4em", color: "var(--gold)", marginBottom: "30px", marginTop: 0 }}>
              Connect
            </h4>
            <div style={{ fontSize: "12px", color: "var(--muted)", lineHeight: "2.2", letterSpacing: "0.05em" }}>
              <p style={{ margin: 0 }}>hello@theatelier.com</p>
              <p style={{ margin: 0 }}>+1 (800) 555-0192</p>
              <div style={{ marginTop: "20px", opacity: 0.8 }}>
                Studio 12, Glass Square<br />
                London, UK W1B 2EL
              </div>
            </div>
          </div>

          {/* 4. HOURS (Right) */}
          <div style={{ minWidth: "260px" }}>
            <h4 style={{ fontSize: "10px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "0.4em", color: "var(--gold)", marginBottom: "30px", marginTop: 0 }}>
              Studio Hours
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "15px", fontSize: "12px", color: "var(--muted)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(201,169,110,0.15)", paddingBottom: "10px" }}>
                <span style={{ textTransform: "uppercase", letterSpacing: "0.1em" }}>Mon — Fri</span>
                <span style={{ color: "var(--ink)", fontWeight: "bold" }}>9am — 7pm</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(201,169,110,0.15)", paddingBottom: "10px" }}>
                <span style={{ textTransform: "uppercase", letterSpacing: "0.1em" }}>Saturday</span>
                <span style={{ color: "var(--ink)", fontWeight: "bold" }}>10am — 6pm</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", color: "var(--rose)" }}>
                <span style={{ textTransform: "uppercase", letterSpacing: "0.1em" }}>Sunday</span>
                <span style={{ fontWeight: "bold" }}>Closed</span>
              </div>
            </div>
          </div>

        </div>

        {/* ── BOTTOM BAR: COPYRIGHT ── */}
        <div style={{ 
          marginTop: "80px", 
          paddingTop: "40px", 
          borderTop: "1px solid rgba(201, 169, 110, 0.1)", 
          display: "flex", 
          flexWrap: "wrap",
          justifyContent: "space-between", 
          alignItems: "center",
          gap: "24px"
        }}>
          <p style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.3em", color: "var(--muted)", margin: 0 }}>
            © {year} THE ATELIER STUDIO. ALL RIGHTS RESERVED.
          </p>
          
          <div style={{ display: "flex", gap: "40px" }}>
            <Link href="#" style={{ ...linkReset, fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.3em", color: "var(--muted)" }} className="hover:text-rose">Privacy</Link>
            <Link href="#" style={{ ...linkReset, fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.3em", color: "var(--muted)" }} className="hover:text-rose">Terms</Link>
          </div>

          <p style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.5em", fontStyle: "italic", color: "var(--gold)", margin: 0 }}>
            Modern Rituals · Pure Serenity
          </p>
        </div>
      </div>
    </footer>
  );
}