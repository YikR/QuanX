// 2023-02-11 22:30

if (!$response.body) $done({});
let obj = JSON.parse($response.body);

const item = [
  "recentUsed", // 最近在看
  "coreFeatures", // 顶部图标
  "activities", // 精选活动
  "myBackup", // 我的备份
  // "recentSaved", // 最近转存
  "signIn" // 顶部签到
];

item.forEach((i) => {
  delete obj[i];
});

$done({ body: JSON.stringify(obj) });
