import Image from "next/image";

const timeline = [
  {
    year: "1980",
    title: "Formation in Basildon",
    description:
      "Martin Gore, Andy Fletcher, Vince Clarke, and Dave Gahan formed Depeche Mode, shaping a new electronic identity in British pop.",
  },
  {
    year: "1981",
    title: "Debut Era",
    description:
      "The band released Speak & Spell and the breakout single 'Just Can't Get Enough', introducing their synth-pop pulse to global listeners.",
  },
  {
    year: "1983–1986",
    title: "Darker Evolution",
    description:
      "With albums like Construction Time Again and Black Celebration, Depeche Mode moved toward industrial textures, darker themes, and deeper songwriting.",
  },
  {
    year: "1990",
    title: "Global Peak",
    description:
      "Violator delivered classics such as 'Personal Jesus' and 'Enjoy the Silence', cementing the band's place in modern music history.",
  },
  {
    year: "1993–1998",
    title: "Turbulence and Reinvention",
    description:
      "Songs of Faith and Devotion broadened their sound; despite personal struggles, the group returned stronger with Ultra and a renewed creative drive.",
  },
  {
    year: "2000s",
    title: "Enduring Influence",
    description:
      "Exciter, Playing the Angel, and Sounds of the Universe proved their ability to evolve while preserving their emotional and sonic signature.",
  },
  {
    year: "2013–2017",
    title: "Modern Era",
    description:
      "Delta Machine and Spirit reflected mature, politically aware songwriting and sold-out world tours across multiple generations of fans.",
  },
  {
    year: "2023–present",
    title: "Memento Mori Chapter",
    description:
      "Following Andy Fletcher's passing, Dave Gahan and Martin Gore continued with Memento Mori, honoring legacy while writing the next chapter.",
  },
];

const highlights = [
  "More than 100 million records sold worldwide.",
  "Pioneers in blending synth-pop, industrial edge, and emotional lyricism.",
  "Iconic live act with landmark tours from the Rose Bowl to global arenas.",
  "Influence spanning electronic, alternative, rock, and contemporary pop artists.",
];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80",
    alt: "Moody concert stage lights in blue and magenta tones",
  },
  {
    src: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=1200&q=80",
    alt: "Crowd at a nighttime concert with raised hands",
  },
  {
    src: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80",
    alt: "Vintage synthesizer keyboard with dramatic shadows",
  },
  {
    src: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&w=1200&q=80",
    alt: "Darkwave inspired stage visual with neon haze",
  },
];

const videos = [
  {
    embedUrl: "https://www.youtube.com/embed/aGSKrC7dGcY",
    title: "Depeche Mode - Enjoy the Silence (Live)",
    description: "A fan-favorite live rendition with atmospheric stage visuals.",
  },
  {
    embedUrl: "https://www.youtube.com/embed/snILjFUkk_A",
    title: "Depeche Mode - Personal Jesus (Live)",
    description: "A powerful performance of one of the band’s defining tracks.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-fuchsia-500/30">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-fuchsia-500 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <header className="relative overflow-hidden border-b border-fuchsia-500/20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(217,70,239,0.25),_transparent_50%),radial-gradient(circle_at_80%_20%,_rgba(56,189,248,0.25),_transparent_45%)]" />
        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-7 px-6 py-18 md:px-10 md:py-24">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-cyan-300 md:text-sm">Unofficial fan page</p>
          <h1 className="max-w-3xl text-balance text-4xl font-bold leading-tight md:text-6xl md:leading-[1.05]">
            Depeche Mode
            <span className="mt-2 block bg-gradient-to-r from-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
              Echoes in Neon and Shadow
            </span>
          </h1>
          <p className="max-w-2xl text-pretty text-base leading-relaxed text-slate-300 md:text-xl md:leading-relaxed">
            A darkwave-synthwave tribute to one of the most influential electronic bands ever — from Basildon beginnings to their enduring global legacy.
          </p>
        </div>
      </header>

      <main id="main-content" className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 py-12 md:gap-18 md:px-10 md:py-14">
        <section
          aria-labelledby="intro-heading"
          className="rounded-2xl border border-slate-700/60 bg-slate-900/70 p-6 shadow-[0_20px_45px_-35px_rgba(56,189,248,0.55)] transition-colors motion-safe:duration-300 hover:border-fuchsia-400/30 md:p-8"
        >
          <h2 id="intro-heading" className="text-2xl font-semibold tracking-tight text-fuchsia-300 md:text-3xl">
            Band Intro
          </h2>
          <p className="mt-4 max-w-prose leading-8 text-slate-200">
            Depeche Mode emerged from the UK new-wave movement and redefined what electronic music could feel like: intimate, cinematic, and deeply human. Their catalogue balances machine-driven rhythm with emotional weight, shaping the sound of generations.
          </p>
        </section>

        <section aria-labelledby="timeline-heading" className="space-y-6">
          <h2 id="timeline-heading" className="text-2xl font-semibold tracking-tight text-cyan-300 md:text-3xl">
            Timeline: Formation to Present
          </h2>
          <ol className="space-y-4 border-l border-fuchsia-500/40 pl-6">
            {timeline.map((item, index) => (
              <li
                key={item.year}
                className="group relative rounded-lg border border-transparent bg-slate-900/60 p-4 transition-transform transition-colors motion-safe:duration-300 motion-safe:hover:-translate-y-0.5 hover:border-fuchsia-400/20"
                style={{ transitionDelay: `${index * 20}ms` }}
              >
                <span className="absolute -left-[1.95rem] top-6 h-3 w-3 rounded-full bg-fuchsia-400 shadow-[0_0_0_6px_rgba(15,23,42,1)]" aria-hidden />
                <p className="text-sm font-semibold uppercase tracking-wide text-fuchsia-300">{item.year}</p>
                <h3 className="mt-1 text-lg font-semibold text-slate-100 md:text-xl">{item.title}</h3>
                <p className="mt-2 text-slate-300">{item.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="highlights-heading" className="grid gap-5 md:grid-cols-2 md:items-start">
          <div>
            <h2 id="highlights-heading" className="text-2xl font-semibold tracking-tight text-fuchsia-300 md:text-3xl">
              Highlights
            </h2>
            <p className="mt-3 max-w-prose text-slate-300">Key reasons Depeche Mode remains essential listening across eras.</p>
          </div>
          <ul className="space-y-3">
            {highlights.map((point) => (
              <li
                key={point}
                className="rounded-lg border border-cyan-500/30 bg-slate-900/70 p-4 text-slate-200 transition-colors motion-safe:duration-300 hover:border-cyan-300/55"
              >
                {point}
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="gallery-heading" className="space-y-6">
          <h2 id="gallery-heading" className="text-2xl font-semibold tracking-tight text-cyan-300 md:text-3xl">
            Curated Image Gallery
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {gallery.map((image, index) => (
              <figure
                key={image.src}
                className="group overflow-hidden rounded-xl border border-slate-700/60 bg-slate-900/85 shadow-[0_20px_45px_-36px_rgba(217,70,239,0.55)] transition-all motion-safe:duration-300 hover:-translate-y-0.5 hover:border-fuchsia-300/45 focus-within:border-cyan-300/55"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={900}
                  height={600}
                  sizes="(min-width: 1024px) 48vw, (min-width: 640px) 50vw, 100vw"
                  priority={index === 0}
                  className="h-56 w-full object-cover transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-105"
                />
                <figcaption className="p-3 text-sm leading-relaxed text-slate-300">{image.alt}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section aria-labelledby="video-heading" className="space-y-6 rounded-2xl border border-fuchsia-500/30 bg-slate-900/70 p-6 md:p-8">
          <h2 id="video-heading" className="text-2xl font-semibold tracking-tight text-fuchsia-300 md:text-3xl">
            Live Video Spotlights
          </h2>
          <p className="max-w-prose text-slate-300">Selected performances that capture the band&apos;s atmosphere and live intensity.</p>
          <div className="grid gap-4 md:grid-cols-2">
            {videos.map((video) => (
              <figure
                key={video.embedUrl}
                className="group overflow-hidden rounded-xl border border-slate-700/60 bg-slate-900/85 shadow-[0_20px_45px_-36px_rgba(56,189,248,0.55)] transition-all motion-safe:duration-300 hover:-translate-y-0.5 hover:border-cyan-300/45 focus-within:border-cyan-300/55"
              >
                <iframe
                  className="aspect-video w-full"
                  src={video.embedUrl}
                  title={video.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
                <figcaption className="p-3 text-sm leading-relaxed text-slate-300">{video.description}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 px-6 py-8 text-center text-sm text-slate-400 md:px-10">
        This is an unofficial, fan-made Depeche Mode tribute page. All trademarks, media, and rights belong to their respective owners.
      </footer>
    </div>
  );
}
