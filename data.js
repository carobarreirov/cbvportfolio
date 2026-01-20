let catalog = {
    data: [
        {
            title: "Process documentation assistant with Microsoft 365 Copilot",
            category: "Consulting",
            subCategory: "Technology and automation",
            organisation: "Bardahl Mexico",
            role: "Transformation expert and solution designer",
            year: 2025,
            location: "Mexico",
            highlight: "AI assisted documentation flow using Microsoft 365 Copilot and Power Automate for quality and operational processes",
            tags: ["AI", "Microsoft 365", "Power Automate", "Manufacturing", "Documentation"]
        },
        {
            title: "Workforce strategy for Csepeli Kikötő Kft",
            category: "Consulting",
            subCategory: "People and workforce",
            organisation: "Csepeli Kikötő Kft",
            role: "Strategy consultant",
            year: 2025,
            location: "Budapest, Hungary",
            highlight: "Workforce transition, knowledge transfer and cultural evolution strategy for operators after infrastructure investments",
            tags: ["Logistics", "Workforce", "Strategy", "Europe"]
        },
        {
            title: "Agility in Latin America report",
            category: "Consulting",
            subCategory: "Research and publishing",
            organisation: "MIT Technology Review in Spanish and NTT Data",
            role: "Agile researcher and co author",
            year: 2024,
            location: "Latin America",
            highlight: "Regional report on Agile maturity with more than fifty companies and three hundred responses",
            tags: ["Agile", "Research", "Latin America", "Consulting"]
        },
        {
            title: "Regional Agile ecosystem for a Central American bank",
            category: "Consulting",
            subCategory: "Organisational transformation",
            organisation: "Confidential financial institution",
            role: "Senior Agile Consultant",
            year: 2023,
            location: "Central America",
            highlight: "Regional change roadmap integrating agile governance and cross functional collaboration across six companies",
            tags: ["Agile", "Banking", "Governance", "Leadership", "Latin America"]
        },
        {
            title: "Digital Transformation Office design for insurance unit",
            category: "Consulting",
            subCategory: "Technology and digital change",
            organisation: "Confidential Mexican bank and insurance group",
            role: "Senior Agile Consultant",
            year: 2023,
            location: "Mexico",
            highlight: "Design of a digital transformation office with roles, governance and integration strategies for new digital services",
            tags: ["Digital transformation", "Insurance", "Banking", "Governance"]
        },
        {
            title: "Process mapping and engineering in manufacturing",
            category: "Consulting",
            subCategory: "Operations and process optimisation",
            organisation: "Confidential manufacturing client",
            role: "Senior Agile Consultant",
            year: 2023,
            location: "Mexico",
            highlight: "Process discovery and redesign to improve flow and identify opportunities for optimisation and automation",
            tags: ["Manufacturing", "Process mapping", "Operations"]
        },
        {
            title: "Agile migration and project portfolio at Iterando",
            category: "Project and program management",
            subCategory: "Agile delivery",
            organisation: "Iterando",
            role: "Lead Project Manager",
            year: 2020,
            location: "Mexico",
            highlight: "Agile migration and delivery of web and mobile projects with training for the entire organisation",
            tags: ["Agile", "Software development", "Product delivery"]
        },
        {
            title: "Agile enablement program at Red Hat Latin America",
            category: "Project and program management",
            subCategory: "Change and adoption",
            organisation: "Red Hat",
            role: "Agile Program Manager, Enablement Latin America",
            year: 2021,
            location: "Latin America",
            highlight: "Gamified agile training that transformed cross functional teams mindset and expanded business agility outreach",
            tags: ["Agile", "Training", "Red Hat", "Facilitation"]
        },
        {
            title: "MIT xPro Full Stack program course leadership",
            category: "Teaching and facilitation",
            subCategory: "Coding and software",
            organisation: "MIT xPro and Emeritus",
            role: "Course leader and learning facilitator",
            year: 2021,
            location: "Remote",
            highlight: "Guided more than one hundred and seventy professionals across seven cohorts in a thirty two week Full Stack program",
            tags: ["Teaching", "Full Stack", "JavaScript", "Scrum"]
        },
        {
            title: "Beautiful Patterns computational thinking bootcamps",
            category: "Teaching and facilitation",
            subCategory: "Women in STEM",
            organisation: "Beautiful Patterns",
            role: "Managing Director and lead instructor",
            year: 2018,
            location: "Mexico and Latin America",
            highlight: "Design and delivery of bootcamps for young women in STEM with international academic partners and cross functional teams",
            tags: ["Women in STEM", "Education", "Computational thinking", "Latin America"]
        },
        {
            title: "Corporate tech academy courses at Ubits",
            category: "Teaching and facilitation",
            subCategory: "Corporate learning",
            organisation: "Ubits",
            role: "Academic and industry expert",
            year: 2022,
            location: "Latin America",
            highlight: "Design and recording of content on user stories, Git, GitHub and web development for technology and product academies",
            tags: ["Teaching", "Git", "Web development", "Corporate learning"]
        },
        {
            title: "Web development teaching at Universidad Panamericana",
            category: "Teaching and facilitation",
            subCategory: "University teaching",
            organisation: "Universidad Panamericana",
            role: "Technology teacher",
            year: 2017,
            location: "Mexico",
            highlight: "Flipped classroom course with a full Notion book and projects aligned with United Nations goals",
            tags: ["University", "Teaching", "Web development", "Notion"]
        },
        {
            title: "MBA research on Agile philosophy in Mexican EdTech",
            category: "Research and writing",
            subCategory: "Agile culture and leadership",
            organisation: "Nottingham Business School",
            role: "Researcher",
            year: 2025,
            location: "United Kingdom and Mexico",
            highlight: "Qualitative research on how agile values appear in leadership and culture in Mexican education technology firms",
            tags: ["Research", "Agile", "EdTech", "Leadership", "Qualitative"]
        },
        {
            title: "Operational strategy analysis of Stevenson Garment Dye Works",
            category: "Research and writing",
            subCategory: "Operations and supply chain",
            organisation: "Nottingham Business School",
            role: "Author",
            year: 2025,
            location: "United Kingdom",
            highlight: "Operations report comparing onshore, offshore and hybrid supply chain models using advanced operations theory",
            tags: ["Operations", "Supply chain", "Research"]
        },
        {
            title: "Strategic business planning reflective essay",
            category: "Research and writing",
            subCategory: "Leadership reflection",
            organisation: "Nottingham Business School",
            role: "Author",
            year: 2024,
            location: "United Kingdom",
            highlight: "Reflection on leadership behaviour, boundaries and team dynamics during a strategic consultancy project",
            tags: ["Reflection", "Leadership", "Strategy"]
        },

        // New entries from Nottingham Business School consultancy program
        {
            title: "Cultural transformation diagnosis for a technology distributor",
            category: "Consulting",
            subCategory: "Organisational transformation",
            organisation: "Technology distribution company",
            role: "MBA consultant",
            year: 2025,
            location: "United Kingdom",
            highlight: "Diagnosed cultural and operational barriers and designed a change roadmap aligning leadership, communication and incentives",
            tags: ["Culture", "Change management", "Technology", "Consulting"]
        },
        {
            title: "Workforce and process transition strategy in logistics and infrastructure",
            category: "Consulting",
            subCategory: "People and workforce",
            organisation: "Logistics and infrastructure operator",
            role: "MBA consultant",
            year: 2025,
            location: "Hungary",
            highlight: "Workforce transition and knowledge transfer strategy with a capability development framework for ageing operator teams",
            tags: ["Logistics", "Workforce", "Knowledge transfer", "Europe"]
        },
        {
            title: "Strategic planning for an education and coaching organisation",
            category: "Consulting",
            subCategory: "Strategy and planning",
            organisation: "Education and coaching company",
            role: "MBA consultant",
            year: 2025,
            location: "United Kingdom",
            highlight: "Three year strategic plan including vision, mission, objectives and brand positioning for education and coaching services",
            tags: ["Education", "Coaching", "Strategy", "Brand"]
        },

        // New entries from freelance transformation expert work
        {
            title: "Agility training for manufacturing and chemicals",
            category: "Consulting",
            subCategory: "Leadership and capability building",
            organisation: "Manufacturing and chemicals clients",
            role: "Transformation expert",
            year: 2025,
            location: "United States and Mexico",
            highlight: "Leadership and agility training for production and management teams that improved collaboration and decision cycles",
            tags: ["Agile", "Manufacturing", "Training", "Leadership"]
        },
        {
            title: "Recruitment intelligence pilot with Copilot in aviation and infrastructure",
            category: "Consulting",
            subCategory: "Technology and automation",
            organisation: "Aviation and infrastructure company",
            role: "Transformation expert",
            year: 2025,
            location: "Colombia",
            highlight: "Copilot powered recruitment pilot that reduced manual screening and enabled more ethical and data informed hiring decisions",
            tags: ["AI", "Recruitment", "Aviation", "Automation"]
        },

        // Additional Opinno transformation projects
        {
            title: "Process reengineering and value flow diagnostics in banking",
            category: "Consulting",
            subCategory: "Operations and process optimisation",
            organisation: "Leading Central American bank",
            role: "Senior Agile Consultant",
            year: 2023,
            location: "Central America",
            highlight: "Redesigned core banking processes and structure through value chain mapping with lean and agile principles",
            tags: ["Banking", "Process optimisation", "Value chain", "Lean", "Agile"]
        },
        {
            title: "Organisational effectiveness and redesign in banking",
            category: "Consulting",
            subCategory: "Organisational transformation",
            organisation: "Leading Central American bank",
            role: "Senior Agile Consultant",
            year: 2023,
            location: "Central America",
            highlight: "Comprehensive departmental restructuring to streamline coordination and increase productivity by more than twenty five percent",
            tags: ["Banking", "Organisation design", "Productivity"]
        },
        {
            title: "Leadership and agility development across Latin America",
            category: "Consulting",
            subCategory: "Leadership and capability building",
            organisation: "Multiple corporate clients",
            role: "Senior Agile Consultant",
            year: 2023,
            location: "Latin America",
            highlight: "Mentored more than one hundred professionals in ten agile teams, reinforcing leadership adaptability and collaboration",
            tags: ["Leadership", "Agile", "Coaching", "Latin America"]
        },

        // Research and early professional projects
        {
            title: "Technology strategy and innovation research at MIT",
            category: "Research and writing",
            subCategory: "Technology and education",
            organisation: "Massachusetts Institute of Technology, School of Engineering",
            role: "Visiting research fellow",
            year: 2019,
            location: "Cambridge, United States",
            highlight: "Research on technology strategy, innovation management and software development applied to educational initiatives",
            tags: ["Research", "Innovation", "Education", "Technology"]
        },
        {
            title: "Educational technology platforms for Mexican public education",
            category: "Project and program management",
            subCategory: "EdTech delivery",
            organisation: "Pixframe Studios and Nyx Technology Solutions",
            role: "Project Manager",
            year: 2019,
            location: "Mexico",
            highlight: "Led education technology projects such as Tripulantes de la lectura for the national education authority",
            tags: ["EdTech", "Public sector", "Project management", "Mexico"]
        },

        // Community and leadership
        {
            title: "ACM W student chapter at Universidad Panamericana",
            category: "Project and program management",
            subCategory: "Women in STEM",
            organisation: "Universidad Panamericana",
            role: "Co founder and vice chair",
            year: 2018,
            location: "Mexico",
            highlight: "Established the first ACM W student chapter in Latin America and achieved global recognition for school service",
            tags: ["Women in STEM", "Community", "Leadership", "ACM"]
        },
        {
            title: "Project management for serious videogames and IGDA chapter",
            category: "Project and program management",
            subCategory: "Student leadership",
            organisation: "Person Computer Interaction Laboratory, Universidad Panamericana",
            role: "Project management lead",
            year: 2019,
            location: "Mexico",
            highlight: "Directed project management for serious games and supported the creation of the first IGDA chapter at the university",
            tags: ["Games", "Project management", "Education", "Community"]
        }
    ]
};
