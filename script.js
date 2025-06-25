// Danh sách các ngôn ngữ và bản dịch của "MÀY BỊ NGU À?"
const languages = [
    {
        text: "MÀY BỊ NGU À?",
        language: "Tiếng Việt",
        flag: "🇻🇳"
    },
    {
        text: "ARE YOU STUPID?",
        language: "English",
        flag: "🇺🇸"
    },
    {
        text: "BIST DU DUMM?",
        language: "Deutsch",
        flag: "🇩🇪"
    },
    {
        text: "ТЫ ДУРАК?",
        language: "Русский",
        flag: "🇷🇺"
    },
    {
        text: "你是白痴吗？",
        language: "中文",
        flag: "🇨🇳"
    },
    {
        text: "¿ERES ESTÚPIDO?",
        language: "Español",
        flag: "🇪🇸"
    },
    {
        text: "TU ES STUPIDE?",
        language: "Français",
        flag: "🇫🇷"
    },
    {
        text: "あなたは馬鹿ですか？",
        language: "日本語",
        flag: "🇯🇵"
    }
];

let currentIndex = 0;
const mainText = document.getElementById('main-text');
const languageName = document.getElementById('language-name');

// Function để thay đổi text với hiệu ứng fade
function changeText() {
    // Fade out
    mainText.classList.add('fade-out');
    
    setTimeout(() => {
        // Chuyển sang ngôn ngữ tiếp theo
        currentIndex = (currentIndex + 1) % languages.length;
        
        // Cập nhật text và tên ngôn ngữ
        mainText.textContent = languages[currentIndex].text;
        languageName.textContent = `${languages[currentIndex].flag} ${languages[currentIndex].language}`;
        
        // Fade in
        mainText.classList.remove('fade-out');
        mainText.classList.add('fade-in');
        
        setTimeout(() => {
            mainText.classList.remove('fade-in');
        }, 800);
        
    }, 500); // Thời gian fade out
}

// Tạo hiệu ứng particles động
function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 1}px;
            height: ${Math.random() * 4 + 1}px;
            background: rgba(255, 255, 255, ${Math.random() * 0.8 + 0.2});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: particle ${Math.random() * 10 + 10}s linear infinite;
            animation-delay: ${Math.random() * 10}s;
        `;
        particlesContainer.appendChild(particle);
    }
}

// Hiệu ứng khi hover vào text
mainText.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.1)';
    this.style.textShadow = `
        0 0 40px rgba(255, 255, 255, 1),
        0 0 60px rgba(255, 0, 102, 1),
        0 0 80px rgba(102, 0, 255, 0.8),
        0 0 100px rgba(0, 255, 204, 0.6)
    `;
});

mainText.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
    this.style.textShadow = `
        0 0 20px rgba(255, 255, 255, 0.8),
        0 0 40px rgba(255, 0, 102, 0.6),
        0 0 60px rgba(102, 0, 255, 0.4),
        0 0 80px rgba(0, 255, 204, 0.3)
    `;
});

// Hiệu ứng khi click vào text (thay đổi ngay lập tức)
mainText.addEventListener('click', function() {
    changeText();
    
    // Tạo hiệu ứng rung
    this.style.animation = 'none';
    setTimeout(() => {
        this.style.animation = '';
    }, 10);
});

// Khởi tạo
document.addEventListener('DOMContentLoaded', function() {
    // Tạo particles
    createParticles();
    
    // Bắt đầu chu kỳ thay đổi text mỗi 4 giây
    setInterval(changeText, 4000);
    
    // Hiển thị thông tin ngôn ngữ ban đầu
    languageName.textContent = `${languages[currentIndex].flag} ${languages[currentIndex].language}`;
});

// Hiệu ứng responsive - điều chỉnh kích thước particles
window.addEventListener('resize', function() {
    const particles = document.querySelectorAll('.particles div');
    particles.forEach(particle => {
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
    });
});

// Easter egg: Nhấn phím space để thay đổi text
document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        event.preventDefault();
        changeText();
    }
}); 