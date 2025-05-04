function execute(url) {
    var doc = Http.get(url).html();
    var imgs = []
    doc.select('.reading-content img').forEach(e => imgs.push(e.attr("src")));
    return Response.success(imgs);
}