export default function BrandMark({ compact = false }) {
  return (
    <a className={`brand ${compact ? 'brand--compact' : ''}`} href="#home" aria-label="Tulas International School home">
      <span className="brand__emblem" aria-hidden="true">
        <svg viewBox="0 0 42 42" fill="none">
          <path d="M21 3.5 37.5 13v16L21 38.5 4.5 29V13L21 3.5Z" />
          <path d="M21 11v20M11 16.5l20 11M31 16.5l-20 11" />
          <circle cx="21" cy="21" r="4.5" />
        </svg>
      </span>
      {!compact && (
        <span className="brand__type">
          <strong>TULAS</strong>
          <span>INTERNATIONAL SCHOOL</span>
        </span>
      )}
    </a>
  );
}
