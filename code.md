<!DOCTYPE html>
<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Dylan Ricci | Software Engineer</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700&amp;family=Playfair+Display:ital,wght@0,400;0,600;1,400&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "ink": "#121212",
                        "clay": "#A68A71",
                        "moss": "#606C5D",
                        "sand": "#D9C5B2",
                        "oatmeal": "#F5F2ED",
                        "cream": "#E8E4DE",
                        "charcoal": "#1A1A1A",
                    },
                    fontFamily: {
                        "sans": ["Plus Jakarta Sans", "sans-serif"],
                        "serif": ["Playfair Display", "serif"]
                    }
                },
            },
        }
    </script>
<style type="text/tailwindcss">
        body {
            font-family: "Plus Jakarta Sans", sans-serif;
            background-color: #121212;
            color: #F5F2ED;
            scroll-behavior: smooth;
        }
        .rice-paper {
            background: rgba(26, 26, 26, 0.4);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            border: 1px solid rgba(217, 197, 178, 0.1);
        }
        .grain {
            background-image: url(https://lh3.googleusercontent.com/aida-public/AB6AXuDbOQUG622YDKeyhILP6HkuRVNiEt66t2PDp7PolxD6gD5BhWNlxYOmkFgfr00zQ6D-DLFwcDGVLXJKIV7DxruQ9Cmp4Z3qxwdRgDoytMdK9aFzXHKZWo_6LLEsKVGGmJWPyXyl9r4rc7oH7TnqFqngC7jK4l2PVwFLTH5FBm0ckb6x_wwkksGCZRXtcvHCVXgGcZyFLQVMj50OvX_2XK9bMjTJYJJ86CWItfshrY1zh4kfMYLJEOmp_chG_uSfFOCmSL9bpUMAnR8);
            opacity: 0.02;
            pointer-events: none;
        }
        .thin-border {
            border: 0.5px solid rgba(217, 197, 178, 0.15);
        }
        .japandi-grid {
            background-image: radial-gradient(rgba(217, 197, 178, 0.05) 1px, transparent 1px);
            background-size: 40px 40px;
        }
    </style>
</head>
<body class="selection:bg-clay/30 selection:text-oatmeal">
<div class="fixed inset-0 grain z-50"></div>
<div class="fixed inset-0 japandi-grid z-0"></div>
<nav class="fixed top-0 w-full z-40 px-8 py-6">
<div class="max-w-7xl mx-auto flex items-center justify-between rice-paper px-8 py-4 rounded-sm">
<div class="text-xl font-medium tracking-tight flex items-center gap-4">
<div class="w-10 h-10 border border-sand/30 flex items-center justify-center text-sand text-xs tracking-widest font-light">DR</div>
<span class="font-serif italic text-sand">Ricci.</span>
</div>
<div class="hidden md:flex items-center space-x-12 text-[11px] font-semibold uppercase tracking-[0.25em] text-cream/70">
<a class="hover:text-clay transition-colors" href="#work">Work</a>
<a class="hover:text-clay transition-colors" href="#about">About</a>
<a class="hover:text-clay transition-colors" href="#contact">Contact</a>
</div>
<a class="text-sand border-b border-sand/30 hover:border-clay hover:text-clay px-1 py-1 text-[11px] font-bold uppercase tracking-widest transition-all" href="#">
                Resume
            </a>
</div>
</nav>
<main class="relative z-10">
<section class="min-h-screen flex flex-col justify-center px-8 lg:px-24">
<div class="max-w-7xl mx-auto w-full">
<div class="inline-flex items-center gap-3 mb-12">
<div class="w-12 h-[1px] bg-moss"></div>
<span class="text-moss text-[10px] font-bold uppercase tracking-[0.4em]">Available for Collaboration</span>
</div>
<h1 class="text-[clamp(3rem,10vw,8rem)] font-light leading-[1] mb-8 text-cream">
                    DYLAN <br/>
<span class="font-serif italic text-clay font-normal">RICCI</span>
</h1>
<div class="flex flex-col md:flex-row md:items-end justify-between gap-12 mt-12">
<p class="text-lg md:text-xl text-cream/60 max-w-xl font-light leading-relaxed">
                        A software engineer blending <span class="text-sand italic font-serif">precision engineering</span> with minimalist design principles to craft quiet, powerful digital environments.
                    </p>
<div class="flex gap-12">
<a class="group flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] text-sand hover:text-clay transition-colors" href="#work">
                            View Work
                            <span class="material-symbols-outlined text-lg group-hover:translate-x-2 transition-transform">east</span>
</a>
</div>
</div>
</div>
</section>
<section class="py-24 thin-border border-x-0 bg-ink">
<div class="max-w-7xl mx-auto px-8">
<p class="text-[10px] uppercase tracking-[0.5em] text-moss mb-16 font-bold">Primary Discipline</p>
<div class="grid grid-cols-2 md:grid-cols-6 gap-y-12 gap-x-8 opacity-40">
<div class="flex flex-col gap-4">
<span class="text-[11px] font-bold tracking-widest uppercase text-cream">React</span>
<div class="w-full h-[1px] bg-sand/20"></div>
</div>
<div class="flex flex-col gap-4">
<span class="text-[11px] font-bold tracking-widest uppercase text-cream">TypeScript</span>
<div class="w-full h-[1px] bg-sand/20"></div>
</div>
<div class="flex flex-col gap-4">
<span class="text-[11px] font-bold tracking-widest uppercase text-cream">Next.js</span>
<div class="w-full h-[1px] bg-sand/20"></div>
</div>
<div class="flex flex-col gap-4">
<span class="text-[11px] font-bold tracking-widest uppercase text-cream">Node.js</span>
<div class="w-full h-[1px] bg-sand/20"></div>
</div>
<div class="flex flex-col gap-4">
<span class="text-[11px] font-bold tracking-widest uppercase text-cream">Tailwind</span>
<div class="w-full h-[1px] bg-sand/20"></div>
</div>
<div class="flex flex-col gap-4">
<span class="text-[11px] font-bold tracking-widest uppercase text-cream">Architect</span>
<div class="w-full h-[1px] bg-sand/20"></div>
</div>
</div>
</div>
</section>
<section class="py-32 px-8" id="work">
<div class="max-w-7xl mx-auto">
<div class="flex flex-col md:flex-row items-baseline justify-between mb-24 gap-8">
<div class="max-w-2xl">
<h2 class="text-moss text-[10px] font-bold uppercase tracking-[0.4em] mb-4">Portfolio</h2>
<h3 class="text-4xl md:text-5xl font-light text-cream font-serif italic">Selected Artifacts</h3>
</div>
<p class="text-cream/40 text-sm max-w-xs font-light leading-relaxed">Focusing on stillness, performance, and the elimination of the unnecessary.</p>
</div>
<div class="grid md:grid-cols-2 gap-x-12 gap-y-24">
<div class="group">
<div class="aspect-[16/10] overflow-hidden bg-charcoal thin-border mb-8 grayscale hover:grayscale-0 transition-all duration-700">
<img alt="Nexus Dashboard Interface" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0ToBne3JLBi3YLJ9QVTntSp3-tCG-GbuzP_2KvOeagGtcL4afp2g-4df6gLyzGlSFAkfFGxRmYBzPCb8Wk4i48E7lsPWeLPK01gW7xk98LM-d1H6V066YmX2tXY086HvrqsyluBM_l7ItU89MZo3pnwLQ6brgViQ3UIKEK9YWujHN2n1y2uqSbj_vbXiU3uJrz22-UWEX4BAsNKDeQ8q_Gco_edjXRgzLpRJpsQHttwWrBaehyEE2WZMaFjSD1KTyDV8ClFUh3c8"/>
</div>
<div class="flex justify-between items-start">
<div>
<h4 class="text-xl font-medium mb-2 text-cream">Nexus Dashboard</h4>
<p class="text-cream/50 text-xs font-light tracking-wide mb-4">Analytics Infrastructure</p>
<div class="flex gap-6 mt-6">
<span class="text-[10px] font-bold text-moss uppercase tracking-widest">01 / Experience</span>
<a class="text-[10px] font-bold text-sand uppercase tracking-widest border-b border-sand/20" href="#">Explore</a>
</div>
</div>
</div>
</div>
<div class="group pt-24 md:pt-48">
<div class="aspect-[16/10] overflow-hidden bg-charcoal thin-border mb-8 grayscale hover:grayscale-0 transition-all duration-700">
<img alt="Cipher Protocol Brand" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7OD4Tff2bZxFK4gWi_RCYy5rS9dVWVSOxEHjZj8fU61NtlSZNy0TNMjVmhF8b7V69PMubHPsuslxnCDaEtQ-dRvdO_cC9d7zCOpDBT8h2sLJ2IJj8fuFePbIbz9pofCrBYZj4h4_O3TMpbn-qPIHFnkIgH1WZEUcwZXkJ3-HlrTzZtB_c3w8MwhR_ldd5-7x_lvb8_dxBedck2bvRsee6G_CnQkkz02zTP55gwPVinc8EkobXN1vYgt-c97lGaM74dwkh7m8F5tA"/>
</div>
<div class="flex justify-between items-start">
<div>
<h4 class="text-xl font-medium mb-2 text-cream">Cipher Protocol</h4>
<p class="text-cream/50 text-xs font-light tracking-wide mb-4">Blockchain Security</p>
<div class="flex gap-6 mt-6">
<span class="text-[10px] font-bold text-moss uppercase tracking-widest">02 / Protocol</span>
<a class="text-[10px] font-bold text-sand uppercase tracking-widest border-b border-sand/20" href="#">Explore</a>
</div>
</div>
</div>
</div>
<div class="group">
<div class="aspect-[16/10] overflow-hidden bg-charcoal thin-border mb-8 grayscale hover:grayscale-0 transition-all duration-700">
<img alt="Lumina E-commerce" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZaE1jwVv5Ssvzg57KyFvH7V0CrWHL-7raBIbz_qEodvWpFlXLeDYMkzGmuZt2sqh5tGlea2CVta6xU6fNr_tr6S6py3uRgK4LgUZ9L4GLAxyq7_Gqo2c0CAVt4qSQ_ovFDA0ZIOnDjBgxVJFOhMSXa4kdjbXPYZ51XR-GI4SU0HmDeKYoMwGeTT5oDWjBOnitFsOFcHzAyGcu6ILPwp5Bz5URJy0Wc56pBdCIc14DLTHOCYsw89vT3dk6ZismUlIc6gp-picw8vE"/>
</div>
<div class="flex justify-between items-start">
<div>
<h4 class="text-xl font-medium mb-2 text-cream">Lumina Store</h4>
<p class="text-cream/50 text-xs font-light tracking-wide mb-4">Minimal Commerce</p>
<div class="flex gap-6 mt-6">
<span class="text-[10px] font-bold text-moss uppercase tracking-widest">03 / Platform</span>
<a class="text-[10px] font-bold text-sand uppercase tracking-widest border-b border-sand/20" href="#">Explore</a>
</div>
</div>
</div>
</div>
<div class="group pt-24 md:pt-48">
<div class="aspect-[16/10] overflow-hidden bg-charcoal thin-border mb-8 grayscale hover:grayscale-0 transition-all duration-700">
<img alt="Vortex Studio Site" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKbGt9GG0PhGV0gjeQLCscJWVPjDG1EzZB4qt3Z5Qp7pHuJDFDtN-tL9LWxTyJr1SUhA_YKH5Upst4JuXjjK-tJjhBCUwc1FcgRVlwOBEayEviCVQ_foJMTYJHTiaC3U6jQ1Mg0iWDyxJrHOwtrd85ut1Qbo3lvSGAuUGOjWv9cWojB_VIU1zTIV3DZwjsuFQWsg0UX97bqM847YLnFh5mBMg6yuTuGAVIgZTLJ4dKHKCJeLudq1XfzHQnoRuLtKlIWs0530mO0Ws"/>
</div>
<div class="flex justify-between items-start">
<div>
<h4 class="text-xl font-medium mb-2 text-cream">Vortex Studio</h4>
<p class="text-cream/50 text-xs font-light tracking-wide mb-4">Creative Direction</p>
<div class="flex gap-6 mt-6">
<span class="text-[10px] font-bold text-moss uppercase tracking-widest">04 / Interaction</span>
<a class="text-[10px] font-bold text-sand uppercase tracking-widest border-b border-sand/20" href="#">Explore</a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section class="py-48 px-8 bg-charcoal/30" id="about">
<div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-32 items-center">
<div class="relative">
<div class="aspect-[4/5] overflow-hidden thin-border p-4 bg-ink">
<img alt="Dylan Ricci portrait" class="w-full h-full object-cover grayscale opacity-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPpYV67aEyqFPOFSQD3_IurEufF0zydMOOwy7UUxnhjVvt8ZPk8FuUTy-Bz20-CpK3FZakqDJwLw0hB0OST-9crsMPck8b3ffRp5CJYcgnME4NJZlzHvb4qmfD6gsWlagmT_v690KsjDEsF7_03L_T9pD25wZ0MQSNJG68kjC1RuSx5G1lFeu2qAmfdByqI4a2xRv-wF08JP14W31STdtSSbN0SCfpkmWW12nRa-2eDdDPG63hJmLa41z6nZ4cnl_BffUn3R2krpM"/>
</div>
<div class="absolute -bottom-8 -right-8 w-48 h-48 border border-sand/10 pointer-events-none"></div>
</div>
<div>
<h2 class="text-moss text-[10px] font-bold uppercase tracking-[0.4em] mb-8">Philosophy</h2>
<h3 class="text-4xl font-light text-cream mb-12 leading-snug font-serif italic">Engineering stillness through code.</h3>
<div class="space-y-8 text-cream/50 text-lg font-light leading-relaxed">
<p>With a decade spent at the intersection of aesthetic design and robust engineering, I view software as a craft of subtraction. </p>
<p>My methodology is rooted in the Japandi philosophy—finding beauty in functionality and peace in clean, intentional architecture.</p>
<div class="grid grid-cols-2 gap-12 pt-12 border-t border-sand/10">
<div>
<h4 class="text-sand font-medium mb-2 italic font-serif text-2xl">06+</h4>
<p class="text-[10px] uppercase tracking-widest font-bold text-moss">Years Mastery</p>
</div>
<div>
<h4 class="text-sand font-medium mb-2 italic font-serif text-2xl">50+</h4>
<p class="text-[10px] uppercase tracking-widest font-bold text-moss">Systems Built</p>
</div>
</div>
</div>
</div>
</div>
</section>
<footer class="py-48 px-8 bg-ink" id="contact">
<div class="max-w-7xl mx-auto">
<div class="text-center mb-40">
<h2 class="text-[clamp(2.5rem,8vw,6rem)] font-light text-cream leading-tight mb-16">
                        Shall we <span class="font-serif italic text-clay">begin?</span>
</h2>
<a class="text-xl md:text-3xl font-light text-sand hover:text-clay transition-all duration-500 border-b border-sand/20 pb-2" href="mailto:hello@dylanricci.dev">
                        hello@dylanricci.dev
                    </a>
</div>
<div class="grid md:grid-cols-3 items-center pt-24 thin-border border-x-0 border-b-0 gap-12">
<div class="flex items-center gap-4">
<div class="w-1 h-1 rounded-full bg-moss"></div>
<span class="text-[10px] uppercase tracking-[0.3em] font-bold text-cream/60">SF — Global</span>
</div>
<div class="flex justify-center gap-12 text-[10px] font-bold uppercase tracking-[0.3em] text-sand">
<a class="hover:text-clay transition-colors" href="#">GitHub</a>
<a class="hover:text-clay transition-colors" href="#">LinkedIn</a>
<a class="hover:text-clay transition-colors" href="#">Journal</a>
</div>
<div class="text-right">
<p class="text-cream/30 text-[10px] uppercase tracking-widest">© 2024 — Ricci Portfolio</p>
</div>
</div>
</div>
</footer>
</main>

</body></html>