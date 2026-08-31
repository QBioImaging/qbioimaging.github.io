export const site = {
  logo: '/assets/brand/logo-qbi.png',
  logoAlt: 'Quantitative Bio-Imaging Lab',
  navTitle: 'QBI Home',
  title: 'Quantitative Bio-Imaging Lab',
  subTitle: '📍 CCMAR - Portugal',
  navLinks: [
    { href: '#about', label: 'About' },
    {
      href: '#research',
      label: 'Research',
      children: [
        { href: '#research', label: 'Research' },
        { href: '#software', label: 'Software & Tools' },
      ],
    },
    { href: '#news', label: 'Lab News' },
    { href: '#publications', label: 'Publications' },
  ],
  sideNavLinks: [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#research', label: 'Research' },
    { href: '#news', label: 'News' },
    { href: '#publications', label: 'Publications' },
    { href: '#contact', label: 'Join' },
  ],
  cta: {
    label: 'JOIN THE LAB',
    href: '#contact',
  },
}

export const social = [
  { title: 'linkedin', url: 'https://www.linkedin.com/company/quantitative-bio-imaging-lab/' },
  { title: 'instagram', url: 'https://www.instagram.com/group.qbi/' },
  { title: 'github', url: 'https://github.com/QBioImaging' },
  { title: 'send', url: 'https://www.ccmar.ualg.pt/users/tmcorreia' },
]
