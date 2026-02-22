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
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-fuchsia-500 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <header className="relative overflow-hidden border-b border-fuchsia-500/20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(217,70,239,0.25),_transparent_50%),radial-gradient(circle_at_80%_20%,_rgba(56,189,248,0.25),_transparent_45%)]" />
        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-20 md:px-10 md:py-28">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Unofficial fan page</p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            Depeche Mode
            <span className="mt-2 block bg-gradient-to-r from-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
              Echoes in Neon and Shadow
            </span>
          </h1>
          <p className="max-w-2xl text-lg text-slate-300 md:text-xl">
            A darkwave-synthwave tribute to one of the most influential electronic bands ever — from Basildon beginnings to their enduring global legacy.
          </p>
        </div>
      </header>

      <main id="main-content" className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-14 md:px-10">
        <section aria-labelledby="intro-heading" className="rounded-2xl border border-slate-700/60 bg-slate-900/70 p-6 md:p-8">
          <h2 id="intro-heading" className="text-3xl font-semibold text-fuchsia-300">
            Band Intro
          </h2>
          <p className="mt-4 leading-8 text-slate-200">
            Depeche Mode emerged from the UK new-wave movement and redefined what electronic music could feel like: intimate, cinematic, and deeply human. Their catalogue balances machine-driven rhythm with emotional weight, shaping the sound of generations.
          </p>
        </section>

        <section aria-labelledby="timeline-heading">
          <h2 id="timeline-heading" className="text-3xl font-semibold text-cyan-300">
            Timeline: Formation to Present
          </h2>
          <ol className="mt-6 space-y-4 border-l border-fuchsia-500/40 pl-6">
            {timeline.map((item) => (
              <li key={item.year} className="relative rounded-lg bg-slate-900/60 p-4">
                <span className="absolute -left-[1.95rem] top-6 h-3 w-3 rounded-full bg-fuchsia-400" aria-hidden />
                <p className="text-sm font-semibold uppercase tracking-wide text-fuchsia-300">{item.year}</p>
                <h3 className="mt-1 text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-slate-300">{item.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="highlights-heading" className="grid gap-5 md:grid-cols-2">
          <div>
            <h2 id="highlights-heading" className="text-3xl font-semibold text-fuchsia-300">
              Highlights
            </h2>
            <p className="mt-3 text-slate-300">Key reasons Depeche Mode remains essential listening across eras.</p>
          </div>
          <ul className="space-y-3">
            {highlights.map((point) => (
              <li key={point} className="rounded-lg border border-cyan-500/30 bg-slate-900/70 p-4 text-slate-200">
                {point}
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="gallery-heading">
          <h2 id="gallery-heading" className="text-3xl font-semibold text-cyan-300">
            Curated Image Gallery
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {gallery.map((image) => (
              <figure key={image.src} className="overflow-hidden rounded-xl border border-slate-700/60 bg-slate-900">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={900}
                  height={600}
                  className="h-56 w-full object-cover transition duration-500 hover:scale-105"
                />
                <figcaption className="p-3 text-sm text-slate-300">{image.alt}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section aria-labelledby="video-heading" className="rounded-2xl border border-fuchsia-500/30 bg-slate-900/70 p-6 md:p-8">
          <h2 id="video-heading" className="text-3xl font-semibold text-fuchsia-300">
            Live Video Spotlights
          </h2>
          <p className="mt-3 text-slate-300">Selected performances that capture the band&apos;s atmosphere and live intensity.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {videos.map((video) => (
              <figure key={video.embedUrl} className="overflow-hidden rounded-xl border border-slate-700/70 bg-slate-900">
                <iframe
                  className="aspect-video w-full"
                  src={video.embedUrl}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
                <figcaption className="p-3 text-sm text-slate-300">{video.description}</figcaption>
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
