var body = $response.body;
var chxm1023 = JSON.parse(body);

console.log('aiqiyi111111 in');

 chxm1023.content = {	
	"vip_info" : {
      "data" : {
        "qiyi_vip_info" : {
          "vipTypeGroup" : "qiyi_vip_info",
          "longestDeadline" : {
            "t" : 1688054399000,
            "date" : "2023年06月29日"
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
            "t" : 1688054399000,
            "date" : "2023年06月29日"
          }
        }
      },
	};
	
	"passport" : {
      "data" : {
        "verify_status" : 1,
        "qiyi_vip_info" : {
          "status" : "1",
          "payType" : "0",
          "vipType" : "1",
          "level" : "1",
          "deadline" : {
            "date" : "2023年06月29日",
            "t" : 1688054399000,
            "date_format" : "2023-06-29"
          },
          "type" : "1",
          "autoRenew" : "0",
        }
      },
    },
  }
 
 console.log('aiqiyi111111 out');
 $done({body : JSON.stringify(chxm1023)});
