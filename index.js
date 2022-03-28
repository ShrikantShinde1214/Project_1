
const express=require("express");
const app=express()
const PORT=5671

app.get('/', (req, res) =>{
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <title>Webpage Design</title>
        <link rel="stylesheet" href="style.css">
        <style>
        *{
            margin:0;
            padding: 0;
        }
        
        .main{
            width: 100%;
            background: linear-gradient(to top, rgba(0,0,0,0.5)50%,rgba(0,0,0,0.5)50%),url(https://i.postimg.cc/YqFd6KWs/1.jpg);
            background-position: center;
            background-size: cover;
            height: 100vh;
        }
        
        .navbar{
            width: 1200px;
            height: 75px;
            margin: auto;
        }
        
        .icon{
            width: 200px;
            float: left;
            height: 70px;
        }
        
        .logo{
            color: #ff7200;
            font-size: 35px;
            font-family: small-caps;
            padding-left: 20px;
            float: left;
            padding-top: 10px;
            margin-top: 5px
        }
        
        .menu{
            width: 400px;
            float: left;
            height: 70px;
        }
        
        ul{
            float: left;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        ul li{
            list-style: none;
            margin-left: 62px;
            margin-top: 27px;
            font-size: 14px;
        }
        
        ul li a{
            text-decoration: none;
            color: #fff;
            font-family: Arial;
            font-weight: bold;
            transition: 0.4s ease-in-out;
        }
        
        ul li a:hover{
            color: #ff7200;
        }
        
        .search{
            width: 330px;
            float: left;
            margin-left: 270px;
        }
        
        .srch{
            font-family: 'Times New Roman';
            width: 200px;
            height: 40px;
            background: transparent;
            border: 1px solid #ff7200;
            margin-top: 13px;
            color: #fff;
            border-right: none;
            font-size: 16px;
            float: left;
            padding: 10px;
            border-bottom-left-radius: 5px;
            border-top-left-radius: 5px;
        }
        
        .btn{
            width: 100px;
            height: 40px;
            background: #ff7200;
            border: 2px solid #ff7200;
            margin-top: 13px;
            color: #fff;
            font-size: 15px;
            border-bottom-right-radius: 5px;
            border-bottom-right-radius: 5px;
            transition: 0.2s ease;
            cursor: pointer;
        }
        .btn:hover{
            color: #000;
        }
        
        .btn:focus{
            outline: none;
        }
        
        .srch:focus{
            outline: none;
        }
        
        .content{
            width: 1200px;
            height: auto;
            margin: auto;
            color: #fff;
            position: relative;
        }
        
        .content .par{
            padding-left: 20px;
            padding-bottom: 25px;
            font-family: Arial;
            letter-spacing: 1.2px;
            line-height: 30px;
        }
        
        .content h1{
            font-family: 'Times New Roman';
            font-size: 50px;
            padding-left: 20px;
            margin-top: 9%;
            letter-spacing: 2px;
        }
        
        .content .cn{
            width: 160px;
            height: 40px;
            background: #ff7200;
            border: none;
            margin-bottom: 10px;
            margin-left: 20px;
            font-size: 18px;
            border-radius: 10px;
            cursor: pointer;
            transition: .4s ease;
            
        }
        
        .content .cn a{
            text-decoration: none;
            color: #000;
            transition: .3s ease;
        }
        
        .cn:hover{
            background-color: #fff;
        }
        
        .content span{
            color: #ff7200;
            font-size: 65px
        }
        
        .form{
            width: 250px;
            height: 380px;
            background: linear-gradient(to top, rgba(0,0,0,0.8)50%,rgba(0,0,0,0.8)50%);
            position: absolute;
            top: -20px;
            left: 870px;
            transform: translate(0%,-5%);
            border-radius: 10px;
            padding: 25px;
        }
        
        .form h2{
            width: 220px;
            font-family: sans-serif;
            text-align: center;
            color: #ff7200;
            font-size: 22px;
            background-color: #fff;
            border-radius: 10px;
            margin: 2px;
            padding: 8px;
        }
        
        .form input{
            width: 240px;
            height: 35px;
            background: transparent;
            border-bottom: 1px solid #ff7200;
            border-top: none;
            border-right: none;
            border-left: none;
            color: #fff;
            font-size: 15px;
            letter-spacing: 1px;
            margin-top: 30px;
            font-family: sans-serif;
        }
        
        .form input:focus{
            outline: none;
        }
        
        ::placeholder{
            color: #fff;
            font-family: Arial;
        }
        
        .btnn{
            width: 240px;
            height: 40px;
            background: #ff7200;
            border: none;
            margin-top: 30px;
            font-size: 18px;
            border-radius: 10px;
            cursor: pointer;
            color: #fff;
            transition: 0.4s ease;
        }
        .btnn:hover{
            background: #fff;
            color: #ff7200;
        }
        .btnn a{
            text-decoration: none;
            color: #000;
            font-weight: bold;
        }
        .form .link{
            font-family: Arial, Helvetica, sans-serif;
            font-size: 17px;
            padding-top: 20px;
            text-align: center;
        }
        .form .link a{
            text-decoration: none;
            color: #ff7200;
        }
        .liw{
            padding-top: 15px;
            padding-bottom: 10px;
            text-align: center;
        }
        .icons a{
            text-decoration: none;
            color: #fff;
        }
        .icons ion-icon{
            color: #fff;
            font-size: 30px;
            padding-left: 14px;
            padding-top: 5px;
            transition: 0.3s ease;
        }
        .icons ion-icon:hover{
            color: #ff7200;
        }
        </style>
    </head>
    <body>
    
        <div class="main">
            <div class="navbar">
                <div class="icon">
                    <h2 class="logo">Addvic</h2>
                </div>
    
                <div class="menu">
                    <ul>
                        <li><a href="/HOME">HOME</a></li>
                        <li><a href="/ABOUT">ABOUT</a></li>
                        <li><a href="/SERVICE">SERVICE</a></li>
                        <li><a href="/DESIGN">DESIGN</a></li>
                        <li><a href="/CONTACT">CONTACT</a></li>
                    </ul>
                </div>
    
                <div class="search">
                    <input class="srch" type="search" name="" placeholder="Type To text">
                    <a href="#"> <button class="btn">Search</button></a>
                </div>
    
            </div> 
            <div class="content">
                <h1>Web Design & <br><span>Development</span> <br>Course</h1>
                <p class="par">Addvic Technology Is A Branding Solutions At One Stop.To ensure your company 
                    <br>a reachable online presence - 
                     <br> E-commerence websites can work wonder into a reality,we are there to serve you right. <br /><br />
                    
                    <button class="cn"><a href="#">JOIN US</a></button>
    
                    <div class="form">
                        <h2>Login Here</h2>
                        <input type="email" name="email" placeholder="Enter Email Here">
                        <input type="password" name="" placeholder="Enter Password Here">
                        <button class="btnn"><a href="#">Login</a></button>
    
                        <p class="link">Don't have an account<br>
                        <a href="#">Sign up </a> here</a></p>
                        <p class="liw">Log in with</p>
    
                        <div class="icons">
                            <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
                            <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
                            <a href="#"><ion-icon name="logo-twitter"></ion-icon></a>
                            <a href="#"><ion-icon name="logo-google"></ion-icon></a>
                            <a href="#"><ion-icon name="logo-skype"></ion-icon></a>
                        </div>
                    </div>
                        </div>
                    </div>
            </div>
        </div>
        <script src="https://unpkg.com/ionicons@5.4.0/dist/ionicons.js"></script>
    </body>
    </html>`);
   });

   
   app.get('/HOME', (req, res) =>{
    res.send(`
    <h3 style="text-align:end";><a href="/HOME"></a></h3><marquee><h2 style="color:red";>WELCOME TO THE <b style="color:blue">ADDVIC</b> TECHNOLOGY , EFFICIENT AND EFFECTIVE BRANDING SOLUTIONS AT ONE STOP .!</h2></marquee>
    <html>
    <style>
    body{
        background:lightgreen;
        border:2px solid black;
    }
    
    </style>
    <body>
    <button><h1 style="color:blue";><marquee direction="down" scrollamount="5"><i>Available Course</i></marquee></h1></button>
    <ul>
      <h3><li>Web Development</li><br />
      <li>Digital Marketing</li><br />
      <li>Angular Developer</li><br />
      <li>Java Developer</li><br />
      <li>Software Testing</li><br />
      <li>React Developer</li><br />
      <li>Python Developer</li><br />
      <li>PHP Developer</li><br />
      <li>MERN Stack Developer</li></h3> 
    </ul>  
    </body>
    </html>`);
   });
   
   app.get('/ABOUT', (req, res) =>{
    res.send(`<h3 style="text-align:end";><a href="/ABOUT"></a></h3>
    <html>
    <style>
    body{
        background-color:lightblue;
        border:2px solid black;
    }
    </style>
    <body>
    <h3>ABOUT US :</h3>
    <h4>At Addvic Technology (OPC) Pvt Ltd, we deliver innovative and creative products and services keeping in focus Information technology,Mechanical field and Digital Marketing. 
    We work round the clock to provide you these services which would enhance the business productivity and drive profitability. Our business strategy is to ensure the highest quality product, complete customer satisfaction, timely delivery of solutions, and the greatest value for money available in the industry.<br /><br />Our focus is on delivering a high degree of product user-friendliness by combining high-end technology solutions and easy-to-use applications.
Addvic Technology is a ISO 9001:2015 Certified Institute and Recognized by Govt. of India.
We are a Group of Experienced Industry Professionals dealing with IT and Mechanical Training and Services.</h4>
<ol>
<h3>Our Features:</h3>
<li>Government Authorized Certifications.</li>
<li>One to One Training.</i>
<li>Daily Practice with numerous Assignments.</li>
<li>24x7 Online Assistance.</li>
<li>Experienced Industry Professionals as Trainer.</li>
<li>After completion of Course, free Internships for 2 Weeks.</li>
</ol>

<ul>
<h3>Specialties</h3>
<li>Digital marketing service.</li>
<li>Graphics Design.</li>
<li>Web Design.</li>
<li>Web Development.</li> 
<li>SEO Content Writing.</li> 
<li>Mechanical Design.
<li>Training.</li>
<li>Services.</li>
<li>Programming Language.</li>
<li>AutoCAD.</li> 
<li>Logo Design.</li>
<li>Website.</li> 
<li>and Bulk SMS.</li>
</ul>
    </body>
    </html>
    <style>
    a:hover{
        background-color:yellow;
    }
     </style>
    <button><h4 style="color:blue";><a href="/More"> Know More About ADDVIC</a></h4></button>
    <h3 style="text-align:end";></h3><a href="/ABOUT"></a><html>
    <head>
    <style>
    body{
        background-color:lightblue;
        border:2px solid black;
    }
    
    </style>`);
   });



   app.get('/SERVICE', (req, res) =>{
    res.send(`<html>
    <style>
    body{
   background-color:lightblue;
   border:2px solid black;
   }
   </style>
    <ul>
    <h2 style="color:red;">SERVICES</h2>
    <h4><li>Digital marketing service.</li>
    <li>Graphics Design.</li>
    <li>Web Design.</li>
    <li>Web Development.</li> 
    <li>SEO Content Writing.</li> 
    <li>Mechanical Design.</li>
    <li>Programming Language.</li>
    <li>AutoCAD.</li> 
    <li>Logo Design.</li>
    <li>Website.</li> 
    <li>and Bulk SMS.</li></h4>
   </ul>
   
   <h3>Industries :</h3>
   <ul>
   <li>IT Services and IT Consulting</li>
   </ul>
   <h3>Company size :</h3>
   <ul>
   <li>11-50 employees</li>
   </ul>
   <h3>Headquarters :</h3>
   <ul>
   <li>Pune, Maharashtra</li>
   </ul>
   <h3>Type :</h3>
   <ul>
   <li>Privately Held</li>
   </ul>
   <h3>Founded :<h3>
   <ul>
   <li>2018</li>
   </ul>
   </body>
   </html>`);
   });
   
app.get('/More', (req, res) =>{
       res.send(`<html>
       <body>
       <style>
    body{
     background-color:lightblue;
     border:2px solid black;
 }
 </style>
 <h2>About:</h2>
      <p>This is Rajat Warade, CEO of Addvic Technology (OPC) Pvt Ltd.
       
       I have always been passionate about Technology and how it impacts the way we conduct our business.
       
       I have built successful teams delivering awesome products for our clients and industrial level of teaching to the students. As CEO, played multiple roles in Leadership Development, Sales, Marketing Strategy and Technical field – Have used my experience them make disciplined and proactive technology investment decisions.
       </p>
       <h2>Skills:</h2>
       <ul>
       <li>· Entrepreneurship ­- Product Management, Team Building, Technology, Development, Customer Relationship, Business Plan.</li>
       <li>· Web Development – Analytical, Interpersonal, Responsive Design, Visual Studio Code, Graphic Design, UI/UX Design, IOS, and Android.</li>
       <li>· Sales and Business – Communication, Social Selling, Time Management, Planning, Judgment, Active Listening, Decision Making, Consulting.</li>
       </ul>
       <h2>Specialties:</h2>
       
       <p>Business Intelligence, Web Development, Networking, Application Development, Data Center Management, Information Technology, Marketing, Operations Management.
       Addvic Technology (Opc) Pvt Ltd in Anand Nagar, Pune is a top player in the category Computer Training Institutes in the Pune. <br />This well-known establishment acts as a one-stop destination servicing customers both local and from other parts of Pune. 
       Over the course of its journey, this business has established a firm foothold in it’s industry.<br /> The belief that customer satisfaction is as important as their products and services, have helped this establishment garner a vast base of customers, which continues to grow by the day. 
       This business employs individuals that are dedicated towards their respective roles and put in a lot of effort to achieve the common vision and larger goals of the company. In the near future, this business aims to expand its line of products and services and cater to a larger client base.
        In Pune, this establishment occupies a prominent location in Anand Nagar.<br /><br /> It is an effortless task in commuting to this establishment as there are various modes of transport readily available. 
        It is at Sinhagad Road, Above Dr.dudhbhate Netralay, which makes it easy for first-time visitors in locating this establishment. 
        It is known to provide top service in the following categories: Computer Training Institutes, Tally Training Institutes, Digital Marketing Courses, AUTOCAD Training Institutes, CAD Training Institutes, Graphic Training Institutes, Computer Training Institutes For Python, Computer Training Institutes For Java.</p>
       
       `)
    })


   app.get('/DESIGN', (req, res) =>{
    res.send(`<html>
    <style>
    body{
        background: #221e28;
     border:2px solid black;
 }
 </style>
   <body>
 <h3><a href="/DESIGN"></a></h3><h2 style="color:red";> Please Type Feedback</h2><textarea></textarea><br /><br />
 <button style="background-color:lightgreen">SEND</button> <button style="background-color:lightgreen";>CANCEL</button>
   </body>
   </html>`);
   });



   app.get('/CONTACT', (req, res) =>{
    res.send(`<style>
    body{
        background: linear-gradient(to top, rgba(0,0,0,0.5)50%,rgba(0,0,0,0.5)50%);
    }
    *{
    </style>
    <h2 style="text-align:end";><h2><a href="/CONTACT"></a><h2 style="background-color:yellow";>For Further Queries Call Us Now</h2> <h1 style="color:blue";><button style="background-color:lightgreen";>+91 7758941912</button></h1>
    <h2>Email:</h2>
    <h3 style="color:blue"><u>info@addvic.com</u></h3>
    <div style="background-color:black">
    <h2 style="color:white">ADDRESS :</h2>
    <h3 style="color:white">Chanakya Nagari,3rd floor,Sinhgad Road,Anand Nagar,pune-411051</h3></div>`);
});
   
   
   
   

   app.listen(PORT,()=>{
    console.log(" Hello Shrikant Welcome To The Back End .!");
})









