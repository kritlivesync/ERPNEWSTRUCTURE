/**
 * Created by praba on 2/13/2016.
 */
Polymer({is:"drawermenu-card",
  ready:function(){
    sessionStorage.setItem("curr_sess_intentrefreshflag","0");
  },
  selectedMenu:function(e){
    //Role flag 0 to ensure Inwardslip and outgoing item entries,and it will navigate to the pages based on the flags
    // alert(sessionStorage.getItem("curr_sess_roleflag"));
    if(sessionStorage.getItem("curr_sess_roleflag")=="0"){
      if(document.querySelector('item-card')==null){}
      else{
        document.querySelector('item-card').FnClear();
        //document.querySelector('item-card').ready();
      }
      if(e.target.id=="Inward Items Register"){ 
        localStorage.setItem("curr_sess_wardflag","0");
        
        document.querySelector('app-homepage').setPage("inwardslip-page");
        document.querySelector("dynamic-card").dynamiccardreadService();
        document.querySelector('inwardslip-page').setPage("Vehicle Info");
        //window.location.href="../elements/indexhome.html";        
        document.querySelector('vehicle-page').ready();
        document.querySelector('item-page').ready();
        document.querySelector('item-page').FnClear();
        document.querySelector('item-page').FnBtnEnable();
        //document.querySelector('item-card').FnClear();
        document.querySelector('supplier-list').ready();
        document.querySelector('supplier-list').FnClear();
        document.querySelector('supplier-page').ready();
        document.querySelector('autocompleteitemlist-card').ready();
        document.querySelector('app-homepage').ready();
        //document.querySelector('dynamic-card').ready();

      }
      if(e.target.id=="Outward Items Register"){
        //alert("out");       
        localStorage.setItem("curr_sess_wardflag","1");
        
        document.querySelector('app-homepage').setPage("outwardslip-page");
        document.querySelector("dynamic-card").dynamiccardreadService();
        document.querySelector('outwardslip-page').setPage("Out Vehicle Info");              
        //window.location.href="../elements/indexhome.html";        
        document.querySelector('vehicleinfo-page').ready();
        document.querySelector('outwarditem-page').ready();
        document.querySelector('outwarditem-page').FnClear();
        //document.querySelector('item-card').FnClear();
        document.querySelector('customer-list').ready();
        document.querySelector('customer-page').ready();
        document.querySelector('autocompleteitemlist-card').ready();
        document.querySelector('autocompleteitemlist-card').FnsetValue();
        document.querySelector('app-homepage').ready();
        //document.querySelector('dynamic-card').ready();
        
        
      }
      
    }
    else if(sessionStorage.getItem("curr_sess_roleflag")=="4"){
      if(e.target.id=="GRN Flow"){
        localStorage.setItem("curr_sess_wardflag","");
        window.location.href="../elements/indexhome.html";
      }
       if(e.target.id=="Add Supplier"){
        localStorage.setItem("curr_sess_wardflag","4");
        //document.querySelector('app-homepage').setPage('supplier-page');
        window.location.href="../elements/indexhome.html";
        //document.querySelector('supplier-page').setPage('addsupplier-card');
      }
      if(e.target.id=="View Intent"){
       localStorage.setItem("curr_sess_wardflag","3");
        sessionStorage.setItem("curr_sess_intentrefreshflag","1");
        document.querySelector('viewintent-page').FnRefreshService();
        window.location.href="../elements/indexhome.html";
        /*document.querySelector('app-homepage').setPage('intenthome-page');
        document.querySelector('intenthome-page').setPage('View Intent');        
        document.querySelector('app-homepage').setVisible("false");
        document.querySelector('viewtype-card').FnHideBtns();
        document.querySelector('app-homepage').setFlowVisibility('false');
        document.querySelector('app-homepage').FnSetIntentFlowVisibility('true');
        window.location.href="../elements/indexhome.html";*/
      }
    }
    //Role flag 2 is for the role who may do GRN Flow navigation Intent item adding
    else if(sessionStorage.getItem("curr_sess_roleflag")=="2"){
      if(e.target.id=="GRN Flow"){
        localStorage.setItem("curr_sess_wardflag","");
        window.location.href="../elements/indexhome.html";
      }
      if(e.target.id=="Add Intent"){

        //localStorage.setItem("curr_sess_showpage","Add Intent");
        localStorage.setItem("curr_sess_wardflag","2");
        sessionStorage.setItem("curr_sess_intentrefreshflag","0");
        /*document.querySelector('app-homepage').setPage('intenthome-page');
        document.querySelector('app-homepage').setVisible("false");
        document.querySelector('viewtype-card').FnViewlist();
        document.querySelector('app-homepage').setFlowVisibility('false');
        // document.querySelector('app-homepage').FnSetIntentFlowVisibility('true');
        document.querySelector('intenthome-page').setPage('Add Intent');*/
        window.location.href="../elements/indexhome.html";
      }
      if(e.target.id=="View Intent"){
       localStorage.setItem("curr_sess_wardflag","3");
       sessionStorage.setItem("curr_sess_intentrefreshflag","1");
       /* document.querySelector('viewintent-page').FnRefreshService();
        document.querySelector('app-homepage').setPage('intenthome-page');
        document.querySelector('intenthome-page').setPage('View Intent');        
        document.querySelector('app-homepage').setVisible("false");
        document.querySelector('viewtype-card').FnHideBtns();
        document.querySelector('app-homepage').setFlowVisibility('false');*/
        window.location.href="../elements/indexhome.html";
      }
    }
    //Roleflag 1 is for the role who may do GRN Flow and Intent items
    else if(sessionStorage.getItem("curr_sess_roleflag")=="1"){
      if(e.target.id=="GRN Flow"){
        localStorage.setItem("curr_sess_wardflag","");
        window.location.href="../elements/indexhome.html";
      }
       if(e.target.id=="Add Intent"){
        //localStorage.setItem("curr_sess_showpage","Add Intent");
        localStorage.setItem("curr_sess_wardflag","2");
        sessionStorage.setItem("curr_sess_intentrefreshflag","0");
        /*document.querySelector('app-homepage').setPage('intenthome-page');
        document.querySelector('app-homepage').setVisible("false");
        document.querySelector('viewtype-card').FnViewlist();
        document.querySelector('app-homepage').setFlowVisibility('false');
        // document.querySelector('app-homepage').FnSetIntentFlowVisibility('true');
        document.querySelector('intenthome-page').setPage('Add Intent');*/
        window.location.href="../elements/indexhome.html";
      }
      if(e.target.id=="View Intent"){
        //alert("yes");
        localStorage.setItem("curr_sess_wardflag","3");
        sessionStorage.setItem("curr_sess_intentrefreshflag","1");
        /*document.querySelector('viewintent-page').FnRefreshService();
        document.querySelector('app-homepage').setPage('intenthome-page');
        document.querySelector('intenthome-page').setPage('View Intent');
        
        document.querySelector('app-homepage').setVisible("false");
        document.querySelector('viewtype-card').FnHideBtns();
        document.querySelector('app-homepage').setFlowVisibility('false');*/

        window.location.href="../elements/indexhome.html";
        //document.querySelector('intenthome-page').setPage('View Intent');
        //document.querySelector('grn-service').FnIntentitemReadService();
        //localStorage.setItem("curr_sess_showpage","Add Intent");
        //document.querySelector('home-page').setPage('View Intent');
      }
    }
    else if(sessionStorage.getItem("curr_sess_roleflag")=="6"){
      if(e.target.id=="Add Item"){
        localStorage.setItem("curr_sess_wardflag","");
        window.location.href="../elements/indexhome.html";
        //document.querySelector('app-homepage').setPage('admin-page');
        //document.querySelector('admin-page').setPage('additem-card');
      }
      if(e.target.id=="Add Supplier"){
        localStorage.setItem("curr_sess_wardflag","4");
        //document.querySelector('app-homepage').setPage('supplier-page');
        window.location.href="../elements/indexhome.html";
        //document.querySelector('supplier-page').setPage('addsupplier-card');
      }
    }
    else if(sessionStorage.getItem("curr_sess_roleflag")=="7"||sessionStorage.getItem("curr_sess_roleflag")=="8"||sessionStorage.getItem("curr_sess_roleflag")=="9"){
         //localStorage.setItem("curr_sess_showpage","Add Intent");
        if(e.target.id=="Add Intent"){
        sessionStorage.setItem("curr_sess_intentrefreshflag","0");
        //localStorage.setItem("curr_sess_showpage","Add Intent");
        localStorage.setItem("curr_sess_wardflag","2");
        document.querySelector('app-homepage').setPage('intenthome-page');
        document.querySelector('app-homepage').setVisible("false");
        document.querySelector('viewtype-card').FnViewlist();
        document.querySelector('app-homepage').setFlowVisibility('false');
        // document.querySelector('app-homepage').FnSetIntentFlowVisibility('true');
        document.querySelector('intenthome-page').setPage('Add Intent');

        //window.location.href="../elements/indexhome.html";
      }
      if(e.target.id=="View Intent"){
        sessionStorage.setItem("curr_sess_intentrefreshflag","1");
        localStorage.setItem("curr_sess_wardflag","3");
        document.querySelector('viewintent-page').FnRefreshService();
        document.querySelector('app-homepage').setPage('intenthome-page');
        document.querySelector('intenthome-page').setPage('View Intent');
        
        document.querySelector('app-homepage').setVisible("false");
        document.querySelector('viewtype-card').FnHideBtns();
        document.querySelector('app-homepage').setFlowVisibility('false');

        //window.location.href="../elements/indexhome.html";
      }
      if(sessionStorage.getItem("curr_sess_roleflag")=="9"&&e.target.id=="Approve Supplier"){
        //alert("approve");
        localStorage.setItem("curr_sess_wardflag","7");
        //document.querySelector('app-homepage').setPage('intenthome-page');
        //document.querySelector('app-homepage').setVisible("false");
        //document.querySelector('viewtype-card').FnViewlist();
        //document.querySelector('app-homepage').setFlowVisibility('false');
        // document.querySelector('app-homepage').FnSetIntentFlowVisibility('true');
        //document.querySelector('intenthome-page').setPage('Approve Supplier');

        window.location.href="../elements/indexhome.html";
      }

        // document.querySelector('app-homepage').FnSetIntentFlowVisibility('true');
        //document.querySelector('intenthome-page').setPage('Add Intent');
    }

    

     //Role flag 2 is for the role who may do GRN Flow navigation Intent item adding
    else if(sessionStorage.getItem("curr_sess_roleflag")=="5"){
     
      if(e.target.id=="View Intent"){
       localStorage.setItem("curr_sess_wardflag","3");
       sessionStorage.setItem("curr_sess_intentrefreshflag","1");
        document.querySelector('viewintent-page').FnRefreshService();
        document.querySelector('app-homepage').setPage('intenthome-page');
        document.querySelector('intenthome-page').setPage('View Intent');        
        document.querySelector('app-homepage').setVisible("false");
        document.querySelector('viewtype-card').FnHideBtns();
        document.querySelector('app-homepage').setFlowVisibility('false');

       // window.location.href="../elements/indexhome.html";
      }
    }

    else if(sessionStorage.getItem("curr_sess_roleflag")=="10"){
      if(e.target.id=="Outward Items Report"){
        localStorage.setItem("curr_sess_wardflag","5");
        document.querySelector('app-homepage').setPage("outwardreport-card");
        //window.location.href="../elements/indexhome.html";
      }
      if(e.target.id=="Add Customer"){
        localStorage.setItem("curr_sess_wardflag","6");  
        document.querySelector('app-homepage').setPage("customer-page");    
        document.querySelector('customer-page').setPage("Add Customer");
        //window.location.href="../elements/indexhome.html";
      }
    }

    //else if(sessionStorage.getItem("loggedrole")=="Stores manager"||sessionStorage.getItem("loggedrole")=="Production manager"||sessionStorage.getItem("loggedrole")=="Quality manager"||sessionStorage.getItem("loggedrole")=="Purchase manager")
      //document.querySelector('my-app').setPage("home-page");
  }
});
