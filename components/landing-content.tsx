"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Alishan Shaikh",
    avatar: "A",
    company: "Ask Digitals",
    title: "Frontend Developer",
    description: "This is the best application I've ever used!",
  },
  {
    name: "Sarthak",
    avatar: "S",
    title: "UI Developer",
    description: "I use this daily for generating new photos and Code",
  },
  {
    name: "Arbaj Pathan",
    avatar: "A",
    title: "System Administrator",
    description: "This app has changed my life, cannot imagine working without it!",
  },
  {
    name: "Irfan Pathan",
    avatar: "I",
    title: "Business Analyst",
    description: "The best in class, definitely worth the premium subscription!",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">Testimonials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card key={item.description} className="bg-[#192339] border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}