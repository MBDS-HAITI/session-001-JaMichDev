import React, { useState, useEffect } from "react";

function DynamicDateTime() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const jour = now.getDate(); // jour du mois (1-31)
  const mois = now.toLocaleString("fr-FR", { month: "long" }); // nom du mois en français
  const annee = now.getFullYear();

  const pad = (n) => String(n).padStart(2, "0");
  const heure = pad(now.getHours());
  const minute = pad(now.getMinutes());
  const seconde = pad(now.getSeconds());

  return (
    <div>
      Bonjour, on est le {jour}, {mois}, {annee} et il est {heure}:{minute}:{seconde}
    </div>
  );
}

export {DynamicDateTime};