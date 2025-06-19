import React from 'react';
import { motion } from 'framer-motion';

const Message = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center mb-0 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-xl text-center"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Dear jadv Jiii,
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-6">
          Janmdin ki hardik subhkamnaye kushva ka dhyn 
          rkhe kushva ke sath kush rahe thoda kam bilaya kre 
          padha likha maai baau ka naam roshan kra hame jine da kalesh km kre dhnyavad.
        </p>
        <p className="text-lg text-pink-600 font-semibold">
          Ek akhiri baar janam din ki hardki subhkhamnaye
        </p>
      </motion.div>
    </div>
  );
};

export default Message;