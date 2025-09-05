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

2. Now install parcel   
   => npn install parcel 

=> Successfully done

<!-- About this package.json file -->
=> Iske pass saari information rheti h apne project ke andar.
=> It's is like metadata => Data about data,
   means jo bi data mera project ka h uska data present h isme.

<!-- Node module package -->   
=> When we installed parcel, then this file generated.

<!-- npm -->
=> Mostly people called it's as "node package manager" as it's full form,
   but npm is npm only, have no full form but people make this full form, so we can
   say it node package manager also.
=> npm ke andar saara code avaiable rheta h parcel ka, ts, js aur etc.
=> npm ko as database bol skte h js code ka jha sara data pda h, bas direct use kr lo, kudh se likhne ki bjaye.
=> means, phele se kisi n humare liye code likh kr rkha h aur usko as npm m daal diya h.
=> Even react, reactDOM iss sab ka code bhi yha present hoga, ek toh cdn links m tha, but officially yha pr npm m present h.
=> Means, we can say development se related saare code present h isme as package aur inn 
packages ko hum direct install kr skte h apne system mein.
=> Hume idr udr dundhna na pde koi bhi code, isliye direct npm use krke install kr skte h saara code apne system mein or apne projects mein.
=> Even hum apna contribution m daal skte h npm m as js code bcoz yhe open source h sabke liye free bhi h.
=> Means, direct kisi ki functinality ko use kr skhe, kudh se manually likhna pde. isliye hum npm install krke sab data apne project m daal lete h.

<!-- npm init -->
=> npm k kisi bhi package ki use krna h toh, means npm se kisi bhi package ko lekar aana h
toh unn sab ki information isme rheti h. so isse package.json file craete hogi aur usme detail hogi project se related.

<!-- npm install parcel -->
=> yhe jese hi run krenge toh package.json file m last  thoda sa change hoga bas, usme
   2 line extra aajyegi "dependences" aur uske andar "parecl" version, like this:-
   "dependencies": {
    "parcel": "^2.15.4"
   }
=> Aur "node_modules" krke bhi ek file aajyegi jese hi npm install parcel krenge aur isme rkha hoga apna parcel in parcel folder.
=> But parcel k saath bhaut saari aur bhi files aayi h node_modules mein, why ??
=> Bcoz parcel jisne bnaya h usne bhi other code funtionality ko use krke parcel ka code likha h, suru se code toh usne bhi nhi likha, toh yhe baaki saari files dependenices h parcel ki, yhe parcel inn saari other files packages pr dependent h aur yhe baaki saari files bhi ek dusre pr dependent h isliye yhe saari baaki folders bhi aaye h jisme code h bhuat saara.
=> So, we can say "node_modules" mein wo saara code present h jo parcel ko chalane waale h, jinse apna parcel chalega.

# Now no need to paste cdn links for react & reactDOM in html, we will directly install tha react & reactDOM using npm.

<!-- Install react -->
=> npm install react => react bhi aagyi, check node_modules.
=> react ka package bhi aagya.

=> All things which we will install using npm will be installed in node_modules

<!-- Install react-dom -->
=> npm install react-dom => react-dom folder bhi aajyega ab node_modules mein jisme code pda hoga uska.

=> So, all packages are there in npm, we just need to install them.

<!-- package.json -->
=> Now,if we check "package.json", there are react and react-dom also added in dependencies.
=> Means "package.json" mein wo apna project kis kis pr dependent h wo saari information h, like this:-

"dependencies": {
    "parcel": "^2.15.4",
    "react": "^19.1.1",
    "react-dom": "^19.1.1"
  }

=> So, apna project fhilal "parcel", "react" & "react-dom" pr dependent h that's why all these are written in "dependencies".
=> Inn sabke saamne unka version bhi mentioned h latest wala, so hum latest "React-19" hi use krenge apne projects mein.

<!-- Version -->
=> Version always written like this format: - 18.2.3  
=> Here, version format like this above one have 3 types of values
   1. Major --> 18
   2. Minor --> .2
   3. Patch --> .3

1. Patch
=> this means when any bug fix then this will included in version format, means when there is no any other funtionality added, only some bugs has fixed.
=> Hence, patch will not impact anything on entrire project.

2. Minor
=> This means a small new funtionalty has added with previous major funtioanlity within it. means, no any change in other funtionalty. It will not impact on our project.

3. Major
=> This means a big change in our project happend, a complete new functioanlty added, and if we can't change complete code according to that functioanlity then our entire project can crash, ppora code phase barbad ho skta h, that's why direct kbhi major chnage nhi aata, humesa thoda thoda minor or patch changes krke krke usko as major chnage m convert kiya jata h.

=> But here we have this ^ extra symbol also in below verions in packages.json file:- 

    "parcel": "^2.15.4",
    "react": "^19.1.1",
    "react-dom": "^19.1.1"

=> ^ => This symbol is known as "carot" which means only "minor" and "patch" chnages hi lega apna yhe code, no any "major" change.
=> Somewhere ~ => this tild symbol also included rather than ^ carot symbol, this tild means that takes only "patches" change in code, nothing else.

<!-- package-lock.json -->
=> In this all packages excact version information has stored, means exact konse version h unn sab packages ke wo mentioned h iss file mein.
=> Jitne bhi packages apna project code m use hone wala h unn sab ka excat version strored rheta h isme, that's why have many packages information mentioned.

<!-- Advantage of package-lock.json -->
=> Isse yhe faida h ki apne code n excatly konse verisons k packages ka use kiya h taaki agar koi aur same project banana chaiye yha same mera project run krna chaiye yha hum same project kisi aur system pr use krna chaiye toh hume pta ho ki wo project konse versions k saare packages ko use krke bna h.
=> Means packages jitne bhi h inke verions to new aate rhenge but aap chaate ho same project kuch time baad run krna fhir se but exact same hona chiaye toh m same verions use kr lunga.

<!-- Not to do -->
=> It's recomended that don't share this node module file in your github rep as we checked it's around 300 MB file which is very big size.
=> Isko to hum kudh generate kr skte h, mtlb baakion k aapke project k code se mtlb h wo node module to kudh se generate kr lenge apne system mein
=> Just share that json.package file & package-lock.json file along with your html, css and js file. Baakiyon m bhi exactly same project chal jaayega wese hi jese apne mein chal rha hoga.
=> Bas, ek kaam krna h unko => "npm install" => node module aajyega unke m bhi aur jitni bhi dependencies thi wo sab aajyegi usme.
=> But bas iss "npm install" se kese exact same packages k version aagye node module m kisi aur k system m bhi jo m use kr rha tha, bcoz of that "package-lock.json file", iss file mein wo sab information h ki konse packages ka excat kons aversion download krna h muhe kisi aurk system mein bhi.
=> So, jese hi "npm install" run kiya toh wo sabse phele 'package-lock.json file" ke pass jaayega aur wha se verions related info uthayega aur same verion k packages install kr dega react, react-dom aur baaki sab ke.
=> Hence, ab koi bhi uss same project ko run kr skta h

<!-- Aur agar kisi project mein nhi h apne pass "package-lock.json file" yha koi bhul gya yhe file dena tb kese pta chalega npm ko ki konsa version ka packages download krne h node module m ?? -->

=> The, it will check package.json file, wha pr dependencies mein wo jo version mention hoga uss verion ko dwnload kr lega, agar koi minor update bhi aaya hoga toh usko bhi le lega wo uss purane version k saath kyunki usme ^ carot ka symbol hoga jiska mtlb h minor & patch verion update allowed h uss code mein, mera project m koi dikkat nhi aayegi. Work same with all dependencies like here we have "parcel", "react" & "react-dom".

=>







