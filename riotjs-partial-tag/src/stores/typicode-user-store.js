/**
 * Created by Herb on 9/27/2016.
 */
// TodoStore definition.
// Flux stores house application logic and state that relate to a specific domain.
// In this case, a list of todo items.

const user_cache = 'typicodeUserCache';

function TypicodeUserStore() {
    var self = this
    self.name = 'TypicodeUserStore';
    riot.EVT.typicodeUserStore ={
        in:{
            typicodeInit:'typicode-init',
            typicodeUninit:'typicode-uninit',
            typicodeUsersFetchResult:'typicode-users-fetch-result',
            typicodeUsersFetch:'typicode-users-fetch',
            typicodeUserFetch:'typicode-user-fetch'
        },
        out:{
            typicodeUsersChanged:'typicode-users-changed',
            typicodeUserChanged:'typicode-user-changed'
        }
    }
    riot.observable(self) // Riot provides our event emitter.

    self.fetchException = null;

    self.on(riot.EVT.app.out.appMount, function() {
        console.log(riot.EVT.app.out.appMount,self.name);
        riot.control.on(riot.EVT.typicodeUserStore.in.typicodeUsersFetchResult, self.onUsersResult);
    })
    self.on(riot.EVT.app.out.appUnmount, function() {
        console.log(riot.EVT.app.out.appUnmount,self.name);
        riot.control.off(riot.EVT.typicodeUserStore.in.typicodeUsersFetchResult, self.onUsersResult);
    })
    self.on(riot.EVT.typicodeUserStore.in.typicodeInit, function() {
        console.log(riot.EVT.typicodeUserStore.in.typicodeInit,self.name);
        riot.control.on(riot.EVT.typicodeUserStore.in.typicodeUsersFetchResult, self.onUsersResult);
    })
    self.on(riot.EVT.typicodeUserStore.in.typicodeUninit, function() {
        console.log(riot.EVT.typicodeUserStore.in.typicodeUninit,self.name);
        riot.control.off(riot.EVT.typicodeUserStore.in.typicodeUsersFetchResult, self.onUsersResult);
    })
    

    /**
     * Reset tag attributes to hide the errors and cleaning the results list
     */
    self.resetData = function() {
        self.fetchException = null;
    }

    self.onUsersResult = (data) =>{
        console.log(riot.EVT.typicodeUserStore.in.typicodeUsersFetchResult,data);
        riot.control.trigger(riot.EVT.localStorageStore.in.localstorageSet,{key:user_cache,data:data});
        self.trigger(riot.EVT.typicodeUserStore.out.typicodeUsersChanged, data)
    }

    self.on(riot.EVT.typicodeUserStore.in.typicodeUsersFetch, function() {
        console.log(riot.EVT.typicodeUserStore.in.typicodeUsersFetch);
        var url = 'https://jsonplaceholder.typicode.com/users';
        riot.control.trigger(riot.EVT.fetchStore.in.fetch,url,null,{name:riot.EVT.typicodeUserStore.in.typicodeUsersFetchResult});
    })

    self.on(riot.EVT.typicodeUserStore.in.typicodeUserFetch, function(query) {
        console.log(riot.EVT.typicodeUserStore.in.typicodeUserFetch);
        var restoredSession = JSON.parse(localStorage.getItem(user_cache));
        var result = restoredSession.filter(function( obj ) {
            return obj.id == query.id;
        });
        if(result && result.length>0){
            self.trigger(riot.EVT.typicodeUserStore.out.typicodeUserChanged,result[0]);
        }
    })

    // The store emits change events to any listening views, so that they may react and redraw themselves.
}
if (typeof(module) !== 'undefined') module.exports = TypicodeUserStore;



