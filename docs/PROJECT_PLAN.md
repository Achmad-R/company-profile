# Stratalyn Systems - Fictional Company Website

## Analisis Permintaan Klien dan Execution Plan untuk OpenCode

**Status:** Dokumen perencanaan untuk fictional portfolio concept - belum ada implementasi  
**Jenis proyek:** Website company profile dan talent recruitment  
**Tujuan penggunaan:** Proyek pembelajaran dan portofolio  
**Sumber kebutuhan:** Brief Upwork "Modern Company Introduction Website for AI & Software Development Company"  
**Bahasa dokumen:** Indonesia  
**Bahasa website yang direncanakan:** Inggris

**Revisi review:** Dependensi fase, baseline tes, disclosure awal, kontrak interaksi, dan quality gates telah diselaraskan. Persetujuan revisi dokumen ini belum merupakan izin menjalankan Phase 0.

---

## 1. Ringkasan Proyek

Stratalyn Systems membutuhkan website pengenalan perusahaan teknologi yang berfokus pada software development, artificial intelligence, dan advanced engineering. Website dipakai terutama untuk memperkenalkan kualitas perusahaan serta menarik developer, engineer, dan talenta teknis berpengalaman.

Website harus terlihat premium, modern, profesional, inovatif, dan berorientasi teknologi. Klien menolak hasil yang tampak seperti template generik. Karena itu, nilai utama proyek tidak hanya terletak pada kelengkapan section atau kemampuan frontend, tetapi juga pada konsep desain, kualitas penyajian informasi, konsistensi visual, detail interaksi, dan kemampuan website membangun kepercayaan.

Untuk proyek pembelajaran dan portofolio, implementasi direncanakan sebagai website satu halaman yang lengkap, responsive, cepat, SEO-friendly, accessible, dan mudah dikembangkan. Seluruh informasi perusahaan yang tidak tersedia pada brief telah diganti dengan satu fictional company concept yang konsisten. Website demo wajib menampilkan disclosure bahwa Stratalyn Systems adalah perusahaan fiktif untuk demonstrasi portofolio.

### Sasaran utama

1. Membuat Stratalyn Systems terlihat sebagai perusahaan engineering yang matang dan kredibel.
2. Membantu kandidat teknis memahami fokus, cara kerja, kemampuan, dan peluang bergabung.
3. Memberikan jalur tindakan yang jelas menuju detail concept role dan demonstrasi kontak, tanpa pengajuan minat atau pengiriman pesan nyata.
4. Menunjukkan kualitas UI/UX dan frontend engineering sebagai materi portofolio developer.

### Hasil akhir yang diharapkan

- Website company profile satu halaman dengan navigasi antarseksi.
- Desain visual khusus yang konsisten dan tidak menyerupai template SaaS umum.
- Pengalaman yang baik pada mobile, tablet, laptop, dan desktop.
- Animasi halus yang mendukung pemahaman konten.
- Source code React/Next.js + TypeScript yang bersih dan mudah dirawat.
- Metadata SEO, semantic HTML, accessibility dasar, dan performa yang baik.
- README dan dokumentasi keputusan desain untuk kebutuhan portofolio.

---

## 2. Konsep Dummy Perusahaan dan Content Pack

Bagian ini menjadi sumber kebenaran konten untuk coding agent. Seluruh nama, profil, proyek, peran, dan alamat di dalamnya bersifat fiktif. Tujuannya adalah menghasilkan company profile yang utuh tanpa menyamarkan data rekaan sebagai perusahaan nyata.

Jika ringkasan, contoh model, atau prompt fase berbeda dari content pack, gunakan konten Section 2. Kontrak perilaku berada pada Section 6-10; fase pada Section 17 menentukan kapan kontrak tersebut dibangun dan diverifikasi, bukan mengubahnya. Perubahan kebutuhan memerlukan persetujuan pemilik proyek dan pencatatan keputusan.

### 2.1 Status konsep dan disclosure

| Field | Nilai final untuk portfolio build |
|---|---|
| Status | Fictional company / portfolio concept |
| Nama brand | Stratalyn Systems |
| Nama singkat | Stratalyn |
| Website concept domain | `https://stratalyn.example` |
| General email display | `hello@stratalyn.example` |
| Careers email display | `careers@stratalyn.example` |
| Social accounts | Tidak ditampilkan |
| Indexing | `noindex, nofollow, noarchive` selama masih menjadi fictional concept |
| Disclosure utama | `Portfolio concept · Stratalyn Systems is a fictional company.` |
| Disclosure footer | `A fictional company website created as a portfolio demonstration. No services, roles, or contact channels shown here are real.` |

Domain `.example` memang digunakan untuk dokumentasi dan tidak boleh diperlakukan sebagai kanal komunikasi aktif. Email dummy ditampilkan sebagai bagian dari desain, diberi keterangan `Demonstration address — messages are not delivered`, dan tidak dirender sebagai link `mailto:`.

Disclosure utama harus terlihat sebagai slim concept bar di atas header atau label di dalam header. Disclosure tidak boleh disembunyikan hanya di README.

Concept bar dan footer disclosure minimal sudah dirender pada fondasi halaman Phase 1, sebelum konten perusahaan dan checkpoint hero. Footer lengkap diselesaikan pada Phase 5. Keduanya tersedia pada semua ukuran viewport; ini tidak berarti footer harus selalu berada di layar atau ikut sticky.

### 2.2 Identitas perusahaan fiktif

| Elemen | Isi dummy final |
|---|---|
| Company type | Remote-first applied AI and software engineering studio |
| Founded | 2022 - fictional timeline |
| Operating model | Small senior-led multidisciplinary product squads |
| Working-hours overlap | UTC+1 to UTC+8 |
| Primary market | Organizations with complex, operations-intensive workflows |
| Focus sectors | Industrial operations, cybersecurity operations, logistics, and enterprise platforms |
| Core expertise | Applied AI, product engineering, data integration, cloud platforms, reliability, and security |
| Commercial model | Discovery sprint, focused build engagement, or embedded product squad |
| Primary website audience | Experienced software, AI, platform, and product engineers |
| Secondary audience | Technical decision-makers seeking an engineering partner |

Stratalyn Systems tidak memiliki alamat kantor, nama pendiri, headcount, logo klien, penghargaan, sertifikasi, atau data finansial dalam konsep ini. Elemen tersebut sengaja tidak ditampilkan karena tidak diperlukan untuk memenuhi brief.

### 2.3 Brand foundation

**Tagline**

> Engineering intelligence into dependable systems.

**Positioning statement**

> Stratalyn Systems is a fictional remote-first engineering studio that designs and builds applied AI products, resilient software platforms, and connected operational systems for complex work.

**Mission**

> Turn complex operational problems into software people can understand, trust, and improve.

**Vision**

> A future where intelligent systems strengthen human judgment instead of hiding it.

**Brand promise**

> Clear decisions, dependable engineering, and accountable AI from discovery through operation.

**Elevator pitch**

> We work with teams whose operations have outgrown fragmented tools and manual decision paths. Our product, AI, platform, and reliability engineers shape the problem together, build the smallest dependable system, evaluate it against real workflows, and leave behind software that can be operated and extended.

### 2.4 Target problems dan delivery model

Stratalyn dirancang sebagai engineering partner untuk empat kelompok masalah:

1. Tim operasi harus menggabungkan terlalu banyak alert, spreadsheet, runbook, dan sistem lama sebelum dapat mengambil keputusan.
2. Produk AI menghasilkan rekomendasi tetapi tidak menyediakan evidence, evaluation, atau human control yang memadai.
3. Platform bisnis berkembang lebih cepat daripada integration, observability, dan reliability practice-nya.
4. Tim internal membutuhkan engineering capacity dengan ownership dari discovery hingga operation.

Delivery model yang digunakan pada narasi website:

| Model | Fungsi | Deskripsi website |
|---|---|---|
| Discovery Sprint | Memastikan masalah dan success criteria tepat | `Frame the workflow, risks, data, and smallest valuable system before committing to a build.` |
| Focused Build | Mengirim satu product capability end-to-end | `A compact cross-functional team designs, builds, evaluates, and prepares one defined capability for operation.` |
| Embedded Squad | Menambah capacity dengan ownership | `Senior product and engineering specialists work inside the client team with shared standards and visible decisions.` |

### 2.5 Copy pack halaman

Semua copy berikut berbahasa Inggris karena website ditujukan sebagai international company profile.

#### Global concept bar

`Portfolio concept · Stratalyn Systems is a fictional company.`

#### Header

- Wordmark: `STRATALYN / SYSTEMS`
- Navigation: `About`, `Capabilities`, `Work`, `Careers`, `Contact`
- CTA: `Explore opportunities`

#### Hero

- Eyebrow: `Applied AI · Software platforms · Advanced engineering`
- H1: `We engineer intelligent systems for work that cannot afford guesswork.`
- Supporting copy: `Stratalyn brings product thinking, applied AI, and resilient software engineering together to turn complex operational workflows into dependable systems.`
- Primary CTA: `Explore opportunities`
- Secondary CTA: `View selected work`
- Trust cue: `Human judgment stays visible. Engineering decisions stay accountable.`

#### About

- Section label: `01 / About`
- Heading: `Complex systems become useful when their decisions become clear.`
- Paragraph 1: `Stratalyn Systems is a remote-first product and engineering studio built around a simple idea: intelligent software should make critical work easier to understand, operate, and improve.`
- Paragraph 2: `Our fictional teams combine product discovery, applied AI, platform engineering, and reliability from the start. That shared ownership helps us build systems that remain coherent after the first release.`

**Operating principles**

| Principle | Copy |
|---|---|
| Clarity | `We expose assumptions, trade-offs, and system behavior so teams can make informed decisions.` |
| Craft | `We care about the details users feel and the engineering qualities operators depend on.` |
| Responsibility | `We design human control, security, evaluation, and observability into the system.` |

#### Capabilities

- Section label: `02 / Capabilities`
- Heading: `One engineering system, from product question to production signal.`
- Intro: `We assemble the disciplines needed to take a complex workflow from ambiguity to a dependable product capability.`

| Capability | Description | Example outcomes | Technology labels |
|---|---|---|---|
| Product & Platform Engineering | `Design and build web platforms, internal tools, and service foundations around real operational workflows.` | `Product architecture`, `Design systems`, `Service boundaries` | `React`, `Next.js`, `TypeScript`, `Python` |
| Applied AI Systems | `Create evidence-aware AI workflows with explicit evaluation, human review, and measurable operating boundaries.` | `Assisted triage`, `Knowledge workflows`, `Evaluation harnesses` | `LLM orchestration`, `RAG`, `Evals`, `Human-in-the-loop` |
| Data & Integration | `Connect fragmented operational data through clear contracts, traceable transformations, and reliable event flows.` | `Unified context`, `API integration`, `Event pipelines` | `PostgreSQL`, `APIs`, `Event streaming`, `Data contracts` |
| Cloud & Reliability | `Prepare products to run predictably with observability, recovery paths, and disciplined delivery automation.` | `Deployment pipelines`, `Service telemetry`, `Resilience reviews` | `Containers`, `Cloud`, `OpenTelemetry`, `CI/CD` |
| Security by Design | `Translate risk into product and architecture decisions before controls become expensive to retrofit.` | `Threat-informed design`, `Access boundaries`, `Auditability` | `Secure SDLC`, `Threat modeling`, `Policy as code` |

#### AI and software process

- Section label: `03 / Method`
- Heading: `Build intelligence as an operating capability.`
- Intro: `A useful AI feature is more than a model call. We connect product intent, data, evaluation, software behavior, and operational feedback in one delivery loop.`

| Step | Title | Copy |
|---:|---|---|
| 01 | Discover | `Map the workflow, decision points, evidence, risks, and people affected.` |
| 02 | Design | `Define the product behavior, architecture, human controls, and success measures.` |
| 03 | Build | `Deliver the smallest coherent capability with observable system boundaries.` |
| 04 | Evaluate | `Test software quality and AI behavior against representative scenarios and failure modes.` |
| 05 | Operate | `Monitor outcomes, learn from real use, and improve the system without losing traceability.` |

#### Selected work

- Section label: `04 / Selected work`
- Heading: `Concept systems shaped around consequential workflows.`
- Intro: `These fictional case studies demonstrate the type of product and engineering work represented by this portfolio concept.`

**Project 1 - SignalOps**

| Field | Content |
|---|---|
| Status | `Concept project` |
| Domain | Cybersecurity and operational incident response |
| Summary | `An evidence-linked incident workspace that helps distributed teams turn fragmented signals into a reviewable response path.` |
| Challenge | `Analysts were represented as moving between alerts, asset context, runbooks, and chat threads while decision ownership remained unclear.` |
| Contribution | `Workflow mapping, event normalization, assisted triage design, evidence citations, human approval gates, and an operator-focused interface.` |
| Concept outcome | `A single case timeline where suggestions remain connected to evidence and every consequential action requires an accountable human decision.` |
| Technology labels | `Next.js`, `TypeScript`, `Python`, `PostgreSQL`, `Event streaming` |
| Visual brief | `Dark incident timeline with linked evidence nodes, confidence states, and explicit approval checkpoints.` |

**Project 2 - RelayGrid**

| Field | Content |
|---|---|
| Status | `Concept project` |
| Domain | Logistics and enterprise integration |
| Summary | `An operational data fabric that gives teams one traceable view across legacy services, partner APIs, and exception workflows.` |
| Challenge | `Order and shipment context was represented as fragmented across systems with inconsistent identifiers and invisible transformation rules.` |
| Contribution | `Domain mapping, integration contracts, event lineage, exception handling, operational dashboards, and reliability boundaries.` |
| Concept outcome | `Teams can follow an operational event from source to decision, identify where it failed, and recover through an explicit workflow.` |
| Technology labels | `TypeScript`, `APIs`, `PostgreSQL`, `Event streaming`, `OpenTelemetry` |
| Visual brief | `Layered route map connecting source systems to transformations, exception queues, and a final operational state.` |

**Project 3 - VantageSim**

| Field | Content |
|---|---|
| Status | `Concept project` |
| Domain | Advanced engineering and simulation review |
| Summary | `A collaborative review environment for comparing simulation runs, assumptions, and engineering decisions.` |
| Challenge | `Simulation outputs were represented as technically rich but difficult to compare, annotate, and connect to the decision they informed.` |
| Contribution | `Information architecture, run comparison, parameter provenance, review workflow, decision log, and accessible data presentation.` |
| Concept outcome | `Engineers can compare runs, understand parameter changes, capture review context, and preserve why a decision was made.` |
| Technology labels | `React`, `TypeScript`, `Python`, `Data visualization`, `Object storage` |
| Visual brief | `Split simulation comparison with parameter deltas, annotated plots, and a decision record connected to each run.` |

Tidak boleh menambahkan angka penghematan, peningkatan performa, nama pelanggan, atau testimonial pada ketiga project.

#### Why Stratalyn

- Section label: `05 / Why Stratalyn`
- Heading: `Serious problems deserve room for judgment.`

| Pillar | Copy |
|---|---|
| Meaningful complexity | `Work on systems where clearer information and better tools can change how people respond, coordinate, and decide.` |
| End-to-end ownership | `Stay close to the problem from discovery and architecture through evaluation and operation.` |
| Visible engineering | `Document decisions, review trade-offs openly, and make quality part of everyday delivery.` |
| Sustainable pace | `Prefer focused teams, clear boundaries, and maintainable systems over permanent urgency.` |

#### Talent recruitment

- Section label: `06 / Build with us`
- Heading: `Bring depth. Keep learning across boundaries.`
- Body: `Stratalyn is designed for experienced builders who can move between a user problem and the engineering details that shape it. You will work with product, AI, platform, design, and security peers while retaining ownership of decisions in your discipline.`
- Candidate statement: `We value clear reasoning, thoughtful disagreement, practical craft, and the ability to leave a system easier to understand than you found it.`
- CTA: `View concept roles`

#### Example job opportunities

Semua role diberi badge `Concept role` dan tidak dipresentasikan sebagai lowongan aktif.

| Role | Discipline | Location | Type | Summary | Skills |
|---|---|---|---|---|---|
| Senior Product Engineer | Product Engineering | `Remote · UTC+1 to UTC+8 overlap` | `Full-time concept role` | `Shape operational products from workflow discovery through reliable frontend and service implementation.` | `React`, `TypeScript`, `APIs`, `Product thinking` |
| Applied AI Engineer | AI Systems | `Remote · UTC+1 to UTC+8 overlap` | `Full-time concept role` | `Build evidence-aware AI workflows, evaluation harnesses, and human review paths around real product decisions.` | `Python`, `LLM systems`, `RAG`, `Evals` |
| Platform Reliability Engineer | Platform Engineering | `Remote · UTC+1 to UTC+8 overlap` | `Full-time concept role` | `Design delivery, observability, resilience, and security foundations that product teams can operate confidently.` | `Cloud`, `Containers`, `OpenTelemetry`, `CI/CD` |

Tombol pada setiap role menggunakan label `View concept role`. Tombol membuka detail role lokal atau dialog, tanpa tombol apply. Penutup detail berbunyi: `This is a fictional role included to demonstrate the recruitment experience.`

Detail menyajikan kembali title, discipline, location, type, summary, dan skills dari tabel di atas, lalu penutup disclosure. Tidak diperlukan copy job description baru, persyaratan, kompensasi, atau benefit tambahan. Pilihan pola detail dan kontrak interaksinya mengikuti Section 7.9.

#### Contact

- Section label: `07 / Contact`
- Heading: `Bring us the problem behind the brief.`
- Body: `Whether you are shaping an operational product or exploring the kind of team you want to build with, start with the context that matters.`
- Project label: `Project conversations`
- Project email display: `hello@stratalyn.example`
- Careers label: `Career conversations`
- Careers email display: `careers@stratalyn.example`
- Required note: `Demonstration addresses — messages are not delivered.`
- CTA behavior: Sediakan `Copy demo address` untuk masing-masing alamat sesuai FR-08 dan kontrak Section 7.10; jangan memakai `mailto:` atau mensimulasikan keberhasilan pengiriman pesan.

#### Footer

- Wordmark: `STRATALYN / SYSTEMS`
- Positioning: `Applied AI and software engineering for complex operations.`
- Navigation: `About`, `Capabilities`, `Work`, `Careers`, `Contact`
- Disclosure: `A fictional company website created as a portfolio demonstration. No services, roles, or contact channels shown here are real.`
- Copyright: `© 2026 Stratalyn Systems concept.`

### 2.6 Metadata dummy final

| Field | Content |
|---|---|
| Page title | `Stratalyn Systems — Applied AI & Software Engineering` |
| Meta description | `A fictional engineering studio concept focused on dependable AI systems, software platforms, and complex operational workflows.` |
| Open Graph title | `Stratalyn Systems — Engineering intelligence into dependable systems` |
| Open Graph description | `Explore a fictional portfolio concept for an applied AI and software engineering company.` |
| Canonical concept URL | `https://stratalyn.example` |
| Robots | `noindex, nofollow, noarchive` |
| Organization JSON-LD | Omit selama status masih fictional concept |
| Sitemap | Dibuat untuk demonstrasi teknis menggunakan canonical concept URL; tidak didaftarkan ke search engine atau dipromosikan melalui `robots.txt` |

### 2.7 Asset concept

- Logo menggunakan custom typographic wordmark `STRATALYN / SYSTEMS` dan signal glyph berbasis SVG.
- Hero memakai visual SVG/CSS `Engineering Signal` yang dibuat khusus untuk proyek.
- Setiap concept project memakai visual diagram abstrak yang dibuat lokal berdasarkan visual brief.
- Tidak memakai stock photo, logo perusahaan lain, foto orang fiktif, atau logo klien.
- Open Graph image menampilkan wordmark, tagline, signal grid, dan label `Fictional portfolio concept`.

### 2.8 Aturan integritas konten

- Coding agent harus memakai content pack ini dan tidak menambah fakta baru.
- Semua fakta dummy tetap berada pada `src/content/site-content.ts`, bukan tersebar di JSX.
- Semua project dan role mempertahankan badge `Concept project` atau `Concept role`.
- Concept bar dan footer disclosure wajib tampil pada semua ukuran viewport sejak fondasi Phase 1; tidak dipotong atau disembunyikan pada mobile.
- Tidak ada fake testimonial, fake metric, fake client logo, fake social link, fake office address, atau fake application flow.
- Nilai `isConcept: true` menjadi konfigurasi utama. Bila kelak diubah menjadi company profile nyata, konten, indexing, structured data, contact channel, dan disclosure harus direview kembali.

---

## 3. Ekstraksi Kebutuhan Eksplisit Klien

### 3.1 Konteks dan tujuan

| ID | Permintaan eksplisit | Makna implementasi |
|---|---|---|
| BR-01 | Website pengenalan perusahaan Stratalyn Systems | Website harus menjawab siapa Stratalyn Systems, apa yang dikerjakan, dan mengapa perusahaan layak dipercaya |
| BR-02 | Fokus pada software development, AI, dan advanced engineering | Pesan utama, visual, dan bagian capabilities harus memperlihatkan ketiga bidang tersebut |
| BR-03 | Menarik developer, engineer, dan technical talent berpengalaman | Narasi harus berbicara kepada kandidat senior dan memberikan alasan konkret untuk bergabung |
| BR-04 | Kontribusi kreatif dan teknis | Developer diharapkan memperbaiki struktur, interaction, animation, dan user flow bila diperlukan |
| BR-05 | Tidak menggunakan desain template generik | Harus ada konsep visual, komposisi, dan detail interaksi yang khas |

### 3.2 Section yang wajib tersedia

| ID | Section | Tujuan |
|---|---|---|
| SEC-01 | Modern company landing page | Menyatukan seluruh narasi dalam pengalaman yang modern |
| SEC-02 | Strong hero section | Menjelaskan positioning dan tindakan utama dalam layar pertama |
| SEC-03 | Company introduction / About | Menjelaskan identitas, pendekatan, dan nilai perusahaan |
| SEC-04 | Technology and engineering capabilities | Menunjukkan kemampuan teknis secara terstruktur |
| SEC-05 | AI / software development focus | Memperjelas fokus solusi dan kompetensi inti |
| SEC-06 | Projects / work | Menyediakan bukti atau gambaran kualitas pekerjaan |
| SEC-07 | Why work with Stratalyn Systems | Menjelaskan pembeda perusahaan |
| SEC-08 | Developer / talent recruitment | Menjelaskan pengalaman bergabung dan kandidat yang dicari |
| SEC-09 | Job opportunities / Join Us | Menampilkan lowongan atau jalur untuk mengirim minat |
| SEC-10 | Contact | Memberikan cara menghubungi perusahaan |
| SEC-11 | Clear CTA buttons | Menyediakan langkah lanjutan yang mudah dipahami |

Tabel ini mencatat intent brief asli. Dalam portfolio build, SEC-09 dipenuhi oleh eksplorasi concept role tanpa apply flow, dan SEC-10 oleh demo contact serta penyalinan alamat sesuai Section 2, bukan kanal komunikasi aktif.

### 3.3 Kualitas desain dan pengalaman

| ID | Permintaan eksplisit | Kriteria operasional |
|---|---|---|
| UX-01 | Premium technology-company aesthetic | Typography, spacing, color, imagery, dan motion terasa konsisten dan matang |
| UX-02 | Modern dan professional | Tidak menggunakan ornamen berlebihan atau pola visual yang cepat terlihat usang |
| UX-03 | Innovative dan visually impressive | Ada satu atau dua elemen khas yang relevan dengan engineering |
| UX-04 | Minimal | Hierarki jelas; setiap elemen memiliki fungsi |
| UX-05 | AI/technology oriented | Visual menyiratkan sistem, intelligence, dan engineering tanpa ilustrasi klise |
| UX-06 | Trustworthy | Konten spesifik, mudah dibaca, transparan, dan tidak membuat klaim palsu |
| UX-07 | Suitable for experienced engineers | Pesan tidak terlalu pemasaran; memperlihatkan tantangan, disiplin engineering, dan ownership |
| UX-08 | Smooth animations and transitions | Motion halus, tidak mengganggu, dan menghormati reduced-motion |
| UX-09 | Professional typography and spacing | Skala typography dan spacing mengikuti sistem yang konsisten |

### 3.4 Kebutuhan teknis

| ID | Permintaan eksplisit | Keputusan implementasi |
|---|---|---|
| TECH-01 | React | Menggunakan React melalui Next.js |
| TECH-02 | Next.js atau Vite | Memilih Next.js karena kebutuhan SEO dan static generation |
| TECH-03 | TypeScript | Strict TypeScript diaktifkan |
| TECH-04 | Modern CSS / Tailwind CSS | Menggunakan Tailwind CSS dengan design tokens berbasis CSS variables |
| TECH-05 | Responsive design | Mobile-first dan diuji pada beberapa viewport |
| TECH-06 | Component-based architecture | Section dan primitive UI dipisahkan secara wajar |
| TECH-07 | Clean and maintainable code | Data terpisah dari presentasi, tipe jelas, tanpa duplikasi tidak perlu |
| TECH-08 | Good performance | Static rendering, asset optimization, dan motion yang ringan |
| TECH-09 | SEO-friendly structure | Semantic HTML, metadata, heading hierarchy, serta kebijakan indexing dan structured data khusus konsep pada Section 10.3 |
| TECH-10 | API integration if necessary | Arsitektur memungkinkan integrasi form/ATS, tetapi tidak diwajibkan pada core portfolio build |

---

## 4. Analisis Masalah Produk

### 4.1 Masalah yang harus diselesaikan

Website perusahaan teknologi sering menggunakan formula yang sama: headline besar, gradient abstrak, logo cloud, kumpulan kartu layanan, dan CTA "Get Started". Pola tersebut mudah dibuat tetapi tidak cukup membuktikan kualitas engineering atau menarik kandidat berpengalaman.

Stratalyn Systems membutuhkan narasi yang menghubungkan empat pertanyaan pengunjung:

1. **Apa yang dibangun Stratalyn Systems?**
2. **Seberapa serius kualitas engineering-nya?**
3. **Masalah seperti apa yang akan saya kerjakan?**
4. **Bagaimana saya dapat bergabung atau menghubungi perusahaan?**

Website harus membawa pengunjung melalui urutan tersebut dengan cepat. Setiap section harus menjawab satu pertanyaan dan mendorong ke bagian berikutnya.

### 4.2 Audiens prioritas

#### Persona utama: Experienced Software Engineer

- Mencari tantangan teknis yang nyata.
- Menilai kematangan perusahaan dari cara perusahaan menjelaskan proses dan keputusan engineering.
- Menghindari jargon AI yang tidak memiliki konteks.
- Membutuhkan informasi mengenai jenis pekerjaan, ownership, cara kolaborasi, dan jalur melamar.
- Umumnya membuka website dari laptop, tetapi dapat menemukan lowongan pertama kali melalui mobile.

#### Persona kedua: AI / ML Engineer

- Ingin mengetahui apakah Stratalyn Systems hanya memakai label AI atau benar-benar membangun sistem AI.
- Memperhatikan kualitas data, deployment, reliability, evaluation, dan responsible AI.
- Membutuhkan gambaran ruang masalah tanpa pengungkapan detail rahasia.

#### Persona pendukung: Prospective Client atau Partner

- Ingin memahami kemampuan Stratalyn Systems dan kualitas delivery.
- Membutuhkan bukti kerja, fokus teknologi, dan saluran kontak.
- Bukan audiens utama, tetapi harus tetap terlayani oleh About, Capabilities, Work, dan Contact.

### 4.3 User journey utama

| Tahap | Pertanyaan pengguna | Jawaban website | Tindakan berikutnya |
|---|---|---|---|
| Discover | Siapa Stratalyn Systems? | Hero dan positioning | Explore capabilities |
| Evaluate | Apakah perusahaan ini berkualitas? | Engineering principles, capabilities, selected work | Pelajari cara kerja |
| Fit | Apakah tempat ini sesuai untuk saya? | Why Stratalyn Systems dan recruitment narrative | Lihat peluang |
| Act | Apa yang dapat saya lakukan dalam demo? | Concept roles dan demo contact | Buka detail role / salin alamat demo, tanpa apply atau pengiriman pesan |

### 4.4 Definisi keberhasilan versi portofolio

Versi dinilai berhasil jika:

- Pengunjung dapat menjelaskan positioning Stratalyn Systems setelah melihat hero selama beberapa detik.
- Jalur dari hero menuju capabilities dan careers jelas.
- Semua section eksplisit klien tersedia.
- Tidak ada klaim perusahaan yang tidak dapat dibuktikan.
- Tampilan tetap kuat pada 375 px, 768 px, 1024 px, dan 1440 px.
- Navigasi keyboard dan reduced-motion dapat digunakan.
- Build production berhasil tanpa error TypeScript atau lint.
- Target Lighthouse pada halaman utama: Performance >= 90, Accessibility >= 95, dan Best Practices >= 95. Catat skor SEO asli; audit indexability yang gagal akibat `noindex` adalah pengecualian disengaja, sedangkan seluruh audit SEO otomatis lain yang berlaku harus lulus. Protokol dan aturan pelaporan mengikuti Section 14.4.
- Target pengujian laboratorium: LCP <= 2.5 s, CLS <= 0.1, dan respons interaksi terukur <= 200 ms pada skenario yang dicatat. Lighthouse navigation tidak mengukur INP; pengukuran interaksi dilakukan terpisah. Kelulusan Core Web Vitals lapangan memerlukan data pengguna nyata pada persentil ke-75, sehingga tidak diklaim oleh core portfolio build tanpa data tersebut.

---

## 5. Keputusan Ruang Lingkup untuk Portfolio Build

### 5.1 In scope

- Satu halaman utama dengan anchor navigation.
- Header sticky dengan mobile navigation.
- Hero dengan positioning, dua CTA, dan visual engineering interaktif yang ringan.
- About / company introduction.
- Capabilities yang mencakup software engineering, AI systems, dan advanced engineering.
- AI/software focus section yang menjelaskan pendekatan end-to-end.
- Selected work dengan data yang dapat diganti.
- Why Stratalyn Systems.
- Talent recruitment narrative.
- Job opportunities / Join Us.
- Contact section.
- Footer.
- Responsive behavior.
- Motion dan micro-interactions.
- Metadata dummy final, Open Graph image konsep, canonical `.example`, sitemap demonstrasi, serta robots `noindex, nofollow, noarchive`.
- Accessibility, performance optimization, testing, README, dan dokumentasi portofolio.

### 5.2 Out of scope untuk core build

- Dashboard admin atau CMS.
- Autentikasi pengguna.
- Applicant Tracking System penuh.
- Penyimpanan CV atau data pribadi kandidat.
- Database.
- Blog dan halaman artikel.
- Multi-language.
- Pembuatan logo final.
- Penggantian fictional content pack menjadi profil perusahaan nyata.
- Analytics produksi dan consent management.
- Sistem email produksi.
- Maintenance setelah deployment.

### 5.3 Optional extension setelah core selesai

- Detail page untuk setiap project.
- Filter lowongan.
- Form kontak melalui API route dan penyedia email.
- Integrasi ATS.
- Headless CMS.
- Privacy policy dan cookie consent sesuai konfigurasi analytics.
- Animasi WebGL. Hanya dipertimbangkan jika nilai visualnya sebanding dengan biaya performa dan aksesibilitas.

---

## 6. Information Architecture

Urutan halaman yang direkomendasikan:

1. **Header / Navigation**
2. **Hero**
3. **Company Introduction**
4. **Engineering Capabilities**
5. **AI & Software Development Focus**
6. **Selected Work**
7. **Why Stratalyn Systems**
8. **Build With Us / Talent Recruitment**
9. **Open Opportunities / Join Us**
10. **Contact**
11. **Footer**

Urutan ini membuat narasi bergerak dari positioning menuju bukti, kemudian menuju alasan bergabung dan tindakan.

### Peta navigasi dan anchor

| Link utama | Target final | Pemilik anchor | Fase tersedia |
|---|---|---|---|
| About | `#about` | Company Introduction | Phase 3 |
| Capabilities | `#capabilities` | Engineering Capabilities | Phase 3 |
| Work | `#work` | Selected Work | Phase 4 |
| Careers | `#careers` | Daftar concept role / Open Opportunities | Phase 5 |
| Contact | `#contact` | Contact | Phase 5 |

Header dan footer memakai lima tujuan ini. Process, Why Stratalyn, dan Talent tetap merupakan section tersendiri yang diakses melalui alur scroll; tidak semua section membutuhkan link header. Bila active navigation diterapkan, Process mengikuti kelompok Capabilities, sedangkan Why Stratalyn dan Talent mengikuti kelompok Careers. Indikator hanya aktif pada kelompok yang sudah tersedia.

CTA Talent menuju daftar role setelahnya, bukan kembali ke Talent. Gunakan satu ID unik `careers`; tidak ada alias `open-roles`. Peta ini menjadi sumber target navigasi pada typed content. Section 14.1 mengatur verifikasi bertahap sebelum semua target tersedia.

### CTA hierarchy

| Prioritas | CTA | Target | Penggunaan |
|---|---|---|---|
| Primer | Explore opportunities | `#careers` | Header dan hero |
| Sekunder | View selected work | `#work` | Hero |
| Kontekstual | View concept roles | `#careers` | Talent Recruitment |
| Navigasi | Contact | `#contact` | Header dan footer |

Gunakan teks CTA berbasis tindakan. Hindari beberapa tombol berbeda yang menuju target yang sama tanpa alasan.

---

## 7. Spesifikasi Setiap Section

### 7.1 Header

**Tujuan:** Memberi orientasi, akses cepat, dan CTA utama tanpa mengambil terlalu banyak ruang.

**Konten:**

- Custom typographic wordmark `STRATALYN / SYSTEMS` dan signal glyph SVG.
- Lima navigation links.
- CTA `Explore opportunities`.
- Tombol menu pada mobile.

**Perilaku:**

- Transparan di awal, lalu memakai surface blur ringan saat halaman digulir.
- Active section indicator jika dapat diterapkan tanpa kompleksitas berlebihan.
- Menu mobile memakai dialog/drawer modal dengan nama aksesibel, tombol pembuka yang menyatakan expanded state, fokus awal pada tombol tutup, focus containment, dan latar yang tidak dapat diinteraksikan saat terbuka.
- Menu mobile dapat ditutup dengan tombol, pemilihan link, dan tombol Escape.
- Menutup melalui tombol atau Escape mengembalikan fokus ke pembuka. Memilih link menutup menu dan memindahkan fokus ke heading section tujuan yang tersedia, bukan mengembalikannya ke pembuka.
- Jika breakpoint berubah ke desktop saat menu terbuka, tutup modal dan lepaskan scroll lock/inert; pastikan fokus berada pada kontrol terlihat, bukan tombol mobile yang tersembunyi.

**Acceptance criteria:**

- Semua anchor menuju section yang benar.
- Heading tujuan dan fokus keyboard tidak tertutup gabungan elemen sticky. Offset anchor memperhitungkan tinggi aktual header serta concept bar jika bar ikut sticky, termasuk saat teks membungkus atau zoom berubah.
- Mobile menu dapat digunakan dengan keyboard dan screen reader.
- Tidak ada horizontal overflow.

### 7.2 Hero

**Tujuan:** Menjelaskan Stratalyn Systems dan value proposition dalam layar pertama.

**Struktur copy:** Gunakan seluruh Hero copy pada Section 2.5 tanpa membuat variasi baru. Primary CTA menuju `#careers`; secondary CTA menuju `#work`.

**Visual khas:**

Gunakan konsep **Engineering Signal**: bidang modular yang memperlihatkan node, connection line, system pulse, dan potongan label teknis. Visual harus terasa seperti representasi sistem yang sedang bekerja, bukan gambar otak AI, robot, globe, atau stock photo.

**Perilaku:**

- Entrance animation bertahap menggunakan opacity dan transform.
- Visual bereaksi ringan terhadap pointer hanya pada perangkat yang mendukung hover.
- Static fallback tersedia.
- Tidak ada autoplay video besar.

**Acceptance criteria:**

- H1 menjelaskan perusahaan tanpa bergantung pada visual.
- CTA terlihat tanpa perlu scroll pada viewport desktop umum.
- Visual tidak mengurangi keterbacaan atau performa.
- Hero tetap proporsional pada mobile kecil.

### 7.3 Company Introduction / About

**Tujuan:** Menjelaskan cara Stratalyn Systems memandang engineering.

**Konten final:** Gunakan About copy dan tiga prinsip `Clarity`, `Craft`, dan `Responsibility` pada Section 2.5.

**Acceptance criteria:**

- Copy menjawab siapa Stratalyn Systems dan pendekatannya.
- Prinsip disajikan sebagai bagian narasi, bukan kartu fitur generik yang identik.

### 7.4 Engineering Capabilities

**Tujuan:** Memetakan kemampuan perusahaan secara mudah dipindai.

**Kelompok capabilities final:**

1. Product & Platform Engineering
2. Applied AI Systems
3. Data & Integration
4. Cloud & Reliability
5. Security by Design

Gunakan description, outcomes, dan technology labels pada Section 2.5. Semua item merupakan bagian dari fictional content pack yang sudah ditetapkan.

Hubungkan cakupan advanced engineering dengan domain dan contribution VantageSim yang sudah tersedia. Konsepnya adalah simulation review, bukan klaim membangun simulation solver atau capability keenam yang tidak ada dalam content pack.

**Pola visual:**

- Gunakan layout editorial atau matrix dengan nomor, label, deskripsi, dan technology tags secukupnya.
- Hindari lima kartu identik dengan ikon dekoratif.
- Hover boleh memperlihatkan detail tambahan, tetapi informasi utama tetap tersedia tanpa hover.

**Acceptance criteria:**

- Setiap capability memiliki hasil atau manfaat, bukan sekadar daftar teknologi.
- Layout dapat dibaca tanpa interaksi.
- Technology tags tidak mendominasi pesan.

### 7.5 AI & Software Development Focus

**Tujuan:** Menunjukkan bahwa AI dan software dikembangkan sebagai sistem yang dapat digunakan, dievaluasi, dan dioperasikan.

**Narasi final:**

`Discover -> Design -> Build -> Evaluate -> Operate`

Gunakan title dan deskripsi bahasa Inggris persis dari tabel AI and software process pada Section 2.5 untuk kelima tahap, tanpa membuat versi copy alternatif.

**Acceptance criteria:**

- Proses mudah dipahami oleh kandidat dan calon klien.
- Mobile tidak menampilkan diagram horizontal yang terpotong.
- Global concept bar dan footer menjelaskan bahwa proses ini merupakan bagian dari fictional company concept.

### 7.6 Projects / Selected Work

**Tujuan:** Memberikan bukti kualitas dan variasi masalah yang dapat diselesaikan.

**Model data project:**

- Title.
- Status data: `concept`, ditampilkan sebagai badge `Concept project`.
- Domain dan summary.
- Challenge.
- Contribution.
- Concept outcome.
- Technology tags.
- Visual brief untuk panduan pembuatan asset, bukan copy mentah yang ditampilkan sebagai paragraf website.
- Visual thumbnail dengan dimensions atau aspect ratio eksplisit.
- Optional detail URL.

**Konten final:** Gunakan `SignalOps`, `RelayGrid`, dan `VantageSim` dari Section 2.5. Ketiganya wajib memakai badge `Concept project`.

**Aturan integritas konten:**

- Jangan menambahkan client name, angka hasil, atau testimonial.
- Jangan mengubah `Concept project` menjadi `Client work` atau `Internal`.
- Jangan menampilkan detail link sebelum detail page benar-benar tersedia.

**Acceptance criteria:**

- Tepat tiga item dari content pack untuk menguji variasi layout.
- Status setiap project terlihat.
- Card atau row dapat digunakan dengan keyboard bila bersifat interaktif.
- Image menggunakan ukuran yang ditetapkan untuk mencegah layout shift.

### 7.7 Why Stratalyn Systems

**Tujuan:** Menjelaskan pembeda yang relevan bagi engineer berpengalaman.

**Pilar final:** Gunakan `Meaningful complexity`, `End-to-end ownership`, `Visible engineering`, dan `Sustainable pace` beserta copy pada Section 2.5.

**Acceptance criteria:**

- Setiap pilar menjelaskan pengalaman atau cara kerja konkret.
- Setiap pilar tetap berada dalam cakupan fictional concept dan tidak ditambah klaim benefit atau employee testimonial.

### 7.8 Talent Recruitment / Build With Us

**Tujuan:** Mengubah narasi perusahaan menjadi employee value proposition.

**Konten:** Gunakan Talent Recruitment copy pada Section 2.5, CTA menuju `#careers`, dan visual yang menghubungkan manusia serta sistem tanpa stock photo.

**Tone:** Setara, jelas, dan teknis. Hindari ungkapan seperti `rockstar`, `ninja`, `10x engineer`, atau janji budaya yang tidak terbukti.

### 7.9 Job Opportunities / Join Us

**Tujuan:** Memberi jalur tindakan yang jelas meskipun lowongan asli belum tersedia.

**Model data role:**

- Role title.
- Discipline.
- Location / remote status.
- Employment type.
- Short summary.
- Skills.
- Concept status; detail disusun dari field yang sudah tersedia dan disclosure bersama pada content source, tanpa apply URL atau email.

**Mode portofolio final:**

- Render tiga role pada Section 2.5.
- Setiap item memakai badge `Concept role`.
- Tombol `View concept role` membuka detail lokal atau dialog.
- Tidak ada tombol apply atau simulasi submission.
- Detail selalu menampilkan kalimat bahwa role tersebut fiktif.

**Kontrak detail:**

- Default sederhana adalah detail inline yang dapat dibuka/ditutup melalui kontrol `View concept role`, dengan expanded state dan hubungan ke panel yang jelas. Mempertahankan fokus pada kontrol pembuka dapat digunakan untuk pola inline.
- Dialog lokal tetap diperbolehkan bila dipilih pada Plan Phase 1. Dialog memiliki nama aksesibel dari role title, fokus awal pada judul/detail atau kontrol tutup sesuai panjang konten, focus containment, latar inert, tombol tutup, dan Escape. Saat ditutup, fokus kembali ke role trigger yang membukanya.
- Pilih satu pola secara konsisten untuk ketiga role dan catat keputusan. Semua detail berasal dari field Section 2.5; tidak ada route detail baru yang diperlukan untuk core build.

**Acceptance criteria:**

- Tidak ada tombol apply, link dummy, atau alamat rekrutmen aktif.
- Concept status terlihat sebelum user membuka detail.
- Ketiga detail dapat dibuka/ditutup dengan keyboard, disclosure detail terbaca, dan fokus mengikuti pola yang dipilih.
- Daftar role dapat diperluas tanpa mengubah komponen utama.

### 7.10 Contact

**Tujuan:** Mendemonstrasikan penyajian kontak dan penyalinan alamat tanpa menawarkan komunikasi aktif.

**Core build:**

- Tampilkan `hello@stratalyn.example` dan `careers@stratalyn.example` dari content config.
- Tampilkan note persis dari Contact copy pada Section 2.5.
- Sediakan tombol `Copy demo address` untuk masing-masing alamat. Accessible name atau description membedakan alamat tujuan tanpa mengubah label visual utama.
- Nyatakan penyalinan berhasil hanya setelah operasi clipboard benar-benar berhasil. Feedback diumumkan sebagai status aksesibel, bukan konfirmasi pengiriman pesan.
- Jika clipboard tidak tersedia atau izin ditolak, tampilkan feedback kegagalan dan arahkan pengguna memilih/menyalin teks alamat secara manual; alamat tetap selectable. Feedback ini merupakan UI copy operasional, bukan fakta perusahaan baru, dan disimpan pada content source.
- Jangan memakai `mailto:`, form submission, LinkedIn, GitHub, atau external contact link.

**Optional production form:**

- Name, email, topic, dan message.
- Validasi client dan server.
- Rate limiting, spam protection, privacy notice, dan email provider.
- Tidak termasuk core build karena membutuhkan layanan, secrets, dan kebijakan data.

**Acceptance criteria:**

- Alamat `.example` dan status demonstrasi terlihat jelas.
- Kedua tombol memiliki nama/deskripsi aksesibel yang membedakan alamat.
- Tes mencakup nilai alamat yang disalin, keberhasilan setelah operasi selesai, serta fallback kegagalan tanpa false success atau network submission.
- Fokus keyboard terlihat.

### 7.11 Footer

**Konten:**

- Wordmark `STRATALYN / SYSTEMS`.
- Positioning, navigation, copyright, dan disclosure persis seperti Section 2.5.
- Tidak ada social link.
- Disclosure tidak boleh dihapus pada portfolio deployment.

---

## 8. Arah Desain yang Direkomendasikan

### 8.1 Konsep: Engineering Signal

Konsep visual menggambarkan Stratalyn Systems sebagai organisasi yang mengubah kompleksitas menjadi sistem yang dapat diandalkan. Motif utama berupa grid teknis, node, aliran sinyal, garis koneksi, nomor section, dan panel modular. Motif digunakan secukupnya pada hero, section divider, dan state interaktif.

Konsep ini berbeda dari template teknologi generik karena:

- Identitas dibangun dari satu bahasa visual yang berulang secara konsisten.
- Komposisi lebih editorial daripada kumpulan feature cards.
- Informasi teknis menjadi bagian dari visual, bukan dekorasi acak.
- Motion menggambarkan aliran sistem dan hubungan antarelemen.

Gunakan perbedaan workflow sebagai pembeda visual project: timeline evidence/approval pada SignalOps, jalur integrasi/exception pada RelayGrid, serta perbandingan run/parameter/decision record pada VantageSim. Jangan menggantinya dengan diagram node dekoratif identik; ikuti visual brief masing-masing tanpa menambah klaim hasil atau metrik.

### 8.2 Design principles

1. **Clarity before decoration:** Konten utama tetap terbaca tanpa motion.
2. **Precision through rhythm:** Spacing, grid, alignment, dan type scale konsisten.
3. **One strong visual idea:** Gunakan Engineering Signal sebagai motif utama.
4. **Technical credibility:** Gunakan istilah konkret dan hierarki informasi yang matang.
5. **Controlled motion:** Animasi membantu orientasi dan feedback.

### 8.3 Design tokens yang ditetapkan

Nilai berikut menjadi baseline visual. Agent boleh menyesuaikan nilai minor setelah contrast dan visual testing, tetapi perubahan harus dicatat.

| Token | Nilai awal | Fungsi |
|---|---|---|
| Background | `#070A0F` | Latar utama |
| Surface | `#0F1520` | Panel dan header |
| Surface elevated | `#151D2A` | Elemen interaktif |
| Primary text | `#F4F7FB` | Heading dan teks penting |
| Secondary text | `#AAB5C4` | Supporting copy |
| Signal cyan | `#56DDE5` | Accent utama |
| Signal violet | `#8A7CFF` | Accent pendukung |
| Border | `rgba(255,255,255,0.12)` | Divider dan outline |
| Success | `#69D39C` | Status positif |

### 8.4 Typography

- Sans utama: Geist Sans.
- Mono accent: Geist Mono hanya untuk labels, status, dan metadata.
- H1 memakai ukuran fluid dengan `clamp()`.
- Lebar paragraf dibatasi sekitar 60-70 karakter.
- Jangan memakai lebih dari dua keluarga font.

### 8.5 Layout

- Max content width sekitar 1200-1280 px.
- Grid 12 kolom pada desktop, 8 pada tablet, dan 4 pada mobile.
- Vertical spacing besar pada desktop dan dikurangi secara proporsional pada mobile.
- Section tidak harus selalu berada dalam kartu.
- Gunakan asymmetric composition secara terkontrol untuk kesan editorial.

### 8.6 Motion system

| Jenis | Durasi awal | Penggunaan |
|---|---:|---|
| Micro feedback | 120-200 ms | Button, link, menu icon |
| Component transition | 200-350 ms | Menu, accordion, hover detail |
| Section reveal | 450-700 ms | Heading dan content group |
| Ambient signal | 3-5 s total | Satu urutan ringan saat pertama terlihat, lalu statis |

Aturan:

- Utamakan `transform` dan `opacity`.
- Batasi simultaneous animation.
- Jangan menganimasikan layout besar saat scroll.
- Ambient signal berjalan sekali per page load, berhenti paling lambat lima detik setelah mulai, dan tidak diulang saat scroll atau pointer masuk kembali. Mobile memakai visual ambient statis.
- Implementasikan `prefers-reduced-motion` sejak interaksi pertama: tanpa ambient, pointer-follow, reveal transform, atau smooth scrolling. Konten tetap terlihat jika JavaScript tidak berjalan.
- Tidak ada scroll hijacking.

### 8.7 Visual yang harus dihindari

- Gambar robot humanoid atau otak bercahaya.
- Gradient blob tanpa hubungan dengan konsep.
- Carousel testimonial palsu.
- Logo wall fiktif.
- Parallax berat.
- Kursor custom yang mengganggu.
- Teks tipis dengan kontras rendah.
- Terlalu banyak glassmorphism.

---

## 9. Functional Requirements

| ID | Requirement | Priority |
|---|---|---|
| FR-01 | Header memberi akses ke lima tujuan About, Capabilities, Work, Careers, dan Contact sesuai peta Section 6 | Must |
| FR-02 | User dapat membuka dan menutup mobile navigation | Must |
| FR-03 | CTA hero menuju Work dan Careers | Must |
| FR-04 | Capabilities dapat dipahami tanpa hover | Must |
| FR-05 | Project data dirender dari typed content source | Must |
| FR-06 | Job data dirender dari typed content source | Must |
| FR-07 | Tiga concept role memiliki badge serta detail lokal yang dapat dibuka/ditutup dengan keyboard dan disclosure yang jelas | Must |
| FR-08 | Kedua alamat `.example` memiliki tombol Copy demo address dengan feedback hasil sebenarnya dan fallback manual sesuai Section 7.10, tanpa simulasi pengiriman | Must |
| FR-09 | Semua interaction dapat dipakai dengan keyboard | Must |
| FR-10 | Motion mengikuti reduced-motion preference | Must |
| FR-11 | Active navigation mengikuti section saat scroll | Should |
| FR-12 | Project detail page | Could |
| FR-13 | Contact form dengan server delivery setelah konsep diganti data nyata | Could |
| FR-14 | ATS integration | Won't in core build |

---

## 10. Non-Functional Requirements

### 10.1 Performance

- Gunakan static rendering untuk halaman utama.
- Hindari client component pada section yang tidak interaktif.
- Gunakan image optimization dan dimensions eksplisit.
- Batasi font weights.
- Lazy-load asset yang berada jauh di bawah fold.
- Jangan menambah animation library jika CSS dan Intersection Observer cukup.
- Jalankan bundle analysis hanya bila ukuran bundle menjadi risiko nyata.

### 10.2 Accessibility

- Target WCAG 2.2 AA untuk pola yang diterapkan.
- Semantic landmarks: `header`, `nav`, `main`, `section`, `footer`.
- Satu H1; heading hierarchy tidak melompat tanpa alasan.
- Skip link menuju main content.
- Focus state terlihat jelas.
- Target pointer memenuhi WCAG 2.2 AA minimum 24 x 24 CSS px atau pengecualian spacing yang sah; utamakan area sentuh 44 x 44 px untuk tombol utama dan menu.
- Menu mobile dan detail role mengikuti kontrak fokus, Escape, dan background interaction pada Section 7.1 dan 7.9.
- Reflow diuji pada lebar ekuivalen 320 CSS px, termasuk teks disclosure, heading, serta kontrol; konten utama tidak memerlukan scroll horizontal. Fokus tidak tertutup elemen sticky.
- Decorative visuals diberi `aria-hidden`.
- Icon-only buttons memiliki accessible label.
- Kontras teks dan component state diuji.
- Reduced motion disediakan.

### 10.3 SEO

- Title dan meta description yang spesifik.
- Canonical concept URL menggunakan `https://stratalyn.example`.
- Open Graph dan Twitter metadata.
- Terapkan `noindex, nofollow, noarchive` melalui metadata robots pada HTML sejak Phase 1; verifikasi hasil pada `<head>`. `X-Robots-Tag` adalah alternatif HTTP bila diperlukan, bukan pengganti berupa aturan `robots.txt`.
- `src/app/robots.ts` menghasilkan `robots.txt` untuk mengatur crawling, bukan indexing. Izinkan crawling halaman publik agar crawler dapat membaca `noindex`; jangan memakai `Disallow: /` sebagai pengganti atau pendamping yang menghalangi pembacaan directive tersebut.
- Sitemap hanya demonstrasi sesuai Section 2.6. Canonical `.example` adalah identitas konsep, bukan alamat deployment atau base URL untuk asset/OG image yang perlu diakses dari origin aplikasi sebenarnya.
- Semantic heading dan descriptive link text.
- Organization JSON-LD tidak dirender selama `isConcept: true`.
- Audit indexability Lighthouse yang gagal akibat `noindex` dicatat sebagai hasil yang disengaja sesuai Section 14.4; indexing tetap disabled selama audit dan deployment konsep.
- Tidak melakukan keyword stuffing.

### 10.4 Security dan privacy

- Tidak menyimpan secret dalam repository.
- External links menggunakan atribut yang sesuai saat membuka tab baru.
- Tidak merender HTML dari content source tanpa sanitization.
- Tidak mengumpulkan data pribadi pada core build.
- Jika form ditambahkan: server-side validation, rate limiting, anti-spam, error response generik, dan privacy notice.
- Jalankan dependency audit dan nilai temuan yang relevan; jangan memperbaiki secara membabi buta dengan breaking upgrade.

### 10.5 Maintainability

- TypeScript strict.
- Content/data dipisahkan dari presentation components.
- Design tokens terpusat.
- Komponen mengikuti batas tanggung jawab yang jelas.
- Hindari premature abstraction.
- README mencatat setup, command, architecture, content replacement, dan deployment.

---

## 11. Arsitektur Teknis yang Direkomendasikan

### 11.1 Stack

| Area | Pilihan | Alasan |
|---|---|---|
| Framework | Next.js App Router | React, SEO metadata, static rendering, image/font optimization |
| Language | TypeScript strict | Mengurangi error dan memperjelas content model |
| Styling | Tailwind CSS + CSS variables | Cepat untuk membangun sistem yang konsisten tanpa runtime CSS |
| Motion | CSS terlebih dahulu; Motion hanya bila diperlukan | Menjaga bundle tetap ringan |
| Icons | Lucide atau SVG lokal yang konsisten | Ringan dan mudah diakses |
| Testing | Script lint, typecheck, build yang eksplisit + Playwright untuk critical flow sejak Phase 0 | Smoke test awal dan regresi perilaku per fase |
| Deployment target | Vercel preview deployment | Integrasi langsung dengan Next.js dan sesuai untuk portfolio review |

Gunakan versi stabil yang kompatibel saat implementasi dimulai dan pertahankan lockfile untuk instalasi reproducible; commit hanya bila diminta. Jangan melakukan upgrade dependency di tengah pengerjaan kecuali diperlukan.

### 11.2 Rendering strategy

- Halaman utama dirender statis.
- Client boundary kecil hanya untuk perilaku yang memerlukannya: header/mobile menu, optional active nav, pointer/reveal triggers, role detail bila tidak cukup dengan pola native, dan clipboard feedback. Konten section tetap statis; dialog atau copy button tidak menjadikan seluruh halaman client component.
- Content disimpan sebagai typed local data agar dapat diganti tanpa mengubah layout.
- Tidak ada runtime API pada core build.

### 11.3 Component map

```text
App
├── SiteHeader
│   ├── BrandMark
│   ├── DesktopNav
│   └── MobileNav
├── Main
│   ├── HeroSection
│   │   └── EngineeringSignalVisual
│   ├── AboutSection
│   ├── CapabilitiesSection
│   ├── ProcessSection
│   ├── WorkSection
│   │   └── ProjectItem
│   ├── WhyStratalynSection
│   ├── TalentSection
│   ├── CareersSection
│   │   └── ConceptRoleItem
│   └── ContactSection
└── SiteFooter
```

### 11.4 Proposed repository structure

```text
stratalyn-systems-website/
├── AGENTS.md
├── README.md
├── opencode.json
├── package.json
├── public/
│   ├── images/
│   └── social/
├── docs/
│   ├── PROJECT_PLAN.md
│   ├── DESIGN_DECISIONS.md
│   └── QA_REPORT.md
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── components/
│   │   ├── layout/
│   │   ├── sections/
│   │   ├── ui/
│   │   └── visuals/
│   ├── content/
│   │   └── site-content.ts
│   ├── lib/
│   │   ├── constants.ts
│   │   └── utils.ts
│   └── types/
│       └── content.ts
├── tests/
│   └── homepage.spec.ts
└── configuration files
```

Struktur boleh disederhanakan jika implementasi kecil. Coding agent tidak boleh membuat folder kosong atau abstraksi tanpa penggunaan nyata.

### 11.5 Content model

```ts
type Project = {
  title: string;
  status: "concept";
  domain: string;
  summary: string;
  challenge: string;
  contribution: string;
  conceptOutcome: string;
  technologies: string[];
  visualBrief: string;
  image: { src: string; alt: string };
  href?: string;
};

type Role = {
  title: string;
  discipline: string;
  location: string;
  employmentType: string;
  summary: string;
  skills: string[];
  isConceptRole: true;
};

type ConceptConfig = {
  isConcept: true;
  conceptLabel: string;
  footerDisclosure: string;
  canonicalUrl: "https://stratalyn.example";
  allowIndexing: false;
  enableContactSubmission: false;
};
```

Ini adalah desain tipe, bukan instruksi untuk menyalin implementasi tanpa mengevaluasi kebutuhan repo. Detail role dirakit dari field `Role`, bukan string job description terpisah. Simpan disclosure role bersama, labels, feedback clipboard, dan peta navigasi pada typed site content sesuai kebutuhan nyata.

---

## 12. Responsive Behavior

### Mobile

- Satu kolom.
- Hero visual berada setelah copy atau menjadi background yang tidak mengganggu.
- Navigation memakai dialog/drawer yang accessible.
- Capabilities dan process menjadi stack.
- Project metadata tidak bergantung pada hover.
- Ambient visual statis; perilaku motion lain mengikuti Section 8.6.

### Tablet

- Kombinasi satu dan dua kolom.
- Hero dapat mulai memakai split layout.
- Section padding sedang.
- Navigation desktop digunakan hanya bila ruang cukup.

### Desktop

- Grid editorial 12 kolom.
- Hero copy dan visual berimbang.
- Asymmetry dapat digunakan pada capabilities dan projects.
- Max-width menjaga paragraf tidak terlalu panjang.

### Viewport QA minimum

- 320 x 800 untuk reflow dan disclosure pada layar sempit
- 375 x 812
- 390 x 844
- 768 x 1024
- 1024 x 768
- 1440 x 900
- 1920 x 1080 sebagai pemeriksaan tambahan

---

## 13. Content Strategy

### Tone of voice

- Tenang dan percaya diri.
- Teknis tetapi dapat dipahami.
- Konkret dan ringkas.
- Tidak memakai hype AI.
- Menghormati pembaca berpengalaman.
- Menggunakan active voice.

### Message hierarchy

1. Stratalyn Systems builds serious software and AI systems.
2. Its value comes from engineering clarity, quality, and ownership.
3. The work offers meaningful technical challenges.
4. Experienced people can explore concept roles and demo contact details without a real application or conversation flow.

### Aturan copy

- H1 idealnya 6-12 kata.
- Supporting paragraph hero maksimal sekitar 30-45 kata.
- Satu paragraph section idealnya 2-4 kalimat.
- Feature copy menjelaskan outcome atau approach.
- Hindari kata `cutting-edge`, `revolutionary`, `world-class`, dan `best-in-class` tanpa bukti.
- Gunakan copy pack Section 2.5 sebagai sumber utama. Perubahan copy perusahaan memerlukan persetujuan eksplisit pemilik proyek terlebih dahulu, kemudian dicatat sebagai design/content decision; pencatatan saja bukan izin mengubah copy.
- Jangan menambah statistik, client, testimonial, social account, office location, atau benefit di luar content pack.
- Disclosure fictional concept harus tetap eksplisit pada semua viewport.

---

## 14. Test Strategy dan Quality Gates

### 14.1 Gate pada setiap fase

Gate berikut berlaku pada fase Build setelah toolchain tersedia. Plan hanya memeriksa keadaan yang ada dan mengusulkan command; pada workspace tanpa aplikasi, lint/typecheck/build belum dapat dijalankan atau diklaim lulus.

Browser test runner dan smoke test homepage disiapkan pada Phase 0. Untuk perubahan perilaku berikutnya, tambahkan tes yang relevan sebelum implementasi, amati kegagalan karena perilakunya belum ada, lalu implementasikan dan jalankan regresi. QA visual tetap diperlukan di samping tes otomatis.

**Verifikasi dependensi navigasi:**

- Phase 2 menguji open/close menu, Escape, focus containment/return saat batal, serta `href` CTA terhadap peta Section 6. Integrasi scroll dan fokus ke target Phase 3-5 dicatat sebagai `belum tersedia`, bukan lulus.
- Saat target nyata ditambahkan pada Phase 3-5, tambahkan tes klik link, penutupan menu, posisi scroll, dan fokus heading tujuan. Target yang belum ada tidak dibuat sebagai anchor kosong atau dinyatakan lulus lewat tes yang di-skip.
- Phase 5 menutup seluruh dependensi navigasi. Sejak fase ini, semua link header/footer dan CTA wajib menuju target nyata, tanpa tes integrasi navigasi yang masih tertunda. Build parsial sebelum titik ini hanya bahan review internal, bukan deliverable siap publikasi.

Setelah implementasi satu fase, coding agent harus:

1. Meninjau perubahan terhadap requirement ID terkait.
2. Menjalankan formatter bila tersedia.
3. Menjalankan lint.
4. Menjalankan TypeScript check.
5. Menjalankan test yang relevan.
6. Menjalankan production build bila fase mengubah routing, metadata, atau configuration.
7. Melaporkan file yang berubah, hasil verifikasi aktual, dependensi lintas fase yang belum tersedia, residual issue, dan checkpoint yang menunggu review.

Agent tidak boleh menyatakan gate lulus jika command gagal. Perbaiki akar masalah atau laporkan blocker dengan bukti. Penyelesaian teknis suatu fase tidak menggantikan persetujuan manusia untuk checkpoint visual atau fase Build berikutnya; gunakan alur Section 16.

### 14.2 Automated checks yang bernilai

- Homepage dapat dimuat.
- Kontrak link dan integrasi target diuji bertahap sesuai Section 14.1; sejak Phase 5 seluruh header/footer links dan CTA memiliki target nyata.
- Mobile menu dapat dibuka/ditutup dengan pointer dan keyboard; Escape, fokus awal, focus containment, fokus saat batal/navigasi, dan perubahan breakpoint sesuai kontrak.
- Tidak ada horizontal overflow pada viewport mobile.
- Project dan role state dirender sesuai data.
- Ketiga role detail dapat dibuka/ditutup dan memuat disclosure; tidak ada apply action atau submission.
- Clipboard menyalin alamat yang tepat; feedback sukses menunggu operasi selesai, kegagalan/ketidaktersediaan menyediakan fallback manual tanpa false success.
- Sejak Phase 1, concept bar dan footer disclosure minimal terlihat, metadata robots benar, dan Organization JSON-LD tidak dirender. Tambahkan badge checks saat project/role tersedia.
- Reduced-motion menonaktifkan efek yang dilarang Section 8.6; konten utama tetap terbaca tanpa JavaScript.
- Hanya ada satu H1.
- Build, lint, dan typecheck berhasil.

Jangan menulis unit test yang hanya mengulang isi array atau class Tailwind. Prioritaskan behavior yang mudah rusak.

### 14.3 Manual visual QA

- Periksa seluruh viewport minimum.
- Periksa zoom browser 200% dan reflow ekuivalen 320 CSS px, termasuk zoom 400% pada viewport desktop 1280 CSS px.
- Periksa keyboard-only navigation.
- Periksa reduced-motion.
- Periksa light leakage, clipping, overlap, dan unreadable contrast.
- Periksa loading tanpa JavaScript sejauh konten statis mendukung.
- Periksa error console dan failed network request.
- Bandingkan screenshot antarviewport untuk konsistensi hierarchy.

### 14.4 Performance dan SEO QA

**Lighthouse dan loading laboratorium:**

- Jalankan Lighthouse pada production build, bukan dev server, dengan `noindex` tetap aktif. Gunakan profil mobile dan desktop yang dicatat; jalankan masing-masing setidaknya tiga kali dalam kondisi cache yang konsisten.
- Simpan laporan mentah tiap run, versi Lighthouse/browser, OS, device/emulation, viewport, CPU/network throttling, kondisi cache, URL, dan identitas build. Laporkan median beserta rentang hasil; jangan memilih hanya run terbaik.
- Gate median per profil: Performance >= 90, Accessibility >= 95, Best Practices >= 95, LCP <= 2.5 s, dan CLS <= 0.1. Skor accessibility tidak menggantikan keyboard, reflow, dan screen-reader checks.
- Skor SEO dilaporkan apa adanya. Audit `is-crawlable` yang gagal karena metadata/header `noindex` adalah expected failure. Seluruh audit SEO otomatis lain yang applicable harus lulus; daftar audit yang tidak berlaku tetap dicatat. Pengecualian ini bukan izin mengabaikan error command atau kegagalan lain.
- Jangan menghapus `noindex`, mengubah ke bot-specific directive, atau menampilkan skor yang dihitung ulang seolah skor Lighthouse asli. Tidak ada kewajiban raw SEO >= 95 selama konsep sengaja tidak diindeks.
- Perbaiki asset size, font, hydration, dan layout shift berdasarkan evidence, tanpa menghapus konten atau disclosure penting demi skor.

**Interaksi laboratorium dan batas klaim:**

- Lighthouse navigation mengukur LCP, CLS, dan TBT, bukan INP. Catat TBT sebagai diagnostik, bukan bukti bahwa INP lulus.
- Pada production build, ukur interaksi nyata dengan Chrome DevTools Performance atau alat setara: buka/tutup/Escape menu, pilih anchor, buka/tutup role detail, serta copy success/failure. Rekam perangkat/profil dan setidaknya tiga pengulangan tiap skenario yang applicable; target respons terukur <= 200 ms pada tiap skenario. Periksa layout shift saat interaksi, bukan hanya saat initial load.
- Sebut angka sebagai INP lokal hanya bila tool benar-benar melaporkannya; durasi interaction trace tetap dilabeli sesuai metrik asalnya. Simpan trace atau hasil pengukuran. Jika tidak dapat diukur, tandai `belum terukur`, bukan lulus atau 0 ms.
- Hasil ini adalah evidence laboratorium. Kelulusan Core Web Vitals lapangan membutuhkan LCP, CLS, dan INP pada persentil ke-75 kunjungan nyata, terpisah mobile/desktop. Core build tidak menambah analytics produksi atau mengklaim kelulusan lapangan tanpa data.

Target yang belum tercapai tetap dicatat sebagai deviasi terbuka dengan bukti dan dampak. Pemilik proyek harus menerima deviasi secara eksplisit sebelum final sign-off; pencatatan saja tidak mengubah kegagalan menjadi kelulusan.

### 14.5 Final QA report

`docs/QA_REPORT.md` harus memuat:

- Tanggal dan environment.
- Command yang dijalankan.
- Hasil lint/type/build/test.
- Viewport yang diperiksa.
- Accessibility findings.
- Laporan mentah Lighthouse, median/rentang per profil, skor SEO asli, serta expected indexability failure dan audit lain sesuai Section 14.4.
- Skenario/trace interaksi, metrik yang benar-benar diukur, dan pemisahan hasil laboratorium dari data lapangan yang belum tersedia.
- Known limitations.
- Deviasi target beserta evidence dan keputusan pemilik proyek; checkpoint yang masih menunggu approval tidak ditandai selesai.
- Hasil audit terhadap content pack, concept badges, disclosure, dan alamat `.example`.

---

## 15. Traceability dan Definition of Done

| Permintaan klien | Bukti implementasi | Verifikasi |
|---|---|---|
| Strong hero | HeroSection + H1 + dua CTA + visual khas | Visual QA dan CTA test |
| About | AboutSection | Content review |
| Capabilities | CapabilitiesSection | Content review dan responsive QA |
| AI/software focus | ProcessSection | Content review |
| Projects/work | WorkSection | Data integrity dan interaction test |
| Why Stratalyn Systems | WhyStratalynSection | Content review |
| Recruitment | TalentSection | Content review |
| Job opportunities | CareersSection | Buka/tutup ketiga detail, keyboard/fokus, disclosure, dan tanpa apply/submission |
| Contact | ContactSection | Clipboard success/failure, fallback manual, demo note, dan tanpa mailto/submission |
| Clear CTA | Hero, careers, contact | Kontrak target Phase 2; integrasi scroll/fokus lengkap Phase 5 |
| Responsive | Seluruh layout | Viewport matrix |
| Smooth animation | Reveal, menu, signal visual | Reduced-motion dan visual QA |
| Professional typography/spacing | Design system | Screenshot review |
| Fast loading dan respons interaksi | Static rendering dan optimized assets | Production Lighthouse serta trace interaksi terpisah sesuai Section 14.4 |
| SEO-friendly | Metadata, sitemap demonstrasi, robots, semantics | Page/head inspection, noindex terjaga, pengecualian indexability terdokumentasi |
| Integritas konsep | Concept bar, badges, dan footer disclosure | Disclosure/robots sejak Phase 1; badge dan role checks saat fitur tersedia |
| Clean component architecture | Components + typed content | Code review |

### Core Definition of Done

Proyek dianggap selesai apabila:

- [ ] Semua requirement `Must` terpenuhi.
- [ ] Semua section eksplisit tersedia.
- [ ] Tidak ada link dummy `#`, missing asset, atau console error.
- [ ] Seluruh company content sama dengan fictional content pack; setiap perubahan telah disetujui secara eksplisit oleh pemilik proyek dan dicatat di design decisions.
- [ ] Concept bar, project badges, role badges, dan footer disclosure terlihat jelas.
- [ ] Alamat `.example` tidak diperlakukan sebagai contact channel aktif.
- [ ] Detail role dan kedua tombol copy memenuhi kontrak keyboard, fokus, feedback, serta fallback tanpa pengiriman pesan.
- [ ] Lint, typecheck, test, dan production build berhasil.
- [ ] Responsive QA selesai pada viewport minimum, zoom 200%, dan reflow ekuivalen 320 CSS px.
- [ ] Keyboard navigation dan reduced-motion diverifikasi.
- [ ] Metadata, sitemap, robots, dan structured data diperiksa.
- [ ] Gate Lighthouse/loading dan respons interaksi Section 14.4 terpenuhi, atau deviasi terbuka diterima secara eksplisit dengan evidence; laporan tidak mengklaim seluruh gate lulus jika ada deviasi.
- [ ] Skor SEO asli dan expected noindex failure dicatat, semua audit SEO otomatis lain yang berlaku lulus, dan tidak ada klaim INP/Core Web Vitals lapangan tanpa data.
- [ ] Checkpoint visual mendapat keputusan approve dari pemilik proyek; seluruh dependensi navigasi Phase 2 sudah ditutup pada Phase 5.
- [ ] README menjelaskan setup, architecture, content, verification, dan deployment.
- [ ] QA report mencatat keterbatasan, content integrity, dan concept disclosure.
- [ ] Screenshot desktop dan mobile tersedia untuk portofolio.

---

## 16. Strategi Menggunakan OpenCode

OpenCode menyediakan primary agent **Plan** untuk analisis dengan akses terbatas dan **Build** untuk development dengan akses file serta command. Gunakan Plan sebelum setiap fase besar, lalu Build hanya setelah pemilik proyek menyetujui plan fase tersebut. OpenCode juga membaca instruksi proyek dari `AGENTS.md`; file tersebut disimpan di root setelah scaffold tersedia. Dokumentasi resminya menjelaskan bahwa `/init` dapat membuat atau memperbaiki `AGENTS.md`, dan `opencode.json` dapat memuat dokumen instruksi tambahan. Lihat [OpenCode Agents](https://opencode.ai/docs/agents/) dan [OpenCode Rules](https://opencode.ai/docs/rules/).

### Prinsip eksekusi

1. Satu fase menghasilkan satu hasil yang dapat diperiksa.
2. Plan agent membaca requirement dan repo sebelum menyarankan perubahan.
3. Build agent mengimplementasikan hanya fase aktif.
4. Verifikasi dilakukan pada fase yang sama, bukan ditunda seluruhnya ke akhir.
5. Setiap keputusan baru dicatat dalam `docs/DESIGN_DECISIONS.md`.
6. Agent menggunakan fictional content pack Section 2 dan tidak mengarang content tambahan.
7. Dependency baru harus memiliki alasan dan dampak bundle yang dipahami.
8. Tidak melakukan refactor di luar fase tanpa kebutuhan konkret.
9. Jangan menjalankan auto-fix dependency yang berpotensi breaking tanpa meninjau perubahan.
10. User memberi keputusan `approve` atau `revise` pada checkpoint hero dan halaman lengkap. Melaporkan screenshot belum berarti checkpoint disetujui.
11. Persetujuan revisi dokumen atau plan tidak otomatis memberi izin menjalankan semua fase, commit, push, atau publikasi. Tindakan Git yang mempublikasikan/mencatat perubahan dan deployment hanya dilakukan bila diminta eksplisit; perubahan pengguna yang sudah ada tetap dipertahankan.

### Preflight dan siklus approval

1. Pada workspace awal, baca `Stratalyn_Systems_Company_Profile_and_OpenCode_Plan.md` di root. Setelah migrasi yang disetujui pada Phase 0, gunakan `docs/PROJECT_PLAN.md` sebagai satu sumber aktif. Jika keduanya ada dan berbeda tanpa penunjuk sumber aktif, laporkan konflik sebelum mengedit.
2. Periksa file, instruksi lokal jika tersedia, status repository, runtime/package manager, dan kondisi direktori target secara read-only. Jika belum ada `package.json`, laporkan bahwa command aplikasi belum tersedia; jangan menjalankan `/init`, scaffold, atau install dalam preflight.
3. Plan menghasilkan scope fase aktif, dependensi, file yang akan berubah, tes, command yang tersedia versus usulan, dan blocker. Untuk Phase 0 gunakan Section 18; setelah itu gunakan template Plan di bawah. Berhenti menunggu persetujuan.
4. Setelah persetujuan eksplisit, Build menjalankan hanya plan fase aktif. Jika ditemukan konflik requirement atau perluasan scope, kembali ke review, bukan mengambil keputusan lintas scope sendiri.
5. Laporkan bukti gate Section 14.1 dan keputusan visual yang diperlukan. Tunggu persetujuan sebelum Build fase berikutnya; dependensi yang secara eksplisit dijadwalkan untuk fase berikutnya tetap tercatat sampai ditutup.

Saat memakai Superpowers, gunakan `brainstorming` untuk keputusan desain baru yang belum disepakati, lalu `writing-plans` untuk merinci fase aktif setelah desain disetujui. Gunakan `test-driven-development` untuk perubahan perilaku dan `verification-before-completion` untuk laporan penyelesaian. Skill tidak menggantikan batas scope atau approval di atas; dokumen ini tidak perlu ditulis ulang menjadi spesifikasi duplikat.

### Template Plan setelah Phase 0

Sebutkan nomor fase aktif saat menggunakan prompt ini. Template hanya untuk Plan; prompt pada Section 17 adalah prompt Build yang terpisah.

```text
Plan only the phase explicitly requested by the user. Read AGENTS.md,
docs/PROJECT_PLAN.md, relevant decisions, and the current implementation.
Stay read-only: do not scaffold, install packages, edit files, or implement UI.
Map the active phase to requirement IDs and real dependencies. List expected
files, meaningful tests, available validation commands, proposed commands if
tools are missing, and any blockers. Separate checks possible now from cross-phase
integration checks whose targets are not implemented yet. Preserve Section 2
content and the contracts in Sections 6-10. Stop after presenting the plan and
wait for explicit approval before Build.
```

### Pengaturan instruksi proyek

Pada Build Phase 0 yang sudah disetujui:

1. Pindahkan dokumen aktif ke `docs/PROJECT_PLAN.md` sesuai lokasi target yang disetujui. Jika path lama perlu dipertahankan, jadikan penunjuk singkat, bukan salinan requirement kedua; catat sumber aktif di README dan `AGENTS.md`.
2. Setelah scaffold tersedia, jalankan `/init` atau buat `AGENTS.md` manual; review hasilnya sebelum digunakan.
3. Pastikan `AGENTS.md` ringkas dan berisi command nyata setelah scaffolding selesai.
4. Tambahkan dokumen ini melalui `opencode.json`:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "instructions": ["docs/PROJECT_PLAN.md"]
}
```

`AGENTS.md` dimuat otomatis, sehingga tidak perlu diulang pada `instructions`. Jika konfigurasi sudah ada, gabungkan hanya perubahan yang diperlukan tanpa mengganti setting lain. Restart OpenCode setelah perubahan konfigurasi agar sesi baru memakai instruksi tersebut.

### Isi minimum AGENTS.md setelah scaffolding

- Tujuan website.
- Stack yang benar-benar terpasang.
- Struktur penting repository.
- Command install, dev, lint, typecheck, test, dan build.
- Aturan untuk mempertahankan fictional content pack, badges, `.example` addresses, dan disclosure.
- Pola content source.
- Design and accessibility constraints.
- Requirement bahwa setiap perubahan diverifikasi sebelum selesai.

---

## 17. Execution Plan untuk Coding Agent

Semua fase mengikuti siklus approval Section 16 dan gate Section 14.1. Gunakan satu prompt Build hanya setelah plan fase yang sama disetujui. Section 17 adalah urutan pekerjaan, bukan izin untuk mengeksekusi semua fase sekaligus.

### Phase 0 - Repository, baseline, dan guardrails

**Tujuan:** Membuat fondasi yang reproducible sebelum UI dibangun.

**Tasks:**

- Periksa repository yang sudah ada; inisialisasi Git hanya jika belum tersedia pada direktori target yang disetujui.
- Scaffold Next.js dengan App Router, TypeScript, Tailwind, ESLint, `src/`, dan alias import menggunakan command serta lokasi yang disetujui. Direktori awal berisi dokumen; pilih strategi scaffold yang menjaga file tersebut tanpa overwrite atau pembersihan worktree.
- Gunakan package manager yang dipilih secara konsisten dan hasilkan satu lockfile; commit hanya bila diminta.
- Tambahkan dokumen proyek dan OpenCode instructions.
- Tambahkan scripts untuk lint, typecheck, test, dan build sesuai tools yang benar-benar dipasang.
- Siapkan Playwright atau browser test runner setara yang sudah ada, konfigurasi browser/web server, dan smoke test homepage yang benar-benar dijalankan. Tool browser interaktif saja tidak menggantikan tes repository yang dapat diulang.
- Buat README awal.
- Buat `docs/DESIGN_DECISIONS.md` untuk mencatat toolchain, sumber dokumen aktif, serta keputusan review yang disetujui; tidak perlu menyalin content pack.
- Pastikan halaman starter dapat dijalankan dan production build berhasil.

**Output:**

- Project skeleton.
- `AGENTS.md`.
- `opencode.json`.
- README baseline.
- Browser test configuration dan smoke test homepage.
- Decision log awal.
- Baseline validation report.

**Exit criteria:**

- Install reproducible.
- Dev server berjalan.
- Lint, typecheck, smoke test, dan build berhasil menggunakan command nyata pada repository.
- Tidak ada dependency yang belum dipakai.

**Prompt untuk Plan agent:**

Gunakan Master Prompt pada Section 18. Prompt tersebut menangani workspace awal yang belum memiliki `AGENTS.md`, `package.json`, atau `docs/PROJECT_PLAN.md`.

**Prompt untuk Build agent:**

```text
Implement Phase 0 only using the explicitly approved plan and the active source
document identified during preflight. Preserve existing files and use the approved
scaffold location. Establish docs/PROJECT_PLAN.md as the active requirement source,
create AGENTS.md with real commands, and record decisions without duplicating specs.
Keep the scaffold minimal. Configure the browser test runner and a real homepage
smoke test. Run install, lint, typecheck, smoke test, and production build.
Fix failures or report evidenced blockers. Report changed files, actual results,
and assumptions. Stop for review; do not build website sections or start Phase 1.
```

### Phase 1 - Content model dan design foundation

**Tujuan:** Menetapkan data, tokens, typography, grid, dan primitive sebelum menyusun section.

**Tasks:**

- Buat typed content model.
- Buat central typed site content menggunakan seluruh data final pada Section 2.
- Tambahkan `ConceptConfig` dengan `isConcept: true`, indexing disabled, dan contact submission disabled.
- Render concept bar dan footer disclosure minimal pada shell halaman dari typed content. Terapkan metadata robots pada HTML dan crawling policy Section 10.3 sekarang, bukan menunggu hardening.
- Buat peta anchor Section 6 sebagai typed content; ini kontrak tujuan, bukan section kosong. Pilih pola role detail Section 7.9 dan client boundary minimal untuk menu/detail/clipboard, lalu catat keputusan.
- Implementasikan color, spacing, radius, type, container, dan motion tokens.
- Set font loading.
- Buat primitive yang benar-benar diperlukan: container, section heading, button/link, tag, dan divider.
- Buat global background, landmark main yang nyata, dan skip link yang bekerja.
- Perluas smoke test untuk disclosure pada mobile/desktop, skip link, metadata robots, dan ketiadaan Organization JSON-LD.
- Buat halaman internal sederhana untuk memastikan tokens konsisten hanya bila dibutuhkan; hapus sebelum final jika tidak memberi nilai.

**Exit criteria:**

- Content dapat diubah tanpa mengedit JSX section.
- Kontras utama lulus pemeriksaan.
- Typography responsive.
- Tidak ada component library besar.
- Disclosure minimal terlihat pada 320 px dan viewport checkpoint, tanpa clipping; noindex tersedia pada HTML dan tidak terhalang oleh robots.txt.
- Lint, typecheck, tes fondasi, dan build berhasil.

**Prompt untuk Build agent setelah plan disetujui:**

```text
Implement the approved Phase 1 plan only. Read docs/PROJECT_PLAN.md, especially the design concept,
content integrity rules, technical architecture, and accessibility requirements.
Create the typed content source and the smallest useful design system. All unknown
company fields must be omitted; do not invent values beyond Section 2. Preserve
the concept label and `.example` addresses. Render the concept bar and minimal
footer disclosure now, with working main/skip-link structure and actual robots
metadata/crawling policy per Section 10.3. Define the anchor contract without empty
target sections, and record the chosen role-detail pattern and client boundaries.
Test the foundation including visible disclosure and noindex output, then run lint,
typecheck, tests, and build. Stop for review; do not build full sections yet.
```

### Phase 2 - Header dan Hero

**Tujuan:** Membuat first impression dan navigation yang kuat.

**Tasks:**

- Implementasikan accessible header dan mobile menu.
- Implementasikan hero copy structure dan CTA hierarchy menggunakan peta Section 6.
- Buat `EngineeringSignalVisual` menggunakan CSS/SVG lokal sesuai hasil Plan dan asset concept Section 2.7.
- Tambahkan entrance motion dan reduced-motion fallback.
- Pertahankan disclosure Phase 1. Uji menu, keyboard/fokus saat batal, breakpoint transition, dan kontrak href sesuai Section 14.1; tandai integrasi target Phase 3-5 sebagai belum tersedia.
- Periksa offset pada skip-link target yang sudah ada dan mobile overflow; pengujian offset section dilakukan ketika section nyata tersedia.

**Checkpoint visual 1:**

- Review 375 px dan 1440 px.
- Evaluasi apakah hero terasa khusus untuk Stratalyn Systems.
- Evaluasi apakah visual masih terbaca sebagai bagian dari konsep engineering.
- Periksa concept bar dan disclosure footer minimal serta hasil reflow 320 px.
- Minta keputusan `approve` atau `revise`; berhenti sebelum Build Phase 3 sampai checkpoint dan plan fase berikutnya disetujui.

**Exit criteria:**

- Hero menjelaskan positioning.
- Menu open/close, Escape, fokus saat batal, dan kontrak href lulus; integrasi CTA/section yang belum tersedia tercatat untuk Phase 3-5, bukan dinyatakan lulus.
- Mobile menu memenuhi kontrak yang dapat diuji pada fase ini; perpindahan fokus ke section diuji saat target tersedia.
- Tidak ada heavy animation atau layout shift.
- Disclosure dan reduced-motion tetap bekerja; tes fase dan checkpoint visual mendapat hasil serta keputusan yang eksplisit.

**Prompt untuk Build agent setelah plan disetujui:**

```text
Implement the approved Phase 2 plan only: SiteHeader, responsive navigation, HeroSection,
and EngineeringSignalVisual. Follow the Engineering Signal direction; avoid stock
AI imagery, generic gradient blobs, and copied SaaS compositions. Use semantic
HTML and the motion/focus contracts. Preserve the Phase 1 disclosures. Test menu
open/close, Escape, focus containment/return on cancellation, breakpoint changes,
and href contracts. Report cross-phase target integration as unavailable under
Section 14.1; do not add empty anchors or claim full navigation passes.
Verify 320px reflow, 375px and 1440px layouts, lint, typecheck, tests, and production
build. Present screenshots and evidence for visual checkpoint 1, then wait for
approve/revise. Do not create later sections.
```

### Phase 3 - About, Capabilities, dan AI Process

**Tujuan:** Menjelaskan identitas dan credibility engineering.

**Tasks:**

- Implement About.
- Implement capabilities dengan editorial matrix.
- Implement AI/software lifecycle dalam layout yang responsif.
- Tambahkan section anchors dan navigation targets.
- Tambahkan tes integrasi About/Capabilities: klik link, penutupan menu, scroll offset, dan fokus heading. Work/Careers/Contact tetap dicatat sebagai dependensi fase berikutnya.
- Gunakan progressive disclosure hanya jika informasi utama tetap terlihat.

**Exit criteria:**

- Ketiga section mudah dipindai.
- Tidak berubah menjadi kumpulan kartu generik.
- Process tidak terpotong pada mobile.
- Copy tidak membuat klaim tidak terverifikasi.
- Disclosure Phase 1 terjaga; integrasi navigasi ke target fase ini dan regresi menu lulus.

**Prompt untuk Build agent setelah plan disetujui:**

```text
Implement the approved Phase 3 plan only: About, Engineering Capabilities, and AI/Software Process.
Use the typed content source. Keep the layout editorial and visually connected to
Engineering Signal. Do not use repetitive icon cards. Ensure all primary content
is available without hover and preserve visible disclosures. Add integration tests
for available About/Capabilities anchors including menu closure, scroll offset,
and target focus. Validate responsive behavior, heading hierarchy, keyboard access,
lint, typecheck, tests, and build. Report remaining cross-phase targets and stop for review.
```

### Phase 4 - Selected Work

**Tujuan:** Menyajikan tiga fictional case study secara menarik dan transparan.

**Tasks:**

- Implement Project type dan data bila belum tersedia.
- Gunakan persis tiga concept projects: SignalOps, RelayGrid, dan VantageSim.
- Render domain, summary, challenge, contribution, concept outcome, dan technology labels; gunakan visual brief sebagai panduan asset, bukan paragraf website.
- Buat layout project yang mendukung thumbnail dengan aspect ratio konsisten.
- Render link hanya ketika `href` valid.
- Optimalkan images.
- Tambahkan tes integrasi `#work` dari hero/header/footer yang sudah tersedia dan pemeriksaan badge serta kondisi detail link tanpa membuat detail page di luar scope.

**Exit criteria:**

- Setiap project memiliki badge `Concept project`.
- Tidak ada fake client, fake metric, atau dummy link.
- Layout kuat dengan dan tanpa link detail.
- Image tidak menyebabkan CLS.
- Navigasi Work, disclosure project, dan regresi interaksi yang sudah tersedia lulus.

**Prompt untuk Build agent setelah plan disetujui:**

```text
Implement the approved Phase 4 plan only: Selected Work. Enforce the project content integrity
rules in docs/PROJECT_PLAN.md. Use SignalOps, RelayGrid, and VantageSim exactly as
defined in Section 2. Do not add clients, metrics, testimonials, or fabricated
outcomes. Render links only for real local detail routes and never use "#". Use
optimized images with explicit dimensions. Make the layout
distinct from a generic three-card portfolio grid. Use each visual brief to create
the asset, not as literal website copy. Test Work anchor integration and concept
badges; verify link conditions without adding out-of-scope detail routes. Validate
mobile layout, keyboard behavior, lint, typecheck, tests, and build. Stop for review.
```

### Phase 5 - Why Stratalyn Systems, Talent, Careers, Contact, dan Footer

**Tujuan:** Menyelesaikan recruitment journey dan conversion path.

**Tasks:**

- Implement Why Stratalyn Systems.
- Implement talent recruitment narrative.
- Implement careers menggunakan tiga `Concept role` dari Section 2.
- Implement local role detail sesuai pola yang dipilih pada Phase 1, memakai field yang sudah tersedia dan tanpa apply action.
- Implement contact menggunakan dua `.example` addresses, visible demo note, dan kedua copy button beserta feedback/fallback Section 7.10.
- Selesaikan footer lengkap sambil mempertahankan concept bar dan disclosure yang sudah ada sejak Phase 1.
- Tutup seluruh dependensi navigasi Phase 2: uji semua link header/footer dan CTA, scroll offset, menu closure, serta fokus target pada layout desktop/mobile.
- Test detail ketiga role, disclosure, clipboard success/failure, fallback manual, dan ketiadaan mailto/apply/submission.

**Checkpoint visual 2:**

- Review seluruh halaman pada mobile dan desktop.
- Pastikan bagian bawah halaman sama kuatnya dengan hero.
- Pastikan CTA tidak terasa berulang atau membingungkan.
- Minta keputusan `approve` atau `revise`; berhenti sebelum Build Phase 6 sampai checkpoint dan plan fase berikutnya disetujui.

**Exit criteria:**

- Recruitment flow selesai.
- Seluruh role menampilkan concept badge dan disclosure detail.
- Tidak ada mailto, form submission, fake contact, atau apply link.
- Footer dan disclosure sesuai konteks portofolio.
- Seluruh navigasi end-to-end dan tes role/clipboard lulus; tidak ada target kosong, tes integrasi navigasi tertunda, atau simulasi pengiriman.
- Checkpoint visual 2 mendapat keputusan approve sebelum Build fase berikutnya.

**Prompt untuk Build agent setelah plan disetujui:**

```text
Implement the approved Phase 5 plan only: Why Stratalyn Systems, Talent Recruitment, Careers, Contact, and
Footer. Use the exact fictional content pack. Render three concept roles with local
details composed from existing fields, using the approved interaction pattern and
no application action. Display both `.example` addresses with the demo note and
copy buttons. Test actual clipboard results, accessible feedback, and manual
fallback on failure. Complete the footer while retaining all Phase 1 disclosures.
Do not add a backend or collect personal data. Close all navigation dependencies
with real target, scroll, menu-closure, and focus tests; test all three role details.
Run lint, typecheck, tests, and production build. Present full-page mobile/desktop
evidence for visual checkpoint 2 and wait for approve/revise before proceeding.
```

### Phase 6 - Motion, interaction, dan visual polish

**Tujuan:** Menghasilkan pengalaman premium tanpa merusak usability dan performa.

**Tasks:**

- Audit motion yang sudah ada.
- Tambahkan section reveal secara selektif.
- Tambahkan active navigation bila stabil dan bermanfaat.
- Polish hover, focus, pressed, dan disabled states.
- Perbaiki spacing, line length, alignment, dan section transitions.
- Pertahankan reduced-motion yang sudah ada; terapkan kontrak Section 8.6 pada setiap efek baru, termasuk durasi total ambient dan fallback tanpa JavaScript.
- Hapus efek yang tidak membantu.
- Jalankan regresi menu, anchor/fokus, role detail, dan clipboard setelah perubahan interaksi.

**Exit criteria:**

- Motion konsisten dan halus.
- Halaman tetap jelas dengan motion dimatikan.
- Tidak ada scroll jank.
- Interactive state terlihat pada keyboard dan pointer.

**Prompt untuk Build agent setelah plan disetujui:**

```text
Implement the approved Phase 6 plan only. Treat motion as a functional design system.
Use transform and opacity where possible, honor prefers-reduced-motion, and avoid
scroll hijacking or perpetual distracting effects. Review every hover, focus,
pressed, menu, reveal, and anchor transition. Remove effects that add noise.
Follow Section 8.6 for one-shot ambient duration, static mobile visuals, and
reduced-motion from the start. Run interaction regressions, lint, typecheck,
tests, build, and relevant production measurements. Stop for review.
```

### Phase 7 - SEO, accessibility, dan performance hardening

**Tujuan:** Memenuhi kualitas profesional dan requirement non-functional.

**Tasks:**

- Audit semantic HTML dan heading hierarchy.
- Audit keyboard, focus, labels, and contrast.
- Audit reduced-motion.
- Finalisasi title/description, canonical `.example`, Open Graph/Twitter dan sitemap demonstrasi. Audit ulang robots metadata/crawling policy yang sudah aktif sejak Phase 1 sesuai Section 10.3.
- Pastikan Organization JSON-LD tidak dirender selama `isConcept: true`.
- Optimalkan font, image, client components, and bundle.
- Jalankan protokol Lighthouse production serta pengukuran interaksi terpisah pada Section 14.4.
- Catat laporan mentah, median/rentang, skor SEO asli, expected indexability failure, trace interaksi, dan batas klaim data lapangan.

**Exit criteria:**

- Tidak ada accessibility issue kritis yang diketahui.
- Metadata sesuai content pack, noindex tersedia pada HTML, dan robots.txt tidak mencegah crawler membacanya.
- Gate Section 14.4 dipenuhi atau deviasi dilaporkan untuk keputusan pemilik proyek; pencatatan deviasi bukan klaim lulus. Semua audit SEO otomatis lain yang berlaku lulus.
- Tidak ada hydration warning atau console error.

**Prompt untuk Build agent setelah plan disetujui:**

```text
Implement the approved Phase 7 hardening plan. Do a requirements-based audit for semantic HTML,
keyboard access, focus, contrast, reduced motion, metadata, structured data,
font/image loading, hydration, and bundle cost. Run the production app and use
the Section 14.4 protocol for repeated mobile/desktop Lighthouse runs and separate
interaction measurements. Preserve raw reports and SEO scores; document the
intentional noindex audit failure without weakening indexing controls. TBT is not
INP, and lab results are not field Core Web Vitals evidence. Verify the existing
HTML robots metadata and robots.txt policy per Section 10.3; omit Organization
JSON-LD. Run lint, typecheck, tests, and build after fixes. Report actual results
and request decisions on any deviations; stop for review.
```

### Phase 8 - Regression suite dan final QA

**Tujuan:** Membuktikan critical flow dan menutup visual defects.

**Tasks:**

- Konsolidasikan browser suite yang sudah berjalan sejak Phase 0; tambah hanya coverage perilaku yang masih kurang. Jika runner atau tes fase terdahulu belum tersedia, laporkan sebagai gate terdahulu yang belum terpenuhi, bukan penundaan yang direncanakan.
- Jalankan regresi navigation/menu, scroll/fokus, CTA, project link conditions, ketiga role detail, clipboard, disclosure, dan robots metadata.
- Periksa viewport matrix.
- Periksa zoom 200%, reflow ekuivalen 320 CSS px, keyboard-only, reduced-motion, serta keterbacaan konten statis tanpa JavaScript.
- Jalankan full validation suite.
- Tulis `docs/QA_REPORT.md`.

**Exit criteria:**

- Semua critical tests lulus tanpa dependensi target navigasi atau test setup yang masih tertunda.
- Visual QA tidak menemukan clipping, overlap, horizontal scroll, atau unreadable text.
- Known limitation terdokumentasi.

**Prompt untuk Build agent setelah plan disetujui:**

```text
Implement the approved Phase 8 plan. Consolidate the test suite built since Phase 0
and add only missing meaningful behavior coverage. Verify there are no deferred
navigation dependencies. Run the full validation suite and production build.
Perform viewport, keyboard/focus, zoom/reflow, reduced-motion, and no-JavaScript
content checks defined in the project
plan. Create docs/QA_REPORT.md with commands, results, environment, findings,
known limitations, approved deviations, concept disclosure checks, role details,
and clipboard success/failure. Include raw SEO results and the lab/field measurement
distinction. Fix defects or report evidenced blockers, then stop for review.
```

### Phase 9 - Portfolio packaging dan deployment readiness

**Tujuan:** Membuat proyek mudah dipahami reviewer dan siap dipublikasikan.

**Tasks:**

- Finalisasi README.
- Jelaskan problem, goals, constraints, design rationale, architecture, accessibility, performance, dan testing.
- Tambahkan screenshot mobile dan desktop.
- Pastikan README dan website menyebutnya fictional concept implementation.
- Tambahkan `.env.example` hanya bila ada environment variable nyata.
- Review license dan asset attribution.
- Verifikasi clean install, lint, typecheck, browser tests, dan production build di direktori verifikasi terpisah dari sumber/lockfile yang sama; jangan membersihkan worktree pengguna untuk membuat baseline bersih.
- Siapkan deployment configuration tanpa melakukan publikasi bila belum diminta.

**Exit criteria:**

- Reviewer dapat menjalankan proyek dari README.
- Screenshot merepresentasikan build final.
- Tidak ada secret, temporary file, atau asset tanpa hak penggunaan.
- Portfolio story menjelaskan kontribusi dan pembelajaran secara jujur.

**Prompt untuk Build agent setelah plan disetujui:**

```text
Implement the approved Phase 9 plan as a portfolio-ready handoff. Finalize README and supporting
documentation, add representative final screenshots, audit asset licenses and
attribution, scan for secrets and temporary files, and verify a clean install,
lint, typecheck, browser tests, and production build in a separate verification
directory without cleaning the user's worktree. Clearly label the project as a concept implementation unless
the entire content pack is later replaced by authorized real-company data. Keep
indexing disabled and prepare deployment config without publishing or changing
external services. Report final evidence and any approved deviations; stop without
committing, pushing, or publishing unless explicitly requested.
```

---

## 18. Master Prompt untuk Memulai Sesi OpenCode

Gunakan prompt berikut pada **Plan agent**, termasuk saat workspace baru berisi dokumen ini dan belum merupakan Git repository. Prompt ini menghasilkan rencana Phase 0 saja, bukan implementasi.

```text
You are planning a portfolio-quality company introduction and recruitment website
for Stratalyn Systems. Inspect the current workspace read-only. Read the active
requirement document in full: docs/PROJECT_PLAN.md after an approved migration,
otherwise Stratalyn_Systems_Company_Profile_and_OpenCode_Plan.md at the workspace
root. If both contain different requirements without a clear active-source pointer,
report the conflict and ask before choosing. Read AGENTS.md and recorded decisions
if present; report missing files rather than creating them.

Your current task is Phase 0 planning only. Do not edit or move files, initialize
Git, run /init, scaffold, install dependencies, or run destructive commands.

Produce:
1. a gap analysis between the actual workspace and Phase 0 requirements;
2. a dependency-aware Phase 0 sequence, including safe scaffold placement in the
   non-empty workspace and migration to one active requirement source;
3. the proposed scaffold command, compatible runtime/framework versions checked
   against current official docs, package-manager choice, and expected lockfile;
4. exact existing validation commands, clearly separated from proposed post-scaffold
   scripts; if package.json is absent, state that app validation is not available yet;
5. browser runner setup and a real homepage smoke test for the Phase 0 exit gate;
6. assumptions, blockers, and a concise list of expected file changes.

Constraints:
- Treat Section 2 as the complete fictional source of truth. Never add facts,
  projects, metrics, jobs, contacts, testimonials, or social accounts beyond it.
- Preserve every fictional concept badge, disclosure, `.example` address, and
  noindex control. Visible disclosures and HTML robots controls start in Phase 1,
  before the first company-content/hero review; do not defer them to Phase 5 or 7.
- Preserve the Engineering Signal design direction.
- Prefer static rendering and minimal client JavaScript.
- Keep accessibility, performance, responsive behavior, and honest content within
  every phase rather than deferring them all to the end.
- Keep tests alongside features, navigation integration aligned with the target
  availability in Section 14.1, and measurement claims within Section 14.4.
- Do not expand scope beyond the active requirement document or implement UI.
- Stop after Phase 0 planning and wait for explicit approval to Build Phase 0.
```

Setelah plan Phase 0 disetujui secara eksplisit, pindah ke **Build agent** dan gunakan prompt Phase 0. Fase berikutnya mengulang siklus Plan, approval, Build, dan verifikasi pada Section 16. Jangan memberi semua phase prompt sekaligus karena coding agent dapat melewati checkpoint dan menghasilkan perubahan terlalu besar untuk dipelajari.

---

## 19. Review Checklist untuk Pemilik Proyek

### Setelah Hero

- Apakah saya memahami bisnis Stratalyn Systems dalam 5-10 detik?
- Apakah CTA utama sesuai tujuan recruitment?
- Apakah visual terasa khas atau masih menyerupai template?
- Apakah hero tetap bagus pada mobile?
- Apakah concept bar dan footer disclosure minimal sudah terlihat, termasuk pada 320 px?
- Apakah laporan membedakan tes menu/kontrak CTA yang lulus dari integrasi target yang baru tersedia pada Phase 3-5?
- Apakah saya sudah memberi keputusan approve/revise untuk checkpoint ini?

### Setelah Core Sections

- Apakah setiap section menjawab pertanyaan baru?
- Apakah kemampuan dijelaskan sebagai outcome dan approach?
- Apakah semua copy sesuai fictional content pack dan bebas tambahan klaim?
- Apakah halaman terlalu banyak menggunakan card?

### Setelah Careers dan Contact

- Apakah kandidat mengetahui langkah berikutnya?
- Apakah ketiga role memakai badge `Concept role` dan tanpa application action?
- Apakah alamat `.example` terlihat sebagai demo dan tidak membuka mail client?
- Apakah footer menjelaskan status concept project?
- Apakah seluruh link/CTA kini menuju target nyata dengan fokus yang benar, tanpa dependensi navigasi tertunda?
- Apakah detail ketiga role dan kedua tombol copy bekerja dengan keyboard, termasuk feedback/fallback clipboard?
- Apakah saya sudah memberi keputusan approve/revise untuk checkpoint halaman lengkap?

### Sebelum Portfolio Publish

- Apakah concept bar, project/role badges, dan footer disclosure tampil pada semua viewport?
- Apakah screenshot berasal dari build final?
- Apakah README dapat diikuti dari komputer baru?
- Apakah hasil test dan Lighthouse dicatat, bukan hanya diklaim?
- Apakah skor SEO asli mempertahankan expected noindex failure, dan hasil interaksi laboratorium tidak diklaim sebagai INP/Core Web Vitals lapangan?
- Apakah semua asset memiliki izin penggunaan?
- Apakah tidak ada secret di commit history?

---

## 20. Risiko Implementasi dan Mitigasi

| Risiko | Dampak | Mitigasi |
|---|---|---|
| Agent membuat desain generik | Brief utama tidak terpenuhi | Gunakan satu konsep visual, checkpoint hero, dan larangan pola klise |
| Agent menambah fakta di luar content pack | Portofolio menyesatkan | Typed content, fixed concept data, visible disclosure, content audit |
| Animasi berlebihan | Performa dan accessibility turun | Motion budget, reduced-motion, visual QA mobile |
| Terlalu banyak dependency | Maintenance dan bundle membesar | CSS-first, dependency justification, audit per fase |
| Perubahan terlalu besar per prompt | Sulit dipelajari dan direview | Satu fase per prompt dan exit criteria |
| UI bagus tetapi CTA tidak jelas | Recruitment journey gagal | CTA hierarchy dan end-to-end flow audit |
| Desktop bagus, mobile rusak | Sebagian pengunjung tidak terlayani | Mobile-first dan viewport QA setiap fase |
| SEO hanya berupa metadata | Struktur halaman tetap lemah | Semantic HTML, content hierarchy, sitemap, structured data aman |
| Test menjadi formalitas | Bug utama tetap lolos | Smoke test Phase 0, tes perilaku bersama fitur, regresi dan manual visual QA |
| Exit fase bergantung pada fitur masa depan | Gate palsu atau scope melebar | Peta target Section 6 dan verifikasi bertahap Section 14.1, seluruh navigasi selesai Phase 5 |
| Skor QA mendorong pelemahan noindex atau klaim INP palsu | Integritas konsep dan laporan rusak | Protokol Section 14.4 dengan laporan mentah dan pemisahan lab/field |
| Agent menyatakan selesai tanpa bukti | Kualitas tidak dapat dinilai | Wajib laporkan command dan hasil aktual |

---

## 21. Deliverables Akhir

### Source dan aplikasi

- Next.js/React source code.
- Responsive one-page Stratalyn Systems website.
- Typed content source.
- Optimized local assets.
- Build and deployment configuration.

### Documentation

- `README.md`.
- `AGENTS.md`.
- `docs/PROJECT_PLAN.md`.
- `docs/DESIGN_DECISIONS.md`.
- `docs/QA_REPORT.md`.

### Portfolio assets

- Desktop screenshot.
- Mobile screenshot.
- Ringkasan case study: problem, approach, decisions, implementation, validation, learning.
- Link deployment setelah pemilik proyek memutuskan untuk mempublikasikan.

---

## 22. Urutan Belajar yang Disarankan

Pada setiap fase, jangan hanya meminta agent membuat kode. Setelah agent selesai:

1. Baca ringkasan perubahan.
2. Buka file utama yang dibuat.
3. Minta agent menjelaskan satu keputusan architecture atau UI yang belum dipahami.
4. Jalankan website sendiri.
5. Ubah satu content item atau token secara manual untuk memahami aliran data.
6. Jalankan validation command.
7. Commit hanya setelah hasil dapat dijelaskan kembali.

Dengan cara ini, repository menjadi bukti kemampuan mengarahkan, menilai, menguji, dan memelihara hasil coding agent, bukan sekadar kumpulan kode yang dibuat otomatis.

---

## 23. Keputusan Dummy Final

| Area | Keputusan final |
|---|---|
| Brand | Stratalyn Systems, fictional company |
| Tagline | `Engineering intelligence into dependable systems.` |
| Logo | Typographic wordmark `STRATALYN / SYSTEMS` + custom signal glyph SVG |
| Website format | One-page company profile and recruitment experience |
| Primary audience | Experienced technical talent |
| Secondary audience | Technical decision-makers |
| Projects | SignalOps, RelayGrid, dan VantageSim; semuanya `Concept project` |
| Careers | Tiga `Concept role` dengan local detail dan tanpa apply flow |
| Contact | Dua alamat `.example`, non-mailto, demo note dan kedua copy button sesuai Section 7.10 |
| Social links | Tidak digunakan |
| Testimonials dan client logos | Tidak digunakan |
| Quantitative metrics | Tidak digunakan |
| Visual assets | Custom CSS/SVG visuals berdasarkan Engineering Signal |
| Fonts | Geist Sans + Geist Mono |
| Metadata | Content pack Section 2.6 |
| Indexing | Disabled selama konsep fiktif |
| Structured data | Organization JSON-LD dihilangkan selama konsep fiktif |
| Contact backend | Tidak dibuat |
| Deployment target | Vercel preview deployment setelah QA dan ketika publikasi diminta |
| Disclosure | Concept bar/footer minimal sejak Phase 1; badges hadir bersama kontennya dan footer lengkap pada Phase 5 |

Content pack cukup tanpa fakta perusahaan tambahan; detail role memakai field yang sudah tersedia. Pada Plan Phase 0, tetapkan toolchain, lokasi scaffold, dan command validasi yang nyata; pada Plan Phase 1, catat pola detail role dan client boundary. Detail teknis minor boleh dipilih dalam plan selama tidak mengubah scope, content pack, atau acceptance criteria. Semua Build tetap memerlukan approval Section 16.

---

## 24. Referensi Operasional dan QA

- [OpenCode Agents](https://opencode.ai/docs/agents/): perbedaan Plan, Build, dan agent lain serta konfigurasi agent.
- [OpenCode Rules](https://opencode.ai/docs/rules/): penggunaan `AGENTS.md`, `/init`, dan instruksi tambahan melalui `opencode.json`.
- [Superpowers](https://github.com/obra/superpowers): workflow brainstorming, planning, test-driven development, dan verifikasi berbasis evidence.
- [Next.js Metadata](https://nextjs.org/docs/app/api-reference/functions/generate-metadata#robots) dan [robots.ts](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots): perbedaan directive metadata HTML dan file pengatur crawling.
- [Google Search: noindex](https://developers.google.com/search/docs/crawling-indexing/block-indexing): crawler harus dapat mengakses halaman untuk membaca noindex; robots.txt bukan mekanisme noindex.
- [Lighthouse: Page is blocked from indexing](https://developer.chrome.com/docs/lighthouse/seo/is-crawlable): noindex menyebabkan audit indexability gagal secara disengaja pada konsep ini.
- [Web Vitals](https://web.dev/articles/vitals): ambang LCP/CLS/INP, perbedaan lab/field, dan keterbatasan Lighthouse untuk INP.
- [WCAG Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html), [Pause, Stop, Hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html), dan [Target Size Minimum](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html): dasar pemeriksaan reflow, motion, dan ukuran target.

Dokumen ini adalah sumber requirement proyek. Bila coding agent menemukan konflik antara convenience implementation dan requirement di sini, agent harus melaporkan konflik tersebut sebelum mengubah scope.
