# printObject v. 1.1.0
Simple JQuery plugin for print the specified JQuery object. 

For use it you have to just join this javascript file to your webpage and call function "printObject" without params for JQuery object which you want print. 

For example we can catch table object from webpage and print it:

$("table").printObject();

or print it with header and footer:

$("table").printObject({
  header: "&lt;h2&amp;User basket&lt;/h2&amp;",
  header_style: 'color: red;',
  footer: '&lt;a href="http://www.example.com"&amp;Example Company Name&lt;/a&amp;',
  footer_style: "color: blue; font-size: 12px;"
});
, and .
In 1.1.0 version added four parameters to plugin:
- header - here you can put html code which will be diplay above the printing html object for example '&lt;h1&amp;Header</h1&amp;';
- header_style - here you can put header style definitin for example "color: red; font-size: 20px;";
- footer - here you can put html code which will be diplay below the printing html object for example '&lt;h1&amp;Footer&lt;/h1&amp;';
- footer_style - here you can put footer style definitin for example "color: blue; font-size: 12px;";
