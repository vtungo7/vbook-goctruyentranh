function execute(url) {
    var doc = Http.get(url).html();
    var el = doc.select(".list-chapter li a");
    const data = [];
    for (var i = el.size() - 1; i >= 0; i--) {
        var e = el.get(i);
        data.push({
            name: e.text(),
            url: e.attr("href"),
            host: "https://goctruyentranhvui17.com"
        })
    }
    return Response.success(data); 
}