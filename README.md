     <h1>  OPEN TOURIST Guide</h1>
 ----------------------------------------------------------------- 
<hr>

        <h2>Overview</h2>
        <hr>
<p>
Discover is designed for those looking to explore the world. With a simple to use map which works on all devices you can search for hotels, bars, restaurants and more anywhere around the globe. This information contains contact details and star ratings to make your dinning, accommodation or travel decisions a smooth and user-friendly experience.
<p>
<hr>
          <h2>UX</h2>
          <hr>
<p>
Open tourists guide is for users looking for an easy way to search for vacations destinations around the world, especialy in africa.
it allows users to choose language,choose a Country selector and city input search bar then the results shows on the map different Locations,airports, Attractions, Accommodation,Banks , Restaurants, Bars.
after pressing the button (search) the search will take him or her to location.
then from there you can choose from different options.for exemple if you choose Hotels,all hotels in that city and around will be shown all with contact details and useful information.
</p>
<hr>
       <h2>User Stories</h2>
       <hr>
<ul>
<li>As a user, looking to travel to a new city, I want to find Restaurants and Bars within the area of interest.</li>
</ul>
<ol>
<li>I can search hotels by chosing the country drop down, enter the city and click hotels</li>
<li>I can also search museums, restaurants, bars, airports and banks.</li>
</ol>
<ul>As a user not knowing where I would like to travel I can use one of the atraction sites links to get hints of great tourism destinations. Then use this website to find more information.</ul>
<ol>
<li>Not knowing exactly where I want to travel next and staying on open tourists guide site I can follow the links of popular destinations,like parks and chuts.</li>
<li>if i don't find exactly what i want i can send email and get more imformation from the open tourists guide staffs to get more guidance.</li>
</ol>
<ul>As a user looking to ‘hotels’ through the Africa I can use the ‘hotels’ selector and find hotels,restaurants, bars in the location of interest.</ul>
<ol>
<li>Starting in the city I can search bar after bar using OPEN tourists guide to find all the top star rated bars around.</li>
<li>I can choose my hotel which is suited to the spot with higher class bars.</li>
<li>Using the Restaurants selector to dine while out on the town.</li>
</ol>
<ul>As a user looking to advertise on websites.</ul>
<ol><li>I am able to directly contact the owner to enquire about paid advertising.</li></ol>
     <h2>Wireframes</h2>
     <hr>
<a href="">wireframe mock-up</a>
<hr>
  <h2>Features:</h2>
  <hr>
<ul>
<li>Discover uses Google Maps api which displays the maps of their Searched country and city in either the website window view or they can choose to go full screen.<li>
<li>By also using Google Places api, Discover allows users to choose one of the selectors to search different options in their desired location e.g. Australia / Brisbane/ Hotel.</li>
<li>The atraction sites links show users some of the top travel destinations around the africa, they are there to inspire places of tourism.</li>
<li>The general enquiries email form is to make direct contact with the owner for Bug reports, advertising on this site, business partnerships or general questions.</li></ul>
<hr>
<h2>Features left to implement:<h2>
<hr>
<p>Paid advertisements</p><br>
<p>connect direct to the owners of bars,restaurants so i can get commission if the customer paid throughthe web.</p><br>
<p>empty form after sending the email</p>
       <h2>Technologies Used</h2>
<p>This project uses HTML, CSS and JavaScript programming languages.</p>
<ul><a href="">JQuery</a></ul>
<ul>The project uses JQuery to simplify DOM manipulation.</ul>
<ul>BootstrapCDN</ul>
<p>The project uses<b> Bootstrapv4.0.1 <b>to simplify the structure of the website and make the website responsive easily.</p>
<p>The project also uses <b>BootstrapCDN<b> to provide icons from FontAwesome</p>
<hr>
<h2>Google Fonts</h2>
<hr>
<ul>The project uses Google fonts to style the website fonts.<ul>
<ul><a>Emailjs </a></ul><br>Emailjs allows users to send emails from JavaScript.
<ul><a>Jasmine</a></ul>
<p>This project used Jasmine to automatically test all JavaScript and jQuery code.</p>
<ul>
<a>Google Maps JavaScript API</a>
</ul>
<hr>
   <h2>Testing<h2>
   </hr>
<ul>
<li>The code has been written and tested in Cloud9 and Google Chrome Developer Tools.</li>
<li>HTML code has been tested with mark-up validation service</li>
<li>CSS code has been tested with CSS validation service</li>
<li>Javascript and jQuery code has been tested using JSLint</li>
<li>Jasmine testing for email<li>
<li>Email function was tested using Gmail and Emailjs.<li>
</ul>
<hr>
    <h2>Bugs fixed</h2>
    <hr>
<ol>
<li>city search bar not emptying after country dropdown changed. fixed by switch the country dropdown and search bar positions.</li>
<li>email accepting any input fixed by using pattern=".+@" making it only accept input with @ in it.</li>
<li>Testing to ensure the Googles Maps API and Google Places API have been connected to the deployed GitHub Pages. Setting both API to enabled on Google map javascript api website.</li>
<li>markers on map not clearing after changing search area. Fixed with clearMarkers onclick function.</li>
<li>Markers not showing in side panel on desktop, google chrome extensions (adblocker) disabling image or marker. (adblocker needs to be allowed on the page to work)</li>
</ol>
<hr>
<h2>Browser testing for all features:</h2>
<hr>
<ul>
<li>Testing screen sizing.</li>
<li>Map in standard view and full screen.</li>
<li>Selector radio buttons.</li>
<li>Email test sent.</li>
<li>atraction sites links.</li>
</ul>
<hr>
<h2>All tested in the following browsers:</h2>
<hr>
<ul>
<li>Google Chrome</li>
<li>Mozilla Firefox</li>
<li>Opera</li>
<li>Microsoft Edge</li>
</ul>
<hr>
 <h2>Deployment</h2>
 <hr>
<p>This project was developed using Cloud9 IDE.</p>
<p>Committed to git and pushed to GitHub.</p>
<p>Discover has been deployed using GitHub Pages</p>
<hr>

<h2>To run the deployed website simply click the link below.</h2>
<hr>
<a href="">My project demo can be find here</a>
<hr>
<h2>How to Clone</h2>
<hr>
<h2>Using this link Github:<h2>
<ol>
<li>On GitHub, navigate to the main page of the repository</li
<li>Click Clone Or Download.</li>
<li>On the Clone with HTTPS pop up, copy the clone URL for the repository.</li>
<li>Change the current working directory to the location where you want the cloned directory to be made.</li>
<li>In a linux enviroment like cloud9 IDE type git clone then paste the URl from the clone with HTTPS</li>
</ol>
<ul>
<li>For other ways to clone or other information about cloning a repository <a href="">GitHub.com</a></li>
</ul>
<hr>
<h2>Making changes</h2>
<hr>
<ol>
<li>From the clone you as a developer can make changes to the repository</li>
<li>Once your changes have been testing you can set up your GitHub pages to Deploy automatically when ever you push to GitHub.</li>
<li>In GitHub navigate to your<s> <username>.github.io</s> repository and click Settings</li>
<li>Within Settings, navigate to the Source section within the GitHub Pages section. From the dropdown menu, selet master branch and then click Save.</li>
<li>Now that your GitHub pages site is set up, you can use<s> git commit </s>and <s>git push </s>to send yours changes to GitHub.</li>
</ol>
<hr>
<h2>Media</h2>
<hr>
<ul>
<li>The logo used in this website were obtained from free logo maker <a href="">logofury</li>
<li>The background image and all photos was obtained from free stock photos website <a href="">pixel</li>
<li>maps obtained from googles map api</li>
</ul>
<hr>
<h2>Credits</h2>
<hr>
<ul>
<li>JavaScript Code snippets used for Maps, markers and clearing the markers from Google maps api website</li>
<li>HTML for forms, tables and iframes used were obtained from bootstrap libarires website.</li>
</ul>
<hr>
<h2>Acknowledgements</h2>
<hr>
<ul>
<li>Thank you to the Mentors that have given helpful advise.</li>
</ul>

<hr>
<h2>Disclaimer</h2>
<hr>
<ul><li>The content used in this website is for educational purposes only.</li></ul>
