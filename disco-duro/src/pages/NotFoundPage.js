import { Link } from "react-router-dom";
export default function NotFoundPage() {
  return (
    <section>
      <h1>Not found</h1>
      <Link to="/">Volver a inicio</Link>
    </section>
  );
}
