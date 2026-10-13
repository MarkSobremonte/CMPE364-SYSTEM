export default function StatusBanner({ status }) {
  if (status === 'loading') return <p>Loading records...</p>;
  if (status === 'error') return <p>Failed to load records. Please try again later.</p>;
  return null;
}