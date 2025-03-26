import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "lucide-react";

const HeaderSlot = ({ imgSrc, title, router }) => {
  const canvasRef = useRef(null);
  const lastPath = Array.isArray(router) ? router[router.length - 1] : router;
  const remainingPaths = Array.isArray(router) ? router.slice(0, -1) : [];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];
    let mouse = { x: 0, y: 0 };

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const createParticles = () => {
      particles = [];
      const numberOfParticles = 50;
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 4 + 2,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(255, 255, 255, 0.5)";

      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - particle.x;
          const dy = particles[j].y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 200) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${
              0.2 * (1 - distance / 100)
            })`;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;

      particles.forEach((particle) => {
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 100) {
          particle.vx += dx * 0.001;
          particle.vy += dy * 0.001;
        }
      });
    };

    resizeCanvas();
    createParticles();
    drawParticles();

    window.addEventListener("resize", resizeCanvas);
    canvas.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div>
      <div
        className={`relative py-[116px] bg-[url(${imgSrc})] lg:bg-cover mb:bg-contain bg-center bg-no-repeat `}
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: "cover",
        }}
      >
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full"
        />
        <div className="flex items-center justify-center">
          <div className="max-w-[1200px] w-auto px-[15px] flex flex-col justify-center items-center">
            <h3
              className={`${
                title ? "text-[44px]" : "py-[33px]"
              } text-white uppercase tracking-[0.1em] font-bold text-center`}
            >
              {title}
            </h3>

            <div
              className={`border-b-4 border-[rgba(255,255,255,0.6)] w-[64px] h-[44px]`}
            ></div>
          </div>
        </div>
      </div>
      <div className="py-[20px] bg-[#f3f3f3]">
        <div className="flex item-center justify-center">
          <div className="max-w-[1200px] flex justify-center items-center">
            <div className="flex items-center">
              {remainingPaths.map((item, index) => (
                <div className="flex items-center" key={index}>
                  <Link
                    to={item.src}
                    className="text-[12px] text-[#777777] hover:text-[#54c1e5] uppercase cursor-pointer px-[17px] font-medium leading-[1.5] tracking-[0.13em]"
                  >
                    {item.title}
                  </Link>
                  <ArrowRightIcon
                    size={12}
                    className="text-[#151515] font-black"
                  />
                </div>
              ))}
              <span className="text-[12px] text-[#151515] uppercase font-black px-[17px] leading-[1.5] tracking-[0.13em]">
                {lastPath}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSlot;
