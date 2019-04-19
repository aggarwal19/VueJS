var app = new Vue ({
	el: '#app',
	data: {
	  person:'shridhi',
      mother: 'sarika'
	},
	methods:{
		details : function(){
		    return 'I am '+this.person+' and my mother\'s name is '+this.mother;
	  }
    }
})
