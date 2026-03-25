'use strict';
(function ($) {
    // ==========================================
    //      Start Document Ready function
    // ==========================================
    $(document).ready(function () {
        //============================ Scroll To Top Icon Js Start =========
        (() => {
            const btn = $('.scroll-top');
            $(window).on('scroll', function () {
                if ($(window).scrollTop() >= 100) {
                    $('.header').addClass('fixed-header');
                    btn.addClass('show');
                } else {
                    $('.header').removeClass('fixed-header');
                    btn.removeClass('show');
                }
            });

            btn.on('click', function (e) {
                e.preventDefault();
                $('html, body').animate({
                    scrollTop: 0
                }, '300');
            });
        })()

        // ========================== Add Attribute For Bg Image Js Start =====================
        $('.bg-img').css('background-image', function () {
            return `url(${$(this).data('background-image')})`;
        });
        // ========================== Add Attribute For Bg Image Js End =====================

        // ================== Password Show Hide Js Start ==========
        $('.toggle-password').on('click', function () {
            $(this).toggleClass('fa-eye');
            var input = $($(this).attr('id'));
            if (input.attr('type') == 'password') {
                input.attr('type', 'text');
            } else {
                input.attr('type', 'password');
            }
        });
        // =============== Password Show Hide Js End =================

        // ================== Sidebar Menu Js Start ===============
        // Sidebar Dropdown Menu Start
        $('.has-dropdown > a').click(function () {
            $('.sidebar-submenu').slideUp(200);
            if ($(this).parent().hasClass('active')) {
                $('.has-dropdown').removeClass('active');
                $(this).parent().removeClass('active');
            } else {
                $('.has-dropdown').removeClass('active');
                $(this).next('.sidebar-submenu').slideDown(200);
                $(this).parent().addClass('active');
            }
        });
        // Sidebar Dropdown Menu End

        // Sidebar Icon & Overlay js
        $('.navigation-bar').on('click', function () {
            $('.sidebar-menu').addClass('show-sidebar');
            $('.sidebar-overlay').addClass('show');
        });

        $('.sidebar-menu__close, .sidebar-overlay').on('click', function () {
            $('.sidebar-menu').removeClass('show-sidebar');
            $('.sidebar-overlay').removeClass('show');
        });

        // Sidebar Icon & Overlay js
        // ===================== Sidebar Menu Js End =================

        //Plugin Customization Start
        // ========================= Select2 Js Start ==============
        (() => {
            // select initial
            $('.select2').each(function (index, element) {
                if (!$(element).parent().hasClass('select2-wrapper')) {
                    $(element).wrap('<div class="select2-wrapper"></div>');
                }

                $(element).select2({
                    dropdownParent: $(element).closest('.select2-wrapper')
                });
            });
        })();
        // ========================= Select2 Js End ==============

        // ========================= Slick Slider Js Start ==============
        (() => {
            const sliderConfig = {
                slidesToScroll: 1,
                autoplay: false,
                autoplaySpeed: 2000,
                speed: 1500,
                dots: true,
                pauseOnHover: true,
                arrows: false,
                prevArrow:
                    '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
                nextArrow:
                    '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
            };

            $('.testimonial-slider').slick({
                ...sliderConfig,
                slidesToShow: 1,
                arrows: true,
                slidesToScroll: 1,
                dots: false,
                autoplay: false,
                fade: true,
            });

            $('.top-car-slider').slick({
                ...sliderConfig,
                arrows: true,
                dots: false,
                autoplay: false,
                variableWidth: true,
            });

        })();
        // ========================= Slick Slider Js End ===================

        // ========================= Odometer Counter Up Js End ==========
        $(".counter-item").each(function () {
            $(this).isInViewport(function (status) {
                if (status === "entered") {
                    for (var i = 0; i < document.querySelectorAll(".odometer").length; i++) {
                        var el = document.querySelectorAll('.odometer')[i];
                        el.innerHTML = el.getAttribute("data-odometer-final");
                    }
                }
            });
        });
        // ========================= Odometer Up Counter Js End =====================

        // ==================== animation JS Start ====================
        new WOW().init();
        // ==================== animation JS End ====================

        // calculate height
        function setHeight(variable, name) {
            let headerSelect = document.getElementsByClassName(`${name}`)[0];
            if (headerSelect) {
                let headerHeight = headerSelect.clientHeight;
                document.documentElement.style.setProperty(`${variable}`, `${headerHeight}px`);
            }
        }
        setHeight('--header-h', 'header');
        setHeight('--form-h', 'banner-form-section');

        // tooltips
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
        const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    });

    // ==========================================
    //      End Document Ready function
    // ==========================================

    // ========================= Preloader Js Start =====================
    $(window).on('load', function () {
        $('.preloader').fadeOut();
    });
    // ========================= Preloader Js End=====================

})(jQuery);


