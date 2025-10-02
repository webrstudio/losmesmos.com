import styles from './styles.module.css';

export const DeliveryPolicity = () => {
  return (
    <div className={`${styles.deliveryPrivacity} flexContainer`}>
      <p>
        En Los Mesmos Shop, operada por Caoba Media & Management, queremos que
        tu experiencia de compra sea sencilla, clara y confiable. Por eso, te
        compartimos nuestras políticas de envío:
      </p>
      <ul>
        <li className={styles.titleList}>🕒Horarios de envío:</li>
        <li>
          Puedes realizar tu compra las 24 horas del día, los 7 días de la
          semana.
        </li>
        <li>
          Todos los pedidos se procesan y se envían únicamente los martes y
          viernes de cada semana.
        </li>
        <li>
          Si tu pedido se confirma en un día distinto, saldrá en el siguiente
          día programado de envíos.
        </li>
      </ul>
      <ul>
        <li className={styles.titleList}>🚚Tiempos de entrega:</li>
        <li>El tiempo de entrega depende de la paquetería y tu ubicación.</li>
        <li>
          En general, los envíos tardan entre 2 a 7 días hábiles después de que
          tu paquete ha sido despachado
        </li>
      </ul>
      <ul>
        <li className={styles.titleList}>💳Confirmación de compra:</li>
        <li>
          Una vez que tu pago sea confirmado, recibirás un correo con los
          detalles de tu pedido.
        </li>
        <li>
          Cuando tu paquete sea enviado, recibirás un número de guía para
          rastrearlo.
        </li>
      </ul>
      <ul>
        <li className={styles.titleList}>🌎Cobertura:</li>
        <li>Realizamos envíos a todo México.</li>
        <li>
          Si vives en una zona extendida, el tiempo de entrega puede variar.
        </li>
      </ul>
      <ul>
        <li className={styles.titleList}>📬Datos de envío:</li>
        <li>
          Es importante que al hacer tu compra verifiques que tu dirección esté
          completa y correcta (incluyendo referencias).
        </li>
        <li>
          Los Mesmos Shop no se hace responsable por retrasos o devoluciones
          causados por datos incorrectos en la dirección.
        </li>
      </ul>
      <ul>
        <li className={styles.titleList}>📦Costos de envío:</li>
        <li>
          El costo se calcula al momento de tu compra y depende de tu ubicación.
        </li>
        <li>
          En ocasiones especiales podemos ofrecer promociones de envío gratis,
          que se anunciarán en la página.
        </li>
      </ul>
      <ul>
        <li className={styles.titleList}>🚨Paquetes no entregados:</li>
        <li>
          Si la paquetería regresa tu pedido por dirección incorrecta o por no
          recibirlo en el domicilio, podremos reprogramar el envío, pero será
          necesario cubrir nuevamente el costo de envío.
        </li>
      </ul>
    </div>
  );
};