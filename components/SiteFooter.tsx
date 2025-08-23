'use client'
import { useEffect, useState } from 'react'

type Weather = { tempC?: number; windKph?: number; city?: string }

export default function SiteFooter(){
  const [timeStr, setTimeStr] = useState('')
  const [wx, setWx] = useState<Weather>({})

  useEffect(() => {
    const updateTime = () => setTimeStr(new Date().toLocaleTimeString([], { hour: '2-digit', minute:'2-digit' }))
    updateTime()
    const t = setInterval(updateTime, 60000)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    const fetchWx = async (lat:number, lon:number, city?:string) => {
      try{
        const u = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
        const r = await fetch(u)
        const j = await r.json()
        setWx({ tempC: j?.current_weather?.temperature, windKph: j?.current_weather?.windspeed, city })
      }catch{}
    }
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(
        pos => fetchWx(pos.coords.latitude, pos.coords.longitude),
        () => fetchWx(48.4284,-123.3656,'Victoria') // fallback: Victoria
      )
    } else {
      fetchWx(48.4284,-123.3656,'Victoria')
    }
  }, [])

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <img src="/logo.svg" alt="Nortek" style={{height:32}} />
          <p className="muted small">Victoria • Westshore • Nanaimo</p>
          <p className="muted small">
            <a href="tel:2505907164">+1 (250) 590-7164</a><br/>
            <a href="mailto:info@nortekexteriors.com">info@nortekexteriors.com</a>
          </p>
        </div>
        <div>
          <h5>Contact us</h5>
          <p className="muted small">Tell us about your project and timeline. We’ll reply quickly.</p>
          <p><a className="btn primary" href="/contact">Request a Quote</a></p>
          <p className="muted small">Local time: {timeStr || '—'}</p>
          <p className="muted small">
            Weather{wx.city?` (${wx.city})`:''}: {typeof wx.tempC==='number' ? `${wx.tempC}°C` : '—'}
            {typeof wx.windKph==='number' ? ` · Wind ${wx.windKph} km/h` : ''}
          </p>
        </div>
        <div>
          <h5>Links</h5>
          <p className="footer-links">
            <a href="/projects">Projects</a> · <a href="/services">Services</a> · <a href="/about">About</a>
          </p>
          <p className="footer-links">
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="5" stroke="#e8edf2"/><circle cx="12" cy="12" r="4" stroke="#e8edf2"/><circle cx="17.5" cy="6.5" r="1" fill="#e8edf2"/></svg>
            </a>
            &nbsp;&nbsp;
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noreferrer">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M13 21v-8h3l1-4h-4V7a2 2 0 0 1 2-2h2V1h-3a5 5 0 0 0-5 5v3H6v4h3v8h4z" fill="#e8edf2"/></svg>
            </a>
          </p>
          <p className="muted small"><a href="/terms">Terms</a> · <a href="/privacy">Privacy Policy</a></p>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© <span id="year">2025</span> Nortek Roofing. All rights reserved.</p>
      </div>
    </footer>
  )
}
