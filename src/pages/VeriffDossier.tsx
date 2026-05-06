import { useEffect } from "react";
import { useParams } from "react-router-dom";
import DossierIndex from "../veriff-dossier/Index";
import "../veriff-dossier/dossier.css";

export default function VeriffDossier() {
  const { section } = useParams();

  useEffect(() => {
    document.title = "Veriff · Strategy Dossier";
  }, []);

  // Optional: when navigating directly to /veriff-business-case/:section
  // the page should scroll to the corresponding section.
  useEffect(() => {
    if (!section) return;
    const el = document.getElementById(section);
    if (!el) return;
    requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [section]);

  return (
    <div className="veriff-dossier">
      <DossierIndex />
    </div>
  );
}

