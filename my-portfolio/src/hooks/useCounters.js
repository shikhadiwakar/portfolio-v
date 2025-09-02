import { useState, useEffect } from 'react';

export const useCounters = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    experience: 0,
    awards: 0,
    impact: 0
  });

  useEffect(() => {
    const targets = { projects: 11, experience: 4, awards: 3, impact: 1000 };
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    const animate = () => {
      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setCounters({
          projects: Math.floor(targets.projects * progress),
          experience: Math.floor(targets.experience * progress),
          awards: Math.floor(targets.awards * progress),
          impact: Math.floor(targets.impact * progress)
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setCounters(targets);
        }
      }, stepTime);
    };

    const timer = setTimeout(animate, 500);
    return () => clearTimeout(timer);
  }, []);

  return counters;
};