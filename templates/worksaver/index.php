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
                    <img class="img-responsive" src="/templates/worksaver/images/flag.png" alt=""/>
                </div>
            </div>
            <div class='col-lg-4 col-md-4 col-sm-4 hidden-xs'>
                <img class="img-responsive" src="/templates/worksaver/images/biglogo.png" alt=""/>
            </div>
            <div class='col-lg-4 col-md-4 col-sm-4 hidden-xs'>
                <form id="custom-search-form" class="form-search form-horizontal pull-right">
                    <div class="input-append span12">
                        <input type="text" class="search-query" placeholder="Search">
                        <button type="submit" class="btn"><i class="icon-search"></i></button>
                    </div>
                </form>
            </div>
        </div>
        <div id='navRow' class="row">
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
                <div class="col-lg-8 col-md-8 col-sm-8 ">
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

    <div class="container">
        <div class="row">
            <jdoc:include type="component" />
        </div>
    </div>

    <div class="container">
        <div class="row" id="footer">
        </div>
    </div>

</body>
</html>
