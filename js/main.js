+function () {

    document.querySelector('.nav-button').classList.add('active')
    document.querySelector('.catalog-content').classList.add('active')
    
    function selectPanel (e) {
        var target = e.target.dataset.target
    
        document.querySelectorAll('.nav-button, .catalog-content').forEach(el => el.classList.remove('active'))
        e.target.classList.add('active')
        console.log(document.querySelector('.' + target))
        document.querySelector('.' + target).classList.add('active')
    }
    
    document.querySelectorAll('.nav-button').forEach(el => {
        el.addEventListener('click', selectPanel)
    })
    
    }()