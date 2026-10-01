import React, { useState } from 'react';

interface CtaSectionProps {
  os?: 'windows' | 'mac';
  onOpenDownload?: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    channel: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 px-5 bg-[#FDFBF5]">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left Column: Heading & Contact Info */}
        <div className="lg:col-span-5 text-left pt-2">
          <h2 className="font-editorial text-[36px] sm:text-[46px] lg:text-[52px] font-normal text-[#1a1a1a] leading-[1.15] mb-4">
            Get in touch
          </h2>
          <p className="text-base text-[#666] font-sans leading-relaxed mb-8">
            Have a channel, podcast, or creator brand you want to scale? Drop us a note and we’ll review your details within 24 hours.
          </p>

          <div className="space-y-4 pt-4 border-t border-[#e8e4dc]/80 font-sans text-sm">
            <div>
              <span className="block text-xs uppercase tracking-wider text-[#999] mb-1 font-medium">Direct email</span>
              <a href="mailto:hello@creatorstudio.com" className="text-[#1a1a1a] hover:underline font-medium">
                hello@creatorstudio.com
              </a>
            </div>
            <div>
              <span className="block text-xs uppercase tracking-wider text-[#999] mb-1 font-medium">Response time</span>
              <p className="text-[#444]">Usually under 24 hours</p>
            </div>
          </div>
        </div>

        {/* Right Column: Clean White Form */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-[#e8e4dc] p-6 sm:p-9 text-left shadow-xs">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-[#333] mb-1.5 font-sans">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#e2ded6] text-[#1a1a1a] placeholder-[#999] text-sm font-sans focus:outline-none focus:border-[#1a1a1a] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#333] mb-1.5 font-sans">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@domain.com"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#e2ded6] text-[#1a1a1a] placeholder-[#999] text-sm font-sans focus:outline-none focus:border-[#1a1a1a] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#333] mb-1.5 font-sans">
                  Channel or Website
                </label>
                <input
                  type="text"
                  value={formData.channel}
                  onChange={(e) => setFormData({ ...formData, channel: e.target.value })}
                  placeholder="youtube.com/@yourchannel or handle"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#e2ded6] text-[#1a1a1a] placeholder-[#999] text-sm font-sans focus:outline-none focus:border-[#1a1a1a] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#333] mb-1.5 font-sans">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="What are your goals or current bottlenecks?"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#e2ded6] text-[#1a1a1a] placeholder-[#999] text-sm font-sans focus:outline-none focus:border-[#1a1a1a] transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-5 rounded-lg bg-[#1a1a1a] hover:bg-black text-white font-medium text-sm transition-colors cursor-pointer text-center font-sans"
                >
                  Send message
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-8">
              <h3 className="font-editorial text-2xl text-[#1a1a1a] mb-2 font-normal">
                Message sent
              </h3>
              <p className="text-sm text-[#666] font-sans leading-relaxed mb-6">
                Thanks for reaching out! We’ll get back to you at <strong>{formData.email}</strong> within 24 hours.
              </p>
              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({ name: '', email: '', channel: '', message: '' });
                }}
                className="text-xs text-[#666] hover:text-[#1a1a1a] underline cursor-pointer"
              >
                Send another message
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
