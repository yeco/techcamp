

(function($){
this.mobileTimetable ={};
this.socialTimetable ={};

var loadTimeTables = function(){
   this.mobileTimetable = newTimetable("mobile"); 
   this.socialTimetable = newTimetable("social"); 
} 
var loadMobileEvents = function(){
    this.mobileTimetable.addEvent("test", 9, 0.4);
    this.mobileTimetable.addEvent("test1", 9, 0.4);
    this.mobileTimetable.addEvent("test2", 10, 0.4);
    this.mobileTimetable.addEvent("test3", 12, 0.4);
    this.mobileTimetable.addEvent("test4", 1, 0.4);
    this.mobileTimetable.addEvent("test5", 3, 0.4);
    
}
var loadSocialEvents = function(){
    this.socialTimetable.addEvent("test", 9, 0.4);
    this.socialTimetable.addEvent("test1", 9, 0.4);
    this.socialTimetable.addEvent("test2", 10, 0.4);
    this.socialTimetable.addEvent("test3", 12, 0.4);
    this.socialTimetable.addEvent("test4", 1, 0.4);
    this.socialTimetable.addEvent("test5", 3, 0.4);
    
}



return init = {
    app: function(){},
    agenda: function(){
        loadTimeTables();
        loadMobileEvents();
        loadSocialEvents
        
    }
} 



})(window.jQuery);



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


