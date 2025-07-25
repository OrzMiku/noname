const translates = {
	sixiang: "四象封印",
	std_sunhao: "标孙皓",
	std_sunhao_prefix: "标",
	std_mateng: "标马腾",
	std_mateng_prefix: "标",
	std_mayunlu: "标马云騄",
	std_mayunlu_prefix: "标",
	std_jianggan: "标蒋干",
	std_jianggan_prefix: "标",
	std_zhouchu: "标周处",
	std_zhouchu_prefix: "标",
	std_lvlingqi: "标吕玲绮",
	std_lvlingqi_prefix: "标",
	std_dc_yanghu: "标羊祜",
	std_dc_yanghu_prefix: "标",
	std_dc_luotong: "标骆统",
	std_dc_luotong_prefix: "标",
	std_lijue: "标李傕",
	std_lijue_prefix: "标",
	std_chengpu: "标程普",
	std_chengpu_prefix: "标",
	std_db_wenyang: "标文鸯",
	std_db_wenyang_prefix: "标",
	std_re_dengzhi: "标邓芝",
	std_re_dengzhi_prefix: "标",
	std_zhangyì: "标张翼",
	std_zhangyì_prefix: "标",
	std_chengyu: "标程昱",
	std_chengyu_prefix: "标",
	std_fanyufeng: "标樊玉凤",
	std_fanyufeng_prefix: "标",
	std_feiyi: "标费祎",
	std_feiyi_prefix: "标",
	stdcanshi: "残蚀",
	stdcanshi_info: "锁定技，摸牌阶段，你改为摸X张牌（X为场上的已受伤角色且X至少为1）。然后本回合你使用【杀】或普通锦囊牌指定目标后，若其已受伤，你弃置一张牌。",
	stdxiongyi: "雄异",
	stdxiongyi_info: "限定技，出牌阶段，你可以选择任意名角色，这些角色依次选择是否使用一张不可被响应的【杀】，然后这些角色重复此流程直至有角色不使用【杀】。",
	stdyouji: "游骑",
	stdyouji_info: "主公技，准备阶段，你可以移动一名群势力角色的一张坐骑牌。",
	stdfengpo: "凤魄",
	stdfengpo_info: "当你使用【杀】造成伤害时，你可以弃置你或其的一张牌，若以此法弃置了方片牌，则此伤害+1。",
	stddaoshu: "盗书",
	stddaoshu_info: "每轮限一次，一名角色的准备阶段，你可以展示除其外一名角色的一张牌，然后令其获得此牌，且你与其本回合不能使用与此牌花色相同的牌。",
	stddaizui: "戴罪",
	stddaizui_info: "锁定技，当你受到伤害后，你视为本轮未发动过〖盗书〗。",
	stdxiongxia: "凶侠",
	stdxiongxia_info: "你可以将两张牌当作【决斗】对两名其他角色使用。你以此法使用的【决斗】结算完毕后，若所有目标角色都受到了此牌造成的伤害，则〖凶侠〗于本回合失效。",
	stdhuizhan: "挥戟",
	stdhuizhan_info: "你使用【杀】可以额外指定至多两个目标。若如此做，目标角色响应此【杀】时，其他目标角色可以代替其使用【闪】。",
	stdmingfa: "明伐",
	stdmingfa_info: "出牌阶段，你可以对一名体力值大于1的角色造成1点伤害，然后此技能失效直至其死亡或回复体力。",
	stdjinjian: "进谏",
	stdjinjian_info: "每回合每项各限一次，当你造成/受到伤害时，你可防止此伤害，然后你本回合内下一次造成/受到的伤害+1。",
	stdrenzheng: "仁政",
	stdrenzheng_info: "锁定技，当有伤害被防止时，你令当前回合角色摸一张牌。",
	stdxiongsuan: "凶算",
	stdxiongsuan_info: "锁定技，准备阶段，若你的体力值为全场最多，则你须对至少一名体力值等于你的角色各造成1点伤害。",
	stdchunlao: "醇醪",
	stdchunlao_info: "弃牌阶段结束时，若你本阶段弃置了不少于两张牌，则你可以用这些牌交换一名其他角色的手牌，然后其可以令你回复1点体力。",
	stdquedi: "却敌",
	stdquedi_info: "你可以将【杀】当作【决斗】使用。",
	stdzhiyinmeng: "急盟",
	stdzhiyinmeng_info: "准备阶段，你可以交给一名其他角色任意张牌，然后其可以交给你任意张牌。",
	stdhehe: "和合",
	stdhehe_info: "摸牌阶段结束时，你可以令至多两名手牌数与你相同的其他角色各摸一张牌。",
	stdzhiyi: "执义",
	stdzhiyi_info: "锁定技，一名角色的回合结束时，若你本回合使用过【杀】，则你视为使用【杀】或摸一张牌。",
	stdshefu: "设伏",
	stdshefu_info: "①结束阶段，你可以将一张手牌称为“伏兵”扣置于武将牌上。②一名角色使用牌时，你可以移去武将牌上的一张与此牌同名的“伏兵”并令此牌无效。",
	stdyibing: "益兵",
	stdyibing_info: "一名角色进入濒死状态时，你可以获得其一张牌。",
	stdbazhan: "把盏",
	stdbazhan_info: "出牌阶段限两次，你可以将一张手牌展示并交给一名男性角色，然后其可以展示并交给你一张与此牌类别不同的手牌。",
	stdzhanying: "醮影",
	stdzhanying_info: "锁定技，你的回合内，手牌数比回合开始时多的角色不能使用红色牌且受到的伤害+1。",
	stdtiaohe: "调和",
	stdtiaohe_info: "出牌阶段限一次，你可以弃置场上的一张装备牌和一张防具牌（不能为同一名角色的牌）。",
	stdqiansu: "谦素",
	stdqiansu_info: "当你成为锦囊牌的目标后，若你的装备区没有牌，则你可以摸一张牌。",
	old_shen_zhaoyun: "牢神赵云",
	old_shen_zhaoyun_prefix: "牢神",
	std_xushu: "标徐庶",
	std_xushu_prefix: "标",
	std_xuezong: "标薛综",
	std_xuezong_prefix: "标",
	std_liuzhang: "标刘璋",
	std_liuzhang_prefix: "标",
	std_wangyuanji: "标王元姬",
	std_wangyuanji_prefix: "标",
	std_wanglang: "标王朗",
	std_wanglang_prefix: "标",
	std_zhonghui: "标钟会",
	std_zhonghui_prefix: "标",
	std_fuhuanghou: "标伏寿",
	std_fuhuanghou_prefix: "标",
	std_liubiao: "标刘表",
	std_liubiao_prefix: "标",
	std_gongsunyuan: "标公孙渊",
	std_gongsunyuan_prefix: "标",
	std_cenhun: "标岑昏",
	std_cenhun_prefix: "标",
	std_sunshao_prefix: "标",
	std_jiangwan: "标蒋琬",
	std_jiangwan_prefix: "标",
	std_maliang: "标马良",
	std_maliang_prefix: "标",
	std_simashi: "标司马师",
	std_simashi_prefix: "标",
	std_guanxing: "标关兴",
	std_guanxing_prefix: "标",
	std_huaxin: "标华歆",
	std_huaxin_prefix: "标",
	stdwuyou: "武佑",
	stdwuyou_info: "出牌阶段限一次，你可以与一名角色进行拼点，若你没赢，你本回合视为拥有〖武圣〗。然后拼点赢的角色视为对没赢的角色使用一张【决斗】。",
	stdqiuyuan: "求援",
	stdqiuyuan_info: "当你成为一名角色使用【杀】的目标时，你可以令另一名其他角色选择一项：1.交给你一张牌；2.成为此【杀】的额外目标。",
	stdzhuikong: "惴恐",
	stdzhuikong_info: "其他角色的准备阶段，你可以用【杀】与其拼点，赢的角色可以使用对方的拼点牌。",
	stdzishou: "自守",
	stdzishou_info: "出牌阶段开始前，你可以摸场上势力数张牌，然后跳过此阶段。",
	stdjujin: "据荆",
	stdjujin_info: "主公技，当你受到其他群势力角色造成的伤害后，你可以弃置两张牌，然后回复1点体力。",
	stdhuaiyi: "怀异",
	stdhuaiyi_info: "锁定技，准备阶段，你展示所有手牌，若颜色不同，你弃置其中一种颜色的所有牌，然后获得至多等量名其他角色各一张牌，若选择角色数大于1，你失去1点体力。",
	stdfengbai: "封拜",
	stdfengbai_info: "主公技，当你获得一名群势力角色装备区内的牌后，你可以令其摸一张牌。",
	stdjishe: "极奢",
	stdjishe_info: "出牌阶段，若你的手牌上限大于0，你可以令本回合手牌上限-1，然后摸一张牌。",
	stdwudu: "无度",
	stdwudu_info: "一名没有手牌的角色受到伤害时，你可以减少1点体力上限，防止此伤害。",
	stdjinglve: "景略",
	stdjinglve_info: "其他角色的弃牌阶段开始时，你可以展示并交给其两张牌，令其本阶段不能弃置这些牌，然后你可以于本阶段结束时获得本阶段弃置的一张牌。",
	std_sunshao: "标孙邵",
	stddingyi: "定仪",
	stddingyi_info: "一名角色的结束阶段，若其装备区内没有牌，其可以摸一张牌。",
	stdzuici: "罪辞",
	stdzuici_info: "当你受到伤害后，你可以将场上的一张牌移至伤害来源区域内。",
	stdruwu: "儒武",
	stdruwu_info: "你可以将装备区内一张不为本回合置入的装备牌当【无中生有】或【决斗】使用。",
	stdchengshi: "承事",
	stdchengshi_info: "限定技，当一名其他角色死亡时，你可以与其交换座次和装备区内的牌。",
	stdxiemu: "协穆",
	stdxiemu_info: "其他角色的出牌阶段限一次，其可以展示并交给你一张基本牌，然后其本回合攻击范围+1。",
	stdnaman: "纳蛮",
	stdnaman_info: "出牌阶段限一次，你可以将任意张基本牌当指定等量名目标的【南蛮入侵】使用。",
	oldjuejing: "绝境",
	oldjuejing_info: "锁定技。①摸牌阶段，你令额定摸牌数+X（X为你已损失的体力值）。②你的手牌上限+2。",
	oldlonghun: "龙魂",
	oldlonghun_info: "你可以将花色相同的Y张牌按下列规则使用或打出：♥当【桃】，♦当火【杀】，♣当【闪】，♠当【无懈可击】（Y为你的体力值且至少为1）。",
	stdxiaofan: "嚣翻",
	stdxiaofan_info: "锁定技，当你使用牌结算结束后，你弃置你前X个区域内的牌：1.判定区 2.装备区 3.手牌区（X为你本回合使用牌的类型数）。",
	stdtuishi: "侻失",
	stdtuishi_info: "锁定技，你不能使用【无懈可击】，你使用的字母牌无效。",
	stdfunan: "复难",
	stdfunan_info: "每回合限一次，其他角色使用的牌被你抵消时，你可以获得之。",
	stdxunjie: "训诫",
	stdxunjie_info: "结束阶段，你可以令一名角色弃置一张手牌，若此牌花色为♦️，其摸两张牌。",
	stdwuyan: "无言",
	stdwuyan_info: "锁定技，你的锦囊牌均视为【无懈可击】。",
	stdjujian: "举荐",
	stdjujian_info: "每回合限一次，你的【无懈可击】结算结束后可以交给一名其他角色。",
	stdyinge: "引戈",
	stdyinge_info: "出牌阶段限一次，你可以令一名其他角色交给你一张牌，然后其视为对你攻击范围内的另一名角色使用一张【杀】。",
	stdshiren: "施仁",
	stdshiren_info: "每回合限一次，当你成为其他角色使用【杀】的目标后，你可以摸两张牌，然后交给该角色一张牌。",
	stdjuyi: "据益",
	stdjuyi_info: "主公技，其他群势力角色每回合首次对你造成伤害时，其可以防止此伤害，改为获得你的一张牌。",
	stdqianchong: "谦冲",
	stdqianchong_info: "锁定技，若你的装备区内牌的数量为奇数/偶数，你使用牌无次数/距离限制。",
	stdshangjian: "尚俭",
	stdshangjian_info: "结束阶段，若你本回合失去的牌数不大于你的体力值，你可以从弃牌堆中获得一张你本回合失去的牌。",
	stdgushe: "鼓舌",
	stdgushe_info: "出牌阶段限一次，你可以与一名角色拼点，拼点赢的角色摸一张牌，然后拼点输的角色可以与对方重复此流程。",
	stdjici: "激词",
	stdjici_info: "当你亮出拼点牌时，你可以失去1点体力，令此牌点数视为k。",
	stdxingfa: "兴伐",
	stdxingfa_info: "准备阶段，若你的手牌数不小于体力值，你可以对一名其他角色造成1点伤害。",
	stdyuanqing: "渊清",
	stdyuanqing_info: "回合结束时，你可以令所有角色依次选择并获得弃牌堆中其于此回合内失去的一张牌。",
	stdshuchen: "疏陈",
	stdshuchen_info: "你的回合外，你可以将超出手牌上限的手牌当【桃】使用。",
	std_zhangbao: "标张苞",
	std_zhangbao_prefix: "标",
	std_liuchen: "标刘谌",
	std_liuchen_prefix: "标",
	std_guansuo: "标关索",
	std_guansuo_prefix: "标",
	std_xiahouba: "标夏侯霸",
	std_xiahouba_prefix: "标",
	std_caorui: "标曹叡",
	std_caorui_prefix: "标",
	std_liuye: "标刘晔",
	std_liuye_prefix: "标",
	std_guohuanghou: "标郭皇后",
	std_guohuanghou_prefix: "标",
	std_lvfan: "标吕范",
	std_lvfan_prefix: "标",
	std_dingfeng: "标丁奉",
	std_dingfeng_prefix: "标",
	std_sunluban: "标孙鲁班",
	std_sunluban_prefix: "标",
	std_liuzan: "标留赞",
	std_liuzan_prefix: "标",
	std_sunyi: "标孙翊",
	std_sunyi_prefix: "标",
	std_taoqian: "标陶谦",
	std_taoqian_prefix: "标",
	std_jiling: "标纪灵",
	std_jiling_prefix: "标",
	std_liru: "标李儒",
	std_liru_prefix: "标",
	std_wangyun: "标王允",
	std_wangyun_prefix: "标",
	stdjuezhu: "角逐",
	stdjuezhu_info: "锁定技，当你造成/受到伤害后，你本回合使用牌无次数限制/视为对伤害来源使用一张【决斗】。",
	stdchengji: "承继",
	stdchengji_info: "你可以将两张颜色不同的牌当【杀】使用或打出。",
	stdzhanjue: "战绝",
	stdzhanjue_info: "出牌阶段限一次，你可以将所有手牌当作【决斗】使用，然后摸一张牌。",
	stdqinwang: "勤王",
	stdqinwang_info: "主公技，你需要打出【杀】时，其他蜀势力角色可以弃置一张基本牌，视为你打出之。",
	stdzhengnan: "征南",
	stdzhengnan_info: "准备阶段，你可以将一张红色手牌当【杀】使用；若你因此杀死了角色，摸两张牌。",
	stdbaobian: "豹变",
	stdbaobian_info: "出牌阶段开始时，你可以失去1点体力并令一名角色弃置一张手牌；若此牌为基本牌，你视为对其使用一张【杀】。",
	stdhuituo: "恢拓",
	stdhuituo_info: "当你受到伤害后，你可以展示牌堆顶的两张牌，然后替换任意张牌。",
	stdmingjian: "明鉴",
	stdmingjian_info: "出牌阶段限一次，你可以将一张牌展示并交给一名其他角色，然后其可以使用此牌。",
	stdpolu: "破橹",
	stdpolu_info: "你造成或受到伤害后，可以弃置受伤角色装备区里的一张牌；若该角色为你，你摸一张牌。",
	stdchoulve: "筹略",
	stdchoulve_info: "出牌阶段限一次，你可以交给其他角色一张手牌，然后其可以展示并交给你一张装备牌。",
	stdjiaozhao: "矫诏",
	stdjiaozhao_info: "出牌阶段限一次，你可以令一名手牌数不小于两张的其他角色展示两张手牌，然后你可以用一张牌交换其中一张。",
	stddanxin: "殚心",
	stddanxin_info: "当你受到伤害后，你可以发动一次〖矫诏〗且改为你获得其展示牌中的一张。",
	stddianfeng: "典封",
	stddianfeng_info: "当一名角色失去装备区内的所有牌时，你可以摸一张牌。",
	stdduanbing: "短兵",
	stdduanbing_info: "锁定技，你的攻击范围始终为1。你使用【杀】每回合首次造成的伤害+1。",
	stdfenxun: "奋迅",
	stdfenxun_info: "出牌阶段限一次，你可以弃置一张防具牌并选择一名其他角色，其本回合视为在你的攻击范围内。",
	stdzenhui: "谮毁",
	stdzenhui_info: "当你使用【杀】或锦囊牌时，你可以令一名非目标角色成为此牌使用者。",
	stdchuyi: "除异",
	stdchuyi_info: "每轮限一次，当一名其他角色对你攻击范围内的一名角色造成伤害时，你可令此伤害+1。",
	stdfenyin: "奋音",
	stdfenyin_info: "摸牌阶段，你可以额外摸两张牌；若如此做，本回合你使用牌时，若此牌颜色与你使用的上一张牌颜色相同，你须弃置一张牌。",
	stdzaoli: "躁厉",
	stdzaoli_info: "锁定技，准备阶段，你弃置手牌或装备区里的所有牌，然后摸X牌并失去1点体力（X为你以此法弃置牌数与你的已损失体力值之和）。",
	stdyirang: "揖让",
	stdyirang_info: "出牌阶段开始时，你可以展示所有手牌并将这些牌交给一名手牌数最少的其他角色，然后你摸等同于交出类别数量的牌。",
	stdshuangdao: "双刀",
	stdshuangdao_info: "出牌阶段开始时，你可以与一名其他角色拼点。若你赢，你可以视为对计算与其距离为1的至多两名角色各使用一张无距离限制的【杀】；若你没赢，则你本回合不能使用【杀】。",
	stdjuece: "绝策",
	stdjuece_info: "结束阶段，你可以对一名本回合失去过至少两张牌的角色造成1点伤害。",
	stdmieji: "灭计",
	stdmieji_info: "出牌阶段限一次，你可以交给一名其他角色一张黑色锦囊牌，然后可以弃置其至多两张牌。",
	stdyunji: "运机",
	stdyunji_info: "你可以将一张装备牌当【借刀杀人】使用。",
	stdzongji: "纵计",
	stdzongji_info: "当一名角色受到【杀】或【决斗】造成的伤害后，你可以弃置其与伤害来源的各一张牌。",
	std_tianfeng: "标田丰",
	std_tianfeng_prefix: "标",
	stdgangjian: "刚谏",
	stdgangjian_info: "其他角色的准备阶段，你可以令其视为对你使用一张【杀】，若此【杀】未造成伤害，其本回合不能使用锦囊牌。",
	stdguijie: "瑰杰",
	stdguijie_info: "当你需要使用或打出一张【闪】时，你可以弃置两张红色牌并摸一张牌，视为使用或打出之。",
	std_liuxie: "标刘协",
	std_liuxie_prefix: "标",
	stdtianming: "天命",
	stdtianming_info: "当你成为【杀】的目标后，你可以弃置所有牌并摸两张牌，然后体力值唯一最大的其他角色也可以如此做。",
	stdmizhao: "密诏",
	stdmizhao_info: "结束阶段，你可以将所有牌交给一名其他角色并选择另一名角色，然后前者可与后者各失去1点体力。",
	stdzhongyan: "终焉",
	stdzhongyan_info: "主公技。其他群势力角色死亡时，你可以回复1点体力。",
	std_simazhao: "标司马昭",
	std_simazhao_prefix: "标",
	stdzhaoxin: "昭心",
	stdzhaoxin_info: "锁定技。准备阶段，你展示所有手牌，若这些牌颜色均相同，你对一名角色造成1点伤害。",
	std_guozhao: "标郭照",
	std_guozhao_prefix: "标",
	stdwufei: "诬诽",
	stdwufei_info: "准备阶段，你可以令一名女性角色展示所有手牌，然后其弃置其中一种颜色的所有牌并摸一张牌。",
	stdjiaochong: "椒宠",
	stdjiaochong_info: "男性角色的结束阶段，你可以对一名女性角色发动一次〖诬诽〗。",
	std_jiakui: "标贾逵",
	std_jiakui_prefix: "标",
	stdzhongzuo: "忠佐",
	stdzhongzuo_info: "锁定技。一名角色的回合结束时，若你本回合造成或受到过伤害，你与其各摸一张牌。",
	stdwanlan: "挽澜",
	stdwanlan_info: "限定技。其他角色进入濒死时，你可以交给其所有手牌，然后其回复体力至1点。",
	std_yufan: "标虞翻",
	std_yufan_prefix: "标",
	stdzongxuan: "纵玄",
	stdzongxuan_info: "当你的手牌因弃置进入弃牌堆后，你可以弃置场上的一张牌。",
	stdzhiyan: "直言",
	stdzhiyan_info: "结束阶段，你可以获得本回合进入弃牌堆的一张装备牌。",
	std_zhugeke: "标诸葛恪",
	std_zhugeke_prefix: "标",
	stdaocai: "傲才",
	stdaocai_info: "每回合结束时，若你没有手牌，你可以观看牌堆顶的两张牌并获得其中一张牌。",
	stdduwu: "黩武",
	stdduwu_info: "出牌阶段限一次，你可以弃置所有手牌并对攻击范围内的一名角色造成1点伤害。",
	std_mengda: "标孟达",
	std_mengda_prefix: "标",
	stdzhuan: "逐安",
	stdzhuan_info: "锁定技。当你每回合首次受到伤害后，你摸三张牌，然后伤害来源获得你一张牌。",
	std_caozhen: "标曹真",
	std_caozhen_prefix: "标",
	stdsidi: "司敌",
	stdsidi_info: "当有角色打出【杀】时，你可以摸一张牌。",
	std_dongyun: "标董允",
	std_dongyun_prefix: "标",
	stdbingzheng: "秉正",
	stdbingzheng_info: "结束阶段，你可以令一名角色弃置一张牌，若其手牌数不等于体力值，你失去1点体力。",
	stdduliang: "笃良",
	stdduliang_info: "当你受到伤害后，你可以摸一张牌，若你的手牌数等于体力值，你回复1点体力。",
	std_baosanniang: "标鲍三娘",
	std_baosanniang_prefix: "标",
	stdzhennan: "镇南",
	stdzhennan_info: "其他角色的准备阶段，你可以弃置一张手牌，若如此做，其本回合使用下张牌后，若此牌为红色，你令其获得之。",
	stdshuyong: "姝勇",
	stdshuyong_info: "当其他角色于回合内连续使用两张同名牌时，你可以摸一张牌。",
	std_liuba: "标刘巴",
	std_liuba_prefix: "标",
	stdduanbi: "锻币",
	stdduanbi_info: "结束阶段，你可以弃置所有手牌，然后令两名角色各摸两张牌。",
	std_kongrong: "标孔融",
	std_kongrong_prefix: "标",
	stdlirang: "礼让",
	stdlirang_info: "其他角色的弃牌阶段结束时，你可以交给其一张牌，然后获得此阶段进入弃牌堆的所有红色牌。",
	std_zoushi: "标邹氏",
	std_zoushi_prefix: "标",
	stdhuoshui: "祸水",
	stdhuoshui_info: "锁定技，判定区有牌的其他角色受到的伤害+1。",
	stdqingcheng: "倾城",
	stdqingcheng_info: "出牌阶段限一次，你可以将两张红色非锦囊牌当两张【乐不思蜀】对你和一名其他角色使用。",
	std_sunluyu: "标孙鲁育",
	std_sunluyu_prefix: "标",
	stdmumu: "穆穆",
	stdmumu_info: "准备阶段，你可以弃置一张手牌，然后移动场上一张装备牌。",
	stdmeibu: "魅步",
	stdmeibu_info: "装备着武器牌的角色使用【杀】时，你可以令其弃置一张手牌。",
	std_zhoufang: "标周鲂",
	std_zhoufang_prefix: "标",
	stdqijian: "七笺",
	stdqijian_info: "准备阶段，你可以令两名手牌数之和为7的角色各选择一项：1.弃置对方一张牌；2.令对方摸一张牌。",
	stdyoudi: "诱敌",
	stdyoudi_info: "结束阶段，你可以将一张红色牌当【顺手牵羊】使用。",

	std_baoxin: "标鲍信",
	std_baoxin_prefix: "标",
	stdyimou: "毅谋",
	stdyimou_info: "当你受到伤害后，你可以将一张牌交给一名其他角色。",
	stdmutao: "募讨",
	stdmutao_info: "准备阶段，你可令一名角色展示所有手牌，若其中有【杀】，你对其造成一点伤害。",
	std_peixiu: "标裴秀",
	std_peixiu_prefix: "标",
	stdzhitu: "制图",
	stdzhitu_info: "你可以将至少两张点数之和等于13的牌当任意普通锦囊牌使用。",
	std_yangbiao: "标杨彪",
	std_yangbiao_prefix: "标",
	stdyizheng: "义争",
	stdyizheng_info: "准备阶段，你可以与一名体力值不小于你的角色拼点，赢的角色对没赢的角色造成一点伤害。",
	stdrangjie: "让节",
	stdrangjie_info: "当你受到伤害后，你可以移动场上的一张牌。",
	std_huangfusong: "标皇甫嵩",
	std_huangfusong_prefix: "标",
	stdtaoluan: "讨乱",
	stdtaoluan_info: "其他角色的结束阶段，你可以交给其一张牌，其展示所有手牌，然后弃置所有【闪】。",
	std_zerong: "标笮融",
	std_zerong_prefix: "标",
	stdcansi: "残肆",
	stdcansi_info: "锁定技，准备阶段，你令攻击范围内的一名角色获得你一张牌，然后视为对其依次使用【杀】、【决斗】。",
	std_pangdegong: "标庞德公",
	std_pangdegong_prefix: "标",
	stdlingjian: "令荐",
	stdlingjian_info: "锁定技，当你每回合首次使用【杀】结算结束后，若此牌未造成伤害，你重置〖明识〗。",
	stdmingshi: "明识",
	stdmingshi_info: "限定技，出牌阶段，你可选择一项：①摸两张牌；②回复1点体力；③对一名角色造成1点伤害；④移动场上的一张牌。",
	get std_nanhualaoxian() {
		return Math.random() > 0.25 ? "标南华老仙" : "标南华小仙";
	},
	std_nanhualaoxian_prefix: "标",
	stdxianlu: "仙箓",
	stdxianlu_info: "出牌阶段限一次，你可以弃置一名角色场上的一张装备牌，若此牌为红色，你将此牌当【乐不思蜀】置于你的判定区内并对其造成1点伤害。",
	stdtianshu: "天书",
	stdtianshu_info: "锁定技，你的手牌上限+X（X为当前势力数-1）。",

	std_zhangyao: "标张美人",
	std_wangfuren: "标王夫人",
	std_panglin: "标庞林",
	std_huangchong: "标黄崇",
	std_caoxiong: "标曹熊",
	std_maohuanghou: "标毛皇后",
	std_zhengcong: "标郑聪",
	std_jiangjie: "标姜婕",
	std_zhangyao_prefix: "标",
	std_wangfuren_prefix: "标",
	std_panglin_prefix: "标",
	std_huangchong_prefix: "标",
	std_caoxiong_prefix: "标",
	std_maohuanghou_prefix: "标",
	std_zhengcong_prefix: "标",
	std_jiangjie_prefix: "标",
	stdlianrong: "怜容",
	stdyuanzhuo: "怨灼",
	stdbizun: "避尊",
	stdhuangong: "还宫",
	stdzhuying: "驻营",
	stdzhongshi: "忠事",
	stdjuxian: "据险",
	stdlijun: "励军",
	stdwuwei: "无为",
	stdleiruo: "羸弱",
	stddechong: "得宠",
	stdyinzu: "荫族",
	stdqiyue: "起钺",
	stdjieji: "劫击",
	stdfengzhan: "锋展",
	stdruixi: "锐袭",
	stdlianrong_info: "当其他角色的♥️牌因弃置进入弃牌堆后，你可以获得之。",
	stdyuanzhuo_info: "出牌阶段限一次，你可以弃置一名其他角色的一张牌，然后其视为对你使用一张【火攻】。",
	stdbizun_info: "每回合限一次，你可以将一张装备牌当【杀】或【闪】使用，然后手牌数唯一最多的角色可以移动场上一张牌。",
	stdhuangong_info: "锁定技，当你失去场上的最后一张牌后，你摸一张牌。",
	stdzhuying_info: "当其他角色受到非属性伤害时，若其未横置，你可以令其横置。",
	stdzhongshi_info: "锁定技，你横置/未横置时对未横置/横置角色造成伤害时，此伤害+1。",
	stdjuxian_info: "锁定技，当其他角色获得你的牌时，你防止之。",
	stdlijun_info: "准备阶段，你展示至多X名的角色的各一张手牌，然后被以此法展示牌的角色依次选择一项：1.使用以此法展示的牌；2.弃置以此法展示的牌（X为你的体力值）。",
	stdwuwei_info: "当你受到伤害后，你可以将一张装备牌置入一名角色的装备区内，然后你弃置其X张牌（X为其因此增加的攻击范围数）。",
	stdleiruo_info: "结束阶段，你可以获得一名其他角色装备区内的一张牌，然后其可以视为对你使用一张无距离限制的【杀】。",
	stddechong_info: "其他角色的准备阶段，你可以交给其至少一张牌，若如此做，其下个弃牌阶段开始时，若其手牌数不小于体力值，你可以对其造成1点伤害。",
	stdyinzu_info: "锁定技，手牌数大于体力值的角色的攻击范围+1；手牌数不大于体力值的角色的攻击范围-1。",
	stdqiyue_info: "锁定技，游戏开始时，你从游戏外获得【宣花斧】。",
	stdjieji_info: "锁定技，你每回合使用的首张【杀】对一名其他角色造成伤害后，你获得其一张手牌，然后其视为对你使用一张无距离限制的【杀】。",
	stdfengzhan_info: "锁定技，游戏开始时，你从游戏外获得【百辟双匕】。",
	stdruixi_info: "每个回合的结束阶段，若你于本回合内失去过牌，你可以将一张牌当做无距离限制的【杀】使用。",
	xuanhuafu: "宣花斧",
	xuanhuafu_skill: "宣花斧",
	xuanhuafu_info: "锁定技，你使用【杀】指定目标时，令与其距离为1的另一名其他角色成为此【杀】的额外目标。",
	baipishuangbi: "百辟双匕",
	baipishuangbi_skill: "百辟双匕",
	baipishuangbi_info: "锁定技，当你使用【杀】指定一名与你性别不同的目标后，若你没有手牌，此【杀】造成的伤害+1。",
};

export default translates;
