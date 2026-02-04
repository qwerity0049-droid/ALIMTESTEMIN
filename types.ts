
import React from 'react';

export type RenovationType = 'Косметический' | 'Капитальный' | 'Под ключ';

export interface QuizState {
  step: number;
  type: RenovationType | null;
  area: number;
  budget: string | null;
  name: string;
  phone: string;
  agreed: boolean;
}

export interface PricingPlan {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}
