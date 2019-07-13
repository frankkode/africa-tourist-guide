      AFRICA TOURISTS GUIDE
 ----------------------------------------------------------------- 


        Overview
        
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
<a href="https://github.com/frankkode/open-tourist-guide/blob/master/assets/images/wire-frame.png"> wireframe mock-up</a>


<hr>

  <h2>Features:</h2>
  <hr>
<ul>
<li>Africa tourists guide uses Google Maps api which displays the maps of their Searched country and city in either the website window view or they can choose to go full screen.<li>
<li>By also using Google Places api, Discover allows users to choose one of the selectors to search different options in their desired location e.g. Rwanda / Kigali/ Hotel.</li>
<li>The atraction sites links show users some of the top travel destinations around the africa, they are there to inspire places of tourism.</li>
<li>The general enquiries email form is to make direct contact with the owner for Bug reports, advertising on this site, business partnerships or general questions.</li>
</ul>
<hr>

<h2>Features left to implement:</h2>

<hr>
<p>. Paid advertisements</p>
<p>. connect direct to the owners of bars,restaurants so i can get commission if the customer paid throughthe web.</p>
<p>. empty form after sending the email</p>

<hr>

     
   <h2>Technologies Used </h2>     
       
<p>This project uses HTML, CSS and JavaScript programming languages.</p>

<ul><li><a href="https://api.jquery.com/submit-selector/">JQuery</a></li></ul>
<ul>-The project uses <strong> JQuery</strong> to simplify DOM manipulation.</ul>
<ul><li><a href="https://getbootstrap.com/">Bootstrap</a></li></ul>
<p>The project uses<a href="https://getbootstrap.com/"><b> Bootstrapv4.3.1 </b></a>to simplify the structure of the website and make the website responsive easily.</p>
<p>The project also uses<a href="https://www.bootstrapcdn.com/"> <b>BootstrapCDN</b></a> to provide icons from FontAwesome</p>

<ul><li><a href="https://fontawesome.com/icons/copyright?style=regular">Fontawasome</a></li></ul>

<ul>- The project uses fontawasome to style the website fonts.<ul>
<ul><li><a href="https://www.emailjs.com/">Emailjs </a></li></ul>
 <ul>-Emailjs allows users to send emails from JavaScript.</ul>
<ul><li><a href="https://jasmine.github.io/pages/getting_started.html">Jasmine</a></li></ul>
<ul>-This project used Jasmine to automatically test all JavaScript and jQuery code.</ul>
<ul>
<li><a href="https://developers.google.com/maps/documentation/">Google Maps JavaScript API</a></li>
</ul>
<hr>

   <h2>Testing</h2>
   
   </hr>

<li>The code has been written and tested in Cloud9 and Google Chrome Developer Tools.</li>
<li>HTML code has been tested with mark-up validation service</li>
<li>CSS code has been tested with CSS validation service</li>
<li>Javascript and jQuery code has been tested using JSLint</li>
<li>Jasmine testing for email<li>
<li>Email function was tested using Gmail and Emailjs.<li>

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
<p>In order to deploy this project, regular commits were made to the Github repository and then using Github pages I was able to deploy the website. No apparent difference between development and deployed builds.

I have only used one Git branch to develop and deploy this project.<a href="https://frankkode.github.io/open-tourist-guide/"> Click here to go to the website</a>
</p>
<hr>

<h2>To run the deployed website simply click the link below.</h2>
<hr>
<a href="https://frankkode.github.io/open-tourist-guide/">My project demo can be find here</a>
<hr>
<h2>How to Clone</h2>

<hr>

<h2>Using this link Github:</h2>

<hr>

<ol>
<li>On GitHub, navigate to the main page of the repository</li>
<li>Click Clone Or Download.</li>
<li>On the Clone with HTTPS pop up, copy the clone URL for the repository.</li>
<li>Change the current working directory to the location where you want the cloned directory to be made.</li>
<li>In a linux enviroment like cloud9 IDE type git clone then paste the URl from the clone with HTTPS</li>
</ol>

<ul>
<li>For other ways to clone or other information about cloning a repository <a href="https://github.com/frankkode/open-tourist-guide">GitHub.com</a></li>
</ul>

<hr>
<h2>Making changes</h2>
<hr>
<ol>
<li>From the clone you as a developer can make changes to the repository</li>
<li>Once your changes have been testing you can set up your GitHub pages to Deploy automatically when ever you push to GitHub.</li>
<li>In GitHub navigate to your<small> <username>.github.io</small> repository and click Settings</li>
<li>Within Settings, navigate to the Source section within the GitHub Pages section. From the dropdown menu, selet master branch and then click Save.</li>
<li>Now that your GitHub pages site is set up, you can use<small> git commit </s>and <small>git push </small>to send yours changes to GitHub.</li>
</ol>
<hr>
<h2>Media</h2>
<hr>
<ul>
<li>The logo used in this website were obtained from free logo maker <a href="https://www.logofury.com/">logofury</a></li>
<li>The background image and all photos was obtained from free stock photos website <a href="https://www.pexels.com/search/animal%20park/">pixel<a/></li>
<li>maps obtained from googles map api</li>
</ul>
<hr>
<h2>Credits</h2>
<hr>
<ul>
<li>JavaScript Code snippets used for Maps, markers and clearing the markers from Google maps api website</li>
<li>HTML for forms, tables and iframes used were obtained from bootstrap libarires website.</li>
<li>The logo used in this website were obtained from free logo maker <a href="https://www.logofury.com/">logofury</a></li>
<li>The background image and all photos was obtained from free stock photos website <a href="https://www.pexels.com/search/animal%20park/">pixel<a/></li>

</ul>
<hr>
<h2>Acknowledgements</h2>
<hr>
<ul>
<li>The scrollSpy delay JavaScript function was found through this tutorial<a href="https://www.abeautifulsite.net/smoothly-scroll-to-an-element-without-a-jquery-plugin-2"> here.</a></li>

<li>The progress of sending email and some other technical skills used in modal was taken from Stack Overflow example<a href="https://stackoverflow.com/questions/14589193/clearing-my-form-inputs-after-submission">:stackoverflow</a></li>

<li>The media query for the collapsed navbar regardless of viewport width was taken from this <a href="https://getbootstrap.com/docs/4.3/components/navbar/">site.</a></li>
<li>Thank you to the Mentors that have given helpful advise.</li>
</ul>

<hr>
<h2>Disclaimer</h2>
<hr>
<ul>
<li>The content used in this website is for educational purposes only.</li>
</ul>
