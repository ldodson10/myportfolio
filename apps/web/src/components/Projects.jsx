import { useEffect, useState } from 'react';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const res = await fetch('/api/projects');
        if (!res.ok) throw new Error('Failed to load projects');
        const data = await res.json();
        setProjects(data.projects || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  if (loading) return <p className="text-sm">Loading projects…</p>;
  if (error) return <p className="text-sm text-red-600">{error}</p>;

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((p) => (
        <article key={p.id} className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
          <h3 className="font-semibold">{p.name}</h3>
          {p.description && <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{p.description}</p>}
          {p.link && (
            <a className="mt-2 inline-block text-blue-600 dark:text-blue-400 text-sm underline" href={p.link} target="_blank" rel="noreferrer">
              View
            </a>
          )}
        </article>
      ))}
    </div>
  );
}

