import React from 'react';

export const Footer = (): JSX.Element => {
  return (
    <footer className="text-center mt-10 pb-5">
      <small>© {new Date().getFullYear()} CUE:</small>
    </footer>
  );
};
