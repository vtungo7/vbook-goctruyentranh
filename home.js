function execute() {
    const doc = Http.get("https://goctruyentranhvui17.com/trang-chu").html()
    var list = doc.select('.list-newcomic .item')
    var data = []
    list.forEach(e => data.push({
        title: e.select("h3 a").text(),
        input: e.select("a").attr('href'),
        script: 'gen.js'
    }))
    return Response.success(data)
}