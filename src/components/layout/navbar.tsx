import { useState } from "react";
import { Link } from "wouter";
import { Menu, X, ChevronDown, Sparkles, ShoppingCart, Code } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold font-display tracking-tighter flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            NovaTech
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer">
            Home
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-white transition-colors outline-none">
              Services <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-slate-900 border-slate-800 text-slate-300">
              <DropdownMenuItem className="focus:bg-slate-800 focus:text-white cursor-pointer">
                <Code className="w-4 h-4 mr-2" /> Web Development
              </DropdownMenuItem>
              <DropdownMenuItem className="focus:bg-slate-800 focus:text-white cursor-pointer">
                <Sparkles className="w-4 h-4 mr-2" /> AI Automation
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/shop" className="text-sm font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-2 cursor-pointer">
            Shop <span className="px-1.5 py-0.5 rounded-full bg-primary/20 text-primary text-[10px] font-bold uppercase">New</span>
          </Link>
          
          <Link href="/portfolio" className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer">
            Portfolio
          </Link>

          <Link href="/contact" className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer">
            Contact
          </Link>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" className="border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 hover:border-slate-600">
            Log in
          </Button>
          <Button className="bg-primary hover:bg-primary/90 text-white font-medium shadow-[0_0_20px_-5px_rgba(139,92,246,0.5)]">
            Get Started
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-slate-300 hover:text-white">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-950 border-b border-slate-800 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              <Link href="/" className="text-base font-medium text-slate-300 hover:text-white cursor-pointer">
                Home
              </Link>
              <Link href="/services" className="text-base font-medium text-slate-300 hover:text-white cursor-pointer">
                Services
              </Link>
              <Link href="/shop" className="text-base font-medium text-slate-300 hover:text-white cursor-pointer">
                Shop
              </Link>
              <Link href="/portfolio" className="text-base font-medium text-slate-300 hover:text-white cursor-pointer">
                Portfolio
              </Link>
              <div className="pt-4 flex flex-col gap-3">
                <Button variant="outline" className="w-full border-slate-700 text-slate-300">Log in</Button>
                <Button className="w-full bg-primary text-white">Get Started</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
