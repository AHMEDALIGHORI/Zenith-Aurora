import { motion } from 'framer-motion';
import './Footer.css';

const links = [
  { group: 'Product', items: ['Features', 'Pricing', 'Changelog', 'Roadmap'] },
  { group: 'Company', items: ['About', 'Blog', 'Careers', 'Press'] },
  { group: 'Resources', items: ['Docs', 'Guides', 'API Ref', 'Community'] },
  { group: 'Legal', items: ['Privacy', 'Terms', 'Security', 'GDPR'] },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <motion.span
            className="footer-logo"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Zenith<span className="footer-logo-dot">.</span>
          </motion.span>
          <p className="footer-tagline">The creative platform for the next decade.</p>
        </div>

        <div className="footer-links">
          {links.map((group) => (
            <div key={group.group} className="footer-col">
              <h4 className="footer-col-title">{group.group}</h4>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>
                    <a href="#" className="footer-link">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Zenith Inc. All rights reserved.</p>
        <div className="footer-socials">
          {['𝕏', 'in', 'GH', 'YT'].map((s) => (
            <a key={s} href="#" className="footer-social">{s}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
