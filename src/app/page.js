
import BlogSection from "./(components)/Blog";
import FAQs from "./(components)/FAQS";
import Hero from "./(components)/Hero";
import Newsletter from "./(components)/NewsLetter";
import QueryForm from "./(components)/QueryForm";
import Services from "./(components)/ServicesSEction";
import MeetTheTeam from "./(components)/TeamMembers";
import WhyUs from "./(components)/WhyComapny";

export default function Home() {
  return (
    <div>
      <Hero/>
      <WhyUs/>
      <Services/>
      {/* <MeetTheTeam/> */}
      <BlogSection/>
      <FAQs/>
      <QueryForm/>
      <Newsletter/>
      {/* <h1 className="text-4xl font-bold text-center my-8">Welcome to My Site</h1> */}
      {/* <p className="text-center">This is the home page content.</p> */}
    </div>
  );
}
