let search = document.querySelector('#searchBtn')
search.addEventListener('click', () => {

       let seachVal = document.querySelector('#inputSearch').value;
       localStorage.setItem('searchVal', seachVal)
       window.location.href = '/obnoxious-ladybug-6279/html/searchPage.html'
})
