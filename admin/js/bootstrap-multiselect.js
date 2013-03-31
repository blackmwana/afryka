  


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>bootstrap-multiselect/js/bootstrap-multiselect.js at master · davidstutz/bootstrap-multiselect</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="http://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="EfnIEN5o8MQSMCBHTJD9qH338oF35+ccxQSktCGFwZ8=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/assets/github-f70e4783e00fd4884a9e5e651a43933c9881caa8.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/assets/github2-0d31290d073dea4d8671e2b8c747629aeb074034.css" media="all" rel="stylesheet" type="text/css" />
    


      <script src="https://a248.e.akamai.net/assets.github.com/assets/frameworks-d76b58e749b52bc47a4c46620bf2c320fabe5248.js" type="text/javascript"></script>
      <script src="https://a248.e.akamai.net/assets.github.com/assets/github-67b55380cff8d6766b298e6935a3c1db7d5c6d5d.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="1212ad79754350a805cefbcd08a3dadf">

        <link data-pjax-transient rel='permalink' href='/davidstutz/bootstrap-multiselect/blob/dcdd0bb35f9c44f819734d4bff1d85ec53d5e274/js/bootstrap-multiselect.js'>
    <meta property="og:title" content="bootstrap-multiselect"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/davidstutz/bootstrap-multiselect"/>
    <meta property="og:image" content="https://secure.gravatar.com/avatar/502b868eba2bb7b66b7150b12bde5e81?s=420&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="bootstrap-multiselect - JQuery multiselect plugin based on Twitter Bootstrap."/>
    <meta property="twitter:card" content="summary"/>
    <meta property="twitter:site" content="@GitHub">
    <meta property="twitter:title" content="davidstutz/bootstrap-multiselect"/>

    <meta name="description" content="bootstrap-multiselect - JQuery multiselect plugin based on Twitter Bootstrap." />

  <link href="https://github.com/davidstutz/bootstrap-multiselect/commits/master.atom" rel="alternate" title="Recent Commits to bootstrap-multiselect:master" type="application/atom+xml" />

  </head>


  <body class="logged_in page-blob windows vis-public env-production  ">
    <div id="wrapper">

      

      
      
      

      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-blacktocat" href="https://github.com/">
  <span class="mega-icon mega-icon-blacktocat"></span>
</a>

    <div class="divider-vertical"></div>

      <a href="/notifications" class="notification-indicator tooltipped downwards" title="You have no unread notifications">
    <span class="mail-status all-read"></span>
  </a>
  <div class="divider-vertical"></div>


      <div class="command-bar js-command-bar  ">
            <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">
  <a href="/search/advanced" class="advanced-search-icon tooltipped downwards command-bar-search" id="advanced_search" title="Advanced search"><span class="mini-icon mini-icon-advanced-search "></span></a>

  <input type="text" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" data-username="blackmwana" autocapitalize="off">

  <span class="mini-icon help tooltipped downwards" title="Show command bar help">
    <span class="mini-icon mini-icon-help"></span>
  </span>

  <input type="hidden" name="ref" value="commandbar">

  <div class="divider-vertical"></div>
</form>
        <ul class="top-nav">
            <li class="explore"><a href="https://github.com/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="http://help.github.com">Help</a></li>
        </ul>
      </div>

    

  
    <ul id="user-links">
      <li>
        <a href="https://github.com/blackmwana" class="name">
          <img height="20" src="https://secure.gravatar.com/avatar/337a0611ce151d8f092a9d43d6c480fb?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /> blackmwana
        </a>
      </li>
      <li>
        <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a new repo">
          <span class="mini-icon mini-icon-create"></span>
        </a>
      </li>
      <li>
        <a href="/settings/profile" id="account_settings"
          class="tooltipped downwards"
          title="Account settings ">
          <span class="mini-icon mini-icon-account-settings"></span>
        </a>
      </li>
      <li>
        <a href="/logout" data-method="post" id="logout" class="tooltipped downwards" title="Sign out">
          <span class="mini-icon mini-icon-logout"></span>
        </a>
      </li>
    </ul>



    
  </div>
</div>

      

      

      


            <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="hentry">
        
        <div class="pagehead repohead instapaper_ignore readability-menu ">
          <div class="container">
            <div class="title-actions-bar">
              


<ul class="pagehead-actions">


    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="EfnIEN5o8MQSMCBHTJD9qH338oF35+ccxQSktCGFwZ8=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="6162900" />

    <div class="select-menu js-menu-container js-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">
          <span class="mini-icon mini-icon-unwatch"></span>
          Unwatch
        </span>
      </span>

      <div class="select-menu-modal-holder js-menu-content">
        <div class="select-menu-modal">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="mini-icon mini-icon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container">

            <div class="select-menu-item js-navigation-item js-navigation-target ">
              <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
              <div class="select-menu-item-text">
                <input id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for discussions in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="mini-icon mini-icon-watching"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item js-navigation-target selected">
              <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="mini-icon mini-icon-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item js-navigation-target ">
              <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="mini-icon mini-icon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

    <li class="js-toggler-container js-social-container starring-container on">
      <a href="/davidstutz/bootstrap-multiselect/unstar" class="minibutton js-toggler-target star-button starred upwards" title="Unstar this repo" data-remote="true" data-method="post" rel="nofollow">
        <span class="mini-icon mini-icon-remove-star"></span>
        <span class="text">Unstar</span>
      </a>
      <a href="/davidstutz/bootstrap-multiselect/star" class="minibutton js-toggler-target star-button unstarred upwards" title="Star this repo" data-remote="true" data-method="post" rel="nofollow">
        <span class="mini-icon mini-icon-star"></span>
        <span class="text">Star</span>
      </a>
      <a class="social-count js-social-count" href="/davidstutz/bootstrap-multiselect/stargazers">123</a>
    </li>

        <li>
          <a href="/davidstutz/bootstrap-multiselect/fork" class="minibutton js-toggler-target fork-button lighter upwards" title="Fork this repo" rel="nofollow" data-method="post">
            <span class="mini-icon mini-icon-branch-create"></span>
            <span class="text">Fork</span>
          </a>
          <a href="/davidstutz/bootstrap-multiselect/network" class="social-count">44</a>
        </li>


</ul>

              <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
                <span class="repo-label"><span>public</span></span>
                <span class="mega-icon mega-icon-public-repo"></span>
                <span class="author vcard">
                  <a href="/davidstutz" class="url fn" itemprop="url" rel="author">
                  <span itemprop="title">davidstutz</span>
                  </a></span> /
                <strong><a href="/davidstutz/bootstrap-multiselect" class="js-current-repository">bootstrap-multiselect</a></strong>
              </h1>
            </div>

            
  <ul class="tabs">
    <li><a href="/davidstutz/bootstrap-multiselect" class="selected" highlight="repo_source repo_downloads repo_commits repo_tags repo_branches">Code</a></li>
    <li><a href="/davidstutz/bootstrap-multiselect/network" highlight="repo_network">Network</a></li>
    <li><a href="/davidstutz/bootstrap-multiselect/pulls" highlight="repo_pulls">Pull Requests <span class='counter'>0</span></a></li>

      <li><a href="/davidstutz/bootstrap-multiselect/issues" highlight="repo_issues">Issues <span class='counter'>5</span></a></li>



    <li><a href="/davidstutz/bootstrap-multiselect/graphs" highlight="repo_graphs repo_contributors">Graphs</a></li>


  </ul>
  
<div class="tabnav">

  <span class="tabnav-right">
    <ul class="tabnav-tabs">
          <li><a href="/davidstutz/bootstrap-multiselect/tags" class="tabnav-tab" highlight="repo_tags">Tags <span class="counter blank">0</span></a></li>
    </ul>
    
  </span>

  <div class="tabnav-widget scope">


    <div class="select-menu js-menu-container js-select-menu js-branch-menu">
      <a class="minibutton select-menu-button js-menu-target" data-hotkey="w" data-ref="master">
        <span class="mini-icon mini-icon-branch"></span>
        <i>branch:</i>
        <span class="js-select-button">master</span>
      </a>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">

        <div class="select-menu-modal">
          <div class="select-menu-header">
            <span class="select-menu-title">Switch branches/tags</span>
            <span class="mini-icon mini-icon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-filters">
            <div class="select-menu-text-filter">
              <input type="text" id="commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
            </div>
            <div class="select-menu-tabs">
              <ul>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
                </li>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
                </li>
              </ul>
            </div><!-- /.select-menu-tabs -->
          </div><!-- /.select-menu-filters -->

          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="branches">

            <div data-filterable-for="commitish-filter-field" data-filterable-type="substring">

                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/davidstutz/bootstrap-multiselect/blob/gh-pages/js/bootstrap-multiselect.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="gh-pages" rel="nofollow" title="gh-pages">gh-pages</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target selected">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/davidstutz/bootstrap-multiselect/blob/master/js/bootstrap-multiselect.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" rel="nofollow" title="master">master</a>
                </div> <!-- /.select-menu-item -->
            </div>

              <div class="select-menu-no-results">Nothing to show</div>
          </div> <!-- /.select-menu-list -->


          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="tags">
            <div data-filterable-for="commitish-filter-field" data-filterable-type="substring">

            </div>

            <div class="select-menu-no-results">Nothing to show</div>

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

  </div> <!-- /.scope -->

  <ul class="tabnav-tabs">
    <li><a href="/davidstutz/bootstrap-multiselect" class="selected tabnav-tab" highlight="repo_source">Files</a></li>
    <li><a href="/davidstutz/bootstrap-multiselect/commits/master" class="tabnav-tab" highlight="repo_commits">Commits</a></li>
    <li><a href="/davidstutz/bootstrap-multiselect/branches" class="tabnav-tab" highlight="repo_branches" rel="nofollow">Branches <span class="counter ">2</span></a></li>
  </ul>

</div>

  
  
  


            
          </div>
        </div><!-- /.repohead -->

        <div id="js-repo-pjax-container" class="container context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:959e2d37a788d07b7b3d9ab6c5de7c45 -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:959e2d37a788d07b7b3d9ab6c5de7c45 -->


<div id="slider">
    <div class="frame-meta">

      <p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

        <div class="breadcrumb">
          <span class='bold'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/davidstutz/bootstrap-multiselect" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">bootstrap-multiselect</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/davidstutz/bootstrap-multiselect/tree/master/js" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">js</span></a></span><span class="separator"> / </span><strong class="final-path">bootstrap-multiselect.js</strong> <span class="js-zeroclipboard zeroclipboard-button" data-clipboard-text="js/bootstrap-multiselect.js" data-copied-hint="copied!" title="copy to clipboard"><span class="mini-icon mini-icon-clipboard"></span></span>
        </div>

      <a href="/davidstutz/bootstrap-multiselect/find/master" class="js-slide-to" data-hotkey="t" style="display:none">Show File Finder</a>


        
  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/7bad109d0328303759eba09b6be6da25?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
    <span class="author"><a href="/programcsharp" rel="author">programcsharp</a></span>
    <time class="js-relative-date" datetime="2013-03-23T13:02:17-07:00" title="2013-03-23 13:02:17">March 23, 2013</time>
    <div class="commit-title">
        <a href="/davidstutz/bootstrap-multiselect/commit/6d2c0a63b85e06c394ad096778f24b521c0e4fa4" class="message">Added selectedClass option to control class used for selected &lt;li&gt;</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>8</strong> contributors</a></p>
          <a class="avatar tooltipped downwards" title="davidstutz" href="/davidstutz/bootstrap-multiselect/commits/master/js/bootstrap-multiselect.js?author=davidstutz"><img height="20" src="https://secure.gravatar.com/avatar/502b868eba2bb7b66b7150b12bde5e81?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="nghtstr" href="/davidstutz/bootstrap-multiselect/commits/master/js/bootstrap-multiselect.js?author=nghtstr"><img height="20" src="https://secure.gravatar.com/avatar/c4b48681c8ca8e07a7b2a6e02fc31c7d?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="najlepsiwebdesigner" href="/davidstutz/bootstrap-multiselect/commits/master/js/bootstrap-multiselect.js?author=najlepsiwebdesigner"><img height="20" src="https://secure.gravatar.com/avatar/d4e8f5dde3ff62c435cf5233d4e28b35?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="sdevilcry" href="/davidstutz/bootstrap-multiselect/commits/master/js/bootstrap-multiselect.js?author=sdevilcry"><img height="20" src="https://secure.gravatar.com/avatar/4e823b21c2c71249c8364f533716fed6?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="Devristo" href="/davidstutz/bootstrap-multiselect/commits/master/js/bootstrap-multiselect.js?author=Devristo"><img height="20" src="https://secure.gravatar.com/avatar/fa8b815205ccc67a56c5cc49fbd3ca3a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="programcsharp" href="/davidstutz/bootstrap-multiselect/commits/master/js/bootstrap-multiselect.js?author=programcsharp"><img height="20" src="https://secure.gravatar.com/avatar/7bad109d0328303759eba09b6be6da25?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="stephanoff" href="/davidstutz/bootstrap-multiselect/commits/master/js/bootstrap-multiselect.js?author=stephanoff"><img height="20" src="https://secure.gravatar.com/avatar/cd865b2f70a9d41b4d2c774638d5b6a7?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="aamaliaa" href="/davidstutz/bootstrap-multiselect/commits/master/js/bootstrap-multiselect.js?author=aamaliaa"><img height="20" src="https://secure.gravatar.com/avatar/7adf550da87cb7a2699cf2268069e85e?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2>Users on GitHub who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/502b868eba2bb7b66b7150b12bde5e81?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/davidstutz">davidstutz</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/c4b48681c8ca8e07a7b2a6e02fc31c7d?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/nghtstr">nghtstr</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/d4e8f5dde3ff62c435cf5233d4e28b35?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/najlepsiwebdesigner">najlepsiwebdesigner</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/4e823b21c2c71249c8364f533716fed6?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/sdevilcry">sdevilcry</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/fa8b815205ccc67a56c5cc49fbd3ca3a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/Devristo">Devristo</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/7bad109d0328303759eba09b6be6da25?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/programcsharp">programcsharp</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/cd865b2f70a9d41b4d2c774638d5b6a7?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/stephanoff">stephanoff</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/7adf550da87cb7a2699cf2268069e85e?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/aamaliaa">aamaliaa</a>
        </li>
      </ul>
    </div>
  </div>


    </div><!-- ./.frame-meta -->

    <div class="frames">
      <div class="frame" data-permalink-url="/davidstutz/bootstrap-multiselect/blob/dcdd0bb35f9c44f819734d4bff1d85ec53d5e274/js/bootstrap-multiselect.js" data-title="bootstrap-multiselect/js/bootstrap-multiselect.js at master · davidstutz/bootstrap-multiselect · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="mini-icon mini-icon-text-file"></b></span>
                <span class="mode" title="File Mode">file</span>
                  <span>342 lines (275 sloc)</span>
                <span>10.913 kb</span>
              </div>
              <div class="actions">
                <div class="button-group">
                        <a class="minibutton tooltipped leftwards"
                           title="Clicking this button will automatically fork this project so you can edit the file"
                           href="/davidstutz/bootstrap-multiselect/edit/master/js/bootstrap-multiselect.js"
                           data-method="post" rel="nofollow">Edit</a>
                  <a href="/davidstutz/bootstrap-multiselect/raw/master/js/bootstrap-multiselect.js" class="button minibutton " id="raw-url">Raw</a>
                    <a href="/davidstutz/bootstrap-multiselect/blame/master/js/bootstrap-multiselect.js" class="button minibutton ">Blame</a>
                  <a href="/davidstutz/bootstrap-multiselect/commits/master/js/bootstrap-multiselect.js" class="button minibutton " rel="nofollow">History</a>
                </div><!-- /.button-group -->
              </div><!-- /.actions -->

            </div>
                <div class="data type-javascript js-blob-data">
      <table cellpadding="0" cellspacing="0" class="lines">
        <tr>
          <td>
            <pre class="line_numbers"><span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>
<span id="L302" rel="#L302">302</span>
<span id="L303" rel="#L303">303</span>
<span id="L304" rel="#L304">304</span>
<span id="L305" rel="#L305">305</span>
<span id="L306" rel="#L306">306</span>
<span id="L307" rel="#L307">307</span>
<span id="L308" rel="#L308">308</span>
<span id="L309" rel="#L309">309</span>
<span id="L310" rel="#L310">310</span>
<span id="L311" rel="#L311">311</span>
<span id="L312" rel="#L312">312</span>
<span id="L313" rel="#L313">313</span>
<span id="L314" rel="#L314">314</span>
<span id="L315" rel="#L315">315</span>
<span id="L316" rel="#L316">316</span>
<span id="L317" rel="#L317">317</span>
<span id="L318" rel="#L318">318</span>
<span id="L319" rel="#L319">319</span>
<span id="L320" rel="#L320">320</span>
<span id="L321" rel="#L321">321</span>
<span id="L322" rel="#L322">322</span>
<span id="L323" rel="#L323">323</span>
<span id="L324" rel="#L324">324</span>
<span id="L325" rel="#L325">325</span>
<span id="L326" rel="#L326">326</span>
<span id="L327" rel="#L327">327</span>
<span id="L328" rel="#L328">328</span>
<span id="L329" rel="#L329">329</span>
<span id="L330" rel="#L330">330</span>
<span id="L331" rel="#L331">331</span>
<span id="L332" rel="#L332">332</span>
<span id="L333" rel="#L333">333</span>
<span id="L334" rel="#L334">334</span>
<span id="L335" rel="#L335">335</span>
<span id="L336" rel="#L336">336</span>
<span id="L337" rel="#L337">337</span>
<span id="L338" rel="#L338">338</span>
<span id="L339" rel="#L339">339</span>
<span id="L340" rel="#L340">340</span>
<span id="L341" rel="#L341">341</span>
</pre>
          </td>
          <td width="100%">
                  <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/**</span></div><div class='line' id='LC2'><span class="cm"> * bootstrap-multiselect.js 1.0.0</span></div><div class='line' id='LC3'><span class="cm"> * https://github.com/davidstutz/bootstrap-multiselect</span></div><div class='line' id='LC4'><span class="cm"> *</span></div><div class='line' id='LC5'><span class="cm"> * Copyright 2012 David Stutz</span></div><div class='line' id='LC6'><span class="cm"> *</span></div><div class='line' id='LC7'><span class="cm"> * Licensed under the Apache License, Version 2.0 (the &quot;License&quot;);</span></div><div class='line' id='LC8'><span class="cm"> * you may not use this file except in compliance with the License.</span></div><div class='line' id='LC9'><span class="cm"> * You may obtain a copy of the License at</span></div><div class='line' id='LC10'><span class="cm"> *</span></div><div class='line' id='LC11'><span class="cm"> * http://www.apache.org/licenses/LICENSE-2.0</span></div><div class='line' id='LC12'><span class="cm"> *</span></div><div class='line' id='LC13'><span class="cm"> * Unless required by applicable law or agreed to in writing, software</span></div><div class='line' id='LC14'><span class="cm"> * distributed under the License is distributed on an &quot;AS IS&quot; BASIS,</span></div><div class='line' id='LC15'><span class="cm"> * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.</span></div><div class='line' id='LC16'><span class="cm"> * See the License for the specific language governing permissions and</span></div><div class='line' id='LC17'><span class="cm"> * limitations under the License.</span></div><div class='line' id='LC18'><span class="cm"> */</span></div><div class='line' id='LC19'><span class="o">!</span><span class="kd">function</span> <span class="p">(</span><span class="nx">$</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC20'><br/></div><div class='line' id='LC21'>	<span class="s2">&quot;use strict&quot;</span><span class="p">;</span> <span class="c1">// jshint ;_;</span></div><div class='line' id='LC22'><br/></div><div class='line' id='LC23'>	<span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">ko</span> <span class="o">!=</span> <span class="s1">&#39;undefined&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">ko</span><span class="p">.</span><span class="nx">bindingHandlers</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">ko</span><span class="p">.</span><span class="nx">bindingHandlers</span><span class="p">.</span><span class="nx">multiselect</span><span class="p">){</span></div><div class='line' id='LC24'>		<span class="nx">ko</span><span class="p">.</span><span class="nx">bindingHandlers</span><span class="p">.</span><span class="nx">multiselect</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC25'>			<span class="nx">init</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">element</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC26'>				<span class="kd">var</span> <span class="nx">ms</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">element</span><span class="p">).</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;multiselect&#39;</span><span class="p">);</span></div><div class='line' id='LC27'><br/></div><div class='line' id='LC28'>				<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">ms</span><span class="p">)</span></div><div class='line' id='LC29'>					<span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s2">&quot;Bootstrap-multiselect&#39;s multiselect() has to be called on element before applying the Knockout View model!&quot;</span><span class="p">);</span></div><div class='line' id='LC30'><br/></div><div class='line' id='LC31'>				<span class="kd">var</span> <span class="nx">prev</span> <span class="o">=</span> <span class="nx">ms</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">onChange</span><span class="p">;</span></div><div class='line' id='LC32'><br/></div><div class='line' id='LC33'>				<span class="nx">ms</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">onChange</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">option</span><span class="p">,</span> <span class="nx">checked</span><span class="p">){</span></div><div class='line' id='LC34'>					<span class="c1">// We dont want to refresh the multiselect since it would delete / recreate all items</span></div><div class='line' id='LC35'>					<span class="nx">$</span><span class="p">(</span><span class="nx">element</span><span class="p">).</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;blockRefresh&#39;</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC36'><br/></div><div class='line' id='LC37'>					<span class="c1">// Force the binding to be updated by triggering the change event on the select element</span></div><div class='line' id='LC38'>					<span class="nx">$</span><span class="p">(</span><span class="nx">element</span><span class="p">).</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;change&#39;</span><span class="p">);</span></div><div class='line' id='LC39'><br/></div><div class='line' id='LC40'>					<span class="c1">// Call any defined change handler</span></div><div class='line' id='LC41'>					<span class="k">return</span> <span class="nx">prev</span><span class="p">(</span><span class="nx">option</span><span class="p">,</span> <span class="nx">checked</span><span class="p">);</span></div><div class='line' id='LC42'>				<span class="p">}</span></div><div class='line' id='LC43'>			<span class="p">},</span></div><div class='line' id='LC44'>			<span class="nx">update</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">element</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC45'>				<span class="kd">var</span> <span class="nx">blockRefresh</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">element</span><span class="p">).</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;blockRefresh&#39;</span><span class="p">)</span> <span class="o">||</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC46'>				<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">blockRefresh</span><span class="p">)</span> <span class="p">{</span> <span class="nx">$</span><span class="p">(</span><span class="nx">element</span><span class="p">).</span><span class="nx">multiselect</span><span class="p">(</span><span class="s2">&quot;rebuild&quot;</span><span class="p">);</span> <span class="p">}</span></div><div class='line' id='LC47'>				<span class="nx">$</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="nx">element</span><span class="p">,</span> <span class="s1">&#39;blockRefresh&#39;</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC48'>			<span class="p">}</span></div><div class='line' id='LC49'>		<span class="p">};</span></div><div class='line' id='LC50'>	<span class="p">}</span></div><div class='line' id='LC51'><br/></div><div class='line' id='LC52'>	<span class="kd">function</span> <span class="nx">Multiselect</span><span class="p">(</span><span class="nx">select</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC53'><br/></div><div class='line' id='LC54'>		<span class="k">this</span><span class="p">.</span><span class="nx">options</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">getOptions</span><span class="p">(</span><span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC55'>		<span class="k">this</span><span class="p">.</span><span class="nx">$select</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">select</span><span class="p">);</span></div><div class='line' id='LC56'><br/></div><div class='line' id='LC57'>		<span class="c1">// Manually add the multiple attribute, if its not already set.</span></div><div class='line' id='LC58'>		<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">$select</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;multiple&#39;</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC59'>			<span class="k">this</span><span class="p">.</span><span class="nx">$select</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;multiple&#39;</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC60'>		<span class="p">}</span></div><div class='line' id='LC61'><br/></div><div class='line' id='LC62'>		<span class="k">this</span><span class="p">.</span><span class="nx">$container</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">buttonContainer</span><span class="p">)</span></div><div class='line' id='LC63'>			<span class="p">.</span><span class="nx">append</span><span class="p">(</span><span class="s1">&#39;&lt;button type=&quot;button&quot; class=&quot;multiselect dropdown-toggle &#39;</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">buttonClass</span> <span class="o">+</span> <span class="s1">&#39;&quot; data-toggle=&quot;dropdown&quot;&gt;&#39;</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">buttonText</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="s1">&#39;option:selected&#39;</span><span class="p">,</span> <span class="nx">select</span><span class="p">),</span> <span class="k">this</span><span class="p">.</span><span class="nx">$select</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;&lt;/button&gt;&#39;</span><span class="p">)</span></div><div class='line' id='LC64'>			<span class="p">.</span><span class="nx">append</span><span class="p">(</span><span class="s1">&#39;&lt;ul class=&quot;dropdown-menu&quot;&gt;&lt;/ul&gt;&#39;</span><span class="p">);</span></div><div class='line' id='LC65'><br/></div><div class='line' id='LC66'>		<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">buttonWidth</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC67'>			<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;button&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">$container</span><span class="p">).</span><span class="nx">css</span><span class="p">({</span></div><div class='line' id='LC68'>				<span class="s1">&#39;width&#39;</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">buttonWidth</span></div><div class='line' id='LC69'>			<span class="p">});</span></div><div class='line' id='LC70'>		<span class="p">}</span></div><div class='line' id='LC71'><br/></div><div class='line' id='LC72'>		<span class="c1">// Set max height of dropdown menu to activate auto scrollbar.</span></div><div class='line' id='LC73'>		<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">maxHeight</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC74'>			<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;ul&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">$container</span><span class="p">).</span><span class="nx">css</span><span class="p">({</span></div><div class='line' id='LC75'>				<span class="s1">&#39;max-height&#39;</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">maxHeight</span> <span class="o">+</span> <span class="s1">&#39;px&#39;</span><span class="p">,</span></div><div class='line' id='LC76'>				<span class="s1">&#39;overflow-y&#39;</span><span class="o">:</span> <span class="s1">&#39;auto&#39;</span><span class="p">,</span></div><div class='line' id='LC77'>				<span class="s1">&#39;overflow-x&#39;</span><span class="o">:</span> <span class="s1">&#39;hidden&#39;</span></div><div class='line' id='LC78'>			<span class="p">});</span></div><div class='line' id='LC79'>		<span class="p">}</span></div><div class='line' id='LC80'><br/></div><div class='line' id='LC81'>		<span class="k">this</span><span class="p">.</span><span class="nx">buildDropdown</span><span class="p">();</span></div><div class='line' id='LC82'><br/></div><div class='line' id='LC83'>		<span class="k">this</span><span class="p">.</span><span class="nx">$select</span></div><div class='line' id='LC84'>			<span class="p">.</span><span class="nx">hide</span><span class="p">()</span></div><div class='line' id='LC85'>			<span class="p">.</span><span class="nx">after</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">$container</span><span class="p">);</span></div><div class='line' id='LC86'>	<span class="p">};</span></div><div class='line' id='LC87'><br/></div><div class='line' id='LC88'>	<span class="nx">Multiselect</span><span class="p">.</span><span class="nx">prototype</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC89'><br/></div><div class='line' id='LC90'>		<span class="nx">defaults</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC91'>			<span class="c1">// Default text function will either print &#39;None selected&#39; in case no option is selected,</span></div><div class='line' id='LC92'>			<span class="c1">// or a list of the selected options up to a length of 3 selected options.</span></div><div class='line' id='LC93'>			<span class="c1">// If more than 3 options are selected, the number of selected options is printed.</span></div><div class='line' id='LC94'>			<span class="nx">buttonText</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">,</span> <span class="nx">select</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC95'>				<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">length</span> <span class="o">==</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC96'>					<span class="k">return</span> <span class="s1">&#39;None selected &lt;b class=&quot;caret&quot;&gt;&lt;/b&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC97'>				<span class="p">}</span></div><div class='line' id='LC98'>				<span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">3</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC99'>					<span class="k">return</span> <span class="nx">options</span><span class="p">.</span><span class="nx">length</span> <span class="o">+</span> <span class="s1">&#39; selected &lt;b class=&quot;caret&quot;&gt;&lt;/b&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC100'>				<span class="p">}</span></div><div class='line' id='LC101'>				<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC102'>					<span class="kd">var</span> <span class="nx">selected</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC103'>					<span class="nx">options</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC104'>						<span class="nx">selected</span> <span class="o">+=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">text</span><span class="p">()</span> <span class="o">+</span> <span class="s1">&#39;, &#39;</span><span class="p">;</span></div><div class='line' id='LC105'>					<span class="p">});</span></div><div class='line' id='LC106'>					<span class="k">return</span> <span class="nx">selected</span><span class="p">.</span><span class="nx">substr</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nx">selected</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span><span class="mi">2</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39; &lt;b class=&quot;caret&quot;&gt;&lt;/b&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC107'>				<span class="p">}</span></div><div class='line' id='LC108'>			<span class="p">},</span></div><div class='line' id='LC109'>			<span class="c1">// Is triggered on change of the selected options.</span></div><div class='line' id='LC110'>			<span class="nx">onChange</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">option</span><span class="p">,</span> <span class="nx">checked</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC111'><br/></div><div class='line' id='LC112'>			<span class="p">},</span></div><div class='line' id='LC113'>			<span class="nx">buttonClass</span><span class="o">:</span> <span class="s1">&#39;btn&#39;</span><span class="p">,</span></div><div class='line' id='LC114'>			<span class="nx">selectedClass</span><span class="o">:</span> <span class="s1">&#39;active&#39;</span><span class="p">,</span></div><div class='line' id='LC115'>			<span class="nx">buttonWidth</span><span class="o">:</span> <span class="s1">&#39;auto&#39;</span><span class="p">,</span></div><div class='line' id='LC116'>			<span class="nx">buttonContainer</span><span class="o">:</span> <span class="s1">&#39;&lt;div class=&quot;btn-group&quot; /&gt;&#39;</span><span class="p">,</span></div><div class='line' id='LC117'>			<span class="c1">// Maximum height of the dropdown menu.</span></div><div class='line' id='LC118'>			<span class="c1">// If maximum height is exceeded a scrollbar will be displayed.</span></div><div class='line' id='LC119'>			<span class="nx">maxHeight</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC120'>		<span class="p">},</span></div><div class='line' id='LC121'><br/></div><div class='line' id='LC122'>		<span class="nx">constructor</span><span class="o">:</span> <span class="nx">Multiselect</span><span class="p">,</span></div><div class='line' id='LC123'><br/></div><div class='line' id='LC124'>		<span class="c1">// Will build an dropdown element for the given option.</span></div><div class='line' id='LC125'>		<span class="nx">createOptionValue</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">element</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC126'>			<span class="k">if</span> <span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="nx">element</span><span class="p">).</span><span class="nx">is</span><span class="p">(</span><span class="s1">&#39;:selected&#39;</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC127'>				<span class="nx">$</span><span class="p">(</span><span class="nx">element</span><span class="p">).</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;selected&#39;</span><span class="p">,</span> <span class="s1">&#39;selected&#39;</span><span class="p">);</span></div><div class='line' id='LC128'>				<span class="nx">$</span><span class="p">(</span><span class="nx">element</span><span class="p">).</span><span class="nx">prop</span><span class="p">(</span><span class="s1">&#39;selected&#39;</span><span class="p">,</span> <span class="s1">&#39;selected&#39;</span><span class="p">);</span></div><div class='line' id='LC129'>			<span class="p">}</span></div><div class='line' id='LC130'><br/></div><div class='line' id='LC131'>			<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;ul&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">$container</span><span class="p">).</span><span class="nx">append</span><span class="p">(</span><span class="s1">&#39;&lt;li&gt;&lt;a href=&quot;javascript:void(0);&quot; style=&quot;padding:0;&quot;&gt;&lt;label style=&quot;margin:0;padding:3px 20px 3px 20px;height:100%;cursor:pointer;&quot;&gt;&lt;input style=&quot;margin-bottom:5px;&quot; type=&quot;checkbox&quot; value=&quot;&#39;</span> <span class="o">+</span> <span class="nx">$</span><span class="p">(</span><span class="nx">element</span><span class="p">).</span><span class="nx">val</span><span class="p">()</span> <span class="o">+</span> <span class="s1">&#39;&quot; /&gt; &#39;</span> <span class="o">+</span> <span class="nx">$</span><span class="p">(</span><span class="nx">element</span><span class="p">).</span><span class="nx">text</span><span class="p">()</span> <span class="o">+</span> <span class="s1">&#39;&lt;/label&gt;&lt;/a&gt;&lt;/li&gt;&#39;</span><span class="p">);</span></div><div class='line' id='LC132'><br/></div><div class='line' id='LC133'>			<span class="kd">var</span> <span class="nx">selected</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">element</span><span class="p">).</span><span class="nx">prop</span><span class="p">(</span><span class="s1">&#39;selected&#39;</span><span class="p">)</span> <span class="o">||</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC134'>			<span class="kd">var</span> <span class="nx">checkbox</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;ul li input[value=&quot;&#39;</span> <span class="o">+</span> <span class="nx">$</span><span class="p">(</span><span class="nx">element</span><span class="p">).</span><span class="nx">val</span><span class="p">()</span> <span class="o">+</span> <span class="s1">&#39;&quot;]&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">$container</span><span class="p">);</span></div><div class='line' id='LC135'><br/></div><div class='line' id='LC136'>			<span class="k">if</span> <span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="nx">element</span><span class="p">).</span><span class="nx">is</span><span class="p">(</span><span class="s1">&#39;:disabled&#39;</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC137'>				<span class="nx">checkbox</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;disabled&#39;</span><span class="p">,</span> <span class="s1">&#39;disabled&#39;</span><span class="p">).</span><span class="nx">prop</span><span class="p">(</span><span class="s1">&#39;disabled&#39;</span><span class="p">,</span> <span class="s1">&#39;disabled&#39;</span><span class="p">).</span><span class="nx">parents</span><span class="p">(</span><span class="s1">&#39;li&#39;</span><span class="p">).</span><span class="nx">addClass</span><span class="p">(</span><span class="s1">&#39;disabled&#39;</span><span class="p">)</span></div><div class='line' id='LC138'>			<span class="p">}</span></div><div class='line' id='LC139'><br/></div><div class='line' id='LC140'>			<span class="nx">checkbox</span><span class="p">.</span><span class="nx">prop</span><span class="p">(</span><span class="s1">&#39;checked&#39;</span><span class="p">,</span> <span class="nx">selected</span><span class="p">);</span></div><div class='line' id='LC141'><br/></div><div class='line' id='LC142'>			<span class="k">if</span> <span class="p">(</span><span class="nx">selected</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">selectedClass</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC143'>				<span class="nx">checkbox</span><span class="p">.</span><span class="nx">parents</span><span class="p">(</span><span class="s1">&#39;li&#39;</span><span class="p">).</span><span class="nx">addClass</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">selectedClass</span><span class="p">);</span></div><div class='line' id='LC144'>			<span class="p">}</span></div><div class='line' id='LC145'>		<span class="p">},</span></div><div class='line' id='LC146'><br/></div><div class='line' id='LC147'>		<span class="c1">// Build the dropdown and bind event handling.</span></div><div class='line' id='LC148'>		<span class="nx">buildDropdown</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC149'><br/></div><div class='line' id='LC150'>			<span class="k">if</span> <span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="s1">&#39;optgroup&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">$select</span><span class="p">).</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC151'>				<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;optgroup&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">$select</span><span class="p">).</span><span class="nx">each</span><span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">proxy</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">index</span><span class="p">,</span> <span class="nx">group</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC152'>					<span class="kd">var</span> <span class="nx">groupName</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">group</span><span class="p">).</span><span class="nx">prop</span><span class="p">(</span><span class="s1">&#39;label&#39;</span><span class="p">);</span></div><div class='line' id='LC153'>					<span class="c1">// Add a header for the group.</span></div><div class='line' id='LC154'>					<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;ul&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">$container</span><span class="p">).</span><span class="nx">append</span><span class="p">(</span><span class="s1">&#39;&lt;li&gt;&lt;label style=&quot;margin:0;padding:3px 20px 3px 20px;height:100%;&quot; class=&quot;multiselect-group&quot;&gt; &#39;</span> <span class="o">+</span> <span class="nx">groupName</span> <span class="o">+</span> <span class="s1">&#39;&lt;/label&gt;&lt;/li&gt;&#39;</span><span class="p">);</span></div><div class='line' id='LC155'><br/></div><div class='line' id='LC156'>					<span class="c1">// Add the options of the group.</span></div><div class='line' id='LC157'>					<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;option&#39;</span><span class="p">,</span> <span class="nx">group</span><span class="p">).</span><span class="nx">each</span><span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">proxy</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">index</span><span class="p">,</span> <span class="nx">element</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC158'>						<span class="k">this</span><span class="p">.</span><span class="nx">createOptionValue</span><span class="p">(</span><span class="nx">element</span><span class="p">);</span></div><div class='line' id='LC159'>					<span class="p">},</span> <span class="k">this</span><span class="p">));</span></div><div class='line' id='LC160'>				<span class="p">},</span> <span class="k">this</span><span class="p">));</span></div><div class='line' id='LC161'>			<span class="p">}</span></div><div class='line' id='LC162'>			<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC163'>				<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;option&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">$select</span><span class="p">).</span><span class="nx">each</span><span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">proxy</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">index</span><span class="p">,</span> <span class="nx">element</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC164'>					<span class="k">this</span><span class="p">.</span><span class="nx">createOptionValue</span><span class="p">(</span><span class="nx">element</span><span class="p">);</span></div><div class='line' id='LC165'>				<span class="p">},</span> <span class="k">this</span><span class="p">));</span></div><div class='line' id='LC166'>			<span class="p">}</span></div><div class='line' id='LC167'><br/></div><div class='line' id='LC168'>			<span class="c1">// Bind the change event on the dropdown elements.</span></div><div class='line' id='LC169'>			<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;ul li input[type=&quot;checkbox&quot;]&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">$container</span><span class="p">).</span><span class="nx">on</span><span class="p">(</span><span class="s1">&#39;change&#39;</span><span class="p">,</span> <span class="nx">$</span><span class="p">.</span><span class="nx">proxy</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC170'>				<span class="kd">var</span> <span class="nx">checked</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">event</span><span class="p">.</span><span class="nx">target</span><span class="p">).</span><span class="nx">prop</span><span class="p">(</span><span class="s1">&#39;checked&#39;</span><span class="p">)</span> <span class="o">||</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC171'><br/></div><div class='line' id='LC172'>				<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">selectedClass</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC173'>					<span class="k">if</span> <span class="p">(</span><span class="nx">checked</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC174'>						<span class="nx">$</span><span class="p">(</span><span class="nx">event</span><span class="p">.</span><span class="nx">target</span><span class="p">).</span><span class="nx">parents</span><span class="p">(</span><span class="s1">&#39;li&#39;</span><span class="p">).</span><span class="nx">addClass</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">selectedClass</span><span class="p">);</span></div><div class='line' id='LC175'>					<span class="p">}</span></div><div class='line' id='LC176'>					<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC177'>						<span class="nx">$</span><span class="p">(</span><span class="nx">event</span><span class="p">.</span><span class="nx">target</span><span class="p">).</span><span class="nx">parents</span><span class="p">(</span><span class="s1">&#39;li&#39;</span><span class="p">).</span><span class="nx">removeClass</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">selectedClass</span><span class="p">);</span></div><div class='line' id='LC178'>					<span class="p">}</span></div><div class='line' id='LC179'>				<span class="p">}</span></div><div class='line' id='LC180'><br/></div><div class='line' id='LC181'>				<span class="kd">var</span> <span class="nx">option</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;option[value=&quot;&#39;</span> <span class="o">+</span> <span class="nx">$</span><span class="p">(</span><span class="nx">event</span><span class="p">.</span><span class="nx">target</span><span class="p">).</span><span class="nx">val</span><span class="p">()</span> <span class="o">+</span> <span class="s1">&#39;&quot;]&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">$select</span><span class="p">);</span></div><div class='line' id='LC182'><br/></div><div class='line' id='LC183'>				<span class="k">if</span> <span class="p">(</span><span class="nx">checked</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC184'>					<span class="nx">option</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;selected&#39;</span><span class="p">,</span> <span class="s1">&#39;selected&#39;</span><span class="p">);</span></div><div class='line' id='LC185'>					<span class="nx">option</span><span class="p">.</span><span class="nx">prop</span><span class="p">(</span><span class="s1">&#39;selected&#39;</span><span class="p">,</span> <span class="s1">&#39;selected&#39;</span><span class="p">);</span></div><div class='line' id='LC186'>				<span class="p">}</span></div><div class='line' id='LC187'>				<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC188'>					<span class="nx">option</span><span class="p">.</span><span class="nx">removeAttr</span><span class="p">(</span><span class="s1">&#39;selected&#39;</span><span class="p">);</span></div><div class='line' id='LC189'>				<span class="p">}</span></div><div class='line' id='LC190'><br/></div><div class='line' id='LC191'>				<span class="kd">var</span> <span class="nx">options</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;option:selected&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">$select</span><span class="p">);</span></div><div class='line' id='LC192'>				<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;button&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">$container</span><span class="p">).</span><span class="nx">html</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">buttonText</span><span class="p">(</span><span class="nx">options</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">$select</span><span class="p">));</span></div><div class='line' id='LC193'><br/></div><div class='line' id='LC194'>				<span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">onChange</span><span class="p">(</span><span class="nx">option</span><span class="p">,</span> <span class="nx">checked</span><span class="p">);</span></div><div class='line' id='LC195'>			<span class="p">},</span> <span class="k">this</span><span class="p">));</span></div><div class='line' id='LC196'><br/></div><div class='line' id='LC197'>			<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;ul li a&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">$container</span><span class="p">).</span><span class="nx">on</span><span class="p">(</span><span class="s1">&#39;click&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC198'>				<span class="nx">event</span><span class="p">.</span><span class="nx">stopPropagation</span><span class="p">();</span></div><div class='line' id='LC199'>			<span class="p">});</span></div><div class='line' id='LC200'><br/></div><div class='line' id='LC201'>			<span class="k">this</span><span class="p">.</span><span class="nx">$container</span><span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="s1">&#39;keydown&#39;</span><span class="p">,</span> <span class="nx">$</span><span class="p">.</span><span class="nx">proxy</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC202'>				<span class="k">if</span> <span class="p">((</span><span class="nx">event</span><span class="p">.</span><span class="nx">keyCode</span> <span class="o">==</span> <span class="mi">9</span> <span class="o">||</span> <span class="nx">event</span><span class="p">.</span><span class="nx">keyCode</span> <span class="o">==</span> <span class="mi">27</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">$container</span><span class="p">.</span><span class="nx">hasClass</span><span class="p">(</span><span class="s1">&#39;open&#39;</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC203'>					<span class="c1">// close on tab or escape</span></div><div class='line' id='LC204'>					<span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">$container</span><span class="p">).</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;.multiselect.dropdown-toggle&quot;</span><span class="p">).</span><span class="nx">click</span><span class="p">();</span></div><div class='line' id='LC205'>				<span class="p">}</span></div><div class='line' id='LC206'>				<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC207'>					<span class="kd">var</span> <span class="nx">$items</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">$container</span><span class="p">).</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;li:not(.divider):visible a&quot;</span><span class="p">);</span></div><div class='line' id='LC208'><br/></div><div class='line' id='LC209'>					<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">$items</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC210'>						<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC211'>					<span class="p">}</span></div><div class='line' id='LC212'><br/></div><div class='line' id='LC213'>					<span class="kd">var</span> <span class="nx">index</span> <span class="o">=</span> <span class="nx">$items</span><span class="p">.</span><span class="nx">index</span><span class="p">(</span><span class="nx">$items</span><span class="p">.</span><span class="nx">filter</span><span class="p">(</span><span class="s1">&#39;:focus&#39;</span><span class="p">));</span></div><div class='line' id='LC214'><br/></div><div class='line' id='LC215'>					<span class="k">if</span> <span class="p">(</span><span class="nx">event</span><span class="p">.</span><span class="nx">keyCode</span> <span class="o">==</span> <span class="mi">38</span> <span class="o">&amp;&amp;</span> <span class="nx">index</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span>							<span class="c1">// up</span></div><div class='line' id='LC216'>						<span class="nx">index</span><span class="o">--</span><span class="p">;</span></div><div class='line' id='LC217'>					<span class="p">}</span></div><div class='line' id='LC218'>					<span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">event</span><span class="p">.</span><span class="nx">keyCode</span> <span class="o">==</span> <span class="mi">40</span> <span class="o">&amp;&amp;</span> <span class="nx">index</span> <span class="o">&lt;</span> <span class="nx">$items</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span>	<span class="c1">// down</span></div><div class='line' id='LC219'>						<span class="nx">index</span><span class="o">++</span><span class="p">;</span></div><div class='line' id='LC220'>					<span class="p">}</span></div><div class='line' id='LC221'>					<span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="o">!~</span><span class="nx">index</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC222'>						<span class="nx">index</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC223'>					<span class="p">}</span></div><div class='line' id='LC224'><br/></div><div class='line' id='LC225'>					<span class="kd">var</span> <span class="nx">$current</span> <span class="o">=</span> <span class="nx">$items</span><span class="p">.</span><span class="nx">eq</span><span class="p">(</span><span class="nx">index</span><span class="p">);</span></div><div class='line' id='LC226'><br/></div><div class='line' id='LC227'>					<span class="nx">$current</span><span class="p">.</span><span class="nx">focus</span><span class="p">();</span></div><div class='line' id='LC228'><br/></div><div class='line' id='LC229'>					<span class="c1">// override style for items in li:active</span></div><div class='line' id='LC230'>					<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">selectedClass</span> <span class="o">==</span> <span class="s2">&quot;active&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC231'>						<span class="nx">$current</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s2">&quot;outline&quot;</span><span class="p">,</span> <span class="s2">&quot;thin dotted #333&quot;</span><span class="p">).</span><span class="nx">css</span><span class="p">(</span><span class="s2">&quot;outline&quot;</span><span class="p">,</span> <span class="s2">&quot;5px auto -webkit-focus-ring-color&quot;</span><span class="p">);</span></div><div class='line' id='LC232'><br/></div><div class='line' id='LC233'>						<span class="nx">$items</span><span class="p">.</span><span class="nx">not</span><span class="p">(</span><span class="nx">$current</span><span class="p">).</span><span class="nx">css</span><span class="p">(</span><span class="s2">&quot;outline&quot;</span><span class="p">,</span> <span class="s2">&quot;&quot;</span><span class="p">);</span></div><div class='line' id='LC234'>					<span class="p">}</span></div><div class='line' id='LC235'><br/></div><div class='line' id='LC236'>					<span class="k">if</span> <span class="p">(</span><span class="nx">event</span><span class="p">.</span><span class="nx">keyCode</span> <span class="o">==</span> <span class="mi">32</span> <span class="o">||</span> <span class="nx">event</span><span class="p">.</span><span class="nx">keyCode</span> <span class="o">==</span> <span class="mi">13</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC237'>						<span class="kd">var</span> <span class="nx">$checkbox</span> <span class="o">=</span> <span class="nx">$current</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;input[type=&quot;checkbox&quot;]&#39;</span><span class="p">);</span></div><div class='line' id='LC238'><br/></div><div class='line' id='LC239'>						<span class="nx">$checkbox</span><span class="p">.</span><span class="nx">prop</span><span class="p">(</span><span class="s2">&quot;checked&quot;</span><span class="p">,</span> <span class="o">!</span><span class="nx">$checkbox</span><span class="p">.</span><span class="nx">prop</span><span class="p">(</span><span class="s2">&quot;checked&quot;</span><span class="p">));</span></div><div class='line' id='LC240'>						<span class="nx">$checkbox</span><span class="p">.</span><span class="nx">change</span><span class="p">();</span></div><div class='line' id='LC241'>					<span class="p">}</span></div><div class='line' id='LC242'><br/></div><div class='line' id='LC243'>					<span class="nx">event</span><span class="p">.</span><span class="nx">stopPropagation</span><span class="p">();</span></div><div class='line' id='LC244'>					<span class="nx">event</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">();</span></div><div class='line' id='LC245'>				<span class="p">}</span></div><div class='line' id='LC246'>			<span class="p">},</span> <span class="k">this</span><span class="p">));</span></div><div class='line' id='LC247'>		<span class="p">},</span></div><div class='line' id='LC248'><br/></div><div class='line' id='LC249'>		<span class="c1">// Destroy - unbind - the plugin.</span></div><div class='line' id='LC250'>		<span class="nx">destroy</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC251'>			<span class="k">this</span><span class="p">.</span><span class="nx">$container</span><span class="p">.</span><span class="nx">remove</span><span class="p">();</span></div><div class='line' id='LC252'>			<span class="k">this</span><span class="p">.</span><span class="nx">$select</span><span class="p">.</span><span class="nx">show</span><span class="p">();</span></div><div class='line' id='LC253'>		<span class="p">},</span></div><div class='line' id='LC254'><br/></div><div class='line' id='LC255'>		<span class="c1">// Refreshs the checked options based on the current state of the select.</span></div><div class='line' id='LC256'>		<span class="nx">refresh</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC257'>			<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;option&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">$select</span><span class="p">).</span><span class="nx">each</span><span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">proxy</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">index</span><span class="p">,</span> <span class="nx">element</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC258'>				<span class="k">if</span> <span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="nx">element</span><span class="p">).</span><span class="nx">is</span><span class="p">(</span><span class="s1">&#39;:selected&#39;</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC259'>					<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;ul li input[value=&quot;&#39;</span> <span class="o">+</span> <span class="nx">$</span><span class="p">(</span><span class="nx">element</span><span class="p">).</span><span class="nx">val</span><span class="p">()</span> <span class="o">+</span> <span class="s1">&#39;&quot;]&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">$container</span><span class="p">).</span><span class="nx">prop</span><span class="p">(</span><span class="s1">&#39;checked&#39;</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC260'><br/></div><div class='line' id='LC261'>					<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">selectedClass</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC262'>						<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;ul li input[value=&quot;&#39;</span> <span class="o">+</span> <span class="nx">$</span><span class="p">(</span><span class="nx">element</span><span class="p">).</span><span class="nx">val</span><span class="p">()</span> <span class="o">+</span> <span class="s1">&#39;&quot;]&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">$container</span><span class="p">).</span><span class="nx">parents</span><span class="p">(</span><span class="s1">&#39;li&#39;</span><span class="p">).</span><span class="nx">addClass</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">selectedClass</span><span class="p">);</span></div><div class='line' id='LC263'>					<span class="p">}</span></div><div class='line' id='LC264'>				<span class="p">}</span></div><div class='line' id='LC265'>				<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC266'>					<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;ul li input[value=&quot;&#39;</span> <span class="o">+</span> <span class="nx">$</span><span class="p">(</span><span class="nx">element</span><span class="p">).</span><span class="nx">val</span><span class="p">()</span> <span class="o">+</span> <span class="s1">&#39;&quot;]&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">$container</span><span class="p">).</span><span class="nx">prop</span><span class="p">(</span><span class="s1">&#39;checked&#39;</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC267'><br/></div><div class='line' id='LC268'>					<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">selectedClass</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC269'>						<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;ul li input[value=&quot;&#39;</span> <span class="o">+</span> <span class="nx">$</span><span class="p">(</span><span class="nx">element</span><span class="p">).</span><span class="nx">val</span><span class="p">()</span> <span class="o">+</span> <span class="s1">&#39;&quot;]&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">$container</span><span class="p">).</span><span class="nx">parents</span><span class="p">(</span><span class="s1">&#39;li&#39;</span><span class="p">).</span><span class="nx">removeClass</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">selectedClass</span><span class="p">);</span></div><div class='line' id='LC270'>					<span class="p">}</span></div><div class='line' id='LC271'>				<span class="p">}</span></div><div class='line' id='LC272'>			<span class="p">},</span> <span class="k">this</span><span class="p">));</span></div><div class='line' id='LC273'><br/></div><div class='line' id='LC274'>			<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;button&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">$container</span><span class="p">).</span><span class="nx">html</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">buttonText</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="s1">&#39;option:selected&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">$select</span><span class="p">),</span> <span class="k">this</span><span class="p">.</span><span class="nx">$select</span><span class="p">));</span></div><div class='line' id='LC275'>		<span class="p">},</span></div><div class='line' id='LC276'><br/></div><div class='line' id='LC277'>		<span class="c1">// Select an option by its value.</span></div><div class='line' id='LC278'>		<span class="nx">select</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC279'>			<span class="kd">var</span> <span class="nx">option</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;option[value=&quot;&#39;</span> <span class="o">+</span> <span class="nx">value</span> <span class="o">+</span> <span class="s1">&#39;&quot;]&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">$select</span><span class="p">);</span></div><div class='line' id='LC280'>			<span class="kd">var</span> <span class="nx">checkbox</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;ul li input[value=&quot;&#39;</span> <span class="o">+</span> <span class="nx">value</span> <span class="o">+</span> <span class="s1">&#39;&quot;]&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">$container</span><span class="p">);</span></div><div class='line' id='LC281'><br/></div><div class='line' id='LC282'>			<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">selectedClass</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC283'>				<span class="nx">checkbox</span><span class="p">.</span><span class="nx">parents</span><span class="p">(</span><span class="s1">&#39;li&#39;</span><span class="p">).</span><span class="nx">addClass</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">selectedClass</span><span class="p">);</span></div><div class='line' id='LC284'>			<span class="p">}</span></div><div class='line' id='LC285'><br/></div><div class='line' id='LC286'>			<span class="nx">checkbox</span><span class="p">.</span><span class="nx">prop</span><span class="p">(</span><span class="s1">&#39;checked&#39;</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC287'><br/></div><div class='line' id='LC288'>			<span class="nx">option</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;selected&#39;</span><span class="p">,</span> <span class="s1">&#39;selected&#39;</span><span class="p">);</span></div><div class='line' id='LC289'>			<span class="nx">option</span><span class="p">.</span><span class="nx">prop</span><span class="p">(</span><span class="s1">&#39;selected&#39;</span><span class="p">,</span> <span class="s1">&#39;selected&#39;</span><span class="p">);</span></div><div class='line' id='LC290'><br/></div><div class='line' id='LC291'>			<span class="kd">var</span> <span class="nx">options</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;option:selected&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">$select</span><span class="p">);</span></div><div class='line' id='LC292'>			<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;button&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">$container</span><span class="p">).</span><span class="nx">html</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">buttonText</span><span class="p">(</span><span class="nx">options</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">$select</span><span class="p">));</span></div><div class='line' id='LC293'>		<span class="p">},</span></div><div class='line' id='LC294'><br/></div><div class='line' id='LC295'>		<span class="c1">// Deselect an option by its value.</span></div><div class='line' id='LC296'>		<span class="nx">deselect</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC297'>			<span class="kd">var</span> <span class="nx">option</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;option[value=&quot;&#39;</span> <span class="o">+</span> <span class="nx">value</span> <span class="o">+</span> <span class="s1">&#39;&quot;]&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">$select</span><span class="p">);</span></div><div class='line' id='LC298'>			<span class="kd">var</span> <span class="nx">checkbox</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;ul li input[value=&quot;&#39;</span> <span class="o">+</span> <span class="nx">value</span> <span class="o">+</span> <span class="s1">&#39;&quot;]&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">$container</span><span class="p">);</span></div><div class='line' id='LC299'><br/></div><div class='line' id='LC300'>			<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">selectedClass</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC301'>				<span class="nx">checkbox</span><span class="p">.</span><span class="nx">parents</span><span class="p">(</span><span class="s1">&#39;li&#39;</span><span class="p">).</span><span class="nx">removeClass</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">selectedClass</span><span class="p">);</span></div><div class='line' id='LC302'>			<span class="p">}</span></div><div class='line' id='LC303'><br/></div><div class='line' id='LC304'>			<span class="nx">checkbox</span><span class="p">.</span><span class="nx">prop</span><span class="p">(</span><span class="s1">&#39;checked&#39;</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC305'><br/></div><div class='line' id='LC306'>			<span class="nx">option</span><span class="p">.</span><span class="nx">removeAttr</span><span class="p">(</span><span class="s1">&#39;selected&#39;</span><span class="p">);</span></div><div class='line' id='LC307'>			<span class="nx">option</span><span class="p">.</span><span class="nx">removeProp</span><span class="p">(</span><span class="s1">&#39;selected&#39;</span><span class="p">);</span></div><div class='line' id='LC308'><br/></div><div class='line' id='LC309'>			<span class="kd">var</span> <span class="nx">options</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;option:selected&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">$select</span><span class="p">);</span></div><div class='line' id='LC310'>			<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;button&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">$container</span><span class="p">).</span><span class="nx">html</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">buttonText</span><span class="p">(</span><span class="nx">options</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">$select</span><span class="p">));</span></div><div class='line' id='LC311'>		<span class="p">},</span></div><div class='line' id='LC312'><br/></div><div class='line' id='LC313'>		<span class="c1">// Rebuild the whole dropdown menu.</span></div><div class='line' id='LC314'>		<span class="nx">rebuild</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC315'>			<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;ul&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">$container</span><span class="p">).</span><span class="nx">html</span><span class="p">(</span><span class="s1">&#39;&#39;</span><span class="p">);</span></div><div class='line' id='LC316'>			<span class="k">this</span><span class="p">.</span><span class="nx">buildDropdown</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">$select</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC317'>		<span class="p">},</span></div><div class='line' id='LC318'><br/></div><div class='line' id='LC319'>		<span class="c1">// Get options by merging defaults and given options.</span></div><div class='line' id='LC320'>		<span class="nx">getOptions</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC321'>			<span class="k">return</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">({},</span> <span class="k">this</span><span class="p">.</span><span class="nx">defaults</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC322'>		<span class="p">}</span></div><div class='line' id='LC323'>	<span class="p">};</span></div><div class='line' id='LC324'><br/></div><div class='line' id='LC325'>	<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">multiselect</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">option</span><span class="p">,</span> <span class="nx">parameter</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC326'>		<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC327'>			<span class="kd">var</span> <span class="nx">data</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;multiselect&#39;</span><span class="p">),</span></div><div class='line' id='LC328'>				<span class="nx">options</span> <span class="o">=</span> <span class="k">typeof</span> <span class="nx">option</span> <span class="o">==</span> <span class="s1">&#39;object&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">option</span><span class="p">;</span></div><div class='line' id='LC329'><br/></div><div class='line' id='LC330'>			<span class="c1">// Initialize the multiselect.</span></div><div class='line' id='LC331'>			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC332'>				<span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;multiselect&#39;</span><span class="p">,</span> <span class="p">(</span><span class="nx">data</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Multiselect</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">options</span><span class="p">)));</span></div><div class='line' id='LC333'>			<span class="p">}</span></div><div class='line' id='LC334'><br/></div><div class='line' id='LC335'>			<span class="c1">// Call multiselect method.</span></div><div class='line' id='LC336'>			<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">option</span> <span class="o">==</span> <span class="s1">&#39;string&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC337'>				<span class="nx">data</span><span class="p">[</span><span class="nx">option</span><span class="p">](</span><span class="nx">parameter</span><span class="p">);</span></div><div class='line' id='LC338'>			<span class="p">}</span></div><div class='line' id='LC339'>		<span class="p">});</span></div><div class='line' id='LC340'>	<span class="p">}</span></div><div class='line' id='LC341'><span class="p">}(</span><span class="nb">window</span><span class="p">.</span><span class="nx">jQuery</span><span class="p">);</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>

        <a href="#jump-to-line" rel="facebox" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
        <div id="jump-to-line" style="display:none">
          <h2>Jump to Line</h2>
          <form accept-charset="UTF-8" class="js-jump-to-line-form">
            <input class="textfield js-jump-to-line-field" type="text">
            <div class="full-button">
              <button type="submit" class="button">Go</button>
            </div>
          </form>
        </div>

      </div>
    </div>
</div>

<div id="js-frame-loading-template" class="frame frame-loading large-loading-area" style="display:none;">
  <img class="js-frame-loading-spinner" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-128.gif?1347543527" height="64" width="64">
</div>


        </div>
      </div>
      <div class="context-overlay"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer">
  <div class="container clearfix">

      <dl class="footer_nav">
        <dt>GitHub</dt>
        <dd><a href="https://github.com/about">About us</a></dd>
        <dd><a href="https://github.com/blog">Blog</a></dd>
        <dd><a href="https://github.com/contact">Contact &amp; support</a></dd>
        <dd><a href="http://enterprise.github.com/">GitHub Enterprise</a></dd>
        <dd><a href="http://status.github.com/">Site status</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Applications</dt>
        <dd><a href="http://mac.github.com/">GitHub for Mac</a></dd>
        <dd><a href="http://windows.github.com/">GitHub for Windows</a></dd>
        <dd><a href="http://eclipse.github.com/">GitHub for Eclipse</a></dd>
        <dd><a href="http://mobile.github.com/">GitHub mobile apps</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Services</dt>
        <dd><a href="http://get.gaug.es/">Gauges: Web analytics</a></dd>
        <dd><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></dd>
        <dd><a href="https://gist.github.com">Gist: Code snippets</a></dd>
        <dd><a href="http://jobs.github.com/">Job board</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Documentation</dt>
        <dd><a href="http://help.github.com/">GitHub Help</a></dd>
        <dd><a href="http://developer.github.com/">Developer API</a></dd>
        <dd><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></dd>
        <dd><a href="http://pages.github.com/">GitHub Pages</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>More</dt>
        <dd><a href="http://training.github.com/">Training</a></dd>
        <dd><a href="https://github.com/edu">Students &amp; teachers</a></dd>
        <dd><a href="http://shop.github.com">The Shop</a></dd>
        <dd><a href="/plans">Plans &amp; pricing</a></dd>
        <dd><a href="http://octodex.github.com/">The Octodex</a></dd>
      </dl>

      <hr class="footer-divider">


    <p class="right">&copy; 2013 <span title="0.05879s from fe18.rs.github.com">GitHub</span>, Inc. All rights reserved.</p>
    <a class="left" href="https://github.com/">
      <span class="mega-icon mega-icon-invertocat"></span>
    </a>
    <ul id="legal">
        <li><a href="https://github.com/site/terms">Terms of Service</a></li>
        <li><a href="https://github.com/site/privacy">Privacy</a></li>
        <li><a href="https://github.com/security">Security</a></li>
    </ul>

  </div><!-- /.container -->

</div><!-- /.#footer -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/davidstutz/bootstrap-multiselect/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-icon mega-icon-normalscreen"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="mini-icon mini-icon-brightness"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="mini-icon mini-icon-exclamation"></span>
      Something went wrong with that request. Please try again.
      <a href="#" class="mini-icon mini-icon-remove-close ajax-error-dismiss"></a>
    </div>

    
    
    <span id='server_response_time' data-time='0.05927' data-host='fe18'></span>
    
  </body>
</html>

