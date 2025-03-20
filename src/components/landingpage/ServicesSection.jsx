import { motion } from "framer-motion";
import {
  Settings,
  TagsIcon,
  BoxesIcon,
  Truck,
  LightbulbIcon,
  Handshake,
} from "lucide-react";

const services = [
  {
    title: "Custom & Stock Product Manufacturing",
    description:
      "We manufacture 70% of the products we sell, offering both custom and stock solutions with short lead times.",
    icon: Settings,
  },
  {
    title: "Private Branding Programs",
    description:
      "Our 1-case minimum private branding program allows distributors to offer exclusive products under their own brand.",
    icon: TagsIcon,
  },
  {
    title: "Product Bundling Solutions",
    description:
      "We provide bundling options to streamline supply chain management and enhance product offerings.",
    icon: BoxesIcon,
  },
  {
    title: "Nationwide Distribution",
    description:
      "We ensure fast and efficient nationwide delivery, meeting distributor needs with reliability.",
    icon: Truck,
  },
  {
    title: "Innovative Product Development",
    description:
      "We create unique, cutting-edge products to help our partners stand out in the market.",
    icon: LightbulbIcon,
  },
  {
    title: "Veteran-Owned, Customer-First Approach",
    description:
      "As a Veteran-Owned company, we prioritize integrity, trust, and long-term partnerships with our clients.",
    icon: Handshake,
  },
];

export default function ServicesSection() {
  return (
    <div className="py-16 bg-gray-50 text-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Animated Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="text-4xl font-bold uppercase text-center tracking-wide mb-12 relative"
          whileHover={{
            textShadow: "0px 0px 12px rgba(0, 102, 255, 0.7)",
            scale: 1.05,
          }}
        >
          Our Services
        </motion.h2>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 15px 30px rgba(0,0,0,0.15)",
                transition: { duration: 0.3 },
              }}
              className="group p-10 bg-white shadow-lg rounded-xl border border-gray-200 hover:shadow-2xl transition-all duration-300"
            >
              {/* Icon with Glow Effect */}
              <motion.div
                className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-100 to-blue-300 text-blue-600 shadow-md transition-transform"
                whileHover={{
                  rotate: [0, 5, -5, 0],
                  transition: { duration: 0.5, ease: "easeInOut" },
                }}
              >
                <service.icon className="w-12 h-12" />
              </motion.div>

              {/* Title */}
              <motion.h3
                className="mt-6 text-2xl font-semibold text-gray-800 group-hover:text-blue-500 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                {service.title}
              </motion.h3>

              {/* Description */}
              <motion.p
                className="mt-2 text-gray-600 group-hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                {service.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
