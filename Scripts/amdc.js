// 2023-03-31 12:32

const url = $request.url;
const header = $request.headers;

if (typeof $task !== "undefined") {
  let ua = header["User-Agent"];
  if (ua.includes("AMap") || ua.includes("Cainiao")) {
    $done({ status: "HTTP/1.1 404 Not Found" });
  } else {
    $done({});
  }
} else {
  let ua = header["user-agent"];
  if (ua.includes("AMap") || ua.includes("Cainiao")) {
    $done();
  } else {
    $done({});
  }
}
