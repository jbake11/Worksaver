<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Worksaver</title>
        <meta charset="utf-8">
        <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
        <meta name="format-detection" content="telephone=no">

        <!-- Le styles -->
        <link href="http://netdna.bootstrapcdn.com/bootswatch/latest/flatly/bootstrap.min.css" rel="stylesheet">
        <script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/jquery/1.8.0/jquery-1.8.0.min.js"></script>
        <script src="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
        <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
        <!--[if lt IE 9]>
        <script src="http://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.6.2/html5shiv.js"></script>
        <link href="http://netdna.bootstrapcdn.com/font-awesome/3.1.1/css/font-awesome-ie7.min.css" rel="stylesheet">
        <![endif]-->
        <link href="/templates/worksaver/css/main.css" rel="stylesheet">
    <jdoc:include type="head" />
</head>
<body class="bg-gradient">
    <div class="container-fluid">
        <div id='header' class="row">
            <div class='col-lg-4 col-md-4 col-sm-4 hidden-xs'>
                <div class="flag">
                    <jdoc:include type="modules" name="headcol1" style="xhtml" />
                </div>
            </div>
            <div class='col-lg-4 col-md-4 col-sm-4'>
                <div class="head-logo">
                    <jdoc:include type="modules" name="headcol2" style="xhtml" />
                </div>
            </div>
            <div class='col-lg-4 col-md-4 col-sm-4'>
                <div class="head-search">
                    <jdoc:include type="modules" name="headcol3" style="xhtml" />
                </div>
            </div>
        </div>
    </div>
    <div id='headnav' class="row">
        <div class='col-lg-12'>
            <?php if ($this->countModules('mainmenu')) : ?>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <nav class="navigation" role="navigation">
                                <jdoc:include type="modules" name="mainmenu" style="none" />
                            </nav>
                        </div>
                    </div>
                </div>
            <?php endif; ?>
        </div>
    </div>
</div>
<?php if ($this->countModules('slider') || $this->countModules('featuredproduct')) : ?>
    <div class="container">
        <div class="row" id="slideRow">
            <div class="col-lg-8 col-md-8 col-sm-8">
                <div class="slider-adjust">
                    <?php if ($this->countModules('slider')) : ?>
                        <jdoc:include type="modules" name="slider" style="xhtml" />
                    <?php endif; ?>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4">
                <div class="item-adjust">
                    <?php if ($this->countModules('featuredproduct')) : ?>
                        <jdoc:include type="modules" name="featuredproduct" style="none" />
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </div>
<?php endif; ?>

<!--Body Content-->
<div class="container">
    <div id="index-thumbs" class="row">
        <jdoc:include type="component" />
    </div>
</div>

<!--Footer-->
<div class="container-fluid">
    <div id='footnav' class="row">
        <div class='col-lg-12 col-md-12'>
            <div class="navi">
                <nav>
                    <?php if ($this->countModules('mainmenu')) : ?>
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12">
                                    <nav class="navigation" role="navigation">
                                        <jdoc:include type="modules" name="footermenu" style="none" />
                                    </nav>
                                </div>
                            </div>
                        </div>
                    <?php endif; ?>
                </nav>
            </div>
        </div>
    </div>

    <div id="footer" class="row">
        <div class='col-lg-4 col-md-4 col-sm-4'>
            <div class="foot-contact">
                <jdoc:include type="modules" name="footcol1" style="xhtml" />

            </div>
        </div>
        <div class='col-lg-4 col-md-4 col-sm-4'>
            <div class="foot-logo">
                <jdoc:include type="modules" name="footcol2" style="xhtml" />
<!--                    <img class="img-responsive" src="/templates/worksaver/images/biglogo.png" alt=""/>-->
            </div>
        </div>
        <div class='col-lg-4 col-md-4 col-sm-4'>
            <div class="foot-badges">
                <jdoc:include type="modules" name="footcol3" style="xhtml" />
            </div>
        </div>
    </div>
</div>

</body>
</html>
