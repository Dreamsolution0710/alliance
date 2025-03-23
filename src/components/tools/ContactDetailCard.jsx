import { Link } from "react-router-dom";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ContactDetailCard = ({ photo, name, position, email, phone, delay }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      className="flex items-center p-6 bg-white rounded-xl w-full max-w-md"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.3 + delay * 0.3 }}
    >
      {/* Profile Image */}
      <motion.img
        src={photo}
        alt={name}
        className="w-28 h-28 min-w-28 rounded-full border-4 border-blue-500 object-cover"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      />

      <div className="ml-6">
        {/* Name */}
        <motion.h2
          className="text-2xl font-extrabold text-blue-800"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {name}
        </motion.h2>

        {/* Position */}
        <motion.p
          className="text-lg italic text-blue-600"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {position}
        </motion.p>

        {/* Email */}
        <motion.div
          className="flex items-center mt-2 text-blue-500"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <EnvelopeIcon className="w-6 h-6 mr-2" />
          <Link to={`mailto:${email}`} className="hover:underline text-lg">
            {email}
          </Link>
        </motion.div>

        {/* Phone */}
        <motion.div
          className="flex items-center mt-2 text-blue-700"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <PhoneIcon className="w-6 h-6 mr-2" />
          <p className="text-lg">{phone}</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactDetailCard;
