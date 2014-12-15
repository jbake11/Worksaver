
<div class="row">
    <div class="col-lg-12 col-lg-12 col-sm-12 col-xs-12">
        <table class="table table-bordered table-responsive table-striped">
            <tbody>
                <tr><td class="table-col-header" colspan="4" align="center">2015 Farm Show Schedule</td></tr>
                <tr><td>Show Dates</td><td>Show Name</td><td>Display Booth / Lot</td><td>Personnel Assigned</td></tr>
                <tr><td>Jan. 6-8</td><td>Keystone Farm Show - York, PA</td><td>Hamilton</td><td></td></tr>
                <tr><td>Jan. 15-17</td><td>Virginia Farm show - Fisherville, VA</td><td>Hamilton</td><td></td></tr>
                <tr><td>Jan. 29-31</td><td>Ohio Power Show - Columbus</td><td>ISCO/Buhler</td><td></td></tr>
                <tr><td>Feb. 4-6</td><td>Southern Farm Show - Raleigh</td><td>Tri-State</td><td></td></tr>
                <tr><td>Feb. 10-12</td><td>World AG Expo - Tulare, CA</td><td></td><td></td></tr>
                <tr><td>Feb 11-14</td><td>Nat'l Farm Machinery Show - Louisville</td><td>Worksaver</td><td></td></tr>
                <tr><td>Feb. 19-21</td><td>Montana AgriTrade Show - Billings</td><td>General Impl.</td><td></td></tr>
                <tr><td>Feb. 26-28</td><td>New York Farm show - Syracuse</td><td>JS Woodhouse</td><td></td></tr>
                <tr><td>Feb. 20-22</td><td>Western Farm Show - K.C. Mo.</td><td>Beaver Valley</td><td></td></tr>
                <tr><td>Feb. 27-28</td><td>Mid-South Farm Show - Memphis</td><td>Implement Sales</td><td></td></tr>
                <tr><td>Mar. 10-12</td><td>Ottowa Farm Show - Ottowa, Ont.</td><td>Farm & Fleet</td><td></td></tr>
                <tr><td>June 17-19</td><td>Western Canada Farm Progress - Regina</td><td>Westward</td><td></td></tr>
                <tr><td>July 9-11</td><td>3I Show</td><td>Beaver Valley</td><td></td></tr>
                <tr><td>July 21-23</td><td>Michigan AG Equip. Show - E. Lansing </td><td>Wiles</td><td></td></tr>
                <tr><td>July 17-19</td><td>Four State Farm Show - Pittsburg, KS</td><td>Beaver Valley</td><td></td></tr>
                <tr><td>Aug 4-6</td><td>Farm-Fest - Redwood City, MN</td><td>Edney</td><td></td></tr>
                <tr><td>Aug 4-6</td><td>Empire Farm Days - Seneca Falls, NY</td><td>JS Woodhouse</td><td></td></tr>
                <tr><td>Aug 18-20</td><td>AG Progress Days - Rock Springs, PA</td><td>Hamilton</td><td></td></tr>
                <tr><td>Aug. 25-27</td><td>Wisconsin Tech Days - Portage</td><td>Edney</td><td></td></tr>
                <tr><td>Sept. 15-17</td><td>Husker Harvest Days - Grand Island, NE</td><td>Beaver Valley</td><td></td></tr>
                <tr><td>Sept. 15-17</td><td>Canada's Outdoor Farm Show - Woodstock</td><td>Farm Fleet</td><td></td></tr>
                <tr><td>Sept. 22-24</td><td>Ohio Farm Science Review - London, OH</td><td>ISCO/Buhler</td><td></td></tr>
                <tr><td>Oct. 2-4</td><td>Ozark Farm Fest - Springfield, Mo</td><td>Beaver Valley</td><td></td></tr>
                <tr><td>Oct. 20-22</td><td>Sunbelt Expo - Moultrie, GA</td><td>Worksaver</td><td></td></tr>
            </tbody>
        </table>
    </div>
</div>




<div class='container'>
    <div class="row">
        <div class="col-lg-12">
            <h1>Contact Us</h1>
            We will be glad to meet with you to discuss building
            options and advantages. From design to finished product,
            you will have the peace of mind knowing your new home or
            remodel project will be completed to your satisfaction.
            <br /> Give us a call or email today!
        </div>
    </div>
</div>


<?php
if (isset($_POST['send'])) {

// Some data for the message
    $mailTo = "drew@briarstonebuilding.com";
    $mailFrom = $_POST['email'];
    $mailFromName = $_POST['name'];
    $mailSubject = "IMDOrtho.com Contact Page";

    $mailMessage = $_POST['name'] . "\n";
    $mailMessage .= $_POST['email'] . "\n";
    $mailMessage .= $_POST['address'] . "\n";
    $mailMessage .= $_POST['citystate'] . "\n";
    $mailMessage .= $_POST['zip'] . "\n\n";
    if (!empty($_POST['brochure']) == "YES") {
        $mailMessage .= "SEND ME A BROCHURE!\n\n";
    }
    $mailMessage .= $_POST['message'];

// Send mail
    mail($mailTo, $mailSubject, $mailMessage, "From: $mailFromName <$mailFrom>\r\n");
//mail("cbake@livemercial.com, sjgraphics@kconline.com", $mailSubject, $mailMessage, "From: $mailFromName <$mailFrom>\r\n") or die("couldn't mail");

    echo "<br /><br /><b>Thanks for contacting us. We'll get in touch with you as soon as possible.</b>";
} else {
    ?>
    <br />



    <script type='text/javascript'>
        function validate()
        {
            var name = document.getElementById('name').value;
            var email = document.getElementById('email').value;
            var city = document.getElementById('city').value;
            var zip = document.getElementById('zip').value;
            var address = document.getElementById('address').value;
            if (name == '' || name == "undefined") {
                alert("Please Enter Your Name.");
                return false;
            }
            if (email == '' || email == "undefined") {
                alert("Please Enter Your Email.");
                return false;
            }
            if (city == '' || city == "undefined") {
                alert("Please Enter Your City.");
                return false;
            }
            if (zip == '' || zip == "undefined") {
                alert("Please Enter Your ZipCode.");
                return false;
            }
            if (address == '' || address == "undefined") {
                alert("Please Enter Your Address.");
                return false;
            }
        }
    </script>

    <div class='container'>
        <div class='row'>
            <div class='col-lg-6 col-md-6 address'>
                <h3>Briarstone Building, Inc.</h3>
                <p>46709 Merion Circle
                    <br /> Northville, Michigan 48167
                    <br /> Phone: 248.535.3838
                </p>
            </div>


            <div class='col-lg-6 col-md-6'>
                <form action="contact.php" method='POST' class='form'>
                    <fieldset>
                        <legend>Email Us For More Information</legend>

                        <div class="form-group">
                            <label>Name</label>
                            <input name='name' type="text" class="form-control" placeholder="Your Name">
                        </div>
                        <br>
                        <div class="form-group">
                            <label>@Email</label>
                            <input name='email' type="text" class="form-control" placeholder="address@domain.com">
                        </div>
                        <br>
                        <div class="form-group">
                            <label>Address</label>
                            <input name='address' type="text" class="form-control" placeholder="Your Address">
                        </div>
                        <br>
                        <div class="form-group">
                            <label>City, State</label>
                            <input name='citystate' type="text" class="form-control" placeholder="City, State">
                        </div>
                        <br>
                        <div class="form-group">
                            <label>Zipcode</label>
                            <input name='zip' type="text" class="form-control" placeholder="xxxxx">
                        </div>
                        <br>
                        <div class="form-group">
                            <label>Message</label>
                            <textarea class='form-control' name='message' rows='15' cols='40'>

                            </textarea>
                        </div>
                        <div class='col-sm-6'>
                            <button name='send' type="submit" class="btn btn-primary btn-block">Submit</button>
                        </div>

                    </fieldset>
                </form>
            </div>
        </div>
    </div>

<?php
}