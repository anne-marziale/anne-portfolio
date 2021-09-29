import React from 'react';
import { FaLinkedin, FaGithub, FaPortrait } from 'react-icons/fa';


const SocialNetwork = () => {

  const anim = () => {
    let navLinks = document.querySelectorAll('.social-network a');

    navLinks.forEach(link => {
      link.addEventListener('mouseover', (e) => {
        let attrX = e.offsetX - 20;
        let attrY = e.offsetY - 13;

        link.style.transform = `translate( ${attrX}px, ${attrY}px)`;
      })
      link.addEventListener('mouseleave', () => {
        link.style.transform = '';
      })
    })
  }

  return (
    <div className="social-network">
      <ul className="content">
        <a href="https://www.linkedin.com/in/anne-marziale-202545218/" target="_blank" rel="noopener noreferrer" className="hover" onMouseOver={anim} >
          <li><FaLinkedin /></li>
        </a>
        <a href="https://github.com/anne-marziale" target="_blank" rel="noopener noreferrer" className="hover" onMouseOver={anim} >
          <li>< FaGithub /></li>
        </a>
        <a href="https://anne-marziale-cv.netlify.app" target="_blank" rel="noopener noreferrer" className="hover" onMouseOver={anim} >
          <li>< FaPortrait /></li>
        </a>
      </ul>
    </div>
  );
};

export default SocialNetwork;