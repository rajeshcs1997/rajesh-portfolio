import css from '../app/assets/svg/skills/css.svg';
import git from '../app/assets/svg/skills/git.svg';
import html from '../app/assets/svg/skills/html.svg';
import javascript from '../app/assets/svg/skills/javascript.svg';
import mongoDB from '../app/assets/svg/skills/mongoDB.svg';
import nextJS from '../app/assets/svg/skills/nextJS.svg';
import node from '../app/assets/svg/skills/node.svg';
import react from '../app/assets/svg/skills/react.svg';
import typescript from '../app/assets/svg/skills/typescript.svg';
import vitejs from '../app/assets/svg/skills/vitejs.svg';
import webpack from '../app/assets/svg/skills/webpack.svg';

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();

  switch (skillID) {
    case 'html':
      return html;
    case 'css':
      return css;
    case 'javascript':
      return javascript;
    case 'typescript':
      return typescript;
    case 'react':
      return react;
    case 'react js':
      return react;
    case 'next js':
      return nextJS;
    case 'node js':
      return node;
    case 'mongodb':
      return mongoDB;
    case 'git':
      return git;
    case 'vite':
      return vitejs;
    case 'webpack':
      return webpack;
    default:
      return null;
  }
};
