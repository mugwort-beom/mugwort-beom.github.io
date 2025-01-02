document.addEventListener("DOMContentLoaded", () => {

    const modalTriggers = document.querySelectorAll(".cd-modal-trigger"),
        transitionLayer = document.querySelector(".cd-transition-layer"),
        transitionBackground = transitionLayer.querySelector(".bg-layer"),
        modalWindows = document.querySelectorAll(".cd-modal");

    // 배경 이미지 초기화 (기본설정)
    const originalBackgroundImage = "url(img/ink.png)";

    // 애니메이션 종료 후 배경 이미지 복원
    function animationEndHandler() {
        const animEnd = () => {
            if (transitionLayer.classList.contains("closing")) {
                transitionLayer.classList.remove("closing", "opening", "visible");
            }
        };

        transitionBackground.addEventListener("animationend", animEnd);
        transitionBackground.addEventListener("webkitAnimationend", animEnd);
    }

    animationEndHandler();

    modalTriggers.forEach(modalTrigger => {
        modalTrigger.addEventListener("click", e => {
            const targetId = e.target.getAttribute("data-target");
            const modalWindow = document.getElementById(targetId);
            const delay = document.querySelector(".no-cssanimations") ? 0 : 600;

            e.preventDefault();

            // 모든 모달을 숨기고 클릭한 모달만 보이도록 설정
            modalWindows.forEach(modal => modal.classList.remove('visible'));
            modalWindow.classList.add("visible");

            // 배경 레이어 애니메이션 처리
            transitionLayer.classList.add("visible", "opening");
			
            /* 길드원 정리 (참여인원만 변수명 저장)
				// 표격 = pyo 
				// 킬브리안 = kill (#540404)
				// 모켠 = mokyeon
				// 갓감자 = potato
				// 공덕동뿡뿡이 = ppoung (#e0d0c1)
				// 김기정 = 
				// 김태벽 = taebyeok
				// 달사탕쏨 = 
				// 쑥먹은범 = beom
				// 릭펠 = 
				// 바다위붉은달 = 
				// 아브헤안 = 
				// 아일레아 = 
				// 얼가투구캐 = 
				// 요힐 = 
				// 율휘연 = 
				// 융뉵 =
				// 봄짠 = bom
				// 아모르네 = 
				// 김택동 = 
				// 네르타흐 = 
				// 릴켸 = 
				// 아일라노레 = 
				// 유삐옹 = 
				// 태조앙건 = 
			*/
            // 클릭한 모달에 맞는 배경 이미지 설정
            if (modalWindow.id === "modal-beom") {
				 // 쑥먹은범 = beom
                transitionBackground.style.backgroundImage = "url(img/ink_beom.png)";
            } else if (modalWindow.id === "modal-potato") {
				// 갓감자 = potato
                transitionBackground.style.backgroundImage = "url(img/ink_potato.png)";
            } else if (modalWindow.id === "modal-pyo") {
				// 표격 = pyo
                transitionBackground.style.backgroundImage = "url(img/ink_pyo.png)";
            } else if (modalWindow.id === "modal-mokyeon") {
				// 모켠 = mokyeon
                transitionBackground.style.backgroundImage = "url(img/ink_mokyeon.png)";
            } else if (modalWindow.id === "modal-taebyeok") {
				// 김태벽 = taebyeok
                transitionBackground.style.backgroundImage = "url(img/ink_taebyeok.png)";
            } else if (modalWindow.id === "modal-kill") {
				// 킬브리안 = kill
                transitionBackground.style.backgroundImage = "url(img/ink_kill.png)";
            } else if (modalWindow.id === "modal-ppoung") {
				// 공덕동뿡뿡이 = ppoung
                transitionBackground.style.backgroundImage = "url(img/ink_ppoung.png)";
            } else if (modalWindow.id === "modal-bom") {
				// 봄짠 = bom
                transitionBackground.style.backgroundImage = "url(img/ink_bom.png)";
            } else if (modalWindow.id === "modal-johill") {
				// 요힐 = johill
                transitionBackground.style.backgroundImage = "url(img/ink_johill.png)";
            } 
			else {
				// 기본설정
                transitionBackground.style.backgroundImage = originalBackgroundImage; // 기본 배경
            }

            setTimeout(() => {
                modalWindow.classList.add("visible");
            }, delay);
        });
    });

    modalWindows.forEach(modalWindow => {
        modalWindow.querySelector(".modal-close").addEventListener("click", e => {
            e.preventDefault();
            const modalId = modalWindow.id;
            const targetModal = document.getElementById(modalId);

            // 모달 닫을 때 배경 이미지 변경하지 않음
            transitionLayer.classList.add("closing");
            targetModal.classList.remove("visible");
        });
    });
});
