var Bugetcontrol = (function(){

    var income = function(id,description,Value){
        this.id = id;
        this.description = description;
        this.Value = Value;
    }
    var  Expenss = function(id,description,Value){
        this.id = id;
        this.description = description;
        this.Value = Value;

   };

   var calculateTotal = function(type){
       var sum = 0;
       data.alliteams[type].forEach(function(cur){
           sum += cur.Value;
           data.totals[type] = sum;
       })
   };

   




   var data = {
     alliteams:{  
       inc: [],
       exp: [],
     },
     totals:{
        inc: [],
        exp: [],
     },
     Budget: 0,
     percentage: -1
   }
    return{
        additeam: function(type,des,value){
            var newiteam, ID;
            //New id
            if (data.alliteams.length > 0){
                ID = data.alliteams[type][data.alliteams[type].length-1].id + 1;
            }else{
                ID = 0;
            }
        
            //Newiteams
            if (type === 'exp'){
            newiteam = new Expenss(ID, des, value);
          }else if(type === 'inc'){
              newiteam = new income(ID , des, value);
          }
         //  push data structrue
          data.alliteams[type].push(newiteam);
          return newiteam;
          
        },
        calculatebudget: function(){
           calculateTotal('exp');
           calculateTotal('inc');
            
           data.Budget = data.totals.inc - data.totals.exp;
           if(data.totals.inc > 0){
            data.percentage = Math.round((data.totals.exp / data.totals.inc)*100);
           }else{
               data.percentage = -1;
           }
           

        },
        getbudget: function(){
            return{
                budget: data.Budget,
                totalsinc: data.totals.inc,
                totalsExp: data.totals.exp,
                percentage: 0,
            
            }
        }
        
    }
    

    


})();
var Uicontrol = (function(){
    var store ={
        inputtype: '.add__type',
        inputvalue: '.add__value',
        inputdescription: '.add__description',
        inputBtn: '.add__btn',
        incomecontainer: '.income__list',
        expenscontainer:'.expenses__list',
        budgetLabelvalue: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensLabel: '.budget__expenses--value',
        expenspercentLabel :'.budget__expenses--percentage',
        container: '.container'

    }
   return{
       getinput: function(){
          return{
              type: document.querySelector(store.inputtype).value,
              description: document.querySelector(store.inputdescription).value,
              value:parseFloat(document.querySelector(store.inputvalue).value)
          }
        },
    getstore: function(){
        return store;
    },
    
    addlistiteam: function(obj,type){
        var html,Element,newhtml;
      if (type === 'inc'){
          Element = store.incomecontainer;
         html =  ('<div class="item clearfix" id=%id%> <div class="item__description">%description%</div><div class="right clearfix"> <div class="item__value">%Value%</div><div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div> </div></div>')
      }else if(type === 'exp'){
         Element = store.expenscontainer;
        html =   ('<div class="item clearfix" id="%id%"> <div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%Value%</div><div class="item__percentage">%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div></div>')
 
      }
        newhtml = html.replace('%id%', obj.id);
        newhtml = newhtml.replace('%description%',obj.description);
        newhtml = newhtml.replace('%Value%',obj.Value);
        newhtml = newhtml.replace("%" , obj.percentage);
     document.querySelector(Element).insertAdjacentHTML('beforeend',newhtml);

    },
    clearfields: function(){
        var field, fieldsArr;
        field =  document.querySelectorAll(store.inputdescription + ',' + store.inputvalue);
        fieldsArr = Array.prototype.slice.call(field);
        fieldsArr.forEach(function(curr, i, arr) {
            curr.value = "";
            fieldsArr[0].focus();
        })
            
    

    },displaybudget: function(obj){
       document.querySelector(store.budgetLabelvalue).textContent  = obj.budget;
       document.querySelector(store.incomeLabel).textContent = obj.totalsinc;
       document.querySelector(store.expensLabel).textContent = obj.totalsExp;
         if(obj.percentage > 0){
            document.querySelector(store.expenspercentLabel).textContent = obj.percentage + '%';
         }else{
            document.querySelector(store.expenspercentLabel).textContent = obj.percentage + '---';
         }
    
    }
    
   }
    
  


})();

var Homecontrol = (function(bugetctl,Ui){
    var DOM = Uicontrol.getstore();
    var seteventlst = function(){

        document.querySelector(DOM.inputBtn).addEventListener('click',pannel)
        document.addEventListener('keypress',function(event){
            if (event.keyCode === 13 || event.which === 13 ){
              pannel();
            }
        })
    }
 var updateBudget = function(){
    //  calculate budget
    Bugetcontrol.calculatebudget();
    // return budget
    var Budget = Bugetcontrol.getbudget();

    Uicontrol.displaybudget(Budget);  
    // display budget onthe ui

 };

  var pannel = function(){ 
      var input;
      var newiteam;
//get the input flied data
    
     input = Uicontrol.getinput()
    if(input.description !== ""  && !isNaN(input.value) && input.value > 0){
         // add item budgetccontroller
        newiteam = Bugetcontrol.additeam(input.type,input.description,input.value);
        //add item to the ui
        Uicontrol.addlistiteam(newiteam,input.type);
        Uicontrol.clearfields();
        updateBudget();
        
    }
    

    
  }

  return{
      init: function(){
          console.log('its working')
          Uicontrol.displaybudget({budget: 0,
            totalsinc: 0,
            totalsexp: 0,
            percentage: 0,
        }); 
          seteventlst();
      }
  }






})(Bugetcontrol,Uicontrol);

Homecontrol.init();





















































































































