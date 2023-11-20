console.log('script running....')

document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamber').addEventListener('click', ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo')
    document.querySelector('.hamber').style.display = 'none';
    setTimeout(() =>{
        document.querySelector('.cross').style.display = 'block';
    }, 300 )
    d
});

document.querySelector('.cross').addEventListener('click', ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo')
    document.querySelector('.cross').style.display = 'none';
    setTimeout(() =>{
        document.querySelector('.hamber').style.display = 'block';
    }, 300 )
});