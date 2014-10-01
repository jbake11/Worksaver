<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Worksaver</title>
        <meta charset="utf-8">
        <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
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
<body>
    <div class="container-fluid">
        <div id='header' class="row">
            <div class='col-lg-4 col-md-4 col-sm-4 hidden-xs'>
                <div class="flag">
                    <jdoc:include type="modules" name="headcol1" style="none" />
<!--                    <img class="img-responsive" src="/templates/worksaver/images/flag.png" alt=""/>-->
                </div>
            </div>
            <div class='col-lg-4 col-md-4 col-sm-4 hidden-xs'>
                <jdoc:include type="modules" name="headcol2" style="none" />
<!--                <img class="img-responsive" src="/templates/worksaver/images/biglogo.png" alt=""/>-->
            </div>
            <div class='col-lg-4 col-md-4 col-sm-4 hidden-xs'>
                <jdoc:include type="modules" name="headcol3" style="none" />
            </div>
        </div>
        <div id='headnav' class="row">
            <div class='col-lg-12 col-md-12 hidden-sm hidden-xs'>
                <div class="navi">
                    <nav>
                        <?php if ($this->countModules('mainmenu')) : ?>
                            <nav class="navigation" role="navigation">
                                <jdoc:include type="modules" name="mainmenu" style="none" />
                            </nav>
                        <?php endif; ?>
                    </nav>
                </div>
            </div>
        </div>
    </div>

    <?php if ($this->countModules('slider') || $this->countModules('featuredproduct')) : ?>
        <div class="container-fluid">
            <div class="row-fluid" id="slideRow">
                <div class="col-lg-9 col-md-9 col-sm-9">
                    <div class="slider-adjust">
                        <?php if ($this->countModules('slider')) : ?>
                            <jdoc:include type="modules" name="slider" style="xhtml" />
                        <?php endif; ?>
                    </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-3">
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
        <div class="row">
            <jdoc:include type="component" />
        </div>
    </div>

    <!--Footer-->
    <div class="container-fluid">
        <div id='footnav' class="row">
            <div class='col-lg-12 col-md-12 hidden-sm hidden-xs'>
                <div class="navi">
                    <nav>
                        <?php if ($this->countModules('mainmenu')) : ?>
                            <nav class="navigation" role="navigation">
                                <jdoc:include type="modules" name="footermenu" style="none" />
                            </nav>
                        <?php endif; ?>
                    </nav>
                </div>
            </div>
        </div>

        <div id="footer" class="row">
            <div class='col-lg-4 col-md-4 col-sm-4 hidden-xs'>
                <div class="foot-contact">
                    <jdoc:include type="modules" name="footcol1" style="none" />
<!--                <p>WORKSAVER, INC.</p>
                    <p>P.O. BOX 100</p>
                    <p>9 Worksaver Trail</p>
                    <p>Litchfield, Illinois 62056-0100 USA</p>
                    <p>Phone: (217) 324-5973</p>
                    <p>Fax: (217) 324-3356</p>-->
                </div>
            </div>
            <div class='col-lg-4 col-md-4 col-sm-4 hidden-xs'>
                <div class="foot-logo">
                    <jdoc:include type="modules" name="footcol2" style="none" />
<!--                    <img class="img-responsive" src="/templates/worksaver/images/biglogo.png" alt=""/>-->
                </div>
            </div>
            <div class='col-lg-4 col-md-4 col-sm-4 hidden-xs'>
                <div class="foot-badges">
                    <jdoc:include type="modules" name="footcol3" style="none" />
<!--                <img src="/templates/worksaver/images/ytbadge.png" alt=""/>
                    <img src="/templates/worksaver/images/twitbadge.png" alt=""/>
                    <img src="/templates/worksaver/images/fbbadge.png" alt=""/>-->
                </div>
            </div>
        </div>
    </div>

</body>
</html>
