"use client";

import { useEffect } from "react";
import { tsParticles } from "tsparticles-engine";
import { loadConfettiPreset } from "tsparticles-preset-confetti";

export const Particles = () => {
  useEffect(() => {
    const loadParticles = async () => {
      await loadConfettiPreset(tsParticles); // Cargar el preset de confetti

      await tsParticles.load("confetti", {
        preset: "confetti",
        particles: {
          speed: 10,
          number: {
            value: 200,
            density: { enable: true, area: 800 },
          },
          life: {
            duration: 10,
            count: 0,
          },
          opacity: {
            value: 0,
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 1,
            },
          },
        },
      });
    };

    loadParticles();
  }, []);

  return <div id="confetti" className="absolute inset-0" />;
};
