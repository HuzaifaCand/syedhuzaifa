import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

export default function About() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      href: "https://github.com/HuzaifaCand",
      ariaLabel: "Visit GitHub profile",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      href: "#",
      ariaLabel: "Visit LinkedIn profile",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      href: "#",
      ariaLabel: "Visit Instagram profile",
    },
    {
      name: "Email",
      icon: FaEnvelope,
      href: "mailto:sh.syed.huzaifa@gmail.com",
      ariaLabel: "Send an email",
    },
  ];

  return (
    <section id="about" className="py-24 bg-mainBg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Section Title */}
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white">
              Let's Connect
            </h2>
            <p className="text-base sm:text-lg text-[#A9A9A9] font-light">
              Feel free to reach out for collaborations or just a friendly chat
            </p>
          </div>

          {/* About Text */}
          <div className="space-y-4 text-[#808080] font-light leading-relaxed">
            <p className="text-sm sm:text-base">
              I'm passionate about creating meaningful digital experiences that
              solve real problems. With a focus on clean code and intuitive
              design, I strive to build applications that users love.
            </p>
            <p className="text-sm sm:text-base">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center items-center gap-6 pt-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  className="group relative"
                >
                  <div className="bg-white p-4 rounded-full transition-all duration-300 group-hover:bg-[#E5E5E5] group-hover:scale-110">
                    <Icon className="text-black" size={24} />
                  </div>
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                    {social.name}
                  </span>
                </a>
              );
            })}
          </div>

          {/* Footer Note */}
          <div className="pt-8 border-t border-[#373737]">
            <p className="text-xs sm:text-sm text-[#606060]">
              © 2026 Syed Huzaifa
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
