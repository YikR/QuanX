let obj = JSON.parse($response.body);

if (obj.data) {
  obj.data.expire = "2040-01-01T00:00:00+08:00";
  obj.data.status = "ok";
  obj.data.type = "platinum";
  if (obj.data.vipItem) {
    obj.data.vipItem[0].status = "ok";
    obj.data.vipItem[0].expire = "2040-01-01T00:00:00+08:00";
    obj.data.vipItem[0].type = "regional";
    obj.data.vipItem[0].description = "区域会员";
    obj.data.vipItem[0].surplus_day = 6114;
  }
}

$done({ body: JSON.stringify(obj) });
