import React, { useState } from 'react';
import './arrow-menu.css'; // Import your CSS for animations


const ArrowMenu = () => {
  const texts = [
    "The muscle pumps I had were absolutely insane along with staying full all day. Based on my experience at a higher dose, these came as close to pharma as anything else I’ve tried. I would wake up looking full every single morning and I sleep like a baby. My t/a was 2 days. Def have a new customer in me.",
    "6 kits of batch C in 3 business days. THE GOAT. Also looking like better testing than Opti's oranges.Have been on Kit's Batch C GH for 3 months and does exactly what you want gh to do.",
    "3 day TA, outstanding communication. Personally love the batch number and testing on the kits. Used 4different hgh over the last many years and this is the first source to do this. Great idea.",
    "Very good GH I’ve tried a couple diff sources GH on here and this is my favorite as of now.",
    "Running this vendors growth and i added insulin in this week, Looking BIG and wide brothers. Might try chase irons suggestion and run 20iu a day to see how I respond. On 11iu I feel and look fantastic",
    "Second order landed today just as fast as the first. Ordered late on the 4th and pack was waiting for me today.. Timeliness, respect, professionalism, customer service all top shelf. Alot of other sources should definitely take notes, Just saying.",
    "Second order placed with Kits4Less. Website smooth to use. BTC payment and confirmation was smooth. Point system is cool for every $100 spend you get $2.5 credit",
    "Ordered on the 7th and received today. Website was easy to navigate. Had a question about payment and response time was fast. So far I've gotta rate at 10/10.",
    "A few weeks in on one of the Deluxe 150-160 Iu kits and I'm full as a house. Gaining weight slowly but consistently. Appetite and sleep have been amazing. Also best customer service and T/a time",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(""); // 'left' or 'right' for animation direction
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNextText = (dir) => {
    if (isAnimating) return; // Prevent multiple clicks during animation

    setDirection(dir);
    setIsAnimating(true);
    
    setTimeout(() => {
      // Adjust index based on the direction
      if (dir === "right") {
        setCurrentIndex((currentIndex + 1) % texts.length);
      } else {
        setCurrentIndex((currentIndex - 1 + texts.length) % texts.length);
      }
      setIsAnimating(false);
    }, 300); // Same as animation duration
  };

  return (
    <div className='arrow-menu'>
        <img src='https://kits4less.com/wp-content/uploads/2023/11/reviews_icon.svg'></img>
        <h1>What our customers are saying</h1>
        <div className="menu-container">
        <button className="arrow-btn" onClick={() => handleNextText("left")}>
            &#8592; {/* Left arrow symbol */}
        </button>

        
        <div className={`menu-text ${isAnimating ? `slide-${direction}-out` : `slide-${direction}-in`}`}>
            <p>{texts[currentIndex]}</p>
        </div>

        <button className="arrow-btn" onClick={() => handleNextText("right")}>
            &#8594; {/* Right arrow symbol */}
        </button>
        </div>
    </div>
  );
};

export default ArrowMenu;
