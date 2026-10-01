import React, { useState } from 'react';
import { Language } from '../types';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('Branding & Web');
  const [budget, setBudget] = useState('€5k - €10k');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setMessage('');
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#0f0f13] border border-white/10 rounded-2xl max-w-xl w-full p-6 md:p-8 relative shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-neutral-400 hover:text-white text-lg cursor-pointer"
          aria-label="Close dialog"
        >
          ✕
        </button>

        {isSubmitted ? (
          <div className="py-12 text-center">
            <div className="w-14 h-14 bg-orange-600/20 text-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 border border-orange-500/30">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              {lang === 'en' ? 'Message received' : 'Message bien reçu'}
            </h3>
            <p className="text-xs md:text-sm text-neutral-400 max-w-sm mx-auto mb-8">
              {lang === 'en'
                ? 'Thank you for reaching out. Our Brussels team will review your project and get back to you within 24 hours.'
                : 'Merci pour votre message. Notre équipe bruxelloise étudiera votre projet et reviendra vers vous sous 24 heures.'}
            </p>
            <button
              onClick={handleReset}
              className="bg-white text-black font-semibold text-xs px-6 py-2.5 rounded-full hover:bg-neutral-200 transition-colors cursor-pointer"
            >
              {lang === 'en' ? 'Back to website' : 'Retour au site'}
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-[11px] font-mono text-orange-500 font-semibold tracking-wider uppercase block mb-1">
                EXPANCE · Brussels
              </span>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                {lang === 'en' ? "Let's talk about your project" : 'Parlons de votre projet'}
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                {lang === 'en'
                  ? 'Tell us about your brand ambition or website launch.'
                  : 'Parlez-nous de vos objectifs de marque ou de votre site web.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-medium text-neutral-400 mb-1.5">
                    {lang === 'en' ? 'Name *' : 'Nom *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Bryan Boland"
                    className="w-full bg-[#18181c] border border-white/10 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-orange-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-neutral-400 mb-1.5">
                    {lang === 'en' ? 'Email *' : 'Email *'}
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="bryan@example.com"
                    className="w-full bg-[#18181c] border border-white/10 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-orange-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-medium text-neutral-400 mb-1.5">
                    {lang === 'en' ? 'Service needed' : 'Service souhaité'}
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full bg-[#18181c] border border-white/10 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-orange-500 transition-colors cursor-pointer"
                  >
                    <option value="Branding">Branding & Identity</option>
                    <option value="Web Design">Web Design (UX/UI)</option>
                    <option value="Web Development">Web Development</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="Full Project">Full Brand & Web Launch</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-neutral-400 mb-1.5">
                    {lang === 'en' ? 'Estimated Budget' : 'Budget estimé'}
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full bg-[#18181c] border border-white/10 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-orange-500 transition-colors cursor-pointer"
                  >
                    <option value="€5k - €10k">€5,000 - €10,000</option>
                    <option value="€10k - €20k">€10,000 - €20,000</option>
                    <option value="€20k+">€20,000+</option>
                    <option value="Subsidies">Regional Subsidies / Chèques</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-medium text-neutral-400 mb-1.5">
                  {lang === 'en' ? 'Project details' : 'Détails du projet'}
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={
                    lang === 'en'
                      ? 'Tell us about your brand, timeline, and goals...'
                      : 'Parlez-nous de vos attentes, délais et besoins...'
                  }
                  className="w-full bg-[#18181c] border border-white/10 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-orange-500 transition-colors resize-none"
                />
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <span className="text-[10px] text-neutral-500">
                  shivamsharmass9897@gmail.com · Av. Louise 231
                </span>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-white hover:bg-neutral-200 text-black font-semibold text-xs px-6 py-2.5 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-50 cursor-pointer shadow-md"
                >
                  {isSubmitting
                    ? lang === 'en'
                      ? 'Sending...'
                      : 'Envoi...'
                    : lang === 'en'
                    ? 'Send message'
                    : 'Envoyer le message'}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
