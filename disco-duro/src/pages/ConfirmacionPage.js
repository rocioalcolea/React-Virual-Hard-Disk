import { Message } from "semantic-ui-react";
import nube from "../img/nubeDispositivos.png";
export default function ValidarPage() {
  return (
    <div className="validacion">
      <img src={nube} alt="nube" />
      <section>
        <Message color="blue">
          <p>ENHORABUENA. Ve a tu correo y confirma el registro</p>
        </Message>
      </section>
    </div>
  );
}
