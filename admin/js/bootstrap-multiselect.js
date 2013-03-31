body {
    background-color:#ccc !important;
    background-image: url(http://dev.afrykashop.blackmwanagmailcom.stackmobapp.com/admin/img/diagonales_decalees.png);
    background-repeat: repeat;
}
#frm-login {
    max-width:300px;
    border: 1px solid #e5e5e5;
    margin: 0 auto;
    padding:4em;
}
#my-overlay{
    position:fixed;
    top:0; 
    left:0;
    width:100%;
    height:100%;
    background-color:#ccc;
    opacity:0.5;
    z-index:9998;
}
#ajax-loader{
    z-index:9999;
    display:none;
    position:fixed;
    width:128px;
    height:60px;
    top:40%;
    left:40%;
    background-color: black;
    -webkit-border-radius: 47px;
    -moz-border-radius: 47px;
    border-radius: 47px;
}
#ajax-loader img{
    /*display:none;*/
    width:80%;
    /*margin:0 auto;*/
    height:30%;
    margin-left:10%;
 /*   margin-top:10%;*/
    z-index:10000; 
}
#ajax-loader i{
    margin-left:2em;
}
.sidebar{
    background: #3A3A3A;
    background-image: -moz-linear-gradient(top, #414141, #323232);
    background-image: -ms-linear-gradient(top, #414141, #323232);
    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#414141), to(#323232));
    background-image: -webkit-linear-gradient(top, #414141, #323232);
    background-image: -o-linear-gradient(top, #414141, #323232);
    background-image: linear-gradient(top, #414141, #323232);
    background-repeat: repeat-x;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#414141', endColorstr='#323232', GradientType=0);
}
.sidebar a{
    color:#ddd;
}
.sidebar>li>a:hover{
    color:#555;
}
.sidebar>i{
    color:#ddd;
}
.alert{
    position:absolute;
    display:none;
    top:10%;
    left:40%;
    width:em;
    height:2em;
}
.nav a{
    cursor:pointer;
}
.navbar-inner{
     -webkit-border-radius:0px;
    -moz-border-radius:0px;
    border-radius:0px;
}
#avatar {
    cursor: pointer;
    border-left: 1px solid gray;
    padding-left: 1em;
    height: 90%;
    width: 9em;
    color:gray;
}
#avatar-image {
    height: 2em;
    width: 2em;
    margin-top: 0.5em;
}
#avatar-image img {
    height: 100%;
    width: 100%;
}

.page-region-content{
    background-color:#ccc;
    -webkit-border-radius:11px;
    -moz-border-radius:11px;
    border-radius:11px;    
    padding: 2em;
    border-right:1px solid #eee;
    border-bottom:1px solid #eee;
    border-left:1px solid #777;
    border-top:1px solid #777;
}

.tile {
    background-color:#ccc;
    cursor:pointer;
    height: 8em;
    width: 8em;
    border: solid black 1px;
    padding: 1em;
    text-align: center;
    margin: 0 auto;
    display: inline-block;
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    border-radius: 30px;
     border-right: 1px solid #777;
    border-bottom: 1px solid #777;
    border-left: 1px solid #eee;
    border-top: 1px solid #eee;
   
}
.tile:hover{
    background-color:#eee;
}
.tile:active{
     border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    border-left: 1px solid #777;
    border-top: 1px solid #777;
}
.tiles{
    width: 60%;
    margin: 0 auto;
}
.tile h4{
    margin-top: 1em;
}
.tile i{
    font-size:3em;
}
.span2{
    border: solid 1px blue;
}
.span10{
    border: solid 1px red;
    
}
.table-holder{
    width:80%;
    margin:0 auto;
}
table{
    background-color:white;
}
thead{
    background-color:gray;
}
tr{
    cursor:pointer;
}
td img{
    width :4em;
    margin:0 auto;
}
.product-pic{
    width :4em;
}
#product-container{
    width:80%;
    margin:0 auto;
}
.product-buttons{
    width:50%;
    margin:0 auto;
}
.product-buttons button{
    width:9em;
}
/*product page baba*/
#product-pic-upload,#product-new-pic-upload{
    display:none;
}
.product-modal-img{
    height:12em;
    margin-bottom:1em;
}
.image-updated{
    border: solid 2px green;
}
.product-form{
    margin-top:3em;
}
.product-form>.row-fluid:first-child{
    margin-bottom:1.5em;
}
#product-edit-btn-upload,#product-new-btn-upload{
    width:50%;
}
