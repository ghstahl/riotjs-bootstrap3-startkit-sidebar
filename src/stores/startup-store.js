import '../app.tag';
class StartupStore{

  constructor(){
    var self = this;
    self.name = 'StartupStore';
    self._startupComplete = false;
    riot.observable(self);
    self.bindEvents();
  }

  bindEvents(){
    var self = this;
    self.on('all-components-load-complete', () => {
      console.log(self.name,'all-components-load-complete');
      if(self._startupComplete == false){
        self._startupComplete = true;
        riot.mount('app');
        riot.route.start(true);
      }
    });
  }
}
export default StartupStore;