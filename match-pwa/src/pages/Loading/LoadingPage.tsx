import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function LoadingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => navigate("/welcome", { replace: true }), 1200);
    return () => clearTimeout(t);
  }, [navigate]);

  return (
    <div className="loading">
      <div className="logo">
        <div className="heart" />
        <span>Match</span>
      </div>
    </div>
  );
}
