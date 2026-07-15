import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="py-24 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 relative">
          <h1 className="text-5xl font-black uppercase tracking-widest relative z-10 inline-block bg-background px-8">Contact Us</h1>
          <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-[#333] -z-0" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold uppercase tracking-wider text-primary mb-6">Get in Touch</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                We value your feedback and are here to assist you. If you have any questions, comments, or inquiries regarding our products, please don&apos;t hesitate to get in touch with us. Our dedicated customer support team is ready to provide you with the assistance you need!
              </p>
            </div>
            
            <div className="space-y-8 border-t border-[#333] pt-8">
              <div>
                <p className="text-gray-500 uppercase text-sm font-bold tracking-widest mb-2">Support Center</p>
                <a href="tel:021403346" className="text-3xl font-bold text-white hover:text-primary transition-colors">
                  021 403 346
                </a>
              </div>
              
              <div>
                <p className="text-gray-500 uppercase text-sm font-bold tracking-widest mb-2">Email</p>
                <a href="mailto:info@greasemonkeyshop.co.nz" className="text-3xl font-bold text-white hover:text-primary transition-colors">
                  info@greasemonkeyshop.co.nz
                </a>
              </div>
              
              <div>
                <p className="text-gray-500 uppercase text-sm font-bold tracking-widest mb-2">Our Address</p>
                <address className="not-italic text-lg text-white font-medium">
                  11 Auburn Street,<br />
                  Takapuna Auckland 0622
                </address>
              </div>
            </div>
          </div>

          <div className="bg-[#111] p-8 border border-[#333]">
            <form className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-bold uppercase tracking-wider text-gray-400">Name</label>
                <input 
                  type="text" 
                  id="name"
                  className="w-full bg-[#1a1a1a] border border-[#333] px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold uppercase tracking-wider text-gray-400">Email Address</label>
                <input 
                  type="email" 
                  id="email"
                  className="w-full bg-[#1a1a1a] border border-[#333] px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold uppercase tracking-wider text-gray-400">Message</label>
                <textarea 
                  id="message"
                  rows={6}
                  className="w-full bg-[#1a1a1a] border border-[#333] px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>
              <Button size="lg" className="w-full uppercase font-bold tracking-widest py-6 rounded-none">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
