

(function($){
this.mobileTimetable ={};
this.socialTimetable ={};

var loadTimeTables = function(){
   this.mobileTimetable = new Timetable("mobile"); 
   this.socialTimetable = new Timetable("social"); 
} 
var loadMobileEvents = function(){
    this.mobileTimetable.addEvent("test", 9, 0.4);
    this.mobileTimetable.addEvent("test1", 9, 0.4);
    this.mobileTimetable.addEvent("test2", 10, 0.4);
    this.mobileTimetable.addEvent("test3", 12, 0.4);
    this.mobileTimetable.addEvent("test4", 1, 0.4);
    this.mobileTimetable.addEvent("test5", 3, 0.4); 
    this.mobileTimetable.goTo(9);
    
}
var loadSocialEvents = function(){
    this.socialTimetable.addEvent("test", 9, 0.4);
    this.socialTimetable.addEvent("test1", 9, 0.4);
    this.socialTimetable.addEvent("test2", 10, 0.4);
    this.socialTimetable.addEvent("test3", 12, 0.4);
    this.socialTimetable.addEvent("test4", 1, 0.4);
    this.socialTimetable.addEvent("test5", 3, 0.4);
    this.socialTimetable.goTo(9);
    
    
}



return init = {
    app: function(){
        if ($("article.agenda")[0]){
            loadTimeTables();
            loadMobileEvents();
            loadSocialEvents() 
        }
    }
} 



})(window.jQuery);

$(function() { init.app() });  

window.log = function(){
  log.history = log.history || []; 
  log.history.push(arguments);
  if(this.console){
    console.log( Array.prototype.slice.call(arguments) );
  }
};

(function(doc){
  var write = doc.write;
  doc.write = function(q){ 
    log('document.write(): ',arguments); 
    if (/docwriteregexwhitelist/.test(q)) write.apply(doc,arguments);  
  };
})(document);


