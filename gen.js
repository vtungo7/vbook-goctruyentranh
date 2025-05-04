function execute(url, page) {
    if (!page) page = 1;
    const doc = Http.get(url + '&page=' + page).html()
    var el = doc.select('.list-comic .item')
    var next = doc.select('.pagination .active + li').text()
    var data = []
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select("h3 a").text(),
            link: e.select("a").attr("href"),
            cover: e.select("img").attr("src"),
            description: e.select(".chapter").text(),
            host: "https://goctruyentranhvui17.com"
        })
    }
    return Response.success(data, next)
}