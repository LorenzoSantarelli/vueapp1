export default{
    name: 'Config',
    url: "https://paddle.kube.cobaltica.net/api/",
    
    config: {
        headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}
    }
    // pageConfig: {
    //     headers: {Authorization: `Bearer ${localStorage.getItem("token")}`},
    //     params: {page: page, pageSize: pageSize}
    // }
}
