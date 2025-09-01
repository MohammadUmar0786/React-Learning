<!-- Styling, id, class in React -->
=> {style:{color:"white",backgroundColor:"blue"}};

const element1 = React.createElement("h1",{id:"heading1",className:"heading",style:{color:"white",backgroundColor:"blue"}},"Hello Coder Army");

=> class is already a keyword in js, so have to use "className", as "class" keyword will confilict, same we have already used className while creating elements in js during js series.

<!-- Problem -->
=> When we render more than one element using in react
than it will remove all previous render elements and other child elements also which are in our div root.
=> In simple words, when new element render in root or in html than previous data will be removed.
=>Only single element will render at a time
=> There will be only show last render element in browser.

<!-- Solution -->
=> If we create a div and put those h1 & h2 elements in that div then render that div bcoz it rendering only one element at a time, so both elements will show in browser. hence our problem has solved.

<!--Problem -->
=> But let suppose we want to ceate these following elements:
<div>
    <div>
        <h1>
            <p>
                
            </p>
        </h1>
    </div>
</div>
=> This will be very complex to create all above elements inside elements and render parent div using react.
=> Isse accah to Js hi tha, wha krna jada easy tha.
=> We can write above html code in our react js also with help of "JSX"

<!--JSX -->
=> JSX  is not part of React & JS, this is other functonality.
=> JSX  allows us to write html code in react-js
=> It will convert that html code in react element automatically, we can just write in html way.
=> Let understand it and used it in other lec, not today.
=> So, JSX nhi tha usse phele apne above complex way mein hi code likhte the.

<!-- Very-Important -->
# Kya yhe apna poora code jo h wo production ready ? kya yhe fully optiized h ?
=> NO, Bcoz we have many extra things here in our code. like:- extra spaces, comments, React & ReactDOM extra code which we are using here using cdn, cdn network calls again & again for these React & ReactDOM code, let we have images also, need to compress those images, So we have alot of extra things which we are not using in our project.
=> Due to these, file size increases which is not good for production level.
=> Our main problem is size of file, we need very less size of code with all exra things removed.
=> We have to optimized our code to run smoothly
=> Hence, this problem is solved by "Bundler".

<!-- "Bundler" => Very Important for optimized code -->
=> It will read all our code files and hume bundle bna ke de deta h, and now this bundle code we can use for production, means can deploy project which will be full optimized.
=> Jitni bhi dependencies h, means apna code jo jo cheeze use kr rha  like: React, ReactDOM, CSS, html, js etc all those things which are need to run of code or project is known as "Dependencies".
=> So, blunder will handle all those dependencies which need to run and optimize them.
=> Hence, it will takes all those needfull code, & will remove all other unnecessary code and make a bundle of that code. Now we can use that bundle code for production which is more optimized.

<!-- Different types of bundler -->
=> We have different bundlers, like: "Webpack", "vite", "parcel" & etc.

=>So, yhe optimization ka kaam bundlers ka h, react ka nhi h. yhe ek bhaut bda myth h ki react krta h optimization wala kaam.

=> We will use "Parcel" bundler in our course.

<!-- Steps to install parcel bundler -->
1. Firstly we need to create package.json file.
   => npm init + enter
   => Now it will ask package name => write in small letters only, let name => reactbasic
   => Version auto show
   => Description: any, let => "Learning React"
   => entry pont auto
   => test command: leave for now
   => git repo.: can paste link of your repo or can skip also
   => keywords : can skip
   => author: your name or can skip
   => npn install parcel

