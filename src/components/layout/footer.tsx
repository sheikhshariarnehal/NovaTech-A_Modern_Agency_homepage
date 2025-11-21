import { Link } from "wouter";
import { Sparkles, Twitter, Linkedin, Github, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-xl font-bold font-display tracking-tighter flex items-center gap-2 mb-6 cursor-pointer">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                NovaTech
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Empowering businesses with next-gen technology, custom AI solutions, and premium digital tools.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-slate-500 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="font-bold text-white mb-6">Services</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link href="/services/web" className="hover:text-primary transition-colors cursor-pointer">Web Development</Link></li>
              <li><Link href="/services/mobile" className="hover:text-primary transition-colors cursor-pointer">Mobile Apps</Link></li>
              <li><Link href="/services/ai" className="hover:text-primary transition-colors cursor-pointer">AI Automation</Link></li>
              <li><Link href="/services/consulting" className="hover:text-primary transition-colors cursor-pointer">Tech Consulting</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-6">Company</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link href="/about" className="hover:text-primary transition-colors cursor-pointer">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-primary transition-colors cursor-pointer">Careers</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors cursor-pointer">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors cursor-pointer">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-6">Legal</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link href="/privacy" className="hover:text-primary transition-colors cursor-pointer">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors cursor-pointer">Terms of Service</Link></li>
              <li><Link href="/cookies" className="hover:text-primary transition-colors cursor-pointer">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">
            &copy; {new Date().getFullYear()} NovaTech Inc. All rights reserved.
          </p>
          <p className="text-slate-600 text-sm">
            Designed with <span className="text-red-500">♥</span> by Replit
          </p>
        </div>
      </div>
    </footer>
  );
}
