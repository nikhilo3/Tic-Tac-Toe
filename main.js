// console.log('script is running');
let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("[resetbtn]");
let newbtn = document.querySelector("[new-btn]");
let msg_container = document.querySelector(".msg_container");
let msg = document.querySelector(".msg");

let trunO = true; //player0 , playerX

const winPattens = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (trunO) {
            // box.innerText = "O";
            box.innerHTML = `<svg width="100%" height="100%" viewBox="0 0 152 152" fill="none" xmlns="http://www.w3.org/2000/svg">
<g style="mix-blend-mode:hard-light" filter="url(#filter0_f_14_1064)">
<mask id="path-1-inside-1_14_1064" fill="white">
<path d="M140 76C140 111.346 111.346 140 76 140C40.6538 140 12 111.346 12 76C12 40.6538 40.6538 12 76 12C111.346 12 140 40.6538 140 76ZM31.2 76C31.2 100.742 51.2576 120.8 76 120.8C100.742 120.8 120.8 100.742 120.8 76C120.8 51.2576 100.742 31.2 76 31.2C51.2576 31.2 31.2 51.2576 31.2 76Z"/>
</mask>
<path d="M140 76C140 111.346 111.346 140 76 140C40.6538 140 12 111.346 12 76C12 40.6538 40.6538 12 76 12C111.346 12 140 40.6538 140 76ZM31.2 76C31.2 100.742 51.2576 120.8 76 120.8C100.742 120.8 120.8 100.742 120.8 76C120.8 51.2576 100.742 31.2 76 31.2C51.2576 31.2 31.2 51.2576 31.2 76Z" stroke="#0094FF" stroke-width="6.93333" mask="url(#path-1-inside-1_14_1064)"/>
</g>
<g style="mix-blend-mode:hard-light" filter="url(#filter1_f_14_1064)">
<mask id="path-2-inside-2_14_1064" fill="white">
<path d="M140 76C140 111.346 111.346 140 76 140C40.6538 140 12 111.346 12 76C12 40.6538 40.6538 12 76 12C111.346 12 140 40.6538 140 76ZM31.2 76C31.2 100.742 51.2576 120.8 76 120.8C100.742 120.8 120.8 100.742 120.8 76C120.8 51.2576 100.742 31.2 76 31.2C51.2576 31.2 31.2 51.2576 31.2 76Z"/>
</mask>
<path d="M140 76C140 111.346 111.346 140 76 140C40.6538 140 12 111.346 12 76C12 40.6538 40.6538 12 76 12C111.346 12 140 40.6538 140 76ZM31.2 76C31.2 100.742 51.2576 120.8 76 120.8C100.742 120.8 120.8 100.742 120.8 76C120.8 51.2576 100.742 31.2 76 31.2C51.2576 31.2 31.2 51.2576 31.2 76Z" stroke="#0094FF" stroke-width="9.06667" mask="url(#path-2-inside-2_14_1064)"/>
</g>
<g style="mix-blend-mode:hard-light" filter="url(#filter2_ddi_14_1064)">
<mask id="path-3-inside-3_14_1064" fill="white">
<path d="M140 76C140 111.346 111.346 140 76 140C40.6538 140 12 111.346 12 76C12 40.6538 40.6538 12 76 12C111.346 12 140 40.6538 140 76ZM31.2 76C31.2 100.742 51.2576 120.8 76 120.8C100.742 120.8 120.8 100.742 120.8 76C120.8 51.2576 100.742 31.2 76 31.2C51.2576 31.2 31.2 51.2576 31.2 76Z"/>
</mask>
<path d="M140 76C140 111.346 111.346 140 76 140C40.6538 140 12 111.346 12 76C12 40.6538 40.6538 12 76 12C111.346 12 140 40.6538 140 76ZM31.2 76C31.2 100.742 51.2576 120.8 76 120.8C100.742 120.8 120.8 100.742 120.8 76C120.8 51.2576 100.742 31.2 76 31.2C51.2576 31.2 31.2 51.2576 31.2 76Z" stroke="#00B3FF" stroke-opacity="0.2" stroke-width="6.93333" mask="url(#path-3-inside-3_14_1064)"/>
</g>
<g filter="url(#filter3_f_14_1064)">
<mask id="path-4-inside-4_14_1064" fill="white">
<path d="M140 76C140 111.346 111.346 140 76 140C40.6538 140 12 111.346 12 76C12 40.6538 40.6538 12 76 12C111.346 12 140 40.6538 140 76ZM31.2 76C31.2 100.742 51.2576 120.8 76 120.8C100.742 120.8 120.8 100.742 120.8 76C120.8 51.2576 100.742 31.2 76 31.2C51.2576 31.2 31.2 51.2576 31.2 76Z"/>
</mask>
<path d="M140 76C140 111.346 111.346 140 76 140C40.6538 140 12 111.346 12 76C12 40.6538 40.6538 12 76 12C111.346 12 140 40.6538 140 76ZM31.2 76C31.2 100.742 51.2576 120.8 76 120.8C100.742 120.8 120.8 100.742 120.8 76C120.8 51.2576 100.742 31.2 76 31.2C51.2576 31.2 31.2 51.2576 31.2 76Z" stroke="#82D9FF" stroke-width="4.26667" mask="url(#path-4-inside-4_14_1064)"/>
</g>
<g filter="url(#filter4_f_14_1064)">
<mask id="path-5-inside-5_14_1064" fill="white">
<path d="M140 76C140 111.346 111.346 140 76 140C40.6538 140 12 111.346 12 76C12 40.6538 40.6538 12 76 12C111.346 12 140 40.6538 140 76ZM31.2 76C31.2 100.742 51.2576 120.8 76 120.8C100.742 120.8 120.8 100.742 120.8 76C120.8 51.2576 100.742 31.2 76 31.2C51.2576 31.2 31.2 51.2576 31.2 76Z"/>
</mask>
<path d="M140 76C140 111.346 111.346 140 76 140C40.6538 140 12 111.346 12 76C12 40.6538 40.6538 12 76 12C111.346 12 140 40.6538 140 76ZM31.2 76C31.2 100.742 51.2576 120.8 76 120.8C100.742 120.8 120.8 100.742 120.8 76C120.8 51.2576 100.742 31.2 76 31.2C51.2576 31.2 31.2 51.2576 31.2 76Z" stroke="white" stroke-width="2.13333" mask="url(#path-5-inside-5_14_1064)"/>
</g>
<defs>
<filter id="filter0_f_14_1064" x="-4" y="-4" width="160" height="160" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="8" result="effect1_foregroundBlur_14_1064"/>
</filter>
<filter id="filter1_f_14_1064" x="6.66667" y="6.66667" width="138.667" height="138.667" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="2.66667" result="effect1_foregroundBlur_14_1064"/>
</filter>
<filter id="filter2_ddi_14_1064" x="5.06667" y="10.4" width="141.867" height="141.867" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="3.46667"/>
<feGaussianBlur stdDeviation="1.33333"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.051 0 0 0 0 0.082 0 0 0 0.7 0"/>
<feBlend mode="multiply" in2="BackgroundImageFix" result="effect1_dropShadow_14_1064"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="5.33333"/>
<feGaussianBlur stdDeviation="3.46667"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.4 0 0 0 0 1 0 0 0 1 0"/>
<feBlend mode="color-dodge" in2="effect1_dropShadow_14_1064" result="effect2_dropShadow_14_1064"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_14_1064" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-0.346667" dy="0.693333"/>
<feGaussianBlur stdDeviation="0.173333"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="shape" result="effect3_innerShadow_14_1064"/>
</filter>
<filter id="filter3_f_14_1064" x="11.4667" y="11.4667" width="129.067" height="129.067" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.266667" result="effect1_foregroundBlur_14_1064"/>
</filter>
<filter id="filter4_f_14_1064" x="11.6444" y="11.6444" width="128.711" height="128.711" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.177778" result="effect1_foregroundBlur_14_1064"/>
</filter>
</defs>
</svg>
`
            trunO = false;
        } else {
            // box.innerText = "X";
            box.innerHTML = `<svg width="100%" height="100%" viewBox="0 0 152 152" fill="none" xmlns="http://www.w3.org/2000/svg">
<g style="mix-blend-mode:hard-light" filter="url(#filter0_f_14_1056)">
<path d="M77.2257 93.2868L76 92.0612L74.7744 93.2868L33.121 134.94C28.6858 139.375 21.4949 139.375 17.0597 134.94C12.6245 130.505 12.6245 123.314 17.0597 118.879L58.7131 77.2256L59.9388 75.9999L58.7131 74.7743L17.0599 33.121C12.6247 28.6858 12.6247 21.4949 17.0599 17.0597C21.4951 12.6245 28.686 12.6245 33.1212 17.0597L74.7744 58.713L76 59.9386L77.2257 58.713L118.879 17.0597C123.314 12.6245 130.505 12.6245 134.94 17.0597C139.375 21.4949 139.375 28.6858 134.94 33.121L93.2869 74.7743L92.0613 75.9999L93.2869 77.2256L134.94 118.879C139.376 123.314 139.376 130.505 134.94 134.94C130.505 139.375 123.314 139.375 118.879 134.94L77.2257 93.2868Z" stroke="#FF5C00" stroke-width="3.46667"/>
</g>
<g style="mix-blend-mode:hard-light" filter="url(#filter1_f_14_1056)">
<path d="M77.6028 92.9097L76 91.3069L74.3972 92.9097L32.7439 134.563C28.517 138.79 21.6638 138.79 17.4369 134.563C13.2099 130.336 13.2099 123.483 17.4369 119.256L59.0902 77.6027L60.693 75.9999L59.0902 74.3971L17.437 32.7439C13.2101 28.517 13.2101 21.6638 17.437 17.4369C21.6639 13.2099 28.5171 13.2099 32.7441 17.4369L74.3972 59.0901L76 60.6929L77.6028 59.0901L119.256 17.4369C123.483 13.2099 130.336 13.2099 134.563 17.4369C138.79 21.6638 138.79 28.517 134.563 32.7439L92.9098 74.3971L91.307 75.9999L92.9098 77.6027L134.563 119.256C138.79 123.483 138.79 130.336 134.563 134.563C130.336 138.79 123.483 138.79 119.256 134.563L77.6028 92.9097Z" stroke="#FF0000" stroke-width="4.53333"/>
</g>
<g style="mix-blend-mode:hard-light" filter="url(#filter2_ddi_14_1056)">
<path d="M77.2257 93.2868L76 92.0612L74.7744 93.2868L33.121 134.94C28.6858 139.375 21.4949 139.375 17.0597 134.94C12.6245 130.505 12.6245 123.314 17.0597 118.879L58.7131 77.2256L59.9388 75.9999L58.7131 74.7743L17.0599 33.121C12.6247 28.6858 12.6247 21.4949 17.0599 17.0597C21.4951 12.6245 28.686 12.6245 33.1212 17.0597L74.7744 58.713L76 59.9386L77.2257 58.713L118.879 17.0597C123.314 12.6245 130.505 12.6245 134.94 17.0597C139.375 21.4949 139.375 28.6858 134.94 33.121L93.2869 74.7743L92.0613 75.9999L93.2869 77.2256L134.94 118.879C139.376 123.314 139.376 130.505 134.94 134.94C130.505 139.375 123.314 139.375 118.879 134.94L77.2257 93.2868Z" stroke="#FF0000" stroke-opacity="0.2" stroke-width="3.46667"/>
</g>
<g filter="url(#filter3_f_14_1056)">
<path d="M76.7543 93.7582L76 93.004L75.2458 93.7582L33.5924 135.412C28.8969 140.107 21.2839 140.107 16.5883 135.412C11.8928 130.716 11.8928 123.103 16.5883 118.408L58.2417 76.7542L58.9959 75.9999L58.2417 75.2457L16.5885 33.5924C11.893 28.8969 11.893 21.2839 16.5885 16.5883C21.284 11.8928 28.897 11.8928 33.5926 16.5883L75.2458 58.2416L76 58.9958L76.7543 58.2416L118.407 16.5883C123.103 11.8928 130.716 11.8928 135.412 16.5883C140.107 21.2839 140.107 28.8969 135.412 33.5924L93.7583 75.2457L93.0041 75.9999L93.7583 76.7542L135.412 118.408C140.107 123.103 140.107 130.716 135.412 135.412C130.716 140.107 123.103 140.107 118.408 135.412L76.7543 93.7582Z" stroke="#FF9983" stroke-width="2.13333"/>
</g>
<g filter="url(#filter4_f_14_1056)">
<path d="M76.3771 94.1354L76 93.7582L75.6229 94.1354L33.9695 135.789C29.0657 140.693 21.115 140.693 16.2112 135.789C11.3074 130.885 11.3074 122.934 16.2112 118.03L57.8646 76.377L58.2417 75.9999L57.8646 75.6228L16.2114 33.9695C11.3076 29.0657 11.3076 21.115 16.2114 16.2112C21.1152 11.3074 29.0659 11.3074 33.9697 16.2112L75.6229 57.8644L76 58.2416L76.3771 57.8644L118.03 16.2112C122.934 11.3074 130.885 11.3074 135.789 16.2112C140.692 21.115 140.692 29.0657 135.789 33.9695L94.1355 75.6228L93.7583 75.9999L94.1355 76.377L135.789 118.03C140.693 122.934 140.693 130.885 135.789 135.789C130.885 140.693 122.934 140.693 118.031 135.789L76.3771 94.1354Z" stroke="white" stroke-width="1.06667"/>
</g>
<defs>
<filter id="filter0_f_14_1056" x="-4" y="-4" width="160" height="160" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="8" result="effect1_foregroundBlur_14_1056"/>
</filter>
<filter id="filter1_f_14_1056" x="6.66667" y="6.66667" width="138.667" height="138.667" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="2.66667" result="effect1_foregroundBlur_14_1056"/>
</filter>
<filter id="filter2_ddi_14_1056" x="5.06667" y="10.4" width="141.867" height="141.867" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="3.46667"/>
<feGaussianBlur stdDeviation="1.33333"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.15 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0"/>
<feBlend mode="multiply" in2="BackgroundImageFix" result="effect1_dropShadow_14_1056"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="5.33333"/>
<feGaussianBlur stdDeviation="3.46667"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.8 0 0 0 0 0.19 0 0 0 0 0.19 0 0 0 1 0"/>
<feBlend mode="color-dodge" in2="effect1_dropShadow_14_1056" result="effect2_dropShadow_14_1056"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_14_1056" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-0.346667" dy="0.693333"/>
<feGaussianBlur stdDeviation="0.173333"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="shape" result="effect3_innerShadow_14_1056"/>
</filter>
<filter id="filter3_f_14_1056" x="11.4667" y="11.4667" width="129.067" height="129.067" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.266667" result="effect1_foregroundBlur_14_1056"/>
</filter>
<filter id="filter4_f_14_1056" x="11.6444" y="11.6444" width="128.711" height="128.711" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.177778" result="effect1_foregroundBlur_14_1056"/>
</filter>
</defs>
</svg>
`
            trunO = true;
        }
        box.disabled = true;

        checkWinner();
        checkDraw()

    });
});

const checkDraw = () => {
    let isDraw = true;

    for (let box of boxes) {
        if (box.innerHTML === "") {
            isDraw = false;
            break;
        }
    }

    if (isDraw) {
        msg.textContent = "Match Draw";
        msg_container.classList.remove('hide');
    }
};


const checkWinner = () => {
    for (let pattern of winPattens) {
        // console.log(pattern[0], pattern[1], pattern[2]);

        let pos1 = boxes[pattern[0]].innerHTML
        let pos2 = boxes[pattern[1]].innerHTML
        let pos3 = boxes[pattern[2]].innerHTML

        // console.log(pos1,pos2,pos3);


        if (pos1 != "" && pos1 === pos2 && pos2 === pos3) {
            console.log(`winner is : ${pos1}`);
            showWinner();
            for (let box of boxes) {
                box.disabled = true;
            }
        }
    }
};

const showWinner = () => {


    msg.textContent = `${trunO ? 'X' : 'O'} Wins!`
    msg_container.classList.remove('hide');
}

const resetGame = () => {
    trunO = true;
    enableButton();
    msg_container.classList.add('hide');
}

const enableButton = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.textContent = ""
    }
}

resetbtn.addEventListener('click', resetGame);
newbtn.addEventListener('click', resetGame);