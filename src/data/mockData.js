// Mock data for the review management platform

export const mockReviews = [
  {
    id: 1,
    platform: 'google',
    customerName: 'Sarah Johnson',
    rating: 5,
    date: '2024-01-12',
    text: 'Absolutely amazing experience! The staff was incredibly friendly and the service was top-notch. Will definitely be coming back!',
    location: 'Downtown',
    status: 'new',
    service: 'Haircut & Styling'
  },
  {
    id: 2,
    platform: 'yelp',
    customerName: 'Mike Chen',
    rating: 4,
    date: '2024-01-11',
    text: 'Great food and atmosphere. Waited a bit longer than expected but the quality made up for it. The pasta was delicious!',
    location: 'Midtown',
    status: 'replied',
    service: 'Dinner'
  },
  {
    id: 3,
    platform: 'facebook',
    customerName: 'Emily Davis',
    rating: 2,
    date: '2024-01-10',
    text: 'Disappointed with my recent visit. The wait time was very long and the staff seemed overwhelmed. Hope this improves.',
    location: 'Downtown',
    status: 'new',
    service: 'Lunch'
  },
  {
    id: 4,
    platform: 'tripadvisor',
    customerName: 'James Wilson',
    rating: 5,
    date: '2024-01-09',
    text: 'Best hotel experience in the city! The room was spotless, staff was attentive, and the breakfast was superb. Highly recommend!',
    location: 'Airport',
    status: 'new',
    service: 'Accommodation'
  },
  {
    id: 5,
    platform: 'google',
    customerName: 'Lisa Anderson',
    rating: 3,
    date: '2024-01-08',
    text: 'Average experience. Nothing special but nothing bad either. Prices are reasonable for the area.',
    location: 'Westside',
    status: 'in-progress',
    service: 'General'
  },
  {
    id: 6,
    platform: 'yelp',
    customerName: 'Robert Taylor',
    rating: 1,
    date: '2024-01-07',
    text: 'Terrible service! Had to wait 45 minutes for our order and when it came, it was cold. Asked for a refund and was refused. Never coming back.',
    location: 'Downtown',
    status: 'new',
    service: 'Delivery'
  },
  {
    id: 7,
    platform: 'google',
    customerName: 'Amanda Martinez',
    rating: 5,
    date: '2024-01-06',
    text: 'Love this place! The team is so professional and always makes me feel welcome. The results are always exactly what I wanted.',
    location: 'Eastside',
    status: 'replied',
    service: 'Spa Treatment'
  },
  {
    id: 8,
    platform: 'facebook',
    customerName: 'David Brown',
    rating: 4,
    date: '2024-01-05',
    text: 'Good value for money. Clean facility and helpful staff. Would recommend to friends looking for quality service.',
    location: 'Midtown',
    status: 'new',
    service: 'Consultation'
  }
];

export const replyTemplates = {
  positive: [
    {
      id: 1,
      name: 'Thank You - General',
      text: 'Thank you so much for your wonderful review, {{customer_name}}! We\'re thrilled to hear you had such a great experience at our {{location}} location. Your kind words mean the world to our team. We look forward to seeing you again soon!'
    },
    {
      id: 2,
      name: 'Thank You - Service Specific',
      text: 'Hi {{customer_name}}, thank you for taking the time to share your experience! We\'re so happy to hear that you enjoyed your {{service}} with us. Our team at {{location}} takes great pride in providing excellent service. Hope to see you again!'
    },
    {
      id: 3,
      name: 'Thank You - Referral Invite',
      text: 'Wow, thank you for the amazing 5-star review, {{customer_name}}! Reviews like yours make our day. If you have friends or family looking for {{service}}, we\'d love to welcome them too. See you next time!'
    }
  ],
  neutral: [
    {
      id: 4,
      name: 'Appreciate Feedback',
      text: 'Hi {{customer_name}}, thank you for your honest feedback about your visit to our {{location}} location. We appreciate you sharing your experience and are always looking for ways to improve. We hope to exceed your expectations next time!'
    },
    {
      id: 5,
      name: 'Room for Improvement',
      text: 'Thank you for your review, {{customer_name}}. We value all feedback as it helps us grow. If there\'s anything specific we can do to make your next visit better, please don\'t hesitate to reach out to us directly.'
    }
  ],
  negative: [
    {
      id: 6,
      name: 'Sincere Apology',
      text: 'Dear {{customer_name}}, we\'re truly sorry to hear about your disappointing experience at our {{location}} location. This is not the standard of service we strive for. Please reach out to us at [email/phone] so we can make this right. Your satisfaction is our priority.'
    },
    {
      id: 7,
      name: 'Issue Resolution',
      text: 'Hi {{customer_name}}, thank you for bringing this to our attention. We sincerely apologize for the issues you experienced with {{service}}. We\'ve shared your feedback with our team and are taking steps to prevent this in the future. We\'d love the opportunity to restore your faith in us.'
    },
    {
      id: 8,
      name: 'Personal Follow-up',
      text: '{{customer_name}}, I\'m personally sorry to hear about your experience. As the manager of our {{location}} location, I take full responsibility. Please contact me directly at [contact] so I can personally ensure we make this right for you.'
    }
  ]
};

export const dashboardStats = {
  averageRating: 4.7,
  totalReviews: 1284,
  reviewGrowth: 23,
  responseRate: 92,
  avgResponseTime: '1.8 hours',
  unrepliedCount: 12,
  thisWeekReviews: 47,
  lastWeekReviews: 38
};

export const hotIssues = [
  { keyword: 'wait time', count: 15, trend: 'up' },
  { keyword: 'pricing', count: 12, trend: 'stable' },
  { keyword: 'cleanliness', count: 8, trend: 'down' },
  { keyword: 'staff attitude', count: 6, trend: 'up' },
  { keyword: 'delivery', count: 5, trend: 'stable' }
];

export const locations = [
  { id: 1, name: 'Downtown', address: '123 Main St', reviews: 456 },
  { id: 2, name: 'Midtown', address: '456 Oak Ave', reviews: 312 },
  { id: 3, name: 'Westside', address: '789 Pine Rd', reviews: 278 },
  { id: 4, name: 'Eastside', address: '321 Elm St', reviews: 198 },
  { id: 5, name: 'Airport', address: '555 Terminal Blvd', reviews: 40 }
];

export const platforms = [
  { id: 'google', name: 'Google', icon: 'G', color: '#4285f4', connected: true },
  { id: 'yelp', name: 'Yelp', icon: 'Y', color: '#ff1a1a', connected: true },
  { id: 'facebook', name: 'Facebook', icon: 'f', color: '#1877f2', connected: true },
  { id: 'tripadvisor', name: 'TripAdvisor', icon: 'T', color: '#34e0a1', connected: false },
  { id: 'trustpilot', name: 'Trustpilot', icon: '★', color: '#00b67a', connected: false },
  { id: 'bbb', name: 'BBB', icon: 'B', color: '#005a8c', connected: false }
];

export const pricingPlans = [
  {
    name: 'Starter',
    price: 29,
    description: 'Perfect for small businesses getting started',
    features: [
      '1 location',
      '50 reviews per month',
      'Google & Yelp integration',
      'Basic reply templates',
      'Email notifications',
      'Standard support'
    ],
    cta: 'Start Free Trial',
    popular: false
  },
  {
    name: 'Pro',
    price: 79,
    description: 'For growing businesses that need more power',
    features: [
      'Up to 3 locations',
      'Unlimited reviews',
      'All platform integrations',
      'AI-powered reply suggestions',
      'QR code generator',
      'Priority support',
      'Testimonial widget',
      'Weekly reports'
    ],
    cta: 'Start Free Trial',
    popular: true
  },
  {
    name: 'Multi-Location',
    price: 199,
    description: 'For enterprises with complex needs',
    features: [
      'Unlimited locations',
      'Unlimited reviews',
      'All Pro features',
      'Role-based access',
      'API access',
      'Custom integrations',
      'Dedicated account manager',
      'White-label options',
      'Advanced analytics'
    ],
    cta: 'Contact Sales',
    popular: false
  }
];

export const faqItems = [
  {
    question: 'How does the free trial work?',
    answer: 'You get full access to all Pro features for 14 days, no credit card required. At the end of your trial, you can choose a plan that fits your needs or continue with our free tier.'
  },
  {
    question: 'Which review platforms do you support?',
    answer: 'We currently support Google, Yelp, Facebook, and TripAdvisor with more platforms coming soon including Trustpilot, BBB, and industry-specific sites. All plans include access to available integrations.'
  },
  {
    question: 'Can I respond to reviews directly from your platform?',
    answer: 'Yes! You can compose and send replies directly through our platform for connected accounts. The replies will appear on the original platform as if you responded there directly.'
  },
  {
    question: 'How does the AI reply suggestion work?',
    answer: 'Our AI analyzes the review content, sentiment, and your brand voice to suggest personalized responses. You can edit these suggestions before sending, and the AI learns from your modifications to improve future suggestions.'
  },
  {
    question: 'Is my data secure?',
    answer: 'Absolutely. We use bank-level encryption, never share your data with third parties, and are fully GDPR compliant. Your review data and customer information are protected with enterprise-grade security.'
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes, you can cancel your subscription at any time from your account settings. There are no long-term contracts or cancellation fees. If you cancel, you\'ll retain access until the end of your billing period.'
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Jennifer Walsh',
    business: 'Bella Salon & Spa',
    image: null,
    rating: 5,
    text: 'This platform has transformed how we handle reviews. Our response time went from 3 days to under 2 hours, and our average rating jumped from 4.2 to 4.8 stars!'
  },
  {
    id: 2,
    name: 'Marcus Thompson',
    business: 'Urban Eats Restaurant Group',
    image: null,
    rating: 5,
    text: 'Managing reviews across 8 locations used to be a nightmare. Now everything is in one place and my team can respond in minutes. Game changer!'
  },
  {
    id: 3,
    name: 'Dr. Sarah Kim',
    business: 'Smile Dental Care',
    image: null,
    rating: 5,
    text: 'The QR code feature has been incredible for us. We\'ve increased our monthly review count by 300% since implementing it in our practice.'
  }
];

export const businessCategories = [
  'Restaurant & Dining',
  'Health & Medical',
  'Beauty & Spa',
  'Automotive',
  'Home Services',
  'Retail & Shopping',
  'Hotels & Travel',
  'Professional Services',
  'Fitness & Recreation',
  'Education',
  'Other'
];
