(function () {
    "use strict";

    const cases = {
        "smartcpet": {
            category: "Biomedical AI / AI Engineering / Embedded System",
            title: "SmartCPET - Portable AI Cardiopulmonary Exercise Testing System",
            summary: "AI-powered portable cardiopulmonary exercise testing concept for South Asian football clubs, combining biomedical sensors, real-time dashboarding, machine learning/deep learning direction, and AI-assisted reporting.",
            stack: ["Arduino Mega", "Raspberry Pi 4", "ECG", "SpO2", "MQ-135", "Thermistor", "MPU6050", "Python", "Socket.IO", "Next.js", "Recharts", "Appwrite", "CNN", "Machine Learning"],
            sections: [
                ["Problem", "Traditional CPET systems are expensive and difficult to access for many local sports and rehabilitation settings. The project explores how portable sensing and AI-assisted reporting could make cardiopulmonary screening more practical."],
                ["What I built", "A portable system concept that combines biomedical sensing, real-time dashboarding, machine learning/deep learning direction, and AI-assisted interpretation workflows."],
                ["Architecture", "Sensor layer for ECG, SpO2, gas, temperature, and motion signals; edge processing through microcontroller/Raspberry Pi; real-time transport with Socket.IO; dashboard visualization with Next.js and Recharts; reporting/storage through Appwrite-style architecture."],
                ["Key features", "Real-time physiological monitoring, athlete-oriented testing workflow, AI-assisted risk/reporting concept, and dashboard-focused clinical readability."],
                ["My role", "System concept, sensor/software architecture, dashboard planning, AI workflow design, documentation, and presentation."],
                ["Current status", "Research concept and prototype direction. Hardware bench/wearable photos were not available in the provided asset folder, so the homepage uses poster/presentation proof only."],
                ["What I learned", "Biomedical AI systems need careful signal context, clear UX for non-technical reviewers, and honest labeling of prototype versus deployed capability."],
                ["Next steps", "Attach final hardware images, add architecture diagrams, validate signal quality, and connect a reproducible reporting pipeline."]
            ],
            links: [
                ["GitHub profile", "https://github.com/shadmanrahman1"],
                ["Contact for details", "mailto:official.shadmanrahman@gmail.com"]
            ]
        },
        "second-brain": {
            category: "AI Engineering / LLM Application / Personal AI System",
            title: "Second Brain - Self-hosted AI Workspace",
            summary: "Self-hosted AI workspace for documents, research, RAG, model routing, artifacts, OCR, and low-cost AI productivity.",
            stack: ["FastAPI", "SSE", "Next.js", "TypeScript", "Appwrite", "Qdrant", "OpenRouter", "Groq", "Azure OCR", "Tavily", "Brave", "Crawl4AI", "MLOps-aware deployment"],
            sections: [
                ["Problem", "Research and personal knowledge workflows become scattered across documents, chat tools, browser tabs, and model providers."],
                ["What I built", "A self-hosted AI workspace direction that connects document ingestion, retrieval, model routing, and streaming chat workflows."],
                ["Architecture", "Backend APIs with FastAPI, streaming responses with SSE, document storage/indexing, vector retrieval through Qdrant-style search, and provider routing for cost-aware LLM use."],
                ["Key features", "Document QA, OCR ingestion, artifact-style outputs, model switching, research search, and low-cost workflow automation."],
                ["My role", "AI engineering, architecture planning, backend/frontend integration, RAG design, provider routing, and deployment workflow exploration."],
                ["Current status", "In progress. The homepage uses the provided coding workspace image as software build proof."],
                ["What I learned", "Streaming UX, provider abstraction, retrieval quality, and cost control matter as much as model choice."],
                ["Next steps", "Publish project-specific screenshots, add exact repo/demo links, and document the ingestion and retrieval pipeline."]
            ],
            links: [
                ["GitHub profile", "https://github.com/shadmanrahman1"],
                ["Contact for details", "mailto:official.shadmanrahman@gmail.com"]
            ]
        },
        "visdrone": {
            category: "Computer Vision / Deep Learning / Aerial Object Tracking",
            title: "VisDrone Tracking - YOLOv8s + ByteTrack",
            summary: "Drone-based object detection and multi-object tracking pipeline using YOLOv8s and ByteTrack on the VisDrone dataset, focused on pedestrians, people, and cars.",
            stack: ["YOLOv8s", "ByteTrack", "VisDrone2019-DET", "OpenCV", "PyTorch", "Deep Learning", "Computer Vision", "Evaluation Metrics"],
            sections: [
                ["Problem", "Drone videos contain dense, tiny objects, so practical aerial analytics need both detection accuracy and stable tracking across frames."],
                ["What I built", "An end-to-end VisDrone pipeline that preprocesses annotations, fine-tunes YOLOv8s, runs detection, adds ByteTrack IDs, overlays per-class counts, and generates evaluation outputs."],
                ["Architecture", "VisDrone annotations are converted into a focused 3-class YOLO format for pedestrians, people, and cars; YOLOv8s performs detection; ByteTrack assigns persistent IDs and motion trails; OpenCV handles frame/video processing; metrics and visual samples are written to output folders."],
                ["Key features", "Aerial object detection, pedestrian/person/car counting, persistent tracking IDs, motion trails, precision-recall outputs, confusion matrix, and mAP evaluation."],
                ["My role", "Computer vision pipeline implementation, dataset preprocessing, training/evaluation setup, tracking integration, output visualization, and documentation."],
                ["Current status", "Published repository with a reproducible pipeline and documented results."],
                ["What I learned", "Aerial detection is challenging because object scale, crowd density, and tracking stability matter as much as the base model."],
                ["Next steps", "Add more demo clips, compare model sizes, and document runtime tradeoffs for edge deployment."]
            ],
            links: [
                ["GitHub repository", "https://github.com/shadmanrahman1/visdrone-tracking"]
            ]
        },
        "ecommerce-bots": {
            category: "E-commerce Automation / AI Agent Workflow",
            title: "E-commerce Automation System Bots",
            summary: "Automation bots for product-based ecommerce workflows, including comment handling, moderation queues, review capture, tracking sheets, alerts, and AI-assisted screenshot/image understanding.",
            stack: ["n8n", "Meta Graph API", "Telegram", "Google Sheets", "Gemini Vision", "FastAPI"],
            sections: [
                ["Problem", "Product-based ecommerce teams lose time handling repetitive comments, moderation decisions, review collection, order/status tracking, and customer follow-up."],
                ["What I built", "A reusable automation-system direction that connects social platforms, moderation channels, spreadsheets, alerts, and AI-assisted image or screenshot understanding."],
                ["Architecture", "n8n workflow orchestration, Meta Graph API integrations, Telegram moderation/review loops, Google Sheets state tracking, and Gemini Vision for screenshot/image analysis."],
                ["Key features", "Comment handling, moderation workflow, review routing, spreadsheet-backed tracking, alerting, and AI-assisted screenshot interpretation."],
                ["My role", "Automation design, workflow mapping, API integration planning, approval-loop design, and practical operations documentation."],
                ["Current status", "In progress. Needs client-safe screenshots before public case-study publication."],
                ["What I learned", "Automation is strongest when it preserves human approval points and makes the business process easier to audit."],
                ["Next steps", "Add sanitized workflow diagrams, publish a demo flow, and connect exact deployment notes without exposing private business data."]
            ],
            links: [
                ["Contact for details", "mailto:official.shadmanrahman@gmail.com"]
            ]
        },
        "biomed-rag": {
            category: "Biomedical NLP / RAG",
            title: "Biomed RAG Chatbot",
            summary: "Biomedical question-answering prototype using retrieval-augmented generation and domain-focused knowledge retrieval.",
            stack: ["Python", "NLP", "Streamlit", "Vector Search", "Biomedical Retrieval", "RAG"],
            sections: [
                ["Problem", "Biomedical Q&A needs retrieval context so answers can be grounded in source material instead of generic model memory."],
                ["What I built", "A biomedical retrieval chatbot prototype focused on domain-specific question answering."],
                ["Architecture", "Document ingestion, vector indexing, retrieval pipeline, prompt assembly, and a Streamlit-style interface."],
                ["Key features", "Biomedical knowledge retrieval, context-aware answers, lightweight app interface, and extendable source collection."],
                ["My role", "RAG pipeline design, prototype implementation, interface setup, and project documentation."],
                ["Current status", "Prototype."],
                ["What I learned", "Domain retrieval quality depends heavily on source preparation, chunking, evaluation, and careful prompt constraints."],
                ["Next steps", "Add citation display, improve evaluation data, and publish exact demo/repo links."]
            ],
            links: [
                ["GitHub profile", "https://github.com/shadmanrahman1"]
            ]
        },
        "manim": {
            category: "AI + Education Tooling",
            title: "Manim Math Animator Chatbot",
            summary: "AI tool that turns math prompts into Manim-based visual animations for explainable educational content.",
            stack: ["Python", "Manim", "LLM APIs", "Prompt-to-code", "Animation Generation"],
            sections: [
                ["Problem", "Students and educators often need visual math explanations, but creating animation code manually takes time."],
                ["What I built", "A chatbot-style tool that converts natural language math prompts into Manim animation outputs."],
                ["Architecture", "Prompt parsing, LLM-assisted code generation, Manim rendering, and video output preview."],
                ["Key features", "Prompt-to-animation workflow, mathematical scene generation, video rendering, and educational visualization."],
                ["My role", "Prototype development, prompt workflow design, Manim integration, and demo generation."],
                ["Current status", "Prototype with a local demo video available on this portfolio."],
                ["What I learned", "Generated code needs validation, safe execution boundaries, and strong prompt structure for reliable visual output."],
                ["Next steps", "Improve code validation, add a queue system, and publish a clean demo interface."]
            ],
            links: [
                ["Demo video", "assets/sinx_demo.mp4"],
                ["GitHub profile", "https://github.com/shadmanrahman1"]
            ]
        }
    };

    function initHeader() {
        const header = document.querySelector("[data-header]");
        const toggle = document.querySelector("[data-nav-toggle]");
        const nav = document.querySelector("[data-nav]");
        const links = Array.from(document.querySelectorAll(".site-nav a[href^='#']"));

        if (!header || !toggle || !nav) {
            return;
        }

        const setScrolled = () => {
            header.classList.toggle("is-scrolled", window.scrollY > 10);
        };

        const closeNav = () => {
            toggle.setAttribute("aria-expanded", "false");
            nav.classList.remove("is-open");
            header.classList.remove("is-open");
        };

        toggle.addEventListener("click", () => {
            const open = toggle.getAttribute("aria-expanded") === "true";
            toggle.setAttribute("aria-expanded", String(!open));
            nav.classList.toggle("is-open", !open);
            header.classList.toggle("is-open", !open);
        });

        links.forEach((link) => {
            link.addEventListener("click", closeNav);
        });

        document.addEventListener("click", (event) => {
            if (!nav.classList.contains("is-open")) {
                return;
            }
            if (!nav.contains(event.target) && !toggle.contains(event.target)) {
                closeNav();
            }
        });

        window.addEventListener("scroll", setScrolled, { passive: true });
        setScrolled();
    }

    function initActiveNav() {
        const navLinks = Array.from(document.querySelectorAll(".site-nav a[href^='#']"));
        const sections = navLinks
            .map((link) => document.querySelector(link.getAttribute("href")))
            .filter(Boolean);

        if (!navLinks.length || !sections.length || !("IntersectionObserver" in window)) {
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }
                const id = `#${entry.target.id}`;
                navLinks.forEach((link) => {
                    link.classList.toggle("is-active", link.getAttribute("href") === id);
                });
            });
        }, {
            rootMargin: "-35% 0px -55% 0px",
            threshold: 0.01
        });

        sections.forEach((section) => observer.observe(section));
    }

    function initHeroSlider() {
        const slider = document.querySelector("[data-hero-slider]");
        const slides = Array.from(document.querySelectorAll("[data-slide]"));
        const prev = document.querySelector("[data-slide-prev]");
        const next = document.querySelector("[data-slide-next]");
        const dotsWrap = document.querySelector("[data-slide-dots]");
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (!slider || slides.length < 2 || !dotsWrap) {
            return;
        }

        let index = 0;
        let timer = null;
        let touchStartX = 0;

        const applySlideBackground = (slide) => {
            const bg = slide && slide.dataset.bg;
            if (bg && !slide.style.getPropertyValue("--bg")) {
                slide.style.setProperty("--bg", bg);
            }
        };

        const dots = slides.map((_, dotIndex) => {
            const dot = document.createElement("button");
            dot.type = "button";
            dot.setAttribute("aria-label", `Go to slide ${dotIndex + 1}`);
            dot.addEventListener("click", () => {
                goTo(dotIndex);
                restart();
            });
            dotsWrap.appendChild(dot);
            return dot;
        });

        const render = () => {
            applySlideBackground(slides[index]);
            slides.forEach((slide, slideIndex) => {
                slide.classList.toggle("is-active", slideIndex === index);
            });
            dots.forEach((dot, dotIndex) => {
                dot.classList.toggle("is-active", dotIndex === index);
            });
        };

        const goTo = (nextIndex) => {
            index = (nextIndex + slides.length) % slides.length;
            render();
        };

        const start = () => {
            if (reducedMotion || timer) {
                return;
            }
            timer = window.setInterval(() => goTo(index + 1), 6500);
        };

        const stop = () => {
            if (timer) {
                window.clearInterval(timer);
                timer = null;
            }
        };

        const restart = () => {
            stop();
            start();
        };

        prev && prev.addEventListener("click", () => {
            goTo(index - 1);
            restart();
        });

        next && next.addEventListener("click", () => {
            goTo(index + 1);
            restart();
        });

        slider.addEventListener("mouseenter", stop);
        slider.addEventListener("mouseleave", start);
        slider.addEventListener("touchstart", (event) => {
            touchStartX = event.changedTouches[0].clientX;
        }, { passive: true });
        slider.addEventListener("touchend", (event) => {
            const diff = event.changedTouches[0].clientX - touchStartX;
            if (Math.abs(diff) < 45) {
                return;
            }
            goTo(diff > 0 ? index - 1 : index + 1);
            restart();
        }, { passive: true });

        render();
        start();
    }

    function initCaseStudies() {
        const modal = document.querySelector("[data-case-modal]");
        const panel = modal && modal.querySelector(".case-panel");
        const openButtons = Array.from(document.querySelectorAll("[data-case-open]"));

        if (!modal || !panel || !openButtons.length) {
            return;
        }

        const title = modal.querySelector("[data-case-title]");
        const category = modal.querySelector("[data-case-category]");
        const summary = modal.querySelector("[data-case-summary]");
        const stack = modal.querySelector("[data-case-stack]");
        const sections = modal.querySelector("[data-case-sections]");
        const links = modal.querySelector("[data-case-links]");
        let previousFocus = null;

        const clearChildren = (node) => {
            while (node.firstChild) {
                node.removeChild(node.firstChild);
            }
        };

        const makeText = (tag, text, className) => {
            const element = document.createElement(tag);
            if (className) {
                element.className = className;
            }
            element.textContent = text;
            return element;
        };

        const openCase = (id) => {
            const data = cases[id];
            if (!data) {
                return;
            }

            previousFocus = document.activeElement;
            category.textContent = data.category;
            title.textContent = data.title;
            summary.textContent = data.summary;

            clearChildren(stack);
            data.stack.forEach((item) => stack.appendChild(makeText("span", item)));

            clearChildren(sections);
            data.sections.forEach(([heading, body]) => {
                const article = document.createElement("article");
                article.appendChild(makeText("h3", heading));
                article.appendChild(makeText("p", body));
                sections.appendChild(article);
            });

            clearChildren(links);
            data.links.forEach(([label, href]) => {
                const anchor = document.createElement("a");
                anchor.href = href;
                anchor.textContent = label;
                if (/^https?:\/\//.test(href)) {
                    anchor.target = "_blank";
                    anchor.rel = "noreferrer";
                }
                links.appendChild(anchor);
            });

            modal.hidden = false;
            document.body.classList.add("modal-open");
            window.requestAnimationFrame(() => panel.focus());
        };

        const closeCase = () => {
            modal.hidden = true;
            document.body.classList.remove("modal-open");
            if (previousFocus && typeof previousFocus.focus === "function") {
                previousFocus.focus();
            }
        };

        openButtons.forEach((button) => {
            button.addEventListener("click", () => openCase(button.dataset.caseOpen));
        });

        modal.querySelectorAll("[data-case-close]").forEach((button) => {
            button.addEventListener("click", closeCase);
        });

        document.addEventListener("keydown", (event) => {
            if (modal.hidden) {
                return;
            }
            if (event.key === "Escape") {
                closeCase();
            }
        });
    }

    function initCertificateCarousel() {
        const carousel = document.querySelector("[data-certificate-carousel]");
        if (!carousel) {
            return;
        }

        const track = carousel.querySelector(".certificate-track");
        const originalSlides = Array.from(carousel.querySelectorAll(".certificate-card"));
        const prev = carousel.querySelector("[data-cert-prev]");
        const next = carousel.querySelector("[data-cert-next]");
        const dots = carousel.querySelector("[data-cert-dots]");
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
        const cloneCount = 3;
        let index = 0;
        let timer = null;
        let touchStartX = 0;

        if (!track || !originalSlides.length || !dots) {
            return;
        }

        originalSlides.slice(0, cloneCount).forEach((slide) => {
            const clone = slide.cloneNode(true);
            clone.setAttribute("aria-hidden", "true");
            clone.querySelectorAll("a, button").forEach((element) => {
                element.tabIndex = -1;
            });
            track.appendChild(clone);
        });

        const getSlides = () => Array.from(track.querySelectorAll(".certificate-card"));
        const total = originalSlides.length;

        const setPosition = (nextIndex, animate = true) => {
            const target = getSlides()[nextIndex];
            track.style.transition = animate ? "" : "none";
            track.style.transform = `translateX(-${target ? target.offsetLeft : 0}px)`;
            if (!animate) {
                track.offsetHeight;
                track.style.transition = "";
            }
        };

        const renderDots = () => {
            dots.innerHTML = "";
            for (let i = 0; i < total; i += 1) {
                const dot = document.createElement("button");
                dot.type = "button";
                dot.setAttribute("aria-label", `Show certificate ${i + 1}`);
                dot.addEventListener("click", () => {
                    goTo(i);
                    restart();
                });
                dots.appendChild(dot);
            }
        };

        const updateDots = () => {
            const activeIndex = ((index % total) + total) % total;
            Array.from(dots.children).forEach((dot, index) => {
                dot.classList.toggle("is-active", index === activeIndex);
                dot.setAttribute("aria-current", index === activeIndex ? "true" : "false");
            });
        };

        function goTo(nextIndex, animate = true) {
            index = nextIndex;
            setPosition(index, animate);
            updateDots();
        }

        const stop = () => {
            if (timer) {
                window.clearInterval(timer);
                timer = null;
            }
        };

        const start = () => {
            if (reduceMotion.matches || timer || total <= 1) {
                return;
            }
            timer = window.setInterval(() => goTo(index + 1), 3600);
        };

        const restart = () => {
            stop();
            start();
        };

        prev && prev.addEventListener("click", () => {
            if (index === 0) {
                index = total;
                setPosition(index, false);
                window.requestAnimationFrame(() => goTo(total - 1));
            } else {
                goTo(index - 1);
            }
            restart();
        });

        next && next.addEventListener("click", () => {
            goTo(index + 1);
            restart();
        });

        carousel.addEventListener("touchstart", (event) => {
            touchStartX = event.changedTouches[0].clientX;
        }, { passive: true });
        carousel.addEventListener("touchend", (event) => {
            const diff = event.changedTouches[0].clientX - touchStartX;
            if (Math.abs(diff) < 45) {
                return;
            }
            if (diff > 0 && index === 0) {
                index = total;
                setPosition(index, false);
                window.requestAnimationFrame(() => goTo(total - 1));
            } else {
                goTo(diff > 0 ? index - 1 : index + 1);
            }
            restart();
        }, { passive: true });

        track.addEventListener("transitionend", () => {
            if (index >= total) {
                index = 0;
                setPosition(index, false);
                updateDots();
            }
        });

        document.addEventListener("visibilitychange", () => {
            if (document.hidden) {
                stop();
            } else {
                start();
            }
        });

        window.addEventListener("resize", () => {
            window.requestAnimationFrame(() => setPosition(index, false));
        });

        renderDots();
        setPosition(index, false);
        updateDots();
        start();
    }

    function initVideoPreview() {
        const videos = Array.from(document.querySelectorAll(".system-media video"));

        videos.forEach((video) => {
            video.addEventListener("mouseenter", () => {
                video.play().catch(() => {});
            });
            video.addEventListener("mouseleave", () => {
                video.pause();
                video.currentTime = 0;
            });
            video.addEventListener("focus", () => {
                video.play().catch(() => {});
            });
            video.addEventListener("blur", () => {
                video.pause();
            });
        });
    }

    document.addEventListener("DOMContentLoaded", () => {
        initHeader();
        initActiveNav();
        initHeroSlider();
        initCaseStudies();
        initCertificateCarousel();
        initVideoPreview();
    });
})();
