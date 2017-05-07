//META{"name":"killosu"}*//

class killosu {
 constructor() {
  this.processChat = () => {
	setTimeout(function() {
		$(".comment .markup, .comment .markup>span").each(function() {
			var tagRegex = /(osu)/igm;
			var html = $(this).html();
			$(this).html(html.replace(tagRegex, 'shit'));
		});
	 },100);
   }
 };

  start() { this.processChat(); }
	 
  stop() {}
	 
  load() {}
	
  unload() {}
	 
  onMessage() { this.processChat(); }
	 
  onSwitch() { this.processChat(); }

  getName		        () { return 'killosu'; }
  getDescription    	() { return 'replaces osu with shit, for you rhythm game elitists.'; }
  getAuthor		      	() { return 'Rhythm Lunatic'; }
  getVersion		    () { return '0.0.1'; }
  getSettingsPanel		() { }
};
/*@end@*/
