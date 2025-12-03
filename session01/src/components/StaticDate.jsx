function StaticDateTime() {
  const now = new Date();

  const jour = now.getDate();
  const mois = now.toLocaleString("fr-FR", { month: "long" });
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


export {StaticDateTime};
