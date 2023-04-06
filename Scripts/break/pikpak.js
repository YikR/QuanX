let obj = JSON.parse($response.body);

if (obj.data) {
  obj.data.expire = "2040-01-01T00:00:00+08:00";
  obj.data.status = "ok";
  obj.data.restricted = {
    result: false,
    content: {
      color: "",
      text: "",
      deepLink: ""
    },
    learnMore: {
      color: "",
      text: "",
      deepLink: ""
    }
  };
  obj.data.extUserInfo = { userRegion: "regional" };
  obj.data.user_id = "";
  obj.data.type = "platinum";
  obj.data.fee_record = "no_record";
  if (obj.data.vipItem) {
    obj.data.vipItem[0].status = "ok";
    obj.data.vipItem[0].expire = "2040-01-01T00:00:00+08:00";
    obj.data.vipItem[0].type = "regional";
    obj.data.vipItem[0].description = "区域会员";
    delete obj.data.vipItem.surplus_day;
  }
}

$done({ body: JSON.stringify(obj) });
