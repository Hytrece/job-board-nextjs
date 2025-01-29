import {
    Coffee,
    Building2,
    Hotel,
    Trees,
    Building,
    Code,
    Briefcase,
    ShoppingBag,
    Hammer,
    PlaneTakeoff,
    HardHat,
    ScrollText,
    HeartPulse,
    Server,
    GraduationCap,
    ShieldCheck,
    CircuitBoard,
    PaintBucket,
    Wine,
    Tractor,
    type LucideIcon
  } from 'lucide-react';
  
  export type JobKeyword = 
    | 'cafe'
    | 'construction'
    | 'hotel'
    | 'farm'
    | 'office'
    | 'developer'
    | 'labour'
    | 'retail'
    | 'tourism'
    | 'hospitality'
    | 'admin'
    | 'healthcare'
    | 'it'
    | 'teaching'
    | 'service'
    | 'manufacturing'
    | 'arts'
    | 'bar'
    | 'agriculture';
  
  export const jobIconsMap: Record<JobKeyword, LucideIcon> = {
    cafe: Coffee,
    construction: Building2,
    hotel: Hotel,
    farm: Trees,
    office: Building,
    developer: Code,
    labour: HardHat,
    retail: ShoppingBag,
    tourism: PlaneTakeoff,
    hospitality: Briefcase,
    admin: ScrollText,
    healthcare: HeartPulse,
    it: Server,
    teaching: GraduationCap,
    service: ShieldCheck,
    manufacturing: CircuitBoard,
    arts: PaintBucket,
    bar: Wine,
    agriculture: Tractor
  };