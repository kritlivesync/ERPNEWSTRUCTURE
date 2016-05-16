/**
 * Created by praba on 2/11/2016.
 */
(function() {
  Polymer({
    is: "url-service",
    ready:function()
    {
    },
    urlService:function(){
      this.$.urlreadajax.generateRequest();
    },
    urlreadResponse:function(e)
    {

      var arr=e.detail.response;
      //alert(arr[0].url);
      sessionStorage.setItem("curr_sess_url",arr[0].url);      
    }
  });
})();
