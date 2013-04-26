//author= blackmwana
//deleted categories should be cattered for , maybe a clean up function after a cat is deleted, custom code
Backbone.View.prototype.close = function() {
        //http://lostechies.com/derickbailey/2011/09/15/zombies-run-managing-page-transitions-in-backbone-apps/
        console.log(this.el.localName);
        console.log(this);
        if (this.el.tagName.toLowerCase() === 'body') {
            $('body').empty();
            console.debug('emptying body');
        }
        else {
            this.remove(); //el.remove
            console.debug(this.el + ': removing view  el');
        }
        this.unbind();
        if (this.onClose) {//have to implement these to unbind model bindings
            this.onClose();
        }
    }
    //////////////////
function get_gravatar(email, size) {

        // MD5 (Message-Digest Algorithm) by WebToolkit
        // 
         
        var MD5 = function(s) {
            function L(k, d) {
                return (k << d) | (k >>> (32 - d))
            }
            function K(G, k) {
                var I, d, F, H, x;
                F = (G & 2147483648);
                H = (k & 2147483648);
                I = (G & 1073741824);
                d = (k & 1073741824);
                x = (G & 1073741823) + (k & 1073741823);
                if (I & d) {
                    return (x ^ 2147483648 ^ F ^ H)
                }
                if (I | d) {
                    if (x & 1073741824) {
                        return (x ^ 3221225472 ^ F ^ H)
                    }
                    else {
                        return (x ^ 1073741824 ^ F ^ H)
                    }
                }
                else {
                    return (x ^ F ^ H)
                }
            }
            function r(d, F, k) {
                return (d & F) | ((~d) & k)
            }
            function q(d, F, k) {
                return (d & k) | (F & (~k))
            }
            function p(d, F, k) {
                return (d ^ F ^ k)
            }
            function n(d, F, k) {
                return (F ^ (d | (~k)))
            }
            function u(G, F, aa, Z, k, H, I) {
                G = K(G, K(K(r(F, aa, Z), k), I));
                return K(L(G, H), F)
            }
            function f(G, F, aa, Z, k, H, I) {
                G = K(G, K(K(q(F, aa, Z), k), I));
                return K(L(G, H), F)
            }
            function D(G, F, aa, Z, k, H, I) {
                G = K(G, K(K(p(F, aa, Z), k), I));
                return K(L(G, H), F)
            }
            function t(G, F, aa, Z, k, H, I) {
                G = K(G, K(K(n(F, aa, Z), k), I));
                return K(L(G, H), F)
            }
            function e(G) {
                var Z;
                var F = G.length;
                var x = F + 8;
                var k = (x - (x % 64)) / 64;
                var I = (k + 1) * 16;
                var aa = Array(I - 1);
                var d = 0;
                var H = 0;
                while (H < F) {
                    Z = (H - (H % 4)) / 4;
                    d = (H % 4) * 8;
                    aa[Z] = (aa[Z] | (G.charCodeAt(H) << d));
                    H++
                }
                Z = (H - (H % 4)) / 4;
                d = (H % 4) * 8;
                aa[Z] = aa[Z] | (128 << d);
                aa[I - 2] = F << 3;
                aa[I - 1] = F >>> 29;
                return aa
            }
            function B(x) {
                var k = "",
                    F = "",
                    G, d;
                for (d = 0; d <= 3; d++) {
                    G = (x >>> (d * 8)) & 255;
                    F = "0" + G.toString(16);
                    k = k + F.substr(F.length - 2, 2)
                }
                return k
            }
            function J(k) {
                k = k.replace(/rn/g, "n");
                var d = "";
                for (var F = 0; F < k.length; F++) {
                    var x = k.charCodeAt(F);
                    if (x < 128) {
                        d += String.fromCharCode(x)
                    }
                    else {
                        if ((x > 127) && (x < 2048)) {
                            d += String.fromCharCode((x >> 6) | 192);
                            d += String.fromCharCode((x & 63) | 128)
                        }
                        else {
                            d += String.fromCharCode((x >> 12) | 224);
                            d += String.fromCharCode(((x >> 6) & 63) | 128);
                            d += String.fromCharCode((x & 63) | 128)
                        }
                    }
                }
                return d
            }
            var C = Array();
            var P, h, E, v, g, Y, X, W, V;
            var S = 7,
                Q = 12,
                N = 17,
                M = 22;
            var A = 5,
                z = 9,
                y = 14,
                w = 20;
            var o = 4,
                m = 11,
                l = 16,
                j = 23;
            var U = 6,
                T = 10,
                R = 15,
                O = 21;
            s = J(s);
            C = e(s);
            Y = 1732584193;
            X = 4023233417;
            W = 2562383102;
            V = 271733878;
            for (P = 0; P < C.length; P += 16) {
                h = Y;
                E = X;
                v = W;
                g = V;
                Y = u(Y, X, W, V, C[P + 0], S, 3614090360);
                V = u(V, Y, X, W, C[P + 1], Q, 3905402710);
                W = u(W, V, Y, X, C[P + 2], N, 606105819);
                X = u(X, W, V, Y, C[P + 3], M, 3250441966);
                Y = u(Y, X, W, V, C[P + 4], S, 4118548399);
                V = u(V, Y, X, W, C[P + 5], Q, 1200080426);
                W = u(W, V, Y, X, C[P + 6], N, 2821735955);
                X = u(X, W, V, Y, C[P + 7], M, 4249261313);
                Y = u(Y, X, W, V, C[P + 8], S, 1770035416);
                V = u(V, Y, X, W, C[P + 9], Q, 2336552879);
                W = u(W, V, Y, X, C[P + 10], N, 4294925233);
                X = u(X, W, V, Y, C[P + 11], M, 2304563134);
                Y = u(Y, X, W, V, C[P + 12], S, 1804603682);
                V = u(V, Y, X, W, C[P + 13], Q, 4254626195);
                W = u(W, V, Y, X, C[P + 14], N, 2792965006);
                X = u(X, W, V, Y, C[P + 15], M, 1236535329);
                Y = f(Y, X, W, V, C[P + 1], A, 4129170786);
                V = f(V, Y, X, W, C[P + 6], z, 3225465664);
                W = f(W, V, Y, X, C[P + 11], y, 643717713);
                X = f(X, W, V, Y, C[P + 0], w, 3921069994);
                Y = f(Y, X, W, V, C[P + 5], A, 3593408605);
                V = f(V, Y, X, W, C[P + 10], z, 38016083);
                W = f(W, V, Y, X, C[P + 15], y, 3634488961);
                X = f(X, W, V, Y, C[P + 4], w, 3889429448);
                Y = f(Y, X, W, V, C[P + 9], A, 568446438);
                V = f(V, Y, X, W, C[P + 14], z, 3275163606);
                W = f(W, V, Y, X, C[P + 3], y, 4107603335);
                X = f(X, W, V, Y, C[P + 8], w, 1163531501);
                Y = f(Y, X, W, V, C[P + 13], A, 2850285829);
                V = f(V, Y, X, W, C[P + 2], z, 4243563512);
                W = f(W, V, Y, X, C[P + 7], y, 1735328473);
                X = f(X, W, V, Y, C[P + 12], w, 2368359562);
                Y = D(Y, X, W, V, C[P + 5], o, 4294588738);
                V = D(V, Y, X, W, C[P + 8], m, 2272392833);
                W = D(W, V, Y, X, C[P + 11], l, 1839030562);
                X = D(X, W, V, Y, C[P + 14], j, 4259657740);
                Y = D(Y, X, W, V, C[P + 1], o, 2763975236);
                V = D(V, Y, X, W, C[P + 4], m, 1272893353);
                W = D(W, V, Y, X, C[P + 7], l, 4139469664);
                X = D(X, W, V, Y, C[P + 10], j, 3200236656);
                Y = D(Y, X, W, V, C[P + 13], o, 681279174);
                V = D(V, Y, X, W, C[P + 0], m, 3936430074);
                W = D(W, V, Y, X, C[P + 3], l, 3572445317);
                X = D(X, W, V, Y, C[P + 6], j, 76029189);
                Y = D(Y, X, W, V, C[P + 9], o, 3654602809);
                V = D(V, Y, X, W, C[P + 12], m, 3873151461);
                W = D(W, V, Y, X, C[P + 15], l, 530742520);
                X = D(X, W, V, Y, C[P + 2], j, 3299628645);
                Y = t(Y, X, W, V, C[P + 0], U, 4096336452);
                V = t(V, Y, X, W, C[P + 7], T, 1126891415);
                W = t(W, V, Y, X, C[P + 14], R, 2878612391);
                X = t(X, W, V, Y, C[P + 5], O, 4237533241);
                Y = t(Y, X, W, V, C[P + 12], U, 1700485571);
                V = t(V, Y, X, W, C[P + 3], T, 2399980690);
                W = t(W, V, Y, X, C[P + 10], R, 4293915773);
                X = t(X, W, V, Y, C[P + 1], O, 2240044497);
                Y = t(Y, X, W, V, C[P + 8], U, 1873313359);
                V = t(V, Y, X, W, C[P + 15], T, 4264355552);
                W = t(W, V, Y, X, C[P + 6], R, 2734768916);
                X = t(X, W, V, Y, C[P + 13], O, 1309151649);
                Y = t(Y, X, W, V, C[P + 4], U, 4149444226);
                V = t(V, Y, X, W, C[P + 11], T, 3174756917);
                W = t(W, V, Y, X, C[P + 2], R, 718787259);
                X = t(X, W, V, Y, C[P + 9], O, 3951481745);
                Y = K(Y, h);
                X = K(X, E);
                W = K(W, v);
                V = K(V, g)
            }
            var i = B(Y) + B(X) + B(W) + B(V);
            return i.toLowerCase()
          
        };

        var size = size || 80;
        var d ='wavatar';

        return 'http://www.gravatar.com/avatar/' + MD5(email) + '.jpg?s=' + size+'&d='+d;
    }
if (!String.prototype.trim) {
 String.prototype.trim = function() {
  return this.replace(/^\s+|\s+$/g,'');
 }
}
function arraysEqual(array1,array2){
    if(!$.isArray(array1) || !$.isArray(array2))
        return false;
    //check if lengths are different
    if(array1.length !== array2.length) 
        return false;    
    //slice so we do not effect the original
    //sort makes sure they are in order
    //join makes it a string so we can do a string compare
    var cA = array1.slice().sort().join(","); 
    var cB = array2.slice().sort().join(",");

    return cA===cB;
}
var jic = {
    compress: function(source_img_obj, quality) {
        var cvs = document.createElement('canvas');
        cvs.width = source_img_obj.naturalWidth;
        cvs.height = source_img_obj.naturalHeight;
        var ctx = cvs.getContext("2d").drawImage(source_img_obj, 0, 0);
        var newImageData = cvs.toDataURL("image/jpeg", quality);
        //var result_image_obj = new Image();
        //result_image_obj.src = newImageData;
        return cvs.toDataURL("image/jpeg", quality); //result_image_obj;
    }
};
$(document).ready(function() {
    
    var admin;
    var mainView;
    var cats;
    var statii
    var products;
    var curProd;

    var Cat = StackMob.Model.extend({
        schemaName:'category',
        defaults:function(){
            return{
                title_en:'not set',
                title_pl:'not set',
                count:0
            }
        }
    });
    var Cats = StackMob.Collection.extend({
        model:Cat
    });
    var Status = StackMob.Model.extend({
        schemaName:"status",
        defaults:function(){
            return{
                name:'not set',
                description:'not set',
                count:0
            }
        }
    })
    var Statii = StackMob.Collection.extend({
        model:Status
    });
    //var Profile = StackMob.Model.extend({ binaryFields: ['pic', 'largepic'] }); 
    var Product = StackMob.Model.extend({       
        schemaName:"product",
       // binaryFields:['picture'],
        defaults:function(){
            return{
                title_en:'not set',
                title_pl:'not set',
                description_en:'not set',
                description_pl:'not set',
                link:"http://afroeuro.istore.pl/",
                picture:"http://afrykashop.s3.amazonaws.com/img/market.png",//change to main folder not admin
                price:'0',
                categories:[],
                status:[]
            }
        }
    })
    //window.Product=Product;
    var Products = StackMob.Collection.extend({
        model:Product
    });
    ////////////////////////////////////////////////////////
    var LoginView = Backbone.View.extend({
        el: 'body',
        events: {
            "click #btn-signin": "validate",
            "click #btn-problems":"problem",
            "keypress #username": "onEnter",
            "keypress #pass": "onEnter"
        },
        buttonsActive:true,
        initialize: function() {
            this.template = _.template($('#item-login').html());
            this.loader=_.template($('#item-loader').html());
          //  this.render();//rendering in this.brm 
        },
        render: function() {
            var el = this.$el;
         //   el.empty();
            el.append(this.template());
            el.append(this.loader());
            
            return this;
        },
        onEnter: function(e) {
            console.debug(e.keyCode);
            if (e.keyCode == 13) {
                if ($('#username').val().replace(/\W/g, '') === '') $('#username').focus();
                else if ($('#pass').val().replace(/\W/g, '') === '') $('#pass').focus();
                else this.validate();
            }

        },
        validate: function() {
            if(this.buttonsActive){
            this.toggleButtons();
            $('#ajax-loader').show();
            var u = $('#username').val().replace(/\W/g, '');
            var p = $('#pass').val().replace(/\W/g, '');
            console.log('user: ' + u + " password: " + p);
            if (p === '' || u === '') this.loginError();
            else this.admin_login(u, p);
            console.debug(this);
            }
        },
        //logging in---------------------------------------------------------------
        admin_login: function(user_name, user_pass) {
            var user = new StackMob.User({
                username: user_name,
                password: user_pass
            });
            user.login(false, {
                success: function(model) {
                    // redirect user to a new page
                    //admin=model;//because its not the same as StackMob.Model
                    console.debug(model);//assign this to user object
                    
                    console.debug(' navigating to main view');
                    
                    afrykaAdminApp.navigate('/home',true);
                },
                error: function(model, response) {
                    this.toggleButtons();
                    console.debug(response);
                }
            });
            console.debug(user.toJSON());
        },
        loginError: function() {
            $('#ajax-loader').hide();
            this.toggleButtons();
            console.debug('login error function called');
        },
        problem:function(){
            if(this.buttonsActive){
            console.debug('having problems');//problemview on body
            afrykaAdminApp.navigate('/problem',true);
            }
        },
        toggleButtons: function(){
            $('button').toggleClass('disabled',this.buttonsActive);
            this.buttonsActive=!this.buttonsActive;
        },
        multiselectInit: function() {
            $('.multiselect').multiselect({
                buttonClass: 'btn',
                buttonWidth: 'auto',
                buttonContainer: '<div class="btn-group" />',
                maxHeight: false,
                buttonText: function(options) {
                    if (options.length == 0) {
                        return 'None selected <b class="caret"></b>';
                    }
                    else if (options.length > 3) {
                        return options.length + ' selected  <b class="caret"></b>';
                    }
                    else {
                        var selected = '';
                        options.each(function() {
                            selected += $(this).text() + ', ';
                        });
                        return selected.substr(0, selected.length - 2) + ' <b class="caret"></b>';
                    }
                }
            });
        }
    });
    var ProblemView = Backbone.View.extend({
        el: 'body',
        //id:"problem-content",
        //className:"page-region-content ",
        events: {
             
        },
        initialize: function() {
            this.template = _.template($('#item-problem').html());
            //this.rowTemplate= _.template($('#item-cats-row').html());
        },
        render: function() {
            var el = this.$el;
            //   el.empty();
            el.append(this.template());
            return this;
        }
    });
    
    var UserView = Backbone.View.extend({
        //el: 'body',
        id:"user-content",
        className:"page-region-content ",
        events: {
             
        },
        initialize: function() {
            this.template = _.template($('#item-user').html());
            //this.rowTemplate= _.template($('#item-cats-row').html());
        },
        render: function() {
            var el = this.$el;
            //   el.empty();
            el.append(this.template());
            return this;
        }
    });
    
    var MainView = Backbone.View.extend({
        el: 'body',
        events: {
            "click #m-home":"navHome",
            "click #m-products":"navProducts",
            "click #m-categories":"navCategories",
            "click #m-other":"navOther",
            "click #m-statii":"navStatii",
            'click #logout-btn':'adminLogout'
        },
        initialize: function() {
           console.debug(this.model.toJSON());
            this.model.bind('all', this.refresh,this);
            this.template=_.template($('#item-main').html());
            this.loaderTemplate=_.template($('#item-loader').html());
        },
        render: function() {
            var el = this.$el;
            el.append(this.template(this.model.toJSON()));
            $('#avatar img').attr('src',function(){
                //console.debug(admin.toJSON().email);
                //maybe check to see if email exists
                return get_gravatar(admin.toJSON().email,80);
            });
            el.append(this.loaderTemplate());
            return this;
        },
        refresh:function(){
            afrykaAdminApp.navigate('/',true);
        },
        navHome:function(){
            afrykaAdminApp.navigate('/home',true);
        },
        navProducts:function(){
            afrykaAdminApp.navigate('/products',true);
        },
        navProduct:function(id){//maybe not necessary??
            afrykaAdminApp.navigate('/product/'+id,true);
        },
        navProductNew:function(id){//maybe not necessary??
            afrykaAdminApp.navigate('/new/product' ,true);
        },
        navCategories:function(){
            afrykaAdminApp.navigate('/categories',true);
        },
        navOther:function(){
            afrykaAdminApp.navigate('/other',true);
        },
        navStatii:function(){
            afrykaAdminApp.navigate('/statii',true);
        },
        navUser:function(){//maybe not necessary
            //get username
            afrykaAdminApp.navigate('/user/'+username,true);//maybe include user id
        },
        goHome: function(mv){//mainvew instance
            console.debug('going home, showing homeview');
            if(!mv.homeView){
                
            console.debug('gohome: homeview doesnt exist');
            mv.homeView = new HomeView();
                    mv.homeView.parent = mv;
            }else{
                console.debug('gohome: homeview exists');
                mv.homeView.delegateEvents();
               // if(this.sideBarView){
                 //   this.sideBarView.delegateEvents();
                //}       
            }
            // afrykaAdminApp.navigate('/home',true);
            afrykaAdminApp.prm.showView(mv.homeView);
            afrykaAdminApp.activeNav('#m-home');
            $('#ajax-loader').hide();
        },
        goCategories: function(mv){
            console.debug('going cats,fetching , showing catsview');
            if(!cats) 
                cats = new Cats();
            cats.fetch({
                success:function(){
                    console.debug('mainview,goCategories:cats have been fetched');
                    mv.catsView = new CatsView({collection:cats});
                    mv.catsView.parent = mv;
                    console.debug(mv);
                    afrykaAdminApp.prm.showView(mv.catsView);
                    afrykaAdminApp.activeNav('#m-categories');
                    $('#ajax-loader').hide();
                },
                error:function(){
                    //do something
                    //show alert
                    console.debug('mainview,goCategories:cats have not been fetched');
                }
            });
           // afrykaAdminApp.navigate('/home',true);  
        },
        goStatii: function(mv){
            console.debug('going statii, showing statiiview');
            if(!statii) 
                statii = new Statii();
            statii.fetch({
                success:function(){
                    console.debug('mainview,goStatii:statii have been fetched');
                    mv.statiiView = new StatiiView({collection:statii});
                    mv.statiiView.parent = mv;
                    afrykaAdminApp.prm.showView(mv.statiiView);
                    afrykaAdminApp.activeNav('#m-statii');
                    $('#ajax-loader').hide();
                },
                error:function(){
                    //do something
                    //show alert
                    console.debug('mainview,goStatii:statii have not been fetched');
                }
            });
            
           // afrykaAdminApp.navigate('/home',true);
          // afrykaAdminApp.prm.showView(this.statiiView);
        },
        goProducts: function(mv){
            console.debug('going productlist, showing productsview');
            if(!products) 
                products = new Products();
                if(!cats)
                    cats = new Cats();
                    console.debug('cats async before');
                    cats.fetch({async:false});
                    console.debug('cats async after');
                if(!statii)
                    statii = new Statii();
                    statii.fetch({async:false});
            products.fetch({
                success:function(){
                    console.debug('mainview,goProducts:products have been fetched');
                    mv.productsView = new ProductsView({collection:products,statii:statii,cats:cats});
                    mv.productsView.parent = mv;
                    afrykaAdminApp.prm.showView(mv.productsView);
                    afrykaAdminApp.activeNav('#m-products');
                    $('#ajax-loader').hide();
                },
                error:function(){
                    //do something
                    //show alert
                    console.debug('mainview,goProducts:products have not been fetched');
                }
            });
            
           // afrykaAdminApp.navigate('/home',true);
          // afrykaAdminApp.prm.showView(this.productsView);
        },
        goProduct: function(mv,id) {
            console.debug('going product, showing productview');
        
            // afrykaAdminApp.navigate('/home',true);
            if (!products){
                products = new Products();
                 if(!cats)
                    cats = new Cats();
                    console.debug('cats async before');
                    cats.fetch({async:false});
                    console.debug('cats async after');
                if(!statii)
                    statii = new Statii();
                    statii.fetch({async:false});
                products.fetch({
                    success: function() {
                        console.debug('mainview,goProduct:products have been fetched');
                        curProd = products.get(id);//if product isnt there display error
                        //console.debug(curProd.toJSON());
                        mv.productView = new ProductView({
                            model: curProd,statii:statii,cats:cats
                        });
                        mv.productView.parent = mv;
                        afrykaAdminApp.prm.showView(mv.productView);
                        $('#ajax-loader').hide();
                    },
                    error: function(){
                        //do something
                        //show alert
                        console.debug('mainview,goProduct:products have not been fetched');
                    }
                });
            }
            else {
                curProd = products.get(id);//if product isnt there display error
                console.debug(curProd.toJSON());
                 if(!cats)//crying for optimisation
                    cats = new Cats();
                    console.debug('cats async before');
                    cats.fetch({async:false});
                    console.debug('cats async after');
                if(!statii)
                    statii = new Statii();
                    statii.fetch({async:false});
                mv.productView = new ProductView({
                    model: curProd,statii:statii,cats:cats
                });
                mv.productView.parent = mv;
                afrykaAdminApp.prm.showView(mv.productView);
                $('#ajax-loader').hide();
            }
        },
        goOther: function(mv){
            console.debug('going stats, showing statsview');
            console.debug(this);
            mv.otherView = new OtherView();
            mv.otherView.parent = mv;
           // afrykaAdminApp.navigate('/home',true);
           afrykaAdminApp.prm.showView(mv.otherView);
           afrykaAdminApp.activeNav('#m-other');
           $('#ajax-loader').hide();
        },
        goUser:function(mv){
            console.debug('going jokes, showing jokesview');
            mv.userView = new UserView({model:admin});
            mv.userView.parent = mv;
            // afrykaAdminApp.navigate('/home',true);
            afrykaAdminApp.prm.showView(mv.userView);
            $('#ajax-loader').hide();
        },
        goCatsEdit:function(mv,id){
            console.debug('gocatsedit:rendering dialogbox');
            console.debug(this);
            var model = cats.get(id);
            console.debug('id:'+id);
            console.debug(model);
            //mv.editCategoryModalView 
            var ecmv = new EditCategoryModalView({model:model});
            mv.editCategoryModalView = ecmv; 
            ecmv.parent = mv;
            afrykaAdminApp.mm.showView(ecmv);
           // var m = model.toJSON();
            
        },
        goStatiiEdit:function(mv,id){
            console.debug('gostatiiedit:rendering dialogbox');
            console.debug(this);
            var model = statii.get(id);
            console.debug('id:'+id);
            console.debug(model);
            //mv.editCategoryModalView 
            var esmv = new EditStatusModalView({model:model});
            mv.editStatusModalView = esmv; 
            esmv.parent = mv;
            afrykaAdminApp.mm.showView(esmv);
           // var m = model.toJSON();
            
        },
        goProductNew:function(mv){
            console.debug('goproductnew:rendering dialogbox');
            console.debug(this);
            if (!products) products = new Products();
            if (!cats) cats = new Cats();
            console.debug('cats async before');
            cats.fetch({
                async: false
            });
            console.debug('cats async after');
            if (!statii) statii = new Statii();
            statii.fetch({
                async: false
            });
            /*products.fetch({
                success:function(){
                    console.debug('mainview,goProducts:products have been fetched');
                    mv.productsView = new ProductsView({collection:products});
                    mv.productsView.parent = mv;
                    afrykaAdminApp.prm.showView(mv.productsView);
                    afrykaAdminApp.activeNav('#m-products');
                    $('#ajax-loader').hide();
                },
                error:function(){
                    //do something
                    //show alert
                    console.debug('mainview,goProducts:products have not been fetched');
                }
            });*/
            //var npmv = new NewProductModalView({collection:products});
            var npv = new NewProductView({collection:products,statii:statii,cats:cats});
            //mv.newProductModalView = npmv;
            mv.newProductView = npv; 
            npv.parent = mv;
            //afrykaAdminApp.mm.showView(npmv);
            afrykaAdminApp.prm.showView(npv);
           // var m = model.toJSON();
           $('#ajax-loader').hide();
            
        },
        goStatusNew:function(mv){
            console.debug('gostatusnew:rendering dialogbox');
            console.debug(this);
            if(!statii) 
                statii = new Statii();
            /*products.fetch({
                success:function(){
                    console.debug('mainview,goProducts:products have been fetched');
                    mv.productsView = new ProductsView({collection:products});
                    mv.productsView.parent = mv;
                    afrykaAdminApp.prm.showView(mv.productsView);
                    afrykaAdminApp.activeNav('#m-products');
                    $('#ajax-loader').hide();
                },
                error:function(){
                    //do something
                    //show alert
                    console.debug('mainview,goProducts:products have not been fetched');
                }
            });*/
            var nsmv = new NewStatusModalView({collection:statii});
            mv.newStatusModalView = nsmv; 
            nsmv.parent = mv;
            afrykaAdminApp.mm.showView(nsmv);
            $('#ajax-loader').hide();
        },
        goCatNew:function(mv){
            console.debug('gocatnew:rendering dialogbox');
            console.debug(this);
            if(!cats) 
                cats = new Cats();
            var ncmv = new NewCategoryModalView({collection:cats});
            mv.newCategoryModalView = ncmv; 
            ncmv.parent = mv;
            afrykaAdminApp.mm.showView(ncmv);
            $('#ajax-loader').hide();
           // var m = model.toJSON();
        },
        showAlert:function(mode){
            switch(mode){
                case 'success':
                    $('.alert-success').fadeIn().delay(3000).fadeOut();
                    break;    
                case 'error':
                    $('.alert-error').fadeIn().delay(3000).fadeOut();
                    break;
            }       
        },
        adminLogout:function(){
            console.debug(this);
            me=this;
            admin.logout({
                success:function(model){
                //console.debug(this);
                console.debug('succes'+model)
                me.refresh();
                },
                error:function(model,response){
                     console.debug('error'+model);
                      console.debug(response);
                }    
            });
        }
    });
    ////////////////////////////////////////////////////////
    var HomeView = Backbone.View.extend({
        /*el: '',*/
        id:"home-content",
        className:"page-region-content", 
        events: {
            'click #new-product-pane': 'goToNewProduct'
        },
        initialize: function() {
            this.template = _.template($('#item-home').html());
        },
        render: function() {
            var el = this.$el;
          //  $('.page-region-content').remove();
            //el.append(this.template());
            el.html(this.template());
         
            return this;
        },
        goToNewProduct:function(){//popup
            //navigate
            // afrykaAdminApp.navigate('/product/new',true);
            this.parent.navProductNew();
        }
    });
    var ProductsView = Backbone.View.extend({
        //el:'',
        //tagName:'ul',
        id:"products-content",
        className:"page-region-content",
        events:{
            "click tbody tr":"goProductPage",
            "click #products-add-btn":"goNewProduct",
            'keyup .search-query':'search' 
        },
        initialize:function(){
            this.collection.bind('all', this.render,this);
            this.template=_.template($('#item-products').html());
            this.rowTemplate= _.template($('#item-products-row').html());
            this.queryCats=[];
            this.queryStatii=[];
        },
        render: function(){
            var el = this.$el;
            console.debug('rendering productsview');
            var collection = this.collection;
            var rowTemplate = this.rowTemplate;
            el.html(this.template());
            this.initMultiselect();
            collection.each(function(product){
                el.find('tbody').append(rowTemplate(product.toJSON()));   
                });
            if(collection.length===0)
                el.find('tbody').html('No products have been found');
            return this;   
        },
        renderTable:function(){
            var el = this.$el; 
            console.debug('rendering table products');
            //$('.page-sidebar').empty();//can be remove on this.class
            var collection = this.collection;
            var rowTemplate = this.rowTemplate;
            //el.html(this.template());
            el.find('tbody').html('');
            collection.each(function(product){
                el.find('tbody').append(rowTemplate(product.toJSON()));       
                });
            return this;   
        },
        noResults:function(){
            this.$el.find('tbody').html('No results found');
        },
        goProductPage:function(ev){
            console.debug('going product page');
            console.debug($(ev.target).data('id'));
            console.debug(ev);
            console.debug(ev.target);
            console.debug($(ev.target).parent());
            console.debug(this.parent);
            this.parent.navProduct($(ev.target).parent().data('id'));
        },
        goNewProduct:function(){ 
            this.parent.navProductNew();
        },
        showProductEdit:function(ev){
            console.debug('showproductedit:tr clicked')
            console.debug($(ev.target).data('id'));
            console.debug(ev);
            console.debug(ev.target);
            console.debug($(ev.target).parent());
            console.debug(this.parent);
            this.parent.goProductsEdit(this.parent,$(ev.target).parent().data('id'));
        },
        search: function() {
            //maybe strip preceeding whitespaces
            queryCats = this.queryCats;
            queryStatii = this.queryStatii;
            var sq = $('.search-query').val().toLocaleLowerCase().trim();
            console.debug('searching for:' + sq + ':are we?');
            if (sq !== '') {
                var searchCollection = new Products();
                this.collection.each(function(product) { //changed from products//maybe this.collection so that we dont start all over from scratch
                    var p = product.toJSON();
                    if (p.title_en && p.title_en.toLocaleLowerCase().indexOf(sq) !== -1) {
                        searchCollection.add(product);
                    }
                    else if (p.title_pl && p.title_pl.toLocaleLowerCase().indexOf(sq) !== -1) {
                        searchCollection.add(product);
                    }
                    else if (p.description_en && p.description_en.toLocaleLowerCase().indexOf(sq) !== -1) {
                        searchCollection.add(product);
                    }
                    else if (p.description_pl && p.description_pl.toLocaleLowerCase().indexOf(sq) !== -1) {
                        searchCollection.add(product);
                    }
                });
                if (queryCats.length > 0 && queryStatii.length === 0) {
                    var secondSearchCollection = new Products(searchCollection.toJSON());
                    secondSearchCollection.each(function(product) { //maybe this.collection so that we dont start all over from scratch
                        var p = product.toJSON();
                        for (var i = 0; p.categories.length > i; i++) {
                            if (queryCats.indexOf(p.categories[i]) === -1) {
                                searchCollection.remove(product);
                                i = p.categories.length;
                            }
                        }
                    });
                }
                else if (queryCats.length === 0 && queryStatii.length > 0) {
                    var searchCollection = new Products();
                    this.collection.each(function(product) { //maybe this.collection so that we dont start all over from scratch
                        var p = product.toJSON();
                        for (var i = 0; p.status.length > i; i++) {
                            if (queryStatii.indexOf(p.status[i]) === -1) {
                                searchCollection.add(product);
                                i = p.status.length;
                            }
                        }
                    });
                }
                else if (queryCats.length > 0 && queryStatii.length > 0) {
                    //var searchCollection = new Products();
                    var secondSearchCollection = new Products(searchCollection.toJSON());
                    this.collection.each(function(product) { //maybe this.collection so that we dont start all over from scratch
                        var p = product.toJSON();
                        for (var i = 0; p.categories.length > i; i++) {
                            if (queryCats.indexOf(p.categories[i]) === -1) {
                                searchCollection.remove(product);
                                i = p.categories.length;
                            }
                        }
                    });
                    console.debug(searchCollection.toJSON());
                    var thirdSearchCollection = new Products(searchCollection.toJSON()); //clone to hold results of first filtering;
                    console.debug("2searchColl has " + secondSearchCollection.length + "elements");
                    thirdSearchCollection.each(function(product) { //maybe this.collection so that we dont start all over from scratch
                        var p = product.toJSON();
                        for (var i = 0; p.status.length > i; i++) {
                            if (queryStatii.indexOf(p.status[i]) === -1) {
                                searchCollection.remove(product);
                                i = p.status.length;
                            }
                        }
                    });
                }
                ///////////
                console.debug(searchCollection.toJSON());
                if (searchCollection.length !== 0) {
                    this.collection = searchCollection;
                    this.renderTable();
                }
                else {
                    this.noResults();
                }
            }
            else if (queryCats.length > 0 && queryStatii.length === 0) {
                var searchCollection = new Products();
                this.collection.each(function(product) { //maybe this.collection so that we dont start all over from scratch
                    var p = product.toJSON();
                    for (var i = 0; p.categories.length > i; i++) {
                        if (queryCats.indexOf(p.categories[i]) !== -1) {
                            searchCollection.add(product);
                            i = p.categories.length;
                        }
                    }
                });
                console.debug(searchCollection.toJSON());
                if (searchCollection.length !== 0) {
                    this.collection = searchCollection;
                    this.renderTable();
                }
                else {
                    this.noResults();
                }
            }
            else if (queryCats.length === 0 && queryStatii.length > 0) {
                var searchCollection = new Products();
                this.collection.each(function(product) { //maybe this.collection so that we dont start all over from scratch
                    var p = product.toJSON();
                    for (var i = 0; p.status.length > i; i++) {
                        if (queryStatii.indexOf(p.status[i]) === -1) {
                            searchCollection.add(product);
                            i = p.status.length;
                        }
                    }
                });
                console.debug(searchCollection.toJSON());
                if (searchCollection.length !== 0) {
                    this.collection = searchCollection;
                    this.renderTable();
                }
                else {
                    this.noResults();
                }
            }
            else if (queryCats.length > 0 && queryStatii.length > 0) {
                var searchCollection = new Products();
                this.collection.each(function(product) { //maybe this.collection so that we dont start all over from scratch
                    var p = product.toJSON();
                    for (var i = 0; p.categories.length > i; i++) {
                        if (queryCats.indexOf(p.categories[i]) !== -1) {
                            searchCollection.add(product);
                            i = p.categories.length;
                        }
                    }
                });
                console.debug(searchCollection.toJSON());
                var secondSearchCollection = new Products(
                console.debug(searchCollection.toJSON())); //clone to hold results of first filtering;
                console.debug("2searchColl has " + secondSearchCollection.length + "elements");
                secondSearchCollection.each(function(product) { //maybe this.collection so that we dont start all over from scratch
                    var p = product.toJSON();
                    for (var i = 0; p.status.length > i; i++) {
                        if (queryStatii.indexOf(p.status[i]) === -1) {
                            searchCollection.remove(product);
                            i = p.status.length;
                        }
                    }
                });
                console.debug(searchCollection.toJSON());
                if (searchCollection.length !== 0) {
                    this.collection = searchCollection;
                    this.renderTable();
                }
                else {
                    this.noResults();
                }
            }
            else {
                this.collection = products;
                this.renderTable();
            }
            //            console.debug('searching for:'+sq+':are we?');
        },
        filterSelects:function(el,checked){
            //im using this.parent here because this is not the view but the button :P
            console.debug(this.parent);
            var val=el.val();
            if(checked){
                console.debug('checked is true');
                switch(el.attr('class')){
                    case 'statii':
                        console.debug('statii change');
                        this.parent.queryStatii.push(val);
                        break;
                    case 'cats':
                        console.debug('cats change');
                        this.parent.queryCats.push(val);
                        break;
                }
            }
            else{console.debug('checked is false');
                switch(el.attr('class')){
                    case 'statii':
                        console.debug('statii change');
                        this.parent.queryStatii=_.without(this.parent.queryStatii,val);
                        break;
                    case 'cats':
                        console.debug('statii change');
                        this.parent.queryCats=_.without(this.parent.queryCats,val);
                        break;
                }
            }
            console.debug('cats'+this.parent.queryCats);
            console.debug('statii'+this.parent.queryStatii);
            //do something like in search
            this.parent.search();//last line here
        },
        initMultiselect: function() {
            var c=this.$el.find('#products-cats-select');
            var s=this.$el.find('#products-statii-select');
            var me=this;
            this.options.cats.each(function(cat){
                var ca=cat.toJSON(); 
                c.append('<option class="cats" value="'+ca.category_id+'">'+ca.title_en+'</option>');
            });
            this.options.statii.each(function(status){
                var st =status.toJSON();
                s.append('<option class="statii" value="'+st.status_id+'">'+st.name+'</option>');
            });
            this.$el.find('.multiselect').multiselect({
                buttonClass: 'btn',
                buttonWidth: '100%',
                buttonContainer: '<div class="btn-group multiselect-btn" />',
                maxHeight: false,
                onChange:me.filterSelects,
                parent:me,
                buttonText: function(options) {
                    if (options.length === 0) {
                        return 'None selected <b class="caret"></b>';
                    }
                    else if (options.length > 3) {
                        return options.length + ' selected  <b class="caret"></b>';
                    }
                    else {
                        var selected = '';
                        options.each(function() {
                            selected += $(this).text() + ', ';
                        });
                        return selected.substr(0, selected.length - 2) + ' <b class="caret"></b>';
                    }
                }
            });
             if(this.options.cats.length===0) 
                c.next().find('ul').append('<i>no categories set</i>');
            
            if(this.options.statii.length===0) 
                s.next().find('ul').append('<i>no status set</i>');
               //console.debug(s.next().find('ul'));
        }
    });
    var ProductView = Backbone.View.extend({// pass in type in the options 
        id:"product-content",
        className:"page-region-content",
        events:{
            'click #product-edit-btn-upload':'filePick',
            'change #product-pic-upload':'handleFileSelect',
            'click #product-edit-btn-save':'save',
            'click #product-edit-btn-close':'goBack',
            'click #product-edit-btn-delete':'deleteProduct',
            'click #select-add-status':'goStatusNew',
            'click #select-add-category':'goCatNew'
        },
        modified:false,
        fieldName:'picture',
        fName:'',
        fType:'', 
        base64Content:'',
        
        initialize:function(){
            this.template=_.template($('#item-product').html());
            var p= this.model.toJSON();
            this.selectedCats=[];
            this.selectedStatii=[];
            //populate arrays with initial data from model
            for(i=0;i<p.categories.length;i++){
                this.selectedCats.push(p.categories[i]);
            }
            for(i=0;i<p.status.length;i++){
                this.selectedStatii.push(p.status[i]);
            }
        }, 
        render:function(){
            var el = this.$el;
            console.debug('rendering productsview');
            el.html(this.template(this.model.toJSON()));
            this.initMultiselect();
            return this;    
        },
        save: function() {
            var updated = {};
            var p =this.model.toJSON();
            var tit_pl = $('#product-edit-title_pl').val();
            var tit_en = $('#product-edit-title_en').val();
            var link = $('#product-edit-link').val();
            var price = $('#product-edit-price').val();
            var des_en = $('#product-edit-description_en').val();
            var des_pl = $('#product-edit-description_pl').val();
            var dpl=$('#product-edit-description_pl').data('oldcontent');
            var den=$('#product-edit-description_en').data('oldcontent');;
            var base64Content=this.base64Content;
            var fType=this.fType;
            var fName=this.fName.replace(/\W/g, '');
            var fieldName=this.fieldName;
            console.debug(this);
           // console.debug('fType:'+this.fType);
            //console.debug('fName:'+this.fName);
            //console.debug('base64Content:'+this.base64Content);
            //console.debug('fieldName:'+this.fieldName)
            if(!arraysEqual(this.selectedCats,p.categories)){
                updated.categories = this.selectedCats;
                this.modified = true;
            }
            if(!arraysEqual(this.selectedStatii,p.status)){
                updated.status = this.selectedStatii;
                this.modified = true;
            }
            if (tit_pl != '') {
                updated.title_pl = tit_pl;
                this.modified = true;
            }
            if (tit_en != '') {
                updated.title_en = tit_en;
                this.modified = true;
            }
            if (link != '') {
                updated.link = link;
                this.modified = true;
            }
            if (price != '') {
                updated.price = price;
                this.modified = true;
            }
            if (des_en != den) {
                updated.description_en = des_en;
                this.modified = true;
            }
            if (des_pl != dpl) {
                updated.description_pl = des_pl;
                this.modified = true;
            }
            if (base64Content != '' && fType != '' && fName != '') {
                //alert('picture changed');
                this.model.setBinaryFile(fieldName, fName, fType, base64Content);
                this.modified = true;
            }
            else{//workaround because stackmob is overwriting my picture
               // updated.picture = this.model.toJSON().picture;
            }
            if (this.modified) {
                var me = this;
                $('#ajax-loader').show();
                console.debug(_.isEmpty(updated));
               // if (!_.isEmpty(updated)) {
                    console.debug(updated);
                    if (!this.base64Content) {
                        console.debug('image unchanged');
                        this.model.save(updated, {
                            remote_ignore: ['picture'],
                            success: function(model) {
                                $('#ajax-loader').hide();
                                mainView.showAlert('success');
                                me.parent.navProducts();
                            },
                            error: function(model, response) {
                                $('#ajax-loader').hide();
                                mainView.showAlert('error');
                                console.error(model);
                                console.error(response);
                            }
                        });
                    }
                    else{
                        this.model.save(updated, {
                        success: function(model) {
                            $('#ajax-loader').hide();
                            mainView.showAlert('success');
                            me.parent.navProducts();
                        },
                        error: function(model, response) {
                            $('#ajax-loader').hide();
                            mainView.showAlert('error');
                            console.error(model);
                            console.error(response);
                        }
                    });
                    }
                    
                /*}
                else {
                    console.debug('only image changed');
                    this.model.save({
                        success: function(model) {
                            $('#ajax-loader').hide();
                            mainView.showAlert('success');
                            me.parent.navProducts();
                        },
                        error: function(model, response) {
                            $('#ajax-loader').hide();
                            mainView.showAlert('error');
                        }
                    });
                }*/
            }
            else {
                alert('You have not made any changes');
            }
            return this;
        },
        handleFileSelect: function(evt) {
            var files = evt.target.files; // FileList object
            me = this;
            // Loop through the FileList
            for (var i = 0, f; f = files[i]; i++) {
        
                var reader = new FileReader();
        
                // Closure to capture the file information
                reader.onload = (function(theFile) {
                    return function(e) {
        
                        /*
                                     e.target.result will return "data:image/jpeg;base64,[base64 encoded data]...".
                                     We only want the "[base64 encoded data] portion, so strip out the first part
                                   */
                        //var base64Content = e.target.result.substring(e.target.result.indexOf(',') + 1, e.target.result.length);
                        console.debug(e.target);
                        console.debug(jic.compress(e.target,50));
                        me.base64Content = e.target.result.substring(e.target.result.indexOf(',') + 1, e.target.result.length);
                        //var fileName = theFile.name;
                        me.fName = theFile.name;
                        //var fileType = theFile.type;
                        $('#product-edit-btn-upload').html(theFile.name).attr({
                            title: theFile.name + ': uploaded'
                        }).addClass('btn-success');
        
                        me.fType = theFile.type;
                        //todoInstance.setBinaryFile(fieldname, fileName, fileType, base64Content);
                        //todoInstance.save();
                        console.debug(e.target.result);
                        $('.product-modal-img').attr({
                            src: e.target.result
                        }).addClass('image-updated');
                    };
                })(f);
        
                // Read in the file as a data URL
                fileContent = reader.readAsDataURL(f);
                //console.debug(fileContent);
                //console.debug(reader.result);
            }
        },
        filePick: function() {
            // Check for the various File API support.
            if (window.File && window.FileReader && window.FileList && window.Blob) {
                // Great success! All the File APIs are supported.
                $('#product-pic-upload').click();
            }
            else {
                 alert('Uploading Files is not fully supported in this browser please try using a modern browser.');
            }
         },
        goBack:function(){
            //check for changes if changes made then prompt to save yes/no
            var pc=this.model.toJSON().categories;
            var ps=this.model.toJSON().status;
            var sc=this.selectedCats;
            var ss=this.selectedStatii;
            var tit_pl = $('#product-edit-title_pl').val();
            var tit_en = $('#product-edit-title_en').val();
            var link = $('#product-edit-link').val();
            var price = $('#product-edit-price').val();
            var des_en = $('#product-edit-description_en').val();
            var dpl=$('#product-edit-description_pl');
            var den=$('#product-edit-description_en');
            var des_pl = $('#product-edit-description_pl').val();
            var base64Content=this.base64Content;
            var fType=this.fType;
            var fName=this.fName;
            //console.debug(pl.val());
        if (tit_pl !== '' || tit_en !== ''||link !== ''||price !== ''|| (base64Content !== '' && fType !== '' && fName !== '')||des_en !== den.data('oldcontent')||des_pl !== dpl.data('oldcontent')||!arraysEqual(sc,pc)||!arraysEqual(ss,ps)) {
            var r = confirm('You have unsaved data are you sure you want to leave?');
            if (r === true) {
                this.parent.navProducts();
            }
            }
        else this.parent.navProducts();
        },
        deleteProduct: function() {
            var r = confirm('Are you sure you want to delete this product?');
            if (r === true) {
                var me=this;
                $('#ajax-loader').show();
                this.model.destroy({
                    success: function(model) {
                        console.debug(model.toJSON());
                        $('#ajax-loader').hide();
                        me.parent.showAlert('success');
                        me.parent.navProducts();
                    },
                    error: function(model, response) {
                        //console.debug(response);
                        $('#ajax-loader').hide();
                        //mainView.showAlert('error');
                        me.parent.navProducts();
                    }
                });
            }
        },
        filterSelects:function(el,checked){
            //im using this.parent here because this is not the view but the button :P
            // console.debug(this);
            console.debug(this.parent);
            var val=el.val();
            if(checked){
                console.debug('checked is true');
                switch(el.attr('class')){
                    case 'statii':
                        console.debug('statii change');
                        this.parent.selectedStatii.push(val);
                        break;
                    case 'cats':
                        console.debug('cats change');
                        this.parent.selectedCats.push(val);
                        break;
                }
            }
            else{console.debug('checked is false');
                switch(el.attr('class')){
                    
                    case 'statii':
                        console.debug('statii change');
                        this.parent.selectedStatii=_.without(this.parent.selectedStatii,val);
                        break;
                    case 'cats':
                        console.debug('statii change');
//                        qc=_.without(qc,val);
                        this.parent.selectedCats=_.without(this.parent.selectedCats,val);
                        break;
                }
            }
        
            //console.debug(el);
            //window.pusy=el;
            //console.debug(checked);
            console.debug('cats'+this.parent.selectedCats);
            console.debug('statii'+this.parent.selectedStatii);
            //do something like in search
        },
        initMultiselect:function(){
            var c=this.$el.find('#product-edit-cats-select');
            var s=this.$el.find('#product-edit-statii-select');
            var me=this;
            var pc=this.model.toJSON().categories;
            var ps=this.model.toJSON().status;
            this.options.cats.each(function(cat){
                var ca=cat.toJSON(); 
                var selected=pc.indexOf(ca.category_id)!==-1?"selected":"";
                c.prepend('<option class="cats" value="'+ca.category_id+'"'+selected+'>'+ca.title_en+'</option>');
            });
            this.options.statii.each(function(status){
                var st =status.toJSON();
                var selected=ps.indexOf(st.status_id)!==-1?"selected":"";
                s.prepend('<option class="statii" value="'+st.status_id+'"'+selected+'>'+st.name+'</option>');
            });
            this.$el.find('.multiselect').multiselect({
                buttonClass: 'btn btn-small',
                buttonWidth: '100%',
                buttonContainer: '<div class="btn-group multiselect-btn product-select-button" />',
                maxHeight: false,
                onChange:me.filterSelects,
                parent:me,
                buttonText: function(options) {
                    if (options.length === 0) {
                        return 'None selected <b class="caret"></b>';
                    }
                    else if (options.length > 3) {
                        return options.length + ' selected  <b class="caret"></b>';
                    }
                    else {
                        var selected = '';
                        options.each(function() {
                            selected += $(this).text() + ', ';
                        });
                        return selected.substr(0, selected.length - 2) + ' <b class="caret"></b>';
                    }
                }
            });
            // if(this.options.cats.length===0) 
                c.next().find('ul').append('<a class="btn select-menu-btn" id="select-add-category">add new category</a>');
            
            //if(this.options.statii.length===0) 
                s.next().find('ul').append('<a class="btn select-menu-btn" id="select-add-status">add new status</a>');
               //console.debug(s.next().find('ul'));
        },
        goStatusNew: function(){
            this.parent.goStatusNew(this);
        },
        goCatNew: function(){
            this.parent.goCatNew(this);
        }
        
    });
    var CatsView = Backbone.View.extend({
        id:"categories-content",
        className:"page-region-content container-fluid",
        events:{
            "click tbody tr":"showCatEdit",
            "click #cats-add-btn":"goNewCat",
            'keyup .search-query':'search' 
        },
        initialize:function(){
            //this.model = this.options.model;
            this.collection.bind('all', this.render,this);
            this.template = _.template($('#item-cats').html());
            this.rowTemplate= _.template($('#item-cats-row').html());
        },
        render:function(){
           var el = this.$el;
            var collection = this.collection;
            var rowTemplate = this.rowTemplate;
          //  $('.page-region-content').remove();
            el.html(this.template());
            collection.each(function(cat){
                el.find('tbody').append(rowTemplate(cat.toJSON()));       
                });
                if(collection.length===0)
                el.find('tbody').html('No categories have been found');
            return this;
        },
        showCatEdit:function(ev){
            console.debug('showcatedit:tr clicked')
            //if (!this.parent.sideBarView){
              //  this.parent.sideBarView=new SideBarView();
                //this.parent.sideBarView.parent = this.parent;
            //}
            console.debug($(ev.target).data('id'));
           // console.debug(ev);
            //console.debug(ev.target);
            console.debug($(ev.target).parent());
            console.debug(this.parent);
            //this.parent.sideBarView.goCatsEdit($(ev.target).parent().data('id'));
            this.parent.goCatsEdit(this.parent,$(ev.target).parent().data('id'));
            
        },
        goNewCat:function(){
            var mv= this.parent;
            mv.goCatNew(this);
        },
        refresh:function(){
            //refresh the catview somehow
            //remove
        },
        renderTable:function(){
            var el = this.$el; 
            console.debug('rendering table cats');
            //$('.page-sidebar').empty();//can be remove on this.class
            var collection = this.collection;
            var rowTemplate = this.rowTemplate;
            //el.html(this.template());
            el.find('tbody').html('');
            collection.each(function(cat){
                el.find('tbody').append(rowTemplate(cat.toJSON()));       
                });
            return this;   
        },
        noResults:function(){
            this.$el.find('tbody').html('No results found');
        },
        search:function(){
            //maybe strip preceeding whitespaces
            
            var sq=$('.search-query').val().toLocaleLowerCase().trim();
            console.debug('searching for:'+sq+':are we?');
            if(sq!==''){ 
               var searchCollection = new Cats();
                cats.each(function(cat){
                  var  c=cat.toJSON();
                    if (c.title_en &&c.title_en.toLocaleLowerCase().indexOf(sq)!==-1) {
                        searchCollection.add(cat);
                    } 
                    else if (c.title_pl&&c.title_pl.toLocaleLowerCase().indexOf(sq)!==-1) {
                        searchCollection.add(cat);
                    }
                });
                console.debug(searchCollection.toJSON());
                if(searchCollection.length!==0){
                   this.collection=searchCollection; 
                   this.renderTable();
                }
                else{
                    this.noResults();
                }
            }
            else{
                this.collection=cats;
                this.renderTable();
            }
//            console.debug('searching for:'+sq+':are we?');
        }
    });//dialog box no need for view object
    var OtherView = Backbone.View.extend({
        id:"other-content",
        className:"page-region-content",
        events:{},
        initialize:function(){
            this.template = _.template($('#item-other').html());   
        },
        render:function(){
            var el=this.$el;
             //  $('.page-region-content').remove();
            el.append(this.template());
            return this;
        }
    });
    var StatiiView = Backbone.View.extend({
        id:"statii-content",
        className:"page-region-content ",
        events: {
            "click tbody tr":"showStatEdit",
            "click #statii-add-btn":"goNewStatus",
            'keyup .search-query':'search' 
        },
        initialize: function() {
            this.collection.bind('all', this.render,this);
            this.template = _.template($('#item-statii').html());
            this.rowTemplate = _.template($('#item-statii-row').html());
        },
        render: function() {
            var el=this.$el;
            var collection = this.collection;
            rowTemplate = this.rowTemplate;
            el.html(this.template());
            collection.each(function(status){
                el.find('tbody').append(rowTemplate(status.toJSON()));       
                });
            if(collection.length===0)
                el.find('tbody').html('No statii have been found');
            return this;
        },
        showStatEdit:function(ev){
            console.debug('showStatedit:tr clicked')
            //if (!this.parent.sideBarView){
              //  this.parent.sideBarView=new SideBarView();
                //this.parent.sideBarView.parent = this.parent;
            //}
            console.debug($(ev.target).data('id'));
           // console.debug(ev);
            //console.debug(ev.target);
            console.debug($(ev.target).parent());
            console.debug(this.parent);
            //this.parent.sideBarView.goCatsEdit($(ev.target).parent().data('id'));
            this.parent.goStatiiEdit(this.parent,$(ev.target).parent().data('id'));
            
        },
        goNewStatus:function(){
            var mv= this.parent;
            mv.goStatusNew(mv);
        },
        renderTable:function(){
            var el = this.$el; 
            console.debug('rendering table statii');
            //$('.page-sidebar').empty();//can be remove on this.class
            var collection = this.collection;
            var rowTemplate = this.rowTemplate;
            //el.html(this.template());
            el.find('tbody').html('');
            collection.each(function(status){
                el.find('tbody').append(rowTemplate(status.toJSON()));       
                });
            return this;   
        },
        noResults:function(){
            this.$el.find('tbody').html('No results found');
        },
        search:function(){
            //maybe strip preceeding whitespaces
            
            var sq=$('.search-query').val().toLocaleLowerCase().trim();
            console.debug('searching for:'+sq+':are we?');
            if(sq!==''){ 
               var searchCollection = new Statii();
                statii.each(function(status){
                  var  s=status.toJSON();
                    if (s.title &&s.title.toLocaleLowerCase().indexOf(sq)!==-1) {
                        searchCollection.add(status);
                    } 
                    else if (s.description&&s.description.toLocaleLowerCase().indexOf(sq)!==-1) {
                        searchCollection.add(status);
                    }
                });
                console.debug(searchCollection.toJSON());
                if(searchCollection.length!==0){
                   this.collection=searchCollection; 
                   this.renderTable();
                }
                else{
                    this.noResults();
                }
            }
            else{
                this.collection=statii;
                this.renderTable();
            }
//            console.debug('searching for:'+sq+':are we?');
        }
    });
    var NewProductView = Backbone.View.extend({
        id:"product-new-content",
        className:"page-region-content",
        events: {
            'click #product-new-btn-upload':'filePick',
            'change #product-new-pic-upload':'handleFileSelect',
            'click #product-new-btn-save':'save',
            'click #product-new-btn-close':'goBack',
            'click #select-add-status':'goStatusNew',
            'click #select-add-category':'goCatNew'
            //'click .modal-close':'hide',
             
        },
        modified:false,
        fieldName:'picture',
        fName:'',
        fType:'',
        base64Content:'',
        initialize: function() {
            this.template = _.template($('#item-product-new').html());
            this.selectedCats=[];
            this.selectedStatii=[];
        },
        render: function() {
            this.$el.html(this.template());
            this.initMultiselect();
            return this;
        },
        save: function() {
            var newProduct = new Product();
            var collection=this.collection;
            var tit_pl = $('#product-new-title_pl').val();
            var tit_en = $('#product-new-title_en').val();
            var link = $('#product-new-link').val();
            var price = $('#product-new-price').val();
            var des_en = $('#product-new-description_en').val();
            var des_pl = $('#product-new-description_pl').val();
            var dpl = $('#product-new-description_pl').val();
            var den = $('#product-new-description_en').val();;
            var base64Content = this.base64Content;
            var fType = this.fType;
            var fName = this.fName.replace(/\W/g, '');
            var fieldName = this.fieldName;
            
            if(this.selectedCats.length>0){
                var sc=this.selectedCats;
                newProduct.set({categories:sc});
                this.modified = true;
            }
            if(this.selectedStatii.length>0){
                var ss=this.selectedStatii;
                newProduct.set({status:ss});
                this.modified = true;
            }
            if (tit_pl != '') {
                newProduct.set({title_pl:tit_pl});
                this.modified = true;
            }
            if (tit_en != '') {
                newProduct.set({title_en:tit_en});
                this.modified = true;
            }
            if (link != '') {
                newProduct.set({link:link});
                this.modified = true;
            }
            if (price != '') {
                newProduct.set({price:price});
                this.modified = true;
            }
            if (des_en != '') {
                newProduct.set({description_en:des_en});
                this.modified = true;
            }
            if (des_pl != '') {
                newProduct.set({description_pl:des_pl});
                this.modified = true;
            }
            if (base64Content != '' && fType != '' && fName != '') {
                //alert('picture changed');
                newProduct.setBinaryFile(fieldName, fName, fType, base64Content);
                this.modified = true;
            }
            else{//workaround because stackmob is overwriting my picture
                //updated.picture = this.model.toJSON().picture;
            }
            if (this.modified) {
                me = this;
                $('#ajax-loader').show();
                //if (updated !== {}) {
                console.debug(newProduct.toJSON());
                newProduct.create({
                    success: function(model) {
                        collection.add(model);
                        console.debug(model);
                        $('#ajax-loader').hide();
                        mainView.showAlert('success');
                       // $('.modal').modal('hide');
                        me.parent.navProducts();
                    },
                    error: function(model, response) {
                        $('#ajax-loader').hide();
                        mainView.showAlert('error');
                        console.error(model);
                        console.error(response);
                    }
                });
            }
            else {
                alert('You havent made any changes');
            }
            return this;
        },
        handleFileSelect: function(evt) {
            var files = evt.target.files; // FileList object
            me=this;
            // Loop through the FileList
            for (var i = 0, f; f = files[i]; i++) {
        
                var reader = new FileReader();
        
                // Closure to capture the file information
                reader.onload = (function(theFile) {
                    return function(e) {
                        /*
                             e.target.result will return "data:image/jpeg;base64,[base64 encoded data]...".
                             We only want the "[base64 encoded data] portion, so strip out the first part
                           */
                        //var base64Content = e.target.result.substring(e.target.result.indexOf(',') + 1, e.target.result.length);
                        console.debug(e.target);
                        console.debug(e.target.result);
                        console.debug(jic.compress(e.target,50));
                         me.base64Content = e.target.result.substring(e.target.result.indexOf(',') + 1, e.target.result.length);
                        //var fileName = theFile.name;
                        me.fName = theFile.name;
                        //var fileType = theFile.type;
                        $('#product-new-btn-upload').html(theFile.name).attr({title:theFile.name+': uploaded'}).addClass('btn-success');
                       
                        
                        me.fType = theFile.type;        
                        //todoInstance.setBinaryFile(fieldname, fileName, fileType, base64Content);
                        //todoInstance.save();
                        
                         
                        $('.product-modal-img').attr({src: e.target.result}).addClass('image-updated');
                    };
                })(f);
        
                // Read in the file as a data URL
                 fileContent = reader.readAsDataURL(f);
                //console.debug(fileContent);
                //console.debug(reader.result);
                 
            }
        },
        filePick: function() {
            // Check for the various File API support.
            if (window.File && window.FileReader && window.FileList && window.Blob) {
                // Great success! All the File APIs are supported.
                $('#product-new-pic-upload').click();
            }
            else {
                 alert('Uploading Files is not fully supported in this browser please try using a modern browser.');
            }
         },
        goBack:function(){
            //check for changes if changes made then prompt to save yes/no
            var sc=this.selectedCats;
            var ss=this.selectedStatii;
            var tit_pl = $('#product-new-title_pl').val();
            var tit_en = $('#product-new-title_en').val();
            var link = $('#product-new-link').val();
            var price = $('#product-new-price').val();
            var des_en = $('#product-new-description_en').val();
            var dpl=$('#product-new-description_pl');
            var den=$('#product-new-description_en');
            var des_pl = $('#product-new-description_pl').val();
            var base64Content=this.base64Content;
            var fType=this.fType;
            var fName=this.fName;
            //console.debug(pl.val());
            if (tit_pl !== '' || tit_en !== ''||link !== ''||price !== ''|| (base64Content !== '' && fType !== '' && fName !== '')||des_en !== ''||des_pl !== ''||ss.length>0||sc.length>0) {
                var r = confirm('You have unsaved data are you sure you want to leave?');
                if (r == true) {
                    //$('.modal').modal('hide');//go back
                    this.parent.navProducts();
                }
            }
            else this.parent.navProducts();
            //$('.modal').modal('hide');//go back
            },
        filterSelects:function(el,checked){
            //im using this.parent here because this is not the view but the button :P
            // console.debug(this);
            console.debug(this.parent);
            var val=el.val();
            if(checked){
                console.debug('checked is true');
                switch(el.attr('class')){
                    case 'statii':
                        console.debug('statii change');
                        this.parent.selectedStatii.push(val);
                        break;
                    case 'cats':
                        console.debug('cats change');
                        this.parent.selectedCats.push(val);
                        break;
                }
            }
            else{console.debug('checked is false');
                switch(el.attr('class')){
                    
                    case 'statii':
                        console.debug('statii change');
                        this.parent.selectedStatii=_.without(this.parent.selectedStatii,val);
                        break;
                    case 'cats':
                        console.debug('statii change');
    //                        qc=_.without(qc,val);
                        this.parent.selectedCats=_.without(this.parent.selectedCats,val);
                        break;
                }
            }
        
            //console.debug(el);
            //window.pusy=el;
            //console.debug(checked);
            console.debug('cats'+this.parent.selectedCats);
            console.debug('statii'+this.parent.selectedStatii);
            //do something like in search
        },
        initMultiselect:function(){
            var c=this.$el.find('#product-new-cats-select');
            var s=this.$el.find('#product-new-statii-select');
            var me=this;
            this.options.cats.each(function(cat){
                var ca=cat.toJSON(); 
                c.prepend('<option class="cats" value="'+ca.category_id+'">'+ca.title_en+'</option>');
            });
            this.options.statii.each(function(status){
                var st =status.toJSON();
                s.prepend('<option class="statii" value="'+st.status_id+'">'+st.name+'</option>');
            });
            this.$el.find('.multiselect').multiselect({
                buttonClass: 'btn btn-small',
                buttonWidth: '100%',
                buttonContainer: '<div class="btn-group multiselect-btn product-select-button" />',
                maxHeight: false,
                onChange:me.filterSelects,
                parent:me,
                buttonText: function(options) {
                    if (options.length === 0) {
                        return 'None selected <b class="caret"></b>';
                    }
                    else if (options.length > 3) {
                        return options.length + ' selected  <b class="caret"></b>';
                    }
                    else {
                        var selected = '';
                        options.each(function() {
                            selected += $(this).text() + ', ';
                        });
                        return selected.substr(0, selected.length - 2) + ' <b class="caret"></b>';
                    }
                }
            });
            // if(this.options.cats.length===0) 
                c.next().find('ul').append('<a class="btn select-menu-btn" id="select-add-category">add new category</a>');
            
            //if(this.options.statii.length===0) 
                s.next().find('ul').append('<a class="btn select-menu-btn" id="select-add-status">add new status</a>');
               //console.debug(s.next().find('ul'));
        },
        goStatusNew: function(){
            this.parent.goStatusNew(this);
        },
        goCatNew: function(){
            this.parent.goCatNew(this);
        } 
    });
    var EditCategoryModalView = Backbone.View.extend({
        events: {
            'click .modal-close':'hide',
            'hidden .modal':'justClose',
            'click #cats-edit-btn-save':'save',
            'click #cats-edit-btn-delete':'deleteCat'
        },
        modified:false,
        initialize: function() {
            this.template = _.template($('#item-cats-edit').html());
           // this.loaderTemplate=_.template($('#item-loader').html());   
        },
        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            $(document.body).append(this.$el);
            $('.modal').modal({
                keyboard:true,
                backdrop: 'static',
                show:true
                });
            return this;
        },
        save: function() {
            var updated = {};
            pl = $('#cats-edit-title_pl').val();
            en = $('#cats-edit-title_en').val();
            if (pl != '') {
                updated.title_pl = pl;
                this.modified = true;
            }
            if (en != '') {
                updated.title_en = en;
                this.modified = true;
            }
            if (this.modified) {
                me = this;
                $('#ajax-loader').show();
                this.model.save(updated, {
                    success: function(model) {
                        $('#ajax-loader').hide();
                        mainView.showAlert('success');
                        $('.modal').modal('hide');
                    },
                    error: function(model, response) {
                        mainView.showAlert('error');
                        $('.modal').modal('hide');
                    }
                });
            }
            else{
                alert('You havent made any changes');
            }
            return this;
        },
        hide:function(){
            //check for changes if changes made then prompt to save yes/no
            pl=$('#cats-edit-title_pl').val();
            en=$('#cats-edit-title_en').val();
            console.debug(pl);
        if (pl !== '' || en !== '') {
            var r = confirm('You have unsaved data are you sure you want to leave?');
            if (r == true) {
                $('.modal').modal('hide');
            }
            }
        else $('.modal').modal('hide');
        },
        justClose: function() {
        //    this.remove();
            afrykaAdminApp.mm.closeView(this);
        },
        deleteCat: function() {
            var r = confirm('Are you sure you want to delete this category?');
            if (r == true) {
                $('#ajax-loader').show();
                this.model.destroy({
                    success: function(model) {
                        console.debug(model.toJSON());
                        $('#ajax-loader').hide();
                        mainView.showAlert('success');
                        $('.modal').modal('hide');
                    },
                    error: function(model, response) {
                        //strange things going on here
                       // console.debug(model);
                        //console.debug(response);
                        $('#ajax-loader').hide();
                        $('.modal').modal('hide');
                        //mainView.showAlert('error');
                    }
                });
            }
        }
           
    });
    var NewCategoryModalView = Backbone.View.extend({
        events: {
             'click #cats-new-btn-save':'save',
            //'click #products-edit-btn-close':'goBack',
            'click .modal-close':'hide',
            'hidden .modal':'justClose',
        },
        modified:false,
        initialize: function() {
            this.template = _.template($('#item-cats-new').html());
        },
        render: function() {
            this.$el.html(this.template());
            $(document.body).append(this.$el);
            $('.modal').modal({
                keyboard:true,
                backdrop: 'static',
                show:true
                });
            return this;
        },
        save: function() {
            var newCat = new Cat();
            var collection=this.collection;
            pl = $('#cats-new-title_pl').val();
            en = $('#cats-new-title_en').val();
            if (pl != '') {
                newCat.set({title_pl: pl});
                this.modified = true;
            }
            if (en != '') {
                newCat.set({title_en:en});
                this.modified = true;
            }
            if (this.modified) {
                 
                me = this;
                $('#ajax-loader').show();
                newCat.create({
                    success: function(model) {
                        collection.add(model);
                        $('#ajax-loader').hide();
                        mainView.showAlert('success');
                        $('.modal').modal('hide');
                    },
                    error: function(model, response) {
                        mainView.showAlert('error');
                        $('.modal').modal('hide');
                    }
                });
            }
            else{
                alert('You havent made any changes');
            }
            return this;
        },
        hide:function(){
            //check for changes if changes made then prompt to save yes/no
            pl=$('#cats-new-title_pl').val();
            en=$('#cats-new-title_en').val();
            //console.debug(pl);
        if (pl !== '' || en !== '') {
            var r = confirm('You have unsaved data are you sure you want to leave?');
            if (r == true) {
                $('.modal').modal('hide');
            }
            }
        else $('.modal').modal('hide');
        },
        justClose: function() {
        //    this.remove();
            afrykaAdminApp.mm.closeView(this);
        }  
    });
    var EditStatusModalView = Backbone.View.extend({
        events: {
            'click .modal-close':'hide',
            'hidden .modal':'justClose',
            'click #statii-edit-btn-save':'save',
            'click #statii-edit-btn-delete':'deleteStatus'
        },
        modified:false,
        initialize: function() {
            this.template = _.template($('#item-statii-edit').html());
        },
        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            $(document.body).append(this.$el);
            $('.modal').modal({
                keyboard:true,
                backdrop: 'static',
                show:true
                });
            return this;
        },
        hide:function(){
            //check for changes if changes made then prompt to save yes/no
            nm = $('#statii-edit-name').val();
            des = $('#statii-edit-description').val();
            desEl = $('#statii-edit-description');
        if (nm !== '' || des !== desEl.data('oldcontent')) {
            var r = confirm('You have unsaved data are you sure you want to leave?');
            if (r == true) {
                $('.modal').modal('hide');
            }
            }
        else $('.modal').modal('hide');
        },
        justClose: function() {
        //    this.remove();
            afrykaAdminApp.mm.closeView(this);
        },
        save: function() {
            var updated = {};
            var nm = $('#statii-edit-name').val();
            var des = $('#statii-edit-description').val();
            var desEl=$('#statii-edit-description');
            if (nm != '') {
                updated.name = nm;
                this.modified = true;
            }
            if (des !== desEl.data('oldcontent')) {
                updated.description = des;
                this.modified = true;
            }
            if (this.modified) {
                //me = this;
                $('#ajax-loader').show();
                console.debug(updated)
                this.model.save(updated, {
                    success: function(model) {
                        $('#ajax-loader').hide();
                        mainView.showAlert('success');
                        $('.modal').modal('hide');
                    },
                    error: function(model, response) {
                        $('#ajax-loader').hide();
                        mainView.showAlert('error');
                        $('.modal').modal('hide');
                    }
                });
            }
            return this; 
        },
        deleteStat: function() {
            var r = confirm('Are you sure you want to delete this status?');
            if (r == true) {
                $('#ajax-loader').show();
                this.model.destroy({
                    success: function(model) {
                        console.debug(model.toJSON());
                        $('#ajax-loader').hide();
                        mainView.showAlert('success');
                        $('.modal').modal('hide');
                    },
                    error: function(model, response) {
                        //strange things going on here
                        //the error callback is being called even though the model is deleted
                        console.debug(model);
                        console.debug(response);
                        $('#ajax-loader').hide();
                        $('.modal').modal('hide');
                        //mainView.showAlert('error');
                    }
                });
            }
        }
           
    });
    var NewStatusModalView = Backbone.View.extend({
        events: {
            'click .modal-close':'hide',
            'hidden .modal':'justClose',
            'click #statii-new-btn-save':'save'
        },
        initialize: function() {
            this.template = _.template($('#item-statii-new').html());
        },
        render: function() {
            this.$el.html(this.template());
            $(document.body).append(this.$el);
            $('.modal').modal({
                keyboard:true,
                backdrop: 'static',
                show:true
                });
            return this;
        },
        hide:function(){
            //check for changes if changes made then prompt to save yes/no
            nm = $('#statii-new-name').val();
            des = $('#statii-new-description').val();
        if (nm !== '' || des !== '') {
            var r = confirm('You have unsaved data are you sure you want to leave?');
            if (r == true) {
                $('.modal').modal('hide');
            }
            }
        else $('.modal').modal('hide');
        },
        justClose: function() {
        //    this.remove();
            afrykaAdminApp.mm.closeView(this);
        },
        save: function() {
            var newStatus= new Status();
            var collection= this.collection;
            nm = $('#statii-new-name').val();
            des = $('#statii-new-description').val();
            if (nm !== '') {
                newStatus.set({name:nm});
                this.modified = true;
            }
            if (des !== '') {
                newStatus.set({description:des});
                this.modified = true;
            }
            if (this.modified) {
                //me = this;
                $('#ajax-loader').show();
                //console.debug(updated)
                newStatus.create({
                    success: function(model) {
                        collection.add(model);
                        $('#ajax-loader').hide();
                        mainView.showAlert('success');
                        $('.modal').modal('hide');
                    },
                    error: function(model, response) {
                        $('#ajax-loader').hide();
                        mainView.showAlert('error');
                        $('.modal').modal('hide');
                    }
                });
            }
            return this;
        }
           
    });
    ///////////////////////////////////////////////////////
    function PageRegionManager() {
        this.showView = function(view) {
            if(this.currentView && this.currentView!==view) {
                console.debug('prm: closing currentview');
                this.currentView.close();
            }
            this.currentView = view;
            //this.currentView.render();
            $(".view-container").html(this.currentView.render().el);
        }
    }
    function BodyRegionManager() { //for body top level views
        this.showView = function(view) {
            if (this.currentView !== view || $('body').html()==='') {
                if (this.currentView && this.currentView !== view) {
                    this.currentView.close();
                }
                else {
                    $('body').empty();
                    console.debug('brm: emptying body');
                }
                this.currentView = view;
                //this.currentView.render();
                //$("body").html(this.currentView.render().el);
                this.currentView.render();
            }
            else console.debug('cant close and open the same view');
        }
    }
    function ModalManager(){
        this.showView = function(view){
            view.render();
        }
        this.closeView = function(view){
            view.close();
        }
    }
     
    //////////////////////////////////////////////////////
    var AppRouter = Backbone.Router.extend({
        routes:{
            '':'login',
            'home':'main',
            'products':'toProducts',
            'product/:id':'toProduct',
            'new/product':'toProductNew',
            'categories':'toCats',
            'statii':'toStatii',
            'other':'toOther',
            'problem':'toProblem',
            'user/:id':'toUser'
        },
        initialize:function(){
            this.prm = new PageRegionManager();
            this.brm = new BodyRegionManager();
            this.mm  = new ModalManager();
            console.debug(this);
        },
        activeNav:function(newClass){
            $('.active').removeClass('active');
            $(newClass).addClass('active');
            console.debug('activated:'+newClass);
            console.debug($(newClass));
        },
        getUser:function(name){
            if(!admin){
            //console.debug('getUser:about to fetch user');
            var user = new StackMob.User({username:name});
            //console.debug('getUser:fetching user');
            user.fetch({
                success:function(){
                    admin = user;
                console.debug('user fetched');
                console.debug(user);
                },
                error:function(){
                    console.debug('user  fetch error');
                    window.localStorage.clear(); 
                }
            });
           // return user;
            }
            else {
                console.debug('admin already exists');
                console.debug(admin);
             //   return admin;
                }
        },
        login:function(){
            console.log("login route");
            $('body').empty();
            ar = this;
            StackMob.isLoggedIn({
                yes:function(username){
                    console.log(username+" :is logged in");
                    //get user and navigate to home
                    ar.getUser(username);
                    ar.navigate('/home',true)
                },
                no:function(){
                    console.log("no user logged in");
                   ar.brm.showView(new LoginView());
                }/*,
                error:function(){
                    console.log("error");
                }*/
            });
        },
        main:function(){
            //check if user is logged on if user object is not there fetch it
           $('#ajax-loader').show();
            console.debug('main function :routing to main view');
            ar = this;
           
            StackMob.isLoggedIn({
                yes:function(username){
                    console.log(username+" :is logged in");
                   // ar.getUser(username);
                    ////////////////////
                    if (!admin) {
                        console.debug('main:about to fetch user: '+username);
                        var user = new StackMob.User({
                            username: username
                        });
                        //console.debug('getUser:fetching user');
                        user.fetch({
                            success: function() {
                                admin = user;
                                console.debug('user fetched');
                                console.debug(user);
                    
                                if (!mainView) mainView = new MainView({
                                    model: admin
                                });
                                ar.brm.showView(mainView); // user model to be passed into the constructor
                                mainView.goHome(mainView);
                            },
                            error: function() {
                                console.debug('user  fetch error');
                                window.localStorage.clear();
                            }
                        });
                        // return user;
                    }
                    else {
                        console.debug('admin already exists');
                        console.debug(admin);
                        if (!mainView){
                            console.debug('mainview doesnt exist');
                         mainView = new MainView({
                                    model: admin
                                });}
                                else console.debug('mainview exists');
                                ar.brm.showView(mainView); // user model to be passed into the constructor
                                mainView.goHome(mainView);
                        //   return admin;
                    }
                    ////////////////////
                    //get user and navigate to home
                  //  afrykaAdminApp.navigate('/home',true)
                    //ar.navigate('/home',true)
                   
                    
                },
                no:function(){
                    console.log("no user logged in");
                   ar.brm.showView(new LoginView());
                }/*,
                error:function(){
                    console.log("error");
                }*/
            });
            
        },
        toProducts:function(){
             $('#ajax-loader').show();
            console.debug('toproducts function :routing to products view');
            ar = this;
            
            StackMob.isLoggedIn({
                yes:function(username){
                    console.log(username+" :is logged in");
                    // ar.getUser(username);
                    //get user and navigate to home
                  //  afrykaAdminApp.navigate('/home',true)
                    //ar.navigate('/home',true)
                     ////////////////////
                    if (!admin) {
                        //console.debug('getUser:about to fetch user');
                        var user = new StackMob.User({
                            username: username
                        });
                        //console.debug('getUser:fetching user');
                        user.fetch({
                            success: function() {
                                admin = user;
                                console.debug('user fetched');
                                console.debug(user);
                    
                                if (!mainView) mainView = new MainView({
                                    model: admin
                                });
                                ar.brm.showView(mainView); // user model to be passed into the constructor
                                mainView.goProducts(mainView);
                            },
                            error: function() {
                                console.debug('user  fetch error');
                                window.localStorage.clear();
                            }
                        });
                        // return user;
                    }
                    else {
                        console.debug('admin already exists');
                        console.debug(admin);
                        if (!mainView) mainView = new MainView({
                                    model: admin
                                });
                                ar.brm.showView(mainView); // user model to be passed into the constructor
                                mainView.goProducts(mainView);
                        //   return admin;
                    }
                    ////////////////////
                    
                    
                   
                    
                },
                no:function(){
                    console.log("no user logged in");
                   ar.brm.showView(new LoginView());
                }/*,
                error:function(){
                    console.log("error");
                }*/
            });
        },
        toProduct:function(id){
             $('#ajax-loader').show();
              console.debug('toproduct function :routing to product');
            ar = this;
            StackMob.isLoggedIn({
                yes:function(username){
                    console.log(username+" :is logged in");
                    if (!admin) {
                        //console.debug('getUser:about to fetch user');
                        var user = new StackMob.User({
                            username: username
                        });
                        //console.debug('getUser:fetching user');
                        user.fetch({
                            success: function() {
                                admin = user;
                                console.debug('user fetched');
                                console.debug(user);
                    
                                if (!mainView) mainView = new MainView({
                                    model: admin
                                });
                               
                              
                                ar.brm.showView(mainView); // user model to be passed into the constructor
                                mainView.goProduct(mainView,id);
                            },
                            error: function() {
                                console.debug('user  fetch error');
                                window.localStorage.clear();
                            }
                        });
                        // return user;
                    }
                    else {
                        console.debug('admin already exists');
                        console.debug(admin);
                         if (!mainView) mainView = new MainView({
                                    model: admin
                                });
                                ar.brm.showView(mainView); // user model to be passed into the constructor
                                mainView.goProduct(mainView,id);
                        //   return admin;
                    }
                    ////////////////////
                    
                    
                },
                no:function(){
                    console.log("no user logged in");
                   ar.brm.showView(new LoginView());
                }/*,
                error:function(){
                    console.log("error");
                }*/
            });
        },
        toProductNew:function(){
            $('#ajax-loader').show();
              console.debug('toproductnew function :routing to new product');
            ar = this;
            StackMob.isLoggedIn({
                yes:function(username){
                    console.log(username+" :is logged in");
                    if (!admin) {
                        //console.debug('getUser:about to fetch user');
                        var user = new StackMob.User({
                            username: username
                        });
                        //console.debug('getUser:fetching user');
                        user.fetch({
                            success: function() {
                                admin = user;
                                console.debug('user fetched');
                                console.debug(user);
                                if (!mainView) mainView = new MainView({
                                    model: admin
                                });
                              
                                ar.brm.showView(mainView); // user model to be passed into the constructor
                                mainView.goProductNew(mainView);
                            },
                            error: function() {
                                console.debug('user  fetch error');
                            }
                        });
                        // return user;
                    }
                    else {
                        console.debug('admin already exists');
                        console.debug(admin);
                         if (!mainView) mainView = new MainView({
                                    model: admin
                                });
                                ar.brm.showView(mainView); // user model to be passed into the constructor
                                mainView.goProductNew(mainView);
                        //   return admin;
                    }
                    ////////////////////
                },
                no:function(){
                    console.log("no user logged in");
                   ar.brm.showView(new LoginView());
                }/*,
                error:function(){
                    console.log("error");
                }*/
            });
        },
        toCats:function(){
             $('#ajax-loader').show();
            console.debug('tocats function :routing to catsview');
            ar = this;
            
            StackMob.isLoggedIn({
                yes:function(username){
                    console.log(username+" :is logged in");
                   //  ar.getUser(username);
                    //get user and navigate to home
                  //  afrykaAdminApp.navigate('/home',true)
                    //ar.navigate('/home',true)
                     ////////////////////
                    if (!admin) {
                        //console.debug('getUser:about to fetch user');
                        var user = new StackMob.User({
                            username: username
                        });
                        //console.debug('getUser:fetching user');
                        user.fetch({
                            success: function() {
                                admin = user;
                                console.debug('user fetched');
                                console.debug(user);
                    
                                if (!mainView) mainView = new MainView({
                                    model: admin
                                });
                                ar.brm.showView(mainView); // user model to be passed into the constructor
                                mainView.goCategories(mainView);
                            },
                            error: function() {
                                console.debug('user  fetch error');
                                window.localStorage.clear();
                            }
                        });
                        // return user;
                    }
                    else {
                        console.debug('admin already exists');
                        console.debug(admin);
                         if (!mainView) mainView = new MainView({
                                    model: admin
                                });
                                ar.brm.showView(mainView); // user model to be passed into the constructor
                                mainView.goCategories(mainView);
                        //   return admin;
                    }
                    ////////////////////
                     //user model to be passed into the constructor
                    
                    
                },
                no:function(){
                    console.log("no user logged in");
                   ar.brm.showView(new LoginView());
                }/*,
                error:function(){
                    console.log("error");
                }*/
            });
             
        },
        toStatii:function(){
             $('#ajax-loader').show();
            console.debug('to statii function :routing to statii view');
            ar = this;
            
            StackMob.isLoggedIn({
                yes:function(username){
                    console.log(username+" :is logged in");
                    if (!admin) {
                        //console.debug('getUser:about to fetch user');
                        var user = new StackMob.User({
                            username: username
                        });
                        //console.debug('getUser:fetching user');
                        user.fetch({
                            success: function() {
                                admin = user;
                                console.debug('user fetched');
                                console.debug(user);
                    
                                if (!mainView) mainView = new MainView({
                                    model: admin
                                });
                               // mainView.sidebarVisible=false;//reset it in case the page was refreshed
                                ar.brm.showView(mainView); // user model to be passed into the constructor
                                mainView.goStatii(mainView);
                            },
                            error: function() {
                                console.debug('user  fetch error');
                                window.localStorage.clear();
                            }
                        });
                        // return user;
                    }
                    else {
                        console.debug('admin already exists');
                        console.debug(admin);
                        if (!mainView) mainView = new MainView({
                                    model: admin
                                });
                                ar.brm.showView(mainView); // user model to be passed into the constructor
                                mainView.goStatii(mainView);
                        //   return admin;
                    }
                    ////////////////////
                    // user model to be passed into the constructor
                   
                    
                },
                no:function(){
                    console.log("no user logged in");
                   ar.brm.showView(new LoginView());
                }/*,
                error:function(){
                    console.log("error");
                }*/
            });
        },
        toOther:function(){
             $('#ajax-loader').show();
            console.debug('to other function :routing to other view');
            ar = this;
           
            StackMob.isLoggedIn({
                yes:function(username){
                    console.log(username+" :is logged in");
                    // ar.getUser(username);
                    //get user and navigate to home
                  //  afrykaAdminApp.navigate('/home',true)
                    //ar.navigate('/home',true)
                     ////////////////////
                    if (!admin) {
                        //console.debug('getUser:about to fetch user');
                        var user = new StackMob.User({
                            username: username
                        });
                        //console.debug('getUser:fetching user');
                        user.fetch({
                            success: function() {
                                admin = user;
                                console.debug('user fetched');
                                console.debug(user);
                    
                                if (!mainView) mainView = new MainView({
                                    model: admin
                                });
                               // mainView.sidebarVisible=false;//reset it in case the page was refreshed
                                ar.brm.showView(mainView); // user model to be passed into the constructor
                                mainView.goOther(mainView);
                            },
                            error: function() {
                                console.debug('user  fetch error');
                                window.localStorage.clear();
                            }
                        });
                        // return user;
                    }
                    else {
                        console.debug('admin already exists');
                        console.debug(admin);
                        if (!mainView) mainView = new MainView({
                                    model: admin
                                });
                                ar.brm.showView(mainView); // user model to be passed into the constructor
                                mainView.goOther(mainView);
                        //   return admin;
                    }
                    ////////////////////
                    // user model to be passed into the constructor
                   
                    
                },
                no:function(){
                    console.log("no user logged in");
                   ar.brm.showView(new LoginView());
                }/*,
                error:function(){
                    console.log("error");
                }*/
            });
        },
        toProblem:function(){
            console.debug('problem route fired');
            ar.brm.showView(new ProblemView());
        },
        toUser:function(){
             
            console.debug('to statii function :routing to statii view');
            ar = this;
            StackMob.isLoggedIn({
                yes:function(username){
                    console.log(username+" :is logged in");
                    if (!admin) {
                        //console.debug('getUser:about to fetch user');
                        var user = new StackMob.User({
                            username: username
                        });
                        //console.debug('getUser:fetching user');
                        user.fetch({
                            success: function() {
                                admin = user;
                                console.debug('user fetched');
                                console.debug(user);
                    
                                if (!mainView) mainView = new MainView({
                                    model: admin
                                });
                               // mainView.sidebarVisible=false;//reset it in case the page was refreshed
                                ar.brm.showView(mainView); // user model to be passed into the constructor
                                mainView.goUser(mainView);
                            },
                            error: function() {
                                console.debug('user  fetch error');
                                window.localStorage.clear();
                            }
                        });
                        // return user;
                    }
                    else {
                        console.debug('admin already exists');
                        console.debug(admin);
                        if (!mainView) mainView = new MainView({
                                    model: admin
                                });
                                ar.brm.showView(mainView); // user model to be passed into the constructor
                                mainView.goUser(mainView);
                        //   return admin;
                    }
                    ////////////////////
                    // user model to be passed into the constructor
                   
                    
                },
                no:function(){
                    console.log("no user logged in");
                   ar.brm.showView(new LoginView());
                }/*,
                error:function(){
                    console.log("error");
                }*/
            });
        },
    });
    afrykaAdminApp = new AppRouter();
    console.log("app launched")
    Backbone.history.start();
    console.log("backbone history start")
});
