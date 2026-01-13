import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin } from 'lucide-react';

const Modal = ({ selectedImage, onClose }) => {


    React.useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);



    return (
        <AnimatePresence>
            {selectedImage && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
                >
                    <motion.div
                        layoutId={`card-${selectedImage.id}`}
                        className="relative max-w-5xl w-full max-h-[90vh] bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
                        >
                            <X size={24} />
                        </button>

                        <div className="grid md:grid-cols-[1.5fr,1fr] h-full">
                            <div className="h-[50vh] md:h-[80vh] bg-black">
                                <img
                                    src={selectedImage.url}
                                    alt={selectedImage.title}
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            <div className="p-8 flex flex-col justify-center bg-zinc-900 text-white">
                                <h2 className="text-3xl font-bold mb-4">{selectedImage.title}</h2>

                                <div className="flex items-center gap-2 text-zinc-400 mb-6">
                                    <MapPin size={20} />
                                    <span className="text-lg">{selectedImage.location}</span>
                                </div>

                                <p className="text-zinc-300 leading-relaxed text-lg">
                                    {selectedImage.description}
                                </p>



                                <div className="mt-8 pt-8 border-t border-zinc-800">
                                    <div className="flex gap-4">
                                        <a
                                            href={selectedImage.url}
                                            download={`image-${selectedImage.id}`}
                                            className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-zinc-200 transition-colors text-center w-full md:w-auto"
                                        >
                                            Download
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Modal;
