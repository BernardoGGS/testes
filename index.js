    
    var toggleBtn = document.querySelector('.sidebar__toggle');
    var sidebar = document.querySelector('.sidebar');

    toggleBtn.addEventListener('click', clickToggleBtnHandler);

    function clickToggleBtnHandler() {
        sidebar.classList.toggle('sidebar--active');
    }

