# printObject v. 1.1.0
Simple JQuery plugin for print the specified JQuery object. 

For use it you have to just join this javascript file to your webpage and call function "printObject" without params for JQuery object which you want print. 

For example we can catch table object from webpage and print it:

$("table").printObject();

or print it with header and footer:

$("table").printObject({
&nbsp;&nbsp;  header: "&lt;h2&gt; User basket &lt;/h2&gt;",<br />
&nbsp;&nbsp;  header_style: 'color: red;',<br />
&nbsp;&nbsp;  footer: '&lt;a href="http://<span></span>www<span></span>.example.com"&amp;Example" &gt; Company Name&lt &lt;/a&gt;',<br />
&nbsp;&nbsp;  footer_style: "color: blue; font-size: 12px;"<br />
});

In 1.1.0 version added four parameters to plugin:
- header - here you can put html code which will be diplay above the printing html object for example '&lt;h1&gt; Header </h1&gt;';
- header_style - here you can put header style definitin for example "color: red; font-size: 20px;";
- footer - here you can put html code which will be diplay below the printing html object for example '&lt;h1&gt; Footer &lt;/h1&gt;';
- footer_style - here you can put footer style definitin for example "color: blue; font-size: 12px;";
