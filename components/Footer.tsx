export default function Footer(){
  return (
    <footer className="mt-16 border-t border-black/10">
      <div className="container py-8 text-sm text-muted">
        © {new Date().getFullYear()} Nortek Roofing · info@nortekexteriors.com · 250-590-7164
      </div>
    </footer>
  )
}
