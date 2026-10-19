"use strict";

/* =========================================================
   BANCO DE DADOS DAS AERONAVES
========================================================= */

const aircraftData = {
    kc390: {
        name: "KC-390 Millennium",
        category: "Defesa e transporte militar",
        manufacturer: "Embraer",
        type: "Jato militar multimissão",
        application: "Transporte e apoio operacional",
        icon: "fa-solid fa-plane",

        curiosities: [
            {
                highlight:
                    "O KC-390 Millennium foi desenvolvido para realizar diferentes tipos de missão utilizando uma única plataforma.",

                details: [
                    "Pode transportar tropas, veículos, equipamentos e cargas.",
                    "Pode ser configurado para evacuação aeromédica.",
                    "Também pode atuar em missões de busca e salvamento.",
                    "É capaz de operar em pistas temporárias ou não pavimentadas."
                ]
            },

            {
                highlight:
                    "A aeronave pode ser equipada para realizar reabastecimento em voo.",

                details: [
                    "O sistema permite transferir combustível para outras aeronaves.",
                    "Dependendo da configuração, o KC-390 também pode receber combustível durante o voo.",
                    "Essa capacidade aumenta o alcance de diferentes missões.",
                    "Os equipamentos de reabastecimento podem ser instalados conforme a necessidade operacional."
                ]
            },

            {
                highlight:
                    "O compartimento de carga do KC-390 foi projetado para oferecer flexibilidade operacional.",

                details: [
                    "A aeronave possui uma rampa traseira para embarque e desembarque.",
                    "A rampa facilita o transporte de veículos e cargas volumosas.",
                    "Cargas e tropas também podem ser lançadas durante o voo.",
                    "O interior pode receber diferentes configurações de missão."
                ]
            },

            {
                highlight:
                    "O KC-390 utiliza motores a jato, característica que proporciona velocidade elevada para sua categoria.",

                details: [
                    "A velocidade ajuda a reduzir o tempo necessário para chegar à área da missão.",
                    "A aeronave foi projetada com sistemas digitais modernos.",
                    "O cockpit utiliza tecnologia fly-by-wire.",
                    "O projeto combina transporte tático com desempenho de uma aeronave a jato."
                ]
            }
        ]
    },

    "super-tucano": {
        name: "A-29 Super Tucano",
        category: "Defesa e treinamento",
        manufacturer: "Embraer",
        type: "Aeronave turboélice",
        application: "Treinamento e missões operacionais",
        icon: "fa-solid fa-jet-fighter-up",

        curiosities: [
            {
                highlight:
                    "O A-29 Super Tucano combina características de uma aeronave de treinamento avançado com capacidades operacionais.",

                details: [
                    "Pode ser utilizado na formação avançada de pilotos.",
                    "Possui cockpit desenvolvido para aproximar o treinamento de aeronaves modernas.",
                    "Pode participar de missões de vigilância e reconhecimento.",
                    "O projeto foi pensado para operar com eficiência em diferentes ambientes."
                ]
            },

            {
                highlight:
                    "O Super Tucano utiliza motor turboélice, combinando autonomia, eficiência e bom desempenho em velocidades menores.",

                details: [
                    "O turboélice é adequado para missões que exigem permanência prolongada no ar.",
                    "A aeronave pode operar em pistas com infraestrutura limitada.",
                    "O consumo é menor quando comparado ao de muitos aviões militares a jato.",
                    "A configuração favorece missões de patrulhamento e treinamento."
                ]
            },

            {
                highlight:
                    "A aeronave foi projetada para suportar condições operacionais exigentes.",

                details: [
                    "O projeto considera operações em regiões quentes e úmidas.",
                    "Pode ser usado em áreas remotas.",
                    "A estrutura foi desenvolvida para suportar diferentes perfis de missão.",
                    "A facilidade de manutenção é uma característica importante da plataforma."
                ]
            },

            {
                highlight:
                    "O A-29 é utilizado por forças aéreas de diferentes países.",

                details: [
                    "A plataforma atende necessidades de treinamento e vigilância.",
                    "Cada operador pode utilizar configurações adaptadas às próprias missões.",
                    "O avião possui sistemas modernos de navegação e comunicação.",
                    "A versatilidade está entre as características mais conhecidas do modelo."
                ]
            }
        ]
    },

    "praetor-500": {
        name: "Praetor 500",
        category: "Aviação executiva",
        manufacturer: "Embraer",
        type: "Jato executivo médio",
        application: "Viagens executivas",
        icon: "fa-solid fa-plane-departure",

        curiosities: [
            {
                highlight:
                    "O Praetor 500 foi desenvolvido para unir alcance, conforto e tecnologia em um jato executivo de porte médio.",

                details: [
                    "A cabine foi projetada para viagens executivas confortáveis.",
                    "A aeronave utiliza sistemas digitais modernos.",
                    "O modelo oferece recursos de conectividade durante o voo.",
                    "O projeto busca aproveitar bem o espaço interno disponível."
                ]
            },

            {
                highlight:
                    "O Praetor 500 utiliza controles de voo fly-by-wire.",

                details: [
                    "O sistema transmite comandos do piloto eletronicamente.",
                    "Computadores auxiliam no controle da aeronave.",
                    "A tecnologia pode contribuir para uma operação mais precisa.",
                    "O sistema também ajuda a reduzir a carga de trabalho da tripulação."
                ]
            },

            {
                highlight:
                    "A cabine do Praetor 500 foi projetada pensando na produtividade e no conforto dos passageiros.",

                details: [
                    "Os passageiros podem trabalhar durante a viagem.",
                    "O interior pode receber diferentes configurações de assentos.",
                    "A iluminação da cabine contribui para uma experiência mais agradável.",
                    "Compartimentos internos permitem organizar itens utilizados durante o voo."
                ]
            },

            {
                highlight:
                    "O Praetor 500 faz parte da família de jatos executivos Praetor.",

                details: [
                    "A família também inclui o Praetor 600.",
                    "Os dois modelos compartilham elementos de design e tecnologia.",
                    "O Praetor 500 ocupa a categoria de jatos executivos médios.",
                    "O modelo foi desenvolvido e produzido pela Embraer."
                ]
            }
        ]
    },

    "praetor-600": {
        name: "Praetor 600",
        category: "Aviação executiva",
        manufacturer: "Embraer",
        type: "Jato executivo super-médio",
        application: "Viagens executivas de longa distância",
        icon: "fa-solid fa-plane-up",

        curiosities: [
            {
                highlight:
                    "O Praetor 600 foi desenvolvido para oferecer grande alcance dentro da categoria de jatos executivos super-médios.",

                details: [
                    "A aeronave foi projetada para conectar destinos separados por longas distâncias.",
                    "O modelo combina alcance com uma cabine confortável.",
                    "A capacidade permite realizar diferentes rotas executivas.",
                    "O planejamento da viagem depende das condições, carga e configuração da aeronave."
                ]
            },

            {
                highlight:
                    "Assim como o Praetor 500, o Praetor 600 utiliza tecnologia fly-by-wire.",

                details: [
                    "Os comandos dos pilotos são processados eletronicamente.",
                    "O sistema auxilia no controle e na estabilidade da aeronave.",
                    "A tecnologia é encontrada em diferentes aeronaves modernas.",
                    "Os computadores de voo trabalham em conjunto com os sistemas da aeronave."
                ]
            },

            {
                highlight:
                    "A cabine do Praetor 600 foi pensada para permitir trabalho, descanso e comunicação durante a viagem.",

                details: [
                    "O interior pode ser configurado conforme a necessidade do operador.",
                    "Os passageiros contam com recursos de conectividade.",
                    "O projeto utiliza iluminação e acabamento voltados à aviação executiva.",
                    "A cabine oferece áreas para armazenamento de objetos pessoais."
                ]
            },

            {
                highlight:
                    "O Praetor 600 pertence à categoria super-média da aviação executiva.",

                details: [
                    "Essa categoria busca equilibrar espaço interno, desempenho e alcance.",
                    "O modelo é maior e possui maior alcance que o Praetor 500.",
                    "O avião foi desenvolvido pela Embraer.",
                    "Tecnologia e eficiência estão entre os principais pontos do projeto."
                ]
            }
        ]
    }
};


/* =========================================================
   CURIOSIDADES GERAIS
========================================================= */

const generalCuriosities = [
    "A sustentação de uma aeronave é produzida principalmente pela diferença de pressão criada ao redor das asas.",

    "Os flaps alteram a forma das asas e ajudam a gerar mais sustentação durante pousos e decolagens.",

    "O gravador de voo, conhecido como caixa-preta, normalmente utiliza cores chamativas para facilitar sua localização.",

    "Os pilotos utilizam listas de verificação para confirmar procedimentos importantes antes, durante e depois do voo.",

    "O formato das pontas das asas pode ajudar a reduzir o arrasto e melhorar a eficiência aerodinâmica.",

    "A altitude de uma aeronave é normalmente indicada em pés na aviação internacional.",

    "O controle de tráfego aéreo ajuda a organizar e separar aeronaves durante diferentes etapas do voo.",

    "Uma aeronave pode possuir sistemas redundantes, permitindo que outro sistema assuma uma função caso ocorra uma falha.",

    "A pressão da cabine permite que os ocupantes permaneçam em condições adequadas durante voos em grandes altitudes.",

    "A velocidade do vento, a temperatura, o peso e as condições da pista influenciam o desempenho de uma aeronave.",

    "O trem de pouso absorve grande parte do impacto produzido no momento em que a aeronave toca a pista.",

    "Os spoilers instalados nas asas ajudam a reduzir a sustentação e podem auxiliar na desaceleração após o pouso."
];


/* =========================================================
   SELEÇÃO DOS ELEMENTOS DA PÁGINA
========================================================= */

const modal = document.getElementById("aircraft-modal");

const modalCloseButton =
    document.getElementById("modal-close-button");

const modalAircraftIcon =
    document.getElementById("modal-aircraft-icon");

const modalAircraftCategory =
    document.getElementById("modal-aircraft-category");

const modalAircraftName =
    document.getElementById("modal-aircraft-name");

const modalManufacturer =
    document.getElementById("modal-manufacturer");

const modalType =
    document.getElementById("modal-type");

const modalApplication =
    document.getElementById("modal-application");

const modalMainCuriosity =
    document.getElementById("modal-main-curiosity");

const modalCuriosityList =
    document.getElementById("modal-curiosity-list");

const modalCounter =
    document.getElementById("modal-counter");

const previousCuriosityButton =
    document.getElementById("previous-curiosity-button");

const nextCuriosityButton =
    document.getElementById("next-curiosity-button");

const aircraftButtons =
    document.querySelectorAll(".aircraft-button");

const randomCuriosityButton =
    document.getElementById("random-curiosity-button");

const newCuriosityButton =
    document.getElementById("new-curiosity-button");

const generalCuriosityText =
    document.getElementById("general-curiosity-text");

const menuButton =
    document.getElementById("menu-button");

const navigationMenu =
    document.getElementById("navigation-menu");

const navigationLinks =
    document.querySelectorAll(".navigation-menu a");

const backToTopButton =
    document.getElementById("back-to-top");

const currentYearElement =
    document.getElementById("current-year");

const dynamicObjectsContainer =
    document.getElementById("dynamic-objects");


/* =========================================================
   VARIÁVEIS DE CONTROLE
========================================================= */

let selectedAircraftKey = "kc390";

let currentAircraftCuriosityIndex = 0;

let lastGeneralCuriosityIndex = -1;

let lastFocusedElement = null;


/* =========================================================
   MODAL DAS AERONAVES
========================================================= */

function updateAircraftModal() {
    const aircraft =
        aircraftData[selectedAircraftKey];

    const curiosity =
        aircraft.curiosities[currentAircraftCuriosityIndex];

    modalAircraftCategory.textContent =
        aircraft.category;

    modalAircraftName.textContent =
        aircraft.name;

    modalManufacturer.textContent =
        aircraft.manufacturer;

    modalType.textContent =
        aircraft.type;

    modalApplication.textContent =
        aircraft.application;

    modalMainCuriosity.textContent =
        curiosity.highlight;

    modalAircraftIcon.innerHTML =
        `<i class="${aircraft.icon}"></i>`;

    modalCuriosityList.innerHTML = "";

    curiosity.details.forEach(function (detail) {
        const listItem =
            document.createElement("li");

        listItem.textContent = detail;

        modalCuriosityList.appendChild(listItem);
    });

    modalCounter.textContent =
        `${currentAircraftCuriosityIndex + 1} de ${aircraft.curiosities.length}`;
}


function openAircraftModal(aircraftKey) {
    if (!aircraftData[aircraftKey]) {
        return;
    }

    selectedAircraftKey = aircraftKey;
    currentAircraftCuriosityIndex = 0;

    lastFocusedElement =
        document.activeElement;

    updateAircraftModal();

    modal.classList.add("active");

    modal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add(
        "modal-open"
    );

    window.setTimeout(function () {
        modalCloseButton.focus();
    }, 100);
}


function closeAircraftModal() {
    modal.classList.remove("active");

    modal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove(
        "modal-open"
    );

    if (lastFocusedElement) {
        lastFocusedElement.focus();
    }
}


function showNextAircraftCuriosity() {
    const aircraft =
        aircraftData[selectedAircraftKey];

    currentAircraftCuriosityIndex++;

    if (
        currentAircraftCuriosityIndex >=
        aircraft.curiosities.length
    ) {
        currentAircraftCuriosityIndex = 0;
    }

    updateAircraftModal();
}


function showPreviousAircraftCuriosity() {
    const aircraft =
        aircraftData[selectedAircraftKey];

    currentAircraftCuriosityIndex--;

    if (currentAircraftCuriosityIndex < 0) {
        currentAircraftCuriosityIndex =
            aircraft.curiosities.length - 1;
    }

    updateAircraftModal();
}


/* =========================================================
   EVENTOS DOS BOTÕES DAS AERONAVES
========================================================= */

aircraftButtons.forEach(function (button) {
    button.addEventListener(
        "click",
        function () {
            const aircraftKey =
                button.dataset.aircraft;

            openAircraftModal(aircraftKey);
        }
    );
});


modalCloseButton.addEventListener(
    "click",
    closeAircraftModal
);


nextCuriosityButton.addEventListener(
    "click",
    showNextAircraftCuriosity
);


previousCuriosityButton.addEventListener(
    "click",
    showPreviousAircraftCuriosity
);


/* Fecha o modal quando o usuário clica no fundo */

modal.addEventListener(
    "click",
    function (event) {
        if (event.target === modal) {
            closeAircraftModal();
        }
    }
);


/* =========================================================
   CURIOSIDADE ALEATÓRIA DAS AERONAVES
========================================================= */

function openRandomAircraftCuriosity() {
    const aircraftKeys =
        Object.keys(aircraftData);

    const randomAircraftIndex =
        Math.floor(
            Math.random() *
            aircraftKeys.length
        );

    selectedAircraftKey =
        aircraftKeys[randomAircraftIndex];

    const selectedAircraft =
        aircraftData[selectedAircraftKey];

    currentAircraftCuriosityIndex =
        Math.floor(
            Math.random() *
            selectedAircraft.curiosities.length
        );

    lastFocusedElement =
        document.activeElement;

    updateAircraftModal();

    modal.classList.add("active");

    modal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add(
        "modal-open"
    );

    window.setTimeout(function () {
        modalCloseButton.focus();
    }, 100);
}


randomCuriosityButton.addEventListener(
    "click",
    openRandomAircraftCuriosity
);


/* =========================================================
   CURIOSIDADES GERAIS
========================================================= */

function showNewGeneralCuriosity() {
    let randomIndex;

    if (generalCuriosities.length === 1) {
        randomIndex = 0;
    } else {
        do {
            randomIndex =
                Math.floor(
                    Math.random() *
                    generalCuriosities.length
                );
        } while (
            randomIndex ===
            lastGeneralCuriosityIndex
        );
    }

    lastGeneralCuriosityIndex =
        randomIndex;

    generalCuriosityText.classList.add(
        "changing-curiosity"
    );

    window.setTimeout(function () {
        generalCuriosityText.textContent =
            generalCuriosities[randomIndex];

        generalCuriosityText.classList.remove(
            "changing-curiosity"
        );
    }, 180);
}


newCuriosityButton.addEventListener(
    "click",
    showNewGeneralCuriosity
);


/* =========================================================
   MENU PARA CELULAR
========================================================= */

function toggleMobileMenu() {
    const menuIsOpen =
        navigationMenu.classList.toggle(
            "active"
        );

    menuButton.classList.toggle(
        "active",
        menuIsOpen
    );

    menuButton.setAttribute(
        "aria-expanded",
        String(menuIsOpen)
    );

    menuButton.setAttribute(
        "aria-label",
        menuIsOpen
            ? "Fechar menu de navegação"
            : "Abrir menu de navegação"
    );
}


function closeMobileMenu() {
    navigationMenu.classList.remove(
        "active"
    );

    menuButton.classList.remove(
        "active"
    );

    menuButton.setAttribute(
        "aria-expanded",
        "false"
    );

    menuButton.setAttribute(
        "aria-label",
        "Abrir menu de navegação"
    );
}


menuButton.addEventListener(
    "click",
    toggleMobileMenu
);


navigationLinks.forEach(function (link) {
    link.addEventListener(
        "click",
        closeMobileMenu
    );
});


window.addEventListener(
    "resize",
    function () {
        if (window.innerWidth > 980) {
            closeMobileMenu();
        }
    }
);


/* =========================================================
   BOTÃO VOLTAR AO TOPO
========================================================= */

function updateBackToTopButton() {
    if (window.scrollY > 550) {
        backToTopButton.classList.add(
            "visible"
        );
    } else {
        backToTopButton.classList.remove(
            "visible"
        );
    }
}


window.addEventListener(
    "scroll",
    updateBackToTopButton,
    {
        passive: true
    }
);


backToTopButton.addEventListener(
    "click",
    function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
);


/* =========================================================
   OBJETOS DINÂMICOS NO FUNDO
========================================================= */

const dynamicObjectIcons = [
    "fa-solid fa-plane",
    "fa-solid fa-plane-up",
    "fa-solid fa-jet-fighter-up",
    "fa-solid fa-location-arrow"
];


function createDynamicFlyingObject() {
    if (!dynamicObjectsContainer) {
        return;
    }

    const object =
        document.createElement("i");

    const randomIcon =
        dynamicObjectIcons[
            Math.floor(
                Math.random() *
                dynamicObjectIcons.length
            )
        ];

    const randomTop =
        Math.floor(
            Math.random() * 76
        ) + 10;

    const randomSize =
        Math.floor(
            Math.random() * 18
        ) + 18;

    const randomDuration =
        Math.floor(
            Math.random() * 10
        ) + 13;

    const randomOpacity =
        (
            Math.random() * 0.08 +
            0.05
        ).toFixed(2);

    object.className =
        `${randomIcon} dynamic-flying-object`;

    object.style.top =
        `${randomTop}%`;

    object.style.fontSize =
        `${randomSize}px`;

    object.style.opacity =
        randomOpacity;

    object.style.animationDuration =
        `${randomDuration}s`;

    dynamicObjectsContainer.appendChild(
        object
    );

    window.setTimeout(function () {
        object.remove();
    }, randomDuration * 1000);
}


function startDynamicBackground() {
    createDynamicFlyingObject();

    window.setInterval(
        createDynamicFlyingObject,
        5000
    );
}


/* =========================================================
   EFEITO SUAVE NOS CARTÕES
========================================================= */

const aircraftCards =
    document.querySelectorAll(
        ".aircraft-card"
    );


function addCardTiltEffect() {
    if (
        window.matchMedia(
            "(pointer: coarse)"
        ).matches
    ) {
        return;
    }

    aircraftCards.forEach(function (card) {
        card.addEventListener(
            "mousemove",
            function (event) {
                const cardArea =
                    card.getBoundingClientRect();

                const mouseX =
                    event.clientX -
                    cardArea.left;

                const mouseY =
                    event.clientY -
                    cardArea.top;

                const centerX =
                    cardArea.width / 2;

                const centerY =
                    cardArea.height / 2;

                const rotateY =
                    (
                        (mouseX - centerX) /
                        centerX
                    ) * 2.5;

                const rotateX =
                    (
                        (centerY - mouseY) /
                        centerY
                    ) * 2.5;

                card.style.transform =
                    `perspective(900px)
                     translateY(-9px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)`;
            }
        );


        card.addEventListener(
            "mouseleave",
            function () {
                card.style.transform = "";
            }
        );
    });
}


/* =========================================================
   ANIMAÇÃO DE ENTRADA DAS SEÇÕES
========================================================= */

const animatedElements =
    document.querySelectorAll(
        ".aircraft-card, " +
        ".curiosity-panel, " +
        ".about-visual, " +
        ".about-content"
    );


function startScrollAnimations() {
    if (
        !("IntersectionObserver" in window)
    ) {
        animatedElements.forEach(
            function (element) {
                element.classList.add(
                    "element-visible"
                );
            }
        );

        return;
    }

    const observer =
        new IntersectionObserver(
            function (entries) {
                entries.forEach(
                    function (entry) {
                        if (
                            entry.isIntersecting
                        ) {
                            entry.target
                                .classList.add(
                                    "element-visible"
                                );

                            observer.unobserve(
                                entry.target
                            );
                        }
                    }
                );
            },
            {
                threshold: 0.15
            }
        );


    animatedElements.forEach(
        function (element) {
            element.classList.add(
                "element-to-animate"
            );

            observer.observe(element);
        }
    );
}


/* =========================================================
   TECLADO E ACESSIBILIDADE
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {
        const modalIsOpen =
            modal.classList.contains(
                "active"
            );

        if (
            event.key === "Escape" &&
            modalIsOpen
        ) {
            closeAircraftModal();
        }


        if (
            event.key === "ArrowRight" &&
            modalIsOpen
        ) {
            showNextAircraftCuriosity();
        }


        if (
            event.key === "ArrowLeft" &&
            modalIsOpen
        ) {
            showPreviousAircraftCuriosity();
        }


        if (
            event.key === "Escape" &&
            navigationMenu.classList.contains(
                "active"
            )
        ) {
            closeMobileMenu();

            menuButton.focus();
        }
    }
);


/* Mantém o foco dentro do modal */

modal.addEventListener(
    "keydown",
    function (event) {
        if (event.key !== "Tab") {
            return;
        }

        const focusableElements =
            modal.querySelectorAll(
                "button:not([disabled]), " +
                "a[href], " +
                "input:not([disabled]), " +
                "select:not([disabled]), " +
                "textarea:not([disabled]), " +
                "[tabindex]:not([tabindex='-1'])"
            );

        if (
            focusableElements.length === 0
        ) {
            return;
        }

        const firstElement =
            focusableElements[0];

        const lastElement =
            focusableElements[
                ements.length - 1
            ];


        if (
            event.shiftKey &&
            document.activeElement ===
            firstElement
        ) {
            event.preventDefault();

            lastElement.focus();
        } else if (
            !event.shiftKey &&
            document.activeElement ===
            lastElement
        ) {
            event.preventDefault();

            firstElement.focus();
        }
    }
);


/* =========================================================
   ANO AUTOMÁTICO NO RODAPÉ
========================================================= */

function updateCurrentYear() {
    if (!currentYearElement) {
        return;
    }

    currentYearElement.textContent =
        new Date().getFullYear();
}


/* =========================================================
   ESTILOS CRIADOS PELO JAVASCRIPT
========================================================= */

function addJavaScriptStyles() {
    const style =
        document.createElement("style");

    style.textContent = `
        .dynamic-flying-object {
            position: fixed;
            left: -90px;
            z-index: -5;

            color: #1677ff;

            pointer-events: none;

            animation-name: dynamic-object-flight;
            animation-timing-function: linear;
            animation-fill-mode: forwards;
        }

        @keyframes dynamic-object-flight {
            0% {
                left: -90px;

                transform:
                    translateY(15px)
                    rotate(-8deg);
            }

            35% {
                transform:
                    translateY(-22px)
                    rotate(-4deg);
            }

            70% {
                transform:
                    translateY(18px)
                    rotate(-7deg);
            }

            100% {
                left: calc(100vw + 100px);

                transform:
                    translateY(-10px)
                    rotate(-5deg);
            }
        }

        .changing-curiosity {
            opacity: 0;

            transform:
                translateY(8px);

            transition:
                opacity 0.18s ease,
                transform 0.18s ease;
        }

        #general-curiosity-text {
            transition:
                opacity 0.25s ease,
                transform 0.25s ease;
        }

        .element-to-animate {
            opacity: 0;

            transform:
                translateY(35px);

            transition:
                opacity 0.75s ease,
                transform 0.75s ease;
        }

        .element-to-animate.element-visible {
            opacity: 1;

            transform:
                translateY(0);
        }

        .aircraft-card:nth-child(2) {
            transition-delay: 0.08s;
        }

        .aircraft-card:nth-child(3) {
            transition-delay: 0.16s;
        }

        .aircraft-card:nth-child(4) {
            transition-delay: 0.24s;
        }

        @media (prefers-reduced-motion: reduce) {
            .dynamic-flying-object {
                display: none;
            }

            .element-to-animate {
                opacity: 1;
                transform: none;
            }
        }
    `;

    document.head.appendChild(style);
}


/* =========================================================
   INICIALIZAÇÃO DO SITE
========================================================= */

function initializeWebsite() {
    updateCurrentYear();

    updateBackToTopButton();

    addJavaScriptStyles();

    addCardTiltEffect();

    startScrollAnimations();

    startDynamicBackground();
}


document.addEventListener(
    "DOMContentLoaded",
    initializeWebsite
);