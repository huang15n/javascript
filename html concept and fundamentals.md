# HTML: HTML (Hypertext Markup Language) is the code that is used to structure a web page and its content.


### What is HTML?
HTML (Hypertext Markup Language) is not a programming language; it is a markup language used to tell your browser how to structure the web pages you visit. It can be as complicated or as simple as the web developer wishes it to be. HTML consists of a series of elements, which you use to enclose, wrap, or mark up different parts of the content to make it appear or act a certain way. The enclosing tags can make a bit of content into a hyperlink to link to another page on the web, italicize words, and so on.


HTLM is a standard markup language for website. HTML is not a programming language; it is a markup language that defines the structure of your content. HTML consists of a series of elements, which you use to enclose, or wrap, different parts of the content to make it appear a certain way, or act a certain way.
HTML stands for hyper text markup language 
It describe the structure of a webpage , consists of a series of elements :  headings, paragraph, image, videos, lists, forms,tables .
It tells the browsers how to display the contents element are represented by tags, use them to render content 


The opening tag: This consists of the name of the element (in this case, p), wrapped in opening and closing angle brackets. This states where the element begins or starts to take effect — in this case where the paragraph begins.
The closing tag: This is the same as the opening tag, except that it includes a forward slash before the element name. This states where the element ends — in this case where the paragraph ends. Failing to add a closing tag is one of the standard beginner errors and can lead to strange results.
The content: This is the content of the element, which in this case, is just text.
The element: The opening tag, the closing tag and the content together comprise the element.




### What is the HTML head? 

The HTML head is the contents of the  < head > element — unlike the contents of the  < body > element (which are displayed on the page when loaded in a browser), the head's content is not displayed on the page. Instead, the head's job is to contain metadata about the document.

### Adding a title 
We've already seen the  < title > element in action — this can be used to add a title to the document. This however can get confused with the element, which is used to add a top level heading to your body content — this is also sometimes referred to as the page title. But they are different things!
The python \ <  h1 \ > element appears on the page when loaded in the browser — generally this should be used once per page, to mark up the title of your page content (the story title, or news headline, or whatever is appropriate to your usage.)
The  < title > element is metadata that represents the title of the overall HTML document (not the document's content.)


### Metadata: the  < meta > element
Metadata is data that describes data, and HTML has an "official" way of adding metadata to a document — the  < meta > element. Of course, the other stuff we are talking about in this article could also be thought of as metadata too. There are a lot of different types of  < meta >elements that can be included in your page's  < head >

 < meta charset="utf-8" >
This element simply specifies the document's character encoding — the character set that the document is permitted to use. utf-8 is a universal character set that includes pretty much any character from any human language. This means that your web page will be able to handle displaying any language; it's therefore a good idea to set this on every web page you create! 
To try this out, revisit the simple HTML template you obtained in the previous section on  < title > try changing the meta charset value to ISO-8859-1, and add the Japanese to your page. 
 < p >Japanese example: ご飯が熱い。 < /p >



### Adding an author and description
Many  < meta > elements include name and content attributes:
name specifies the type of meta element it is; what type of information it contains.
content specifies the actual meta content.
Two such meta elements that are useful to include on your page define the author of the page, and provide a concise description of the page.
 < meta name="author" content="Chris Mills" >  < meta name="description" content="The MDN Web Docs Learning Area aims to provide complete beginners to the Web with all they need to know to get started with developing web sites and applications." >


### SEO
SEO (Search Engine Optimization) is the process of making a website more visible in search results, also termed improving search rankings.
Search engines crawl the web, following links from page to page, and index the content found. When you search, the search engine displays the indexed content. Crawlers follow rules. If you follow those rules closely when doing SEO for a website, you give the site the best chances of showing up among the first results, increasing traffic and possibly revenue (for ecommerce and ads).
Search engines give some guidelines for SEO, but big search engines keep result ranking as a trade secret. SEO combines official search engine guidelines, empirical knowledge, and theoretical knowledge from science papers or patents.
SEO methods fall into three broad classes:
technicalTag the content using semantic HTML. When exploring the website, crawlers should only find the content you want indexed.copywritingWrite content using your visitors' vocabulary. Use text as well as images so that crawlers can understand the subject.popularityYou get most traffic when other established sites link to your site.



### The description's use in search engines
Now search for "MDN Web Docs" in your favorite search engine (We used Google.) You'll notice the description  < meta > and  < title > element content used in the search result — definitely worth having!
Note: In Google, you will see some relevant subpages of MDN Web Docs listed below the main homepage link — these are called sitelinks, and are configurable in Google's webmaster tools — a way to make your site’s search results better in the Google search engine.
Note: Many  < meta > features just aren't used any more. For example, the keyword  < meta > element ( < meta name="keywords" content="fill, in, your, keywords, here" >) — which is supposed to provide keywords for search engines to determine relevance of that page for different search terms — is ignored by search engines, because spammers were just filling the keyword list with hundreds of keywords, biasing results.



### Other types of metadata(Optional)
As you travel around the web, you'll find other types of metadata, too. A lot of the features you'll see on websites are proprietary creations, designed to provide certain sites (such as social networking sites) with specific pieces of information they can use.

This is because there are no elements to give the content structure, so the browser does not know what is a heading and what is a paragraph. Furthermore:
Users looking at a web page tend to scan quickly to find relevant content, often just reading the headings to begin with (we usually spend a very short time on a web page). If they can't see anything useful within a few seconds, they'll likely get frustrated and go somewhere else.
Search engines indexing your page consider the contents of headings as important keywords for influencing the page's search rankings. Without headings, your page will perform poorly in terms of SEO (Search Engine Optimization).



###  < head > conclusion
That marks the end of our quick tour of the HTML head — there's a lot more you can do in here, but an exhaustive tour would be boring and confusing at this stage, and we just wanted to give you an idea of the most common things you'll find in there for now!


### The basics: Headings and Paragraphs
It's really up to you what exactly the elements involved represent, as long as the hierarchy makes sense. You just need to bear in mind a few best practices as you create such structures:
Preferably you should just use a single  <  h1  > per page — this is the top level heading, and all others sit below this in the hierarchy.
Make sure you use the headings in the correct order in the hierarchy. Don't use  < h3 > elements to represent subheadings, followed by  <  h2  > elements to represent sub-subheadings — that doesn't make sense and will lead to weird results.
Of the six heading levels available, you should aim to use no more than three per page, unless you feel it is necessary. Documents with many levels (i.e., a deep heading hierarchy) become unwieldy and difficult to navigate. On such occasions, it is advisable to spread the content over multiple pages if possible.



### Implementing structural hierarchy
Heading elements allow you to specify that certain parts of your content are headings — or subheadings. In the same way that a book has the main title, chapter titles and subtitles, an HTML document can too. HTML contains 6 heading levels,  < h1 >– < h6 >, although you'll commonly only use 3 to 4 at most
HTML headings are defined with the  < h1 > to  < h6 > tags.
 < h1 > defines the most important heading.  < h6 > defines the least important heading: 
 < h1 >My main title < /h1 >
 < h2 >My top level heading < /h2 > 
 < h3 >My subheading < /h3 > 
 < h4 >My sub-subheading < /h4 >


### HTML Paragraphs
HTML paragraphs are defined with the  < p > tag:
As explained above,  < p > elements are for containing paragraphs of text; you'll use these frequently 
 < p >This is a single paragraph < /p > when marking up regular text content



### Emphasis and importance
In human language, we often emphasise certain words to alter the meaning of a sentence, and we often want to mark certain words as important or different in some way. HTML provides various semantic elements to allow us to mark up textual content with such effects, and in this section, we'll look at a few of the most common ones.

When we want to add emphasis in spoken language, we stress certain words, subtly altering the meaning of what we are saying. Similarly, in written language we tend to stress words by putting them in italics. For example, the following two sentences have different meanings.
I am glad you weren't late.
I am glad you weren't late.
The first sentence sounds genuinely relieved that the person wasn't late. In contrast, the second one sounds sarcastic or passive-aggressive, expressing annoyance that the person arrived a bit late.
In HTML we use the  < em > (emphasis) element to mark up such instances. As well as making the document more interesting to read, these are recognised by screen readers and spoken out in a different tone of voice. Browsers style this as italic by default, but you shouldn't use this tag purely to get italic styling. To do that, you'd use a  < span > element and some CSS, or perhaps an  < i > element
 < p >I am  < em >glad < /em > you weren't  < em >late < /em >. < /p >



### Strong importance
To emphasize important words, we tend to stress them in spoken language and bold them in written language. For example:
This liquid is highly toxic.
I am counting on you. Do not be late!
In HTML we use the  < strong > (strong importance) element to mark up such instances. As well as making the document more useful, again these are recognized by screen readers and spoken in a different tone of voice. Browsers style this as bold text by default, but you shouldn't use this tag purely to get bold styling. To do that, you'd use a  < span > element and some CSS, or perhaps a  < b > element 


### Italic, bold, underline
The elements we've discussed so far have clearcut associated semantics. The situation with  < b >,  < i >, and  < u > is somewhat more complicated. They came about so people could write bold, italics, or underlined text in an era when CSS was still supported poorly or not at all. Elements like this, which only affect presentation and not semantics, are known as presentational elements and should no longer be used, because as we've seen before, semantics is so important to accessibility, SEO, etc.

HTML5 redefined  < b >,  < i > and  < u > with new, somewhat confusing, semantic roles.
Here's the best rule of thumb: it's likely appropriate to use  < b >,  < i >, or  < u > to convey a meaning traditionally conveyed with bold, italics, or underline, provided there is no more suitable element. However, it always remains critical to keep an accessibility mindset. The concept of italics isn't very helpful to people using screen readers, or to people using a writing system other than the Latin alphabet.
 < i > is used to convey a meaning traditionally conveyed by italic: Foreign words, taxonomic designation, technical terms, a thought...
 < b > is used to convey a meaning traditionally conveyed by bold: Key words, product names, lead sentence...
 < u > is used to convey a meaning traditionally conveyed by underline: Proper name, misspelling


### Blockquotes
If a section of block level content (be it a paragraph, multiple paragraphs, a list, etc.) is quoted from somewhere else, you should wrap it inside a  < blockquote > element to signify this, and include a URL pointing to the source of the quote inside a cite attribute.
 < p >Here below is a blockquote.. < /p >  < blockquote cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote" >  < p >The  < strong >HTML  < code >&lt;blockquote&gt; < /code > Element < /strong > (or  < em >HTML Block Quotation Element < /em >) indicates that the enclosed text is an extended quotation. < /p >  < /blockquote >
Browser default styling will render this as an indented paragraph, as an indicator that it is a quote; the paragraph above the quotation is there to demostrate that.


### Inline quotations
Inline quotations work in exactly the same way, except that they use the  < q >element.
 < p >The quote element —  < code >&lt;q&gt; < /code > — is  < q cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q" >intended for short quotations that don't require paragraph breaks. < /q > < /p >
Browser default styling will render this as normal text put in quotes to indicate a quotation

### Citations
The content of the cite attribute sounds useful, but unfortunately browsers, screenreaders, etc. don't really do much with it. There is no way to get the browser to display the contents of cite, without writing your own solution using JavaScript or CSS. If you want to make the source of the quotation available on the page you need to make it available in the text via a link or some other appropriate way.
There is a  < cite > element, but this is meant to contain the title of the resource being quoted, e.g. the name of the book. There is no reason however why you couldn't link the text inside  < cite > to the quote source in some way:  < p >According to the  < a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote" >  < cite >MDN blockquote page < /cite > < /a >:  < /p >  < blockquote cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote" >  < p >The  < strong >HTML  < code >&lt;blockquote&gt; < /code > Element < /strong > (or  < em >HTML Block Quotation Element < /em >) indicates that the enclosed text is an extended quotation. < /p >  < /blockquote > 



### Marking up contact details
HTML has an element for marking up contact details —  < address >. This simply wraps around your contact details
 < address >  < p > Chris Mills < br > Manchester < br > The Grim North < br > UK  < /p >  < ul >  < li >Tel: 01234 567 890 < /li >  < li >Email: me@grim-north.co.uk < /li >  < /ul >  < /address >


### Superscript and subscript
You will occasionally need to use superscript and subscript when marking up items like dates, chemical formulae, and mathematical equations so they have the correct meaning. The  < sup >and  < sub > elements handle this job.


### HTML Lists
A lot of the web's content is lists and HTML has special elements for these. Marking up lists always consist of at least 2 elements. The most common list types are ordered and unordered lists:
Unordered lists are for lists where the order of the items doesn't matter, such as a shopping list. These are wrapped in a  < ul > element.
Ordered lists are for lists where the order of the items does matter, such as a recipe. These are wrapped in an  < ol > element.


### Unordered Lists
Unordered lists are used to mark up lists of items for which the order of the items doesn't matter 
Every unordered list starts off with a  < ul > element — this wraps around all the list items:
 < ul >  < li >milk < /li >  < li >eggs < /li >  < li >bread < /li >  < li >hummus < /li >  < /ul >


### Ordered Lists
Ordered lists are lists in which the order of the items does matter — let's take a set of directions 
The markup structure is the same as for unordered lists, except that you have to wrap the list items in an  < ol > element, rather than  < ul >:
 < ol >  < li >Drive to the end of the road < /li >  < li >Turn right < /li >  < li >Go straight across the first two roundabouts < /li >  < li >Turn left at the third roundabout < /li >  < li >The school is on your right, 300 meters up the road < /li >  < /ol >

### Nesting lists
It is perfectly ok to nest one list inside another one. You might want to have some sub-bullets sitting below a top level bullet. 

 < ol >  < li >Remove the skin from the garlic, and chop coarsely. < /li >  < li >Remove all the seeds and stalk from the pepper, and chop coarsely. < /li >  < li >Add all the ingredients into a food processor. < /li >  < li >Process all the ingredients into a paste. < /li >  < li >If you want a coarse "chunky" hummus, process it for a short time. < /li >  < li >If you want a smooth hummus, process it for a longer time. < /li >  < /ol >


### Description lists

we didn't mention the third type of list you'll occasionally come across — description lists. The purpose of these lists is to mark up a set of items and their associated descriptions, such as terms and definitions, or questions and answers. 
Description lists use a different wrapper than the other list types —  < dl >; in addition each term is wrapped in a  < dt > (description term) element, and each description is wrapped in a  < dd >(description definition) element.


### What is a hyperlink?
Hyperlinks are one of the most exciting innovations the Web has to offer. Well, they've been a feature of the Web since the very beginning, but they are what makes the Web a Web — they allow us to link our documents to any other document (or other resource) we want to, we can also link to specific parts of documents, and we can make apps available at a simple web address (contrast this to native apps, which have to be installed and all that business.) Just about any web content can be converted to a link, so that when clicked (or otherwise activated) it will make the web browser go to another web address (URL).
Note: A URL can point to HTML files, text files, images, text documents, video and audio files, and anything else that can live on the Web. If the web browser doesn't know how to display or handle the file, it will ask you if you want to open the file (in which case the duty of opening or handling the file is passed to a suitable native app on the device) or download the file (in which case you can try to deal with it later on.)


### HTML Links
Links are very important — they are what makes the web a web! To add a link, we need to use a simple element —  < a > — "a" being the short form for "anchor". To make text within your paragraph into a link
You might get unexpected results if you omit the https:// or http:// part, called the protocol, at the beginning of the web address. After making a link, click it to make sure it is sending you where you wanted it to.
href might appear like a rather obscure choice for an attribute name at first. If you are having trouble remembering it, remember that it stands for hypertext reference.
 < a href = "http://www.google.com" >Google  < /a >
 < a href = "http://www.amazon.com" >Amazon  < /a >
 < a href = "http://www.Apple.com" >Apple  < /a >
 < a href = "http://www.facebook.com" >Amazon  < /a >


Anatomy of a link
A basic link is created by wrapping the text (or other content, see Block level links) you want to turn into a link inside an  < a > element, and giving it an href attribute (also known as a Hypertext Reference , or target) that will contain the web address you want the link to point to.
Another attribute you may want to add to your links is title; this is intended to contain supplementary useful information about the link, such as what kind of information the page contains, or things to be aware of.
 < p >I'm creating a link to  < a href="https://www.mozilla.org/en-US/" title="The best place to find more information about Mozilla's mission and how to contribute" >the Mozilla homepage < /a >.  < /p >


Block versus inline elements
There are two important categories of elements in HTML which you should know about. They are block-level elements and inline elements.
Block-level elements form a visible block on a page — they will appear on a new line from whatever content went before it, and any content that goes after it will also appear on a new line. Block-level elements tend to be structural elements on the page that represent, for example, paragraphs, lists, navigation menus, footers, and so on. A block-level element wouldn't be nested inside an inline element, but it might be nested inside another block-level element.
Inline elements are those that are contained within block-level elements and surround only small parts of the document’s content, not entire paragraphs and groupings of content. An inline element will not cause a new line to appear in the document; they would normally appear inside a paragraph of text, for example an  < a > element (hyperlink) or emphasis elements such as  < em > or  < strong >.



Use clear link wording
It's easy to throw links up on your page. That's not enough. We need to make our links accessible to all readers, regardless of their current context and which tools they prefer. For example:
Screenreader users like jumping around from link to link on the page, and reading links out of context.
Search engines use link text to index target files, so it is a good idea to include keywords in your link text to effectively describe what is being linked to.
Visual readers skim over the page rather than reading every word, and their eyes will be drawn to page features that stand out, like links. They will find descriptive link text useful.



Link Tips
Good link text: Download Firefox
 < p > < a href="https://firefox.com/" > Downloa
Bad link text: Click here to download Firefox
 < p > < a href="https://firefox.com/" > Click here  < /a > to download Firefox < /p > d Firefox  < /a > < /p >

Other tips:
Don't repeat the URL as part of the link text — URLs look ugly, and sound even uglier when a screen reader reads them out letter by letter.
Don't say "link" or "links to" in the link text — it's just noise. Screen readers tell people there's a link. Visual users will also know there's a link, because links are generally styled in a different colour and underlined (this convention generally shouldn't be broken, as users are so used to it.)
Keep your link label as short as possible — long links especially annoy screen reader users, who have to hear the whole thing read out.
Minimize instances where multiple copies of the same text are linked to different places. This can cause problems for screenreader users, who will often bring up a list of the links out of context — several links all labelled "click here", "click here", "click here" would be confusing.



E-mail links
It is possible to create links or buttons that, when clicked, open a new outgoing email message rather than linking to a resource or page. This is done using the  < a > element and the mailto: URL scheme.
In its most basic and commonly used form, a mailto: link simply indicates the email address of the intended recipient. 
 < a href="mailto:nowhere@mozilla.org" >Send email to nowhere < /a >
In addition to the email address, you can provide other information. In fact, any standard mail header fields can be added to the mailto URL you provide. The most commonly used of these are "subject", "cc", and "body" (which is not a true header field, but allows you to specify a short content message for the new email). Each field and its value is specified as a query term.
 < a href="mailto:nowhere@mozilla.org?cc=name2@rapidtables.com&bcc=name3@rapidtables.com&subject=The%20subject%20of%20the%20email&body=The%20body%20of%20the%20email" > Send mail with cc, bcc, subject and body  < /a >




### HTML Images
HTML images are defined with the  < img > tag.
The source file (src), alternative text (alt), width, and height are provided as attributes:
 < img src="images/firefox-icon.png" alt="My test image" >
As we said before, it embeds an image into our page in the position it appears. It does this via the src (source) attribute, which contains the path to our image file.
We have also included an alt (alternative) attribute. In this attribute, you specify descriptive text for users who cannot see the image, possibly because of the following reasons:
They are visually impaired. Users with significant visual impairments often use tools called screen readers to read out the alt text to them.
Something has gone wrong causing the image not to display. For example, try deliberately changing the path inside your src attribute to make it incorrect. If you save and reload the page, you should see something like this in place of the image:The keywords for alt text are "descriptive text". The alt text you write should provide the reader with enough information to have a good idea of what the image conveys. 




HTML table basics
A table is a structured set of data made up of rows and columns (tabular data). A table allows you to quickly and easily look up values that indicate some kind of connection between different types of data, for example a person and their age, or a day of the week, or the timetable for a local swimming pool.
Table styling
You can also have a look at the live example on GitHub! One thing you'll notice is that the table does look a bit more readable there — this is because the table you see above on this page has minimal styling, whereas the GitHub version has more significant CSS applied.
Be under no illusion; for tables to be effective on the web, you need to provide some styling information with CSS, as well as good solid structure with HTML. In this module we are focusing on the HTML part; to find out about the CSS part you should visit our Styling tables article after you've finished here.

When should you NOT use HTML tables?
HTML tables should be used for tabular data — this is what they are designed for. Unfortunately, a lot of people used to use HTML tables to lay out web pages, e.g. one row to contain the header, one row to contain the content columns, one row to contain the footer, etc. You can find more details and an example at Page Layouts in our Accessibility Learning Module.
In short, using tables for layout rather than CSS layout techniques is a bad idea. The main reasons are as follows:
Layout tables reduce accessibility for visually impaired users: Screenreaders, used by blind people, interpret the tags that exist in an HTML page and read out the contents to the user. Because tables are not the right tool for layout, and the markup is more complex than with CSS layout techniques, the screenreaders' output will be confusing to their users.
Tables produce tag soup: As mentioned above, table layouts generally involve more complex markup structures than proper layout techniques. This can result in the code being harder to write, maintain, and debug.
Tables are not automatically responsive: When you use proper layout containers (such as  < header >,  < section >,  < article >, or  < div >), their width defaults to 100% of their parent element. Tables on the other hand are sized according to their content by default, so extra measures are needed to get table layout styling to effectively work across a variety of devices.



Adding headers with  < th > elements
Now let's turn our attention to table headers — special cells that go at the start of a row or column and define the type of data that row or column contains (as an example, see the "Person" and "Age" cells in the first example shown in this article). To illustrate why they are useful, have a look at the following table example. 
 < table >  < tr >  < td >&nbsp; < /td >  < td >Knocky < /td >  < td >Flor < /td >  < td >Ella < /td >  < td >Juan < /td >  < /tr >  < tr >  < td >Breed < /td >  < td >Jack Russell < /td >  < td >Poodle < /td >  < td >Streetdog < /td >  < td >Cocker Spaniel < /td >  < /tr >  < tr >  < td >Age < /td >  < td >16 < /td >  < td >9 < /td >  < td >10 < /td >  < td >5 < /td >  < /tr >  < tr >  < td >Owner < /td >  < td >Mother-in-law < /td >  < td >Me < /td >  < td >Me < /td >  < td >Sister-in-law < /td >  < /tr >  < tr >  < td >Eating Habits < /td >  < td >Eats everyone's leftovers < /td >  < td >Nibbles at food < /td >  < td >Hearty eater < /td >  < td >Will eat till he explodes < /td >  < /tr >  < /table >


Allowing cells to span multiple rows and columns
Sometimes we want cells to span multiple rows or columns. Take the following simple example, which shows the names of common animals. In some cases, we want to show the names of the males and females next to the animal name. Sometimes we don't, and in such cases we just want the animal name to span the whole table.
 < table >  < tr >  < th >Animals < /th >  < /tr >  < tr >  < th >Hippopotamus < /th >  < /tr >  < tr >  < th >Horse < /th >  < td >Mare < /td >  < /tr >  < tr >  < td >Stallion < /td >  < /tr >  < tr >  < th >Crocodile < /th >  < /tr >  < tr >  < th >Chicken < /th >  < td >Hen < /td >  < /tr >  < tr >  < td >Rooster < /td >  < /tr >  < /table >


Providing common styling to columns
There is one last feature we'll tell you about in this article before we move on. HTML has a method of defining styling information for an entire column of data all in one place — the  < col > and  < colgroup > elements. These exist because it can be a bit annoying and inefficient having to specify styling on columns — you generally have to specify your styling information on every  < td > or  < th > in the column, or use a complex selector such as :nth-child().
Note: Styling columns like this is limited to a few properties: border, background, width, and visibility. To set other properties you'll have to either style every  < td > or  < th > in the column, or use a complex selector such as :nth-child().



Web forms — Working with user data
Web forms are one of the main points of interaction between a user and a web site or application. Forms allow users to enter data, which is generally sent to a web server for processing and storage (see Sending form data later in the module), or used on the client-side to immediately update the interface in some way (for example, add another item to a list, or show or hide a UI feature).
A web form's HTML is made up of one or more form controls (sometimes called widgets), plus some additional elements to help structure the overall form — they are often referred to as HTML forms. The controls can be single or multi-line text fields, dropdown boxes, buttons, checkboxes, or radio buttons, and are mostly created using the  < input > element, although there are some other elements to learn about too.
Form controls can also be programmed to enforce specific formats or values to be entered (form validation), and paired with text labels that describe their purpose to both sighted and blind users.


### The  < label >,  < input >, and  < textarea > elements
Our contact form is not complex: the data entry portion contains three text fields, each with a corresponding  < label >:
The input field for the name is a single-line text field.
The input field for the e-mail is an input of type email: a single-line text field that accepts only e-mail addresses.
The input field for the message is a  < textarea >; a multiline text field.
In terms of HTML code we need something like the following to implement these form widgets:
 < form action="/my-handling-form-page" method="post" >  < ul >  < li >  < label for="name" >Name: < /label >  < input type="text" id="name" name="user_name" >  < /li >  < li >  < label for="mail" >E-mail: < /label >  < input type="email" id="mail" name="user_email" >  < /li >  < li >  < label for="msg" >Message: < /label >  < textarea id="msg" name="user_message" > < /textarea >  < /li >  < /ul >  < /form >


### The  < button > element
The markup for our form is almost complete; we just need to add a button to allow the user to send, or "submit", their data once they have filled out the form. This is done by using the  < button > element; add the following just above the closing  < /ul > tag:
 < li class="button" >  < button type="submit" >Send your message < /button >  < /li >The  < button > element also accepts a type attribute — this accepts one of three values: submit, reset, or button.
A click on a submit button (the default value) sends the form's data to the web page defined by the action attribute of the  < form > element.
A click on a reset button resets all the form widgets to their default value immediately. From a UX point of view, this is considered bad practice, so you should avoid using this type of button unless you really have a good reason to include one.
A click on a button button does... nothing! That sounds silly, but it's amazingly useful for building custom buttons — you can define their chosen functionality with JavaScript.
Note: You can also use the  < input > element with the corresponding type to produce a button, for example  < input type="submit" >. The main advantage of the  < button >element is that the  < input > element only allows plain text in its label whereas the  < button > element allows full HTML content, allowing more complex, creative button content.



### Basic form styling
Now that you have finished writing your form's HTML code, try saving it and looking at it in a browser. At the moment, you'll see that it looks rather ugly.
Note: If you don't think you've got the HTML code right, try comparing it with our finished example — see first-form.html (also see it live).
Forms are notoriously tricky to style nicely. It is beyond the scope of this article to teach you form styling in detail, so for the moment we will just get you to add some CSS to make it look OK.


### Sending form data to your web server 
The last part, and perhaps the trickiest, is to handle form data on the server side. The  < form >element defines where and how to send the data thanks to the action and methodattributes.
We provide a name to each form control. The names are important on both the client- and server-side; they tell the browser which name to give each piece of data and, on the server side, they let the server handle each piece of data by name. The form data is sent to the server as name/value pairs.
To name the data in a form you need to use the name attribute on each form widget that will collect a specific piece of data. Let's look at some of our form code again:




### The  < form > element
The  < form > element formally defines a form and attributes that determine the form's behavior. Each time you want to create an HTML form, you must start it by using this element, nesting all the contents inside. Many assistive technologies and browser plugins can discover  < form >elements and implement special hooks to make them easier to use.


### The  < fieldset > and  < legend > elements
The  < fieldset > element is a convenient way to create groups of widgets that share the same purpose, for styling and semantic purposes. You can label a  < fieldset > by including a  < legend > element just below the opening  < fieldset > tag. The text content of the  < legend > formally describes the purpose of the  < fieldset > it is included inside.
Many assistive technologies will use the  < legend > element as if it is a part of the label of each control inside the corresponding  < fieldset > element. 
 < form >  < fieldset >  < legend >Fruit juice size < /legend >  < p >  < input type="radio" name="size" id="size_1" value="small" >  < label for="size_1" >Small < /label >  < /p >  < p >  < input type="radio" name="size" id="size_2" value="medium" >  < label for="size_2" >Medium < /label >  < /p >  < p >  < input type="radio" name="size" id="size_3" value="large" >  < label for="size_3" >Large < /label >  < /p >  < /fieldset >  < /form >



### The  < label > element
As we saw in the previous article, The  < label > element is the formal way to define a label for an HTML form widget. This is the most important element if you want to build accessible forms — when implemented properly, screenreaders will speak a form element's label along with any related instructions, as well as it being useful for sighted users.
 < label for="name" >Name: < /label >  < input type="text" id="name" name="user_name" >
With the  < label > associated correctly with the  < input > via its for attribute (which contains the  < input > element's id attribute), a screenreader will read out something like "Name, edit text".
There is another way to associate a form control with a label — nest the form control within the  < label >, implicitly associating it.


### Common HTML structures used with forms
Beyond the structures specific to web forms, it's good to remember that form markup is just HTML. This means that you can use all the power of HTML to structure a web form.
As you can see in the examples, it's common practice to wrap a label and its widget with a  < li > element within a  < ul > or  < ol > list.  < p > and  < div > elements are also commonly used. Lists are recommended for structuring multiple checkboxes or radio buttons.
In addition to the  < fieldset > element, it's also common practice to use HTML titles (e.g.  < h1 >,  < h2 >) and sectioning (e.g.  < section >) to structure complex forms.
Above all, it is up to you to find a comfortable coding style that results in accessible, usable forms. Each separate section of functionality should be contained in a separate  < section >element, with  < fieldset > elements to contain radio buttons.



### Text input fields
Text  < input > fields are the most basic form widgets. They are a very convenient way to let the user enter any kind of data
Note: HTML form text fields are simple plain text input controls. This means that you cannot use them to perform rich editing (bold, italic, etc.). All rich text editors you'll encounter are custom widgets created with HTML, CSS, and JavaScript.
All basic text controls share some common behaviors:
They can be marked as readonly (the user cannot modify the input value but it is still sent with the rest of the form data) or disabled (the input value can't be modified and is never sent with the rest of the form data).
They can have a placeholder; this is text that appears inside the text input box that should be used to briefly describe the purpose of the box.
They can be constrained in size (the physical size of the box) and maxlength (the maximum number of characters that can be entered into the box).
They can benefit from spell checking (using the spellcheck attribute), if the browser supports it.
Note: The  < input > element is unique amongst HTML elements because it can take many different forms depending on its type attribute value. It is used for creating most types of form widgets including single line text fields, time and date controls, controls without text input like checkboxes, radio buttons, and color pickers, and buttons.



### Single line text fields
A single line text field is created using an  < input > element whose type attribute value is set to text, or by omitting the  type attribute altogether (text is the default value). The value text for this attribute is also the fallback value if the value you specify for the type attribute is unknown by the browser (for example if you specify type="color" and the browser doesn't support native color pickers).

### Password field
One of the original input types was the password text field type:
 < input type="password" id="pwd" name="pwd" >The password value doesn't add any special constraints to the entered text, but it does obscure the value entered into the field (e.g. with dots or asterisks) so it can't be easily read by others.
Keep in mind this is just a user interface feature; unless you submit your form securely, it will get sent in plain text, which is bad for security — a malicious party could intercept your data and steal passwords, credit card details, or whatever else you've submitted. The best way to protect users from this is to host any pages involving forms over a secure connection (i.e. at an https:// ... address), so the data is encrypted before it is sent.
Browsers recognize the security implications of sending form data over an insecure connection, and have warnings to deter users from using insecure forms. For more information on what Firefox implements

### Hidden content

Another original text control is the hidden input type. This is used to create a form control that is invisible to the user, but is still sent to the server along with the rest of the form data once submitted — for example you might want to submit a timestamp to the server stating when an order was placed. Because it is hidden, the user can not see nor intentionally edit the value, it will never receive focus, and a screen reader will not notice it either.
 < input type="hidden" id="timestamp" name="timestamp" value="1286705410" > If you create such an element, it's required to set its name and value attributes. The value can be dynamically set via JavaScript. The hidden input type should not have an associated label.
Other text input types, like search, url, and tel, were added with HTML5. Those will be covered in the next tutorial, HTML5 input types.



### Checkable items: checkboxes and radio buttons


Checkable items are controls whose state you can change by clicking on them or their associated labels. There are two kinds of checkable item: the check box and the radio button. Both use the checked attribute to indicate whether the widget is checked by default or not.
It's worth noting that these widgets do not behave exactly like other form widgets. For most form widgets, once the form is submitted all widgets that have a name attribute are sent, even if no value has been filled out. In the case of checkable items, their values are sent only if they are checked. If they are not checked, nothing is sent, not even their name. If they are checked but have no value, the name is sent with a value of on.



### Check box
A check box is created using the  < input > element with a type attribute set to the value checkbox.
 < input type="checkbox" id="carrots" name="carrots" value="carrots" checked > Including the checked attribute makes the checkbox checked automatically when the page loads. Clicking the checkbox or its associated label toggles the checkbox on and off.

### Radio button
A radio button is created using the  < input > element with its type attribute set to the value radio:
 < input type="radio" id="soup" name="meal" checked >Several radio buttons can be tied together. If they share the same value for their nameattribute, they will be considered to be in the same group of buttons. Only one button in a given group may be checked at a time; this means that when one of them is checked all the others automatically get unchecked. When the form is sent, only the value of the checked radio button is sent. If none of them are checked, the whole pool of radio buttons is considered to be in an unknown state and no value is sent with the form. Once one of the radio buttons in a same-named group of buttons is checked, it is not possible for the user to uncheck all of the buttons without resetting the form.
 < fieldset >  < legend >What is your favorite meal? < /legend >  < ul >  < li >  < label for="soup" >Soup < /label >  < input type="radio" id="soup" name="meal" value="soup" checked >  < /li >  < li >  < label for="curry" >Curry < /label >  < input type="radio" id="curry" name="meal" value="curry" >  < /li >  < li >  < label for="pizza" >Pizza < /label >  < input type="radio" id="pizza" name="meal" value="pizza" >  < /li >  < /ul >  < /fieldset >



### Multi-line text fields
A multi-line text field is specified using a  < textarea > element, rather than using the  < input > element.
 < textarea cols="30" rows="8" > < /textarea >
The main difference between a  < textarea > and a regular single line text field is that users are allowed to include hard line breaks (i.e. pressing return) that will be included when the data is submitted.
 < textarea > also takes a closing tag, and any default text you want it to contain should be put between the opening and closing tags. In contrast, the  < input > is an empty element with no closing tag — any default value is put inside the value attribute.
Note that even though you can put anything inside a  < textarea > element (including other HTML elements, CSS, and JavaScript), because of its nature, it is all rendered as if it was plain text content. (Using contenteditable on non-form controls provides an API for capturing HTML/"rich" content instead of plain text).
Visually, the text entered wraps and the form control is by default resizable. Modern browsers provide a drag handle that you can drag to increase/decrease the size of the text area.




### Controlling multi-line rendering
 < textarea > accepts three attributes to control its rendering across several lines:
Cols specifies the visible width (columns) of the text control, measured in average character widths. This is effectively the starting width, as it can be changed by resizing the  < textarea >, and overriden using CSS. The default value if none is specified is 20.rowsSpecifies the number of visible text rows for the control. This is effectively the starting height, as it can be changed by resizing the  < textarea >, and overriden using CSS. The default value if none is specified is 2.wrapSpecifies how the control wraps text. The values are soft (the default value), which means the text submitted is not wrapped but the text rendered by the browser is wrapped; hard (the cols attribute must be specified when using this value), which means both the submitted and rendered texts are wrapped, and off, which stops wrapping.


### Controlling textarea resizability

The ability to resize a  < textarea > is controlled with the CSS resize property. Its possible values are:
both: The default — allows resizing horizontally and vertically.
horizontal: Allows resizing only horizontally.
vertical: Allows resizing only vertically.
none: Allows no resizing.
block and inline: Experimental values that allow resizing in the block or inlinedirection only (this varies depending on the directionality of your text; read Handling different text directions if you want to find out more.)
Play with the interactive example at the top of the resize reference page for a demonstration of how these work.




### Drop-down controls

Drop-down controls are a simple way to let users select from many different options without taking up much space in the user interface. HTML has two forms of drop down content: the select box, and the autocomplete box. In both cases the interaction is the same — once the control is activated, the browser displays a list of values the user can select between.



### Select box
A simple select box is created with a  < select > element with one or more  < option >elements as its children, each of which specifies one of its possible values.

 < !DOCTYPE html >
 < head >
	 < title > < /title >
 < /head >
 < body >

	 < select >
		 < option name = "1" > this is the first one  < /option >
		 < option name = "2" > this is the second one  < /option >
		 < option name = "3" > this is the third one  < /option >
	 < /select >

 < /body >
 < /html >

 < select id="simple" name="simple" >  < option >Banana < /option >  < option selected >Cherry < /option >  < option >Lemon < /option >  < /select >
If required, the default value for the select box can be set using the selected attribute on the desired  < option > element — this option is then preselected when the page loads.
The  < option > elements can be nested inside  < optgroup > elements to create visually associated groups of values:
 < select id="groups" name="groups" >  < optgroup label="fruits" >  < option >Banana < /option >  < option selected >Cherry < /option >  < option >Lemon < /option >  < /optgroup >  < optgroup label="vegetables" >  < option >Carrot < /option >  < option >Eggplant < /option >  < option >Potato < /option >  < /optgroup >  < /select >
On the  < optgroup > element, the value of the label attribute is displayed before the values of the nested options. The browser usually sets them visually apart from the options (i.e. by being bolded and at a different nesting level) so they are less likely to be confused for actual options.
If an  < option > element has an explicit value attribute set on it, that value is sent when the form is submitted with that option selected. If the value attribute is omitted, as with the examples above, the content of the  < option > element is used as the value. So valueattributes are not needed, but you might find a reason to want to send a shortened or different value to the server than what is visually shown in the select box.



### Multiple choice select box
By default, a select box only lets the user select a single value. By adding the multipleattribute to the  < select > element, you can allow users to select several values, by using the default mechanism provided by the operating system (e.g. holding down Cmd/Ctrl and clicking multiple values on desktop).
 < select id="multi" name="multi" multiple size="2" >  < optgroup label="fruits" >  < option >Banana < /option >  < option selected >Cherry < /option >  < option >Lemon < /option >  < /optgroup >  < optgroup label="vegetables" >  < option >Carrot < /option >  < option >Eggplant < /option >  < option >Potato < /option >  < /optgroup >  < /select >



### Autocomplete box


You can provide suggested, automatically-completed values for form widgets using the  < datalist > element with child  < option > elements to specify the values to display. The  < datalist > needs to be given an id.
The data list is then bound to an  < input > element (e.g. a text or email input type) using the list attribute, the value of which is the id of the data list to bind.
Once a data list is affiliated with a form widget, its options are used to auto-complete text entered by the user; typically, this is presented to the user as a drop-down box listing possible matches for what they've typed into the input.

 < label for="myFruit" >What's your favorite fruit? < /label >  < input type="text" name="myFruit" id="myFruit" list="mySuggestion" >  < datalist id="mySuggestion" >  < option >Apple < /option >  < option >Banana < /option >  < option >Blackberry < /option >  < option >Blueberry < /option >  < option >Lemon < /option >  < option >Lychee < /option >  < option >Peach < /option >  < option >Pear < /option >  < /datalist >




###### Datalist support and fallbacks
Almost all browsers support datalist, but if you are still supporting older browsers such as IE versions below 10, there is a trick to provide a fallback:
 < label for="myFruit" >What is your favorite fruit? (With fallback) < /label >  < input type="text" id="myFruit" name="fruit" list="fruitList" >  < datalist id="fruitList" >  < label for="suggestion" >or pick a fruit < /label >  < select id="suggestion" name="altFruit" >  < option >Apple < /option >  < option >Banana < /option >  < option >Blackberry < /option >  < option >Blueberry < /option >  < option >Lemon < /option >  < option >Lychee < /option >  < option >Peach < /option >  < option >Pear < /option >  < /select >  < /datalist >



###### Less obvious datalist uses
According to the HTML specification, the list attribute and the  < datalist > element can be used with any kind of widget requiring a user input. This leads to some uses of it that might seem a little non-obvious.
For example, in browsers that support  < datalist > on range input types, a small tick mark will be displayed above the range for each datalist  < option > value. You can see an implementation example of this on the  < input type="range" > reference page.
And browsers that support  < datalist >s and  < input type="color" > should display a customized palette of colors as the default, while still making the full color palette available.
In this case, different browsers behave differently from case to case, so consider such uses as progressive enhancement, and ensure they degrade gracefully.




### Actual buttons
The radio button isn't actually a button, despite its name; let's move on and look at actual buttons! There are three input types that produce buttons:
submitSends the form data to the server. For  < button > elements, omitting the type attribute (or an invalid value of type) results in a submit button.resetResets all form widgets to their default values.buttonButtons that have no automatic effect but can be customized using JavaScript code.In addition, the  < button > element can take a type attribute to mimic these three input types. The main difference between the two is that actual  < button > elements are much more stylable.






### Submit
 < button type="submit" > This is a  < strong >submit button < /strong >  < /button >  < input type="submit" value="This is a submit button" >reset
 < button type="reset" > This is a  < strong >reset button < /strong >  < /button >  < input type="reset" value="This is a reset button" >anonymous
 < button type="button" > This is an  < strong >anonymous button < /strong >  < /button >  < input type="button" value="This is an anonymous button" >
Buttons always behave the same whether you use a  < button > element or an  < input >element. As you can see from the examples, however,  < button > elements let you use HTML in their content, which is inserted between the opening and closing  < button > tags.  < input >elements on the other hand are empty elements; their displayed content is inserted inside the value attribute, and therefore only accepts plain text as content.



### Image button

The image button control is rendered exactly like an  < img > element, except that when the user clicks on it, it behaves like a submit button.
An image button is created using an  < input > element with its type attribute set to the value image. This element supports exactly the same set of attributes as the  < img > element, plus all the attributes supported by other form buttons.
 < input type="image" alt="Click me!" src="my-img.png" width="80" height="30" >If the image button is used to submit the form, this control doesn't submit its value — instead, the X and Y coordinates of the click on the image are submitted (the coordinates are relative to the image, meaning that the upper-left corner of the image represents the coordinate (0, 0)). The coordinates are sent as two key/value pairs:
The X value key is the value of the name attribute followed by the string ".x".
The Y value key is the value of the name attribute followed by the string ".y".





### File picker
There is one last  < input > type that came to us in early HTML: the file input type. Forms are able to send files to a server (this specific action is also detailed in the Sending form dataarticle). The file picker widget can be used to choose one or more files to send.
To create a file picker widget, you use the  < input > element with its type attribute set to file. The types of files that are accepted can be constrained using the accept attribute. In addition, if you want to let the user pick more than one file, you can do so by adding the multiple attribute.

### Nesting elements
Elements can be placed within other elements too — this is called nesting. If we wanted to state that our cat is very grumpy, we could wrap the word "very" in a  < strong > element, which means that the word is to be strongly emphasized

The elements have to open and close correctly, so they are clearly inside or outside one another. If they overlap like above, then your web browser will try to make a best guess at what you were trying to say, and you may well get unexpected results. So don't do it!
 < p >My cat is  < strong >very grumpy. < /p > < /strong >



### Empty elements
Not all elements follow the above pattern of an opening tag, content, and a closing tag. Some elements consist only of a single tag, which is usually used to insert/embed something in the document at the place it is included.
 < img / >
 < hr/ >
 < br/ >



### Attributes
Attributes contain extra information about the element that you don't want to appear in the actual content. In this case, the class attribute allows you to give the element an identifying name, that can be used later to target the element with style information and other things.
An attribute should have:
A space between it and the element name (or the previous attribute, if the element already has one or more attributes).
The attribute name, followed by an equal sign.
An attribute value, with opening and closing quote marks wrapped around it.
Another example of an element is  < a > — this stands for "anchor" and will make the piece of text it wraps around into a hyperlink. This can take a number of attributes, but several are as follows:
href: This attribute's value specifies the web address that you want the link to point to; where the browser navigates to when the link is clicked. For example, href="https://www.mozilla.org/".
title: The title attribute specifies extra information about the link, such as what page is being linked to. For example, title="The Mozilla homepage". This will appear as a tooltip when the element is hovered over.
target: The target attribute specifies the browsing context that will be used to display the link. For example, target="_blank" will display the link in a new tab. If you want to display the link in the current tab, just omit this attribute.
Edit the line below in the Input area to turn it into a link to your favorite website.
First, add the  < a > element.
Second, add the href attribute and the title attribute.
Lastly, specify the target attribute to open the link in the new tab.




### Boolean Attributes
called Boolean attributes, and they can only have one value, which is generally the same as the attribute name. As an example, take the disabled attribute, which you can assign to form input elements, if you want them to be disabled (greyed out) so the user can't enter any data in them.
 < input type="text" disabled="disabled" >



### Omitting quotes around attribute values
At this point the browser will misinterpret your markup, thinking that the title attribute is actually three attributes — a title attribute with the value "The", and two Boolean attributes, Mozilla and homepage.
 < a href=https://www.mozilla.org/ title=The Mozilla homepage >favorite website < /a > This is obviously not what was intended, and will cause errors or unexpected behavior in the code, as seen in the live example below.


### Debugging HTML

When writing code of some kind, everything is usually fine, until that dreaded moment when an error occurs — you've done something wrong, so your code doesn't work — either not at all, or not quite how you wanted it to.
HTML is not compiled into a different form before the browser parses it and shows the result (it is interpreted, not compiled). And HTML's element syntax is arguably a lot easier to understand than a "real programming language" like Rust, JavaScript, or Python. The way that browsers parse HTML is a lot more permissive than how programming languages are run, which is both a good and a bad thing.


### Permissive code
So what do we mean by permissive? Well, generally when you do something wrong in code, there are two main types of error that you'll come across:
Syntax errors: These are spelling errors in your code that actually cause the program not to run, like the Rust error shown above. These are usually easy to fix as long as you are familiar with the language's syntax and know what the error messages mean.
Logic errors: These are errors where the syntax is actually correct, but the code is not what you intended it to be, meaning that program runs incorrectly. These are often harder to fix than syntax errors, as there isn't an error message to direct you to the source of the error.
HTML itself doesn't suffer from syntax errors because browsers parse it permissively, meaning that the page still displays even if there are syntax errors. Browsers have built-in rules to state how to interpret incorrectly written markup, so you'll get something running, even if it is not what you expected.
Note: HTML is parsed permissively because when the web was first created, it was decided that allowing people to get their content published was more important than making sure the syntax was absolutely correct. The web would probably not be as popular as it is today, if it had been more strict from the very beginning.



### HTML validation
So you can see from the above example that you really want to make sure your HTML is well-formed! But how? In a small example like the one seen above, it is easy to search through the lines and find the errors, but what about a huge, complex HTML document?
The best strategy is to start by running your HTML page through the Markup Validation Service— created and maintained by the W3C, the organization that looks after the specifications that define HTML, CSS, and other web technologies. This webpage takes an HTML document as an input, goes through it, and gives you a report to tell you what is wrong with your HTML.




### Interpreting the error messages
The error messages are usually helpful, but sometimes they are not so helpful; with a bit of practice you can work out how to interpret these to fix your code. Let's go through the error messages and what they mean. You'll see that each message comes with a line and column number to help you to locate the error easily.
"End tag li implied, but there were open elements" (2 instances): These messages indicate that an element is open that should be closed. The ending tag is implied, but not actually there. The line/column information points to the first line after the line where the closing tag should really be, but this is a good enough clue to see what is wrong.
"Unclosed element strong": This is really easy to understand — a  < strong > element is unclosed, and the line/column information points right to where it is.
"End tag strong violates nesting rules": This points out the incorrectly nested elements, and the line/column information points out where it is.
"End of file reached when inside an attribute value. Ignoring tag": This one is rather cryptic; it refers to the fact that there is an attribute value not properly formed somewhere, possibly near the end of the file because the end of the file appears inside the attribute value. The fact that the browser doesn't render the link should give us a good clue as to what element is at fault.




### Basic sections of a document
Webpages can and will look pretty different from one another, but they all tend to share similar standard components, unless the page is displaying a fullscreen video or game, is part of some kind of art project, or is just badly structured:

header:
Usually a big strip across the top with a big heading, logo, and perhaps a tagline. This usually stays the same from one webpage to another.
navigation bar:
Links to the site's main sections; usually represented by menu buttons, links, or tabs. Like the header, this content usually remains consistent from one webpage to another — having inconsistent navigation on your website will just lead to confused, frustrated users. Many web designers consider the navigation bar to be part of the header rather than an individual component, but that's not a requirement; in fact, some also argue that having the two separate is better for accessibility, as screen readers can read the two features better if they are separate.
main content:
A big area in the center that contains most of the unique content of a given webpage, for example, the video you want to watch, or the main story you're reading, or the map you want to view, or the news headlines, etc. This is the one part of the website that definitely will vary from page to page!
sidebar:
Some peripheral info, links, quotes, ads, etc. Usually, this is contextual to what is contained in the main content (for example on a news article page, the sidebar might contain the author's bio, or links to related articles) but there are also cases where you'll find some recurring elements like a secondary navigation system.
footer:
A strip across the bottom of the page that generally contains fine print, copyright notices, or contact info. It's a place to put common information (like the header) but usually, that information is not critical or secondary to the website itself. The footer is also sometimes used for SEO purposes, by providing links for quick access to popular content.


