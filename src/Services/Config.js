export default{
    name: 'Config',
    url: "https://paddle.kube.cobaltica.net/api/",
    config: {
        headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}
    }
}
