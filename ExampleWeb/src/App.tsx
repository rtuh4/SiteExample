import { FormEvent, useState } from "react";

const PHONE_DISPLAY = "+7 (902) 000-00-00";
const PHONE_LINK = "tel:+79020000000";

const services = [
  ["Отогрев легкового авто", "от 1500 ₽"],
  ["Прикурить автомобиль (12V / 24V)", "от 800 ₽"],
  ["Прогрев выхлопной системы и замков", "от 1000 ₽"],
  ["Отогрев спецтехники и грузовиков", "от 3000 ₽"],
  ["Замена / подвоз аккумулятора", "от 1000 ₽"],
  ["Выездной шиномонтаж / подкачка колес", "от 800 ₽"],
];

const questions = [
  {
    question: "Как быстро вы приедете?",
    answer:
      "В среднем 20–30 минут по Улан-Удэ. Также выезжаем в Сотниково, Иволгинск, Вахмистрово и Эрхирик.",
  },
  {
    question: "Безопасен ли отогрев для проводки и пластика?",
    answer:
      "Да, используем профессиональные тепловые пушки с гофрой и контролем температуры. Никакого открытого огня.",
  },
  {
    question: "Что если машину не удастся завести?",
    answer:
      "Если проблема не в морозе, а в серьезной поломке двигателя или стартера, вы оплачиваете только минимальный выезд мастера (500 ₽).",
  },
  {
    question: "Какие машины отогреваете?",
    answer:
      "Любые: японские, корейские, европейские, отечественные авто, а также дизельные внедорожники и грузовики.",
  },
  {
    question: "Как происходит оплата?",
    answer: "Переводом на карту или наличными только после того, как двигатель заведется.",
  },
];

function App() {
  const [openQuestion, setOpenQuestion] = useState(0);

  const submitCallback = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="app-shell">
      <header className="header">
        <div className="container header-inner">
          <a className="logo" href="#" aria-label="АвтоТепло 03 | Улан-Удэ">
            <span className="logo-mark" aria-hidden="true">
              03
            </span>
            <span>
              АвтоТепло 03 <i>|</i> Улан-Удэ
            </span>
          </a>

          <nav className="nav" aria-label="Контакты">
            <a href="#services">Услуги и цены</a>
            <a href="#faq">Частые вопросы</a>
            <a href="#contacts">Контакты</a>
          </nav>

          <a className="header-phone" href={PHONE_LINK}>
            <span>{PHONE_DISPLAY}</span>
            <b>24/7</b>
          </a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-glow" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">
                <span className="pulse" />
                Работаем круглосуточно по всем районам Улан-Удэ
              </div>
              <h1>
                Отогрев авто и техпомощь
                <br />
                <span>в Улан-Удэ 24/7</span>
              </h1>
              <p className="hero-subtitle">
                Приедем за 20–30 минут в любой район города и пригород. Безопасный запуск двигателя
                без вреда для электроники
              </p>

              <div className="hero-actions">
                <a className="button button-primary button-large" href={PHONE_LINK}>
                  Позвонить
                </a>
                <a
                  className="button button-whatsapp"
                  href="https://wa.me/79020000000"
                  target="_blank"
                  rel="noreferrer"
                >
                  Написать в WhatsApp
                </a>
                <a
                  className="button button-telegram"
                  href="https://t.me/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Написать в Telegram
                </a>
              </div>
            </div>

            <div className="hero-visual">
              <img
                src="https://images.unsplash.com/photo-1582472978953-12929ab18f3e?auto=format&fit=crop&w=1200&q=88"
                alt="Отогрев авто и техпомощь в Улан-Удэ 24/7"
              />
              <div className="visual-shade" />
              <div className="heat-ring heat-ring-one" />
              <div className="heat-ring heat-ring-two" />
              <div className="arrival-card">
                <strong>20–30 минут</strong>
                <span>Приедем за 20–30 минут в любой район города и пригород.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="container">
            <div className="section-heading">
              <h2>Услуги и цены</h2>
              <div className="heading-line" />
            </div>

            <div className="services-grid">
              {services.map(([title, price]) => (
                <article className="service-card" key={title}>
                  <h3>{title}</h3>
                  <div className="service-bottom">
                    <strong>{price}</strong>
                    <a href={PHONE_LINK}>Заказать</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="container faq-layout">
            <div className="faq-title">
              <h2>Частые вопросы</h2>
            </div>

            <div className="accordion">
              {questions.map((item, index) => {
                const isOpen = index === openQuestion;
                return (
                  <div className={`faq-item ${isOpen ? "is-open" : ""}`} key={item.question}>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenQuestion(isOpen ? -1 : index)}
                    >
                      <span>{item.question}</span>
                      <i aria-hidden="true">{isOpen ? "−" : "+"}</i>
                    </button>
                    <div className="faq-answer">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contacts">
          <div className="contact-glow" />
          <div className="container contact-grid">
            <div className="contact-copy">
              <div className="eyebrow">
                <span className="pulse" />
                Работаем круглосуточно по всем районам Улан-Удэ
              </div>
              <a className="contact-phone" href={PHONE_LINK}>
                {PHONE_DISPLAY}
              </a>
              <div className="contact-actions">
                <a className="button button-primary" href={PHONE_LINK}>
                  Позвонить
                </a>
                <a
                  className="button button-whatsapp"
                  href="https://wa.me/79020000000"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                </a>
                <a
                  className="button button-telegram"
                  href="https://t.me/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Telegram
                </a>
              </div>
            </div>

            <form className="callback-form" onSubmit={submitCallback}>
              <input
                type="tel"
                name="phone"
                aria-label="Телефон"
                placeholder="+7 (902) 000-00-00"
                required
              />
              <button className="button button-primary" type="submit">
                Жду звонка мастера
              </button>
              <label className="consent">
                <input type="checkbox" required />
                <span>
                  Я согласен на обработку персональных данных и принимаю условия{" "}
                  <a href="#privacy">Политики конфиденциальности</a>.
                </span>
              </label>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <a className="logo footer-logo" href="#">
              <span className="logo-mark" aria-hidden="true">
                03
              </span>
              <span>
                АвтоТепло 03 <i>|</i> Улан-Удэ
              </span>
            </a>
            <p>ИП Иванов И.И., ИНН 030000000000, ОГРНИП 320030000000000, г. Улан-Удэ</p>
          </div>
          <div className="footer-legal">
            <div>
              <a href="#privacy" id="privacy">
                Политика конфиденциальности
              </a>
              <a href="#agreement">Пользовательское соглашение</a>
            </div>
            <p>Не является публичной офертой (ст. 437 ГК РФ).</p>
          </div>
        </div>
      </footer>

      <div className="mobile-callbar">
        <a className="button button-primary" href={PHONE_LINK}>
          Позвонить
        </a>
      </div>
    </div>
  );
}

export default App;
