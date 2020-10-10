new Vue({
    el:'#app',
    data: {
        //show or hide name or result
        state: true,
        inputName: '',
        names: [],
        showError: false, 
        result:''
    },
    methods: {
        //add name to the list, get name, show errors
        addNameToList(){
            if (this.validate(this.inputName)) {
                this.names.push(this.inputName);
                this.inputName = '';
                this.showError = false;
            } else {
                this.showError = true;
            }
        },
        //remove the clicked bubble
        removeName(index){
            this.names.splice(index,1);
        },
        //make sure user writes name
        validate(value){
            if (value !== '') {
                return true
            } else {
                return false
            }
        },
        //if more than a name shows results
        showResults(){
            let rand = this.names[Math.floor(Math.random() * this.names.length)];
            this.result = rand;
            this.state = false;
        },
        //reset back to original screen - resets to start application
        resetApp(){
            this.state = true;
            this.names = [];
            this.result = '';
        }
    },
})