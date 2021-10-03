export default {
    methods: {
        replaceString: function(word){
          alert(1)
          console.log('working')
          return word.toLowerCase().replace(/\W/g, '');
        }
    }
};