$.fn.score = function(setting){
	var defaults = {"initscore":"0","total":"5","show":false,"mpic":"","lpic":""};
	var self = this;
	var $self = $(this); 
	self.value = 0;
	var option = { 
		set:function(val){
			this.mie();
			for(i=0;i<val;i++){
				this.liang($self.find("img:eq("+i+")"));
			} 
			self.value = val;
		},
		liang:function(obj){
			obj.attr("src",setting.lpic);
		},
		mie:function(){
			$self.find("img").attr("src",setting.mpic);
		},
		render:function(){
			for(i=0;i<setting.total;i++){
				$("<img src='"+setting.lpic+"'></img>").appendTo($self).data("star",(i+1)).click(function(){option.set($(this).data("star"))});
			}
		},
		__init__:function(){
			setting = $.extend( {}, defaults, setting); 
			option.render(); 
			option.set(setting.initscore);
			return this;
		}
	};
	option.__init__(); 
	return this; 
}