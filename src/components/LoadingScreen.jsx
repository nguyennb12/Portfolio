import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("");
    const fullText = "Hello, World!";
    const typingSpeed = 100; // Speed of text animation
    const delayAfterTyping = 1000; // Delay before finishing animation

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index + 1));
            index++;

            if (index === fullText.length) {
                clearInterval(interval);

                setTimeout(() => {
                    onComplete(); // Calls `onComplete` after delay
                }, delayAfterTyping);
            }
        }, typingSpeed);

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
            {/* Typing Animation */}
            <div className="mb-4 text-4xl font-mono font-bold">
                {text}
                <span className="animate-blink ml-1">|</span>
            </div>

            {/* Loading Bar Animation */}
            <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
                <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-pulse">
                    {""}
                </div>
            </div>
        </div>
    );
};
