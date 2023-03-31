// 2023-03-31 12:12

const url = $request.url;
const header = $request.headers;
let ua = header["User-Agent"];

if (url.includes("/amdc/mobileDispatch")) {
  if (ua.includes("AMap") || ua.includes("Cainiao")) {
    $done({ status: "HTTP/1.1 404 Not Found" });
  } else {
    $done({});
  }
}
