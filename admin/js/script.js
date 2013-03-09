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
                description:'not set'
            }
        }
    })
    var Statii = StackMob.Collection.extend({
        model:Status
    });
    var Product = StackMob.Model.extend({
        schemaName:"product",
        defaults:function(){
            return{
                title_en:'not set',
                title_pl:'not set',
                description_en:'not set',
                description_pl:'not set',
                link:"http://afroeuro.istore.pl/",
                picture:"http://dev.afrykashop.blackmwanagmailcom.stackmobapp.com/admin/images/market.png",//change to main folder not admin
                price:0
            }
        }
    })
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
        initialize: function() {
            this.template = _.template($('#item-login').html());
          //  this.render();//rendering in this.brm 
        },
        render: function() {
            var el = this.$el;
         //   el.empty();
            el.append(this.template());
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
            var u = $('#username').val().replace(/\W/g, '');
            var p = $('#pass').val().replace(/\W/g, '');
            console.log('user: ' + u + " password: " + p);
            if (p === '' || u === '') this.loginError();
            else this.admin_login(u, p);
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
                    console.debug(response);
                }
            });
            console.debug(user.toJSON());
        },
        loginError: function() {
            console.debug('login error function called');
        },
        problem:function(){
            console.debug('having problems');//problemview on body
            afrykaAdminApp.navigate('/problem',true);
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
            "click #avatar":"showUserDialogue"
        },
    //    sidebarVisible:false,
        initialize: function() {
            this.model = this.options.model;
            this.model.bind('all', this.refresh,this);
            this.template=_.template($('#item-main').html());
            //this.add_cat_template=_.template($('#item-add').html);//same for editting
            //this.add_user_template=_.template($('#item-add').html);//same for editing
            //this.add_joke_template=_.template($('#item-add').html);//same for editing
            //this.render();//rendering in this.brm 

        },
        render: function() {
            var el = this.$el;
        //    el.empty();
            el.append(this.template(this.model.toJSON()));
            $('#avatar img').attr('src',function(){
                //console.debug(admin.toJSON().email);
                //maybe check to see if email exists
                return get_gravatar(admin.toJSON().email,80);
            });
            //this.sidebarVisible=false;
            //removing this next part to implement region managers
            //this.homeView = new HomeView();
        //    $('.view-container').append(this.homeView.render().el);
          //  this.goHome();
            return this;
        },
        refresh:function(){
            afrykaAdminApp.navigate('/',true);
        },
        navHome:function(){
            afrykaAdminApp.navigate('/home',true);
           // afrykaAdminApp.navigate('/',true);
        },
        navProducts:function(){
            afrykaAdminApp.navigate('/products',true);
           // afrykaAdminApp.navigate('/',true);
        },
        navProduct:function(id){//maybe not necessary
        //get id of clicked item
            afrykaAdminApp.navigate('/product/'+id,true);
           // afrykaAdminApp.navigate('/',true);
        },
        navCategories:function(){
            afrykaAdminApp.navigate('/categories',true);
           // afrykaAdminApp.navigate('/',true);
        },
        navOther:function(){
            afrykaAdminApp.navigate('/other',true);
           // afrykaAdminApp.navigate('/',true);
        },
        navStatii:function(){
            afrykaAdminApp.navigate('/statii',true);
           // afrykaAdminApp.navigate('/',true);
        },
        navUser:function(){//maybe not necessary
            //get username
            afrykaAdminApp.navigate('/user/'+username,true);//maybe include user id
           // afrykaAdminApp.navigate('/',true);
        },
        goHome: function(){
            console.debug('going home, showing homeview');
            if(!this.homeView){
                
            console.debug('gohome: homeview doesnt exist');
            this.homeView = new HomeView();
                    this.homeView.parent = this;
            }else{
                console.debug('gohome: homeview exists');
                this.homeView.delegateEvents();
               // if(this.sideBarView){
                 //   this.sideBarView.delegateEvents();
                //}       
            }
           // afrykaAdminApp.navigate('/home',true);
           afrykaAdminApp.prm.showView(this.homeView);
        },
        goCategories: function(){
            console.debug('going cats,fetching , showing catsview');
            if(!cats) 
                cats = new Cats();
            cats.fetch({
                success:function(){
                    console.debug('mainview,goCategories:cats have been fetched');
                    this.catsView = new CatsView({collection:cats});
                    this.catsView.parent = this;
                    console.debug(this);
                    afrykaAdminApp.prm.showView(this.catsView);
                },
                error:function(){
                    //do something
                    //show alert
                    console.debug('mainview,goCategories:cats have not been fetched');
                }
            });
           // afrykaAdminApp.navigate('/home',true);  
        },
        goStatii: function(){
            console.debug('going statii, showing statiiview');
            if(!statii) 
                statii = new Statii();
            statii.fetch({
                success:function(){
                    console.debug('mainview,goStatii:statii have been fetched');
                    this.statiiView = new StatiiView({collection:statii});
                    this.statiiView.parent = this;
                    afrykaAdminApp.prm.showView(this.statiiView);
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
        goProducts: function(){
            console.debug('going productlist, showing productsview');
            if(!products) 
                products = new Products();
            products.fetch({
                success:function(){
                    console.debug('mainview,goProducts:products have been fetched');
                    this.productsView = new ProductsView({collection:products});
                    this.productsView.parent = this;
                    afrykaAdminApp.prm.showView(this.productsView);
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
        goProduct: function(id) {
            console.debug('going product, showing productview');
        
            // afrykaAdminApp.navigate('/home',true);
            if (!products) {
                products = new Products();
                products.fetch({
                    success: function() {
                        console.debug('mainview,goProduct:products have been fetched');
                        curProd = products.get(id);//if product isnt there display error
                        this.productView = new ProductView({
                            model: curProd
                        });
                        this.productView.parent = this;
                        afrykaAdminApp.prm.showView(this.productView);
                    },
                    error: function() {
                        //do something
                        //show alert
                        console.debug('mainview,goProducts:products have not been fetched');
                    }
                });
            }
            else {
                curProd = products.get(id);//if product isnt there display error
                this.productView = new ProductView({
                    model: curProd
                });
                this.productView.parent = this;
                afrykaAdminApp.prm.showView(this.productView);
            }
        },
        goOther: function(){
            console.debug('going stats, showing statsview');
            this.otherView = new OtherView();
            this.otherView.parent = this;
           // afrykaAdminApp.navigate('/home',true);
           afrykaAdminApp.prm.showView(this.otherView);
        },
        goUser:function(){
            console.debug('going jokes, showing jokesview');
            this.userView = new UserView({model:admin});
            this.userView.parent = this;
            // afrykaAdminApp.navigate('/home',true);
            afrykaAdminApp.prm.showView(this.userView);
        },
        showUserDialogue:function(){
            console.debug('user dialog');
        },
        goCatsEdit:function(id){
            console.debug('gocatsedit:rendering dialogbox');
            var model = cats.get(id);
            console.debug('id:'+id);
            console.debug(model);
            var m = model.toJSON();
            
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
        }
    });
    var ProductsView = Backbone.View.extend({
        //el:'',
        //tagName:'ul',
        id:"products-content",
        classname:"page-region-content",
        events:{
        },
        initialize:function(){
            this.template=_.template($('#item-products').html());
        },
        render: function(){
            var el = this.$el;
            console.debug('rendering productsview');
            //$('.page-sidebar').empty();//can be remove on this.class
            el.html(this.template());
            return this;   
        } 
        
    });
    var ProductView = Backbone.View.extend({// pass in type in the options 
        id:"product-content",
        classname:"page-region-content",
        events:{},
        initialize:function(){
            this.template=_.template($('#item-product').html());
        },
        render:function(){
            var el = this.$el;
            console.debug('rendering productsview');
            el.html(this.template());
            return this;    
        }
    });
    var CatsView = Backbone.View.extend({
        id:"categories-content",
        classname:"page-region-content",
        events:{
            "click tbody tr":"showCatEdit"
        },
        initialize:function(){
            //this.model = this.options.model;
            this.collection.bind('all', this.refresh,this);
            this.template = _.template($('#item-cats').html());
            this.rowTemplate= _.template($('#item-cats-row').html());
        },
        render:function(){
           var el = this.$el;
            var collection = this.collection;
            rowTemplate = this.rowTemplate;
          //  $('.page-region-content').remove();
            el.append(this.template());
            collection.each(function(cat){
                el.find('tbody').append(rowTemplate(cat.toJSON()));       
                });
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
            //this.parent.sideBarView.goCatsEdit($(ev.target).parent().data('id'));
            this.parent.goCatsEdit($(ev.target).parent().data('id'));
            
        },
        refresh:function(){
            //refresh the catview somehowg
        }
    });//dialog box no need for view object
    var OtherView = Backbone.View.extend({
        id:"other-content",
        classname:"page-region-content",
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

        },
        initialize: function() {
            this.template= _.template($('#item-statii').html());
            this.rowTemplate= _.template($('#item-statii-row').html());
        },
        render: function() {
            var el=this.$el;
            var collection = this.collection;
            rowTemplate = this.rowTemplate;
            el.append(this.template());
            collection.each(function(status){
                el.find('tbody').append(rowTemplate(status.toJSON()));       
                });
            return this;
        }
    });
    var NewProductModalView = Backbone.View.extend({
        events: {
        },
        initialize: function() {
            this.template = _.template($('#item-products-new').html());
        },
        render: function() {
            this.$el.html(this.template());
            return this;
        },
        show: function() {
            $(document.body).append(this.render().el);                
        },
        close: function() {
            this.remove();
        }
           
    });
    var EditCategoryModalView = Backbone.View.extend({
        events: {
        },
        initialize: function() {
            this.template = _.template($('#item-cats-edit').html());
        },
        render: function() {
            this.$el.html(this.template());
            return this;
        },
        show: function() {
            $(document.body).append(this.render().el);                
        },
        close: function() {
            this.remove();
        }
           
    });
    var NewCategoryModalView = Backbone.View.extend({
        events: {
        },
        initialize: function() {
            this.template = _.template($('#item-cats-new').html());
        },
        render: function() {
            this.$el.html(this.template());
            return this;
        },
        show: function() {
            $(document.body).append(this.render().el);                
        },
        close: function() {
            this.remove();
        }
           
    });
    var EditStatusModalView = Backbone.View.extend({
        events: {
        },
        initialize: function() {
            this.template = _.template($('#item-statii-edit').html());
        },
        render: function() {
            this.$el.html(this.template());
            return this;
        },
        show: function() {
            $(document.body).append(this.render().el);                
        },
        close: function() {
            this.remove();
        }
           
    });
    var NewStatusModalView = Backbone.View.extend({
        events: {
        },
        initialize: function() {
            this.template = _.template($('#item-statii-new').html());
        },
        render: function() {
            this.$el.html(this.template());
            return this;
        },
        show: function() {
            $(document.body).append(this.render().el);                
        },
        close: function() {
            this.remove();
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
     
    //////////////////////////////////////////////////////
    var AppRouter = Backbone.Router.extend({
        routes:{
            '':'login',
            'home':'main',
            'products':'toProducts',
            'product/:id':'toProduct',
            'categories':'toCats',
            'statii':'toStatii',
            'other':'toOther',
            'problem':'toProblem',
            'user/:id':'toUser'
        },
        initialize:function(){
            this.prm = new PageRegionManager();
            this.brm = new BodyRegionManager();
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
            console.debug('main function :routing to main view');
            ar = this;
            StackMob.isLoggedIn({
                yes:function(username){
                    console.log(username+" :is logged in");
                   // ar.getUser(username);
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
                                mainView.goHome();
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
                        if (!mainView){
                            console.debug('mainview doesnt exist');
                         mainView = new MainView({
                                    model: admin
                                });}
                                else console.debug('mainview exists');
                                ar.brm.showView(mainView); // user model to be passed into the constructor
                                mainView.goHome();
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
                                mainView.goProducts();
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
                                mainView.goProducts();
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
              console.debug('toproduct function :routing to product');
            ar = this;
            StackMob.isLoggedIn({
                yes:function(username){
                    console.log(username+" :is logged in");
                    // ar.getUser(username);
                    //get user and navigate to home
                  //  afrykaAdminApp.navigate('/home',true)
                    //ar.navigate('/home',true)
                     // user model to be passed into the constructor
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
                                mainView.goProduct(id);
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
                                mainView.goProduct(id);
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
                                mainView.goCategories();
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
                                mainView.goCategories();
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
             
            console.debug('to statii function :routing to statii view');
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
                                mainView.goStatii();
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
                                mainView.goStatii();
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
                                mainView.goOther();
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
                                mainView.goOther();
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
                                mainView.goUser();
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
                                mainView.goUser();
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