import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import logoo from '../../assets/logo/logo.png'
import Image from "next/image";
export default function AboutUsSection() {
 return (
   <section id="about-us" className="py-16 md:py-24 bg-gradient-to-b from-background to-gray-50/50">
     <div className="container mx-auto px-4 md:px-8 max-w-6xl">
       <div className="text-center mb-16">
         <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-primary bg-primary/10 rounded-full">
           WHO WE ARE
         </span>
         <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight text-foreground">
           About Nodebrew
         </h2>
         <div className="mt-4 relative max-w-2xl mx-auto">
           <p className="text-xl text-foreground/80">
             Discover our mission and the impact we're making.
           </p>
           <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary/30 rounded-full"></div>
         </div>
       </div>


       <Card className="overflow-hidden shadow-2xl border border-gray-100/50 bg-white/90 backdrop-blur-sm">
         <CardContent className="p-8 md:p-12 lg:p-16">
           <div className="flex flex-col md:flex-row gap-8 md:gap-12">
             <div className="md:w-1/3 flex justify-center">
 <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-primary/20">
   <Image
     src={logoo}
     alt="About Nodebrew"
     width={256}
     height={256}
     className="w-full h-full object-cover"
   />
 </div>
</div>
            
             <div className="md:w-2/3">
               <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
                 Our Community, Our Strength
               </h3>
               <p className="text-foreground/90 mb-8 leading-relaxed text-lg">
                 Nodebrew is a global community dedicated to fostering an inclusive
                 environment for women in technology. We aim to empower our members
                 through mentorship, skill development, and networking
                 opportunities, creating a supportive space where women can thrive
                 and lead in the tech industry. Our initiatives focus on bridging
                 gender gaps and promoting diversity across all tech roles.
               </p>
               <div className="flex justify-start">
                 <Button
                   asChild
                   size="lg"
                   className="shadow-md hover:shadow-lg transition-all duration-300 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white"
                 >
                   <Link href="/about">
                     Read Full Story
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                       <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                     </svg>
                   </Link>
                 </Button>
               </div>
             </div>
           </div>
         </CardContent>
       </Card>
     </div>
   </section>
 );
}








