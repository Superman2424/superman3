import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { MapPin, Phone, Clock } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-10 p-6 max-w-5xl mx-auto">
      <header className="text-center space-y-2">
        <img src="/LogoSuperman.png" alt="Superman Painting LLC Logo" className="mx-auto h-24" />
        <h1 className="text-4xl font-bold">Superman Painting LLC</h1>
        <p className="text-lg">Residential, Commercial & Industrial Painting Contractor</p>
      </header>

      {/* Contact, Booking, Quote sections */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Contact Us</h2>
        <div className="space-y-2">
          <div className="flex items-center gap-2"><Phone /> <span>(541) 537-0808 or (470) 303-7533</span></div>
          <div className="flex items-center gap-2"><MapPin /> <span>116 James Dr, Palatka, FL 32177</span></div>
          <div className="flex items-center gap-2"><Clock /> <span>Mon–Fri: 9:00 AM – 5:00 PM</span></div>
        </div>
        <form action="https://formspree.io/f/yourformid" method="POST" className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Input placeholder="Name" name="name" required />
          <Input placeholder="Email" type="email" name="email" required />
          <Input placeholder="Phone" name="phone" />
          <Input placeholder="Project Type (Residential, Commercial, Industrial)" name="type" />
          <Textarea placeholder="Message or Quote Details" name="message" className="md:col-span-2" />
          <Button type="submit" className="md:col-span-2 w-full">Send Message</Button>
        </form>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Book a Project</h2>
        <form action="https://formspree.io/f/yourformid" method="POST" className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Input placeholder="Full Name" name="name" required />
          <Input placeholder="Email Address" type="email" name="email" required />
          <Input placeholder="Phone Number" name="phone" />
          <Input placeholder="Preferred Date" type="date" name="date" />
          <Textarea placeholder="Project Description" name="description" className="md:col-span-2" />
          <Button type="submit" className="md:col-span-2 w-full">Request Booking</Button>
        </form>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Request a Quote</h2>
        <form action="https://formspree.io/f/yourformid" method="POST" className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Input placeholder="Full Name" name="name" required />
          <Input placeholder="Email Address" type="email" name="email" required />
          <Input placeholder="Phone Number" name="phone" />
          <Input placeholder="Project Address or Location" name="location" />
          <Input placeholder="Project Type (Residential, Commercial, Industrial)" name="type" />
          <Input placeholder="Approximate Square Footage" name="square_footage" />
          <Textarea placeholder="Brief Project Description" name="description" className="md:col-span-2" />
          <Button type="submit" className="md:col-span-2 w-full">Request Quote</Button>
        </form>
      </section>

      <footer className="border-t pt-6 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Superman Painting LLC. All rights reserved.</p>
        <p>Licensed & Insured | Serving Florida and Nationwide</p>
      </footer>
    </div>
  );
}
