class RouteContributionStore{

  constructor(){
    var self = this;
    self.name = "RouteContributionStore";
    riot.observable(self);
    self._initializeViewSet();
    self.bindEvents();
  }

  _initializeViewSet(){
    var self = this;
    self._viewsSet = new Set();
    var s = self._viewsSet;
    s.add('home');
    s.add('projects');
    self.views = Array.from(s);
    self.defaultRoute = '/main/home/';
  }
  bindEvents(){
    var self = this;
    self.on(riot.EVT.contributeRoutes, (r) => {
      console.log(self.name,riot.EVT.contributeRoutes,r)
      r('/main/*', (name)=>{
        console.log('route handler of /main/' + name)
        var view = name;
        if(self.views.indexOf(view) === -1){
          riot.control.trigger(riot.EVT.routeDispatch,self.defaultRoute);
        }else{
          riot.control.trigger(riot.EVT.loadView,view);
        }
        });
      r('/main', ()=>{
        console.log('route handler of /main  ')
        riot.control.trigger(riot.EVT.routeDispatch,self.defaultRoute);
      });
    });

  }
}
export default RouteContributionStore;