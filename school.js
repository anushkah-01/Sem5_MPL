// JavaScript code to type out text dynamically
document.addEventListener("DOMContentLoaded", function () {
    const text = "At EDUPRO, we bridge the communication gap between parents and teachers, ensuring seamless exchanges of important updates, tiffin schedules, feedback, and study materials. Stay connected and informed!";
    const textBox = document.getElementById("description");
    let index = 0;

    function typeText() {
        if (index < text.length) {
            textBox.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeText, 50); // Typing speed
        }
    }

    typeText(); // Start typing animation
});
