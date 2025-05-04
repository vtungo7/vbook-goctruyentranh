function execute(url) {
    const doc = Http.get(url).html()
    return Response.success({
        name: doc.select("h1.title-detail").text(),
        cover: doc.select(".detail-info img").first().attr('src'),
        description: doc.select(".detail-content p").text(),
        detail: doc.select(".detail-info .list-info").html(),
        category: doc.select(".detail-info .kind p").html(),
        host: "https://goctruyentranhvui17.com"
    });
}