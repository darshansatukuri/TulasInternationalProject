import { motion, useReducedMotion } from 'framer-motion';

export default function Reveal({ children, className = '', delay = 0, as: Tag = 'div', ...props }) {
  const shouldReduceMotion = useReducedMotion();
  const MotionTag = motion[Tag];

  if (shouldReduceMotion) {
    return <Tag {...props} className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      {...props}
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12, margin: '0px 0px -36px 0px' }}
      transition={{ duration: 0.48, ease: 'easeOut', delay: delay / 1000 }}
    >
      {children}
    </MotionTag>
  );
}
