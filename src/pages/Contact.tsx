import { useState } from 'react';
import { FaCheck, FaCopy, FaEnvelope, FaGithub } from 'react-icons/fa';
import { EMAIL, GITHUB } from '../data/portfolio';
import photo from '../assets/foto.jpeg';
import p from './Pages.module.css';

const text = {
  es: {
    title: 'Sobre mí y contacto',
    sub: 'Quién soy y cómo puedes escribirme.',
    aboutTitle: 'Sobre mí',
    bio: [
      'Soy Adrián, estudio informática y me encanta convertir ideas en cosas que se pueden usar: webs, aplicaciones y diseños 3D.',
      'Cuando no estoy programando, modelo objetos en tres dimensiones. // <-- añade aquí algo más sobre ti',
    ],
    contactTitle: 'Contacto',
    contactDesc: 'Si tienes un proyecto, una oferta o solo quieres charlar, escríbeme.',
    email: 'Escribir un correo',
    copy: 'Copiar',
    copied: 'Copiado',
  },
  en: {
    title: 'About me & contact',
    sub: 'Who I am and how to reach me.',
    aboutTitle: 'About me',
    bio: [
      "I'm Adrián, I study computer science and love turning ideas into things people can use: websites, apps and 3D designs.",
      "When I'm not coding, I model objects in three dimensions. // <-- add something more about you here",
    ],
    contactTitle: 'Contact',
    contactDesc: 'If you have a project, an offer, or just want to chat, write to me.',
    email: 'Send an email',
    copy: 'Copy',
    copied: 'Copied',
  },
};

function Contact({ language }: { language: 'es' | 'en' }) {
  const t = text[language];
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
    }
  };

  return (
    <main className={p.page}>
      <div className={p.wrap}>
        <header className={p.head}>
          <h1>{t.title}</h1>
          <p>{t.sub}</p>
        </header>

        <div className={p.contactGrid}>
          <section className={p.about}>
            <img src={photo} alt="Adrián Martín Castellano" className={p.avatar} />
            <div>
              <h2>{t.aboutTitle}</h2>
              {t.bio.map((line) => <p key={line}>{line}</p>)}
            </div>
          </section>

          <section className={p.contactPanel}>
            <h2>{t.contactTitle}</h2>
            <p>{t.contactDesc}</p>

            <div className={p.channel}>
              <a href={`mailto:${EMAIL}`} className={p.channelMain}>
                <FaEnvelope /> <span>{EMAIL}</span>
              </a>
              <button className={p.copyBtn} onClick={copy} aria-live="polite">
                {copied ? <FaCheck /> : <FaCopy />} {copied ? t.copied : t.copy}
              </button>
            </div>

            <div className={p.channel}>
              <a href={GITHUB} target="_blank" rel="noreferrer" className={p.channelMain}>
                <FaGithub /> <span>GitHub</span>
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Contact;
