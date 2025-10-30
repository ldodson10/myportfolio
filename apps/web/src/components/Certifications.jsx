import { useEffect, useState } from 'react';

export default function Certifications() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const res = await fetch('/api/certifications');
        if (!res.ok) throw new Error('Failed to load certifications');
        const data = await res.json();
        setItems(data.certifications || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  if (loading) return <p className="text-sm">Loading certifications…</p>;
  if (error) return <p className="text-sm text-red-600">{error}</p>;

  return (
    <ul className="space-y-3">
      {items.map((c) => (
        <li key={c.id} className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
          <div className="font-medium">{c.title}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">{c.issuer}</div>
          {c.url && (
            <a className="mt-2 inline-block text-blue-600 dark:text-blue-400 text-sm underline" href={c.url} target="_blank" rel="noreferrer">
              Verify
            </a>
          )}
        </li>
      ))}
    </ul>
  );
}

