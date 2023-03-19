let rHead = "<head>";
let newStyle = "<head><style> .ec_ad_results{display:none!important} </style>";
let body = $response.body.replace(rHead, newStyle);
$done({ body });
