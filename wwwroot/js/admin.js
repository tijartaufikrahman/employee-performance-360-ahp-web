/* =======================================================
   Sistem Penilaian Admin JavaScript Core (Identik Project 7)
   100% jQuery & Adheres to aturan_request_jquery.txt
   ======================================================= */

// 1. Sidebar Controller
window.setSidebarState = function (open) {
    var $sidebar = $('#sidebar');
    var $mainContent = $('#mainContent');
    var $overlay = $('#sidebarOverlay');
    var $topbar = $('.topbar');
    var isMobile = $(window).width() <= 991;

    if (isMobile) {
        if (open) {
            $sidebar.removeClass("closed collapsed");
            $overlay.addClass("show");
        } else {
            $sidebar.addClass("closed");
            $sidebar.removeClass("collapsed");
            $overlay.removeClass("show");
        }
    } else {
        if (open) {
            $sidebar.removeClass("closed collapsed");
            $mainContent.removeClass("sidebar-closed sidebar-collapsed");
            $topbar.removeClass("sidebar-closed sidebar-collapsed").css("left", "");
            try { localStorage.setItem('admin_sidebar_collapsed', '0'); } catch (e) { }
        } else {
            $sidebar.addClass("closed collapsed");
            $mainContent.addClass("sidebar-closed sidebar-collapsed");
            $topbar.addClass("sidebar-closed sidebar-collapsed").css("left", "");
            try { localStorage.setItem('admin_sidebar_collapsed', '1'); } catch (e) { }
        }

        setTimeout(function () {
            if (window.jQuery && $.fn && $.fn.dataTable) {
                try {
                    $($.fn.dataTable.tables(true)).DataTable().columns.adjust();
                } catch (e) { }
            }
        }, 260);
    }
};

window.toggleSidebar = function (explicitState) {
    var $sidebar = $('#sidebar');
    var isOpen = !$sidebar.hasClass("closed");
    if (typeof explicitState === 'boolean') {
        window.setSidebarState(explicitState);
    } else {
        window.setSidebarState(!isOpen);
    }
};

$(function () {
    var isMobile = $(window).width() <= 991;
    if (isMobile) {
        window.setSidebarState(false);
    } else {
        try {
            var isCollapsed = localStorage.getItem('admin_sidebar_collapsed') === '1';
            window.setSidebarState(!isCollapsed);
        } catch (e) {
            window.setSidebarState(true);
        }
    }

    $(window).on("resize", function () {
        var mobileNow = $(window).width() <= 991;
        if (!mobileNow) {
            $('#sidebarOverlay').removeClass("show");
            try {
                var isCollapsed = localStorage.getItem('admin_sidebar_collapsed') === '1';
                window.setSidebarState(!isCollapsed);
            } catch (e) {
                window.setSidebarState(true);
            }
        } else {
            window.setSidebarState(false);
        }
    });
});

// 2. Toast Notification Controller (Pure jQuery SaaS Toast)
window.AdminToast = {
    _getContainer: function () {
        var $container = $('.admin-toast-wrap');
        if (!$container.length) {
            $container = $('<div class="admin-toast-wrap"></div>');
            $('body').append($container);
        }
        return $container;
    },
    show: function (msg, type) {
        var $container = this._getContainer();
        var icon = (type === 'error')
            ? '<i class="fas fa-circle-exclamation text-danger me-2"></i>'
            : '<i class="fas fa-circle-check text-teal me-2"></i>';
        var $item = $('<div class="admin-toast-item toast-' + (type || 'success') + '">' + icon + '<span>' + msg + '</span></div>');
        $container.append($item);

        setTimeout(function () {
            $item.css({
                opacity: '0',
                transform: 'translateY(-10px)',
                transition: 'all 0.2s'
            });
            setTimeout(function () { $item.remove(); }, 200);
        }, 2800);
    },
    success: function (msg) { this.show(msg, 'success'); },
    error: function (msg) { this.show(msg, 'error'); }
};

// 3. Modal Helper (Pure jQuery SaaS Modal)
window.AdminModal = {
    open: function (id) {
        $('#' + id).addClass('show');
    },
    close: function (id) {
        $('#' + id).removeClass('show');
    }
};

// 4. Global escape utility
window.escHtml = function (str) {
    if (!str && str !== 0) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
};

// Global format currency / number
window.formatNumberIndo = function (num, decimals) {
    if (num === null || num === undefined) return '-';
    var d = decimals !== undefined ? decimals : 2;
    return Number(num).toLocaleString('id-ID', { minimumFractionDigits: d, maximumFractionDigits: d });
};
