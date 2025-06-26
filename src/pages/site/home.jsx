import React from "react";
import ContentCard from "../../components/ContentCard.jsx";

export default function Home() {
  return (
    <main className="main-content">
      <div className="main-grid">
        {Array.from({ length: 45 }).map((_, i) => (
          <ContentCard key={i} />
        ))}
      </div>
    </main>
  );
}
