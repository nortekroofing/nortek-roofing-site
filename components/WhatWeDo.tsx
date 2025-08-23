export default function WhatWeDo(){
  const items = [
    { title: 'Flat Roofing', text: '2-ply SBS membranes, tapered insulation, positive drainage, precise detailing.' },
    { title: 'Metal Roofing', text: 'True standing seam (24ga), on-site roll forming, custom flashings, concealed fasteners.' },
    { title: 'Roof Maintenance', text: 'Leak response, preventative programs, documentation & reporting for asset planning.' },
  ]
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">What we do</h2>
        <div className="grid cards">
          {items.map((it,i)=>(
            <article key={i} className="card">
              <h3>{it.title}</h3>
              <p className="muted">{it.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
