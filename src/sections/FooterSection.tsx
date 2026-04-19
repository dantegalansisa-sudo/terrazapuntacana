import { InstagramIcon, WhatsAppIcon, PhoneIcon } from '../components/Icons';

export default function FooterSection() {
  return (
    <footer className="footer">
      <div className="section-container">
        <div className="footer__grid">
          <div>
            <div className="footer__brand-name">
              Terraza <span>Bar</span> & Car Wash
            </div>
            <p className="footer__brand-desc">
              Car Wash · Música · Ambiente · Buena Vibra.
              El lugar donde vienes a relajarte y tu carro
              sale reluciente.
            </p>
            <div className="footer__socials">
              <a
                className="footer__social-link"
                href="https://www.instagram.com/terrazabarpaseo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                className="footer__social-link"
                href="https://wa.me/18097788888?text=Hola%2C%20vengo%20desde%20su%20p%C3%A1gina%20web%20terrazapuntacana.vercel.app%20y%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n.%20%C2%A1Gracias!"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon size={18} />
              </a>
              <a
                className="footer__social-link"
                href="tel:8097788888"
                aria-label="Teléfono"
              >
                <PhoneIcon size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="footer__col-title">Servicios</h4>
            <ul className="footer__col-links">
              <li><a href="#servicios">Terraza Bar</a></li>
              <li><a href="#carwash">Car Wash</a></li>
              <li><a href="#eventos">DJ en Vivo</a></li>
              <li><a href="#eventos">Karaoke</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer__col-title">Contacto</h4>
            <ul className="footer__col-links">
              <li><a href="tel:8097788888">(809) 778-8888</a></li>
              <li><a href="https://www.instagram.com/terrazabarpaseo" target="_blank" rel="noopener noreferrer">@terrazabarpaseo</a></li>
              <li><a href="#ubicacion">Ver ubicación</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer__col-title">Horario</h4>
            <ul className="footer__col-links">
              <li><a href="#ubicacion">Todos los días</a></li>
              <li><a href="#ubicacion">Hasta las 12:00 AM</a></li>
              <li>
                <a
                  href="https://maps.app.goo.gl/3YoAQgSiUvAWCyQs7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Maps →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span className="footer__copy">
            © 2025 Terraza Bar & Car Wash Paseo de Las Palmas. Todos los derechos reservados.
          </span>
          <span className="footer__nexix">
            Diseñado por <a href="#">NEXIX Tech Studio</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
