export const research = {
  eyebrow: 'Research pillars',
  heading: ['Questions that drive', 'our research'],
  intro:
    'Each research line has its own scientific pressure point, but the shared ambition is the same: faster, clearer and more reliable biological insight from images.',
  tabs: [
    { id: 'research', label: 'Research' },
    { id: 'software', label: 'Software & Tools' },
  ],
  researchCards: [
    {
      id: 'optical',
      label: 'Optical Imaging',
      question:
        'How can we visualize entire living organisms in 3D without sacrificing speed or resolution?',
      body: 'We develop fast, computational optical imaging methods for small organisms and marine biological systems, balancing scale, resolution and live dynamics.',
      image: '/assets/research/optical-imaging.png',
      imageAlt: 'Optical imaging research samples',
    },
    {
      id: 'cardiac',
      label: 'Cardiac MRI',
      question:
        'How can we enable 3D cardiac imaging in any patient, without the need for breath-holds?',
      body: 'We design motion-aware reconstruction strategies for robust cardiac MRI, making high-quality 3D imaging more accessible in real clinical conditions.',
      image: '/assets/research/cardiac-mri.png',
      imageAlt: 'Cardiac MRI research samples',
    },
    {
      id: 'deep-learning',
      label: 'Deep Learning',
      question: 'Can AI redefine the trade-off between scan time and image quality?',
      body: 'We use learning-based methods for reconstruction, correction and analysis, translating complex signals into trustworthy measurements.',
      image: '/assets/research/deep-learning.png',
      imageAlt: 'Deep learning research samples',
    },
  ],
  banner: {
    title: 'Methods that travel across organisms, organs and scales.',
    body: 'QBI connects marine biology, medical imaging and computational science through a shared language: images that can be reconstructed, measured and trusted.',
  },
  software: {
    eyebrow: 'Open resources',
    heading: 'Software & Educational Tools',
    intro:
      'Tools, datasets and learning resources developed at QBI — freely available for the research and educational community.',
    tools: [
      {
        id: 'qbi-recon',
        icon: 'microscope',
        category: 'Reconstruction',
        title: 'QBI-Recon',
        subtitle: 'MRI & optical image reconstruction',
        body: 'An open-source Python toolkit for iterative and learning-based image reconstruction from undersampled or noisy measurements.',
        href: 'https://github.com/QBioImaging',
      },
      {
        id: 'motion-aware',
        icon: 'activity',
        category: 'Cardiac MRI',
        title: 'MotionAware',
        subtitle: 'Cardiac motion correction',
        body: 'A framework for estimating and correcting respiratory and cardiac motion in free-breathing 3D MRI acquisitions.',
        href: 'https://github.com/QBioImaging',
      },
      {
        id: 'unroll-net',
        icon: 'brain',
        category: 'Deep Learning',
        title: 'UnrollNet',
        subtitle: 'Unrolled deep networks for imaging',
        body: 'Pre-trained models and training pipelines for algorithm-unrolled neural networks applied to MRI and optical imaging.',
        href: 'https://github.com/QBioImaging',
      },
      {
        id: 'bioimaging-101',
        icon: 'book-open',
        category: 'Educational',
        title: 'BioImaging 101',
        subtitle: 'Interactive course material',
        body: 'Jupyter notebooks and guided exercises covering the fundamentals of biological imaging, from acquisition to analysis.',
        href: 'https://github.com/QBioImaging',
      },
      {
        id: 'qbi-benchmark',
        icon: 'chart-column',
        category: 'Dataset',
        title: 'QBI Benchmark',
        subtitle: 'Open imaging benchmark suite',
        body: 'Curated datasets with ground-truth references for evaluating reconstruction quality across cardiac MRI and optical microscopy tasks.',
        href: 'https://github.com/QBioImaging',
      },
    ],
  },
}
