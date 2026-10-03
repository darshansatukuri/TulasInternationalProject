import { useEffect, useState } from 'react';
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import BrandMark from './components/BrandMark.jsx';
import Reveal from './components/Reveal.jsx';
import SiteHeader from './components/SiteHeader.jsx';

const learningPillars = [
  {
    number: '01',
    title: 'Curiosity leads',
    text: 'Big questions, brave ideas, and the confidence to keep exploring.',
    icon: '✳',
    tone: 'peach',
  },
  {
    number: '02',
    title: 'Creativity thrives',
    text: 'Room to make, imagine, experiment, and find a voice of your own.',
    icon: '↗',
    tone: 'lavender',
  },
  {
    number: '03',
    title: 'Every day unfolds',
    text: 'New experiences that turn learning into a lifelong adventure.',
    icon: '⌁',
    tone: 'sage',
  },
];

function ScrollProgress({ progress }) {
  return (
    <div className="scroll-progress" aria-hidden="true">
      <motion.span style={{ scaleX: progress }} />
    </div>
  );
}

function ArrowLink({ href, children, className = '' }) {
  return (
    <a className={`arrow-link ${className}`.trim()} href={href}>
      {children} <span aria-hidden="true">↗</span>
    </a>
  );
}

function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="hero section-wrap" id="home">
      <div className="hero__copy">
        <Reveal className="eyebrow">
          <span className="eyebrow__dot" />
          A different kind of school
        </Reveal>
        <Reveal delay={70} as="h1" className="hero__title">
          School should
          <br />
          feel like an
          <br />
          <span>adventure.</span>
        </Reveal>
        <Reveal delay={140} className="hero__description">
          At Tulas, curiosity leads, creativity thrives, and every day brings
          something new to discover.
        </Reveal>
        <Reveal delay={210} className="hero__actions">
          <a className="button button--dark" href="#admissions">
            Begin your Tulas story <span aria-hidden="true">↗</span>
          </a>
          <a className="text-link" href="#story">
            Get to know us <span aria-hidden="true">↓</span>
          </a>
        </Reveal>
        <Reveal delay={280} className="hero__note">
          <span className="hero__note-stars" aria-hidden="true">✳ ✳ ✳</span>
          <span>Growing curious minds in Dehradun</span>
        </Reveal>
      </div>
      <Reveal className="hero__visual" delay={100}>
        <motion.img
          className="hero__image"
          src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=85"
          alt="Students learning and sharing ideas in a bright classroom"
          fetchpriority="high"
          initial={shouldReduceMotion ? false : { scale: 1.04, opacity: 0.6 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.9, ease: 'easeOut' }}
        />
        <div className="hero__image-wash" />
        <div className="hero__caption">
          <span className="hero__caption-mark" aria-hidden="true">✳</span>
          <span>
            <strong>Learn. Grow. Explore.</strong>
            <small>Make room for what’s possible.</small>
          </span>
        </div>
        <div className="hero__image-label">DEHRADUN · INDIA</div>
        <div className="hero__orbit" aria-hidden="true">TULAS&nbsp; · &nbsp;LEARN&nbsp; · &nbsp;GROW&nbsp; · &nbsp;EXPLORE&nbsp; · &nbsp;</div>
      </Reveal>
      <a className="hero__scroll" href="#story">
        <span>Scroll to explore</span>
        <span className="hero__scroll-line" />
      </a>
    </section>
  );
}

function Story() {
  return (
    <section className="story section-wrap" id="story">
      <Reveal className="story__intro">
        <p className="eyebrow"><span className="eyebrow__dot" /> A little more Tulas</p>
        <h2>
          What’s the secret to
          <br />
          making school <em>awesome?</em>
        </h2>
      </Reveal>
      <Reveal className="story__body" delay={100}>
        <p>
          It’s all about making learning feel like an adventure—where curiosity
          leads, creativity thrives, and every day brings something new to
          discover.
        </p>
        <p className="story__aside">
          When students are inspired, they don’t just learn—they grow, explore,
          and shape their own futures.
        </p>
        <ArrowLink href="#learning">Discover the Tulas difference</ArrowLink>
      </Reveal>
      <div className="story__scribble" aria-hidden="true">there, we cracked it! <span>↗</span></div>
    </section>
  );
}

function Learning() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="learning section-wrap" id="learning">
      <div className="section-heading">
        <Reveal>
          <p className="eyebrow"><span className="eyebrow__dot" /> The way we learn</p>
          <h2>Made for more<br />than <em>the classroom.</em></h2>
        </Reveal>
        <Reveal delay={100} className="section-heading__aside">
          <p>
            Learning happens everywhere. We make space for each student to
            find their own spark—and follow it.
          </p>
          <span aria-hidden="true">✳</span>
        </Reveal>
      </div>
      <div className="pillar-grid">
        {learningPillars.map((pillar, index) => (
          <Reveal
            key={pillar.number}
            className={`pillar-card pillar-card--${pillar.tone}`}
            delay={index * 90}
            whileHover={shouldReduceMotion ? undefined : { y: -5 }}
          >
            <div className="pillar-card__top">
              <span className="pillar-card__number">{pillar.number} / 03</span>
              <span className="pillar-card__icon" aria-hidden="true">{pillar.icon}</span>
            </div>
            <div>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </div>
            <span className="pillar-card__arrow" aria-hidden="true">↗</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function LifeAtTulas() {
  return (
    <section className="life section-wrap" id="life">
      <Reveal className="life__image-wrap">
        <img
          src="https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=1200&q=85"
          alt="Children spending time together outdoors"
          loading="lazy"
        />
        <div className="life__image-sticker">A place<br />to belong <span>✳</span></div>
      </Reveal>
      <div className="life__copy">
        <Reveal>
          <p className="eyebrow"><span className="eyebrow__dot" /> Life at Tulas</p>
          <h2>Room to be<br /><em>your whole self.</em></h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="life__description">
            The best learning starts with feeling at home. At Tulas, students
            are encouraged to be curious, kind, and confidently themselves—in
            every corner of the school day.
          </p>
          <ArrowLink href="https://tis.edu.in/">See life at Tulas</ArrowLink>
        </Reveal>
        <Reveal className="life__quote" delay={170}>
          <span aria-hidden="true">“</span>
          <p>For the questions they’ll ask. And all the things they’ll become.</p>
        </Reveal>
      </div>
    </section>
  );
}

function Admissions() {
  return (
    <section className="admissions" id="admissions">
      <div className="admissions__inner section-wrap">
        <Reveal className="admissions__spark" aria-hidden="true">✳</Reveal>
        <Reveal className="admissions__copy">
          <p className="eyebrow"><span className="eyebrow__dot" /> The next chapter starts here</p>
          <h2>Come see what<br />they can <em>become.</em></h2>
          <p>Let’s find out if Tulas feels like the right place for your family.</p>
          <a className="button button--cream" href="https://admission.tis.edu.in">
            Start a conversation <span aria-hidden="true">↗</span>
          </a>
        </Reveal>
        <Reveal className="admissions__visual" delay={120}>
          <img
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=85"
            alt="A teacher guiding students through a classroom activity"
            loading="lazy"
          />
          <span>YOUR STORY, YOUR WAY</span>
        </Reveal>
        <span className="admissions__decoration" aria-hidden="true">T</span>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__main section-wrap">
        <div className="site-footer__brand">
          <BrandMark />
          <p>Curiosity leads.<br />The possibilities follow.</p>
        </div>
        <div className="site-footer__links">
          <div>
            <span className="footer-label">Explore</span>
            <a href="#story">Our story</a>
            <a href="#learning">Learning</a>
            <a href="#life">Life at Tulas</a>
          </div>
          <div>
            <span className="footer-label">Say hello</span>
            <a href="https://admission.tis.edu.in">Contact admissions ↗</a>
            <a href="https://tis.edu.in/">tis.edu.in ↗</a>
          </div>
        </div>
      </div>
      <div className="site-footer__bottom section-wrap">
        <span>© {new Date().getFullYear()} Tulas International School</span>
        <span>Made for curious minds <span aria-hidden="true">✳</span></span>
      </div>
    </footer>
  );
}

export default function App() {
  const [theme, setTheme] = useState('light');
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <>
      <ScrollProgress progress={shouldReduceMotion ? scrollYProgress : smoothProgress} />
      <SiteHeader
        theme={theme}
        onToggleTheme={() => setTheme((current) => current === 'light' ? 'dark' : 'light')}
      />
      <main>
        <Hero />
        <Story />
        <Learning />
        <LifeAtTulas />
        <Admissions />
      </main>
      <SiteFooter />
    </>
  );
}
