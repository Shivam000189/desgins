import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.35 }}
      className="flex items-center gap-2.5 px-2"
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--color-primary)] text-white shadow-[0_3px_10px_rgba(100,131,84,0.3)]">
        <CheckCircle2
          size={18}
          strokeWidth={2.4}
        />
      </div>

      <div className="flex items-center gap-1">
        <span className="text-[17px] font-bold tracking-tight text-[var(--color-text-primary)]">
          Shivam
        </span>
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" />
      </div>
    </motion.div>
  );
}
