import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Layers, 
  Zap, 
  Cpu, 
  Box, 
  ChevronRight, 
  Github, 
  Twitter, 
  Instagram, 
  Linkedin,
  ExternalLink,
  MousePointer2,
  CheckCircle2,
  Menu,
  X
} from 'lucide-react';

// --- Types ---
interface Project {
  id: number;
  title: string;
  category: string;
  problem: string;
  transformation: string;
  impact: string;
  image: string;
  color: string;
}

// --- Data ---
const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Aetheria Brand Identity",
    category: "Branding",
    problem: "A tech startup needed to look established but futuristic in a crowded SaaS market.",
    transformation: "Developed a dynamic, generative logo system that evolves based on user interaction.",
    impact: "Secured $2M in seed funding within 3 months of launch.",
    image: "https://picsum.photos/seed/aetheria/800/600",
    color: "from-cyan-500 to-blue-600"
  },
  {
    id: 2,
    title: "Neon Pulse 3D Series",
    category: "3D Art",
    problem: "A music label wanted visuals that felt like 'digital adrenaline' for their top artist.",
    transformation: "Created a series of high-fidelity 3D loops using Blender and Unreal Engine 5.",
    impact: "Over 5M views across social media platforms.",
    image: "https://picsum.photos/seed/neon/800/600",
    color: "from-purple-500 to-pink-600"
  },
  {
    id: 3,
    title: "Flux Social Strategy",
    category: "Social Media",
    problem: "Engagement was stagnant due to generic, static content.",
    transformation: "Implemented a motion-first design language that prioritized micro-interactions.",
    impact: "300% increase in organic reach and 45% higher save rate.",
    image: "https://picsum.photos/seed/flux/800/600",
    color: "from-green-400 to-emerald-600"
  },
  {
    id: 4,
    title: "CyberCore Interface",
    category: "UI/UX",
    problem: "Complex data visualization was overwhelming for non-technical users.",
    transformation: "Designed a 'HUD' style interface that simplified complex metrics into intuitive 3D widgets.",
    impact: "Reduced onboarding time by 60%.",
    image: "https://picsum.photos/seed/cyber/800/600",
    color: "from-orange-500 to-red-600"
  },
  {
    id: 5,
    title: "Void Walker Concept",
    category: "Experimental 3D",
    problem: "Exploring the limits of digital identity in the emerging metaverse space.",
    transformation: "Sculpted a series of 10 procedural avatars with reactive textures and lighting.",
    impact: "Featured in 'Digital Arts Monthly' and sold out as a limited collection.",
    image: "https://picsum.photos/seed/void/800/600",
    color: "from-blue-900 to-black"
  }
];

const TESTIMONIALS = [
  {
    name: "Sarah Chen",
    role: "CEO, Aetheria",
    text: "Abdullah doesn't just design; he builds visual ecosystems. Our brand feels alive."
  },
  {
    name: "Marcus Thorne",
    role: "Creative Lead, Pulse Records",
    text: "The 3D work he delivered was beyond industry standard. Truly a top 1% talent."
  }
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4 glass' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display font-bold tracking-tighter"
        >
          AL-HIAMI<span className="text-accent">.</span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
          {['Work', 'Why Me', 'Process', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-accent transition-colors">
              {item}
            </a>
          ))}
          <button className="px-6 py-2 bg-white text-black font-bold rounded-full hover:bg-accent transition-colors">
            Hire Me
          </button>
        </div>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass p-8 flex flex-col gap-6 md:hidden"
          >
            {['Work', 'Why Me', 'Process', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} onClick={() => setIsMenuOpen(false)} className="text-xl font-display">
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/4 -right-1/4 w-[800px] h-[800px] bg-accent-purple/20 rounded-full blur-[120px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <span className="inline-block px-4 py-1 rounded-full border border-accent/30 bg-accent/5 text-accent text-xs font-bold tracking-[0.2em] uppercase mb-6">
            Available for Q3 Projects
          </span>
          <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] tracking-tighter mb-8">
            I MAKE BRANDS <br />
            <span className="text-gradient">IMPOSSIBLE</span> <br />
            TO IGNORE.
          </h1>
          <p className="text-xl md:text-2xl text-white/60 max-w-2xl mb-10 leading-relaxed">
            Abdullah Al-Hiami — A Graphic Designer & 3D Artist bridging the gap between high-impact visuals and technical precision.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group px-8 py-4 bg-accent text-black font-bold rounded-full flex items-center justify-center gap-2 hover:scale-105 transition-transform">
              Start a Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 glass rounded-full font-bold hover:bg-white/10 transition-colors">
              View My Work
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">Scroll to Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent" />
      </motion.div>
    </section>
  );
};

const WhyMe = () => {
  const features = [
    {
      icon: <Zap className="text-accent" />,
      title: "Attention Engineering",
      desc: "I don't just design for beauty; I engineer the split-second decision to stop scrolling and engage."
    },
    {
      icon: <Box className="text-accent-purple" />,
      title: "Spatial Storytelling",
      desc: "Leveraging 3D depth to create immersive brand narratives that feel tangible and high-end."
    },
    {
      icon: <Cpu className="text-accent" />,
      title: "Future-Proof Execution",
      desc: "From generative AI to Unreal Engine, I use the cutting edge to keep your brand 2 steps ahead."
    }
  ];

  return (
    <section id="why-me" className="py-32 bg-white/2">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-10 glass rounded-3xl"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-8">
                {f.icon}
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">{f.title}</h3>
              <p className="text-white/60 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  return (
    <section id="work" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-20">
          <div>
            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-4">SELECTED <br /> <span className="text-accent">WORKS</span></h2>
            <p className="text-white/40 uppercase tracking-widest text-sm">Turning problems into visual impact</p>
          </div>
          <div className="hidden md:block">
            <button className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
              View All Archive <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {PROJECTS.map((p) => (
            <motion.div 
              key={p.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-8">
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />
                <div className="absolute top-6 right-6 p-4 glass rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <ExternalLink className="w-6 h-6" />
                </div>
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-accent text-xs font-bold uppercase tracking-widest mb-2 block">{p.category}</span>
                  <h3 className="text-3xl font-display font-bold mb-4">{p.title}</h3>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div>
                  <p className="text-[10px] uppercase text-white/40 mb-1">Problem</p>
                  <p className="text-xs leading-snug">{p.problem}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase text-white/40 mb-1">Transformation</p>
                  <p className="text-xs leading-snug">{p.transformation}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase text-white/40 mb-1">Impact</p>
                  <p className="text-xs leading-snug font-bold text-accent">{p.impact}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { title: "Think", desc: "Strategy first. We define the 'Why' before the 'What'." },
    { title: "Design", desc: "Crafting high-fidelity concepts that push boundaries." },
    { title: "Refine", desc: "Iterative polishing to ensure every pixel serves a purpose." },
    { title: "Deliver", desc: "Production-ready assets that scale across all platforms." }
  ];

  return (
    <section id="process" className="py-32 glass">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-display font-bold mb-20 text-center">THE PREMIUM WORKFLOW</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="relative">
              <div className="text-8xl font-display font-black text-white/5 absolute -top-12 -left-4">{i + 1}</div>
              <h4 className="text-2xl font-display font-bold mb-4 relative z-10">{s.title}</h4>
              <p className="text-white/60 relative z-10">{s.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 -right-4 w-8 h-[1px] bg-white/20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="pt-32 pb-12 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass rounded-[4rem] p-12 md:p-24 text-center mb-32">
          <span className="inline-block px-4 py-1 rounded-full border border-accent/30 bg-accent/5 text-accent text-xs font-bold tracking-[0.2em] uppercase mb-6">
            Limited Availability for 2026
          </span>
          <h2 className="text-5xl md:text-8xl font-display font-bold tracking-tighter mb-8">
            LET'S BUILD SOMETHING <br />
            <span className="text-gradient">UNFORGETTABLE.</span>
          </h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
            Currently accepting new high-impact projects for Q3 2026. Limited slots available to ensure premium quality.
          </p>
          <button className="px-12 py-6 bg-white text-black font-bold rounded-full text-xl hover:bg-accent transition-colors">
            Book a Strategy Call
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/10 pt-12">
          <div className="text-xl font-display font-bold">AL-HIAMI<span className="text-accent">.</span></div>
          
          <div className="flex gap-6">
            <a href="#" className="p-3 glass rounded-full hover:text-accent transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="p-3 glass rounded-full hover:text-accent transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="p-3 glass rounded-full hover:text-accent transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="p-3 glass rounded-full hover:text-accent transition-colors"><Github className="w-5 h-5" /></a>
          </div>

          <p className="text-white/40 text-sm">© 2026 Abdullah Al-Hiami. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const BrandStory = () => {
  return (
    <section className="py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-8 italic">
              "DESIGN IS NO LONGER OPTIONAL. <span className="text-accent">IT'S SURVIVAL.</span>"
            </h2>
            <div className="space-y-6 text-xl text-white/60 leading-relaxed">
              <p>
                I am Abdullah Al-Hiami. I don't follow trends; I build the systems that start them. 
              </p>
              <p>
                My background in graphic design combined with my obsession for 3D and tech allows me to create visuals that don't just look good—they perform. 
              </p>
              <p className="text-white font-bold">
                I'm on a mission to bridge the gap between human emotion and digital precision.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square glass rounded-full flex items-center justify-center overflow-hidden"
          >
             <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-dashed border-accent/20 rounded-full"
            />
            <div className="text-center p-12">
              <div className="text-8xl font-display font-black text-gradient mb-4">1%</div>
              <p className="uppercase tracking-[0.4em] text-sm font-bold">Designer Mindset</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <WhyMe />
      <Portfolio />
      <Process />
      <BrandStory />
      
      {/* Testimonials */}
      <section className="py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="p-12 glass rounded-3xl relative">
                <div className="text-6xl font-serif absolute top-4 left-4 text-accent/20">“</div>
                <p className="text-2xl font-display mb-8 relative z-10 italic">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20" />
                  <div>
                    <p className="font-bold">{t.name}</p>
                    <p className="text-sm text-white/40">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Mastery */}
      <section className="py-20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          {['Adobe CC', 'Blender', 'Unreal Engine 5', 'Figma', 'Spline', 'Cinema 4D'].map((tool) => (
            <span key={tool} className="text-xl font-display font-bold tracking-tighter">{tool}</span>
          ))}
        </div>
      </section>

      <Footer />

      {/* Custom Cursor (Optional but adds premium feel) */}
      <div className="hidden lg:block">
        <CustomCursor />
      </div>
    </div>
  );
}

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === 'BUTTON' || (e.target as HTMLElement).tagName === 'A') {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div 
        className="fixed top-0 left-0 w-4 h-4 bg-accent rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{ 
          x: position.x - 8, 
          y: position.y - 8,
          scale: isHovering ? 2.5 : 1
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 250, mass: 0.5 }}
      />
      <motion.div 
        className="fixed top-0 left-0 w-10 h-10 border border-accent/30 rounded-full pointer-events-none z-[9998]"
        animate={{ 
          x: position.x - 20, 
          y: position.y - 20,
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0 : 1
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 200, mass: 0.8 }}
      />
    </>
  );
};

