"use client";
import { useEffect, useState } from 'react';
import type { Metadata, Viewport } from 'next';
import styles from './page.module.css';
import { supabase } from '@/lib/supabaseClient';
import { addToQueue, flushQueue, queueSize, type Punch } from '@/lib/queue';

export const metadata: Metadata = {
  title: 'Clock In',
  manifest: '/manifest.webmanifest',
  themeColor: '#1db954',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
  },
  icons: {
    icon: [
      { url: '/icons/icon-192.svg', sizes: '192x192', type: 'image/svg+xml' },
      { url: '/icons/icon-512.svg', sizes: '512x512', type: 'image/svg+xml' },
    ],
    apple: '/icons/icon-192.svg',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

function useOnline(): boolean {
  const [online, setOnline] = useState(
    typeof navigator === 'undefined' ? true : navigator.onLine,
  );
  useEffect(() => {
    const handler = () => setOnline(navigator.onLine);
    window.addEventListener('online', handler);
    window.addEventListener('offline', handler);
    return () => {
      window.removeEventListener('online', handler);
      window.removeEventListener('offline', handler);
    };
  }, []);
  return online;
}

export default function ClockInPage() {
  const [employeeId, setEmployeeId] = useState('');
  const [jobCode, setJobCode] = useState('');
  const [busy, setBusy] = useState(false);
  const [ok, setOk] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [queuedCount, setQueuedCount] = useState(0);
  const [deviceId, setDeviceId] = useState('');
  const online = useOnline();

  useEffect(() => {
    queueSize().then(setQueuedCount);
    flushQueue(supabase).then(queueSize).then(setQueuedCount);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      let id = localStorage.getItem('device_id');
      if (!id) {
        id = self.crypto?.randomUUID ? self.crypto.randomUUID() : String(Date.now());
        localStorage.setItem('device_id', id);
      }
      setDeviceId(id);
    }
  }, []);

  useEffect(() => {
    if (online) {
      flushQueue(supabase).then(queueSize).then(setQueuedCount);
    }
  }, [online]);

  useEffect(() => {
    if (ok) {
      document.body.style.overflow = 'hidden';
      const t = setTimeout(() => {
        setOk(false);
        setEmployeeId('');
        setJobCode('');
        document.body.style.overflow = '';
      }, 3000);
      return () => {
        clearTimeout(t);
        document.body.style.overflow = '';
      };
    }
  }, [ok]);

  async function submit(action: 'in' | 'out') {
    if (busy) return;
    setBusy(true);
    setError(null);
    const punch: Punch = {
      employee_id: employeeId.trim(),
      action,
      job_code: jobCode.trim() || undefined,
      device_id: deviceId,
      ts: new Date().toISOString(),
    };
    console.info('submit', { online, queued: queuedCount });
    try {
      if (online) {
        const res = await fetch('/api/punch', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(punch),
        });
        if (!res.ok) throw new Error('bad response');
      } else {
        await addToQueue(punch);
      }
      setOk(true);
    } catch (e) {
      await addToQueue(punch);
      setError('Saved offline. Will retry automatically.');
    } finally {
      const count = await queueSize();
      setQueuedCount(count);
      setBusy(false);
    }
  }

  return (
    <div className={styles.wrapper}>
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            submit('in');
          }
        }}
      >
        {error && <div className={styles.error}>{error}</div>}
        <input
          className={styles.input}
          placeholder="Employee ID"
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
          inputMode="numeric"
          pattern="[0-9]*"
          required
          aria-label="Employee ID"
        />
        <input
          className={styles.input}
          placeholder="Job Code (optional)"
          value={jobCode}
          onChange={(e) => setJobCode(e.target.value)}
          aria-label="Job Code"
        />
        <div className={styles.buttons}>
          <button
            type="button"
            className={styles.button}
            onClick={() => submit('in')}
            disabled={busy}
          >
            CLOCK IN
          </button>
          <button
            type="button"
            className={styles.button}
            onClick={() => submit('out')}
            disabled={busy}
          >
            CLOCK OUT
          </button>
        </div>
      </form>
      {ok && (
        <div className={styles.overlay} role="status" aria-live="polite">
          <svg
            viewBox="0 0 24 24"
            className={styles.check}
            fill="none"
            stroke="#1db954"
            strokeWidth="3"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
          <p>Success</p>
        </div>
      )}
      <a href="/clockin/admin" className={styles.admin}>
        Admin
      </a>
    </div>
  );
}
