const longWishes = [
    { from: "Iris", msg: "Kao and Jane, thank you for bringing so much light and warmth into our lives. Your kindness, hard work, and genuine hearts inspire me every single day. Even during difficult moments, your energy reminds me to stay hopeful and keep moving forward. I'm always cheering for you both, and I hope your future is filled with endless happiness and success. Love and support always from 9779s" },
    { from: "Dao", msg: "Dear P'Kao and P'Janeeyeh, It has been such a long time since I last felt this kind of happiness. You both give me the motivation to work hard, and when I come home, I find myself smiling quietly at my phone.I wish you two endless happiness, success, and the fulfillment of all your passions." },
    { from: "Lin", msg: "\"I am an ordinary woman, with a family and two sons. I have never admired or liked anyone before, not even artists in Vietnam, the country where I live. But I don't know when it started - after watching a clip of you, a film you acted in - I suddenly wanted to go online every day, downloading every app... just to follow you. There is something in your smile that makes me feel peaceful, happy, and loved. From you, I sense a very special warmth. Maybe it's your smile, your eyes, or simply the way you are - all of it makes me feel lighter. This is not love in the usual sense, but a gentle connection. I cherish you, in a very special way.\" wish you lasting happiness and good health" }
];

const shortWishes = [
    { from: "Fan", msg: "Merry Christmas Kao & Jane! Wishing you both warmth and happiness." },
    { from: "Fan", msg: "Sending love to my favorite couple this Christmas!" },
    { from: "Fan", msg: "Hope your holiday season is filled with joy and bright moments." },
    { from: "Fan", msg: "Merry Christmas! Keep shining together, Kao & Jane." },
    { from: "Fan", msg: "Wishing you two a magical Christmas full of love." },
    { from: "Fan", msg: "Thank you for inspiring us every day. Happy Holidays!" },
    { from: "Fan", msg: "Stay happy, stay healthy, stay amazing—Merry Christmas!" },
    { from: "Fan", msg: "May this Christmas bring you peace and cozy memories." },
    { from: "Fan", msg: "Forever supporting you both. Merry Christmas!" },
    { from: "Fan", msg: "Love and light to Kao & Jane this holiday season." } 
];

const bellCandyImgs = ["https://i.imgur.com/VFEMoPt.jpeg", "https://i.imgur.com/dyonHuQ.jpeg", "https://i.imgur.com/9P5MlXD.jpeg", "https://i.imgur.com/mFlqQTD.jpeg", "https://i.imgur.com/WIp6tmd.jpeg", "https://i.imgur.com/lEMs86Z.jpeg", "https://i.imgur.com/9UOK67N.jpeg"];

const starVids = [
    { id: "ebD86a5aEHA", title: "ฝากใจ - Janeeyeh Methika" },
    { id: "-LmPYQnY0Yg", title: "I Love You 3000" },
    { id: "74e_vkPZSBw", title: "Thiết kế Tình yêu (Love Design)" }
]; 

const topVid = { mode: 'vid', content: "N0gMQnkbIok", title: "Special gift VNFC send to 9779", type: 'star top-star', top: 5, left: 50, label: '9779S' };

const sideImgsLeft = ["https://i.imgur.com/XI0tx2H.jpeg", "https://i.imgur.com/mcJoL4g.jpeg", "https://i.imgur.com/ZGqMxSW.jpeg", "https://i.imgur.com/yOzQDhH.jpeg"];
const sideImgsRight = ["https://i.imgur.com/ZQDl2OX.jpeg", "https://i.imgur.com/3ItEhbk.jpeg", "https://i.imgur.com/RSTo2E6.jpeg"];

const audio = document.getElementById('bg-music');
let isPlaying = false; 

function revealTree() {
    audio.play().then(() => {
        isPlaying = true;
    }).catch(error => {
        console.error("Lỗi phát nhạc:", error);
        isPlaying = false;
    });

    document.getElementById('present-screen').classList.remove('active');
    document.getElementById('tree-screen').classList.add('active');
    
    startSnow();
    createStringLights(); 
    loadSideGallery();
    createDecorations(); 
    
    // HIỂN THỊ SNOWMAN & RABBIT BEAR
    document.getElementById('snowman').style.opacity = '1';
    document.getElementById('rabbit-bear').style.opacity = '1';
}

function createStringLights() {
    const treeScreen = document.getElementById('tree-screen');
    const numLights = 30; 
    const startY = 5; 
    
    for (let i = 0; i < numLights; i++) {
        const light = document.createElement('div');
        light.className = 'string-light-dot';
        
        const percent = (i / (numLights - 1));
        const xPos = 10 + percent * 80; 
        
        const dipFactor = Math.abs(percent - 0.5);
        const yOffset = 10 * (0.25 - dipFactor * dipFactor); 
        const yPos = startY + yOffset; 
        
        treeScreen.appendChild(light);
    }
}

function loadSideGallery() {
    const leftGallery = document.getElementById('side-gallery-left');
    const rightGallery = document.getElementById('side-gallery-right');

    const createPhotoFrame = (url) => {
        const frame = document.createElement('div');
        frame.className = 'photo-frame';
        const img = document.createElement('img');
        img.src = url;
        frame.appendChild(img);
        
        frame.style.transform = `rotate(${Math.random() * 10 - 5}deg)`;

        return frame;
    };

    sideImgsLeft.forEach(url => leftGallery.appendChild(createPhotoFrame(url)));
    sideImgsRight.forEach(url => rightGallery.appendChild(createPhotoFrame(url)));
}


function startSnow() {
    const snowContainer = document.getElementById('snow-layer');
    const numberOfFlakes = 50;

    for (let i = 0; i < numberOfFlakes; i++) {
        const flake = document.createElement('div');
        flake.className = 'snowflake';
        flake.innerHTML = '❅'; 

        const size = Math.random() * 0.8 + 0.6; 
        const duration = Math.random() * 15 + 10; 
        const delay = Math.random() * 10; 
        const left = Math.random() * 100; 
        
        flake.style.fontSize = `${size}em`;
        flake.style.animationDuration = `${duration}s`;
        flake.style.animationDelay = `${delay}s`;
        
        let snowX = Math.random() * 100;
        if (snowX > 20 && snowX < 80) { 
            if (Math.random() > 0.6) continue;
        }
        
        flake.style.left = `${left}vw`;
        
        snowContainer.appendChild(flake);
    }
}


function createDecorations() {
    const layer = document.getElementById('decor-layer');
    const items = [];
    
    // Tạo danh sách vật trang trí
    longWishes.forEach(w => items.push({ mode: 'txt', ...w, type: 'ribbon', color: 'pink' }));
    shortWishes.slice(0, 7).forEach((w, i) => {
        items.push({ mode: 'txt', ...w, type: 'ornament', color: i % 2 === 0 ? 'gold' : 'green' });
    });
    bellCandyImgs.slice(0, 4).forEach(url => items.push({ mode: 'img', content: url, type: 'bell', color: 'gold' }));
    bellCandyImgs.slice(4, 7).forEach(url => items.push({ mode: 'img', content: url, type: 'candy', color: 'red' }));
    starVids.forEach(v => items.push({ mode: 'vid', content: v.id, title: v.title, type: 'star', color: 'gold' }));

    // Ngôi sao đỉnh
    addDecor(layer, topVid); 

    const usedPos = [];
    items.forEach(item => {
        let x, y, safe;
        let attempts = 0;
        do {
            safe = true;
            
            const MIN_Y = 20;
            // Giới hạn dưới của vật trang trí để tránh chạm tuyết (MAX_Y = 70)
            const MAX_Y = 70; 
            
            y = Math.random() * (MAX_Y - MIN_Y) + MIN_Y; 
            
            // Tính toán chiều rộng cho phép (spread) dựa trên vị trí Y (chiều cao)
            let normalizedY = (y - MIN_Y) / (MAX_Y - MIN_Y); 
            
            let maxSpread = 85; 
            let spread = 10 + normalizedY * maxSpread * 0.9;
            
            if (normalizedY > 0.8) {
                spread *= 0.8;
            } else if (normalizedY < 0.2) {
                 spread *= 0.5;
            }
            
            x = 50 + (Math.random() - 0.5) * spread;
            
            // Kiểm tra va chạm (giữ khoảng cách tối thiểu 7.5%)
            for (let p of usedPos) {
                const minDistance = (normalizedY < 0.3) ? 10 : 7.5; 

                if (Math.hypot(x - p.x, y - p.y) < minDistance) { safe = false; break; } 
            }
            // Đảm bảo không vượt quá biên độ cho phép (nằm trong cây)
            if (Math.abs(x - 50) > (spread / 2)) {
                 safe = false;
            }
            
            attempts++;
        } while (!safe && attempts < 400); 

        usedPos.push({ x, y });
        item.top = y; 
        item.left = x;
        addDecor(layer, item);
    });
}

function addDecor(parent, d) {
    const el = document.createElement('div');
    el.className = `decoration ${d.type} ${d.color || ''}`;
    el.style.top = d.top + '%';
    el.style.left = d.left + '%';
    
    if (d.label) el.innerText = d.label;

    el.onclick = () => {
        if (d.mode === 'vid') {
            showVideo(d, el);
        } else {
            showMessage(d, el);
        }
    };
    parent.appendChild(el);
}

function showVideo(d, el) {
    audio.pause(); 
    isPlaying = false;

    const frame = document.getElementById('info-frame');
    const area = document.getElementById('media-area');
    const msg = document.getElementById('msg-content');
    const sender = document.getElementById('sender-info');

    area.innerHTML = ''; msg.innerText = ''; sender.innerText = '';
    frame.classList.remove('wide');

    let videoContent;
    if (d.content.includes('_placeholder')) {
         videoContent = `<span class="v-label" style="color: blue;">[Video Placeholder cho: ${d.title}]</span><p style="margin-top: 10px;">Vui lòng thay thế ID YouTube thật.</p>`;
    } else {
        videoContent = `<span class="v-label">${d.title}</span><iframe src="https://www.youtube.com/embed/${d.content}?autoplay=1&rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
    }
    area.innerHTML = videoContent;
    
    // Thêm class 'read' để biến vật trang trí thành màu trắng
    if (el) {
        el.classList.add('read');
    }

    frame.style.display = 'block';
}

function showMessage(d, el) {
    if (!isPlaying) {
        audio.play().then(() => {
            isPlaying = true;
        }).catch(error => console.error("Lỗi phát nhạc:", error));
    }
    
    const frame = document.getElementById('info-frame');
    const area = document.getElementById('media-area');
    const msg = document.getElementById('msg-content');
    const sender = document.getElementById('sender-info');
    
    area.innerHTML = ''; msg.innerText = ''; sender.innerText = '';
    
    if (d.mode === 'txt') {
        frame.classList.add('wide');
        sender.innerText = `From ${d.from}`; 
        msg.innerText = d.msg;
    } else if (d.mode === 'img') {
        frame.classList.remove('wide');
        area.innerHTML = `<img src="${d.content}">`;
    }
    
    // Thêm class 'read' để biến vật trang trí thành màu trắng
    if (el) {
        el.classList.add('read');
    }
    
    frame.style.display = 'block';
}


function closeFrame() {
    document.getElementById('info-frame').style.display = 'none';
    document.getElementById('media-area').innerHTML = '';
    
    if (!isPlaying) {
        audio.play().then(() => {
            isPlaying = true;
        }).catch(error => console.error("Lỗi phát nhạc:", error));
    }
}