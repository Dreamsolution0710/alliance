import { motion } from "framer-motion";

const ContactCard = ({
  photo,
  name,
  email,
  phone,
  bgColor,
  borderColor,
  delay,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 + delay * 0.3 }}
    viewport={{ once: true }}
    className={`w-80 p-2 rounded-bl-3xl rounded-tr-3xl shadow-xl text-white text-center relative ${bgColor}`}
  >
    {/* Enlarged Profile Image */}
    <div
      className={`absolute -top-24 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full border-4 ${borderColor} overflow-hidden shadow-lg`}
    >
      <img
        src={photo}
        alt={name}
        className="w-full h-full object-cover scale-110 bg-white"
      />
    </div>

    {/* Card Content */}
    <div className="mt-8">
      <h2 className="text-xl font-bold tracking-wide animate-pulse">{name}</h2>
      <p className="text-lg opacity-90 mt-1">{email}</p>
      <p className="text-lg font-semibold mt-1">{phone}</p>
    </div>
  </motion.div>
);

export default ContactCard;
