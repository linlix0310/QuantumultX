var body = $response.body;
var chxm1023 = JSON.parse(body);

console.log('aiqiyi in');

chxm1023.data = {	
	"vip_list" : [{
        "vipTypeGroup" : "vip_info",
        "longestDeadline" : {
          "t" : 1688054399000
        },
        "autoRenew" : "0",
        "yearExpire" : 1,
        "rightGroup" : -1,
        "paidSign" : 1,
        "type" : "1",
        "level" : "1",
        "payType" : "0",
        "vipTypeName" : "黄金VIP会员",
        "vipType" : "1",
        "status" : "1",
        "deadline" : {
          "t" : 1688054399000
        }
      }],
}; 
console.log('aiqiyi out');
$done({body : JSON.stringify(chxm1023)});
