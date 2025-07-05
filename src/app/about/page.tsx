import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";


export default function AboutPage() {
 return (
   <div className="container mx-auto px-4 py-16 md:py-24 max-w-6xl">
     <Button
       asChild
       size="lg"
       className="mb-12 group shadow-md hover:shadow-lg transition-all duration-300 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white"
     >
       <Link href="/#about-us">
         <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
         Back to Home
       </Link>
     </Button>


     <div className="text-center mb-16">
       <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-primary bg-primary/10 rounded-full">
         OUR JOURNEY
       </span>
       <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tight text-foreground mb-4">
         Our Story
       </h1>
       <div className="relative max-w-2xl mx-auto">
         <p className="text-xl text-foreground/80">
           The full story behind Nodebrew's mission and vision
         </p>
         <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary/30 rounded-full"></div>
       </div>
     </div>


     <div className="max-w-3xl mx-auto space-y-8 text-lg text-foreground/90 leading-relaxed">
       <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-gray-100/50">
         <p className="mb-6">
           Welcome to the full story of Nodebrew! We're excited to share more about our journey,
           values, and the incredible community we're building together.
         </p>


         <p className="mb-6">
           Nodebrew was founded with a simple yet powerful vision: to create a
           space where women in technology can connect, learn, and thrive. We
           believe in the power of community to foster growth, innovation, and
           leadership.
         </p>
       </div>


       <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-gray-100/50">
         <h2 className="text-2xl font-semibold text-foreground mb-4">
           Our Core Values
         </h2>
         <ul className="space-y-4">
           <li className="flex items-start">
             <div className="bg-primary/10 text-primary rounded-full p-2 mr-4 flex-shrink-0">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                 <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                 <polyline points="22 4 12 14.01 9 11.01"></polyline>
               </svg>
             </div>
             <div>
               <strong className="text-foreground">Inclusivity:</strong> Creating a welcoming environment for everyone.
             </div>
           </li>
           <li className="flex items-start">
             <div className="bg-primary/10 text-primary rounded-full p-2 mr-4 flex-shrink-0">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                 <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                 <polyline points="22 4 12 14.01 9 11.01"></polyline>
               </svg>
             </div>
             <div>
               <strong className="text-foreground">Empowerment:</strong> Providing resources and support for personal and professional growth.
             </div>
           </li>
           <li className="flex items-start">
             <div className="bg-primary/10 text-primary rounded-full p-2 mr-4 flex-shrink-0">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                 <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                 <polyline points="22 4 12 14.01 9 11.01"></polyline>
               </svg>
             </div>
             <div>
               <strong className="text-foreground">Collaboration:</strong> Fostering connections and teamwork.
             </div>
           </li>
           <li className="flex items-start">
             <div className="bg-primary/10 text-primary rounded-full p-2 mr-4 flex-shrink-0">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                 <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                 <polyline points="22 4 12 14.01 9 11.01"></polyline>
               </svg>
             </div>
             <div>
               <strong className="text-foreground">Innovation:</strong> Encouraging creative problem-solving and learning.
             </div>
           </li>
         </ul>
       </div>


       <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-gray-100/50">
         <p className="mb-6">
           Stay tuned as we continue to build this community and share more details
           about our impact, programs, and the amazing individuals who make
           Nodebrew what it is.
         </p>


         <p>
           In the meantime, feel free to explore other sections of our website or
           join our community discussions!
         </p>
       </div>
     </div>
   </div>
 );
}
