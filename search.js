function execute(key) {
    const doc = Http.get('https://goctruyentranhvui17.com/tim-kiem?keyword=' + key).html();
    var el = doc.select('.list-comic .item')
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
    return Response.success(data)
}