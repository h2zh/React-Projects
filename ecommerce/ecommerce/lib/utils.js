// codes that you want to call in multi places in your project
import confetti from 'canvas-confetti';

export const runFireworks = () => {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
}