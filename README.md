# Coding Challenge
* Framework: .NETCore 2.0.3
* IDE: Visual Studio Enterprise 2017 (Version 15.6.6)
* ORMs: Entity Framework and AutoMapper
* Database: MS SQL Server 2016 (local, Windows Auth)
* Testing framework: xUnit
* Frontend: React + Redux

### Setup notes
As long as you have VS2017 and SQL Server installed, you should be able to run the solution. It should create a database with one table with some random records the first time it runs (as per Coding Challenge document)

### Testing notes
I mentioned that I was going to use NUnit but I changed my mind, since I remembered that I used xUnit once and I liked it more. I created tests for 2 methods of the controller only, since full code coverage wasn't required

### Frontend notes
I never used React before but I noticed that the latest version of Visual Studio comes with two boilerplate templates for React: just React and React + Redux. And since I've been keen to learn React for a while and you gave me plenty of time to do this, I took this opportunity to play with it. I used the latter-mentioned template for creating the project, and then bootstrapped it from there. Tried to make it as clean as possible with my limited experience and there is probably room for improvement