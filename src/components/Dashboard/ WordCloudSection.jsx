import React from 'react';
import WordCloud from 'react-wordcloud';

const words = [
  { text: 'funda', value: 10 },
  { text: 'carcasa', value: 8 },
  { text: 'cargador', value: 15 },
  { text: 'caja', value: 7 },
];

const WordCloudSection = () => {
  return (
    <div>
      <h2>Palabras clave comunes</h2>
      <WordCloud words={words} />
    </div>
  );
};

export default WordCloudSection;
