import { useState, useEffect } from 'react';
import logo from "../assets/Logo.webp";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleScroll = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false); // Fecha o menu após o clique
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <nav className="flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center text-3xl">
                <a href="/" aria-label="Home">
                    <img src={logo} className="mx-2" width={150} height={220} alt="Logo" />
                </a>
            </div>
            {/* Menu links visíveis em telas grandes */}
            <div className="hidden lg:flex m-8 items-center justify-center gap-4 text-lg">
                <button onClick={() => handleScroll('technologies')} aria-label="Technologies">
                    Technologies
                </button>
                <button onClick={() => handleScroll('projects')} aria-label="Projects">
                    Projects
                </button>
                <button onClick={() => handleScroll('experience')} aria-label="Experience">
                    Experience
                </button>
                <button onClick={() => handleScroll('contact')} aria-label="Contact">
                    Contact
                </button>
            </div>
            {/* Toggle button visível apenas em dispositivos móveis */}
            <div className="lg:hidden">
                <button onClick={toggleMenu} className="focus:outline-none">
                    <span className="text-3xl">&#9776;</span>
                </button>
            </div>
            {/* Menu overlay em dispositivos móveis */}
            {isMenuOpen && (
                <div className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white z-50">
                    <button onClick={toggleMenu} className="absolute top-5 right-5 text-3xl">&times;</button>
                    <button onClick={() => handleScroll('technologies')} className="py-2 text-lg" aria-label="Technologies">
                        Technologies
                    </button>
                    <button onClick={() => handleScroll('projects')} className="py-2 text-lg" aria-label="Projects">
                        Projects
                    </button>
                    <button onClick={() => handleScroll('experience')} className="py-2 text-lg" aria-label="Experience">
                        Experience
                    </button>
                    <button onClick={() => handleScroll('contact')} className="py-2 text-lg" aria-label="Contact">
                        Contact
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
