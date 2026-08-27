export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  treatment: string;
  comment: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Tanvir Ahmed",
    location: "Banani, Dhaka",
    rating: 5,
    treatment: "Traditional Thai Massage",
    comment: "An exceptional luxury spa experience right on Kamal Ataturk Avenue in Banani. The Traditional Thai Massage stretching techniques relieved my lower back stiffness completely. World-class ambiance and total privacy.",
  },
  {
    id: "2",
    name: "Nusrat Chowdhury",
    location: "Gulshan, Dhaka",
    rating: 5,
    treatment: "Aroma Body Massage",
    comment: "Relaxing Spa Dhaka has set a benchmark for wellness in Banani. The Aroma Body Massage in their private VIP suite was pristine, quiet, and wonderfully scented. Highly recommended for anyone near Gulshan!",
  },
  {
    id: "3",
    name: "Farhan & Samira",
    location: "Banani, Dhaka",
    rating: 5,
    treatment: "Couple Spa Experience",
    comment: "We booked the Couple Spa Experience for our wedding anniversary. The serene atmosphere, warm lighting, and professional therapists in Banani made it an unforgettable afternoon.",
  },
  {
    id: "4",
    name: "Mahmud Hasan",
    location: "Baridhara, Dhaka",
    rating: 5,
    treatment: "Deep Tissue Massage",
    comment: "The Deep Tissue Massage session was exactly what I needed after long work travel. Skillful pressure, serene atmosphere on Kamal Ataturk Ave, and complete professionalism.",
  },
];
