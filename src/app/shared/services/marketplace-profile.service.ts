import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  MarketplaceProfile,
  PortfolioItem,
  ProfileKind,
  ProfileProductItem,
  ProfileServiceItem,
  VerificationTier
} from '../models/marketplace-profile.model';
import { Review } from '../models/review.model';

const SEED_PROFILES: MarketplaceProfile[] = [
  {
    id: 'p1',
    slug: 'sipho-carpentry',
    kind: 'INDIVIDUAL',
    name: 'Sipho Mthembu',
    headline: 'Master Carpenter & Custom Woodwork Specialist',
    bio: 'Over 12 years creating handcrafted solid wood furniture, bespoke kitchen cabinetry, fitted wardrobes, and timber repairs across Soweto and Greater Johannesburg.',
    location: 'Soweto, Johannesburg',
    phone: '+27 82 450 1928',
    whatsapp: '+27 82 450 1928',
    email: 'sipho.woodcraft@gmail.com',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=1200&auto=format&fit=crop&q=80',
    coverColor: '#174a35',
    specialties: ['Custom Furniture', 'Fitted Kitchens', 'Wood Repairs', 'TV Media Walls', 'Shelving Units'],
    verification: ['PHONE', 'ID', 'CERTIFIED', 'COMMUNITY_VOUCHED'],
    openingHours: 'Mon–Sat · 07:30 – 17:30',
    establishedYear: 2014,
    responseRate: 'Under 1 hour',
    products: 4,
    services: 4,
    portfolio: [
      {
        id: 'w1',
        title: 'Modern Floating TV Media Unit',
        description: 'Custom wall-mounted media unit made from solid Kiaat wood with warm integrated LED backlighting and hidden cable channels.',
        imageUrl: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&auto=format&fit=crop&q=80',
        category: 'Furniture',
        completedDate: 'July 2026',
        clientFeedback: 'Sipho transformed our living room completely. Top-tier craftsmanship!'
      },
      {
        id: 'w2',
        title: 'Complete Kitchen Cabinet Renovation',
        description: 'Custom shaker-style cabinet doors, hardwood countertops, and soft-close drawer slides installed in Orlando West.',
        imageUrl: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&auto=format&fit=crop&q=80',
        category: 'Kitchens',
        completedDate: 'May 2026',
        clientFeedback: 'Finished on time and very neat. Highly recommended.'
      },
      {
        id: 'w3',
        title: '8-Seater Hardwood Dining Table',
        description: 'Hand-sanded solid Oregon pine dining table with matching custom bench seating.',
        imageUrl: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?w=800&auto=format&fit=crop&q=80',
        category: 'Furniture',
        completedDate: 'March 2026'
      }
    ],
    servicesOffered: [
      {
        id: 's1',
        title: 'Custom Built-in Wardrobes',
        description: 'Floor-to-ceiling fitted bedroom cupboards with customizable shelving, hanging rails, and mirror doors.',
        startingPrice: 3500,
        category: 'Carpentry',
        turnaround: '3–5 days',
        isPopular: true
      },
      {
        id: 's2',
        title: 'Bespoke TV Floating Wall Units',
        description: 'Designer wooden media walls with cable management and optional LED illumination.',
        startingPrice: 2200,
        category: 'Furniture',
        turnaround: '2–3 days',
        isPopular: true
      },
      {
        id: 's3',
        title: 'Door & Window Frame Hanging & Repair',
        description: 'Precision timber door fitting, lock mortising, and wooden window frame repairs.',
        startingPrice: 450,
        category: 'Repairs',
        turnaround: 'Same day'
      },
      {
        id: 's4',
        title: 'Table & Furniture Restoration',
        description: 'Sand-down, stain, seal, and varnish for weathered or damaged antique and modern wooden tables.',
        startingPrice: 850,
        category: 'Restoration',
        turnaround: '2 days'
      }
    ],
    productsOffered: [
      {
        id: 'p101',
        title: 'Solid Kiaat Coffee Table',
        description: 'Handcrafted solid Kiaat wood coffee table with matte black steel hairpin legs.',
        price: 1850,
        category: 'Furniture',
        imageUrl: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=600&auto=format&fit=crop&q=80',
        inStock: true
      },
      {
        id: 'p102',
        title: 'Floating Wall Shelf Set (3-Piece)',
        description: 'Stained pine floating shelves with invisible wall mounting brackets included.',
        price: 650,
        category: 'Decor',
        imageUrl: 'https://images.unsplash.com/photo-1594040226829-7f251ab46d80?w=600&auto=format&fit=crop&q=80',
        inStock: true
      }
    ],
    reviews: [
      {
        id: 'r1',
        author: 'Nomsa Khumalo',
        rating: 5,
        comment: 'Excellent workmanship and very clear communication from start to finish. He arrived on time and cleaned up afterwards.',
        createdAt: '2026-08-20'
      },
      {
        id: 'r2',
        author: 'Kagiso Moloi',
        rating: 5,
        comment: 'Sipho built our dining table and it is the centerpiece of our house now. Very solid and beautifully finished.',
        createdAt: '2026-08-04'
      },
      {
        id: 'r3',
        author: 'Dineo Radebe',
        rating: 4,
        comment: 'Great work on our fitted cupboards. Neat work and fair pricing.',
        createdAt: '2026-07-19'
      }
    ]
  },
  {
    id: 'b1',
    slug: 'mama-zola-kitchen',
    kind: 'BUSINESS',
    name: 'Mama Zola Kitchen & Catering',
    headline: 'Authentic Local Catering, Savory Platters & Event Feasts',
    bio: 'Registered community catering enterprise specializing in traditional South African feasts, corporate snack platters, spit braais, and celebration cakes for up to 500 guests.',
    location: 'Tembisa, Gauteng',
    phone: '+27 71 889 2201',
    whatsapp: '+27 71 889 2201',
    email: 'orders@mamazolakitchen.co.za',
    avatar: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=300&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=1200&auto=format&fit=crop&q=80',
    coverColor: '#1e5e3e',
    specialties: ['Corporate Catering', 'Party Platters', 'Traditional Feasts', 'Wedding Meals', 'Custom Cakes'],
    verification: ['PHONE', 'ID', 'CERTIFIED', 'COMMUNITY_VOUCHED'],
    openingHours: 'Mon–Sat · 06:30 – 19:00 (Sunday Orders By Booking)',
    establishedYear: 2018,
    responseRate: 'Within 30 mins',
    products: 6,
    services: 3,
    portfolio: [
      {
        id: 'w4',
        title: '150-Guest Wedding Banquet in Midrand',
        description: '3-course traditional and contemporary banquet featuring slow-cooked beef stew, roasted chicken, chakalaka, and gourmet sides.',
        imageUrl: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=800&auto=format&fit=crop&q=80',
        category: 'Weddings',
        completedDate: 'August 2026',
        clientFeedback: 'Everyone praised the food. Hot, fresh, and plenty for all guests!'
      },
      {
        id: 'w5',
        title: 'Corporate Executive Finger Lunch Platter Spread',
        description: 'Hot and cold gourmet platters for 80 attendees with samosas, chicken skewers, sliders, and fresh fruit skewers.',
        imageUrl: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=800&auto=format&fit=crop&q=80',
        category: 'Corporate',
        completedDate: 'June 2026'
      }
    ],
    servicesOffered: [
      {
        id: 's5',
        title: 'Full Event Catering Package (Per Person)',
        description: 'Complete menu with 2 meats, 3 starches, 3 salads, plus chafing dishes, serving staff, and setup.',
        startingPrice: 165,
        category: 'Catering',
        turnaround: 'Book 3 days ahead',
        isPopular: true
      },
      {
        id: 's6',
        title: 'Gourmet Finger Food & Meat Platters',
        description: 'Freshly prepared hot savory platters (serves 8–10 people per platter).',
        startingPrice: 450,
        category: 'Platters',
        turnaround: '24hr notice',
        isPopular: true
      },
      {
        id: 's7',
        title: 'Traditional Funeral / Memorial Service Food Supply',
        description: 'Reliable, respectful, on-time bulk cooking and delivery service for community gatherings.',
        startingPrice: 3200,
        category: 'Community',
        turnaround: 'Emergency 24hr availability'
      }
    ],
    productsOffered: [
      {
        id: 'p103',
        title: 'Mama Zola Artisan Chakalaka Jars (3-Pack)',
        description: 'Home-made spicy vegetable relish prepared with fresh farm peppers and secret spices.',
        price: 120,
        category: 'Food Products',
        imageUrl: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&auto=format&fit=crop&q=80',
        inStock: true
      },
      {
        id: 'p104',
        title: 'Celebration Red Velvet Drip Cake (8-Inch)',
        description: 'Freshly baked tiered cake with cream cheese frosting, customized lettering, and toppings.',
        price: 480,
        category: 'Bakery',
        imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=80',
        inStock: true
      }
    ],
    reviews: [
      {
        id: 'r4',
        author: 'Thabo Maseko',
        rating: 5,
        comment: 'Our family celebration was a massive success thanks to Mama Zola Kitchen. The beef stew was tender and full of flavor!',
        createdAt: '2026-08-16'
      },
      {
        id: 'r5',
        author: 'Lerato Ndlovu',
        rating: 5,
        comment: 'Ordered 5 platters for an office workshop in Tembisa. Food arrived on time, hot and wonderfully presented.',
        createdAt: '2026-07-28'
      }
    ]
  },
  {
    id: 'p2',
    slug: 'khaya-spark-electrical',
    kind: 'INDIVIDUAL',
    name: 'Khayalethu Dlamini',
    headline: 'Certified Wireman & Solar / Backup Power Electrician',
    bio: 'Licensed electrician with Department of Labour Wireman’s License. Specialising in residential DB board wiring, solar inverter installations, fault finding, and CoC certification.',
    location: 'Khayelitsha, Cape Town',
    phone: '+27 83 992 4110',
    whatsapp: '+27 83 992 4110',
    email: 'khaya.spark@gmail.com',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&auto=format&fit=crop&q=80',
    coverColor: '#134e38',
    specialties: ['Solar Inverters', 'DB Board Upgrades', 'Fault Finding', 'CoC Certificates', 'Generator Switchovers'],
    verification: ['PHONE', 'ID', 'CERTIFIED', 'COMMUNITY_VOUCHED'],
    openingHours: 'Mon–Sun · 07:00 – 20:00 (Emergency Call-Outs 24/7)',
    establishedYear: 2016,
    responseRate: 'Under 15 mins',
    products: 2,
    services: 4,
    portfolio: [
      {
        id: 'w6',
        title: '5kW Hybrid Solar Inverter + Lithium Battery Setup',
        description: 'Clean wall-mounted solar inverter system with automated changeover switch and surge protection in Harare, Khayelitsha.',
        imageUrl: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?w=800&auto=format&fit=crop&q=80',
        category: 'Solar & Backup',
        completedDate: 'August 2026',
        clientFeedback: 'Powers our entire house through load shedding without a flicker. Very tidy work.'
      },
      {
        id: 'w7',
        title: 'Residential Main DB Board Overhaul & Earthing',
        description: 'Complete replacement of burnt circuit breakers, new earth leakage relay, and neat labeling.',
        imageUrl: 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?w=800&auto=format&fit=crop&q=80',
        category: 'DB Boards',
        completedDate: 'July 2026'
      }
    ],
    servicesOffered: [
      {
        id: 's8',
        title: 'Solar & Inverter System Installation',
        description: 'Professional setup of 3kW, 5kW, or 8kW inverters, lithium batteries, and DC disconnects.',
        startingPrice: 2800,
        category: 'Solar',
        turnaround: '1–2 days',
        isPopular: true
      },
      {
        id: 's9',
        title: 'Electrical Compliance Certificate (CoC)',
        description: 'Full residential electrical inspection, testing, and official Certificate of Compliance issuance.',
        startingPrice: 950,
        category: 'Compliance',
        turnaround: '24 hours',
        isPopular: true
      },
      {
        id: 's10',
        title: 'Emergency Power Tripping & Fault Finding',
        description: 'Diagnosis and repair of tripping earth leakage, short circuits, and damaged wiring.',
        startingPrice: 400,
        category: 'Repairs',
        turnaround: 'Immediate dispatch'
      }
    ],
    productsOffered: [
      {
        id: 'p105',
        title: 'Heavy Duty Surge Protector Plug with Indicator',
        description: 'Multi-stage surge protection for refrigerators, TVs, and sensitive appliances.',
        price: 260,
        category: 'Electrical Supplies',
        imageUrl: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=600&auto=format&fit=crop&q=80',
        inStock: true
      }
    ],
    reviews: [
      {
        id: 'r6',
        author: 'Sive Mbeki',
        rating: 5,
        comment: 'Khaya is a true professional. He diagnosed our tripping DB board in 20 minutes when two previous handymen failed. Certified and trustworthy.',
        createdAt: '2026-08-22'
      },
      {
        id: 'r7',
        author: 'Vuyokazi Mtati',
        rating: 5,
        comment: 'Installed our 5kVA backup system seamlessly. Gives clear advice on battery care.',
        createdAt: '2026-08-01'
      }
    ]
  },
  {
    id: 'b2',
    slug: 'kasi-fresh-auto-detailers',
    kind: 'BUSINESS',
    name: 'KasiFresh Auto Detailing & Mobile Wash',
    headline: 'High-Precision Vehicle Detailing, Ceramic Coatings & Headlight Restoration',
    bio: 'Professional vehicle grooming workshop and mobile detailing team using high-end foam cannons, dual-action polishers, steam interior cleaning, and protective ceramic finishes.',
    location: 'Umlazi, Durban',
    phone: '+27 84 551 7733',
    whatsapp: '+27 84 551 7733',
    email: 'info@kasifreshauto.co.za',
    avatar: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=300&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=1200&auto=format&fit=crop&q=80',
    coverColor: '#246949',
    specialties: ['Paint Correction', 'Interior Deep Clean', 'Ceramic Coating', 'Headlight Polish', 'Engine Bay Wash'],
    verification: ['PHONE', 'ID', 'CERTIFIED'],
    openingHours: 'Mon–Sat · 07:00 – 18:00 (Sunday Bookings)',
    establishedYear: 2020,
    responseRate: 'Under 1 hour',
    products: 3,
    services: 4,
    portfolio: [
      {
        id: 'w8',
        title: 'Full 2-Stage Paint Correction on VW Golf GTI',
        description: 'Swirl mark removal, clay bar decontamination, machine polish, and 12-month ceramic sealant applied.',
        imageUrl: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&auto=format&fit=crop&q=80',
        category: 'Detailing',
        completedDate: 'August 2026',
        clientFeedback: 'Car looks showroom fresh. The gloss level is unbelievable!'
      },
      {
        id: 'w9',
        title: 'Complete Interior Steam Extraction & Leather Conditioning',
        description: 'Deep stain removal from seats and carpets, dashboard UV protection, and odor neutralisation.',
        imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop&q=80',
        category: 'Interior',
        completedDate: 'July 2026'
      }
    ],
    servicesOffered: [
      {
        id: 's11',
        title: 'Full Signature Valet (Interior + Exterior)',
        description: 'Snow foam wash, wheel acid clean, iron fallout remover, steam extraction seats, engine bay wipe, wax finish.',
        startingPrice: 650,
        category: 'Valet',
        turnaround: '3–4 hours',
        isPopular: true
      },
      {
        id: 's12',
        title: 'Machine Polish & Scratch Removal',
        description: 'Dual action buffing to eliminate surface scratches and bring out deep vehicle gloss.',
        startingPrice: 950,
        category: 'Paint Care',
        turnaround: 'Same day',
        isPopular: true
      },
      {
        id: 's13',
        title: 'Headlight Lens Clarity Restoration',
        description: 'Wet sanding and UV clear seal to transform yellow, cloudy headlights back to crystal clear.',
        startingPrice: 280,
        category: 'Restoration',
        turnaround: '45 mins'
      }
    ],
    productsOffered: [
      {
        id: 'p106',
        title: 'KasiFresh Ultra Foam Car Shampoo (1L)',
        description: 'PH-neutral high suds formula safe on ceramic coatings and waxes with cherry fragrance.',
        price: 135,
        category: 'Car Care',
        imageUrl: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=600&auto=format&fit=crop&q=80',
        inStock: true
      }
    ],
    reviews: [
      {
        id: 'r8',
        author: 'Bongani Sithole',
        rating: 5,
        comment: 'Best auto detailing in Umlazi. They took care of my bakkie and the interior smells brand new. Will be a regular.',
        createdAt: '2026-08-18'
      },
      {
        id: 'r9',
        author: 'Zinhle Cele',
        rating: 5,
        comment: 'Great value for money. Very polite team and excellent attention to detail.',
        createdAt: '2026-07-22'
      }
    ]
  },
  {
    id: 'p3',
    slug: 'gogo-lindi-tailoring',
    kind: 'INDIVIDUAL',
    name: 'Lindiwe Buthelezi',
    headline: 'Traditional Attire, Bespoke Dresses & Tailoring Artisan',
    bio: 'Renowned fashion designer and seamstress crafting bespoke Shweshwe wedding garments, modern Afrocentric suits, graduation attire, and clothing alterations in Mamelodi.',
    location: 'Mamelodi, Pretoria',
    phone: '+27 76 331 9902',
    whatsapp: '+27 76 331 9902',
    email: 'lindi.couture@gmail.com',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1200&auto=format&fit=crop&q=80',
    coverColor: '#1a563b',
    specialties: ['Traditional Attire', 'Shweshwe Dresses', 'Suit Tailoring', 'Alterations', 'Graduation Outfits'],
    verification: ['PHONE', 'ID', 'COMMUNITY_VOUCHED'],
    openingHours: 'Mon–Sat · 08:30 – 17:00',
    establishedYear: 2011,
    responseRate: 'Under 2 hours',
    products: 5,
    services: 3,
    portfolio: [
      {
        id: 'w10',
        title: 'Modern Blue Shweshwe 2-Piece Bridal Ensemble',
        description: 'Hand-tailored traditional wedding gown with intricate beadwork trim and matching headwrap.',
        imageUrl: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&auto=format&fit=crop&q=80',
        category: 'Bridal',
        completedDate: 'July 2026',
        clientFeedback: 'Everyone at the lobola celebration was in awe of my dress. Fitting was flawless.'
      }
    ],
    servicesOffered: [
      {
        id: 's14',
        title: 'Custom Traditional Wedding Gown',
        description: 'Made-to-measure design, fabric consultation, fitting sessions, and hand finishing.',
        startingPrice: 1800,
        category: 'Fashion',
        turnaround: '7–10 days',
        isPopular: true
      },
      {
        id: 's15',
        title: 'Garment Alterations, Hemming & Sizing',
        description: 'Trousers, jackets, zip replacements, taking in waistlines, and dress adjustments.',
        startingPrice: 80,
        category: 'Alterations',
        turnaround: '1–2 days'
      }
    ],
    productsOffered: [
      {
        id: 'p107',
        title: 'Handcrafted Shweshwe Tote Bag',
        description: 'Durable lined fabric tote bag with sturdy straps and inner zipper pocket.',
        price: 220,
        category: 'Accessories',
        imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop&q=80',
        inStock: true
      }
    ],
    reviews: [
      {
        id: 'r10',
        author: 'Mpho Sithole',
        rating: 5,
        comment: 'Lindiwe is a gem in Mamelodi. Her stitches are strong and clean. My dress fitted like a glove.',
        createdAt: '2026-08-10'
      }
    ]
  }
];

@Injectable({ providedIn: 'root' })
export class MarketplaceProfileService {
  private readonly profilesSubject = new BehaviorSubject<MarketplaceProfile[]>(SEED_PROFILES);
  readonly profiles$ = this.profilesSubject.asObservable();

  getProfiles(kind?: ProfileKind): MarketplaceProfile[] {
    const list = this.profilesSubject.value;
    if (!kind || kind === ('ALL' as any)) {
      return list;
    }
    return list.filter(profile => profile.kind === kind);
  }

  getProfile(slugOrId: string): MarketplaceProfile | undefined {
    return this.profilesSubject.value.find(
      p => p.slug.toLowerCase() === slugOrId.toLowerCase() || p.id === slugOrId
    );
  }

  getCurrentUserProfile(): MarketplaceProfile {
    return this.profilesSubject.value[0];
  }

  saveProfile(profile: MarketplaceProfile): void {
    const current = this.profilesSubject.value;
    const index = current.findIndex(p => p.id === profile.id);
    if (index >= 0) {
      const updated = [...current];
      updated[index] = { ...profile };
      this.profilesSubject.next(updated);
    } else {
      this.profilesSubject.next([profile, ...current]);
    }
  }

  addPortfolioItem(profileId: string, item: Omit<PortfolioItem, 'id'>): PortfolioItem {
    const current = this.profilesSubject.value;
    const profile = current.find(p => p.id === profileId);
    if (!profile) throw new Error('Profile not found');

    const newItem: PortfolioItem = {
      ...item,
      id: 'w_' + Date.now()
    };

    const updatedProfile: MarketplaceProfile = {
      ...profile,
      portfolio: [newItem, ...profile.portfolio]
    };

    this.saveProfile(updatedProfile);
    return newItem;
  }

  deletePortfolioItem(profileId: string, itemId: string): void {
    const profile = this.getProfile(profileId);
    if (!profile) return;
    const updatedProfile: MarketplaceProfile = {
      ...profile,
      portfolio: profile.portfolio.filter(item => item.id !== itemId)
    };
    this.saveProfile(updatedProfile);
  }

  addServiceItem(profileId: string, service: Omit<ProfileServiceItem, 'id'>): ProfileServiceItem {
    const profile = this.getProfile(profileId);
    if (!profile) throw new Error('Profile not found');

    const newService: ProfileServiceItem = {
      ...service,
      id: 's_' + Date.now()
    };

    const currentServices = profile.servicesOffered || [];
    const updatedProfile: MarketplaceProfile = {
      ...profile,
      services: (profile.services || 0) + 1,
      servicesOffered: [newService, ...currentServices]
    };
    this.saveProfile(updatedProfile);
    return newService;
  }

  deleteServiceItem(profileId: string, serviceId: string): void {
    const profile = this.getProfile(profileId);
    if (!profile) return;
    const currentServices = profile.servicesOffered || [];
    const updatedProfile: MarketplaceProfile = {
      ...profile,
      services: Math.max(0, (profile.services || 1) - 1),
      servicesOffered: currentServices.filter(s => s.id !== serviceId)
    };
    this.saveProfile(updatedProfile);
  }

  addProductItem(profileId: string, product: Omit<ProfileProductItem, 'id'>): ProfileProductItem {
    const profile = this.getProfile(profileId);
    if (!profile) throw new Error('Profile not found');

    const newProduct: ProfileProductItem = {
      ...product,
      id: 'p_' + Date.now()
    };

    const currentProducts = profile.productsOffered || [];
    const updatedProfile: MarketplaceProfile = {
      ...profile,
      products: (profile.products || 0) + 1,
      productsOffered: [newProduct, ...currentProducts]
    };
    this.saveProfile(updatedProfile);
    return newProduct;
  }

  deleteProductItem(profileId: string, productId: string): void {
    const profile = this.getProfile(profileId);
    if (!profile) return;
    const currentProducts = profile.productsOffered || [];
    const updatedProfile: MarketplaceProfile = {
      ...profile,
      products: Math.max(0, (profile.products || 1) - 1),
      productsOffered: currentProducts.filter(p => p.id !== productId)
    };
    this.saveProfile(updatedProfile);
  }

  addReview(profileId: string, reviewData: { author: string; rating: number; comment: string }): Review {
    const profile = this.getProfile(profileId);
    if (!profile) throw new Error('Profile not found');

    const newReview: Review = {
      id: 'r_' + Date.now(),
      author: reviewData.author.trim() || 'Verified Customer',
      rating: reviewData.rating,
      comment: reviewData.comment.trim(),
      createdAt: new Date().toISOString().split('T')[0]
    };

    const updatedProfile: MarketplaceProfile = {
      ...profile,
      reviews: [newReview, ...profile.reviews]
    };
    this.saveProfile(updatedProfile);
    return newReview;
  }

  requestVerification(profileId: string, tier: VerificationTier): void {
    const profile = this.getProfile(profileId);
    if (!profile) return;
    if (!profile.verification.includes(tier)) {
      const updatedProfile: MarketplaceProfile = {
        ...profile,
        verification: [...profile.verification, tier]
      };
      this.saveProfile(updatedProfile);
    }
  }
}

