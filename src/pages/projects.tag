import "../components/pretty-json.tag"

<projects>


<div class="panel panel-default">
  <div class="panel-heading">
    <h3 class="panel-title">Projects</h3>
  </div>
  <div class="panel-body">
    <div class="well well-lg">  
		This will load a mini spa which has been pre-bundled.
		This mini spa was built using the riotjs-partial-tag nested project.
	</div>
	

	<a 	onclick={this.loadMyComponentsSPA} 
		class={this._myComponent.state.loaded === true?'disabled btn btn-default btn-lg':'btn btn-primary btn-lg'}>
		Load Component</a>

	<a 	onclick={this.unloadMyComponentsSPA} 
		class={this._myComponent.state.loaded === false?'disabled btn btn-default btn-lg':'btn btn-primary btn-lg'}>
		Unload Component</a>

		<div class="spacer"></div>
		<pretty-json obj={this._myComponent}></pretty-json>
  </div>
</div>



<script>
	var self = this;
	self.mixin("opts-mixin");
	self._myComponent = {};
	self.name = 'projects';

	self.on('before-mount', () => {
		if(riot.state.projects === undefined){
			riot.state.projects = {loaded:false, text:"Not Loaded Yet..."}
		}
		self._myComponent = {state:{loaded:false}};
		if(riot.state.componentLoaderState != null && riot.state.componentLoaderState.components != null){
			self._myComponent = riot.state.componentLoaderState.components.get('typicode-component');
		}
	   
	  });

	self.on('mount', () => {
    	console.log(self.name,'mount')
      	riot.control.on('component-loader-store-state-updated',self.onComponentLoaderStoreStateUpdated);
    });
    
    self.on('unmount', () => {
 		console.log(self.name,'unmount')
      	riot.control.off('component-loader-store-state-updated',self.onComponentLoaderStoreStateUpdated);
    });

	self.onComponentLoaderStoreStateUpdated = () => {
		console.log(self.name,'component-loader-store-state-updated')
  		if(riot.state.componentLoaderState != null && riot.state.componentLoaderState.components != null){
			self._myComponent = riot.state.componentLoaderState.components.get('typicode-component');
		}
  	};

  	self.loadMyComponentsSPA = () => {
  		riot.control.trigger('load-dynamic-component','typicode-component');
  	};

  	self.unloadMyComponentsSPA = () => {
  		riot.control.trigger('unload-dynamic-component','typicode-component');
  	};
</script>

</projects>
