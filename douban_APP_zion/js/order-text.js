
   var vm=new Vue({
   el:"#app",
   data:{
    totalPrice:0,
    animatenum:0,
    message:[
    {
        name: 'iphone5s',
        quantity: 3,
        price: 400
     },{
        name: 'iphone5',
        quantity: 9,
        price: 300
     },{
        name: 'imac',
        quantity: 4,
        price: 700
     },{
        name: 'ipad',
        quantity: 5,
        price: 600
      }
    ]
   },
   watch:{
    toComput2:function(newValue,oldValue){
    this.tween(newValue,oldValue);
    }
   },
   computed:{
    //计算总金额
    toComput2:function(){
    var vm=this;
    //每次进来要重置总金额
    vm.totalPrice=0;
    this.message.forEach(function(mess){
     vm.totalPrice+=parseInt(mess.price*mess.quantity);
    })
    return this.totalPrice;
    }
   },
   filters:{
    filtermoney:function(value){
    return '￥'+value ;
    }
   },
   mounted:function(){ 
    this.tween('9700','0');
   },
   methods:{
    //计算总数的方法为什么写在methods里面就不行？
    toComput:function(){
    var vm=this;
    vm.message.forEach(function(mess){
     vm.totalPrice+=parseInt(mess.price*mess.quantity);
    })
   return vm.totalPrice;
    },
    add:function(index){
    var vm=this;
    vm.message[index].quantity++;
    },
    subtract:function(index){
    var vm=this;
    vm.message[index].quantity--;
    if(vm.message[index].quantity<=0){
     if (confirm("你确定移除该商品？")) { 
        vm.message.splice(index,1)
      } 
    }
 
    },
    remove:function(index){
    var vm=this;
    if (confirm("你确定移除该商品？")) { 
        vm.message.splice(index,1)
      } 
    },
    empty:function(){
    var vm=this;
    vm.message.splice(0,vm.message.length);
    },
    jia:function(index){
    var vm=this;
    vm.arr[index].one++;
    },
    tween:function(newValue,oldValue){
   var vm=this;
   var twen=new TWEEN.Tween({animatenum:oldValue});
   function animate() {
     requestAnimationFrame(animate);  
     TWEEN.update(); 
   };
   twen.to({animatenum:newValue},750);
   twen.onUpdate(function(){
   //toFixed();保留几位小数
   vm.animatenum = this.animatenum.toFixed();
   })
   twen.start();
   animate();
  }
   }
   });
 
