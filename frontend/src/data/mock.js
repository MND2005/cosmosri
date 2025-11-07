// Mock data for Cosmo software company website

export const companyInfo = {
  name: "Cosmo",
  tagline: "Transforming Ideas Into Digital Reality",
  description: "We craft cutting-edge web applications, mobile solutions, and enterprise software that propel businesses into the future.",
  contact: {
    email: "info@cosmosri.com",
    phone: "+94 71 247 6878",
    address: "Second Floor, Gagana city center, Monaragala, Sri Lanka.",
  }
};

export const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Modern, responsive web applications built with the latest technologies and frameworks.",
    icon: "Globe",
    features: ["React & Next.js", "Progressive Web Apps", "E-commerce Solutions", "Custom CMS"]
  },
  {
    id: 2,
    title: "Mobile Development",  
    description: "Native and cross-platform mobile apps that deliver exceptional user experiences.",
    icon: "Smartphone",
    features: ["iOS & Android", "React Native", "Flutter", "App Store Optimization"]
  },
  {
    id: 3,
    title: "Enterprise Solutions",
    description: "Scalable enterprise software solutions designed to streamline business operations.",
    icon: "Building2",
    features: ["Cloud Architecture", "API Development", "Database Design", "System Integration"]
  },
  {
    id: 4,
    title: "AI Integration",
    description: "Intelligent automation and AI-powered features to give your business a competitive edge.",
    icon: "Brain",
    features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
  }
];

export const stats = [
  { label: "Projects Delivered", value: "30+" },
  { label: "Happy Clients", value: "25+" },
  { label: "Years Experience", value: "3+" },
  { label: "Team Members", value: "20+" }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CTO, TechFlow Inc",
    content: "Cosmo transformed our legacy systems into modern, scalable solutions. Their expertise in enterprise architecture is unmatched.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder, StartupX",
    content: "The mobile app they developed for us exceeded all expectations. Clean code, beautiful design, and flawless performance.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director, GrowthCo",
    content: "Their web development team delivered our e-commerce platform on time and within budget. Exceptional communication throughout.",
    rating: 5
  }
];

export const team = [
  {
    id: 1,
    name: "Tharindu C. Herath",
    role: "CEO & Founder",
    bio: "Visionary leader with 20+ years in software architecture and business strategy.",
    image: "/ceo.jpg"
  },
  {
    id: 2,
    name: "Manuja Niroshan",
    role: "Director",
    bio: "Technical architect specializing in scalable cloud solutions and AI integration.",
    image: "/manuja.jpg"
  },
  {
    id: 3,
    name: "Dinusha Madushanka",
    role: "Director",
    bio: "Full-stack engineer with expertise in modern web technologies and mobile development.",
    image: "/dinusha.jpg"
  }
];

// Electrical items data
export const electricalItems = [
  {
    id: 1,
    name: "LED Smart Bulb",
    description: "Energy-efficient LED bulb with smart connectivity and dimming controls.",
    price: "Rs. 7,500",
    image: "https://i0.wp.com/catchme.lk/wp-content/uploads/smart-wifi-bulb-9w-16315097412213.webp",
    features: ["Wi-Fi Enabled", "Dimmable", "Color Changing", "Voice Control"]
  },
  {
    id: 2,
    name: "Smart Switch",
    description: "Intelligent wall switch with remote control and scheduling features.",
    price: "Rs. 13,000",
    image: "https://static-01.daraz.lk/p/ab2d6f05c09be527faee8937945add84.jpg",
    features: ["Mobile App Control", "Timer Function", "Energy Monitoring", "Voice Assistant"]
  },
  {
    id: 3,
    name: "Power Strip",
    description: "Surge-protected power strip with multiple outlets and USB ports.",
    price: "Rs. 11,200",
    image: "https://images-cdn.ubuy.co.in/636c32072e77d3110b13a074-metal-8-outlet-mountable-power-strip.jpg",
    features: ["Surge Protection", "6 Outlets", "4 USB Ports", "Flat Plug Design"]
  },
  {
    id: 4,
    name: "Smart Outlet",
    description: "WiFi-enabled outlet that can be controlled remotely and monitor energy usage.",
    price: "Rs. 9,300",
    image: "https://generalpower.lk/wp-content/uploads/2024/08/JJ.png",
    features: ["Energy Monitoring", "Scheduling", "Remote Control", "Child Safety"]
  },
  {
    id: 5,
    name: "LED Strip Lights",
    description: "Flexible RGB LED strip lights with music synchronization and app control.",
    price: "Rs. 18,400",
    image: "https://img.drz.lazcdn.com/static/lk/p/7fe70e17bf892b020b708dc12ebe6c6b.jpg_720x720q80.jpg",
    features: ["16 Million Colors", "Music Sync", "App Control", "Cuttable Design"]
  },
  {
    id: 6,
    name: "Smart Thermostat",
    description: "Programmable thermostat with learning capabilities and energy savings.",
    price: "Rs. 48,500",
    image: "https://m.media-amazon.com/images/I/61bR4JHBp1L._AC_SL1500_.jpg",
    features: ["Learning Algorithm", "Energy Reports", "Geofencing", "Multi-Zone Control"]
  }
];

export const contactForm = {
  fields: [
    { name: "name", label: "Full Name", type: "text", required: true },
    { name: "email", label: "Email Address", type: "email", required: true },
    { name: "company", label: "Company", type: "text", required: false },
    { name: "project", label: "Project Type", type: "select", required: true, options: [
      "Web Development",
      "Mobile Development", 
      "Enterprise Solutions",
      "AI Integration",
      "Other"
    ]},
    { name: "budget", label: "Budget Range", type: "select", required: false, options: [
      "Under $10k",
      "$10k - $50k",
      "$50k - $100k",
      "$100k+"
    ]},
    { name: "message", label: "Project Details", type: "textarea", required: true }
  ]
};