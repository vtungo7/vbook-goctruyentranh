function execute() {
    const doc = Http.get("https://goctruyentranhvui17.com/trang-chu").html()
    var list = doc.select('.navbar-nav .dropdown-menu li a')
    var data = []
    list.forEach(e => data.push({
        title: e.text(),
        input: e.attr('href'),
        script: 'gen.js'
    }))
    return Response.success(data)
}