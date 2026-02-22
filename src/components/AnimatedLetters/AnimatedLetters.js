import "./AnimatedLetters.scss";

function AnimatedLetters({ letterClass, strArray, idx }) {
  return (
    <span>
      {strArray.map((char, i) => (
        <span
          key={char + i}
          className={`${letterClass} _${i + idx}`}
          onMouseEnter={(e) => e.target.classList.add("rubberBand")}
          onAnimationEnd={(e) => e.target.classList.remove("rubberBand")}
        >
          {char}
        </span>
      ))}
    </span>
  );
}

export default AnimatedLetters;