import { useEffect, useState } from "react";

const Typewriter = ({ content }) => {
   const [text, setText] = useState('');
   const [ready, setReady] = useState(false);

   useEffect(() => {
      setReady(false);
      const timeout = setTimeout(() => setReady(true), 400);
      return () => clearTimeout(timeout);
   }, [content]);

   useEffect(() => {
      if (!ready)
         return;

      const chars = [...content];

      const interval = setInterval(() => {
         const char = chars.shift();

         setText(prev => prev + char);

         if (!chars.length)
            clearInterval(interval);
      }, 80);

      return () => clearInterval(interval);
   }, [ready, content]);

   return text;
};

export default Typewriter;