import { useEffect, useRef } from "react";
import "../styles/customCursor.css";

const CustomCursor = () => {
    const cursorRef = useRef<HTMLDivElement | null>(null); // указываем тип

    useEffect(() => {
        let mouseX = 0;
        let mouseY = 0;
        let currentX = 0;
        let currentY = 0;
        const speed = 0.3; // скорость следования (меньше — плавнее)

        const animate = () => {
            const cursor = cursorRef.current; // получаем элемент внутри функции
            if (cursor) {
                currentX += (mouseX - currentX) * speed;
                currentY += (mouseY - currentY) * speed;
                cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
            }
            requestAnimationFrame(animate);
        };

        const onMouseMove = (e: { clientX: number; clientY: number }) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        window.addEventListener("mousemove", onMouseMove);
        animate();

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
        };
    }, []);

    return <div className="custom-cursor" ref={cursorRef}></div>;
};

export default CustomCursor;
